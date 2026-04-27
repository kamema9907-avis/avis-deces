import requests
from bs4 import BeautifulSoup
import json
import os
import re
from datetime import datetime, timedelta

JSON_FILE = 'donnees_deces.json'

MOIS_FR = {
    'janvier': 1, 'février': 2, 'fevrier': 2, 'mars': 3, 'avril': 4,
    'mai': 5, 'juin': 6, 'juillet': 7, 'août': 8, 'aout': 8,
    'septembre': 9, 'octobre': 10, 'novembre': 11, 'décembre': 12, 'decembre': 12
}

def load_existing_data():
    if os.path.exists(JSON_FILE):
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                return []
    return []

def save_data(data):
    # Sauvegarde JSON classique
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        
    # Sauvegarde en format JS pour que la page HTML locale puisse la lire sans serveur web
    with open('donnees_deces.js', 'w', encoding='utf-8') as f:
        f.write("const donneesDeces = ")
        json.dump(data, f, ensure_ascii=False, indent=4)
        f.write(";")

def extract_date_from_text(text):
    """Cherche une date au format '21 avril 2026' dans le texte."""
    pattern = r'(\d{1,2})\s+([a-zA-Zûéè]+)\s+(\d{4})'
    match = re.search(pattern, text.lower())
    if match:
        jour = int(match.group(1))
        mois_str = match.group(2)
        annee = int(match.group(3))
        mois = MOIS_FR.get(mois_str, 1)
        return datetime(annee, mois, jour)
    return None

def scrape_montpetit():
    print("Scraping Montpetit...")
    url = "https://avisdeces.emontpetit-fils.ca/avis/web/avis-deces-page"
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print("Erreur d'accès à Montpetit")
        return []
        
    soup = BeautifulSoup(response.text, 'html.parser')
    nouveaux_avis = []
    
    # Structure typique: les avis sont souvent dans des divs avec une classe spécifique
    # Nous allons chercher les liens qui mènent vers un avis-de-deces
    links = soup.find_all('a', href=re.compile(r'/avis-de-deces/'))
    
    processed_urls = set()
    
    for link in links:
        href = link.get('href')
        if not href.startswith('http'):
            href = "https://avisdeces.emontpetit-fils.ca" + href
            
        if href in processed_urls:
            continue
            
        nom = link.text.strip()
        if not nom or "avis" in nom.lower():
            continue
            
        # Chercher le parent pour extraire le texte et trouver la date
        parent = link.find_parent('div')
        if not parent:
            parent = link.find_parent('li')
            
        date_deces = None
        if parent:
            texte_parent = parent.text
            date_deces = extract_date_from_text(texte_parent)
            
        if date_deces and nom:
            nouveaux_avis.append({
                'nom': nom,
                'date_deces': date_deces.strftime('%Y-%m-%d'),
                'lien': href,
                'salon': 'E. Montpetit & fils'
            })
            processed_urls.add(href)
            
    return nouveaux_avis

def scrape_larin():
    print("Scraping J.A. Larin...")
    url = "https://www.jalarin.com/avis-de-deces/"
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print("Erreur d'accès à J.A. Larin")
        return []
        
    soup = BeautifulSoup(response.text, 'html.parser')
    nouveaux_avis = []
    
    # Dans WordPress, les articles ont souvent la classe 'entry' ou 'post'
    articles = soup.find_all('article')
    if not articles:
        # Tenter de trouver par balise titre si les articles ne sont pas clairs
        titres = soup.find_all('h2')
        for titre in titres:
            link = titre.find('a')
            if not link:
                continue
                
            href = link.get('href')
            nom = link.text.strip()
            
            parent = titre.find_parent('div')
            date_deces = extract_date_from_text(parent.text) if parent else None
            
            if date_deces and nom:
                nouveaux_avis.append({
                    'nom': nom,
                    'date_deces': date_deces.strftime('%Y-%m-%d'),
                    'lien': href,
                    'salon': 'J.A. Larin & Fils'
                })
    else:
        for article in articles:
            titre = article.find(['h2', 'h3'])
            if not titre: continue
            
            link = titre.find('a')
            if not link: continue
            
            href = link.get('href')
            nom = link.text.strip()
            
            texte = article.text
            date_deces = extract_date_from_text(texte)
            
            if date_deces and nom:
                nouveaux_avis.append({
                    'nom': nom,
                    'date_deces': date_deces.strftime('%Y-%m-%d'),
                    'lien': href,
                    'salon': 'J.A. Larin & Fils'
                })
                
    return nouveaux_avis

def scrape_mcgerrigle():
    print("Scraping McGerrigle...")
    url = "https://www.mcgerrigle.com/category/avis-de-deces-obituaries/"
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print("Erreur d'accès à McGerrigle")
        return []
        
    soup = BeautifulSoup(response.text, 'html.parser')
    nouveaux_avis = []
    
    # Trouver tous les titres h2 qui contiennent un lien
    titres = soup.find_all('h2')
    
    for titre in titres:
        link = titre.find('a')
        if not link:
            continue
            
        href = link.get('href')
        nom = link.text.strip()
        
        # Pour McGerrigle, la date de publication est souvent dans l'URL : /2026/04/25/
        match_date = re.search(r'/(\d{4})/(\d{2})/(\d{2})/', href)
        if match_date:
            annee = int(match_date.group(1))
            mois = int(match_date.group(2))
            jour = int(match_date.group(3))
            date_deces = datetime(annee, mois, jour)
            
            nouveaux_avis.append({
                'nom': nom,
                'date_deces': date_deces.strftime('%Y-%m-%d'),
                'lien': href,
                'salon': 'Résidence funéraire McGerrigle'
            })
            
    return nouveaux_avis

def main():
    print("Démarrage du scan quotidien...")
    existants = load_existing_data()
    
    # Créer un set des liens existants pour éviter les doublons
    liens_existants = {avis['lien'] for avis in existants}
    
    avis_montpetit = scrape_montpetit()
    avis_larin = scrape_larin()
    avis_mcgerrigle = scrape_mcgerrigle()
    
    tous_les_nouveaux = avis_montpetit + avis_larin + avis_mcgerrigle
    
    # Filtrer ceux qui datent de plus de 2 jours (pour être sûr de ne pas tout prendre)
    # ou garder seulement ceux du jour si vous préférez.
    aujourdhui = datetime.now()
    limite = aujourdhui - timedelta(days=2) # Garder les 2 derniers jours au cas où
    
    ajouts = 0
    for avis in tous_les_nouveaux:
        date_avis = datetime.strptime(avis['date_deces'], '%Y-%m-%d')
        if date_avis >= limite and avis['lien'] not in liens_existants:
            existants.insert(0, avis) # Ajouter au début
            liens_existants.add(avis['lien'])
            ajouts += 1
            print(f"Nouveau décès trouvé : {avis['nom']} ({avis['salon']})")
            
    if ajouts > 0:
        # Trier par date décroissante
        existants.sort(key=lambda x: x['date_deces'], reverse=True)
        save_data(existants)
        print(f"Mise à jour terminée. {ajouts} nouvel(aux) avis ajouté(s).")
    else:
        print("Aucun nouveau décès à enregistrer aujourd'hui.")

if __name__ == "__main__":
    main()
