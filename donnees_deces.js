const donneesDeces = [
    {
        "nom": "Mme Lucille Levac Lavigne",
        "date_deces": "2026-07-14",
        "lien": "https://www.jalarin.com/obituaries/mme-lucille-levac-lavigne/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-14"
    },
    {
        "nom": "M. Robert Leroux",
        "date_deces": "2026-07-13",
        "lien": "https://www.jalarin.com/obituaries/m-robert-leroux/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-14"
    },
    {
        "nom": "Carmen Lépine Charette",
        "date_deces": "2026-07-09",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/carmen-lepine-charette",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-14"
    },
    {
        "nom": "M. Gilles Gagné",
        "date_deces": "2026-07-09",
        "lien": "https://www.jalarin.com/obituaries/m-gilles-gagne-2/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-10"
    },
    {
        "nom": "Lucie Parent Couillard",
        "date_deces": "2026-07-07",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/lucie-parent-couillard",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-09"
    },
    {
        "nom": "Mme Francis Winter Desrochers",
        "date_deces": "2026-07-07",
        "lien": "https://www.jalarin.com/obituaries/mme-francis-winter-desrochers/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-08"
    },
    {
        "nom": "Marielle Quesnel Brunet",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1507-marielle-quesnel-brunet.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-07-07"
    },
    {
        "nom": "Janet Cavers (née Cook), 1940–2026",
        "date_deces": "2026-07-06",
        "lien": "https://www.mcgerrigle.com/2026/07/06/janet-cavers-nee-cook-1940-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-07-07"
    },
    {
        "nom": "Mme Rachel Beaudry Couture",
        "date_deces": "2026-07-06",
        "lien": "https://www.jalarin.com/obituaries/mme-rachel-beaudry-couture/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-07"
    },
    {
        "nom": "M. Steve Théorêt",
        "date_deces": "2026-07-06",
        "lien": "https://www.jalarin.com/obituaries/m-steve-theoret/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-07"
    },
    {
        "nom": "M. Bernard Goyette",
        "date_deces": "2026-07-06",
        "lien": "https://www.jalarin.com/obituaries/m-bernard-goyette/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-07"
    },
    {
        "nom": "Susan Swift",
        "date_deces": "2026-06-30",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/susan-swift",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-07"
    },
    {
        "nom": "Gaby \"Nini\" Gagnier Guérin",
        "date_deces": "2026-06-30",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/gaby-nini-gagnier-guerin",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-04"
    },
    {
        "nom": "Thérèse Gobeil",
        "date_deces": "2026-06-30",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/therese-gobeil",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-04"
    },
    {
        "nom": "M. Claude Thibault",
        "date_deces": "2026-07-02",
        "lien": "https://www.jalarin.com/obituaries/m-claude-thibault-2/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-07-03"
    },
    {
        "nom": "Donat Lalonde",
        "date_deces": "2026-06-25",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/donat-lalonde",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-03"
    },
    {
        "nom": "Agathe Ouellet Leroux",
        "date_deces": "2026-06-26",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/agathe-ouellet-leroux",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-03"
    },
    {
        "nom": "Raymond Rochon",
        "date_deces": "2026-06-30",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/raymond-rochon",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-03"
    },
    {
        "nom": "Thérèse Jean Tremblay",
        "date_deces": "2026-06-30",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/therese-jean-tremblay",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-03"
    },
    {
        "nom": "Lucille Élie Carrière",
        "date_deces": "2026-07-01",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/lucille-elie-carriere",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-03"
    },
    {
        "nom": "Toussaint Mainville",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1506-toussaint-mainville-2.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-07-01"
    },
    {
        "nom": "Robert Glenn Waller, 1961–2026",
        "date_deces": "2026-06-30",
        "lien": "https://www.mcgerrigle.com/2026/06/30/robert-glenn-waller-1961-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-07-01"
    },
    {
        "nom": "Serge Bergeron",
        "date_deces": "2026-06-29",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/serge-bergeron",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-07-01"
    },
    {
        "nom": "Léo Trottier",
        "date_deces": "2026-06-27",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/leo-trottier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-29"
    },
    {
        "nom": "Gérard Duquette",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1504-gerard-duquette.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-27"
    },
    {
        "nom": "M. Ghislain Henry",
        "date_deces": "2026-06-26",
        "lien": "https://www.jalarin.com/obituaries/m-ghislain-henry/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-27"
    },
    {
        "nom": "Anik Séguin",
        "date_deces": "2026-06-21",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/anik-seguin",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-27"
    },
    {
        "nom": "M. Wilfrid Bourget",
        "date_deces": "2026-06-25",
        "lien": "https://www.jalarin.com/obituaries/m-wilfrid-bourget/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-26"
    },
    {
        "nom": "Marie-Paule Bourbonnais",
        "date_deces": "2026-06-14",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/marie-paule-bourbonnais",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-26"
    },
    {
        "nom": "Rémi Gauthier",
        "date_deces": "2026-06-23",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/remi-gauthier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-26"
    },
    {
        "nom": "Ronald Rabideau, June 6, 1948 – June 18, 2026",
        "date_deces": "2026-06-25",
        "lien": "https://www.mcgerrigle.com/2026/06/25/ronald-rabideau-june-6-1948-june-18-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-06-25"
    },
    {
        "nom": "Reina Richer Rodrigue",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1503-reina-richer-rodrigue.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-25"
    },
    {
        "nom": "M. Guy St-Pierre",
        "date_deces": "2026-06-23",
        "lien": "https://www.jalarin.com/obituaries/m-guy-st-pierre/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-25"
    },
    {
        "nom": "M. Michel Leboeuf",
        "date_deces": "2026-06-23",
        "lien": "https://www.jalarin.com/obituaries/m-michel-leboeuf-3/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-25"
    },
    {
        "nom": "Marcel Forget",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1502-marcel-forget-2.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-23"
    },
    {
        "nom": "Yves Pelletier",
        "date_deces": "2026-06-19",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/yves-pelletier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-23"
    },
    {
        "nom": "Joanne Demers",
        "date_deces": "2026-06-17",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/joanne-demers",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-22"
    },
    {
        "nom": "Luce Legault",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1500-luce-legault-3.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-20"
    },
    {
        "nom": "Mme Fernande Trépanier Lacroix",
        "date_deces": "2026-06-19",
        "lien": "https://www.jalarin.com/obituaries/mme-fernande-trepanier-lacroix/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-20"
    },
    {
        "nom": "Kevin Dineen",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1497-kevin-dineen.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "Mme Ghislaine Bilodeau Gauthier",
        "date_deces": "2026-06-16",
        "lien": "https://www.jalarin.com/obituaries/mme-ghislaine-bilodeau-gauthier/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "M. Alain St-Onge",
        "date_deces": "2026-06-16",
        "lien": "https://www.jalarin.com/obituaries/m-alain-st-onge/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "M. André Poissant",
        "date_deces": "2026-06-18",
        "lien": "https://www.jalarin.com/obituaries/m-andre-poissant/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "Mme Denise Tremblay",
        "date_deces": "2026-06-18",
        "lien": "https://www.jalarin.com/obituaries/mme-denise-tremblay/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "Josaphat Ducas",
        "date_deces": "2026-06-12",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/josaphat-ducas",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "Lise Crevier",
        "date_deces": "2026-06-15",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/lise-crevier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-19"
    },
    {
        "nom": "Marie-Claire Charette Perrier",
        "date_deces": "2026-06-13",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/marie-claire-charette-perrier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-17"
    },
    {
        "nom": "Jeannette Dumas Métras, 1931–2026",
        "date_deces": "2026-06-15",
        "lien": "https://www.mcgerrigle.com/2026/06/15/jeannette-dumas-metras-1931-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-06-16"
    },
    {
        "nom": "Denis Collins",
        "date_deces": "2026-06-12",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/denis-collins",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-16"
    },
    {
        "nom": "Monique D'amour",
        "date_deces": "2026-06-12",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/monique-damour",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-16"
    },
    {
        "nom": "M. Maurice Des Alliers",
        "date_deces": "2026-06-15",
        "lien": "https://www.jalarin.com/obituaries/m-maurice-des-alliers/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-15"
    },
    {
        "nom": "M. Claude Perras",
        "date_deces": "2026-06-15",
        "lien": "https://www.jalarin.com/obituaries/m-claude-perras/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-15"
    },
    {
        "nom": "Mme Jeanne Claveau",
        "date_deces": "2026-06-12",
        "lien": "https://www.jalarin.com/obituaries/mme-jeanne-claveau/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-13"
    },
    {
        "nom": "André Larocque",
        "date_deces": "2026-06-08",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/andre-larocque",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-13"
    },
    {
        "nom": "Claude Lafleur",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1496-claude-lafleur.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-12"
    },
    {
        "nom": "M. Pierre Leboeuf",
        "date_deces": "2026-06-11",
        "lien": "https://www.jalarin.com/obituaries/m-pierre-leboeuf/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-12"
    },
    {
        "nom": "M. Jean-Louis Lacelle",
        "date_deces": "2026-06-10",
        "lien": "https://www.jalarin.com/obituaries/m-jean-louis-lacelle/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-11"
    },
    {
        "nom": "Mme Rita Moreau",
        "date_deces": "2026-06-10",
        "lien": "https://www.jalarin.com/obituaries/mme-rita-moreau/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-11"
    },
    {
        "nom": "Luc Garand",
        "date_deces": "2026-06-08",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/luc-garand",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-11"
    },
    {
        "nom": "Gerald Knox",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1495-gerald-knox.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-10"
    },
    {
        "nom": "Mme Lyne Parent",
        "date_deces": "2026-06-09",
        "lien": "https://www.jalarin.com/obituaries/mme-lyne-parent/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-10"
    },
    {
        "nom": "Lise Bourassa",
        "date_deces": "2026-06-06",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/lise-bourassa",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-10"
    },
    {
        "nom": "Sylvie Ranger",
        "date_deces": "2026-06-07",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/sylvie-ranger",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-10"
    },
    {
        "nom": "M. Rolland Legault",
        "date_deces": "2026-06-08",
        "lien": "https://www.jalarin.com/obituaries/m-rolland-legault/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-08"
    },
    {
        "nom": "Mme Gwendoline Simmonds Campbell",
        "date_deces": "2026-06-05",
        "lien": "https://www.jalarin.com/obituaries/mme-gwendoline-simmonds-campbell/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-06"
    },
    {
        "nom": "M. Médard Deschambault",
        "date_deces": "2026-06-05",
        "lien": "https://www.jalarin.com/obituaries/m-medard-deschambault/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-06"
    },
    {
        "nom": "Isabelle Rancourt",
        "date_deces": "2026-06-02",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/isabelle-rancourt",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-06"
    },
    {
        "nom": "Doris Courchesne (née Smith)",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1494-doris-courchesne-nee-smith-2.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-05"
    },
    {
        "nom": "M. Ronald Durand",
        "date_deces": "2026-06-03",
        "lien": "https://www.jalarin.com/obituaries/m-ronald-durand/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-05"
    },
    {
        "nom": "Mme Laura Dubaere Legault",
        "date_deces": "2026-06-03",
        "lien": "https://www.jalarin.com/obituaries/mme-laura-dubaere-legault/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-05"
    },
    {
        "nom": "Mme Lucie Julien",
        "date_deces": "2026-06-04",
        "lien": "https://www.jalarin.com/obituaries/mme-lucie-julien/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-05"
    },
    {
        "nom": "Ronnie Dariel Beltre Gonzalez",
        "date_deces": "2026-05-28",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/ronnie-dariel-beltre-gonzalez",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-05"
    },
    {
        "nom": "Denis Leduc",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1492-denis-leduc.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-06-02"
    },
    {
        "nom": "Jean «Ti-Jean» André",
        "date_deces": "2026-05-29",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/jean-ti-jean-andre",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-06-02"
    },
    {
        "nom": "M. Gilles Durnin",
        "date_deces": "2026-06-01",
        "lien": "https://www.jalarin.com/obituaries/m-gilles-durnin/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-06-01"
    },
    {
        "nom": "Thérèse Lepage",
        "date_deces": "2026-05-27",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/therese-lepage",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-31"
    },
    {
        "nom": "Mme Anna Chiodini",
        "date_deces": "2026-05-29",
        "lien": "https://www.jalarin.com/obituaries/mme-anna-chiodini/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-30"
    },
    {
        "nom": "Carole Langlois",
        "date_deces": "2026-05-16",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/carole-langlois-0",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-30"
    },
    {
        "nom": "Eileen Cousineau",
        "date_deces": "2026-05-27",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/eileen-cousineau",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-30"
    },
    {
        "nom": "Mme Huguette Guionnet Rochefort",
        "date_deces": "2026-05-29",
        "lien": "https://www.jalarin.com/obituaries/mme-huguette-guionnet-rochefort/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-29"
    },
    {
        "nom": "Denise Bolduc",
        "date_deces": "2026-05-28",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/denise-bolduc",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-29"
    },
    {
        "nom": "Mme Pierrette Lavoie Daoust",
        "date_deces": "2026-05-28",
        "lien": "https://www.jalarin.com/obituaries/mme-pierrette-lavoie-daoust/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-29"
    },
    {
        "nom": "Réal \"Mano\" Poirier",
        "date_deces": "2026-05-26",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/real-mano-poirier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-29"
    },
    {
        "nom": "M. Bernard Giroux",
        "date_deces": "2026-05-27",
        "lien": "https://www.jalarin.com/obituaries/m-bernard-giroux-2/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-28"
    },
    {
        "nom": "Mme Micheline Laurin",
        "date_deces": "2026-05-25",
        "lien": "https://www.jalarin.com/obituaries/mme-micheline-laurin/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-26"
    },
    {
        "nom": "M. Daniel Loiselle",
        "date_deces": "2026-05-25",
        "lien": "https://www.jalarin.com/obituaries/m-daniel-loiselle/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-26"
    },
    {
        "nom": "Mme Ghislaine Grenon",
        "date_deces": "2026-05-26",
        "lien": "https://www.jalarin.com/obituaries/mme-ghislaine-grenon/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-26"
    },
    {
        "nom": "M. Mario Robineault",
        "date_deces": "2026-05-26",
        "lien": "https://www.jalarin.com/obituaries/m-mario-robineault/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-26"
    },
    {
        "nom": "M. Yves Goyette",
        "date_deces": "2026-05-26",
        "lien": "https://www.jalarin.com/obituaries/m-yves-goyette/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-26"
    },
    {
        "nom": "Pierre Lecavalier",
        "date_deces": "2026-05-19",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/pierre-lecavalier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-26"
    },
    {
        "nom": "Monique Haineault",
        "date_deces": "2026-05-22",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/monique-haineault",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-24"
    },
    {
        "nom": "M. Jeannot Charest",
        "date_deces": "2026-05-23",
        "lien": "https://www.jalarin.com/obituaries/m-jeannot-charest/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-23"
    },
    {
        "nom": "Huguette Trépanier Brunet",
        "date_deces": "2026-05-12",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/huguette-trepanier-brunet",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-23"
    },
    {
        "nom": "Benoit Pinard",
        "date_deces": "2026-05-19",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/benoit-pinard",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-23"
    },
    {
        "nom": "Denise Hurteau Legros",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1491-denise-hurteau-legros.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "Carole Langlois",
        "date_deces": "2026-05-16",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/carole-langlois",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "Urbain Chénard",
        "date_deces": "2026-05-16",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/urbain-chenard",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "Stéphanie Masse",
        "date_deces": "2026-05-20",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/stephanie-masse",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "Noël Marcil",
        "date_deces": "2026-05-21",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/noel-marcil",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "M. Jean Perreault",
        "date_deces": "2026-05-21",
        "lien": "https://www.jalarin.com/obituaries/m-jean-perreault/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "M. Jules Cardinal",
        "date_deces": "2026-05-21",
        "lien": "https://www.jalarin.com/obituaries/m-jules-cardinal/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-22"
    },
    {
        "nom": "Frédérick Odegard-Patenaude, 2001–2026",
        "date_deces": "2026-05-21",
        "lien": "https://www.mcgerrigle.com/2026/05/21/frederic-odegard-patenaude-2001-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Lise Poirier Gauthier",
        "date_deces": "2026-05-19",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/lise-poirier-gauthier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Thérèse Taillefer Brunet",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1470-therese-taillefer-brunet.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Fernande Hurteau Boyer",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1471-fernande-hurteau-boyer.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Gordon R. Johnson",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1472-gordon-r-johnson.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Denise Latreille",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1473-denise-latreille.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Lise Quenneville",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1475-lise-quenneville.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Gaëtane Haineault",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1476-gaetane-haineault.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Thérèse Dolan née Lefebvre",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1477-therese-dolan-nee-lefebvre.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Theophil Stettler",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1478-theophil-stettler.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Keith Arnold Rennie  (Republished)",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1479-keith-arnold-rennie-reminder.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Nicole Lalonde Cosgrove",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1480-nicole-lalonde-cosgrove.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Didier LeMouëllic",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1481-didier-le-mouellic.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Erik Murphy",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1482-erik-murphy.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Alberte Daoust",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1483-alberte-daoust.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Marion Showers Lalonde",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1484-marion-showers-lalonde.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Marion Mason ( Bannerman)",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1485-marion-mason-bannerman.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Fernande Létourneau Dionne",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1486-fernande-letourneau-dionne.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Ruth Pringle Leduc",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1487-ruth-pringle-leduc.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Roger Jr. Parisien (Republished)",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1488-roger-jr-parisien-republished.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Yvan Legault",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1489-yvan-legault.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Lise Dumouchel Villeneuve",
        "date_deces": "",
        "lien": "https://www.rodriguemontpetitfils.com/fr/component/content/article/1490-lise-dumouchel-villeneuve.html?catid=34:avis-de-deces&Itemid=431",
        "salon": "Rodrigue Montpetit & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Mme Denise Bousquet Gagnon",
        "date_deces": "2026-05-20",
        "lien": "https://www.jalarin.com/obituaries/mme-denise-bousquet-gagnon/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Mme Denise Beaudry",
        "date_deces": "2026-05-20",
        "lien": "https://www.jalarin.com/obituaries/mme-denise-beaudry/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Mme Sylvie Lachance",
        "date_deces": "2026-05-20",
        "lien": "https://www.jalarin.com/obituaries/mme-sylvie-lachance/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "M. Gérald Fournier",
        "date_deces": "2026-05-20",
        "lien": "https://www.jalarin.com/obituaries/m-gerald-fournier/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-21"
    },
    {
        "nom": "Mme Yvette Samson Viau",
        "date_deces": "2026-05-20",
        "lien": "https://www.jalarin.com/obituaries/mme-yvette-samson-viau/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-20"
    },
    {
        "nom": "Yves Caza",
        "date_deces": "2026-05-17",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/yves-caza",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-20"
    },
    {
        "nom": "Lise Talbot Thellen",
        "date_deces": "2026-05-15",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/lise-talbot-thellen",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-20"
    },
    {
        "nom": "Aline Dumas, 1928–2026",
        "date_deces": "2026-05-19",
        "lien": "https://www.mcgerrigle.com/2026/05/19/aline-dumas-1928-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-19"
    },
    {
        "nom": "Odette Frappier, 1933–2026",
        "date_deces": "2026-05-19",
        "lien": "https://www.mcgerrigle.com/2026/05/19/odette-frappier-obit-modifie-le-19-05-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-19"
    },
    {
        "nom": "Claudette St-Onge",
        "date_deces": "2026-05-15",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/claudette-st-onge",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-19"
    },
    {
        "nom": "Francine Delaronde",
        "date_deces": "2026-05-15",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/francine-delaronde",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-18"
    },
    {
        "nom": "Mme Denise Robidoux Dagenais",
        "date_deces": "2026-05-16",
        "lien": "https://www.jalarin.com/obituaries/mme-denise-robidoux-dagenais/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-17"
    },
    {
        "nom": "M. Lionel Roux",
        "date_deces": "2026-05-15",
        "lien": "https://www.jalarin.com/obituaries/m-lionel-roux/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-16"
    },
    {
        "nom": "M. Jean-Marc Durocher",
        "date_deces": "2026-05-15",
        "lien": "https://www.jalarin.com/obituaries/m-jean-marc-durocher/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-16"
    },
    {
        "nom": "Richard Leroux",
        "date_deces": "2026-05-13",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/richard-leroux",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-16"
    },
    {
        "nom": "Jean Lafrenière",
        "date_deces": "2026-05-15",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/jean-lafreniere",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-15"
    },
    {
        "nom": "Mme Doris Daigneault Boyer",
        "date_deces": "2026-05-14",
        "lien": "https://www.jalarin.com/obituaries/mme-doris-daigneault-boyer/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-14"
    },
    {
        "nom": "Réjeanne Chatel (Née Secours)",
        "date_deces": "2026-05-01",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/rejeanne-chatel-nee-secours",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-14"
    },
    {
        "nom": "Marie Rochefort",
        "date_deces": "2026-05-11",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/marie-rochefort",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-14"
    },
    {
        "nom": "Huguette Laperrière Sarrazin",
        "date_deces": "2026-05-13",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/huguette-laperriere-sarrazin",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-14"
    },
    {
        "nom": "Marielle Lafortune (Née Giroux)",
        "date_deces": "2026-05-10",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/marielle-lafortune-nee-giroux",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-13"
    },
    {
        "nom": "M. Jacques Lefebvre",
        "date_deces": "2026-05-12",
        "lien": "https://www.jalarin.com/obituaries/m-jacques-lefebvre-2/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-13"
    },
    {
        "nom": "M. Robert Morin",
        "date_deces": "2026-05-12",
        "lien": "https://www.jalarin.com/obituaries/m-robert-morin-2/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-12"
    },
    {
        "nom": "M. Paul-André Séguin",
        "date_deces": "2026-05-12",
        "lien": "https://www.jalarin.com/obituaries/m-paul-andre-seguin/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-12"
    },
    {
        "nom": "André Frappier, 1936–2023",
        "date_deces": "2023-12-06",
        "lien": "https://www.mcgerrigle.com/2023/12/06/andre-frappier-1936-2023/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean-Paul Forget, 1931–2023",
        "date_deces": "2023-12-20",
        "lien": "https://www.mcgerrigle.com/2023/12/20/jean-paul-forget-1931-2023/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Donald McCormick, 1940–2023",
        "date_deces": "2023-12-22",
        "lien": "https://www.mcgerrigle.com/2023/12/22/donald-mccormick-1940-2023/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Karen Elizabeth Buchanan (née Jones), 1958–2023",
        "date_deces": "2023-12-22",
        "lien": "https://www.mcgerrigle.com/2023/12/22/karen-elizabeth-buchanan-nee-jones-1958-2023/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Thérèse Léger (née Poirier), 1937–2023",
        "date_deces": "2023-12-27",
        "lien": "https://www.mcgerrigle.com/2023/12/27/therese-leger-nee-poirier-1937-2023/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean-Paul Frappier, 1932–2024",
        "date_deces": "2024-01-05",
        "lien": "https://www.mcgerrigle.com/2024/01/05/jean-paul-frappier-1932-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Susan Eleanor Evans (née Campbell), 1943–2024",
        "date_deces": "2024-01-09",
        "lien": "https://www.mcgerrigle.com/2024/01/09/susan-eleanor-evans-nee-campbell-1943-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Christopher Lee Prince, 1974–2024",
        "date_deces": "2024-01-16",
        "lien": "https://www.mcgerrigle.com/2024/01/16/christoper-lee-prince-1974-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Norris Earle Sample, 1937–2024",
        "date_deces": "2024-01-17",
        "lien": "https://www.mcgerrigle.com/2024/01/17/norris-earle-sample-1937-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Penelope “Penny” Anderson (née-Root), 1947–2024",
        "date_deces": "2024-01-21",
        "lien": "https://www.mcgerrigle.com/2024/01/21/penelope-penny-anderson-nee-root-1947-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marie-Marthe Buchanan (née Primeau), 1936–2024",
        "date_deces": "2024-01-24",
        "lien": "https://www.mcgerrigle.com/2024/01/24/marie-marthe-buchanan-nee-primeau-1936-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mario Lepage, 1965–2024",
        "date_deces": "2024-03-05",
        "lien": "https://www.mcgerrigle.com/2024/03/05/mario-lepage-1965-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Kenneth Brooks, 1966–2024",
        "date_deces": "2024-03-23",
        "lien": "https://www.mcgerrigle.com/2024/03/23/kenneth-brooks-1966-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Raymond Bazinet, 1934–2024",
        "date_deces": "2024-04-21",
        "lien": "https://www.mcgerrigle.com/2024/04/21/raymond-bazinet-1934-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Madeline Cavanagh, 1936–2024",
        "date_deces": "2024-04-21",
        "lien": "https://www.mcgerrigle.com/2024/04/21/madeline-cavanagh-1936-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "James (Jim) Bryson, 1928–2024",
        "date_deces": "2024-04-26",
        "lien": "https://www.mcgerrigle.com/2024/04/26/james-jim-bryson-1928-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Cora Georgina Allen (née Jackson), 1935–2024",
        "date_deces": "2024-05-01",
        "lien": "https://www.mcgerrigle.com/2024/05/01/cora-georgina-allen-nee-jackson-1935-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Brian W. Wardell, 1949–2024",
        "date_deces": "2024-06-13",
        "lien": "https://www.mcgerrigle.com/2024/06/13/brian-w-wardell-1949-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Denise Lalonde, 1953–2024",
        "date_deces": "2024-06-20",
        "lien": "https://www.mcgerrigle.com/2024/06/20/denise-lalonde-1953-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Linda Stevenson, 1947–2024",
        "date_deces": "2024-06-26",
        "lien": "https://www.mcgerrigle.com/2024/06/26/linda-stevenson-1947-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Joyce Jane Begbie, 1941–2024",
        "date_deces": "2024-07-01",
        "lien": "https://www.mcgerrigle.com/2024/07/01/joyce-jane-begbie-1941-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "François Laberge, 1946–2024",
        "date_deces": "2024-07-04",
        "lien": "https://www.mcgerrigle.com/2024/07/04/francois-laberge-1946-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marie-Reine Primeau (née Hurteau), 1937–2024",
        "date_deces": "2024-07-04",
        "lien": "https://www.mcgerrigle.com/2024/07/04/marie-reine-primeau-nee-hurteau-1937-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Philip Arthur Wood, January 31, 1941 – December 16, 2023",
        "date_deces": "2024-07-09",
        "lien": "https://www.mcgerrigle.com/2024/07/09/philip-arthur-wood-january-31-1941-december-16-2023/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Orville Jonah Huntington, September 19, 1945—July 11, 2024.",
        "date_deces": "2024-07-20",
        "lien": "https://www.mcgerrigle.com/2024/07/20/orville-jonah-huntington-september-19-1945-july-11-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Keith « Kitty Kat » Chisholm, 1961–2024",
        "date_deces": "2024-07-20",
        "lien": "https://www.mcgerrigle.com/2024/07/20/keith-chisholm-kitty-kat-1961-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Robert “Bob” Buttars, September 17, 1937 – August 23, 2024",
        "date_deces": "2024-08-26",
        "lien": "https://www.mcgerrigle.com/2024/08/26/robert-bob-buttars-september-17-1937-august-23-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Céline Primeau (née Dumas), 1935-2024",
        "date_deces": "2024-09-02",
        "lien": "https://www.mcgerrigle.com/2024/09/02/celine-primeau-nee-dumas-1935-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Lise Martin, 1957–2024",
        "date_deces": "2024-09-07",
        "lien": "https://www.mcgerrigle.com/2024/09/07/lise-martin-1957-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Denise Daigneault Beaulieu, 1938–2024",
        "date_deces": "2024-09-09",
        "lien": "https://www.mcgerrigle.com/2024/09/09/denise-daigneault-beaulieu-1938-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Evelyn Carlisle, 1935–2024",
        "date_deces": "2024-09-14",
        "lien": "https://www.mcgerrigle.com/2024/09/14/evelyn-carlisle-1935-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Stella Brunette (néeMcGowan), 1935–2024",
        "date_deces": "2024-09-23",
        "lien": "https://www.mcgerrigle.com/2024/09/23/stella-brunette-neemcgowan-1935-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean Louise McClintock (née Robinson), 1927–2024",
        "date_deces": "2024-10-09",
        "lien": "https://www.mcgerrigle.com/2024/10/09/jean-louise-mcclintock-nee-robinson-1927-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Ghislain Lachance, 1947–2024",
        "date_deces": "2024-10-15",
        "lien": "https://www.mcgerrigle.com/2024/10/15/ghislain-lachance-1947-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Maurice Leduc, 1940–2024",
        "date_deces": "2024-10-30",
        "lien": "https://www.mcgerrigle.com/2024/10/30/maurice-leduc-1940-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Réjean Bergevin, 1950–2024",
        "date_deces": "2024-11-11",
        "lien": "https://www.mcgerrigle.com/2024/11/11/rejean-bergevin-1950-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Ronald Leslie Barrett, January 7, 1930 – November 4, 2024",
        "date_deces": "2024-11-19",
        "lien": "https://www.mcgerrigle.com/2024/11/19/ronald-leslie-barrett-january-7-1930-november-4-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Robert Robidoux, 1942–2024",
        "date_deces": "2024-11-21",
        "lien": "https://www.mcgerrigle.com/2024/11/21/robert-robidoux-1942-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Maurice Filion, 1931–2024",
        "date_deces": "2024-11-25",
        "lien": "https://www.mcgerrigle.com/2024/11/25/maurice-filion-1931-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Betty Stevenson (née Gibbs), 1938–2024",
        "date_deces": "2024-11-26",
        "lien": "https://www.mcgerrigle.com/2024/11/26/betty-stevenson-nee-gibbs-1938-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Dwight Cullen, 1956–2024",
        "date_deces": "2024-12-02",
        "lien": "https://www.mcgerrigle.com/2024/12/02/dwight-cullen-1956-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Garth Lloyd Waddell, 1925–2024",
        "date_deces": "2024-12-15",
        "lien": "https://www.mcgerrigle.com/2024/12/15/garth-lloyd-waddell-1925-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Madeleine Deschambault, 1947–2024",
        "date_deces": "2024-12-23",
        "lien": "https://www.mcgerrigle.com/2024/12/23/madeleine-deschambault-1947-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Merrill McKee Lindsay, 1934–2024",
        "date_deces": "2024-12-30",
        "lien": "https://www.mcgerrigle.com/2024/12/30/merrill-mckee-lindsay-1934-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Gilberte Emond, 1950–2024",
        "date_deces": "2025-01-06",
        "lien": "https://www.mcgerrigle.com/2025/01/06/gilberte-emond-1950-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Robert Burton Lang, 1942–2025",
        "date_deces": "2025-01-14",
        "lien": "https://www.mcgerrigle.com/2025/01/14/robert-burton-lang-1942-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jupiter St-Laurent, 1973–2024",
        "date_deces": "2025-01-14",
        "lien": "https://www.mcgerrigle.com/2025/01/14/jupiter-st-laurent-1973-2024/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Rosaire Lorange, 1946–2025",
        "date_deces": "2025-02-26",
        "lien": "https://www.mcgerrigle.com/2025/02/26/rosaire-lorange-1946-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Theresse Watt (née Larson), March 10, 1937—February 18, 2025",
        "date_deces": "2025-03-06",
        "lien": "https://www.mcgerrigle.com/2025/03/06/theresse-watt-nee-larson-march-10-1937-february-18-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Lyne Haineault, 1964–2025",
        "date_deces": "2025-03-10",
        "lien": "https://www.mcgerrigle.com/2025/03/10/lyne-haineault-1964-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "James Chisholm, 1936–2025",
        "date_deces": "2025-03-11",
        "lien": "https://www.mcgerrigle.com/2025/03/11/james-chisholm-1936-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "John Harris, 1937–2025",
        "date_deces": "2025-03-19",
        "lien": "https://www.mcgerrigle.com/2025/03/19/john-harris-1937-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Yvonne Allen (née Racette), 1935–2025",
        "date_deces": "2025-03-26",
        "lien": "https://www.mcgerrigle.com/2025/03/26/yvonne-allan-nee-racette-1935-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Brian Delson Smith, 1948–2025",
        "date_deces": "2025-04-05",
        "lien": "https://www.mcgerrigle.com/2025/04/05/brian-delson-smith-1948-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean Templeton (née McMahon), July 27, 1932—April 6, 2025",
        "date_deces": "2025-04-09",
        "lien": "https://www.mcgerrigle.com/2025/04/09/jean-templeton-nee-mcmahon-july-27-1932-april-6-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mary Hope (Reid) Greer, April 28, 1931—April 10, 2025",
        "date_deces": "2025-04-12",
        "lien": "https://www.mcgerrigle.com/2025/04/12/mary-hope-reid-greer-april-28-1931-april-10-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Yan Morrissette, 1990–2025",
        "date_deces": "2025-04-14",
        "lien": "https://www.mcgerrigle.com/2025/04/14/yan-morrissette-1990-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marjorie Edith Coffin (née Craig), 1929–2025",
        "date_deces": "2025-04-24",
        "lien": "https://www.mcgerrigle.com/2025/04/24/marjorie-edith-coffin-nee-craig-1929-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean Brocklehurst (née Kerr), September 9, 1945—April 23, 2025",
        "date_deces": "2025-04-27",
        "lien": "https://www.mcgerrigle.com/2025/04/27/jean-brocklehurst-nee-kerr-september-9-1945-april-23-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Dainius Lukosevicius, 1941–2025",
        "date_deces": "2025-05-22",
        "lien": "https://www.mcgerrigle.com/2025/05/22/dainius-lukosevicius-1941-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Florence McMahon (née Dagenais), 1933-2025",
        "date_deces": "2025-06-17",
        "lien": "https://www.mcgerrigle.com/2025/06/17/florence-mcmahon-nee-dagenais-1933-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Darel Lang, 1939–2025",
        "date_deces": "2025-06-21",
        "lien": "https://www.mcgerrigle.com/2025/06/21/darel-lang-1936-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Monique Plamondon, 1949–2025",
        "date_deces": "2025-06-25",
        "lien": "https://www.mcgerrigle.com/2025/06/25/monique-plamondon-1949-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Michel Raymond, 1965–2025",
        "date_deces": "2025-07-31",
        "lien": "https://www.mcgerrigle.com/2025/07/31/michel-raymond-1965-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Gaétan Tremblay, 1943–2025",
        "date_deces": "2025-09-01",
        "lien": "https://www.mcgerrigle.com/2025/09/01/gaetan-tremblay-1943-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Leonard Everrett Tremblay, July 17, 1943- August 21, 2025",
        "date_deces": "2025-09-02",
        "lien": "https://www.mcgerrigle.com/2025/09/02/leonard-everrett-tremblay-july-17-1943-august-21-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Gerald Patrick Cavanagh, 1940–2025",
        "date_deces": "2025-09-12",
        "lien": "https://www.mcgerrigle.com/2025/09/12/gerald-patrick-cavanagh-1940-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mario Emond, 1965–2025",
        "date_deces": "2025-09-17",
        "lien": "https://www.mcgerrigle.com/2025/09/17/mario-emond-1965-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Liam Drummond, 1965–2025",
        "date_deces": "2025-09-25",
        "lien": "https://www.mcgerrigle.com/2025/09/25/liam-drummond-1965-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean-Claude Marcil, 1938–2025",
        "date_deces": "2025-10-08",
        "lien": "https://www.mcgerrigle.com/2025/10/08/jean-claude-marcil-1938-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marcel Bourgoin, 1948–2025",
        "date_deces": "2025-10-27",
        "lien": "https://www.mcgerrigle.com/2025/10/27/marcel-bourgoin-1948-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Gordon Ralph Lang, 1928–2025",
        "date_deces": "2025-10-27",
        "lien": "https://www.mcgerrigle.com/2025/10/27/gordon-ralph-lang-1928-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Fernande Léger, 1952-2025",
        "date_deces": "2025-10-31",
        "lien": "https://www.mcgerrigle.com/2025/10/31/fernande-leger-1952-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Lawrence Edward (Larry) McCaffrey, 1955–2025",
        "date_deces": "2025-11-02",
        "lien": "https://www.mcgerrigle.com/2025/11/02/lawrence-edward-larry-mccaffrey-1955-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Roger Duquette, 1936–2025",
        "date_deces": "2025-11-06",
        "lien": "https://www.mcgerrigle.com/2025/11/06/roger-duquette-1936-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Garth Cavers, 1943–2025",
        "date_deces": "2025-11-17",
        "lien": "https://www.mcgerrigle.com/2025/11/17/garth-cavers-1943-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Raymonde Usereau, 1944–2025",
        "date_deces": "2025-11-20",
        "lien": "https://www.mcgerrigle.com/2025/11/20/raymonde-usereau-1944-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mildred Viola Rabideau, November 17, 1928 – November 23, 2025",
        "date_deces": "2025-11-25",
        "lien": "https://www.mcgerrigle.com/2025/11/25/mildred-viola-rabideau-november-17-1928-november-23-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Pierre Frappier, 1939–2025",
        "date_deces": "2025-11-26",
        "lien": "https://www.mcgerrigle.com/2025/11/26/pierre-frappier-1939-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Michel Bédard, 1948–2025",
        "date_deces": "2025-12-08",
        "lien": "https://www.mcgerrigle.com/2025/12/08/michel-bedard-1948-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Ghislaine Serra, 1943–2025",
        "date_deces": "2025-12-13",
        "lien": "https://www.mcgerrigle.com/2025/12/13/ghislaine-serra-1943-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marie-Ange Primeau (née Soucisse), 1931–2025",
        "date_deces": "2025-12-17",
        "lien": "https://www.mcgerrigle.com/2025/12/17/marie-ange-primeau-nee-soucisse-1931-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Lucienne Rémillard Dandurand, 1936–2025",
        "date_deces": "2025-12-18",
        "lien": "https://www.mcgerrigle.com/2025/12/18/lucienne-remillard-dandurand-1936-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Lucien Émond, 1938–2025",
        "date_deces": "2026-01-06",
        "lien": "https://www.mcgerrigle.com/2026/01/06/lucien-emond-1938-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Julie Brooks, 1966–2025",
        "date_deces": "2026-01-14",
        "lien": "https://www.mcgerrigle.com/2026/01/14/julie-brooks-1966-2025/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Thérèse Goudreau, 1933–2026",
        "date_deces": "2026-01-20",
        "lien": "https://www.mcgerrigle.com/2026/01/20/therese-goudreau-1933-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Guy Himbeault, 1949–2026",
        "date_deces": "2026-01-21",
        "lien": "https://www.mcgerrigle.com/2026/01/21/guy-himbeault-1949-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Colombe Roy, 1954–2026",
        "date_deces": "2026-01-29",
        "lien": "https://www.mcgerrigle.com/2026/01/29/colombe-roy-1954-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Monique Montreuil, 1957–2026",
        "date_deces": "2026-02-13",
        "lien": "https://www.mcgerrigle.com/2026/02/13/monique-montreuil-1957-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Odette Frappier, 1933–2026",
        "date_deces": "2026-02-18",
        "lien": "https://www.mcgerrigle.com/2026/02/18/odette-frappier-1933-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Edna Emond, 1940–2026",
        "date_deces": "2026-03-02",
        "lien": "https://www.mcgerrigle.com/2026/03/02/edna-emond-1940-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean-Pierre Brunet, 1939–2026",
        "date_deces": "2026-03-04",
        "lien": "https://www.mcgerrigle.com/2026/03/04/jean-pierre-brunet-1939-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "William “Bill” Templeton, 1934–2026",
        "date_deces": "2026-03-10",
        "lien": "https://www.mcgerrigle.com/2026/03/10/william-templeton-1934-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean Ruth Niles (née Dobson), 1938–2026",
        "date_deces": "2026-03-16",
        "lien": "https://www.mcgerrigle.com/2026/03/16/jean-ruth-niles-nee-dobson-1936-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "James “Jimmy” Miller, 1935–2026",
        "date_deces": "2026-03-18",
        "lien": "https://www.mcgerrigle.com/2026/03/18/james-jimmy-miller-1935-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Sharon Leila Fletcher (née Court), 1940-2026",
        "date_deces": "2026-04-20",
        "lien": "https://www.mcgerrigle.com/2026/04/20/sharon-leila-fletcher-nee-court-1940-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Gervaise Cormier, 1927–2026",
        "date_deces": "2026-04-25",
        "lien": "https://www.mcgerrigle.com/2026/04/25/gervaise-cormier-1927-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "François Prevost, 1953–2026",
        "date_deces": "2026-05-04",
        "lien": "https://www.mcgerrigle.com/2026/05/04/francois-prevost-1953-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Benoit Lamarre, 1969–2026",
        "date_deces": "2026-05-10",
        "lien": "https://www.mcgerrigle.com/2026/05/10/benoit-lamarre-1969-2026/",
        "salon": "Résidence funéraire McGerrigle",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "M. Lyonel Vincent",
        "date_deces": "2026-04-24",
        "lien": "https://www.jalarin.com/obituaries/m-lyonel-vincent/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Edith Chevrier Larocque",
        "date_deces": "2026-04-27",
        "lien": "https://www.jalarin.com/obituaries/mme-edith-chevrier-larocque/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Marie Brisson Rousse",
        "date_deces": "2026-04-28",
        "lien": "https://www.jalarin.com/obituaries/mme-marie-brisson-rousse/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Diane Lévesque",
        "date_deces": "2026-04-28",
        "lien": "https://www.jalarin.com/obituaries/mme-diane-levesque/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "M. Jules Dicaire",
        "date_deces": "2026-04-28",
        "lien": "https://www.jalarin.com/obituaries/m-jules-dicaire/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "M. Robert Faubert **MISE A JOUR**",
        "date_deces": "2026-04-29",
        "lien": "https://www.jalarin.com/obituaries/m-robert-faubert/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Aline Vernier Paris",
        "date_deces": "2026-04-29",
        "lien": "https://www.jalarin.com/obituaries/mme-aline-vernier-paris/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Ginette Varin Lavoie",
        "date_deces": "2026-04-29",
        "lien": "https://www.jalarin.com/obituaries/mme-ginette-varin-lavoie/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Denise McKenzie Ouimet",
        "date_deces": "2026-04-30",
        "lien": "https://www.jalarin.com/obituaries/mme-denise-mckenzie-ouimet/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Réjane Besner",
        "date_deces": "2026-04-30",
        "lien": "https://www.jalarin.com/obituaries/mme-rejane-besner/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Dominique Leclerc",
        "date_deces": "2026-04-30",
        "lien": "https://www.jalarin.com/obituaries/mme-dominique-leclerc/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Jeannine Ménard LeBlanc",
        "date_deces": "2026-05-01",
        "lien": "https://www.jalarin.com/obituaries/mme-jeannine-menard-leblanc/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "M. Jacques Poirier",
        "date_deces": "2026-05-04",
        "lien": "https://www.jalarin.com/obituaries/m-jacques-poirier-3/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "M. André Miljour",
        "date_deces": "2026-05-04",
        "lien": "https://www.jalarin.com/obituaries/m-andre-miljour/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "M. Marc Dompierre",
        "date_deces": "2026-05-05",
        "lien": "https://www.jalarin.com/obituaries/m-marc-dompierre/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Jeannine Cotnoir Côté",
        "date_deces": "2026-05-05",
        "lien": "https://www.jalarin.com/obituaries/mme-jeannine-cotnoir-cote/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Ginette Galipeau",
        "date_deces": "2026-05-05",
        "lien": "https://www.jalarin.com/obituaries/mme-ginette-galipeau/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Ann Forbeck Coulombe",
        "date_deces": "2026-05-05",
        "lien": "https://www.jalarin.com/obituaries/mme-ann-forbeck-coulombe/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Michel Longtin",
        "date_deces": "2026-05-06",
        "lien": "https://www.jalarin.com/obituaries/michel-longtin/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Mme Liliane Lina Robidoux",
        "date_deces": "2026-05-06",
        "lien": "https://www.jalarin.com/obituaries/mme-liliane-lina-robidoux/",
        "salon": "J.A. Larin & Fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Charles-Eugène Babin",
        "date_deces": "2026-04-07",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/charles-eugene-babin",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "René Poirier",
        "date_deces": "2026-04-08",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/rene-poirier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Cécile \"Coco\" Dolbec",
        "date_deces": "2026-04-11",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/cecile-coco-dolbec",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Paul Robichaud",
        "date_deces": "2026-04-14",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/paul-robichaud",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marie Larocque",
        "date_deces": "2026-04-15",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/marie-larocque",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Dolorès Longtin Benoit",
        "date_deces": "2026-04-17",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/dolores-longtin-benoit",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Gilberte Lavoie (Née Boyer)",
        "date_deces": "2026-04-21",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/gilberte-lavoie-nee-boyer",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Colette Frappier",
        "date_deces": "2026-04-23",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/colette-frappier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Madeleine \"Mado\" Vernier Charlebois",
        "date_deces": "2026-04-24",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/madeleine-mado-vernier-charlebois",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Laurent Boulanger",
        "date_deces": "2026-04-24",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/laurent-boulanger",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Rita Charette (McSween)",
        "date_deces": "2026-04-25",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/rita-charette-mcsween",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean-Paul \"Paul\" Breton",
        "date_deces": "2026-04-25",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/jean-paul-paul-breton",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Marie-Claire Gauthier",
        "date_deces": "2026-04-28",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/marie-claire-gauthier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jean-Marie Rochon",
        "date_deces": "2026-04-28",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/jean-marie-rochon",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Simone Tessier (Née Perrier)",
        "date_deces": "2026-04-30",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/simone-tessier-nee-perrier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Pierrette Girard (née Marcil)",
        "date_deces": "2026-05-03",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/pierrette-girard-nee-marcil",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Philippe Lafleur",
        "date_deces": "2026-05-03",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/philippe-lafleur",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Jocelyne Richard",
        "date_deces": "2026-05-05",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/jocelyne-richard",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Nicole Mailloux Cloutier",
        "date_deces": "2026-05-05",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/nicole-mailloux-cloutier",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    },
    {
        "nom": "Réal Debonville",
        "date_deces": "2026-05-06",
        "lien": "https://avisdeces.emontpetit-fils.ca/avis/web/avis-de-deces/real-debonville",
        "salon": "E. Montpetit & fils",
        "date_publication": "2026-05-11"
    }
];