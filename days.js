// days.js
// Contient les données quotidiennes pour "Le Savoir Épique", de 2025-12-25 à 2026-12-31.
// Les 100 premières entrées sont fournies ci-dessous (jusqu'au 2026-04-03).
// Format des dates : YYYY-MM-DD.

const DAYS_DATA = [
  // --- Décembre 2025 (8 jours) ---
  {
    date: "2025-12-24",
    general_question: {
      question: "Quelle est la capitale de l'Australie ?",
      answer: "Canberra.",
      explanation:
        "Contrairement à une idée reçue, la capitale n'est ni Sydney ni Melbourne, mais Canberra, choisie comme compromis entre les deux villes rivales en 1908.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' d'ici 2050 est-il techniquement et économiquement réaliste à l'échelle mondiale ?",
      notes:
        "Débat sur la faisabilité des technologies de capture de carbone, les changements de mode de vie nécessaires et le coût de la transition énergétique.",
    },
    did_you_know: {
      text: "Le Père Noël porte traditionnellement du rouge et blanc à cause d'une campagne publicitaire de Coca-Cola dans les années 1930, bien qu'il ait été historiquement représenté dans d'autres couleurs (vert, bleu, ou brun).",
    },
  },
  {
    date: "2025-12-25",
    general_question: {
      question:
        "Quel compositeur a écrit la 9e symphonie, célèbre pour son 'Ode à la Joie' ?",
      answer: "Ludwig van Beethoven.",
      explanation:
        "La 9e symphonie en ré mineur, op.125, achevée en 1824, est la dernière symphonie complète du compositeur. L'Ode à la Joie est le thème principal du dernier mouvement.",
    },
    open_question: {
      question:
        "L'intelligence artificielle doit-elle être soumise à des lois éthiques plus strictes que les entreprises classiques ?",
      notes:
        "Débat sur la régulation de l'IA (transparence, biais, impact sociétal) vs. la liberté d'innovation.",
    },
    did_you_know: {
      text: "Le mot 'robot' a été introduit en 1920 par l'écrivain tchèque Karel Čapek dans sa pièce de théâtre de science-fiction 'R.U.R.' (Rossumovi Univerzální Roboti).",
    },
  },
  {
    date: "2025-12-26",
    general_question: {
      question: "Quel est le nom du plus grand désert chaud du monde ?",
      answer: "Le Sahara.",
      explanation:
        "Le Sahara, situé en Afrique du Nord, est le plus grand désert chaud. Le plus grand désert tout court est l'Antarctique (un désert froid).",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "Les astronautes ne peuvent pas roter dans l'espace, car en l'absence de gravité, le gaz n'est pas séparé du liquide dans leur estomac.",
    },
  },
  {
    date: "2025-12-27",
    general_question: {
      question:
        "Quelle ville est surnommée 'La Grosse Pomme' (The Big Apple) ?",
      answer: "New York.",
      explanation:
        "L'expression, popularisée dans les années 1920, provient de l'argot des courses de chevaux, où gagner à New York représentait 'la grosse pomme' (la plus grosse récompense).",
    },
    open_question: {
      question:
        "Faut-il privilégier l'apprentissage de plusieurs langues étrangères ou se concentrer sur la maîtrise parfaite de l'anglais ?",
      notes:
        "Débat sur la valeur de la polyglottie versus la spécialisation linguistique dans la mondialisation.",
    },
    did_you_know: {
      text: "La Grande Muraille de Chine n'est pas visible à l'œil nu depuis l'espace, contrairement à la légende populaire.",
    },
  },
  {
    date: "2025-12-28",
    general_question: {
      question: "Quel est le plus petit pays du monde, en superficie ?",
      answer: "Le Vatican.",
      explanation:
        "L'État de la Cité du Vatican est un État enclavé dans la ville de Rome, Italie. Sa superficie est d'environ 0,44 km².",
    },
    open_question: {
      question:
        "Les réseaux sociaux ont-ils un impact globalement positif ou négatif sur la santé mentale de leurs utilisateurs ?",
      notes:
        "Débat sur les effets de l'exposition constante, la comparaison sociale et la désinformation.",
    },
    did_you_know: {
      text: "L'eau chaude gèle plus vite que l'eau froide dans certaines conditions, un phénomène appelé l'effet Mpemba.",
    },
  },
  {
    date: "2025-12-29",
    general_question: {
      question: "Qui a formulé la théorie de la relativité générale ?",
      answer: "Albert Einstein.",
      explanation:
        "Publiée en 1915, cette théorie décrit la gravité comme une propriété de l'espace-temps déformé par la masse et l'énergie. ",
    },
    open_question: {
      question:
        "Le tourisme spatial devrait-il être encouragé malgré son coût environnemental et social élevé ?",
      notes:
        "Débat sur la justification des dépenses et de l'empreinte carbone pour l'exploration privée de l'espace.",
    },
    did_you_know: {
      text: "Le cœur d'une crevette se situe dans sa tête.",
    },
  },
  {
    date: "2025-12-30",
    general_question: {
      question:
        "Quel est le nom de la galaxie qui contient notre système solaire ?",
      answer: "La Voie Lactée.",
      explanation:
        "La Voie Lactée est une galaxie spirale barrée, abritant des centaines de milliards d'étoiles, dont notre Soleil.",
    },
    open_question: {
      question:
        "Faut-il interdire la publicité pour les produits considérés comme mauvais pour la santé (sucre, alcool, malbouffe) ?",
      notes:
        "Débat sur la liberté de commerce versus la responsabilité de l'État dans la santé publique.",
    },
    did_you_know: {
      text: "Un éclair peut chauffer l'air qu'il traverse jusqu'à 30 000 degrés Celsius, soit cinq fois plus chaud que la surface du soleil.",
    },
  },
  {
    date: "2025-12-31",
    general_question: {
      question:
        "Dans quel sport est attribué le Trophée Stanley (Stanley Cup) ?",
      answer: "Le Hockey sur glace (NHL).",
      explanation:
        "La Stanley Cup est le trophée remis chaque année à l'équipe championne des séries éliminatoires de la Ligue nationale de hockey (NHL).",
    },
    open_question: {
      question:
        "Les prévisions apocalyptiques de fin d'année sont-elles un phénomène psychologique ou un symptôme d'une crise environnementale et sociale réelle ?",
      notes:
        "Discussion sur l'anxiété collective, la désinformation et la perception des risques globaux.",
    },
    did_you_know: {
      text: "Pour célébrer le Nouvel An, on lâche des milliers de ballons ou de confettis. La ville de New York utilise environ une tonne de confettis à Times Square.",
    },
  },

  // --- Janvier 2026 (31 jours) ---
  {
    date: "2026-01-01",
    general_question: {
      question: "Qui était le premier empereur romain ?",
      answer: "Auguste (Octave).",
      explanation:
        "Il a régné de 27 av. J.-C. à 14 ap. J.-C. et est considéré comme le fondateur du Principat, la première phase de l'Empire romain.",
    },
    open_question: {
      question:
        "Comment concilier le besoin de souveraineté alimentaire nationale avec les principes du libre-échange international ?",
      notes:
        "Débat sur les subventions agricoles, les barrières douanières et la sécurité alimentaire mondiale.",
    },
    did_you_know: {
      text: "Le mois de janvier a été nommé d'après Janus, le dieu romain des commencements, des transitions, des portes et des fins, qui est représenté avec deux visages.",
    },
  },
  {
    date: "2026-01-02",
    general_question: {
      question:
        "Combien de temps faut-il à la lumière du Soleil pour atteindre la Terre ?",
      answer: "Environ 8 minutes et 20 secondes.",
      explanation:
        "La distance moyenne entre le Soleil et la Terre est d'environ 150 millions de kilomètres. La lumière voyage à $299 792$ km/seconde.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "Il existe plus de 20 000 espèces d'abeilles dans le monde, et seulement une petite fraction d'entre elles produisent du miel.",
    },
  },
  {
    date: "2026-01-03",
    general_question: {
      question:
        "Quel est le processus par lequel les plantes créent leur nourriture en utilisant la lumière du soleil ?",
      answer: "La photosynthèse.",
      explanation:
        "C'est un processus biochimique essentiel par lequel les plantes, les algues et certaines bactéries convertissent l'énergie lumineuse en énergie chimique.",
    },
    open_question: {
      question:
        "L'utilisation d'assistants vocaux (Alexa, Google, Siri) dans les foyers représente-t-elle un risque acceptable pour la vie privée ?",
      notes:
        "Débat sur la collecte de données, l'écoute permanente et la transparence des politiques de confidentialité.",
    },
    did_you_know: {
      text: "Les poulpes ont trois cœurs : deux pompent le sang vers les branchies, et un troisième le fait circuler vers le reste du corps.",
    },
  },
  {
    date: "2026-01-04",
    general_question: {
      question:
        "Qui est l'auteur des romans '1984' et 'La Ferme des animaux' ?",
      answer: "George Orwell.",
      explanation:
        "Ces deux œuvres majeures sont des satires politiques et des critiques du totalitarisme et de la manipulation du langage.",
    },
    open_question: {
      question:
        "Face à l'urgence climatique, les actes de désobéissance civile extrêmes (blocages, sabotages) sont-ils justifiés ?",
      notes:
        "Discussion sur l'efficacité, la légitimité et l'impact moral de l'action directe non violente.",
    },
    did_you_know: {
      text: "La langue des serpents ne sert pas à goûter mais à 'sentir' l'air. Ils collectent des particules et les transfèrent à un organe spécialisé appelé l'organe de Jacobson.",
    },
  },
  {
    date: "2026-01-05",
    general_question: {
      question: "Quel est l'élément chimique le plus abondant dans l'univers ?",
      answer: "L'hydrogène (H).",
      explanation:
        "L'hydrogène compose environ 75 % de la masse de l'univers, étant le principal constituant des étoiles et des nuages de gaz interstellaires.",
    },
    open_question: {
      question:
        "La démocratie peut-elle survivre à l'ère de l'information où la vérité et le mensonge sont de plus en plus difficiles à distinguer ?",
      notes:
        "Débat sur les chambres d'écho, les 'deepfakes' et l'éducation aux médias.",
    },
    did_you_know: {
      text: "Le cri du canard ne produit pas d'écho. Bien que ce soit une légende populaire, des scientifiques ont démontré que la déformation de l'écho est si forte qu'elle est souvent inaudible.",
    },
  },
  {
    date: "2026-01-06",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Louvre à Paris avant de devenir un musée ?",
      answer: "Une forteresse médiévale, puis une résidence royale.",
      explanation:
        "Commencé au XIIe siècle comme forteresse par Philippe Auguste, il fut transformé en palais royal au XVIe siècle avant d'ouvrir comme musée en 1793.",
    },
    open_question: {
      question:
        "Les monnaies numériques de banque centrale (MNBC) doivent-elles remplacer l'argent liquide traditionnel ?",
      notes:
        "Discussion sur la surveillance financière, l'inclusion bancaire et la stabilité économique.",
    },
    did_you_know: {
      text: "Le lait d'hippopotame est rose. Cette coloration est due à la présence de deux acides : l'acide hipposudoric (rouge) et l'acide norhipposudoric (orange).",
    },
  },
  {
    date: "2026-01-07",
    general_question: {
      question:
        "Qui est la seule personne à avoir remporté le Prix Nobel dans deux catégories scientifiques différentes ?",
      answer: "Marie Curie.",
      explanation:
        "Elle a reçu le Nobel de physique en 1903 (avec son mari Pierre Curie) et le Nobel de chimie en 1911.",
    },
    open_question: {
      question:
        "Jusqu'où la technologie de modification génétique (CRISPR) doit-elle être autorisée chez l'homme ?",
      notes:
        "Débat sur la thérapie des maladies génétiques vs. la modification des caractères héréditaires (bébés 'sur mesure').",
    },
    did_you_know: {
      text: "Les crocodiles sont les seuls animaux qui ne peuvent pas tirer leur langue, car celle-ci est fixée au fond de leur gueule.",
    },
  },
  {
    date: "2026-01-08",
    general_question: {
      question:
        "Comment appelle-t-on le phénomène selon lequel la Lune semble plus grande lorsqu'elle est près de l'horizon ?",
      answer: "L'illusion lunaire.",
      explanation:
        "C'est une illusion d'optique où le cerveau compare la Lune aux objets terrestres proches (arbres, bâtiments), la faisant paraître plus massive.",
    },
    open_question: {
      question:
        "Le revenu universel de base est-il une solution viable pour l'automatisation croissante des emplois ?",
      notes:
        "Discussion sur son coût, son impact sur l'incitation au travail et la réduction de la pauvreté.",
    },
    did_you_know: {
      text: "Le cheval de Troie de l'Antiquité a donné son nom à un type de logiciel malveillant (malware) qui se déguise en programme utile ou inoffensif.",
    },
  },
  {
    date: "2026-01-09",
    general_question: {
      question:
        "Quel est le nom du détroit qui sépare l'Alaska (États-Unis) de la Sibérie (Russie) ?",
      answer: "Le détroit de Béring.",
      explanation:
        "Il relie la mer des Tchouktches (océan Arctique) et la mer de Béring (océan Pacifique) et fut nommé d'après l'explorateur Vitus Béring.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "La phrase 'Houston, nous avons un problème' n'a jamais été prononcée exactement sous cette forme. La phrase réelle était 'Houston, we've had a problem' lors de la mission Apollo 13.",
    },
  },
  {
    date: "2026-01-10",
    general_question: {
      question:
        "En architecture, comment appelle-t-on un élément de construction situé en haut d'un mur qui sert à supporter une structure en surplomb ?",
      answer: "Une corniche.",
      explanation:
        "Une corniche est un élément horizontal saillant qui sert souvent de couronnement à un bâtiment ou à une partie de celui-être.",
    },
    open_question: {
      question:
        "Le système éducatif actuel prépare-t-il adéquatement les jeunes aux métiers du futur, dominés par l'IA et l'automatisation ?",
      notes:
        "Discussion sur l'importance des 'soft skills', de l'apprentissage continu et de la littératie numérique.",
    },
    did_you_know: {
      text: "Les girafes ont le même nombre de vertèbres cervicales (sept) que les humains, mais elles sont beaucoup plus longues.",
    },
  },
  {
    date: "2026-01-11",
    general_question: {
      question: "Quel est le nom du virus qui cause la pandémie de SIDA ?",
      answer: "Le VIH (Virus de l'Immunodéficience Humaine).",
      explanation:
        "Le VIH attaque le système immunitaire, le rendant incapable de lutter contre les infections, conduisant au SIDA (Syndrome d'Immunodéficience Acquise).",
    },
    open_question: {
      question:
        "Comment l'urbanisme peut-il être repensé pour améliorer la qualité de vie et réduire l'empreinte carbone des grandes métropoles ?",
      notes:
        "Débat sur la 'ville du quart d'heure', les transports doux et la végétalisation urbaine.",
    },
    did_you_know: {
      text: "Les fourmis peuvent soulever entre 50 et 100 fois leur propre poids, ce qui est proportionnellement bien supérieur aux capacités humaines.",
    },
  },
  {
    date: "2026-01-12",
    general_question: {
      question: "Quelle rivière traverse la ville de Londres ?",
      answer: "La Tamise.",
      explanation:
        "Elle prend sa source dans les collines de Cotswold et se jette dans la mer du Nord. Elle est la plus longue rivière entièrement située en Angleterre.",
    },
    open_question: {
      question:
        "Le droit d'auteur doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des artistes.",
    },
    did_you_know: {
      text: "Le cœur d'une baleine bleue est si grand qu'un humain pourrait nager dans ses artères.",
    },
  },
  {
    date: "2026-01-13",
    general_question: {
      question: "Qui a peint 'La Nuit étoilée' ?",
      answer: "Vincent van Gogh.",
      explanation:
        "Ce célèbre tableau post-impressionniste, peint en 1889, représente la vue qu'il avait de sa chambre à l'asile de Saint-Rémy-de-Provence.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites aux multinationales en matière d'optimisation fiscale (évasion fiscale légale) ?",
      notes:
        "Débat sur les impôts minimums mondiaux, la concurrence fiscale et l'équité des contributions.",
    },
    did_you_know: {
      text: "Les chameaux ont trois paupières pour se protéger du sable du désert.",
    },
  },
  {
    date: "2026-01-14",
    general_question: {
      question:
        "Quel pays a été le premier à accorder le droit de vote aux femmes en 1893 ?",
      answer: "La Nouvelle-Zélande.",
      explanation:
        "La Nouvelle-Zélande est le premier pays au monde à avoir accordé le droit de vote sans restriction aux femmes en 1893.",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Le jour le plus froid jamais enregistré sur Terre était de $-89,2$ degrés Celsius, mesuré à la station Vostok en Antarctique, le 21 juillet 1983.",
    },
  },
  {
    date: "2026-01-15",
    general_question: {
      question: "Quel est l'organe qui produit l'insuline ?",
      answer: "Le pancréas.",
      explanation:
        "L'insuline est une hormone vitale produite par les îlots de Langerhans du pancréas, et elle permet de réguler le taux de sucre dans le sang (glycémie).",
    },
    open_question: {
      question:
        "Faut-il légaliser et encadrer le marché des organes humains pour sauver des vies et combattre le trafic illégal ?",
      notes:
        "Débat éthique, social et économique sur la marchandisation du corps humain et l'altruisme.",
    },
    did_you_know: {
      text: "L'odorat du chien est environ 10 000 à 100 000 fois plus développé que celui de l'homme.",
    },
  },
  {
    date: "2026-01-16",
    general_question: {
      question: "Quelle est la plus grande forêt tropicale du monde ?",
      answer: "L'Amazonie.",
      explanation:
        "Répartie sur neuf pays d'Amérique du Sud, elle couvre une superficie d'environ 5,5 millions de kilomètres carrés.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "La sueur humaine est inodore. C'est l'action des bactéries sur la sueur qui produit les odeurs corporelles.",
    },
  },
  {
    date: "2026-01-17",
    general_question: {
      question:
        "Quel physicien a développé le principe d'incertitude quantique ?",
      answer: "Werner Heisenberg.",
      explanation:
        "Ce principe fondamental de la mécanique quantique stipule qu'il est impossible de connaître simultanément la position et la quantité de mouvement (impulsion) d'une particule avec une précision arbitraire.",
    },
    open_question: {
      question:
        "L'exploration spatiale (missions vers Mars, etc.) doit-elle être la priorité des budgets scientifiques ?",
      notes:
        "Débat sur la pertinence des dépenses spatiales face aux problèmes terrestres (climat, faim, maladies).",
    },
    did_you_know: {
      text: "Les humains partagent environ 50 % de leur ADN avec les bananes.",
    },
  },
  {
    date: "2026-01-18",
    general_question: {
      question:
        "Quel peintre espagnol est célèbre pour ses 'montres molles' (La Persistance de la mémoire) ?",
      answer: "Salvador Dalí.",
      explanation:
        "Figure majeure du surréalisme, il a créé des œuvres explorant l'inconscient, le rêve et la symbolique freudienne.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "Le bruit le plus fort jamais enregistré a été celui de l'éruption du volcan Krakatoa en 1883, audible à plus de 4800 km.",
    },
  },
  {
    date: "2026-01-19",
    general_question: {
      question:
        "Quel est le plus long fleuve du monde, souvent cité comme étant plus long que l'Amazone ?",
      answer: "Le Nil.",
      explanation:
        "Bien que le débat sur le plus long fleuve soit complexe et dépende des méthodes de mesure, le Nil (environ 6 650 km) a longtemps été considéré comme le plus long, devant l'Amazone (environ 6 400 km, mais peut-être plus selon certaines sources).",
    },
    open_question: {
      question:
        "Faut-il interdire la chasse de loisir pour préserver la biodiversité et l'équilibre des écosystèmes ?",
      notes:
        "Débat sur la régulation des populations animales, les traditions locales et l'éthique animale.",
    },
    did_you_know: {
      text: "Les flocons de neige ont toujours six côtés ou six branches, en raison de la structure hexagonale des molécules d'eau gelée.",
    },
  },
  {
    date: "2026-01-20",
    general_question: {
      question:
        "Quelle est la principale fonction des mitochondries dans la cellule ?",
      answer: "La production d'énergie (ATP) par respiration cellulaire.",
      explanation:
        "On les surnomme souvent la 'centrale énergétique' de la cellule. L'ATP est la molécule essentielle utilisée pour les activités cellulaires.",
    },
    open_question: {
      question:
        "L'hyper-connectivité et la dépendance aux smartphones modifient-elles la structure cognitive du cerveau humain ?",
      notes:
        "Discussion sur la capacité d'attention, la mémorisation et l'impact sur le sommeil.",
    },
    did_you_know: {
      text: "Le plus ancien chewing-gum jamais trouvé date d'il y a plus de 9 000 ans, fait à partir d'écorce de bouleau et découvert en Finlande.",
    },
  },
  {
    date: "2026-01-21",
    general_question: {
      question:
        "Quel célèbre chef d'État a ordonné la construction de la Grande Muraille de Chine au IIIe siècle av. J.-C. ?",
      answer: "Qin Shi Huang (Premier Empereur de Chine).",
      explanation:
        "Bien que des sections aient existé avant, il est considéré comme l'initiateur de la connexion et de l'extension des différentes fortifications pour former une seule défense.",
    },
    open_question: {
      question:
        "La peine de mort est-elle un châtiment justifiable dans un système de justice moderne ?",
      notes:
        "Débat éthique sur la dissuasion, l'erreur judiciaire et le principe de la dignité humaine.",
    },
    did_you_know: {
      text: "Si vous criez pendant 8 ans, 7 mois et 6 jours, vous produirez suffisamment d'énergie sonore pour chauffer une tasse de café.",
    },
  },
  {
    date: "2026-01-22",
    general_question: {
      question: "Quel océan est le plus grand et le plus profond du monde ?",
      answer: "L'océan Pacifique.",
      explanation:
        "Il couvre environ un tiers de la surface terrestre et contient la fosse des Mariannes, le point le plus profond connu sur Terre.",
    },
    open_question: {
      question:
        "Les pays développés devraient-ils annuler la dette des pays en développement en échange d'engagements environnementaux ?",
      notes:
        "Discussion sur le 'swap' dette-nature, la souveraineté économique et l'équité Nord-Sud.",
    },
    did_you_know: {
      text: "La glace sèche est en fait du dioxyde de carbone ($CO_2$) solide, qui passe directement de l'état solide à l'état gazeux (sublimation) à température ambiante.",
    },
  },
  {
    date: "2026-01-23",
    general_question: {
      question: "Qui a écrit la pièce de théâtre 'Roméo et Juliette' ?",
      answer: "William Shakespeare.",
      explanation:
        "Cette tragédie romantique, écrite vers 1595, raconte l'histoire de deux jeunes amants dont les familles sont rivales.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "Les flamants roses ne naissent pas roses. Ils acquièrent leur couleur distinctive en mangeant des algues et des crevettes riches en pigments de caroténoïdes.",
    },
  },
  {
    date: "2026-01-24",
    general_question: {
      question:
        "Dans quel pays se trouve le mont Everest (du côté qui est le plus souvent désigné) ?",
      answer: "Le Népal (et la Chine/Tibet).",
      explanation:
        "L'Everest est situé sur la frontière entre le Népal et la région autonome du Tibet (Chine). L'ascension classique se fait souvent depuis le côté népalais.",
    },
    open_question: {
      question:
        "Le droit à l'avortement est-il un droit fondamental absolu ou doit-il être soumis à certaines restrictions ?",
      notes:
        "Débat éthique et légal sur la temporalité, la conscience médicale et les motifs d'interruption de grossesse.",
    },
    did_you_know: {
      text: "Une journée sur Vénus est plus longue qu'une année sur Vénus. Sa rotation prend 243 jours terrestres, tandis que sa révolution (année) en prend 225.",
    },
  },
  {
    date: "2026-01-25",
    general_question: {
      question:
        "Qui est le mathématicien et philosophe à l'origine de la célèbre phrase 'Je pense, donc je suis' ?",
      answer: "René Descartes.",
      explanation:
        "Cette maxime ('Cogito ergo sum') est le premier principe de sa philosophie, qui établit l'existence du sujet pensant (le 'je') comme certitude absolue.",
    },
    open_question: {
      question:
        "La privatisation des services publics essentiels (eau, énergie, santé) est-elle plus efficace que leur gestion étatique ?",
      notes:
        "Discussion sur la qualité des services, l'accessibilité pour tous et la rentabilité.",
    },
    did_you_know: {
      text: "Les kangourous ne peuvent pas sauter en arrière en raison de la rigidité de leur queue et de la structure de leurs pattes arrière.",
    },
  },
  {
    date: "2026-01-26",
    general_question: {
      question:
        "Quel instrument de musique est surnommé 'le roi des instruments' ?",
      answer: "L'orgue.",
      explanation:
        "En raison de sa complexité, de sa taille imposante et de sa richesse sonore, il a historiquement dominé la musique sacrée et classique.",
    },
    open_question: {
      question:
        "La censure des contenus extrêmes sur les plateformes numériques (discours de haine, terrorisme) menace-t-elle la liberté d'expression ?",
      notes:
        "Débat sur le rôle des modérateurs, les algorithmes de détection et la définition de l'abus.",
    },
    did_you_know: {
      text: "Le drapeau du Danemark est le plus ancien drapeau national encore utilisé, datant du XIIIe siècle.",
    },
  },
  {
    date: "2026-01-27",
    general_question: {
      question:
        "Quelle est l'unité de mesure standard pour la fréquence du courant alternatif (électricité) ?",
      answer: "Le Hertz (Hz).",
      explanation:
        "Le Hertz mesure le nombre de cycles par seconde. En Europe, le courant est généralement de 50 Hz, aux États-Unis, il est de 60 Hz.",
    },
    open_question: {
      question:
        "Le boycott des entreprises qui ne respectent pas certaines normes éthiques (environnement, travail) est-il un outil efficace de changement social ?",
      notes:
        "Discussion sur l'impact économique réel, le 'greenwashing' et le pouvoir du consommateur.",
    },
    did_you_know: {
      text: "Le jour de l'an chinois (ou Nouvel An Lunaire) tombe toujours entre le 21 janvier et le 20 février.",
    },
  },
  {
    date: "2026-01-28",
    general_question: {
      question:
        "Quel était le nom de l'empire dirigé par Gengis Khan au XIIIe siècle ?",
      answer: "L'Empire Mongol.",
      explanation:
        "À son apogée, il s'étendait de l'Europe de l'Est à la mer du Japon, devenant le plus vaste empire terrestre contigu de l'histoire.",
    },
    open_question: {
      question:
        "La colonisation de Mars est-elle une étape inévitable pour la survie de l'humanité ou une fuite coûteuse face aux problèmes terrestres ?",
      notes:
        "Débat sur les risques existentiels, l'éthique de la terraformation et l'allocation des ressources.",
    },
    did_you_know: {
      text: "Les vaches ont un meilleur ami et sont stressées si elles en sont séparées.",
    },
  },
  {
    date: "2026-01-29",
    general_question: {
      question:
        "Quel est le nom de la péninsule qui est le cœur historique de la Grèce antique ?",
      answer: "Le Péloponnèse.",
      explanation:
        "Elle est reliée au continent par l'isthme de Corinthe. C'est là que se trouvaient des cités importantes comme Sparte et Olympie.",
    },
    open_question: {
      question:
        "Le secret bancaire est-il nécessaire pour la liberté économique ou favorise-t-il la criminalité financière et la fraude fiscale ?",
      notes:
        "Discussion sur la transparence fiscale internationale, les paradis fiscaux et le droit à l'intimité financière.",
    },
    did_you_know: {
      text: "La Grande Barrière de Corail en Australie est la plus grande structure vivante sur Terre et peut être vue de l'espace.",
    },
  },
  {
    date: "2026-01-30",
    general_question: {
      question:
        "Quelle est la principale fonction du cortex préfrontal du cerveau humain ?",
      answer:
        "La planification, la prise de décision et le contrôle des impulsions (fonctions exécutives).",
      explanation:
        "Cette zone du cerveau est cruciale pour le comportement social complexe et la personnalité.",
    },
    open_question: {
      question:
        "Les 'influenceurs' numériques doivent-ils être soumis aux mêmes règles de transparence et de déontologie que les médias traditionnels ?",
      notes:
        "Débat sur la publicité déguisée, la crédibilité des sources et la responsabilité éditoriale.",
    },
    did_you_know: {
      text: "Il y a plus de combinaisons possibles au jeu d'échecs que d'atomes dans l'univers observable.",
    },
  },
  {
    date: "2026-01-31",
    general_question: {
      question: "Qui a écrit la fable 'Le Corbeau et le Renard' ?",
      answer: "Jean de La Fontaine.",
      explanation:
        "Elle fait partie du recueil des Fables de La Fontaine, publiées au XVIIe siècle, et se termine par la morale 'Tout flatteur vit aux dépens de celui qui l'écoute.'",
    },
    open_question: {
      question:
        "Le système de retraite par répartition est-il durable face au vieillissement démographique et à l'allongement de l'espérance de vie ?",
      notes:
        "Discussion sur l'âge de départ, les cotisations et la nécessité de réformes structurelles.",
    },
    did_you_know: {
      text: "Le miel ne se périme jamais, grâce à sa faible teneur en eau et à l'acidité qui le rend inhospitalier aux bactéries.",
    },
  },

  // --- Février 2026 (28 jours, car 2026 n'est pas bissextile) ---
  {
    date: "2026-02-01",
    general_question: {
      question:
        "Quelle est la seule planète du système solaire à tourner sur elle-même dans le sens des aiguilles d'une montre ?",
      answer: "Vénus.",
      explanation:
        "La plupart des planètes ont une rotation prograde (antihoraire), mais Vénus et Uranus ont une rotation rétrograde (horaire).",
    },
    open_question: {
      question:
        "Faut-il conditionner l'aide au développement des pays pauvres à des critères de bonne gouvernance et de respect des droits humains ?",
      notes:
        "Débat sur la souveraineté, l'efficacité de l'aide et les risques d'ingérence.",
    },
    did_you_know: {
      text: "Février est le seul mois dont le nombre de jours change : 28 ou 29 jours selon qu'il s'agisse ou non d'une année bissextile.",
    },
  },
  {
    date: "2026-02-02",
    general_question: {
      question: "Quel écrivain français a inventé le mot 'surréalisme' ?",
      answer: "Guillaume Apollinaire.",
      explanation:
        "Il a utilisé ce terme pour la première fois en 1917 pour qualifier son drame 'Les Mamelles de Tirésias', avant qu'André Breton ne l'adopte comme nom du mouvement artistique.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "La corne de rhinocéros est composée de kératine, la même protéine qui compose nos ongles et nos cheveux.",
    },
  },
  {
    date: "2026-02-03",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure la pression atmosphérique ?",
      answer: "Le baromètre.",
      explanation:
        "Inventé par Evangelista Torricelli en 1643, il est crucial en météorologie pour prévoir les changements de temps.",
    },
    open_question: {
      question:
        "Les classes préparatoires et les grandes écoles sont-elles le meilleur modèle pour former l'élite d'une nation ?",
      notes:
        "Débat sur l'égalité des chances, l'élitisme et la diversité des parcours éducatifs.",
    },
    did_you_know: {
      text: "Le cochon est l'un des rares mammifères qui ne peut pas regarder le ciel directement sans se pencher en arrière.",
    },
  },
  {
    date: "2026-02-04",
    general_question: {
      question:
        "Dans quel pays se trouve le site archéologique de Machu Picchu ?",
      answer: "Le Pérou.",
      explanation:
        "Cette ancienne cité inca, construite au XVe siècle, est perchée dans les montagnes de la cordillère des Andes.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être obligatoire pour assurer une représentation démocratique maximale ?",
      notes:
        "Discussion sur la légitimité du vote, l'apathie politique et les sanctions en cas d'abstention.",
    },
    did_you_know: {
      text: "Les arbres communiquent entre eux sous terre grâce à un réseau de champignons appelé 'réseau de Wood Wide Web'.",
    },
  },
  {
    date: "2026-02-05",
    general_question: {
      question:
        "Quelle est la formule chimique de l'eau lourde (oxyde de deutérium) ?",
      answer: "$D_2O$ (ou ${}^2H_2O$).",
      explanation:
        "L'eau lourde est une forme d'eau contenant l'isotope lourd de l'hydrogène, le deutérium (D), souvent utilisée dans les réacteurs nucléaires comme modérateur.",
    },
    open_question: {
      question:
        "Les véhicules autonomes doivent-ils être programmés pour privilégier la vie du passager ou celle du piéton en cas d'accident inévitable ?",
      notes:
        "Problème du dilemme du 'Trolley' appliqué à l'IA et aux véhicules, débat éthique sur la programmation morale.",
    },
    did_you_know: {
      text: "Un seul spaghetti s'appelle un 'spaghetto'.",
    },
  },
  {
    date: "2026-02-06",
    general_question: {
      question:
        "Qui a été le premier homme à effectuer un vol suborbital puis orbital autour de la Terre ?",
      answer: "Youri Gagarine.",
      explanation:
        "Le cosmonaute soviétique a effectué le premier vol spatial habité le 12 avril 1961 à bord de Vostok 1.",
    },
    open_question: {
      question:
        "Le service militaire ou civil obligatoire pour les jeunes est-il un outil efficace d'intégration et de cohésion nationale ?",
      notes:
        "Discussion sur l'utilité, la contrainte individuelle et l'apprentissage de la citoyenneté.",
    },
    did_you_know: {
      text: "La tour Eiffel peut grandir jusqu'à 15 centimètres en été en raison de la dilatation thermique du métal.",
    },
  },
  {
    date: "2026-02-07",
    general_question: {
      question:
        "Quel est le nom de l'accord international signé en 1997 visant à réduire les émissions de gaz à effet de serre ?",
      answer: "Le Protocole de Kyoto.",
      explanation:
        "Il a été le premier accord majeur à fixer des objectifs contraignants de réduction des émissions pour les pays industrialisés.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "Il faut plus de calories pour manger du céleri que le céleri n'en contient réellement (calorie négative).",
    },
  },
  {
    date: "2026-02-08",
    general_question: {
      question:
        "Quel dramaturge français a écrit 'Le Bourgeois gentilhomme' et 'Tartuffe' ?",
      answer: "Molière (Jean-Baptiste Poquelin).",
      explanation:
        "Molière est l'un des plus grands maîtres de la comédie française, célèbre pour sa critique des mœurs et de l'hypocrisie de son époque.",
    },
    open_question: {
      question:
        "La vaccination obligatoire est-elle une atteinte aux libertés individuelles ou une nécessité de santé publique ?",
      notes:
        "Discussion sur l'immunité collective, le consentement éclairé et l'information scientifique.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas composés de vapeur d'eau (qui est invisible), mais de minuscules gouttelettes d'eau liquide ou de cristaux de glace en suspension.",
    },
  },
  {
    date: "2026-02-09",
    general_question: {
      question:
        "Quel terme désigne la vitesse maximale qu'un objet atteint en chute libre dans l'atmosphère ?",
      answer: "La vitesse terminale (ou limite).",
      explanation:
        "Elle est atteinte lorsque la force de traînée (résistance de l'air) est égale à la force gravitationnelle.",
    },
    open_question: {
      question:
        "La démocratie directe (référendums fréquents, initiatives citoyennes) est-elle supérieure à la démocratie représentative ?",
      notes:
        "Débat sur l'efficacité des décisions, la complexité des lois et le risque de 'tyrannie de la majorité'.",
    },
    did_you_know: {
      text: "Un rat peut rester plus longtemps sans boire d'eau qu'un chameau.",
    },
  },
  {
    date: "2026-02-10",
    general_question: {
      question:
        "Quel est le plus grand lac d'eau douce au monde, en superficie ?",
      answer: "Le lac Supérieur.",
      explanation:
        "Situé à la frontière entre les États-Unis et le Canada, il est le plus grand des Grands Lacs d'Amérique du Nord.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles avoir une obligation légale de réparer leurs produits plutôt que d'encourager le renouvellement (obsolescence programmée) ?",
      notes:
        "Discussion sur le 'droit à la réparation', la durabilité des produits et l'économie circulaire.",
    },
    did_you_know: {
      text: "Le corps humain contient suffisamment de carbone pour fabriquer 9 000 crayons à mine.",
    },
  },
  {
    date: "2026-02-11",
    general_question: {
      question:
        "Quel est l'auteur de l'hymne national des États-Unis ('The Star-Spangled Banner') ?",
      answer: "Francis Scott Key.",
      explanation:
        "Il a écrit le poème en 1814 après avoir été témoin du bombardement du Fort McHenry par les Britanniques pendant la guerre de 1812.",
    },
    open_question: {
      question:
        "L'utilisation d'armes autonomes létales (robots tueurs) est-elle moralement acceptable pour la guerre du futur ?",
      notes:
        "Débat sur la responsabilité éthique en cas de 'bavure', le contrôle humain et l'escalade des conflits.",
    },
    did_you_know: {
      text: "Le 'penny' (pièce d'un cent américain) coûte plus cher à fabriquer que sa propre valeur nominale, en raison du prix des métaux.",
    },
  },
  {
    date: "2026-02-12",
    general_question: {
      question:
        "Quelle est la plus grande île du monde qui n'est pas un continent ?",
      answer: "Le Groenland.",
      explanation:
        "Le Groenland, territoire autonome rattaché au Danemark, est la plus grande île. L'Australie est un continent/pays, donc n'est pas considérée comme une île unique.",
    },
    open_question: {
      question:
        "Le mécénat privé (fondations d'entreprises) est-il un substitut bienvenu ou une menace à l'art et à la culture financés par l'État ?",
      notes:
        "Discussion sur l'indépendance artistique, les priorités de financement et l'influence privée.",
    },
    did_you_know: {
      text: "Les chats peuvent produire plus de 100 sons vocaux différents, tandis que les chiens n'en produisent qu'environ 10.",
    },
  },
  {
    date: "2026-02-13",
    general_question: {
      question:
        "Quelle théorie scientifique postule que l'univers est en expansion ?",
      answer: "Le Big Bang (ou la théorie de l'expansion de l'univers).",
      explanation:
        "Cette théorie est soutenue par l'observation du décalage vers le rouge des galaxies et la détection du fond diffus cosmologique.",
    },
    open_question: {
      question:
        "Le salaire minimum est-il un outil efficace pour lutter contre la pauvreté ou un frein à l'emploi et à la compétitivité des entreprises ?",
      notes:
        "Débat sur l'inflation, le pouvoir d'achat et le marché du travail.",
    },
    did_you_know: {
      text: "L'odorat humain est capable de distinguer environ un billion (mille milliards) d'odeurs différentes.",
    },
  },
  {
    date: "2026-02-14",
    general_question: {
      question:
        "Quel est le nom de la ligne imaginaire qui sépare le jour de la veille, permettant le changement de date dans le monde ?",
      answer: "La ligne de changement de date internationale.",
      explanation:
        "Elle suit approximativement le $180^circ$ de longitude dans l'océan Pacifique et permet de maintenir la cohérence des fuseaux horaires.",
    },
    open_question: {
      question:
        "Le développement de la 5G et des réseaux futurs pose-t-il des risques sanitaires et environnementaux sérieux ?",
      notes:
        "Discussion sur les ondes électromagnétiques, l'impact énergétique des réseaux et la désinformation.",
    },
    did_you_know: {
      text: "La plus grande pizza jamais faite mesurait $13 580$ pieds carrés (environ $1262$ $m^2$) et a été faite à Rome, en Italie, en 2012.",
    },
  },
  {
    date: "2026-02-15",
    general_question: {
      question:
        "Quel est le nom de l'architecte qui a conçu l'Opéra de Sydney, en Australie ?",
      answer: "Jørn Utzon.",
      explanation:
        "L'architecte danois a remporté le concours international en 1957, mais a démissionné avant l'achèvement du projet en 1973 en raison de différends.",
    },
    open_question: {
      question:
        "La peine de prison est-elle avant tout punitive ou doit-elle être réhabilitatrice pour permettre la réinsertion sociale ?",
      notes:
        "Débat sur la surpopulation carcérale, les taux de récidive et les alternatives à l'incarcération.",
    },
    did_you_know: {
      text: "Les poissons rouges ont une durée de vie relativement longue : s'ils sont bien soignés, ils peuvent vivre jusqu'à 20 ans, voire plus.",
    },
  },
  {
    date: "2026-02-16",
    general_question: {
      question:
        "Quel philosophe grec antique est connu pour avoir été condamné à mort pour impiété et corruption de la jeunesse ?",
      answer: "Socrate.",
      explanation:
        "Il n'a laissé aucun écrit. Nous connaissons sa pensée et son procès principalement à travers les dialogues de son élève Platon.",
    },
    open_question: {
      question:
        "Le 'revenu de citoyenneté' (ou RSA) favorise-t-il la paresse ou offre-t-il la sécurité nécessaire pour l'entrepreneuriat et la formation ?",
      notes:
        "Discussion sur l'effet de seuil, l'incitation à l'activité et le rôle social de l'aide publique.",
    },
    did_you_know: {
      text: "Le mot 'buffet' en français vient du verbe 'buffer', qui signifie frapper, car on tapait sur la table pour annoncer le début du repas au Moyen Âge.",
    },
  },
  {
    date: "2026-02-17",
    general_question: {
      question:
        "Comment appelle-t-on la maladie caractérisée par une perte progressive des fonctions cognitives et de la mémoire ?",
      answer: "La maladie d'Alzheimer.",
      explanation:
        "C'est la cause la plus fréquente de démence chez les personnes âgées, liée à l'accumulation de plaques amyloïdes et de dégénérescences neurofibrillaires dans le cerveau.",
    },
    open_question: {
      question:
        "La notion de 'guerre juste' est-elle obsolète ou reste-t-elle pertinente pour juger des conflits internationaux modernes ?",
      notes:
        "Débat sur la légitimité d'entrer en guerre (jus ad bellum) et la conduite de la guerre (jus in bello) à l'ère nucléaire.",
    },
    did_you_know: {
      text: "La glace d'un glacier peut apparaître bleue parce que l'eau absorbe toutes les autres couleurs du spectre visible sauf le bleu.",
    },
  },
  {
    date: "2026-02-18",
    general_question: {
      question:
        "Quelle est l'œuvre musicale la plus connue du compositeur russe Piotr Ilitch Tchaïkovski, souvent jouée à Noël ?",
      answer: "Le ballet 'Casse-Noisette'.",
      explanation:
        "Créé en 1892, c'est l'un des ballets les plus populaires, notamment grâce à sa célèbre 'Danse de la Fée Dragée'.",
    },
    open_question: {
      question:
        "Les médias traditionnels (presse, télévision) doivent-ils s'adapter aux formats courts et rapides des réseaux sociaux ou maintenir leur modèle d'information approfondie ?",
      notes:
        "Discussion sur la vitesse de l'information, le journalisme d'investigation et l'économie des médias.",
    },
    did_you_know: {
      text: "Les manchots sont les seuls oiseaux qui ne peuvent pas voler, mais ils sont excellents nageurs.",
    },
  },
  {
    date: "2026-02-19",
    general_question: {
      question:
        "Quel est le nom de la plus grande structure non-atomique que l'œil humain peut voir ?",
      answer: "Un globule rouge (érythrocyte).",
      explanation:
        "Bien qu'il faille un microscope pour le voir clairement, c'est la plus grande cellule pouvant être perçue, même s'il est plus simple de voir les œufs de grenouilles ou de poissons.",
    },
    open_question: {
      question:
        "La légalisation des drogues douces est-elle une solution pour réduire le crime organisé et améliorer la santé publique ?",
      notes:
        "Débat sur la réglementation, les recettes fiscales et les risques d'abus et de dépendance.",
    },
    did_you_know: {
      text: "Le nom complet de la poupée Barbie est Barbara Millicent Roberts.",
    },
  },
  {
    date: "2026-02-20",
    general_question: {
      question:
        "Quel corps céleste est principalement composé de glace, de poussière et de roche et possède une queue lumineuse ?",
      answer: "Une comète.",
      explanation:
        "La queue se forme lorsque la chaleur du Soleil sublime la glace, créant un panache de gaz et de poussière ionisés.",
    },
    open_question: {
      question:
        "Les critères de beauté (mode, chirurgie esthétique) sont-ils une forme de pression sociale genrée ou une libre expression individuelle ?",
      notes:
        "Discussion sur l'impact des médias, le patriarcat et l'autonomie corporelle.",
    },
    did_you_know: {
      text: "Le mot 'jazz' a été officiellement utilisé pour la première fois dans un journal de San Francisco en 1913, mais ses origines sont plus anciennes et diverses.",
    },
  },
  {
    date: "2026-02-21",
    general_question: {
      question:
        "Qui a formulé les trois lois du mouvement et la loi de la gravitation universelle ?",
      answer: "Isaac Newton.",
      explanation:
        "Publiées en 1687 dans ses *Philosophiæ Naturalis Principia Mathematica*, ces lois sont la base de la mécanique classique.",
    },
    open_question: {
      question:
        "Les systèmes de notation et de classement des universités (type Shanghai) sont-ils une mesure fiable de la qualité académique ?",
      notes:
        "Débat sur les critères de recherche vs. d'enseignement, l'homogénéisation des modèles et la course au prestige.",
    },
    did_you_know: {
      text: "Le plus long règne d'un monarque dans l'histoire moderne est celui de Louis XIV (72 ans) en France, devant la Reine Elizabeth II (70 ans).",
    },
  },
  {
    date: "2026-02-22",
    general_question: {
      question: "Quel est le plus grand mammifère terrestre d'Afrique ?",
      answer: "L'éléphant d'Afrique.",
      explanation:
        "Il existe deux espèces d'éléphants d'Afrique (savane et forêt). L'éléphant d'Afrique de la savane est le plus grand, pouvant peser jusqu'à 6 tonnes.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de manifester pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "Les chiens ont un sens du temps. Des études montrent qu'ils peuvent anticiper les habitudes quotidiennes de leurs maîtres (heure de promenade, retour du travail).",
    },
  },
  {
    date: "2026-02-23",
    general_question: {
      question:
        "Dans quel pays a eu lieu la Révolution des Œillets en 1974, qui a mis fin à la dictature la plus longue d'Europe de l'Ouest ?",
      answer: "Le Portugal.",
      explanation:
        "Cette révolution militaire et populaire, sans effusion de sang, a mis fin à la dictature de l'Estado Novo.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "Le mot 'sandwich' tire son nom d'un aristocrate britannique du XVIIIe siècle, le 4e comte de Sandwich, qui ne voulait pas quitter sa table de jeu pour manger.",
    },
  },
  {
    date: "2026-02-24",
    general_question: {
      question:
        "Quel est le nom de la molécule qui porte l'information génétique dans les cellules ?",
      answer: "L'ADN (Acide Désoxyribonucléique).",
      explanation:
        "Découverte par Watson et Crick (grâce aux travaux de Rosalind Franklin), sa structure en double hélice est le support de l'hérédité.",
    },
    open_question: {
      question:
        "Faut-il interdire l'exploitation minière en haute mer pour protéger des écosystèmes encore largement inexplorés ?",
      notes:
        "Discussion sur le besoin de métaux rares, les conséquences environnementales irréversibles et la réglementation internationale.",
    },
    did_you_know: {
      text: "Le point le plus éloigné de la Terre du centre de la Terre n'est pas le sommet de l'Everest, mais le sommet du volcan Chimborazo en Équateur, en raison du renflement équatorial.",
    },
  },
  {
    date: "2026-02-25",
    general_question: {
      question: "Qui est l'auteur du roman philosophique 'L'Étranger' ?",
      answer: "Albert Camus.",
      explanation:
        "Publié en 1942, ce roman illustre la philosophie de l'absurde à travers l'histoire de Meursault.",
    },
    open_question: {
      question:
        "L'utilisation de la reconnaissance faciale par la police est-elle un outil efficace de lutte contre la criminalité ou une menace pour les libertés publiques ?",
      notes:
        "Débat sur le taux d'erreur, les biais raciaux et l'anonymat dans l'espace public.",
    },
    did_you_know: {
      text: "Le Canada a plus de lacs que le reste du monde réuni, avec plus de 3 millions de lacs. ",
    },
  },
  {
    date: "2026-02-26",
    general_question: {
      question:
        "Quel est le nom de la tempête tourbillonnante géante visible sur Jupiter ?",
      answer: "La Grande Tache Rouge.",
      explanation:
        "C'est un anticyclone persistant (une tempête) qui existe depuis au moins 350 ans, mais qui rétrécit au fil du temps.",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "Les escargots peuvent dormir pendant trois ans s'ils se trouvent dans des conditions climatiques défavorables.",
    },
  },
  {
    date: "2026-02-27",
    general_question: {
      question:
        "Quel peintre impressionniste français est célèbre pour ses séries de Nymphéas ?",
      answer: "Claude Monet.",
      explanation:
        "Monet est le chef de file du mouvement impressionniste. Il a peint environ 250 toiles de Nymphéas, inspirées de son jardin à Giverny.",
    },
    open_question: {
      question:
        "Le système de permis de conduire devrait-il être réévalué plus fréquemment pour les personnes âgées pour garantir la sécurité routière ?",
      notes:
        "Débat sur l'autonomie, la capacité physique et les discriminations liées à l'âge.",
    },
    did_you_know: {
      text: "La 'Nécropole des Lyciens' est un ensemble de tombeaux taillés dans la roche dans le sud de la Turquie, datant du IVe siècle av. J.-C.",
    },
  },
  {
    date: "2026-02-28",
    general_question: {
      question:
        "Quel est le nom du gaz noble utilisé dans les enseignes lumineuses colorées, souvent bleues ?",
      answer: "Le Néon.",
      explanation:
        "Le néon pur émet une lumière rouge-orange, mais d'autres gaz nobles comme l'argon et le krypton sont mélangés pour produire d'autres couleurs (le bleu étant souvent l'argon).",
    },
    open_question: {
      question:
        "Le concept de 'nation' et d'identité nationale est-il obsolète à l'ère de la mondialisation et des identités multiples ?",
      notes:
        "Discussion sur le nationalisme, le cosmopolitisme et le multiculturalisme.",
    },
    did_you_know: {
      text: "Le mot 'février' vient du latin 'februare' qui signifie purifier, car c'était la période des fêtes de purification (Februa) dans la Rome antique.",
    },
  },

  // --- Mars 2026 (27 jours - jusqu'au 2026-03-27) ---
  {
    date: "2026-03-01",
    general_question: {
      question: "Quel est le plus grand désert de glace du monde ?",
      answer: "L'Antarctique.",
      explanation:
        "C'est techniquement le plus grand désert de la planète. Un désert est défini par le peu de précipitations qu'il reçoit, et l'Antarctique reçoit très peu de neige et de pluie.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées d'atteindre une parité homme-femme dans leurs conseils d'administration et leurs postes de direction ?",
      notes:
        "Débat sur les quotas, la discrimination positive et la méritocratie.",
    },
    did_you_know: {
      text: "Il existe une discipline sportive appelée 'ironing extrême' où les participants repassent des vêtements dans des lieux insolites, comme sous l'eau ou en escalade.",
    },
  },
  {
    date: "2026-03-02",
    general_question: {
      question: "Qui a inventé le téléphone en 1876 ?",
      answer: "Alexander Graham Bell.",
      explanation:
        "Bien que d'autres (comme Elisha Gray ou Antonio Meucci) aient développé des dispositifs similaires, Bell est généralement reconnu comme l'inventeur officiel aux États-Unis.",
    },
    open_question: {
      question:
        "Faut-il interdire l'élevage intensif des animaux pour des raisons éthiques, sanitaires et environnementales ?",
      notes:
        "Discussion sur le bien-être animal, les coûts de la viande et la sécurité alimentaire.",
    },
    did_you_know: {
      text: "Le seul mot en français qui utilise la lettre 'w' dans la liste officielle des mots est 'wagon'.",
    },
  },
  {
    date: "2026-03-03",
    general_question: {
      question:
        "Comment appelle-t-on le phénomène où les rayons lumineux sont déviés lorsqu'ils passent d'un milieu à un autre (air/eau) ?",
      answer: "La réfraction.",
      explanation:
        "C'est ce qui fait que les objets semblent courbés ou déplacés lorsqu'ils sont partiellement immergés dans l'eau.",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "Les chouettes sont les seuls oiseaux capables de tourner leur tête à 270 degrés sans bouger leur corps.",
    },
  },
  {
    date: "2026-03-04",
    general_question: {
      question:
        "Quel personnage de fiction est connu pour vivre au 221B Baker Street à Londres ?",
      answer: "Sherlock Holmes.",
      explanation:
        "Le célèbre détective créé par Arthur Conan Doyle y réside avec son ami et biographe, le Dr John Watson.",
    },
    open_question: {
      question:
        "La peine d'amende est-elle juste si elle n'est pas proportionnelle aux revenus de la personne (amendes forfaitaires) ?",
      notes:
        "Débat sur l'égalité devant la loi, la justice sociale et les 'amendes au jour' (proportionnelles au salaire).",
    },
    did_you_know: {
      text: "Le métal le plus lourd sur Terre est l'osmium, qui est environ deux fois plus dense que le plomb.",
    },
  },
  {
    date: "2026-03-05",
    general_question: {
      question: "Qui a commandé la construction du Taj Mahal en Inde ?",
      answer: "L'empereur Shah Jahan.",
      explanation:
        "Il l'a fait construire en mémoire de son épouse favorite, Mumtaz Mahal, décédée en 1631. C'est un mausolée et non un palais.",
    },
    open_question: {
      question:
        "L'exploration et la commercialisation des astéroïdes (exploitation minière spatiale) sont-elles le futur de l'humanité ?",
      notes:
        "Discussion sur la faisabilité technique, les traités internationaux (espace), et le risque de pollution spatiale.",
    },
    did_you_know: {
      text: "Les fourmis sont si nombreuses sur Terre que leur biomasse totale (poids combiné) est presque égale à celle de tous les humains.",
    },
  },
  {
    date: "2026-03-06",
    general_question: {
      question:
        "Quel est le plus grand volcan du système solaire, situé sur Mars ?",
      answer: "Olympus Mons (Mont Olympe).",
      explanation:
        "C'est un volcan bouclier éteint, trois fois plus haut que l'Everest et d'une largeur de $600$ km à sa base.",
    },
    open_question: {
      question:
        "Le système du collège/lycée unique est-il le plus efficace pour l'épanouissement des élèves ou faut-il introduire une sélection plus précoce ?",
      notes:
        "Débat sur l'orientation, l'égalité des chances et les besoins éducatifs différenciés.",
    },
    did_you_know: {
      text: "Le rire peut améliorer la circulation sanguine et réduire le taux d'hormones de stress dans le corps.",
    },
  },
  {
    date: "2026-03-07",
    general_question: {
      question:
        "Quel est le seul pays d'Amérique du Sud dont la côte est à la fois sur l'océan Atlantique et l'océan Pacifique ?",
      answer: "La Colombie.",
      explanation:
        "Elle est le seul pays d'Amérique du Sud à posséder une façade sur les deux océans.",
    },
    open_question: {
      question:
        "L'obligation pour les entreprises de compenser leurs émissions de carbone ('crédits carbone') est-elle une solution réelle ou un 'droit à polluer' ?",
      notes:
        "Discussion sur l'additionnalité des projets de compensation, la véracité des calculs et l'effort réel de réduction.",
    },
    did_you_know: {
      text: "Les cochons d'Inde ne sont ni des cochons ni originaires de Guinée (ils viennent d'Amérique du Sud).",
    },
  },
  {
    date: "2026-03-08",
    general_question: {
      question:
        "Qui est l'auteur du célèbre roman 'Orgueil et Préjugés' (Pride and Prejudice) ?",
      answer: "Jane Austen.",
      explanation:
        "Ce roman publié en 1813 est une œuvre phare de la littérature anglaise, explorant les mœurs et les mariages de la petite noblesse rurale anglaise.",
    },
    open_question: {
      question:
        "La journée internationale des droits des femmes est-elle un jour de célébration ou de revendication ?",
      notes:
        "Débat sur les acquis, les inégalités persistantes et la nécessité d'une mobilisation continue.",
    },
    did_you_know: {
      text: "Le mot 'mars' vient du dieu romain de la guerre, Mars, mais était à l'origine le premier mois de l'ancien calendrier romain.",
    },
  },
  {
    date: "2026-03-09",
    general_question: {
      question:
        "Quel processus est à l'origine de l'énergie émise par le Soleil ?",
      answer: "La fusion nucléaire (transformation d'hydrogène en hélium).",
      explanation:
        "Dans le noyau du Soleil, la température et la pression sont suffisantes pour que les atomes d'hydrogène fusionnent en hélium, libérant une quantité massive d'énergie.",
    },
    open_question: {
      question:
        "Le journalisme d'investigation peut-il survivre économiquement à l'ère de l'information gratuite et des clics rapides ?",
      notes:
        "Discussion sur les modèles d'abonnement, le financement public et le rôle des fondations.",
    },
    did_you_know: {
      text: "La langue d'une baleine bleue pèse autant qu'un éléphant.",
    },
  },
  {
    date: "2026-03-10",
    general_question: {
      question:
        "Qui est le compositeur du ballet 'Le Sacre du printemps', dont la première a causé une émeute à Paris en 1913 ?",
      answer: "Igor Stravinsky.",
      explanation:
        "Le caractère rythmique et l'harmonie novatrice de l'œuvre ont choqué le public et provoqué un scandale majeur lors de sa première au Théâtre des Champs-Élysées.",
    },
    open_question: {
      question:
        "L'interdiction de la GPA (Gestation Pour Autrui) dans de nombreux pays est-elle justifiable ou entrave-t-elle la liberté de procréer ?",
      notes:
        "Débat éthique sur la marchandisation du corps, l'exploitation des femmes et le droit des couples stériles.",
    },
    did_you_know: {
      text: "Les chèvres ont des pupilles rectangulaires, ce qui leur donne une vision panoramique à $320^circ$ et les aide à repérer les prédateurs.",
    },
  },
  {
    date: "2026-03-11",
    general_question: {
      question:
        "Quel est le nom de la période de l'histoire européenne qui s'étend du Ve au XVe siècle ?",
      answer: "Le Moyen Âge.",
      explanation:
        "Cette période débute avec la chute de l'Empire romain d'Occident (476) et s'achève avec la découverte de l'Amérique (1492) ou la chute de Constantinople (1453).",
    },
    open_question: {
      question:
        "Les entreprises technologiques (GAFA) sont-elles devenues trop puissantes et doivent-elles être démantelées (lois antitrust) ?",
      notes:
        "Discussion sur le monopole, la concurrence, la protection des données et le lobbying politique.",
    },
    did_you_know: {
      text: "Le thé glacé a été inventé accidentellement lors de l'Exposition universelle de Saint-Louis en 1904, où un marchand, ne pouvant vendre son thé chaud par forte chaleur, eut l'idée d'y ajouter de la glace.",
    },
  },
  {
    date: "2026-03-12",
    general_question: {
      question:
        "Quelle est l'unité de mesure utilisée en informatique pour désigner un octet ?",
      answer: "Le Byte (B).",
      explanation:
        "Un octet (byte) est généralement composé de 8 bits. Un bit (binary digit) est la plus petite unité d'information binaire.",
    },
    open_question: {
      question:
        "Faut-il réglementer ou interdire les jeux d'argent en ligne (paris sportifs, casinos) pour prévenir l'addiction et l'endettement ?",
      notes:
        "Débat sur la liberté individuelle, la protection des plus vulnérables et les recettes fiscales.",
    },
    did_you_know: {
      text: "Le cri du paon est souvent confondu avec un cri de chat ou d'enfant en détresse, et est étonnamment fort et aigu.",
    },
  },
  {
    date: "2026-03-13",
    general_question: {
      question:
        "Quel pays est le leader mondial dans la production d'huile d'olive ?",
      answer: "L'Espagne.",
      explanation:
        "L'Espagne, notamment la région d'Andalousie, produit à elle seule environ 40 % de l'huile d'olive mondiale.",
    },
    open_question: {
      question:
        "Les lanceurs d'alerte (whistleblowers) doivent-ils bénéficier d'une immunité totale s'ils révèlent des informations d'intérêt public ?",
      notes:
        "Discussion sur la protection légale, le secret d'État, et la distinction entre divulgation légitime et espionnage.",
    },
    did_you_know: {
      text: "La mer Morte est le point le plus bas du monde sur terre ferme, son rivage étant à environ $-430$ mètres sous le niveau de la mer.",
    },
  },
  {
    date: "2026-03-14",
    general_question: {
      question:
        "Qui est le physicien à l'origine du paradoxe du chat (expérience de pensée quantique) ?",
      answer: "Erwin Schrödinger.",
      explanation:
        "Cette expérience de pensée de 1935 illustre l'étrangeté de la superposition quantique, où un système est à la fois dans plusieurs états (mort et vivant) tant qu'il n'est pas observé.",
    },
    open_question: {
      question:
        "Faut-il enseigner une histoire nationale neutre et globale ou mettre l'accent sur les spécificités et les complexités de l'identité locale ?",
      notes:
        "Débat sur le programme scolaire, le récit national et la diversité culturelle.",
    },
    did_you_know: {
      text: "L'anniversaire de la naissance d'Albert Einstein, le 14 mars, est également connu comme le 'Jour de Pi' (car $pi approx 3.14$).",
    },
  },
  {
    date: "2026-03-15",
    general_question: {
      question:
        "Quel est le nom de la bactérie souvent responsable des intoxications alimentaires et présente dans les œufs et la volaille ?",
      answer: "La Salmonelle (Salmonella).",
      explanation:
        "Les salmonelles sont des bactéries responsables d'infections intestinales (salmonelloses) qui peuvent être graves.",
    },
    open_question: {
      question:
        "Le mécénat privé (fondations d'entreprises) est-il un substitut bienvenu ou une menace à l'art et à la culture financés par l'État ?",
      notes:
        "Discussion sur l'indépendance artistique, les priorités de financement et l'influence privée.",
    },
    did_you_know: {
      text: "Les baleines à bosse mâles chantent des chansons complexes qui peuvent durer des heures. Ces chansons évoluent et changent chaque année.",
    },
  },
  {
    date: "2026-03-16",
    general_question: {
      question: "Quelle est la capitale du Brésil ?",
      answer: "Brasília.",
      explanation:
        "Elle a été inaugurée en 1960, remplaçant Rio de Janeiro, et a été construite spécifiquement pour être la nouvelle capitale, selon les plans de l'urbaniste Lúcio Costa et de l'architecte Oscar Niemeyer.",
    },
    open_question: {
      question:
        "Les entreprises peuvent-elles être moralement neutres ou ont-elles une responsabilité éthique et sociale (RSE) au-delà du profit ?",
      notes:
        "Débat sur le 'capitalisme de partie prenante' (stakeholder capitalism) vs. le 'capitalisme actionnarial' (shareholder capitalism).",
    },
    did_you_know: {
      text: "La plupart des diamants naturels sont vieux de 1 à 3,3 milliards d'années, soit presque l'âge de la Terre elle-même (4,5 milliards d'années).",
    },
  },
  {
    date: "2026-03-17",
    general_question: {
      question:
        "Quel pays a pour devise nationale 'Erin go Bragh' (l'Irlande pour toujours) ?",
      answer: "L'Irlande.",
      explanation:
        "C'est une anglicisation de la phrase en gaélique irlandais 'Éirinn go Brách', associée à la fierté et au nationalisme irlandais.",
    },
    open_question: {
      question:
        "Les médias traditionnels (presse, télévision) doivent-ils s'adapter aux formats courts et rapides des réseaux sociaux ou maintenir leur modèle d'information approfondie ?",
      notes:
        "Discussion sur la vitesse de l'information, le journalisme d'investigation et l'économie des médias.",
    },
    did_you_know: {
      text: "Le trèfle à quatre feuilles est un symbole de chance, mais il s'agit en fait d'une mutation rare du trèfle à trois feuilles commun (une chance sur 10 000).",
    },
  },
  {
    date: "2026-03-18",
    general_question: {
      question:
        "Quel est le nom du volcan qui a enseveli Pompéi et Herculanum en l'an 79 après J.-C. ?",
      answer: "Le Vésuve.",
      explanation:
        "Le Vésuve est le seul volcan actif d'Europe continentale. Pompéi et Herculanum ont été figées dans le temps par les cendres et les flux pyroclastiques.",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "Le chocolat a été utilisé comme monnaie d'échange par les Mayas et les Aztèques en Amérique centrale avant l'arrivée des Européens.",
    },
  },
  {
    date: "2026-03-19",
    general_question: {
      question: "Qui a écrit la pièce de théâtre 'Le Cid' ?",
      answer: "Pierre Corneille.",
      explanation:
        "C'est une tragi-comédie classique française, écrite en 1637, qui raconte les amours contrariées de Rodrigue et Chimène.",
    },
    open_question: {
      question:
        "L'utilisation d'armes autonomes létales (robots tueurs) est-elle moralement acceptable pour la guerre du futur ?",
      notes:
        "Débat sur la responsabilité éthique en cas de 'bavure', le contrôle humain et l'escalade des conflits.",
    },
    did_you_know: {
      text: "Si tous les vaisseaux sanguins d'un humain étaient mis bout à bout, ils feraient plus de $96 000$ kilomètres, soit plus de deux fois le tour de la Terre.",
    },
  },
  {
    date: "2026-03-20",
    general_question: {
      question:
        "Quel est l'événement astronomique qui marque le début du printemps dans l'hémisphère nord ?",
      answer: "L'équinoxe de printemps (ou équinoxe vernal).",
      explanation:
        "C'est le moment où le Soleil se trouve directement au-dessus de l'équateur, et où la durée du jour est presque égale à celle de la nuit partout sur Terre.",
    },
    open_question: {
      question:
        "L'exploration spatiale (missions vers Mars, etc.) doit-elle être la priorité des budgets scientifiques ?",
      notes:
        "Débat sur la pertinence des dépenses spatiales face aux problèmes terrestres (climat, faim, maladies).",
    },
    did_you_know: {
      text: "L'équinoxe de printemps tombe généralement le 20 ou le 21 mars, marquant le début d'un ensoleillement accru dans l'hémisphère nord.",
    },
  },
  {
    date: "2026-03-21",
    general_question: {
      question:
        "Quel pays a pour devise le 'Chéquier Bleu' (ou 'Blue Cheque') en tant que symbole de l'État-providence ?",
      answer: "Le Royaume-Uni (dans les années d'après-guerre).",
      explanation:
        "Ce terme fait référence aux mesures de sécurité sociale et de santé publique mises en place après la Seconde Guerre mondiale, notamment la création du National Health Service (NHS).",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "Les chats domestiques partagent 95,6 % de leur ADN avec les tigres.",
    },
  },
  {
    date: "2026-03-22",
    general_question: {
      question:
        "Quel est le nom de la zone de l'océan Atlantique sans courants dominants ni vents réguliers, souvent associée au mystère ?",
      answer:
        "Le triangle des Bermudes (mais surtout, la Mer des Sargasses est la zone calme).",
      explanation:
        "Le Triangle des Bermudes est une zone géographique où des disparitions inexpliquées ont eu lieu. La mer des Sargasses est connue pour son calme et son absence de courants, ce qui a longtemps été un problème pour la navigation à voile.",
    },
    open_question: {
      question:
        "Comment concilier le besoin de souveraineté alimentaire nationale avec les principes du libre-échange international ?",
      notes:
        "Débat sur les subventions agricoles, les barrières douanières et la sécurité alimentaire mondiale.",
    },
    did_you_know: {
      text: "Le bois de balsa est le bois le plus léger du monde, pesant moins que le liège, et est souvent utilisé dans la construction de maquettes d'avions.",
    },
  },
  {
    date: "2026-03-23",
    general_question: {
      question: "Qui a fondé la société automobile Ford en 1903 ?",
      answer: "Henry Ford.",
      explanation:
        "Il est célèbre pour l'introduction de la production à la chaîne (travail à la chaîne) dans la fabrication automobile, réduisant les coûts de manière significative.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "Les tornades les plus fortes du monde se produisent généralement aux États-Unis, dans une région surnommée 'Tornado Alley'.",
    },
  },
  {
    date: "2026-03-24",
    general_question: {
      question:
        "Quelle est l'hormone surnommée 'l'hormone du stress' car elle est libérée en réponse à une situation de tension ou de danger ?",
      answer: "Le cortisol.",
      explanation:
        "Produit par les glandes surrénales, le cortisol prépare le corps à la réaction de 'lutte ou de fuite' en augmentant le taux de sucre dans le sang.",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "Le silence absolu est considéré comme impossible à atteindre. Dans une chambre anéchoïque (la plus silencieuse au monde), on peut entendre le bruit de son propre cœur ou le sang circuler.",
    },
  },
  {
    date: "2026-03-25",
    general_question: {
      question:
        "Quel est le titre de l'opéra le plus connu de Mozart (en allemand) ?",
      answer: "Die Zauberflöte (La Flûte enchantée).",
      explanation:
        "C'est un opéra en deux actes composé en 1791, qui mélange comédie et thèmes philosophiques.",
    },
    open_question: {
      question:
        "Les réseaux sociaux ont-ils un impact globalement positif ou négatif sur la santé mentale de leurs utilisateurs ?",
      notes:
        "Débat sur les effets de l'exposition constante, la comparaison sociale et la désinformation.",
    },
    did_you_know: {
      text: "Les éléphants sont capables d'imiter les sons entendus dans leur environnement, y compris la parole humaine (bien que ce soit rare).",
    },
  },
  {
    date: "2026-03-26",
    general_question: {
      question:
        "Quel explorateur portugais a été le premier à effectuer le tour du monde, bien qu'il soit mort aux Philippines en 1521 ?",
      answer: "Fernand de Magellan.",
      explanation:
        "Son expédition a été la première à circumnaviguer la Terre, même si Magellan est mort avant d'atteindre l'Espagne ; c'est Juan Sebastián Elcano qui a terminé le voyage.",
    },
    open_question: {
      question:
        "Le droit d'auteur doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des artistes.",
    },
    did_you_know: {
      text: "L'inventeur de la première voiture à essence, Karl Benz, a breveté son 'véhicule automobile' le 29 janvier 1886.",
    },
  },
  {
    date: "2026-03-27",
    general_question: {
      question: "Combien de jours y a-t-il dans l'année 2026 ?",
      answer: "365 jours.",
      explanation:
        "L'année 2026 n'est pas une année bissextile (elle n'est pas divisible par 4), elle compte donc 365 jours. La prochaine année bissextile sera 2028.",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Le mot 'marsupial' vient du latin 'marsupium' qui signifie 'poche', en référence à la poche abdominale des femelles.",
    },
    // --- Mars 2026 (4 jours restants) ---

    date: "2026-03-28",
    general_question: {
      question: "Quel est le nom du plus grand océan de la Terre ?",
      answer: "L'océan Pacifique.",
      explanation:
        "Il couvre environ un tiers de la surface terrestre et est si grand qu'il pourrait contenir toutes les masses terrestres réunies.",
    },
    open_question: {
      question:
        "Le système éducatif doit-il privilégier les matières scientifiques (STEM) ou les humanités (littérature, philosophie) pour préparer les citoyens de demain ?",
      notes:
        "Débat sur l'importance de la pensée critique et de la créativité face à la demande de compétences techniques.",
    },
    did_you_know: {
      text: "Le mot 'dollar' dérive de 'thaler', une ancienne monnaie d'argent utilisée dans le Saint-Empire romain germanique.",
    },
  },
  {
    date: "2026-03-29",
    general_question: {
      question:
        "Qui est le peintre italien connu pour ses fresques de la chapelle Sixtine, notamment 'La Création d'Adam' ?",
      answer: "Michel-Ange (Michelangelo Buonarroti).",
      explanation:
        "Il a travaillé sur le plafond de la chapelle Sixtine de 1508 à 1512, sur commande du Pape Jules II.",
    },
    open_question: {
      question:
        "L'utilisation d'assistants vocaux (Alexa, Google, Siri) dans les foyers représente-t-elle un risque acceptable pour la vie privée ?",
      notes:
        "Débat sur la collecte de données, l'écoute permanente et la transparence des politiques de confidentialité.",
    },
    did_you_know: {
      text: "Contrairement à la croyance populaire, les lemmings ne se jettent pas volontairement dans la mer lors de migrations. Ce mythe a été popularisé par un documentaire de Disney.",
    },
  },
  {
    date: "2026-03-30",
    general_question: {
      question:
        "Quel est le nom du traité signé en 1957 qui est considéré comme l'acte fondateur de la Communauté économique européenne (CEE) ?",
      answer: "Le Traité de Rome.",
      explanation:
        "Il a été signé par six pays fondateurs (Allemagne, Belgique, France, Italie, Luxembourg, Pays-Bas) et a établi un marché commun.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' d'ici 2050 est-il techniquement et économiquement réaliste à l'échelle mondiale ?",
      notes:
        "Débat sur la faisabilité des technologies de capture de carbone, les changements de mode de vie nécessaires et le coût de la transition énergétique.",
    },
    did_you_know: {
      text: "L'étoile la plus proche du Soleil, Proxima Centauri, est une naine rouge située à environ 4,24 années-lumière.",
    },
  },
  {
    date: "2026-03-31",
    general_question: {
      question:
        "Quelle est l'unité de mesure standard pour l'intensité du courant électrique ?",
      answer: "L'Ampère (A).",
      explanation:
        "L'Ampère (du nom du physicien André-Marie Ampère) mesure la quantité de charge électrique qui passe par un point donné en une seconde.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites aux multinationales en matière d'optimisation fiscale (évasion fiscale légale) ?",
      notes:
        "Débat sur les impôts minimums mondiaux, la concurrence fiscale et l'équité des contributions.",
    },
    did_you_know: {
      text: "Le nez humain est capable de se souvenir d'environ 50 000 odeurs différentes.",
    },
  },

  // --- Avril 2026 (30 jours) ---
  {
    date: "2026-04-01",
    general_question: {
      question:
        "Quel est le nom du célèbre détroit qui relie la mer Méditerranée à l'océan Atlantique ?",
      answer: "Le détroit de Gibraltar.",
      explanation:
        "Il sépare l'Europe (Espagne et Gibraltar) de l'Afrique (Maroc et Ceuta).",
    },
    open_question: {
      question:
        "Les 'influenceurs' numériques doivent-ils être soumis aux mêmes règles de transparence et de déontologie que les médias traditionnels ?",
      notes:
        "Débat sur la publicité déguisée, la crédibilité des sources et la responsabilité éditoriale.",
    },
    did_you_know: {
      text: "La tradition du 'Poisson d'avril' remonterait à 1564, lorsque le roi Charles IX a décalé le début de l'année au 1er janvier, laissant le 1er avril aux farceurs.",
    },
  },
  {
    date: "2026-04-02",
    general_question: {
      question: "Qui est l'auteur du roman épique 'Guerre et Paix' ?",
      answer: "Léon Tolstoï.",
      explanation:
        "Publié en 1869, ce roman monumental retrace l'histoire de la société russe pendant les guerres napoléoniennes.",
    },
    open_question: {
      question:
        "Faut-il légaliser et encadrer le marché des organes humains pour sauver des vies et combattre le trafic illégal ?",
      notes:
        "Débat éthique, social et économique sur la marchandisation du corps humain et l'altruisme.",
    },
    did_you_know: {
      text: "Le cœur de la souris bat environ 450 fois par minute, tandis que celui de l'humain bat entre 60 et 100 fois par minute.",
    },
  },
  {
    date: "2026-04-03",
    general_question: {
      question:
        "Quel type de rayonnement électromagnétique a la longueur d'onde la plus courte et la plus haute énergie ?",
      answer: "Les rayons Gamma.",
      explanation:
        "Ils sont produits par les phénomènes les plus violents de l'univers, comme les explosions de supernovae et les désintégrations nucléaires.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "L'acronyme 'NASA' signifie National Aeronautics and Space Administration.",
    },
  },
  {
    date: "2026-04-04",
    general_question: {
      question:
        "Dans quel pays se trouve la ville de La Mecque, lieu le plus sacré de l'Islam ?",
      answer: "L'Arabie Saoudite.",
      explanation:
        "La Mecque abrite la Kaaba, vers laquelle se tournent les musulmans du monde entier pour prier, et est le lieu du pèlerinage (Hajj).",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "Les fourmis sont parmi les rares créatures à 'cultiver' : certaines espèces élèvent des champignons pour se nourrir, de la même manière que les humains cultivent.",
    },
  },
  {
    date: "2026-04-05",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Au' et connu pour sa résistance à la corrosion ?",
      answer: "L'or (Aurum).",
      explanation:
        "L'or est un métal précieux et inaltérable. Son nom latin, *Aurum*, signifie 'brillant' ou 'lueur de l'aube'.",
    },
    open_question: {
      question:
        "Le tourisme spatial devrait-il être encouragé malgré son coût environnemental et social élevé ?",
      notes:
        "Débat sur la justification des dépenses et de l'empreinte carbone pour l'exploration privée de l'espace.",
    },
    did_you_know: {
      text: "La cloche de la Liberté (Liberty Bell) à Philadelphie a été fondue pour la première fois en 1752, mais s'est fissurée dès le premier coup de marteau.",
    },
  },
  {
    date: "2026-04-06",
    general_question: {
      question:
        "Dans quel sport professionnel le terme 'Home Run' (circuit) est-il utilisé ?",
      answer: "Le baseball.",
      explanation:
        "C'est un coup sûr qui permet au frappeur de faire le tour complet des bases et de marquer un point (et potentiellement les coureurs déjà sur base).",
    },
    open_question: {
      question:
        "Faut-il interdire l'exploitation minière en haute mer pour protéger des écosystèmes encore largement inexplorés ?",
      notes:
        "Discussion sur le besoin de métaux rares, les conséquences environnementales irréversibles et la réglementation internationale.",
    },
    did_you_know: {
      text: "Les humains sont les seuls animaux à avoir un menton prononcé. Sa fonction évolutive reste un sujet de débat scientifique.",
    },
  },
  {
    date: "2026-04-07",
    general_question: {
      question:
        "Qui est le mathématicien connu pour avoir défini le théorème qui décrit la relation entre les côtés d'un triangle rectangle ($a^2 + b^2 = c^2$) ?",
      answer: "Pythagore.",
      explanation:
        "Bien qu'il soit attribué à Pythagore, ce théorème était déjà connu dans d'autres civilisations (babylonienne, égyptienne) avant lui, mais il en aurait fourni la première preuve formelle.",
    },
    open_question: {
      question:
        "L'hyper-connectivité et la dépendance aux smartphones modifient-elles la structure cognitive du cerveau humain ?",
      notes:
        "Discussion sur la capacité d'attention, la mémorisation et l'impact sur le sommeil.",
    },
    did_you_know: {
      text: "Le mot 'avril' vient du latin 'aperire', qui signifie 'ouvrir', en référence à l'ouverture des bourgeons au printemps.",
    },
  },
  {
    date: "2026-04-08",
    general_question: {
      question:
        "Quel était le nom de l'empire dirigé par Montezuma II et vaincu par Hernán Cortés ?",
      answer: "L'Empire Aztèque.",
      explanation:
        "L'Empire Aztèque, dont la capitale était Tenochtitlan (l'actuelle Mexico), a été conquis par les Espagnols et leurs alliés locaux en 1521.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "Il existe plus d'arbres sur Terre qu'il n'y a d'étoiles dans notre galaxie, la Voie Lactée (environ 3 000 milliards d'arbres contre 100 à 400 milliards d'étoiles).",
    },
  },
  {
    date: "2026-04-09",
    general_question: {
      question:
        "Quel pays européen est connu pour avoir les fjords les plus profonds et les plus longs ?",
      answer: "La Norvège.",
      explanation:
        "Les fjords sont d'anciennes vallées glaciaires inondées par la mer. Le Sognefjord est l'un des plus célèbres de Norvège.",
    },
    open_question: {
      question:
        "Faut-il interdire la publicité pour les produits considérés comme mauvais pour la santé (sucre, alcool, malbouffe) ?",
      notes:
        "Débat sur la liberté de commerce versus la responsabilité de l'État dans la santé publique.",
    },
    did_you_know: {
      text: "L'œil d'une autruche est plus grand que son cerveau. L'autruche a les plus grands yeux de tous les vertébrés terrestres.",
    },
  },
  {
    date: "2026-04-10",
    general_question: {
      question:
        "Quel est le nom du gaz noble qui compose la majeure partie de l'atmosphère terrestre ?",
      answer: "L'Azote ($N_2$).",
      explanation:
        "L'atmosphère est composée d'environ 78 % d'azote, 21 % d'oxygène, et d'autres gaz (argon, $CO_2$) en plus petites quantités.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être obligatoire pour assurer une représentation démocratique maximale ?",
      notes:
        "Discussion sur la légitimité du vote, l'apathie politique et les sanctions en cas d'abstention.",
    },
    did_you_know: {
      text: "La pomme de terre, la tomate et le piment sont tous originaires du continent américain, et non d'Europe ou d'Asie.",
    },
  },
  {
    date: "2026-04-11",
    general_question: {
      question: "Quel dramaturge britannique a écrit 'Hamlet' et 'Macbeth' ?",
      answer: "William Shakespeare.",
      explanation:
        "Ses tragédies sont parmi les œuvres les plus jouées au monde. 'Hamlet' contient la célèbre ligne 'Être ou ne pas être'.",
    },
    open_question: {
      question:
        "Le système de retraite par répartition est-il durable face au vieillissement démographique et à l'allongement de l'espérance de vie ?",
      notes:
        "Discussion sur l'âge de départ, les cotisations et la nécessité de réformes structurelles.",
    },
    did_you_know: {
      text: "Le mot 'bibliothèque' en français est souvent dérivé du grec *bibliothēkē*, signifiant étymologiquement 'dépôt de livres'.",
    },
  },
  {
    date: "2026-04-12",
    general_question: {
      question:
        "Quelle est la plus grande structure construite sur Terre par un organisme vivant ?",
      answer: "La Grande Barrière de Corail (Australie).",
      explanation:
        "Elle est composée de milliards de petits organismes appelés polypes coralliens et s'étend sur plus de 2 300 kilomètres.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "Le 12 avril commémore le premier vol habité dans l'espace (Youri Gagarine en 1961) et le lancement de la première navette spatiale américaine (Columbia en 1981).",
    },
  },
  {
    date: "2026-04-13",
    general_question: {
      question:
        "Quel est l'organe humain qui utilise le plus d'énergie et d'oxygène au repos ?",
      answer: "Le cerveau.",
      explanation:
        "Malgré ne représentant que 2 % du poids corporel, le cerveau utilise environ 20 % de l'oxygène et des calories totales consommées par le corps.",
    },
    open_question: {
      question:
        "Les monnaies numériques de banque centrale (MNBC) doivent-elles remplacer l'argent liquide traditionnel ?",
      notes:
        "Discussion sur la surveillance financière, l'inclusion bancaire et la stabilité économique.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas légers. Un cumulus moyen peut peser plus de 500 tonnes, soit l'équivalent d'un avion gros porteur.",
    },
  },
  {
    date: "2026-04-14",
    general_question: {
      question:
        "Quelle est la capitale de l'Afrique du Sud (capitale administrative) ?",
      answer: "Pretoria.",
      explanation:
        "L'Afrique du Sud a trois capitales : Pretoria (administrative), Le Cap (législative) et Bloemfontein (judiciaire).",
    },
    open_question: {
      question:
        "L'exploration et la commercialisation des astéroïdes (exploitation minière spatiale) sont-elles le futur de l'humanité ?",
      notes:
        "Discussion sur la faisabilité technique, les traités internationaux (espace), et le risque de pollution spatiale.",
    },
    did_you_know: {
      text: "Le verre n'est pas un solide au sens strict, mais un 'liquide amorphe surfondu'. Cependant, à température ambiante, il est tellement visqueux qu'il apparaît et se comporte comme un solide.",
    },
  },
  {
    date: "2026-04-15",
    general_question: {
      question:
        "Quel artiste de la Renaissance est célèbre pour son dessin de l'Homme de Vitruve ?",
      answer: "Léonard de Vinci.",
      explanation:
        "Ce dessin, réalisé vers 1490, illustre les proportions idéales du corps humain selon les écrits de l'architecte romain Vitruve.",
    },
    open_question: {
      question:
        "La censure des contenus extrêmes sur les plateformes numériques (discours de haine, terrorisme) menace-t-elle la liberté d'expression ?",
      notes:
        "Débat sur le rôle des modérateurs, les algorithmes de détection et la définition de l'abus.",
    },
    did_you_know: {
      text: "L'œil humain est capable de distinguer environ 10 millions de couleurs différentes.",
    },
  },
  {
    date: "2026-04-16",
    general_question: {
      question:
        "Quel est le nom de la péninsule asiatique qui comprend les pays de la Malaisie, de la Thaïlande et de la Birmanie ?",
      answer: "La péninsule Malaise (ou péninsule de Malacca).",
      explanation:
        "Elle est l'extrémité la plus méridionale du continent asiatique, jouant un rôle stratégique dans le commerce maritime.",
    },
    open_question: {
      question:
        "Les pays développés devraient-ils annuler la dette des pays en développement en échange d'engagements environnementaux ?",
      notes:
        "Discussion sur le 'swap' dette-nature, la souveraineté économique et l'équité Nord-Sud.",
    },
    did_you_know: {
      text: "Les planètes du système solaire ne sont pas alignées, comme on le voit souvent dans les représentations. Elles sont toutes sur un plan, mais à des positions orbitales différentes.",
    },
  },
  {
    date: "2026-04-17",
    general_question: {
      question:
        "Quel est le nom de l'effet optique qui donne l'impression que la lumière est plus bleue par temps clair que par temps nuageux ?",
      answer: "La diffusion Rayleigh.",
      explanation:
        "Cet effet explique pourquoi le ciel est bleu : les molécules d'air diffusent la lumière bleue plus efficacement que les autres couleurs.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "Il a plu des grenouilles à plusieurs reprises dans l'histoire, un phénomène rare souvent expliqué par des tornades ou des trombes marines qui aspirent de petits animaux et les déposent ailleurs.",
    },
  },
  {
    date: "2026-04-18",
    general_question: {
      question:
        "Qui est l'auteur des romans policiers mettant en scène le détective Hercule Poirot ?",
      answer: "Agatha Christie.",
      explanation:
        "Christie est l'une des auteurs les plus vendues au monde, et Hercule Poirot, un détective belge, est l'un de ses personnages les plus célèbres.",
    },
    open_question: {
      question:
        "La légalisation des drogues douces est-elle une solution pour réduire le crime organisé et améliorer la santé publique ?",
      notes:
        "Débat sur la réglementation, les recettes fiscales et les risques d'abus et de dépendance.",
    },
    did_you_know: {
      text: "Le tremblement de terre de San Francisco en 1906, qui a causé d'énormes dégâts, est survenu très tôt le matin du 18 avril.",
    },
  },
  {
    date: "2026-04-19",
    general_question: {
      question:
        "Quel est le nom du plus grand lac artificiel du monde (en volume) ?",
      answer: "Le lac Kariba (Zambie/Zimbabwe).",
      explanation:
        "Formé par le barrage de Kariba sur le fleuve Zambèze, il est souvent considéré comme le plus grand lac artificiel en termes de volume d'eau stocké.",
    },
    open_question: {
      question:
        "Les systèmes de notation et de classement des universités (type Shanghai) sont-ils une mesure fiable de la qualité académique ?",
      notes:
        "Débat sur les critères de recherche vs. d'enseignement, l'homogénéisation des modèles et la course au prestige.",
    },
    did_you_know: {
      text: "Le jour de Pâques n'a pas de date fixe. Il tombe le premier dimanche après la première pleine lune suivant l'équinoxe de printemps.",
    },
  },
  {
    date: "2026-04-20",
    general_question: {
      question:
        "Quel organe est responsable de la détoxification du sang et de la production de bile ?",
      answer: "Le foie.",
      explanation:
        "Le foie est l'organe interne le plus volumineux et accomplit plus de 500 fonctions vitales dans le corps humain.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "La pression artérielle d'un humain varie tout au long de la journée et est généralement plus basse pendant le sommeil.",
    },
  },
  {
    date: "2026-04-21",
    general_question: {
      question:
        "Selon la légende, quelle ville antique a été fondée par Romulus et Remus ?",
      answer: "Rome.",
      explanation:
        "La légende veut que Romulus ait tué Remus avant de fonder la ville le 21 avril 753 av. J.-C.",
    },
    open_question: {
      question:
        "Le revenu universel de base est-il une solution viable pour l'automatisation croissante des emplois ?",
      notes:
        "Discussion sur son coût, son impact sur l'incitation au travail et la réduction de la pauvreté.",
    },
    did_you_know: {
      text: "Le mot 'virus' vient du latin signifiant 'toxine' ou 'poison'.",
    },
  },
  {
    date: "2026-04-22",
    general_question: {
      question: "Quel est le plus haut sommet de l'Amérique du Nord ?",
      answer: "Le Denali (ou Mont McKinley) en Alaska.",
      explanation:
        "Il culmine à 6 190 mètres au-dessus du niveau de la mer. Son nom autochtone (Denali) a été officiellement rétabli en 2015.",
    },
    open_question: {
      question:
        "L'IA générative doit-elle être soumise à des lois éthiques plus strictes que les entreprises classiques ?",
      notes:
        "Débat sur la régulation de l'IA (transparence, biais, impact sociétal) vs. la liberté d'innovation.",
    },
    did_you_know: {
      text: "Le 22 avril est célébré dans de nombreux pays comme le 'Jour de la Terre' (Earth Day) depuis 1970.",
    },
  },
  {
    date: "2026-04-23",
    general_question: {
      question:
        "Qui a écrit le poème épique 'L'Enéide', décrivant la fondation mythique de Rome ?",
      answer: "Virgile (Publius Vergilius Maro).",
      explanation:
        "Ce poème du Ier siècle av. J.-C. est considéré comme l'épopée nationale de l'Empire romain.",
    },
    open_question: {
      question:
        "Les véhicules autonomes doivent-ils être programmés pour privilégier la vie du passager ou celle du piéton en cas d'accident inévitable ?",
      notes:
        "Problème du dilemme du 'Trolley' appliqué à l'IA et aux véhicules, débat éthique sur la programmation morale.",
    },
    did_you_know: {
      text: "Le 23 avril est traditionnellement la date de la mort de William Shakespeare et de Miguel de Cervantes (1616), d'où son statut de Journée Mondiale du Livre.",
    },
  },
  {
    date: "2026-04-24",
    general_question: {
      question:
        "Quelle est l'unité de mesure de la force dans le Système international d'unités (SI) ?",
      answer: "Le Newton (N).",
      explanation:
        "Un Newton est défini comme la force nécessaire pour donner à une masse de 1 kilogramme une accélération de 1 mètre par seconde carrée ($1\text{ N} = 1\text{ kg}cdot\text{m/s}^2$).",
    },
    open_question: {
      question:
        "Le service militaire ou civil obligatoire pour les jeunes est-il un outil efficace d'intégration et de cohésion nationale ?",
      notes:
        "Discussion sur l'utilité, la contrainte individuelle et l'apprentissage de la citoyenneté.",
    },
    did_you_know: {
      text: "Un 'jiffy' est une unité de temps informelle et extrêmement courte, utilisée en physique pour décrire le temps qu'il faut à la lumière pour parcourir un centimètre dans le vide (environ $3,33$ picosecondes).",
    },
  },
  {
    date: "2026-04-25",
    general_question: {
      question:
        "Quel est le nom du célèbre musée abritant la Joconde et La Vénus de Milo ?",
      answer: "Le Musée du Louvre (Paris).",
      explanation:
        "C'est le musée d'art le plus visité au monde. Il a été une forteresse médiévale avant d'être un palais royal.",
    },
    open_question: {
      question:
        "Le boycott des entreprises qui ne respectent pas certaines normes éthiques (environnement, travail) est-il un outil efficace de changement social ?",
      notes:
        "Discussion sur l'impact économique réel, le 'greenwashing' et le pouvoir du consommateur.",
    },
    did_you_know: {
      text: "Les koalas n'ont pas de poche marsupiale développée pour transporter leurs petits, contrairement aux kangourous ou aux wallabies.",
    },
  },
  {
    date: "2026-04-26",
    general_question: {
      question:
        "Quel événement tragique s'est produit à Tchernobyl (Ukraine) en 1986 ?",
      answer: "L'accident nucléaire (explosion du réacteur n°4).",
      explanation:
        "C'est la catastrophe nucléaire la plus grave de l'histoire civile en termes de rejets radioactifs, classée niveau 7 sur l'échelle INES.",
    },
    open_question: {
      question:
        "Le droit à l'avortement est-il un droit fondamental absolu ou doit-il être soumis à certaines restrictions ?",
      notes:
        "Débat éthique et légal sur la temporalité, la conscience médicale et les motifs d'interruption de grossesse.",
    },
    did_you_know: {
      text: "La Terre tourne autour du Soleil à une vitesse d'environ $107 000$ kilomètres par heure.",
    },
  },
  {
    date: "2026-04-27",
    general_question: {
      question:
        "Comment appelle-t-on le processus par lequel les étoiles massives arrivent à la fin de leur vie et explosent ?",
      answer: "Supernova.",
      explanation:
        "Une supernova est une explosion stellaire extrêmement lumineuse. Elle est responsable de la création et de la dispersion dans l'univers de nombreux éléments chimiques lourds.",
    },
    open_question: {
      question:
        "La démocratie directe (référendums fréquents, initiatives citoyennes) est-elle supérieure à la démocratie représentative ?",
      notes:
        "Débat sur l'efficacité des décisions, la complexité des lois et le risque de 'tyrannie de la majorité'.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : Alpha ($alpha$) et Beta ($\beta$).",
    },
  },
  {
    date: "2026-04-28",
    general_question: {
      question: "Qui est l'auteur du célèbre roman 'Le Petit Prince' ?",
      answer: "Antoine de Saint-Exupéry.",
      explanation:
        "Publié en 1943, c'est l'une des œuvres les plus traduites au monde, sous l'apparence d'un conte pour enfants.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles avoir une obligation légale de réparer leurs produits plutôt que d'encourager le renouvellement (obsolescence programmée) ?",
      notes:
        "Discussion sur le 'droit à la réparation', la durabilité des produits et l'économie circulaire.",
    },
    did_you_know: {
      text: "Une personne moyenne passe environ six mois de sa vie à attendre que les feux de circulation passent au vert.",
    },
  },
  {
    date: "2026-04-29",
    general_question: {
      question:
        "Quel est le plus grand désert d'Asie, s'étendant sur la Chine et la Mongolie ?",
      answer: "Le désert de Gobi.",
      explanation:
        "C'est un désert froid. Son nom signifie 'lieu sans eau' ou 'semi-désert' en mongol.",
    },
    open_question: {
      question:
        "Les classes préparatoires et les grandes écoles sont-elles le meilleur modèle pour former l'élite d'une nation ?",
      notes:
        "Débat sur l'égalité des chances, l'élitisme et la diversité des parcours éducatifs.",
    },
    did_you_know: {
      text: "L'émeu et le kangourou sont les seuls animaux représentés sur les armoiries de l'Australie, choisis car ils sont incapables de marcher en arrière, symbolisant le progrès.",
    },
  },
  {
    date: "2026-04-30",
    general_question: {
      question:
        "Comment appelle-t-on le phénomène selon lequel la chaleur est piégée par l'atmosphère terrestre ?",
      answer: "L'effet de serre.",
      explanation:
        "Les gaz à effet de serre (vapeur d'eau, $CO_2$, méthane) agissent comme une couverture, réchauffant la planète.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de manifester pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "En moyenne, 100 éclairs frappent la Terre chaque seconde.",
    },
  },

  // --- Mai 2026 (31 jours) ---
  {
    date: "2026-05-01",
    general_question: {
      question:
        "Dans quel pays est né et a vécu la philosophe et féministe Simone de Beauvoir ?",
      answer: "La France.",
      explanation:
        "Auteure du 'Deuxième Sexe', elle est une figure majeure de l'existentialisme et du féminisme du XXe siècle.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "Le 1er mai est la Fête du Travail dans de nombreux pays, mais il est également connu en France pour la tradition d'offrir du muguet comme porte-bonheur.",
    },
  },
  {
    date: "2026-05-02",
    general_question: {
      question:
        "Quel est le nom de l'instrument à cordes le plus souvent utilisé pour diriger l'orchestre (par le premier violon) ?",
      answer: "Le violon.",
      explanation:
        "Dans un orchestre symphonique, le 'premier violon' est souvent le leader de la section des cordes et interagit directement avec le chef d'orchestre.",
    },
    open_question: {
      question:
        "Le salaire minimum est-il un outil efficace pour lutter contre la pauvreté ou un frein à l'emploi et à la compétitivité des entreprises ?",
      notes:
        "Débat sur l'inflation, le pouvoir d'achat et le marché du travail.",
    },
    did_you_know: {
      text: "L'eau est le seul composé qui existe naturellement sur Terre sous les trois états : solide (glace), liquide (eau) et gazeux (vapeur).",
    },
  },
  {
    date: "2026-05-03",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite 'La Cène' de Léonard de Vinci ?",
      answer: "Le couvent de Santa Maria delle Grazie (Milan, Italie).",
      explanation:
        "Contrairement à une toile, 'La Cène' est une fresque murale peinte sur le mur du réfectoire du couvent.",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Les escargots ont des milliers de dents microscopiques (appelées radula) sur leur langue, qu'ils utilisent pour râper la nourriture.",
    },
  },
  {
    date: "2026-05-04",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée (notre galaxie) ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Elle est située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée dans environ 4,5 milliards d'années.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "L'expression 'May the Fourth Be With You' est une référence au film *Star Wars*, faisant un jeu de mots avec la phrase 'May the Force Be With You'.",
    },
  },
  {
    date: "2026-05-05",
    general_question: {
      question:
        "Quel dictateur européen a été vaincu lors de la bataille d'Austerlitz en 1805 ?",
      answer:
        "Aucun. C’est une question piège",
      explanation:
        "aucun dictateur européen n’a été vaincu à Austerlitz.",
    },
    open_question: {
      question:
        "Jusqu'où la technologie de modification génétique (CRISPR) doit-elle être autorisée chez l'homme ?",
      notes:
        "Débat sur la thérapie des maladies génétiques vs. la modification des caractères héréditaires (bébés 'sur mesure').",
    },
    did_you_know: {
      text: "Le mot 'mai' est nommé d'après Maia, la déesse grecque de la fertilité, honorée par les Romains.",
    },
  },
  {
    date: "2026-05-06",
    general_question: {
      question:
        "Quel est le seul continent qui n'est traversé par aucun fleuve ?",
      answer: "L'Antarctique.",
      explanation:
        "L'eau y est presque entièrement sous forme de glace. Les rares flux d'eau sont saisonniers ou sous-glaciaires.",
    },
    open_question: {
      question:
        "Comment l'urbanisme peut-il être repensé pour améliorer la qualité de vie et réduire l'empreinte carbone des grandes métropoles ?",
      notes:
        "Débat sur la 'ville du quart d'heure', les transports doux et la végétalisation urbaine.",
    },
    did_you_know: {
      text: "Les chauves-souris sont les seuls mammifères capables de voler activement (les écureuils volants ne font que planer).",
    },
  },
  {
    date: "2026-05-07",
    general_question: {
      question:
        "Quelle est la plus longue chaîne de montagnes sous-marine du monde ?",
      answer: "La Dorsale médio-océanique.",
      explanation:
        "Elle s'étend sur plus de 65 000 kilomètres, couvrant environ 23 % de la surface terrestre. C'est là que se forme une nouvelle croûte terrestre.",
    },
    open_question: {
      question:
        "Le secret bancaire est-il nécessaire pour la liberté économique ou favorise-t-il la criminalité financière et la fraude fiscale ?",
      notes:
        "Discussion sur la transparence fiscale internationale, les paradis fiscaux et le droit à l'intimité financière.",
    },
    did_you_know: {
      text: "Le cri du hibou est appelé 'hululer' ou 'chouetter'.",
    },
  },
  {
    date: "2026-05-08",
    general_question: {
      question:
        "Qui était le premier président des États-Unis, entré en fonction en 1789 ?",
      answer: "George Washington.",
      explanation:
        "Il a dirigé l'Armée continentale lors de la Guerre d'indépendance et a présidé la Convention constitutionnelle de 1787.",
    },
    open_question: {
      question:
        "L'armement par les pays occidentaux des pays menacés est-il un garant de la paix ou un facteur d'escalade des conflits ?",
      notes:
        "Débat sur la légitime défense, les traités de non-prolifération et le rôle des marchands d'armes.",
    },
    did_you_know: {
      text: "Le 8 mai commémore la victoire des Alliés sur l'Allemagne nazie en 1945, marquant la fin de la Seconde Guerre mondiale en Europe (Jour de la Victoire).",
    },
  },
  {
    date: "2026-05-09",
    general_question: {
      question: "Quelle est la capitale de la Nouvelle-Zélande ?",
      answer: "Wellington.",
      explanation:
        "Wellington est la capitale, et non Auckland (la plus grande ville) ou Christchurch.",
    },
    open_question: {
      question:
        "Faut-il conditionner l'aide au développement des pays pauvres à des critères de bonne gouvernance et de respect des droits humains ?",
      notes:
        "Débat sur la souveraineté, l'efficacité de l'aide et les risques d'ingérence.",
    },
    did_you_know: {
      text: "Le kiwi, l'oiseau symbole de la Nouvelle-Zélande, est incapable de voler et est nocturne.",
    },
  },
  {
    date: "2026-05-10",
    general_question: {
      question:
        "Quel gaz est responsable de l'odeur caractéristique de l'ail et des oignons, contenant du soufre ?",
      answer: "L'allicine (et autres composés organosoufrés).",
      explanation:
        "L'allicine est produite lorsque l'ail est coupé ou écrasé, suite à la réaction enzymatique de l'alliine.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "Les tornades les plus violentes ont des vents qui peuvent atteindre $480$ km/h et sont classées F5 ou EF5 sur l'échelle de Fujita améliorée.",
    },
  },
  {
    date: "2026-05-11",
    general_question: {
      question:
        "Qui a inventé l'ampoule électrique à filament de carbone durable, largement commercialisée à partir de 1879 ?",
      answer: "Thomas Edison.",
      explanation:
        "Bien que d'autres aient travaillé sur l'ampoule, Edison est crédité d'avoir créé le premier système d'éclairage électrique complet et commercialement viable.",
    },
    open_question: {
      question:
        "Le droit des auteurs et artistes doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des créateurs.",
    },
    did_you_know: {
      text: "La brosse à dents, dans sa forme moderne (avec poils), a été inventée en Chine au XVe siècle, bien que des bâtonnets à mâcher aient existé avant.",
    },
  },
  {
    date: "2026-05-12",
    general_question: {
      question:
        "Quel mathématicien et physicien grec est connu pour la célèbre exclamation 'Eurêka' (J'ai trouvé) ?",
      answer: "Archimède.",
      explanation:
        "L'histoire raconte qu'il a fait cette exclamation après avoir découvert la loi de la poussée hydrostatique, connue sous le nom de principe d'Archimède, en prenant son bain.",
    },
    open_question: {
      question:
        "Les entreprises technologiques (GAFA) sont-elles devenues trop puissantes et doivent-elles être démantelées (lois antitrust) ?",
      notes:
        "Discussion sur le monopole, la concurrence, la protection des données et le lobbying politique.",
    },
    did_you_know: {
      text: "La Journée Internationale de l'Infirmière est célébrée le 12 mai, date de naissance de Florence Nightingale, pionnière des soins infirmiers modernes.",
    },
  },
  {
    date: "2026-05-13",
    general_question: {
      question: "Quel pays est le plus grand producteur mondial de café ?",
      answer: "Le Brésil.",
      explanation:
        "Le Brésil domine la production mondiale de café depuis plus de 150 ans et fournit environ un tiers de l'approvisionnement mondial.",
    },
    open_question: {
      question:
        "La peine de prison est-elle avant tout punitive ou doit-elle être réhabilitatrice pour permettre la réinsertion sociale ?",
      notes:
        "Débat sur la surpopulation carcérale, les taux de récidive et les alternatives à l'incarcération.",
    },
    did_you_know: {
      text: "Un gramme d'ADN peut stocker $215$ pétaoctets (environ $220$ millions de gigaoctets) de données, ce qui en fait le support de stockage le plus dense connu.",
    },
  },
  {
    date: "2026-05-14",
    general_question: {
      question:
        "Quelle est l'œuvre musicale du compositeur Johann Sebastian Bach considérée comme la 'Bible des pianistes' ?",
      answer: "Le Clavier bien tempéré.",
      explanation:
        "C'est un recueil de préludes et de fugues dans les 24 tonalités majeures et mineures, démontrant la possibilité de jouer dans toutes les tonalités.",
    },
    open_question: {
      question:
        "Le système du collège/lycée unique est-il le plus efficace pour l'épanouissement des élèves ou faut-il introduire une sélection plus précoce ?",
      notes:
        "Débat sur l'orientation, l'égalité des chances et les besoins éducatifs différenciés.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée', et la plus grande 'apogée'.",
    },
  },
  {
    date: "2026-05-15",
    general_question: {
      question:
        "Quel est le plus grand lac salé du monde, souvent qualifié de mer ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Elle est en réalité le plus grand lac endoréique (sans exutoire vers l'océan) au monde, bordée par cinq pays (Russie, Kazakhstan, Turkménistan, Iran, Azerbaïdjan).",
    },
    open_question: {
      question:
        "Le rôle des influenceurs est-il un phénomène de mode passager ou une nouvelle forme de pouvoir médiatique et économique durable ?",
      notes:
        "Discussion sur l'évolution du marketing, la confiance du public et la réglementation des contenus.",
    },
    did_you_know: {
      text: "Les pommes sont plus efficaces que le café pour vous réveiller le matin, grâce à leur teneur élevée en sucres naturels (fructose) et leur effet sur la glycémie.",
    },
  },
  {
    date: "2026-05-16",
    general_question: {
      question:
        "Quel est le nom de la zone de l'océan Pacifique où se produisent la majorité des tremblements de terre et des éruptions volcaniques ?",
      answer: "La Ceinture de Feu du Pacifique.",
      explanation:
        "Elle entoure le bassin de l'océan Pacifique sur environ 40 000 km et contient 75 % des volcans actifs du monde.",
    },
    open_question: {
      question:
        "Les réseaux sociaux ont-ils un impact globalement positif ou négatif sur la santé mentale de leurs utilisateurs ?",
      notes:
        "Débat sur les effets de l'exposition constante, la comparaison sociale et la désinformation.",
    },
    did_you_know: {
      text: "L'expression 'célébrité instantanée' est souvent associée aux lauréats des Oscars, dont la première cérémonie a eu lieu le 16 mai 1929.",
    },
  },
  {
    date: "2026-05-17",
    general_question: {
      question:
        "Qui est le physicien célèbre pour son expérience de pensée du 'démon de Maxwell' en thermodynamique ?",
      answer: "James Clerk Maxwell.",
      explanation:
        "Le démon de Maxwell est une expérience visant à illustrer une faille potentielle dans la deuxième loi de la thermodynamique (l'augmentation de l'entropie) à l'échelle microscopique.",
    },
    open_question: {
      question:
        "Faut-il privilégier l'apprentissage de plusieurs langues étrangères ou se concentrer sur la maîtrise parfaite de l'anglais ?",
      notes:
        "Débat sur la valeur de la polyglottie versus la spécialisation linguistique dans la mondialisation.",
    },
    did_you_know: {
      text: "Le mot 'téléréalité' est apparu pour la première fois dans les médias à la fin des années 1980.",
    },
  },
  {
    date: "2026-05-18",
    general_question: {
      question:
        "Quelle est la plus grande structure jamais construite par l'homme, en termes de longueur (non continue) ?",
      answer: "La Grande Muraille de Chine.",
      explanation:
        "Incluant toutes ses ramifications et barrières naturelles, sa longueur totale est estimée à plus de 21 000 kilomètres.",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "Les grenouilles ne boivent pas d'eau. Elles l'absorbent à travers leur peau perméable.",
    },
  },
  {
    date: "2026-05-19",
    general_question: {
      question:
        "Quel est l'organe qui produit la testostérone chez l'homme et les œstrogènes chez la femme ?",
      answer: "Les gonades (testicules chez l'homme, ovaires chez la femme).",
      explanation:
        "Ces organes produisent les hormones sexuelles qui jouent un rôle crucial dans le développement et la reproduction.",
    },
    open_question: {
      question:
        "Faut-il légaliser l'euthanasie et le suicide assisté pour garantir le droit à une 'bonne mort' ?",
      notes:
        "Débat éthique, médical et légal sur la fin de vie, la souffrance et le rôle des médecins.",
    },
    did_you_know: {
      text: "La première émission de télévision à avoir été diffusée en couleur était le 'Tournament of Roses Parade' le 1er janvier 1954, aux États-Unis.",
    },
  },
  {
    date: "2026-05-20",
    general_question: {
      question:
        "Quel est le nom de la période géologique qui a vu l'apparition des dinosaures, il y a environ 252 à 66 millions d'années ?",
      answer: "L'ère Mésozoïque.",
      explanation:
        "Elle est subdivisée en trois périodes : le Trias, le Jurassique et le Crétacé.",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "Les papillons goûtent avec leurs pieds. Ils possèdent des chémorécepteurs situés sur leurs pattes qui leur permettent de trouver des plantes hôtes.",
    },
  },
  {
    date: "2026-05-21",
    general_question: {
      question:
        "Qui est l'auteur des célèbres fables sur le Loup et l'Agneau et la Cigale et la Fourmi ?",
      answer: "Jean de La Fontaine.",
      explanation:
        "Ses fables, inspirées d'Ésope et de Phèdre, sont des classiques de la littérature française, souvent utilisées pour l'enseignement de la morale.",
    },
    open_question: {
      question:
        "Le mécénat privé (fondations d'entreprises) est-il un substitut bienvenu ou une menace à l'art et à la culture financés par l'État ?",
      notes:
        "Discussion sur l'indépendance artistique, les priorités de financement et l'influence privée.",
    },
    did_you_know: {
      text: "Le mot 'taxi' est l'abréviation de 'taximètre', l'appareil qui calcule le prix de la course.",
    },
  },
  {
    date: "2026-05-22",
    general_question: {
      question:
        "Quel est le nom de la danse espagnole caractérisée par le claquement de mains, le chant et la guitare ?",
      answer: "Le Flamenco.",
      explanation:
        "Le Flamenco est un genre musical et une danse typique d'Andalousie (sud de l'Espagne).",
    },
    open_question: {
      question:
        "Faut-il interdire l'élevage intensif des animaux pour des raisons éthiques, sanitaires et environnementales ?",
      notes:
        "Discussion sur le bien-être animal, les coûts de la viande et la sécurité alimentaire.",
    },
    did_you_know: {
      text: "Les empreintes digitales des koalas sont si similaires à celles des humains qu'elles pourraient potentiellement causer des erreurs dans les enquêtes criminelles.",
    },
  },
  {
    date: "2026-05-23",
    general_question: {
      question:
        "Quel est le nom de la structure géologique en forme de champignon qui se forme dans les déserts par l'érosion éolienne ?",
      answer: "Une cheminée de fée (ou roche champignon).",
      explanation:
        "Elle se forme lorsque le vent (érosion éolienne) érode plus rapidement la base de la roche, laissant un chapeau rocheux plus résistant au sommet.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "Le jour le plus long de l'année (solstice d'été) dans l'hémisphère nord tombe généralement autour du 21 juin.",
    },
  },
  {
    date: "2026-05-24",
    general_question: {
      question:
        "Quel est le nom de la maladie causée par un manque de vitamine C, autrefois courante chez les marins ?",
      answer: "Le scorbut.",
      explanation:
        "Elle provoque une faiblesse générale, des saignements des gencives et une mauvaise cicatrisation, et a été évitée par l'introduction d'agrumes dans l'alimentation des marins.",
    },
    open_question: {
      question:
        "Le concept de 'nation' et d'identité nationale est-il obsolète à l'ère de la mondialisation et des identités multiples ?",
      notes:
        "Discussion sur le nationalisme, le cosmopolitisme et le multiculturalisme.",
    },
    did_you_know: {
      text: "La Russie, en tant que pays, s'étend sur 11 fuseaux horaires différents.",
    },
  },
  {
    date: "2026-05-25",
    general_question: {
      question:
        "Qui a inventé le premier vaccin contre la variole, ouvrant la voie à l'immunologie moderne ?",
      answer: "Edward Jenner.",
      explanation:
        "En 1796, il a démontré que l'inoculation avec le virus bénin de la variole bovine (vaccine) protégeait de la variole humaine.",
    },
    open_question: {
      question:
        "Faut-il interdire la chasse de loisir pour préserver la biodiversité et l'équilibre des écosystèmes ?",
      notes:
        "Débat sur la régulation des populations animales, les traditions locales et l'éthique animale.",
    },
    did_you_know: {
      text: "L'eau boue à $100^circ\text{C}$ au niveau de la mer, mais à plus basse température en altitude, car la pression atmosphérique est plus faible.",
    },
  },
  {
    date: "2026-05-26",
    general_question: {
      question:
        "Quel est le nom de la pierre précieuse, variante du corindon, de couleur bleue ou d'une autre couleur que le rouge ?",
      answer: "Le saphir.",
      explanation:
        "Le saphir et le rubis sont tous deux des corindons. Le rubis est corindon rouge. Toutes les autres couleurs de corindon sont appelées saphir (bleu, rose, jaune, etc.).",
    },
    open_question: {
      question:
        "Les entreprises peuvent-elles être moralement neutres ou ont-elles une responsabilité éthique et sociale (RSE) au-delà du profit ?",
      notes:
        "Débat sur le 'capitalisme de partie prenante' (stakeholder capitalism) vs. le 'capitalisme actionnarial' (shareholder capitalism).",
    },
    did_you_know: {
      text: "La ville de Venise, en Italie, est construite sur un archipel de 118 petites îles reliées par des ponts.",
    },
  },
  {
    date: "2026-05-27",
    general_question: {
      question: "Quel est le nom du plus grand organe du corps humain ?",
      answer: "La peau.",
      explanation:
        "Chez un adulte, elle représente entre 1,5 et 2 mètres carrés et jusqu'à 15 % du poids corporel total.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "La girafe ne dort en moyenne que 30 minutes par jour, souvent par courtes périodes de 1 à 2 minutes.",
    },
  },
  {
    date: "2026-05-28",
    general_question: {
      question: "Quelle est la capitale de l'Irlande ?",
      answer: "Dublin.",
      explanation:
        "Dublin est la capitale et la plus grande ville de la République d'Irlande, située sur la côte est.",
    },
    open_question: {
      question:
        "Le droit de manifester est-il absolu ou doit-il être encadré pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "L'expression 'se rouler les pouces' est une déformation de l'ancienne expression 'se rouler la poule', qui signifiait ne rien faire.",
    },
  },
  {
    date: "2026-05-29",
    general_question: {
      question:
        "Quel est le nom de l'explorateur italien qui est souvent crédité (à tort ou à raison) de la découverte de l'Amérique en 1492 ?",
      answer: "Christophe Colomb.",
      explanation:
        "Il a atteint les Amériques en 1492, mais les Vikings l'avaient précédé. Il est souvent considéré comme celui qui a initié la colonisation européenne des Amériques.",
    },
    open_question: {
      question:
        "Le système de permis de conduire devrait-il être réévalué plus fréquemment pour les personnes âgées pour garantir la sécurité routière ?",
      notes:
        "Débat sur l'autonomie, la capacité physique et les discriminations liées à l'âge.",
    },
    did_you_know: {
      text: "Les dauphins dorment avec un seul hémisphère cérébral à la fois (sommeil unihémisphérique), gardant l'autre éveillé pour respirer et surveiller les prédateurs.",
    },
  },
  {
    date: "2026-05-30",
    general_question: {
      question:
        "Quel est le nom du mouvement artistique qui a émergé après la Première Guerre mondiale, caractérisé par l'irrationnel et le rêve ?",
      answer: "Le Surréalisme.",
      explanation:
        "Officiellement lancé en 1924 avec André Breton, il a eu des artistes majeurs comme Dalí et Magritte.",
    },
    open_question: {
      question:
        "Le 'revenu de citoyenneté' (ou RSA) favorise-t-il la paresse ou offre-t-il la sécurité nécessaire pour l'entrepreneuriat et la formation ?",
      notes:
        "Discussion sur l'effet de seuil, l'incitation à l'activité et le rôle social de l'aide publique.",
    },
    did_you_know: {
      text: "Le mot 'mai' en anglais ('May') est souvent associé au mois de la floraison et de la jeunesse.",
    },
  },
  {
    date: "2026-05-31",
    general_question: {
      question: "Quelle est la principale source d'énergie du Soleil ?",
      answer: "L'Hydrogène (qui fusionne en Hélium).",
      explanation:
        "C'est la fusion nucléaire au cœur du Soleil qui libère l'énergie colossale qui nous parvient. $4$ atomes d'hydrogène se transforment en $1$ atome d'hélium.",
    },
    open_question: {
      question:
        "Les systèmes de notation et de classement des universités (type Shanghai) sont-ils une mesure fiable de la qualité académique ?",
      notes:
        "Débat sur les critères de recherche vs. d'enseignement, l'homogénéisation des modèles et la course au prestige.",
    },
    did_you_know: {
      text: "Le mot 'mai' en français est associé à la 'Fête des Mères' dans de nombreux pays, bien que les dates varient.",
    },
  },

  // --- Juin 2026 (28 jours, jusqu'au 2026-06-28) ---
  {
    date: "2026-06-01",
    general_question: {
      question:
        "Quel pays est le plus grand producteur mondial de pétrole (en volume, pas en réserves) ?",
      answer: "Les États-Unis.",
      explanation:
        "Grâce à l'exploitation du pétrole de schiste, les États-Unis sont, depuis quelques années, devant l'Arabie Saoudite et la Russie en termes de production quotidienne de pétrole brut.",
    },
    open_question: {
      question:
        "La peine de mort est-elle un châtiment justifiable dans un système de justice moderne ?",
      notes:
        "Débat éthique sur la dissuasion, l'erreur judiciaire et le principe de la dignité humaine.",
    },
    did_you_know: {
      text: "Le mot 'juin' vient du latin 'Junius', possiblement en l'honneur de la déesse romaine Junon, protectrice des femmes et du mariage.",
    },
  },
  {
    date: "2026-06-02",
    general_question: {
      question:
        "Comment appelle-t-on le phénomène où les rayons lumineux sont déviés lorsqu'ils passent d'un milieu à un autre (air/eau) ?",
      answer: "La réfraction.",
      explanation:
        "C'est ce qui explique pourquoi un bâton plongé dans l'eau semble cassé ou courbé, car la vitesse de la lumière change dans l'eau.",
    },
    open_question: {
      question:
        "Le service militaire ou civil obligatoire pour les jeunes est-il un outil efficace d'intégration et de cohésion nationale ?",
      notes:
        "Discussion sur l'utilité, la contrainte individuelle et l'apprentissage de la citoyenneté.",
    },
    did_you_know: {
      text: "Le cerveau humain génère suffisamment d'énergie pour allumer une petite ampoule.",
    },
  },
  {
    date: "2026-06-03",
    general_question: {
      question:
        "Quel est le nom de la ligne imaginaire qui passe par le Palais de Greenwich (Angleterre) et sert de référence pour la longitude ?",
      answer: "Le Méridien de Greenwich (ou Méridien zéro).",
      explanation:
        "Il définit l'heure universelle coordonnée (UTC) et la séparation entre l'Est et l'Ouest.",
    },
    open_question: {
      question:
        "Le concept de 'ville du quart d'heure' (accessibilité rapide aux services) est-il réalisable dans toutes les métropoles ?",
      notes:
        "Débat sur la densité urbaine, les transports et l'égalité d'accès aux services en banlieue.",
    },
    did_you_know: {
      text: "Les escargots sont des hermaphrodites : ils possèdent à la fois des organes reproducteurs mâles et femelles.",
    },
  },
  {
    date: "2026-06-04",
    general_question: {
      question: "Qui est le compositeur de l'opéra 'La Flûte enchantée' ?",
      answer: "Wolfgang Amadeus Mozart.",
      explanation:
        "Cet opéra en allemand (Singspiel) est le dernier opéra de Mozart et l'un des plus mystérieux et philosophiques.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "La baleine bleue est non seulement le plus grand animal vivant, mais aussi le plus grand animal connu ayant jamais existé sur Terre.",
    },
  },
  {
    date: "2026-06-05",
    general_question: {
      question:
        "Quelle est la principale cause de l'acidification des océans ?",
      answer: "L'absorption du dioxyde de carbone ($CO_2$) atmosphérique.",
      explanation:
        "Environ un quart du $CO_2$ émis par l'homme est absorbé par les océans, entraînant une baisse de leur pH (acidification).",
    },
    open_question: {
      question:
        "La pêche industrielle est-elle compatible avec la préservation des écosystèmes marins et des stocks de poissons ?",
      notes:
        "Discussion sur la surpêche, les quotas, et les méthodes de pêche destructrices (chalutage de fond).",
    },
    did_you_know: {
      text: "Le 5 juin est la Journée Mondiale de l'Environnement, proclamée par l'ONU en 1972.",
    },
  },
  {
    date: "2026-06-06",
    general_question: {
      question:
        "Quel événement majeur de la Seconde Guerre mondiale s'est déroulé le 6 juin 1944 sur les plages de Normandie ?",
      answer: "Le Débarquement allié (Opération Overlord).",
      explanation:
        "C'est la plus grande opération amphibie et aéroportée de l'histoire, marquant le début de la libération de l'Europe occidentale.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "Le parachutisme n'est devenu une pratique militaire courante qu'après la Première Guerre mondiale.",
    },
  },
  {
    date: "2026-06-07",
    general_question: {
      question: "Quel écrivain français a écrit 'Les Misérables' ?",
      answer: "Victor Hugo.",
      explanation:
        "Publié en 1862, c'est un roman qui décrit la misère du peuple et l'injustice sociale en France au XIXe siècle.",
    },
    open_question: {
      question:
        "La peine d'amende est-elle juste si elle n'est pas proportionnelle aux revenus de la personne (amendes forfaitaires) ?",
      notes:
        "Débat sur l'égalité devant la loi, la justice sociale et les 'amendes au jour' (proportionnelles au salaire).",
    },
    did_you_know: {
      text: "Il existe une ville au Pays de Galles avec un nom de 58 lettres : Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch.",
    },
  },
  {
    date: "2026-06-08",
    general_question: {
      question:
        "Quel est le nom du plus grand réseau de rivières et de cours d'eau souterrains au monde, situé au Mexique ?",
      answer: "Le système Sac Actun (Mexique/Yucatan).",
      explanation:
        "C'est le plus grand réseau de grottes et de rivières souterraines inondées au monde, essentiel pour l'eau douce de la région.",
    },
    open_question: {
      question:
        "La démocratie directe (référendums fréquents, initiatives citoyennes) est-elle supérieure à la démocratie représentative ?",
      notes:
        "Débat sur l'efficacité des décisions, la complexité des lois et le risque de 'tyrannie de la majorité'.",
    },
    did_you_know: {
      text: "L'huile de coco a une durée de conservation très longue et est très résistante à l'oxydation par rapport à d'autres huiles de cuisson.",
    },
  },
  {
    date: "2026-06-09",
    general_question: {
      question:
        "Quelle est l'unité de mesure standard de l'énergie thermique (chaleur) dans le SI ?",
      answer: "Le Joule (J).",
      explanation:
        "Le Joule est l'unité de travail ou d'énergie. $1\text{ Joule}$ est égal à $1\text{ Newton}$ appliqué sur $1\text{ mètre}$.",
    },
    open_question: {
      question:
        "Le journalisme d'investigation peut-il survivre économiquement à l'ère de l'information gratuite et des clics rapides ?",
      notes:
        "Discussion sur les modèles d'abonnement, le financement public et le rôle des fondations.",
    },
    did_you_know: {
      text: "Le mot 'robot' a été introduit par l'écrivain tchèque Karel Čapek, venant du mot tchèque 'robota' signifiant travail pénible.",
    },
  },
  {
    date: "2026-06-10",
    general_question: {
      question:
        "Quel est le nom de la petite glande située à la base du cerveau, souvent surnommée la 'glande maîtresse' ?",
      answer: "L'hypophyse (ou glande pituitaire).",
      explanation:
        "Elle produit et régule la plupart des hormones du corps, influençant la croissance, le métabolisme et la reproduction.",
    },
    open_question: {
      question:
        "La légalisation des drogues douces est-elle une solution pour réduire le crime organisé et améliorer la santé publique ?",
      notes:
        "Débat sur la réglementation, les recettes fiscales et les risques d'abus et de dépendance.",
    },
    did_you_know: {
      text: "La seule lettre de l'alphabet que l'on ne trouve dans aucun nom de pays est la lettre 'Q'.",
    },
  },
  {
    date: "2026-06-11",
    general_question: {
      question:
        "Quel pays est le plus grand producteur mondial de charbon, utilisé principalement pour la production d'électricité ?",
      answer: "La Chine.",
      explanation:
        "La Chine est à la fois le premier producteur et le premier consommateur mondial de charbon.",
    },
    open_question: {
      question:
        "Les critères de beauté (mode, chirurgie esthétique) sont-ils une forme de pression sociale genrée ou une libre expression individuelle ?",
      notes:
        "Discussion sur l'impact des médias, le patriarcat et l'autonomie corporelle.",
    },
    did_you_know: {
      text: "Le mot 'juin' est également le mois où se produisent les plus longues journées de l'année dans l'hémisphère nord (solstice d'été).",
    },
  },
  {
    date: "2026-06-12",
    general_question: {
      question:
        "Quel est le seul État américain à avoir pour capitale une ville nommée 'City' ?",
      answer: "L'État de l'Utah (Salt Lake City).",
      explanation:
        "La capitale est Salt Lake City. Il n'y a pas d'autre État dont la capitale se termine par 'City'.",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "Le premier enregistrement sonore connu est la chanson 'Au Clair de la Lune' par Édouard-Léon Scott de Martinville en 1860, sur un phonautographe.",
    },
  },
  {
    date: "2026-06-13",
    general_question: {
      question: "Qui est le physicien à l'origine de l'équation $E=mc^2$ ?",
      answer: "Albert Einstein.",
      explanation:
        "Cette équation clé de la relativité restreinte décrit la relation entre l'énergie (E) et la masse (m), avec $c$ étant la vitesse de la lumière.",
    },
    open_question: {
      question:
        "Le secret bancaire est-il nécessaire pour la liberté économique ou favorise-t-il la criminalité financière et la fraude fiscale ?",
      notes:
        "Discussion sur la transparence fiscale internationale, les paradis fiscaux et le droit à l'intimité financière.",
    },
    did_you_know: {
      text: "Les éléphants ne peuvent pas sauter, mais ils sont de très bons nageurs.",
    },
  },
  {
    date: "2026-06-14",
    general_question: {
      question:
        "Quel est le nom du célèbre musée espagnol qui abrite 'Guernica' de Picasso ?",
      answer: "Le Musée Reina Sofía (Madrid).",
      explanation:
        "Ce musée national espagnol d'art moderne et contemporain abrite l'œuvre majeure de Picasso, qui dénonce le bombardement de la ville basque de Guernica.",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "Le drapeau américain compte 13 bandes (représentant les 13 colonies originales) et 50 étoiles (représentant les 50 États).",
    },
  },
  {
    date: "2026-06-15",
    general_question: {
      question:
        "Quel pays européen est la patrie des Jeux Olympiques antiques et modernes ?",
      answer: "La Grèce.",
      explanation:
        "Les Jeux antiques se tenaient à Olympie dès 776 av. J.-C. Les premiers Jeux modernes ont eu lieu à Athènes en 1896.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites aux multinationales en matière d'optimisation fiscale (évasion fiscale légale) ?",
      notes:
        "Débat sur les impôts minimums mondiaux, la concurrence fiscale et l'équité des contributions.",
    },
    did_you_know: {
      text: "Le mot 'atmosphère' vient du grec *atmós* (vapeur) et *sphaira* (sphère).",
    },
  },
  {
    date: "2026-06-16",
    general_question: {
      question:
        "Quel est le nom de la péninsule qui est le cœur historique de la Grèce antique ?",
      answer: "Le Péloponnèse.",
      explanation:
        "Elle est reliée au continent par l'isthme de Corinthe et est connue pour ses sites antiques, notamment Olympie et Mycènes.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "L'électricité statique est une accumulation de charge électrique à la surface d'un objet. Elle n'est pas produite par le frottement, mais par la séparation des matériaux.",
    },
  },
  {
    date: "2026-06-17",
    general_question: {
      question:
        "Qui a écrit le roman d'anticipation 'Vingt mille lieues sous les mers' ?",
      answer: "Jules Verne.",
      explanation:
        "Publié en 1870, ce roman raconte l'aventure du professeur Aronnax à bord du sous-marin *Nautilus*, commandé par le Capitaine Nemo.",
    },
    open_question: {
      question:
        "Les pays développés devraient-ils annuler la dette des pays en développement en échange d'engagements environnementaux ?",
      notes:
        "Discussion sur le 'swap' dette-nature, la souveraineté économique et l'équité Nord-Sud.",
    },
    did_you_know: {
      text: "Le son voyage près de cinq fois plus vite dans l'eau que dans l'air.",
    },
  },
  {
    date: "2026-06-18",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure les tremblements de terre ?",
      answer: "Le sismographe (ou sismomètre).",
      explanation:
        "Il enregistre l'amplitude et la durée des ondes sismiques et permet de localiser l'épicentre d'un séisme.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "La bataille de Waterloo, qui a scellé la défaite finale de Napoléon, a eu lieu le 18 juin 1815 en Belgique.",
    },
  },
  {
    date: "2026-06-19",
    general_question: {
      question: "Quel pays est le plus peuplé du monde ?",
      answer: "L'Inde.",
      explanation:
        "L'Inde a dépassé la Chine en 2023 pour devenir le pays le plus peuplé du monde, selon les projections de l'ONU.",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Le mot 'pandémie' vient du grec *pan* (tout) et *démos* (peuple).",
    },
  },
  {
    date: "2026-06-20",
    general_question: {
      question:
        "Comment appelle-t-on le phénomène où l'eau passe directement de l'état solide (glace) à l'état gazeux (vapeur) sans passer par l'état liquide ?",
      answer: "La sublimation.",
      explanation:
        "C'est ce qui se produit avec la glace sèche ($CO_2$ solide) à température ambiante.",
    },
    open_question: {
      question:
        "Le revenu universel de base est-il une solution viable pour l'automatisation croissante des emplois ?",
      notes:
        "Discussion sur son coût, son impact sur l'incitation au travail et la réduction de la pauvreté.",
    },
    did_you_know: {
      text: "Le point le plus sec sur Terre est la région du désert d'Atacama au Chili, où certaines stations n'ont jamais enregistré de précipitations.",
    },
  },
  {
    date: "2026-06-21",
    general_question: {
      question:
        "Quel est le nom du célèbre détroit qui sépare la Turquie européenne de la Turquie asiatique ?",
      answer: "Le détroit du Bosphore.",
      explanation:
        "Il relie la mer Noire à la mer de Marmara et passe par Istanbul, ce qui en fait une voie maritime stratégique.",
    },
    open_question: {
      question:
        "L'exploration et la commercialisation des astéroïdes (exploitation minière spatiale) sont-elles le futur de l'humanité ?",
      notes:
        "Discussion sur la faisabilité technique, les traités internationaux (espace), et le risque de pollution spatiale.",
    },
    did_you_know: {
      text: "Le 21 juin est le Solstice d'été (jour le plus long) dans l'hémisphère nord et le Solstice d'hiver (jour le plus court) dans l'hémisphère sud.",
    },
  },
  {
    date: "2026-06-22",
    general_question: {
      question: "Qui est le compositeur de l'opéra 'Carmen', créé en 1875 ?",
      answer: "Georges Bizet.",
      explanation:
        "Cet opéra-comique, basé sur une nouvelle de Prosper Mérimée, est célèbre pour son rôle principal tragique et sa musique entraînante.",
    },
    open_question: {
      question:
        "L'utilisation d'armes autonomes létales (robots tueurs) est-elle moralement acceptable pour la guerre du futur ?",
      notes:
        "Débat sur la responsabilité éthique en cas de 'bavure', le contrôle humain et l'escalade des conflits.",
    },
    did_you_know: {
      text: "Il faut environ 100 000 battements de cœur pour pomper le sang dans un corps humain chaque jour.",
    },
  },
  {
    date: "2026-06-23",
    general_question: {
      question:
        "Quel est le nom de la maladie auto-immune qui affecte principalement les articulations, causant douleur et inflammation ?",
      answer: "La polyarthrite rhumatoïde.",
      explanation:
        "C'est une maladie chronique qui attaque le revêtement des articulations, pouvant entraîner des déformations.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles avoir une obligation légale de réparer leurs produits plutôt que d'encourager le renouvellement (obsolescence programmée) ?",
      notes:
        "Discussion sur le 'droit à la réparation', la durabilité des produits et l'économie circulaire.",
    },
    did_you_know: {
      text: "Le drapeau olympique est composé de cinq anneaux (représentant les cinq continents) dont les couleurs (avec le fond blanc) contiennent au moins une couleur de tous les drapeaux nationaux du monde.",
    },
  },
  {
    date: "2026-06-24",
    general_question: {
      question:
        "Quel est le nom de la zone de l'océan Atlantique où les courants chauds et froids se rencontrent, favorisant la brume ?",
      answer: "Le Grand Banc de Terre-Neuve (Canada).",
      explanation:
        "C'est une zone de hauts-fonds sous-marins où le courant froid du Labrador rencontre le courant chaud du Gulf Stream, créant un brouillard fréquent et de riches zones de pêche.",
    },
    open_question: {
      question:
        "Faut-il imposer une taxe carbone aux frontières pour protéger l'industrie nationale et inciter les autres pays à réduire leurs émissions ?",
      notes:
        "Débat sur la protectionnisme, les règles de l'OMC et l'efficacité climatique.",
    },
    did_you_know: {
      text: "L'ancien nom de la ville de New York était 'New Amsterdam', fondé par les Néerlandais en 1624.",
    },
  },
  {
    date: "2026-06-25",
    general_question: {
      question: "Qui a écrit la pièce de théâtre 'Le Misanthrope' ?",
      answer: "Molière (Jean-Baptiste Poquelin).",
      explanation:
        "Créée en 1666, cette comédie classique met en scène Alceste, qui déteste la société et l'hypocrisie de son époque.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "Le mot 'quatorze' est le plus grand nombre en français qui peut être écrit avec seulement deux lettres ('onze' étant le plus petit, suivi de 'douze', 'treize').",
    },
  },
  {
    date: "2026-06-26",
    general_question: {
      question:
        "Quel est l'élément chimique le plus léger après l'hydrogène, utilisé pour gonfler les ballons dirigeables et les ballons-sondes ?",
      answer: "L'hélium (He).",
      explanation:
        "Bien qu'il soit moins liftant que l'hydrogène, l'hélium est privilégié car il n'est pas inflammable.",
    },
    open_question: {
      question:
        "Faut-il légaliser et encadrer le marché des organes humains pour sauver des vies et combattre le trafic illégal ?",
      notes:
        "Débat éthique, social et économique sur la marchandisation du corps humain et l'altruisme.",
    },
    did_you_know: {
      text: "Les anneaux olympiques ont été conçus à l'origine par Pierre de Coubertin en 1913, et ils symbolisent l'union des cinq continents.",
    },
  },
  {
    date: "2026-06-27",
    general_question: {
      question: "Quel est le plus grand lac d'Afrique, en superficie ?",
      answer: "Le lac Victoria.",
      explanation:
        "Il est bordé par la Tanzanie, l'Ouganda et le Kenya. C'est le plus grand lac tropical du monde et le deuxième plus grand lac d'eau douce après le lac Supérieur.",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "La saison des ouragans dans l'océan Atlantique commence officiellement le 1er juin et se termine le 30 novembre.",
    },
  },
  {
    date: "2026-06-28",
    general_question: {
      question:
        "Qui a été assassiné à Sarajevo en 1914, déclenchant la Première Guerre mondiale ?",
      answer:
        "L'Archiduc François-Ferdinand d'Autriche (et son épouse Sophie).",
      explanation:
        "Son assassinat par le nationaliste serbe Gavrilo Princip est l'événement qui a servi de détonateur aux alliances européennes, conduisant à la guerre.",
    },
    open_question: {
      question:
        "Les 'influenceurs' numériques doivent-ils être soumis aux mêmes règles de transparence et de déontologie que les médias traditionnels ?",
      notes:
        "Débat sur la publicité déguisée, la crédibilité des sources et la responsabilité éditoriale.",
    },
    did_you_know: {
      text: "Le drapeau olympique ne contenait à l'origine aucune inscription, seule l'image des cinq anneaux entrelacés sur fond blanc était présente.",
    },
    // --- Juin 2026 (2 jours restants) ---

    date: "2026-06-29",
    general_question: {
      question:
        "Quel est le nom de l'hormone de la 'lutte ou de la fuite' sécrétée par les glandes surrénales en cas de stress ?",
      answer: "L'adrénaline (ou épinéphrine).",
      explanation:
        "Elle augmente le rythme cardiaque, la pression artérielle et mobilise l'énergie en préparant le corps à une action rapide.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' d'ici 2050 est-il techniquement et économiquement réaliste à l'échelle mondiale ?",
      notes:
        "Débat sur la faisabilité des technologies de capture de carbone, les changements de mode de vie nécessaires et le coût de la transition énergétique.",
    },
    did_you_know: {
      text: "La Grande Pyramide de Gizeh, construite il y a plus de 4 500 ans, était la plus haute structure artificielle du monde pendant plus de 3 800 ans, jusqu'au XIXe siècle.",
    },
  },
  {
    date: "2026-06-30",
    general_question: {
      question:
        "Quel est le plus long fleuve d'Europe, qui se jette dans la mer Caspienne ?",
      answer: "La Volga.",
      explanation:
        "Elle coule entièrement en Russie et est d'une importance cruciale pour l'irrigation, la production hydroélectrique et le transport.",
    },
    open_question: {
      question:
        "Faut-il interdire la publicité pour les produits considérés comme mauvais pour la santé (sucre, alcool, malbouffe) ?",
      notes:
        "Débat sur la liberté de commerce versus la responsabilité de l'État dans la santé publique.",
    },
    did_you_know: {
      text: "Un jour sur Vénus est plus long qu'une année sur Vénus. Il faut 243 jours terrestres pour qu'elle tourne sur elle-même, et 225 jours pour faire le tour du Soleil.",
    },
  },

  // --- Juillet 2026 (31 jours) ---
  {
    date: "2026-07-01",
    general_question: {
      question:
        "Quel est l'élément chimique qui a le numéro atomique 1 et le poids atomique le plus faible ?",
      answer: "L'Hydrogène (H).",
      explanation:
        "L'hydrogène est le constituant le plus abondant de l'univers et le gaz le plus léger.",
    },
    open_question: {
      question:
        "L'hyper-connectivité et la dépendance aux smartphones modifient-elles la structure cognitive du cerveau humain ?",
      notes:
        "Discussion sur la capacité d'attention, la mémorisation et l'impact sur le sommeil.",
    },
    did_you_know: {
      text: "Le 1er juillet est célébré comme le 'Canada Day', commémorant la fusion des colonies de l'Amérique du Nord britannique en une seule entité, le Canada, en 1867.",
    },
  },
  {
    date: "2026-07-02",
    general_question: {
      question:
        "Quel est le nom de l'architecte qui a conçu la Sagrada Familia de Barcelone (toujours inachevée) ?",
      answer: "Antoni Gaudí.",
      explanation:
        "Gaudí a consacré les dernières années de sa vie à ce chef-d'œuvre du modernisme catalan, qui a débuté en 1882.",
    },
    open_question: {
      question:
        "Le droit des auteurs et artistes doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des créateurs.",
    },
    did_you_know: {
      text: "Le mot 'juillet' est nommé en l'honneur de Jules César (Julius Caesar) qui est né ce mois-là.",
    },
  },
  {
    date: "2026-07-03",
    general_question: {
      question: "Quelle est la capitale de l'Australie ?",
      answer: "Canberra.",
      explanation:
        "Canberra est la capitale politique, tandis que Sydney est la ville la plus peuplée et la plus connue internationalement.",
    },
    open_question: {
      question:
        "Faut-il interdire l'exploitation minière en haute mer pour protéger des écosystèmes encore largement inexplorés ?",
      notes:
        "Discussion sur le besoin de métaux rares, les conséquences environnementales irréversibles et la réglementation internationale.",
    },
    did_you_know: {
      text: "L'empreinte carbone d'une personne moyenne voyageant en avion est souvent supérieure à celle de tous ses déplacements en voiture et en transports en commun combinés sur une année.",
    },
  },
  {
    date: "2026-07-04",
    general_question: {
      question:
        "Quel est le nom du célèbre document adopté le 4 juillet 1776, proclamant l'indépendance des États-Unis ?",
      answer: "La Déclaration d'Indépendance.",
      explanation:
        "Elle a été principalement rédigée par Thomas Jefferson et déclare que les 13 colonies sont des États libres et indépendants de la Grande-Bretagne.",
    },
    open_question: {
      question:
        "Faut-il conditionner l'aide au développement des pays pauvres à des critères de bonne gouvernance et de respect des droits humains ?",
      notes:
        "Débat sur la souveraineté, l'efficacité de l'aide et les risques d'ingérence.",
    },
    did_you_know: {
      text: "La fête de l'Indépendance du 4 juillet n'est pas la date de la signature du document (qui a eu lieu en août), mais la date de l'adoption du texte par le Congrès continental.",
    },
  },
  {
    date: "2026-07-05",
    general_question: {
      question:
        "Quel est le nom du processus par lequel les plantes transforment la lumière en énergie ?",
      answer: "La Photosynthèse.",
      explanation:
        "Elle utilise l'énergie lumineuse pour convertir le dioxyde de carbone et l'eau en glucose (sucre) et en oxygène.",
    },
    open_question: {
      question:
        "Le système de retraite par répartition est-il durable face au vieillissement démographique et à l'allongement de l'espérance de vie ?",
      notes:
        "Discussion sur l'âge de départ, les cotisations et la nécessité de réformes structurelles.",
    },
    did_you_know: {
      text: "Le mot 'américain' est un gentilé qui fait référence aux habitants des États-Unis. En géographie, le terme 'américain' désigne les habitants du continent (Nord, Centrale, Sud).",
    },
  },
  {
    date: "2026-07-06",
    general_question: {
      question:
        "Dans quel pays a été découvert le premier cas documenté du VIH (Virus de l'Immunodéficience Humaine) chez l'homme ?",
      answer: "La République démocratique du Congo (RDC).",
      explanation:
        "Les études génétiques suggèrent que le virus s'est propagé à partir de singes et s'est transmis à l'homme au début du XXe siècle, probablement dans cette région.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être obligatoire pour assurer une représentation démocratique maximale ?",
      notes:
        "Discussion sur la légitimité du vote, l'apathie politique et les sanctions en cas d'abstention.",
    },
    did_you_know: {
      text: "Il y a plus de six fois plus de plastique dans les océans que de plancton, en termes de poids, dans certaines zones du Pacifique.",
    },
  },
  {
    date: "2026-07-07",
    general_question: {
      question:
        "Qui est le compositeur allemand de la 'Neuvième Symphonie', incluant l' 'Ode à la joie' ?",
      answer: "Ludwig van Beethoven.",
      explanation:
        "Créée en 1824, c'est l'une des œuvres les plus célèbres de la musique classique. L' 'Ode à la joie' est l'hymne de l'Union européenne.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "L'astronomie est la plus ancienne des sciences naturelles, avec des preuves d'observations humaines remontant à la préhistoire.",
    },
  },
  {
    date: "2026-07-08",
    general_question: {
      question: "Quelle est la plus grande île de la mer Méditerranée ?",
      answer: "La Sicile (Italie).",
      explanation:
        "Située au large de la 'botte' italienne, elle est célèbre pour l'Etna, l'un des volcans les plus actifs d'Europe.",
    },
    open_question: {
      question:
        "Le système du collège/lycée unique est-il le plus efficace pour l'épanouissement des élèves ou faut-il introduire une sélection plus précoce ?",
      notes:
        "Débat sur l'orientation, l'égalité des chances et les besoins éducatifs différenciés.",
    },
    did_you_know: {
      text: "Le mot 'juillet' en français a longtemps été orthographié 'juillet', puis 'juillet', et l'orthographe actuelle a été fixée par l'Académie française.",
    },
  },
  {
    date: "2026-07-09",
    general_question: {
      question:
        "Quel est le nom de l'instrument utilisé pour mesurer la pression atmosphérique ?",
      answer: "Le baromètre.",
      explanation:
        "Inventé par Evangelista Torricelli, il est essentiel pour les prévisions météorologiques, car la pression est un indicateur clé des changements de temps.",
    },
    open_question: {
      question:
        "Les monnaies numériques de banque centrale (MNBC) doivent-elles remplacer l'argent liquide traditionnel ?",
      notes:
        "Discussion sur la surveillance financière, l'inclusion bancaire et la stabilité économique.",
    },
    did_you_know: {
      text: "Les chats peuvent produire une centaine de sons différents, tandis que les chiens n'en produisent qu'une dizaine.",
    },
  },
  {
    date: "2026-07-10",
    general_question: {
      question:
        "Quel est l'élément chimique qui, combiné à l'hydrogène, forme l'eau ($H_2O$) ?",
      answer: "L'Oxygène (O).",
      explanation:
        "L'oxygène est le troisième élément le plus abondant dans l'univers et est essentiel à la vie sur Terre.",
    },
    open_question: {
      question:
        "Les critères de beauté (mode, chirurgie esthétique) sont-ils une forme de pression sociale genrée ou une libre expression individuelle ?",
      notes:
        "Discussion sur l'impact des médias, le patriarcat et l'autonomie corporelle.",
    },
    did_you_know: {
      text: "Le plus long règne d'un monarque britannique est celui de la Reine Élisabeth II, qui a régné pendant 70 ans et 214 jours.",
    },
  },
  {
    date: "2026-07-11",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite la 'Nuit étoilée' de Vincent van Gogh ?",
      answer: "Le Museum of Modern Art (MoMA) à New York.",
      explanation:
        "Ce tableau iconique, peint en 1889 pendant le séjour de Van Gogh à l'asile de Saint-Rémy-de-Provence, est l'une des œuvres les plus reconnaissables de l'histoire de l'art.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "La lune s'éloigne de la Terre d'environ 3,8 centimètres par an.",
    },
  },
  {
    date: "2026-07-12",
    general_question: {
      question:
        "Quel est le nom du plus grand désert de sable au monde (hors déserts de glace) ?",
      answer: "Le Sahara.",
      explanation:
        "Il couvre une grande partie de l'Afrique du Nord et est le plus grand désert chaud. Le désert de l'Antarctique est le plus grand désert au monde en général.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "Les requins existent depuis plus de 400 millions d'années, ce qui signifie qu'ils sont plus anciens que les arbres (apparue il y a environ 370 millions d'années).",
    },
  },
  {
    date: "2026-07-13",
    general_question: {
      question:
        "Quel est le nom du célèbre volcan japonais considéré comme sacré et souvent enneigé ?",
      answer: "Le Mont Fuji.",
      explanation:
        "Culminant à 3 776 mètres, c'est le plus haut sommet du Japon. C'est un volcan toujours actif, bien que sa dernière éruption remonte à 1707.",
    },
    open_question: {
      question:
        "Comment l'urbanisme peut-il être repensé pour améliorer la qualité de vie et réduire l'empreinte carbone des grandes métropoles ?",
      notes:
        "Débat sur la 'ville du quart d'heure', les transports doux et la végétalisation urbaine.",
    },
    did_you_know: {
      text: "Le mot 'robot' a été introduit par l'écrivain tchèque Karel Čapek, venant du mot tchèque 'robota' signifiant travail pénible.",
    },
  },
  {
    date: "2026-07-14",
    general_question: {
      question:
        "Quel événement majeur s'est produit à Paris le 14 juillet 1789, marquant le début de la Révolution française ?",
      answer: "La prise de la Bastille.",
      explanation:
        "Bien que symbolique (la Bastille était une prison presque vide), cet événement est considéré comme le point de départ de la Révolution et est la fête nationale française.",
    },
    open_question: {
      question:
        "Le boycott des entreprises qui ne respectent pas certaines normes éthiques (environnement, travail) est-il un outil efficace de changement social ?",
      notes:
        "Discussion sur l'impact économique réel, le 'greenwashing' et le pouvoir du consommateur.",
    },
    did_you_know: {
      text: "L'odeur de l'herbe fraîchement coupée est en fait un signal de détresse chimique émis par la plante pour prévenir les insectes qu'elle est attaquée.",
    },
  },
  {
    date: "2026-07-15",
    general_question: {
      question:
        "Quel est le nom de la membrane qui recouvre et protège le cerveau et la moelle épinière ?",
      answer: "Les méninges.",
      explanation:
        "Les méninges sont composées de trois couches : la dure-mère, l'arachnoïde et la pie-mère.",
    },
    open_question: {
      question:
        "Le salaire minimum est-il un outil efficace pour lutter contre la pauvreté ou un frein à l'emploi et à la compétitivité des entreprises ?",
      notes:
        "Débat sur l'inflation, le pouvoir d'achat et le marché du travail.",
    },
    did_you_know: {
      text: "La lumière du Soleil met environ 8 minutes et 20 secondes pour atteindre la Terre.",
    },
  },
  {
    date: "2026-07-16",
    general_question: {
      question:
        "Qui est le mathématicien connu pour avoir défini le concept de 'nombre imaginaire' (la racine carrée de -1) ?",
      answer:
        "René Descartes (bien que popularisé par d'autres, il a introduit le terme 'imaginaire').",
      explanation:
        "Le concept fut exploré par Cardano, mais le terme 'nombre imaginaire' fut inventé par Descartes en 1637. L'unité imaginaire est désignée par $i$ ($i^2 = -1$).",
    },
    open_question: {
      question:
        "Les multinationales ont-elles trop de pouvoir sur les gouvernements et les décisions politiques (lobbying, évasion fiscale) ?",
      notes:
        "Débat sur la corruption légale, la souveraineté nationale et la régulation internationale.",
    },
    did_you_know: {
      text: "Le point d'ébullition de l'eau n'est pas toujours $100^circ\text{C}$. Il dépend de la pression atmosphérique.",
    },
  },
  {
    date: "2026-07-17",
    general_question: {
      question:
        "Quel pays est le berceau de la philosophie stoïcienne (Zénon de Citium) ?",
      answer: "La Grèce antique.",
      explanation:
        "Le stoïcisme est une école de philosophie hellénistique fondée à Athènes par Zénon de Citium au IIIe siècle av. J.-C.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "Le mot 'juillet' vient du latin *Julius*, en hommage à Jules César. En Europe, le mois de juillet marque souvent le début de la période de vacances estivales.",
    },
  },
  {
    date: "2026-07-18",
    general_question: {
      question:
        "Quel est l'élément chimique qui possède six protons et est essentiel à toute vie organique sur Terre ?",
      answer: "Le Carbone (C).",
      explanation:
        "Le carbone forme la base des molécules organiques (protéines, ADN, lipides) grâce à sa capacité à former quatre liaisons chimiques stables.",
    },
    open_question: {
      question:
        "La censure des contenus extrêmes sur les plateformes numériques (discours de haine, terrorisme) menace-t-elle la liberté d'expression ?",
      notes:
        "Débat sur le rôle des modérateurs, les algorithmes de détection et la définition de l'abus.",
    },
    did_you_know: {
      text: "Le 18 juillet est la Journée Internationale Nelson Mandela, célébrée chaque année en son honneur, jour de sa naissance.",
    },
  },
  {
    date: "2026-07-19",
    general_question: {
      question:
        "Dans quel sport est attribué le trophée appelé 'La Coupe Stanley' ?",
      answer: "Le hockey sur glace.",
      explanation:
        "C'est le trophée remis chaque année à l'équipe championne des séries éliminatoires de la Ligue nationale de hockey (NHL).",
    },
    open_question: {
      question:
        "Faut-il imposer des limites à la quantité d'eau douce qu'une entreprise ou une personne peut utiliser dans les zones de stress hydrique ?",
      notes:
        "Discussion sur la gestion des ressources, l'agriculture intensive et la priorité de l'eau potable.",
    },
    did_you_know: {
      text: "Le Canada a plus de lacs que le reste du monde réuni, contenant une grande partie de l'eau douce de surface de la planète.",
    },
  },
  {
    date: "2026-07-20",
    general_question: {
      question:
        "Quel est le nom de la mission Apollo qui a marqué le premier pas de l'homme sur la Lune en 1969 ?",
      answer: "Apollo 11.",
      explanation:
        "Neil Armstrong fut le premier homme à marcher sur la Lune le 20 juillet 1969, suivi par Buzz Aldrin.",
    },
    open_question: {
      question:
        "L'IA générative doit-elle être soumise à des lois éthiques plus strictes que les entreprises classiques ?",
      notes:
        "Débat sur la régulation de l'IA (transparence, biais, impact sociétal) vs. la liberté d'innovation.",
    },
    did_you_know: {
      text: "L'atterrissage sur la Lune d'Apollo 11 a été suivi par environ 600 millions de personnes, soit un cinquième de la population mondiale de l'époque.",
    },
  },
  {
    date: "2026-07-21",
    general_question: {
      question: "Quel est le plus haut sommet des Alpes ?",
      answer: "Le Mont Blanc.",
      explanation:
        "Situé entre la France et l'Italie, il culmine à environ 4 809 mètres d'altitude. Sa hauteur varie selon les dépôts de glace au sommet.",
    },
    open_question: {
      question:
        "Les systèmes de notation et de classement des universités (type Shanghai) sont-ils une mesure fiable de la qualité académique ?",
      notes:
        "Débat sur les critères de recherche vs. d'enseignement, l'homogénéisation des modèles et la course au prestige.",
    },
    did_you_know: {
      text: "Le mot 'juillet' vient du latin *Julius*, en l'honneur de Jules César, né ce mois-là.",
    },
  },
  {
    date: "2026-07-22",
    general_question: {
      question:
        "Quel pays a été divisé par un mur célèbre (le Mur de Berlin) de 1961 à 1989 ?",
      answer: "L'Allemagne (entre la RFA et la RDA).",
      explanation:
        "Le Mur de Berlin séparait Berlin-Ouest (contrôlé par l'Ouest) de Berlin-Est (capitale de la RDA et contrôlé par l'Est).",
    },
    open_question: {
      question:
        "Les véhicules autonomes doivent-ils être programmés pour privilégier la vie du passager ou celle du piéton en cas d'accident inévitable ?",
      notes:
        "Problème du dilemme du 'Trolley' appliqué à l'IA et aux véhicules, débat éthique sur la programmation morale.",
    },
    did_you_know: {
      text: "Le Mur de Berlin n'était pas un simple mur, mais une frontière fortifiée complexe s'étendant sur plus de 155 km, avec des barbelés, des miradors et des fossés.",
    },
  },
  {
    date: "2026-07-23",
    general_question: {
      question:
        "Qui est le mathématicien grec connu pour avoir inventé le principe du levier et de la vis sans fin ?",
      answer: "Archimède.",
      explanation:
        "Ses travaux en mécanique et en hydrostatique sont fondamentaux, et il est crédité de la célèbre phrase : 'Donnez-moi un point d'appui, et je soulèverai le monde'.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "La Grande Barrière de Corail est visible de l'espace, mais seulement de près (orbite basse) et non à l'œil nu depuis la Station spatiale internationale.",
    },
  },
  {
    date: "2026-07-24",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Fe', essentiel à la production de l'hémoglobine dans le sang ?",
      answer: "Le Fer (Ferrum).",
      explanation:
        "Le fer est crucial pour le transport de l'oxygène des poumons vers le reste du corps.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de manifester pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "L'écorce de l'arbre est la partie qui protège le tronc contre les insectes, la sécheresse, le feu et le froid.",
    },
  },
  {
    date: "2026-07-25",
    general_question: {
      question:
        "Quel est le nom de la ville italienne où se trouve le célèbre Colisée ?",
      answer: "Rome.",
      explanation:
        "Le Colisée, ou Amphithéâtre Flavien, est le plus grand amphithéâtre jamais construit et est devenu un symbole de la Rome impériale.",
    },
    open_question: {
      question:
        "Le système de permis de conduire devrait-il être réévalué plus fréquemment pour les personnes âgées pour garantir la sécurité routière ?",
      notes:
        "Débat sur l'autonomie, la capacité physique et les discriminations liées à l'âge.",
    },
    did_you_know: {
      text: "Le Colisée pouvait accueillir entre 50 000 et 80 000 spectateurs et était utilisé pour les combats de gladiateurs, les chasses d'animaux sauvages et les exécutions publiques.",
    },
  },
  {
    date: "2026-07-26",
    general_question: {
      question:
        "Qui est le peintre néerlandais célèbre pour 'La Ronde de nuit' (1642) ?",
      answer: "Rembrandt van Rijn.",
      explanation:
        "Ce tableau est l'un des chefs-d'œuvre de l'âge d'or néerlandais, marquant une rupture avec les portraits de groupe traditionnels par son dynamisme.",
    },
    open_question: {
      question:
        "Le droit à l'avortement est-il un droit fondamental absolu ou doit-il être soumis à certaines restrictions ?",
      notes:
        "Débat éthique et légal sur la temporalité, la conscience médicale et les motifs d'interruption de grossesse.",
    },
    did_you_know: {
      text: "Les fourmis sont parmi les rares créatures à 'cultiver' : certaines espèces élèvent des champignons pour se nourrir, de la même manière que les humains cultivent.",
    },
  },
  {
    date: "2026-07-27",
    general_question: {
      question:
        "Quel est le nom de la galaxie où se situe notre Système Solaire ?",
      answer: "La Voie Lactée.",
      explanation:
        "C'est une galaxie spirale barrée, contenant entre 100 et 400 milliards d'étoiles. Notre Soleil se trouve dans l'un de ses bras spiraux, le bras d'Orion.",
    },
    open_question: {
      question:
        "Le rôle des influenceurs est-il un phénomène de mode passager ou une nouvelle forme de pouvoir médiatique et économique durable ?",
      notes:
        "Discussion sur l'évolution du marketing, la confiance du public et la réglementation des contenus.",
    },
    did_you_know: {
      text: "La température la plus chaude jamais enregistrée sur Terre est de $56,7^circ\text{C}$ dans la Vallée de la Mort, en Californie, en 1913.",
    },
  },
  {
    date: "2026-07-28",
    general_question: {
      question:
        "Quel est le nom de l'événement volcanique survenu en 79 après J.-C. qui a détruit les villes de Pompéi et Herculanum ?",
      answer: "L'éruption du Vésuve.",
      explanation:
        "Cette éruption a enseveli les deux cités sous une épaisse couche de cendres et de roches, les préservant dans leur état d'origine.",
    },
    open_question: {
      question:
        "Faut-il légaliser l'euthanasie et le suicide assisté pour garantir le droit à une 'bonne mort' ?",
      notes:
        "Débat éthique, médical et légal sur la fin de vie, la souffrance et le rôle des médecins.",
    },
    did_you_know: {
      text: "Les flamants roses ne naissent pas roses. Leur couleur vient des pigments caroténoïdes présents dans les algues et les crustacés qu'ils mangent.",
    },
  },
  {
    date: "2026-07-29",
    general_question: {
      question:
        "Quel est le nom du traité de 1919 qui a officiellement mis fin à la Première Guerre mondiale ?",
      answer: "Le Traité de Versailles.",
      explanation:
        "Signé entre les puissances alliées et l'Allemagne, il est souvent critiqué pour avoir imposé des conditions très dures à l'Allemagne, contribuant aux tensions futures.",
    },
    open_question: {
      question:
        "Le secret bancaire est-il nécessaire pour la liberté économique ou favorise-t-il la criminalité financière et la fraude fiscale ?",
      notes:
        "Discussion sur la transparence fiscale internationale, les paradis fiscaux et le droit à l'intimité financière.",
    },
    did_you_know: {
      text: "Le mot 'canicule' vient du latin *canicula*, qui signifie 'petite chienne', en référence à Sirius, l'étoile la plus brillante de la constellation du Grand Chien, dont la levée héliaque coïncidait autrefois avec les jours les plus chauds de l'été.",
    },
  },
  {
    date: "2026-07-30",
    general_question: {
      question: "Quelle est la capitale de l'Égypte ?",
      answer: "Le Caire.",
      explanation:
        "Le Caire est la plus grande ville d'Afrique et du monde arabe, située près de la base du delta du Nil.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "La première ville à atteindre une population d'un million d'habitants fut Rome, il y a plus de 2 000 ans.",
    },
  },
  {
    date: "2026-07-31",
    general_question: {
      question:
        "Comment appelle-t-on la maladie où le corps ne produit pas assez d'insuline (type 1) ou n'y répond pas correctement (type 2) ?",
      answer: "Le diabète.",
      explanation:
        "L'insuline est essentielle pour permettre au glucose d'entrer dans les cellules et fournir de l'énergie. Sans elle, le taux de sucre dans le sang augmente.",
    },
    open_question: {
      question:
        "Le rôle des influenceurs est-il un phénomène de mode passager ou une nouvelle forme de pouvoir médiatique et économique durable ?",
      notes:
        "Discussion sur l'évolution du marketing, la confiance du public et la réglementation des contenus.",
    },
    did_you_know: {
      text: "Un 'nanomètre' ($10^{-9}\text{ m}$) est un million de fois plus petit qu'un millimètre.",
    },
  },

  // --- Août 2026 (31 jours) ---
  {
    date: "2026-08-01",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui utilise le son (ondes sonores) pour détecter les objets sous-marins ?",
      answer: "Le Sonar (Sound Navigation and Ranging).",
      explanation:
        "Le sonar est crucial pour la marine, la détection de sous-marins, et la cartographie des fonds marins.",
    },
    open_question: {
      question:
        "Les classes préparatoires et les grandes écoles sont-elles le meilleur modèle pour former l'élite d'une nation ?",
      notes:
        "Débat sur l'égalité des chances, l'élitisme et la diversité des parcours éducatifs.",
    },
    did_you_know: {
      text: "Le mot 'août' a été nommé en l'honneur du premier empereur romain, Auguste (Augustus Caesar), qui a achevé le calendrier de son grand-oncle Jules César.",
    },
  },
  {
    date: "2026-08-02",
    general_question: {
      question:
        "Qui est le peintre espagnol célèbre pour ses 'montres molles' dans le tableau 'La Persistance de la mémoire' ?",
      answer: "Salvador Dalí.",
      explanation:
        "Figure majeure du Surréalisme, Dalí est connu pour ses images frappantes et bizarres inspirées des rêves et de l'inconscient.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "Il faut plus de 200 000 tonnes de feuilles de thé par an pour satisfaire la demande mondiale de thé vert.",
    },
  },
  {
    date: "2026-08-03",
    general_question: {
      question:
        "Quel est le nom du plus grand lac d'eau douce d'Amérique du Nord, partagé par les États-Unis et le Canada ?",
      answer: "Le lac Supérieur.",
      explanation:
        "Il est le plus grand en superficie et le troisième plus grand en volume au monde. Son nom vient de sa position supérieure par rapport aux autres Grands Lacs.",
    },
    open_question: {
      question:
        "La peine de prison est-elle avant tout punitive ou doit-elle être réhabilitatrice pour permettre la réinsertion sociale ?",
      notes:
        "Débat sur la surpopulation carcérale, les taux de récidive et les alternatives à l'incarcération.",
    },
    did_you_know: {
      text: "L'eau salée gèle à une température plus basse que l'eau douce, car le sel empêche les molécules d'eau de former une structure cristalline solide aussi facilement.",
    },
  },
  {
    date: "2026-08-04",
    general_question: {
      question: "Quelle est l'unité de mesure de la puissance électrique ?",
      answer: "Le Watt (W).",
      explanation:
        "Le Watt (nommé d'après James Watt) mesure la quantité d'énergie (en Joules) consommée ou produite par unité de temps (en secondes).",
    },
    open_question: {
      question:
        "Les entreprises technologiques (GAFA) sont-elles devenues trop puissantes et doivent-elles être démantelées (lois antitrust) ?",
      notes:
        "Discussion sur le monopole, la concurrence, la protection des données et le lobbying politique.",
    },
    did_you_know: {
      text: "Le bruit d'un coup de foudre est créé par l'expansion très rapide et explosive de l'air surchauffé autour du canal de l'éclair.",
    },
  },
  {
    date: "2026-08-05",
    general_question: {
      question:
        "Quel empereur romain est célèbre pour avoir fait construire un mur défensif à travers le nord de la Grande-Bretagne au IIe siècle ?",
      answer: "Hadrien.",
      explanation:
        "Le Mur d'Hadrien, long de 117 kilomètres, marquait la frontière septentrionale de l'Empire romain en Grande-Bretagne.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "La langue la plus ancienne encore parlée est le tamoul, avec des écrits datant de plus de 2 000 ans.",
    },
  },
  {
    date: "2026-08-06",
    general_question: {
      question:
        "Quelle ville japonaise a été touchée par la première bombe atomique larguée en temps de guerre, le 6 août 1945 ?",
      answer: "Hiroshima.",
      explanation:
        "La bombe 'Little Boy' a été larguée par l'avion américain Enola Gay, causant des dizaines de milliers de morts immédiates.",
    },
    open_question: {
      question:
        "L'armement par les pays occidentaux des pays menacés est-il un garant de la paix ou un facteur d'escalade des conflits ?",
      notes:
        "Débat sur la légitime défense, les traités de non-prolifération et le rôle des marchands d'armes.",
    },
    did_you_know: {
      text: "Le nom de l'avion B-29 qui a largué la bombe atomique sur Hiroshima, *Enola Gay*, était le nom de la mère du pilote, Paul Tibbets.",
    },
  },
  {
    date: "2026-08-07",
    general_question: {
      question:
        "Comment appelle-t-on la couche la plus externe et la plus chaude de l'atmosphère terrestre ?",
      answer: "La Thermosphère.",
      explanation:
        "Elle s'étend jusqu'à environ 600 km d'altitude. La température y augmente avec l'altitude à cause de l'absorption des rayonnements UV et X solaires.",
    },
    open_question: {
      question:
        "Le concept de 'ville du quart d'heure' (accessibilité rapide aux services) est-il réalisable dans toutes les métropoles ?",
      notes:
        "Débat sur la densité urbaine, les transports et l'égalité d'accès aux services en banlieue.",
    },
    did_you_know: {
      text: "Le mot 'astéroïde' signifie littéralement 'ayant la forme d'une étoile' en grec.",
    },
  },
  {
    date: "2026-08-08",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'K' et essentiel au bon fonctionnement des nerfs et des muscles ?",
      answer: "Le Potassium (Kalium).",
      explanation:
        "Le potassium est un électrolyte vital. Son symbole 'K' vient du latin scientifique *Kalium*.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "Le mot 'himalaya' signifie 'demeure des neiges' en sanskrit.",
    },
  },
  {
    date: "2026-08-09",
    general_question: {
      question:
        "Quelle ville japonaise a été frappée par la deuxième bombe atomique ('Fat Man') le 9 août 1945 ?",
      answer: "Nagasaki.",
      explanation:
        "Le bombardement de Nagasaki, trois jours après Hiroshima, a conduit à la capitulation du Japon le 15 août 1945.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "L'éléphant africain est le plus grand mammifère terrestre. Les mâles peuvent peser jusqu'à 6 tonnes.",
    },
  },
  {
    date: "2026-08-10",
    general_question: {
      question:
        "Qui est le physicien italien qui a inventé la première pile électrique moderne au début du XIXe siècle ?",
      answer: "Alessandro Volta.",
      explanation:
        "La 'pile voltaïque' a été la première source continue d'électricité, marquant le début de l'électrochimie. L'unité de tension électrique, le Volt, porte son nom.",
    },
    open_question: {
      question:
        "Faut-il interdire l'élevage intensif des animaux pour des raisons éthiques, sanitaires et environnementales ?",
      notes:
        "Discussion sur le bien-être animal, les coûts de la viande et la sécurité alimentaire.",
    },
    did_you_know: {
      text: "Le terme 'Volt' a été choisi en 1881 lors du Congrès international des électriciens à Paris, en hommage à Alessandro Volta.",
    },
  },
  {
    date: "2026-08-11",
    general_question: {
      question:
        "Quel est le nom de l'explorateur vénitien célèbre pour avoir documenté ses voyages en Asie, notamment en Chine, au XIIIe siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, *Le Livre des Merveilles du Monde* (ou *Il Milione*), a servi de source d'inspiration pour de nombreux explorateurs ultérieurs.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "La statue de la Liberté a été donnée aux États-Unis par la France en 1886 pour commémorer l'alliance entre les deux pays pendant la Révolution américaine.",
    },
  },
  {
    date: "2026-08-12",
    general_question: {
      question: "Quel est le plus grand désert de glace du monde ?",
      answer: "L'Antarctique.",
      explanation:
        "L'Antarctique est considéré comme le plus grand désert au monde (le plus grand désert de sable est le Sahara), car les précipitations y sont extrêmement faibles.",
    },
    open_question: {
      question:
        "Le tourisme spatial devrait-il être encouragé malgré son coût environnemental et social élevé ?",
      notes:
        "Débat sur la justification des dépenses et de l'empreinte carbone pour l'exploration privée de l'espace.",
    },
    did_you_know: {
      text: "L'Antarctique est le seul continent qui n'a pas de reptiles. Il est aussi le continent le plus froid, le plus sec et le plus venteux.",
    },
  },
  {
    date: "2026-08-13",
    general_question: {
      question:
        "Quel est le nom du célèbre chimiste français qui est souvent crédité d'avoir fondé la chimie moderne, notamment par la loi de conservation de la masse ?",
      answer: "Antoine Lavoisier.",
      explanation:
        "Lavoisier a également établi l'importance de l'oxygène dans la combustion. Il a été exécuté pendant la Révolution française en 1794.",
    },
    open_question: {
      question:
        "Le concept de 'nation' et d'identité nationale est-il obsolète à l'ère de la mondialisation et des identités multiples ?",
      notes:
        "Discussion sur le nationalisme, le cosmopolitisme et le multiculturalisme.",
    },
    did_you_know: {
      text: "La Tour Eiffel, construite pour l'Exposition Universelle de 1889, devait être démantelée après 20 ans, mais son utilité comme antenne radio l'a sauvée.",
    },
  },
  {
    date: "2026-08-14",
    general_question: {
      question:
        "Quel est le nom de la péninsule asiatique qui comprend les pays de l'Inde, du Pakistan et du Bangladesh ?",
      answer: "Le sous-continent indien.",
      explanation:
        "Il est bordé au nord par l'Himalaya et est géographiquement distinct du reste de l'Asie.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "L'Inde abrite environ 18 % de la population mondiale, mais seulement 2,4 % de la superficie terrestre du monde.",
    },
  },
  {
    date: "2026-08-15",
    general_question: {
      question:
        "Quelle fête religieuse et nationale française est célébrée le 15 août ?",
      answer: "L'Assomption de Marie.",
      explanation:
        "C'est une fête chrétienne qui commémore la montée au ciel de la Vierge Marie, mère de Jésus. C'est un jour férié en France et dans de nombreux pays catholiques.",
    },
    open_question: {
      question:
        "Le salaire minimum est-il un outil efficace pour lutter contre la pauvreté ou un frein à l'emploi et à la compétitivité des entreprises ?",
      notes:
        "Débat sur l'inflation, le pouvoir d'achat et le marché du travail.",
    },
    did_you_know: {
      text: "L'Inde célèbre son Jour de l'Indépendance le 15 août, commémorant la fin du Raj britannique en 1947.",
    },
  },
  {
    date: "2026-08-16",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure l'humidité de l'air ?",
      answer: "L'hygromètre.",
      explanation:
        "L'humidité de l'air est un facteur clé des prévisions météorologiques, jouant un rôle important dans la formation des nuages et des précipitations.",
    },
    open_question: {
      question:
        "Faut-il légaliser l'euthanasie et le suicide assisté pour garantir le droit à une 'bonne mort' ?",
      notes:
        "Débat éthique, médical et légal sur la fin de vie, la souffrance et le rôle des médecins.",
    },
    did_you_know: {
      text: "Le mot 'hygromètre' vient du grec *hygros* (humide) et *métron* (mesure).",
    },
  },
  {
    date: "2026-08-17",
    general_question: {
      question:
        "Qui est le sculpteur italien connu pour le 'David' et 'La Pietà' ?",
      answer: "Michel-Ange (Michelangelo Buonarroti).",
      explanation:
        "Le 'David' (sculpté entre 1501 et 1504) est une sculpture de marbre de la Renaissance, considérée comme l'un des chefs-d'œuvre de l'art occidental.",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "La sculpture de 'La Pietà' est la seule œuvre signée par Michel-Ange. Il l'a sculptée à l'âge de 24 ans.",
    },
  },
  {
    date: "2026-08-18",
    general_question: {
      question:
        "Quel est le nom du plus grand océan du système solaire (couvrant une lune de Saturne) ?",
      answer: "L'océan de Titan.",
      explanation:
        "Bien qu'il soit composé de méthane et d'éthane liquides, et non d'eau, Titan possède le plus grand corps liquide connu sur une lune ou une planète autre que la Terre.",
    },
    open_question: {
      question:
        "Le service militaire ou civil obligatoire pour les jeunes est-il un outil efficace d'intégration et de cohésion nationale ?",
      notes:
        "Discussion sur l'utilité, la contrainte individuelle et l'apprentissage de la citoyenneté.",
    },
    did_you_know: {
      text: "Une année sur Mars dure environ 687 jours terrestres (presque deux ans terrestres).",
    },
  },
  {
    date: "2026-08-19",
    general_question: {
      question:
        "Quel pays européen est connu pour ses moulins à vent, ses tulipes et ses polders ?",
      answer: "Les Pays-Bas.",
      explanation:
        "Les polders sont des terres gagnées sur la mer ou sur des étendues d'eau et protégées par des digues.",
    },
    open_question: {
      question:
        "Faut-il interdire la chasse de loisir pour préserver la biodiversité et l'équilibre des écosystèmes ?",
      notes:
        "Débat sur la régulation des populations animales, les traditions locales et l'éthique animale.",
    },
    did_you_know: {
      text: "Le vélo est le mode de transport le plus populaire aux Pays-Bas, où il y a plus de vélos que d'habitants.",
    },
  },
  {
    date: "2026-08-20",
    general_question: {
      question:
        "Quel est l'organe qui produit la bile, essentielle à la digestion des graisses ?",
      answer: "Le foie.",
      explanation:
        "La bile est ensuite stockée dans la vésicule biliaire avant d'être libérée dans l'intestin grêle.",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "La langue la plus parlée au monde en nombre de locuteurs natifs est le mandarin (chinois).",
    },
  },
  {
    date: "2026-08-21",
    general_question: {
      question:
        "Quel est le nom de la doctrine selon laquelle la colonisation européenne était une mission 'civilisatrice' ?",
      answer: "Le Fardeau de l'homme blanc (White Man's Burden).",
      explanation:
        "Ce terme, popularisé par un poème de Rudyard Kipling, est souvent utilisé pour décrire l'idéologie justifiant l'impérialisme occidental.",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Le mot 'impérialisme' vient du latin *imperium*, signifiant 'pouvoir de commander'.",
    },
  },
  {
    date: "2026-08-22",
    general_question: {
      question: "Quel est le seul métal liquide à température ambiante ?",
      answer: "Le Mercure (Hg).",
      explanation:
        "Le mercure a un point de fusion de $-38,83^circ\text{C}$ et a été utilisé dans les thermomètres et les baromètres (aujourd'hui souvent remplacé par des alternatives moins toxiques).",
    },
    open_question: {
      question:
        "Le mécénat privé (fondations d'entreprises) est-il un substitut bienvenu ou une menace à l'art et à la culture financés par l'État ?",
      notes:
        "Discussion sur l'indépendance artistique, les priorités de financement et l'influence privée.",
    },
    did_you_know: {
      text: "La Grande Pyramide de Gizeh était à l'origine recouverte de calcaire blanc poli, ce qui la faisait briller au soleil.",
    },
  },
  {
    date: "2026-08-23",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée (notre galaxie) ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Elle est située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée dans environ 4,5 milliards d'années.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles avoir une obligation légale de réparer leurs produits plutôt que d'encourager le renouvellement (obsolescence programmée) ?",
      notes:
        "Discussion sur le 'droit à la réparation', la durabilité des produits et l'économie circulaire.",
    },
    did_you_know: {
      text: "Si le Soleil était de la taille d'une balle de golf, la Terre serait de la taille d'un grain de sable à environ un mètre de distance.",
    },
  },
  {
    date: "2026-08-24",
    general_question: {
      question:
        "Quel est le nom de l'ancienne capitale de l'Empire Inca, située dans les Andes péruviennes ?",
      answer: "Cuzco (ou Cusco).",
      explanation:
        "Cuzco était le centre politique et religieux de l'Empire Inca avant la conquête espagnole. Son nom signifie 'nombril' ou 'centre' en Quechua.",
    },
    open_question: {
      question:
        "L'exploration et la commercialisation des astéroïdes (exploitation minière spatiale) sont-elles le futur de l'humanité ?",
      notes:
        "Discussion sur la faisabilité technique, les traités internationaux (espace), et le risque de pollution spatiale.",
    },
    did_you_know: {
      text: "Il a fallu près de 20 ans pour construire le Machu Picchu, la célèbre citadelle inca, au milieu du XVe siècle.",
    },
  },
  {
    date: "2026-08-25",
    general_question: {
      question:
        "Quel est le nom de la force qui attire les objets dotés de masse les uns vers les autres ?",
      answer: "La Gravité (ou gravitation).",
      explanation:
        "La gravité est l'une des quatre forces fondamentales de la nature et est responsable du mouvement des planètes et des étoiles.",
    },
    open_question: {
      question:
        "La légalisation des drogues douces est-elle une solution pour réduire le crime organisé et améliorer la santé publique ?",
      notes:
        "Débat sur la réglementation, les recettes fiscales et les risques d'abus et de dépendance.",
    },
    did_you_know: {
      text: "Si vous creusiez un tunnel droit à travers la Terre et que vous sautiez dedans (sans prendre en compte l'air ou la chaleur), il vous faudrait environ 42 minutes pour atteindre l'autre côté.",
    },
  },
  {
    date: "2026-08-26",
    general_question: {
      question:
        "Qui est le mathématicien connu pour avoir développé le calcul infinitésimal de manière indépendante de Newton ?",
      answer: "Gottfried Wilhelm Leibniz.",
      explanation:
        "Leibniz a également développé la notation encore utilisée aujourd'hui, notamment le symbole de l'intégrale ($int$).",
    },
    open_question: {
      question:
        "Les pays développés devraient-ils annuler la dette des pays en développement en échange d'engagements environnementaux ?",
      notes:
        "Discussion sur le 'swap' dette-nature, la souveraineté économique et l'équité Nord-Sud.",
    },
    did_you_know: {
      text: "Le symbole $pi$ (Pi) est la 16e lettre de l'alphabet grec, représentant le rapport entre la circonférence d'un cercle et son diamètre.",
    },
  },
  {
    date: "2026-08-27",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite 'La Cène' de Léonard de Vinci ?",
      answer: "Le couvent de Santa Maria delle Grazie (Milan, Italie).",
      explanation:
        "Contrairement à une toile, 'La Cène' est une fresque murale peinte sur le mur du réfectoire du couvent.",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "Le mot 'dollar' dérive de 'thaler', une ancienne monnaie d'argent utilisée dans le Saint-Empire romain germanique.",
    },
  },
  {
    date: "2026-08-28",
    general_question: {
      question:
        "Quel est le nom de l'effet optique qui donne l'impression que la lumière est plus bleue par temps clair que par temps nuageux ?",
      answer: "La diffusion Rayleigh.",
      explanation:
        "Cet effet explique pourquoi le ciel est bleu : les molécules d'air diffusent la lumière bleue plus efficacement que les autres couleurs.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites aux multinationales en matière d'optimisation fiscale (évasion fiscale légale) ?",
      notes:
        "Débat sur les impôts minimums mondiaux, la concurrence fiscale et l'équité des contributions.",
    },
    did_you_know: {
      text: "Le premier télescope a été inventé aux Pays-Bas au début des années 1600. Galilée fut l'un des premiers à l'utiliser pour l'astronomie.",
    },
  },
  {
    date: "2026-08-29",
    general_question: {
      question:
        "Qui est le célèbre poète romain auteur de l'épopée 'L'Énéide', décrivant la fondation mythique de Rome ?",
      answer: "Virgile (Publius Vergilius Maro).",
      explanation:
        "Ce poème du Ier siècle av. J.-C. est considéré comme l'épopée nationale de l'Empire romain.",
    },
    open_question: {
      question:
        "La censure des contenus extrêmes sur les plateformes numériques (discours de haine, terrorisme) menace-t-elle la liberté d'expression ?",
      notes:
        "Débat sur le rôle des modérateurs, les algorithmes de détection et la définition de l'abus.",
    },
    did_you_know: {
      text: "Le mot 'poésie' vient du grec *poiesis*, qui signifie 'faire' ou 'créer'.",
    },
  },
  {
    date: "2026-08-30",
    general_question: {
      question:
        "Quel est le nom de la ville qui abrite la célèbre statue du 'Christ Rédempteur', au Brésil ?",
      answer: "Rio de Janeiro.",
      explanation:
        "La statue, construite dans les années 1920 et 1930, est située au sommet du mont Corcovado et est un symbole majeur de la ville et du Brésil.",
    },
    open_question: {
      question:
        "Le droit à l'avortement est-il un droit fondamental absolu ou doit-il être soumis à certaines restrictions ?",
      notes:
        "Débat éthique et légal sur la temporalité, la conscience médicale et les motifs d'interruption de grossesse.",
    },
    did_you_know: {
      text: "Le mot 'août' a été nommé en l'honneur du premier empereur romain, Auguste (Augustus Caesar).",
    },
  },
  {
    date: "2026-08-31",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Na', essentiel pour l'équilibre hydrique et la fonction nerveuse ?",
      answer: "Le Sodium (Natrium).",
      explanation:
        "Le sodium est un métal alcalin. Son nom latin, *Natrium*, lui a donné son symbole chimique 'Na'.",
    },
    open_question: {
      question:
        "Le revenu universel de base est-il une solution viable pour l'automatisation croissante des emplois ?",
      notes:
        "Discussion sur son coût, son impact sur l'incitation au travail et la réduction de la pauvreté.",
    },
    did_you_know: {
      text: "L'eau salée, y compris l'eau de mer, conduit mieux l'électricité que l'eau pure.",
    },
  },

  // --- Septembre 2026 (29 jours, jusqu'au 2026-09-29) ---
  {
    date: "2026-09-01",
    general_question: {
      question:
        "Quel événement majeur s'est produit le 1er septembre 1939 en Europe, déclenchant la Seconde Guerre mondiale ?",
      answer: "L'invasion de la Pologne par l'Allemagne.",
      explanation:
        "Cette invasion a provoqué la déclaration de guerre de la France et du Royaume-Uni à l'Allemagne, marquant le début du conflit mondial.",
    },
    open_question: {
      question:
        "Faut-il imposer une taxe carbone aux frontières pour protéger l'industrie nationale et inciter les autres pays à réduire leurs émissions ?",
      notes:
        "Débat sur la protectionnisme, les règles de l'OMC et l'efficacité climatique.",
    },
    did_you_know: {
      text: "Le mot 'septembre' vient du latin *septem*, signifiant 'septième', car il était le septième mois du calendrier romain antique.",
    },
  },
  {
    date: "2026-09-02",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite la 'Nuit étoilée' de Vincent van Gogh ?",
      answer: "Le Museum of Modern Art (MoMA) à New York.",
      explanation:
        "Ce tableau iconique, peint en 1889 pendant le séjour de Van Gogh à l'asile de Saint-Rémy-de-Provence, est l'une des œuvres les plus reconnaissables de l'histoire de l'art.",
    },
    open_question: {
      question:
        "Le système du collège/lycée unique est-il le plus efficace pour l'épanouissement des élèves ou faut-il introduire une sélection plus précoce ?",
      notes:
        "Débat sur l'orientation, l'égalité des chances et les besoins éducatifs différenciés.",
    },
    did_you_know: {
      text: "Le soleil est si grand qu'environ 1,3 million de Terres pourraient tenir à l'intérieur.",
    },
  },
  {
    date: "2026-09-03",
    general_question: {
      question:
        "Quel est l'élément chimique qui, combiné à l'hydrogène, forme l'eau ($H_2O$) ?",
      answer: "L'Oxygène (O).",
      explanation:
        "L'oxygène est le troisième élément le plus abondant dans l'univers et est essentiel à la vie sur Terre.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être obligatoire pour assurer une représentation démocratique maximale ?",
      notes:
        "Discussion sur la légitimité du vote, l'apathie politique et les sanctions en cas d'abstention.",
    },
    did_you_know: {
      text: "Les pingouins sont incapables de voler, mais peuvent nager à des vitesses allant jusqu'à 35 km/h.",
    },
  },
  {
    date: "2026-09-04",
    general_question: {
      question:
        "Quel est le nom de la péninsule asiatique qui comprend les pays de la Malaisie, de la Thaïlande et de la Birmanie ?",
      answer: "La péninsule Malaise (ou péninsule de Malacca).",
      explanation:
        "Elle est l'extrémité la plus méridionale du continent asiatique, jouant un rôle stratégique dans le commerce maritime.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' d'ici 2050 est-il techniquement et économiquement réaliste à l'échelle mondiale ?",
      notes:
        "Débat sur la faisabilité des technologies de capture de carbone, les changements de mode de vie nécessaires et le coût de la transition énergétique.",
    },
    did_you_know: {
      text: "Le mot 'septembre' vient du latin *septem*, signifiant 'septième', car il était le septième mois du calendrier romain.",
    },
  },
  {
    date: "2026-09-05",
    general_question: {
      question:
        "Quel est le nom de la structure géologique en forme de champignon qui se forme dans les déserts par l'érosion éolienne ?",
      answer: "Une cheminée de fée (ou roche champignon).",
      explanation:
        "Elle se forme lorsque le vent (érosion éolienne) érode plus rapidement la base de la roche, laissant un chapeau rocheux plus résistant au sommet.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "La vitesse du son dans l'air est d'environ 343 mètres par seconde, soit environ 1 235 km/h.",
    },
  },
  {
    date: "2026-09-06",
    general_question: {
      question:
        "Quel est le nom du plus grand lac artificiel du monde (en volume) ?",
      answer: "Le lac Kariba (Zambie/Zimbabwe).",
      explanation:
        "Formé par le barrage de Kariba sur le fleuve Zambèze, il est souvent considéré comme le plus grand lac artificiel en termes de volume d'eau stocké.",
    },
    open_question: {
      question:
        "Le rôle des influenceurs est-il un phénomène de mode passager ou une nouvelle forme de pouvoir médiatique et économique durable ?",
      notes:
        "Discussion sur l'évolution du marketing, la confiance du public et la réglementation des contenus.",
    },
    did_you_know: {
      text: "Le mot 'barrage' vient du vieux français *barra* (barre, clôture).",
    },
  },
  {
    date: "2026-09-07",
    general_question: {
      question:
        "Quel est le nom du processus par lequel les rayons lumineux sont déviés lorsqu'ils passent d'un milieu à un autre (air/eau) ?",
      answer: "La réfraction.",
      explanation:
        "C'est ce qui explique pourquoi un bâton plongé dans l'eau semble cassé ou courbé, car la vitesse de la lumière change dans l'eau.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "La vitesse de la lumière est d'environ 299 792 458 mètres par seconde dans le vide.",
    },
  },
  {
    date: "2026-09-08",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui utilise le son (ondes sonores) pour détecter les objets sous-marins ?",
      answer: "Le Sonar (Sound Navigation and Ranging).",
      explanation:
        "Le sonar est crucial pour la marine, la détection de sous-marins, et la cartographie des fonds marins.",
    },
    open_question: {
      question:
        "Le secret bancaire est-il nécessaire pour la liberté économique ou favorise-t-il la criminalité financière et la fraude fiscale ?",
      notes:
        "Discussion sur la transparence fiscale internationale, les paradis fiscaux et le droit à l'intimité financière.",
    },
    did_you_know: {
      text: "Le mot 'sonar' est un acronyme de l'anglais *Sound Navigation and Ranging*.",
    },
  },
  {
    date: "2026-09-09",
    general_question: {
      question:
        "Qui est le peintre italien connu pour ses fresques de la chapelle Sixtine, notamment 'La Création d'Adam' ?",
      answer: "Michel-Ange (Michelangelo Buonarroti).",
      explanation:
        "Il a travaillé sur le plafond de la chapelle Sixtine de 1508 à 1512, sur commande du Pape Jules II.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "Les humains partagent environ 50 % de leur ADN avec la banane.",
    },
  },
  {
    date: "2026-09-10",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Au' et connu pour sa résistance à la corrosion ?",
      answer: "L'or (Aurum).",
      explanation:
        "L'or est un métal précieux et inaltérable. Son nom latin, *Aurum*, signifie 'brillant' ou 'lueur de l'aube'.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de manifester pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "Le mot 'chimie' vient du grec *chemeia*, désignant l'art de la transformation des substances.",
    },
  },
  {
    date: "2026-09-11",
    general_question: {
      question:
        "Quel est le nom du plus grand volcan actif en Europe, situé en Sicile ?",
      answer: "L'Etna.",
      explanation:
        "Il culmine à plus de 3 300 mètres et est l'un des volcans les plus actifs et des plus hauts d'Europe.",
    },
    open_question: {
      question:
        "L'IA générative doit-elle être soumise à des lois éthiques plus strictes que les entreprises classiques ?",
      notes:
        "Débat sur la régulation de l'IA (transparence, biais, impact sociétal) vs. la liberté d'innovation.",
    },
    did_you_know: {
      text: "Le 11 septembre 2001, les attentats terroristes aux États-Unis ont marqué un tournant dans la géopolitique mondiale et la lutte contre le terrorisme.",
    },
  },
  {
    date: "2026-09-12",
    general_question: {
      question:
        "Quel est le nom du plus grand lac salé du monde, souvent qualifié de mer ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Elle est en réalité le plus grand lac endoréique (sans exutoire vers l'océan) au monde, bordée par cinq pays.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "Le mot 'lac' vient du latin *lacus* (bassin, étang).",
    },
  },
  {
    date: "2026-09-13",
    general_question: {
      question:
        "Quel pays européen est la patrie des Jeux Olympiques antiques et modernes ?",
      answer: "La Grèce.",
      explanation:
        "Les Jeux antiques se tenaient à Olympie dès 776 av. J.-C. Les premiers Jeux modernes ont eu lieu à Athènes en 1896.",
    },
    open_question: {
      question:
        "Faut-il interdire la publicité pour les produits considérés comme mauvais pour la santé (sucre, alcool, malbouffe) ?",
      notes:
        "Débat sur la liberté de commerce versus la responsabilité de l'État dans la santé publique.",
    },
    did_you_know: {
      text: "Le mot 'sport' vient du vieux français *desport*, signifiant 'divertissement, loisir'.",
    },
  },
  {
    date: "2026-09-14",
    general_question: {
      question:
        "Quel est le nom de la péninsule asiatique qui comprend les pays de l'Inde, du Pakistan et du Bangladesh ?",
      answer: "Le sous-continent indien.",
      explanation:
        "Il est bordé au nord par l'Himalaya et est géographiquement distinct du reste de l'Asie.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "L'Inde est le pays le plus peuplé du monde depuis 2023, dépassant la Chine.",
    },
  },
  {
    date: "2026-09-15",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure l'humidité de l'air ?",
      answer: "L'hygromètre.",
      explanation:
        "L'humidité de l'air est un facteur clé des prévisions météorologiques, jouant un rôle important dans la formation des nuages et des précipitations.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "Le mot 'hygromètre' vient du grec *hygros* (humide) et *métron* (mesure).",
    },
  },
  {
    date: "2026-09-16",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'K' et essentiel au bon fonctionnement des nerfs et des muscles ?",
      answer: "Le Potassium (Kalium).",
      explanation:
        "Le potassium est un électrolyte vital. Son symbole 'K' vient du latin scientifique *Kalium*.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "Il existe plus de 10 000 espèces d'oiseaux dans le monde.",
    },
  },
  {
    date: "2026-09-17",
    general_question: {
      question:
        "Quel est le nom de l'hormone de la 'lutte ou de la fuite' sécrétée par les glandes surrénales en cas de stress ?",
      answer: "L'adrénaline (ou épinéphrine).",
      explanation:
        "Elle augmente le rythme cardiaque, la pression artérielle et mobilise l'énergie en préparant le corps à une action rapide.",
    },
    open_question: {
      question:
        "Comment l'urbanisme peut-il être repensé pour améliorer la qualité de vie et réduire l'empreinte carbone des grandes métropoles ?",
      notes:
        "Débat sur la 'ville du quart d'heure', les transports doux et la végétalisation urbaine.",
    },
    did_you_know: {
      text: "Le mot 'adrénaline' vient du latin *ad* (à, vers) et *renes* (reins, car elle est sécrétée par les glandes surrénales).",
    },
  },
  {
    date: "2026-09-18",
    general_question: {
      question:
        "Quel est le seul continent qui n'est traversé par aucun fleuve ?",
      answer: "L'Antarctique.",
      explanation:
        "L'eau y est presque entièrement sous forme de glace. Les rares flux d'eau sont saisonniers ou sous-glaciaires.",
    },
    open_question: {
      question:
        "Le système de retraite par répartition est-il durable face au vieillissement démographique et à l'allongement de l'espérance de vie ?",
      notes:
        "Discussion sur l'âge de départ, les cotisations et la nécessité de réformes structurelles.",
    },
    did_you_know: {
      text: "L'Antarctique détient environ 90 % de la glace terrestre et 70 % de l'eau douce de la planète.",
    },
  },
  {
    date: "2026-09-19",
    general_question: {
      question:
        "Quel est le nom de l'effet optique qui donne l'impression que la lumière est plus bleue par temps clair que par temps nuageux ?",
      answer: "La diffusion Rayleigh.",
      explanation:
        "Cet effet explique pourquoi le ciel est bleu : les molécules d'air diffusent la lumière bleue plus efficacement que les autres couleurs.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites à la quantité d'eau douce qu'une entreprise ou une personne peut utiliser dans les zones de stress hydrique ?",
      notes:
        "Discussion sur la gestion des ressources, l'agriculture intensive et la priorité de l'eau potable.",
    },
    did_you_know: {
      text: "Le mot 'optique' vient du grec *optikē* (relatif à la vue).",
    },
  },
  {
    date: "2026-09-20",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée (notre galaxie) ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Elle est située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée dans environ 4,5 milliards d'années.",
    },
    open_question: {
      question:
        "Les entreprises technologiques (GAFA) sont-elles devenues trop puissantes et doivent-elles être démantelées (lois antitrust) ?",
      notes:
        "Discussion sur le monopole, la concurrence, la protection des données et le lobbying politique.",
    },
    did_you_know: {
      text: "La Voie Lactée et Andromède sont les deux galaxies les plus massives du Groupe Local de galaxies.",
    },
  },
  {
    date: "2026-09-21",
    general_question: {
      question:
        "Quel est le nom de l'explorateur vénitien célèbre pour avoir documenté ses voyages en Asie, notamment en Chine, au XIIIe siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, *Le Livre des Merveilles du Monde* (ou *Il Milione*), a servi de source d'inspiration pour de nombreux explorateurs ultérieurs.",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "Le mot 'septembre' vient du latin *septem*, signifiant 'septième', car il était le septième mois du calendrier romain.",
    },
  },
  {
    date: "2026-09-22",
    general_question: {
      question:
        "Quel est le nom du plus grand désert de sable au monde (hors déserts de glace) ?",
      answer: "Le Sahara.",
      explanation:
        "Il couvre une grande partie de l'Afrique du Nord et est le plus grand désert chaud. Le désert de l'Antarctique est le plus grand désert au monde en général.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "Le Sahara est le désert qui s'étend le plus rapidement au monde en raison du changement climatique et de la désertification.",
    },
  },
  {
    date: "2026-09-23",
    general_question: {
      question:
        "Quel est l'élément chimique qui a le numéro atomique 1 et le poids atomique le plus faible ?",
      answer: "L'Hydrogène (H).",
      explanation:
        "L'hydrogène est le constituant le plus abondant de l'univers et le gaz le plus léger.",
    },
    open_question: {
      question:
        "Les critères de beauté (mode, chirurgie esthétique) sont-ils une forme de pression sociale genrée ou une libre expression individuelle ?",
      notes:
        "Discussion sur l'impact des médias, le patriarcat et l'autonomie corporelle.",
    },
    did_you_know: {
      text: "Le 23 septembre est souvent la date de l'équinoxe d'automne (dans l'hémisphère nord), marquant la fin de l'été et le début de l'automne.",
    },
  },
  {
    date: "2026-09-24",
    general_question: {
      question:
        "Quel pays européen est la patrie des Jeux Olympiques antiques et modernes ?",
      answer: "La Grèce.",
      explanation:
        "Les Jeux antiques se tenaient à Olympie dès 776 av. J.-C. Les premiers Jeux modernes ont eu lieu à Athènes en 1896.",
    },
    open_question: {
      question:
        "Le salaire minimum est-il un outil efficace pour lutter contre la pauvreté ou un frein à l'emploi et à la compétitivité des entreprises ?",
      notes:
        "Débat sur l'inflation, le pouvoir d'achat et le marché du travail.",
    },
    did_you_know: {
      text: "Le mot 'sport' vient du vieux français *desport*, signifiant 'divertissement, loisir'.",
    },
  },
  {
    date: "2026-09-25",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui utilise le son (ondes sonores) pour détecter les objets sous-marins ?",
      answer: "Le Sonar (Sound Navigation and Ranging).",
      explanation:
        "Le sonar est crucial pour la marine, la détection de sous-marins, et la cartographie des fonds marins.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "La vitesse du son dans l'air est d'environ 343 mètres par seconde, soit environ 1 235 km/h.",
    },
  },
  {
    date: "2026-09-26",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Fe', essentiel à la production de l'hémoglobine dans le sang ?",
      answer: "Le Fer (Ferrum).",
      explanation:
        "Le fer est crucial pour le transport de l'oxygène des poumons vers le reste du corps.",
    },
    open_question: {
      question:
        "Le droit des auteurs et artistes doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des créateurs.",
    },
    did_you_know: {
      text: "Le corps humain contient suffisamment de fer pour fabriquer un petit clou d'environ trois centimètres de long.",
    },
  },
  {
    date: "2026-09-27",
    general_question: {
      question:
        "Quel est le nom de la ville qui abrite la célèbre statue du 'Christ Rédempteur', au Brésil ?",
      answer: "Rio de Janeiro.",
      explanation:
        "La statue, construite dans les années 1920 et 1930, est située au sommet du mont Corcovado et est un symbole majeur de la ville et du Brésil.",
    },
    open_question: {
      question:
        "Le concept de 'ville du quart d'heure' (accessibilité rapide aux services) est-il réalisable dans toutes les métropoles ?",
      notes:
        "Débat sur la densité urbaine, les transports et l'égalité d'accès aux services en banlieue.",
    },
    did_you_know: {
      text: "Le mot 'septembre' vient du latin *septem*, signifiant 'septième', car il était le septième mois du calendrier romain.",
    },
  },
  {
    date: "2026-09-28",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure les tremblements de terre ?",
      answer: "Le sismographe (ou sismomètre).",
      explanation:
        "Il enregistre l'amplitude et la durée des ondes sismiques et permet de localiser l'épicentre d'un séisme.",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "Le mot 'sismographe' vient du grec *seismos* (tremblement de terre) et *graphein* (écrire).",
    },
  },
  {
    date: "2026-09-29",
    general_question: {
      question:
        "Quel est le nom de l'effet optique qui donne l'impression que la lumière est plus bleue par temps clair que par temps nuageux ?",
      answer: "La diffusion Rayleigh.",
      explanation:
        "Cet effet explique pourquoi le ciel est bleu : les molécules d'air diffusent la lumière bleue plus efficacement que les autres couleurs.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles avoir une obligation légale de réparer leurs produits plutôt que d'encourager le renouvellement (obsolescence programmée) ?",
      notes:
        "Discussion sur le 'droit à la réparation', la durabilité des produits et l'économie circulaire.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas légers. Un cumulus moyen peut peser plus de 500 tonnes, soit l'équivalent d'un avion gros porteur.",
    },
    // --- Septembre 2026 (1 jour restant) ---
    date: "2026-09-30",
    general_question: {
      question:
        "Quel est le nom de la planète qui a été déclassée de son statut de planète en 2006, la reléguant au statut de 'planète naine' ?",
      answer: "Pluton.",
      explanation:
        "L'Union Astronomique Internationale (UAI) a révisé la définition d'une planète, et Pluton ne remplissait pas le critère d'avoir 'nettoyé' son orbite des autres débris spatiaux.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' d'ici 2050 est-il techniquement et économiquement réaliste à l'échelle mondiale ?",
      notes:
        "Débat sur la faisabilité des technologies de capture de carbone, les changements de mode de vie nécessaires et le coût de la transition énergétique.",
    },
    did_you_know: {
      text: "Le mot 'septembre' vient du latin *septem*, signifiant 'septième', car il était le septième mois du calendrier romain antique avant l'ajout de janvier et février.",
    },
  },

  // --- Octobre 2026 (31 jours) ---
  {
    date: "2026-10-01",
    general_question: {
      question:
        "Quel est le nom de l'élément chimique symbolisé par 'Hg', connu pour être le seul métal liquide à température ambiante ?",
      answer: "Le Mercure.",
      explanation:
        "Le mercure a un point de fusion très bas et a été utilisé dans les thermomètres et les baromètres. Il est très toxique.",
    },
    open_question: {
      question:
        "La transparence totale des salaires au sein des entreprises est-elle un facteur de motivation ou de conflit ?",
      notes:
        "Discussion sur l'égalité salariale, la jalousie et l'efficacité des négociations individuelles.",
    },
    did_you_know: {
      text: "Le mot 'octobre' vient du latin *octo*, signifiant 'huit', car il était le huitième mois du calendrier romain avant que Jules César ne le réforme.",
    },
  },
  {
    date: "2026-10-02",
    general_question: {
      question:
        "Qui est le compositeur allemand de la 'Neuvième Symphonie', incluant l' 'Ode à la joie' ?",
      answer: "Ludwig van Beethoven.",
      explanation:
        "Créée en 1824, c'est l'une des œuvres les plus célèbres de la musique classique. L' 'Ode à la joie' est l'hymne de l'Union européenne.",
    },
    open_question: {
      question:
        "Faut-il légaliser l'euthanasie et le suicide assisté pour garantir le droit à une 'bonne mort' ?",
      notes:
        "Débat éthique, médical et légal sur la fin de vie, la souffrance et le rôle des médecins.",
    },
    did_you_know: {
      text: "Beethoven était presque entièrement sourd lorsqu'il a composé sa Neuvième Symphonie.",
    },
  },
  {
    date: "2026-10-03",
    general_question: {
      question:
        "Quel est le nom de l'événement qui a marqué la réunification de l'Allemagne en 1990 ?",
      answer: "Le Jour de l'Unité Allemande (Tag der Deutschen Einheit).",
      explanation:
        "Il commémore l'unification officielle de la République fédérale d'Allemagne (RFA) et de la République démocratique allemande (RDA).",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Le Mur de Berlin est tombé en novembre 1989, mais la réunification officielle a eu lieu près d'un an plus tard, le 3 octobre 1990.",
    },
  },
  {
    date: "2026-10-04",
    general_question: {
      question:
        "Quel est le nom du processus par lequel les rayons lumineux sont déviés lorsqu'ils passent d'un milieu à un autre (air/eau) ?",
      answer: "La réfraction.",
      explanation:
        "C'est ce qui explique pourquoi un bâton plongé dans l'eau semble cassé ou courbé, car la vitesse de la lumière change dans l'eau.",
    },
    open_question: {
      question:
        "Le mécénat privé (fondations d'entreprises) est-il un substitut bienvenu ou une menace à l'art et à la culture financés par l'État ?",
      notes:
        "Discussion sur l'indépendance artistique, les priorités de financement et l'influence privée.",
    },
    did_you_know: {
      text: "La lumière du Soleil met environ 8 minutes et 20 secondes pour atteindre la Terre.",
    },
  },
  {
    date: "2026-10-05",
    general_question: {
      question:
        "Quel pays est le berceau de la philosophie stoïcienne (Zénon de Citium) ?",
      answer: "La Grèce antique.",
      explanation:
        "Le stoïcisme est une école de philosophie hellénistique fondée à Athènes par Zénon de Citium au IIIe siècle av. J.-C.",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "Le mot 'philosophie' signifie 'amour de la sagesse' en grec ancien (*philosophia*).",
    },
  },
  {
    date: "2026-10-06",
    general_question: {
      question:
        "Quel est le nom de la galaxie où se situe notre Système Solaire ?",
      answer: "La Voie Lactée.",
      explanation:
        "C'est une galaxie spirale barrée, contenant entre 100 et 400 milliards d'étoiles. Notre Soleil se trouve dans l'un de ses bras spiraux, le bras d'Orion.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "Le centre de la Voie Lactée est obscurci par d'épaisses couches de poussière et de gaz, ce qui rend l'observation difficile en lumière visible.",
    },
  },
  {
    date: "2026-10-07",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite la 'Nuit étoilée' de Vincent van Gogh ?",
      answer: "Le Museum of Modern Art (MoMA) à New York.",
      explanation:
        "Ce tableau iconique, peint en 1889 pendant le séjour de Van Gogh à l'asile de Saint-Rémy-de-Provence, est l'une des œuvres les plus reconnaissables de l'histoire de l'art.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être obligatoire pour assurer une représentation démocratique maximale ?",
      notes:
        "Discussion sur la légitimité du vote, l'apathie politique et les sanctions en cas d'abstention.",
    },
    did_you_know: {
      text: "Van Gogh n'a vendu qu'un seul tableau de son vivant : *La Vigne Rouge*.",
    },
  },
  {
    date: "2026-10-08",
    general_question: {
      question: "Quelle est la capitale de l'Australie ?",
      answer: "Canberra.",
      explanation:
        "Canberra est la capitale politique, tandis que Sydney est la ville la plus peuplée et la plus connue internationalement.",
    },
    open_question: {
      question:
        "Les véhicules autonomes doivent-ils être programmés pour privilégier la vie du passager ou celle du piéton en cas d'accident inévitable ?",
      notes:
        "Problème du dilemme du 'Trolley' appliqué à l'IA et aux véhicules, débat éthique sur la programmation morale.",
    },
    did_you_know: {
      text: "Canberra est une ville planifiée, choisie comme capitale de compromis entre Sydney et Melbourne en 1908.",
    },
  },
  {
    date: "2026-10-09",
    general_question: {
      question:
        "Quel est l'élément chimique qui possède six protons et est essentiel à toute vie organique sur Terre ?",
      answer: "Le Carbone (C).",
      explanation:
        "Le carbone forme la base des molécules organiques (protéines, ADN, lipides) grâce à sa capacité à former quatre liaisons chimiques stables.",
    },
    open_question: {
      question:
        "Le rôle des influenceurs est-il un phénomène de mode passager ou une nouvelle forme de pouvoir médiatique et économique durable ?",
      notes:
        "Discussion sur l'évolution du marketing, la confiance du public et la réglementation des contenus.",
    },
    did_you_know: {
      text: "Tous les diamants et le graphite sont constitués uniquement d'atomes de carbone, arrangés différemment.",
    },
  },
  {
    date: "2026-10-10",
    general_question: {
      question:
        "Quel est le plus long fleuve d'Europe, qui se jette dans la mer Caspienne ?",
      answer: "La Volga.",
      explanation:
        "Elle coule entièrement en Russie et est d'une importance cruciale pour l'irrigation, la production hydroélectrique et le transport.",
    },
    open_question: {
      question:
        "Faut-il interdire l'élevage intensif des animaux pour des raisons éthiques, sanitaires et environnementales ?",
      notes:
        "Discussion sur le bien-être animal, les coûts de la viande et la sécurité alimentaire.",
    },
    did_you_know: {
      text: "La Volga est si large à certains endroits qu'il est impossible de voir l'autre rive.",
    },
  },
  {
    date: "2026-10-11",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Au' et connu pour sa résistance à la corrosion ?",
      answer: "L'or (Aurum).",
      explanation:
        "L'or est un métal précieux et inaltérable. Son nom latin, *Aurum*, signifie 'brillant' ou 'lueur de l'aube'.",
    },
    open_question: {
      question:
        "Les classes préparatoires et les grandes écoles sont-elles le meilleur modèle pour former l'élite d'une nation ?",
      notes:
        "Débat sur l'égalité des chances, l'élitisme et la diversité des parcours éducatifs.",
    },
    did_you_know: {
      text: "L'océan contient environ 20 millions de tonnes d'or en suspension, mais il est trop dilué pour être extrait de manière rentable.",
    },
  },
  {
    date: "2026-10-12",
    general_question: {
      question:
        "Dans quel sport est attribué le trophée appelé 'La Coupe Stanley' ?",
      answer: "Le hockey sur glace.",
      explanation:
        "C'est le trophée remis chaque année à l'équipe championne des séries éliminatoires de la Ligue nationale de hockey (NHL).",
    },
    open_question: {
      question:
        "Le système du collège/lycée unique est-il le plus efficace pour l'épanouissement des élèves ou faut-il introduire une sélection plus précoce ?",
      notes:
        "Débat sur l'orientation, l'égalité des chances et les besoins éducatifs différenciés.",
    },
    did_you_know: {
      text: "Le mot 'hockey' pourrait venir du vieux français *hoquet*, signifiant 'bâton courbé'.",
    },
  },
  {
    date: "2026-10-13",
    general_question: {
      question: "Quel est le nom du plus grand désert de glace du monde ?",
      answer: "L'Antarctique.",
      explanation:
        "L'Antarctique est considéré comme le plus grand désert au monde (le plus grand désert de sable est le Sahara), car les précipitations y sont extrêmement faibles.",
    },
    open_question: {
      question:
        "Le tourisme spatial devrait-il être encouragé malgré son coût environnemental et social élevé ?",
      notes:
        "Débat sur la justification des dépenses et de l'empreinte carbone pour l'exploration privée de l'espace.",
    },
    did_you_know: {
      text: "Le traité de l'Antarctique de 1959 réserve le continent exclusivement à la recherche scientifique, interdisant toute activité militaire ou minière.",
    },
  },
  {
    date: "2026-10-14",
    general_question: {
      question:
        "Quel est le nom de l'explorateur vénitien célèbre pour avoir documenté ses voyages en Asie, notamment en Chine, au XIIIe siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, *Le Livre des Merveilles du Monde* (ou *Il Milione*), a servi de source d'inspiration pour de nombreux explorateurs ultérieurs.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "Marco Polo aurait passé 17 ans au service de Kubilai Khan, petit-fils de Gengis Khan.",
    },
  },
  {
    date: "2026-10-15",
    general_question: {
      question:
        "Quel est l'organe qui produit la bile, essentielle à la digestion des graisses ?",
      answer: "Le foie.",
      explanation:
        "La bile est ensuite stockée dans la vésicule biliaire avant d'être libérée dans l'intestin grêle.",
    },
    open_question: {
      question:
        "Le service militaire ou civil obligatoire pour les jeunes est-il un outil efficace d'intégration et de cohésion nationale ?",
      notes:
        "Discussion sur l'utilité, la contrainte individuelle et l'apprentissage de la citoyenneté.",
    },
    did_you_know: {
      text: "Le foie est l'organe interne le plus lourd du corps humain, représentant environ 1,5 kg chez un adulte.",
    },
  },
  {
    date: "2026-10-16",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite 'La Cène' de Léonard de Vinci ?",
      answer: "Le couvent de Santa Maria delle Grazie (Milan, Italie).",
      explanation:
        "Contrairement à une toile, 'La Cène' est une fresque murale peinte sur le mur du réfectoire du couvent.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "Léonard de Vinci a utilisé une technique expérimentale pour peindre *La Cène*, ce qui a malheureusement conduit à sa détérioration rapide au fil des siècles.",
    },
  },
  {
    date: "2026-10-17",
    general_question: {
      question:
        "Quel est le nom de la maladie où le corps ne produit pas assez d'insuline (type 1) ou n'y répond pas correctement (type 2) ?",
      answer: "Le diabète.",
      explanation:
        "L'insuline est essentielle pour permettre au glucose d'entrer dans les cellules et fournir de l'énergie. Sans elle, le taux de sucre dans le sang augmente.",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "Le mot 'diabète' vient du grec *diabētes*, signifiant 'qui passe à travers', faisant référence à l'élimination rapide de l'urine sucrée.",
    },
  },
  {
    date: "2026-10-18",
    general_question: {
      question:
        "Quel est le nom du plus grand volcan actif en Europe, situé en Sicile ?",
      answer: "L'Etna.",
      explanation:
        "Il culmine à plus de 3 300 mètres et est l'un des volcans les plus actifs et des plus hauts d'Europe.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites aux multinationales en matière d'optimisation fiscale (évasion fiscale légale) ?",
      notes:
        "Débat sur les impôts minimums mondiaux, la concurrence fiscale et l'équité des contributions.",
    },
    did_you_know: {
      text: "L'Etna est un volcan de type 'effusif', ce qui signifie que ses éruptions sont souvent caractérisées par des coulées de lave lentes plutôt que des explosions violentes.",
    },
  },
  {
    date: "2026-10-19",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui utilise le son (ondes sonores) pour détecter les objets sous-marins ?",
      answer: "Le Sonar (Sound Navigation and Ranging).",
      explanation:
        "Le sonar est crucial pour la marine, la détection de sous-marins, et la cartographie des fonds marins.",
    },
    open_question: {
      question:
        "Faut-il interdire la chasse de loisir pour préserver la biodiversité et l'équilibre des écosystèmes ?",
      notes:
        "Débat sur la régulation des populations animales, les traditions locales et l'éthique animale.",
    },
    did_you_know: {
      text: "Le mot 'sonar' est un acronyme de l'anglais *Sound Navigation and Ranging*.",
    },
  },
  {
    date: "2026-10-20",
    general_question: {
      question:
        "Quel est le nom du plus grand lac salé du monde, souvent qualifié de mer ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Elle est en réalité le plus grand lac endoréique (sans exutoire vers l'océan) au monde, bordée par cinq pays.",
    },
    open_question: {
      question:
        "Faut-il imposer une taxe carbone aux frontières pour protéger l'industrie nationale et inciter les autres pays à réduire leurs émissions ?",
      notes:
        "Débat sur la protectionnisme, les règles de l'OMC et l'efficacité climatique.",
    },
    did_you_know: {
      text: "La Mer Caspienne a perdu environ 40 % de sa superficie depuis 1970 en raison de la diminution des apports des fleuves (notamment la Volga) et du changement climatique.",
    },
  },
  {
    date: "2026-10-21",
    general_question: {
      question:
        "Quel est le nom de l'empereur romain célèbre pour avoir fait construire un mur défensif à travers le nord de la Grande-Bretagne au IIe siècle ?",
      answer: "Hadrien.",
      explanation:
        "Le Mur d'Hadrien, long de 117 kilomètres, marquait la frontière septentrionale de l'Empire romain en Grande-Bretagne.",
    },
    open_question: {
      question:
        "Le droit à l'avortement est-il un droit fondamental absolu ou doit-il être soumis à certaines restrictions ?",
      notes:
        "Débat éthique et légal sur la temporalité, la conscience médicale et les motifs d'interruption de grossesse.",
    },
    did_you_know: {
      text: "Le Mur d'Hadrien était gardé par environ 15 000 soldats romains et non pas par un petit nombre comme on le pense souvent.",
    },
  },
  {
    date: "2026-10-22",
    general_question: {
      question: "Quelle est la capitale de l'Égypte ?",
      answer: "Le Caire.",
      explanation:
        "Le Caire est la plus grande ville d'Afrique et du monde arabe, située près de la base du delta du Nil.",
    },
    open_question: {
      question:
        "Le revenu universel de base est-il une solution viable pour l'automatisation croissante des emplois ?",
      notes:
        "Discussion sur son coût, son impact sur l'incitation au travail et la réduction de la pauvreté.",
    },
    did_you_know: {
      text: "Le Caire est l'une des villes les plus polluées au monde, en grande partie à cause de la circulation automobile intense.",
    },
  },
  {
    date: "2026-10-23",
    general_question: {
      question:
        "Quel est le nom de l'effet optique qui donne l'impression que la lumière est plus bleue par temps clair que par temps nuageux ?",
      answer: "La diffusion Rayleigh.",
      explanation:
        "Cet effet explique pourquoi le ciel est bleu : les molécules d'air diffusent la lumière bleue plus efficacement que les autres couleurs.",
    },
    open_question: {
      question:
        "Les monnaies numériques de banque centrale (MNBC) doivent-elles remplacer l'argent liquide traditionnel ?",
      notes:
        "Discussion sur la surveillance financière, l'inclusion bancaire et la stabilité économique.",
    },
    did_you_know: {
      text: "Les couchers de soleil sont rouges et oranges parce que la lumière traverse une plus grande épaisseur d'atmosphère, filtrant la lumière bleue et ne laissant passer que le rouge et l'orange.",
    },
  },
  {
    date: "2026-10-24",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'K' et essentiel au bon fonctionnement des nerfs et des muscles ?",
      answer: "Le Potassium (Kalium).",
      explanation:
        "Le potassium est un électrolyte vital. Son symbole 'K' vient du latin scientifique *Kalium*.",
    },
    open_question: {
      question:
        "L'exploration et la commercialisation des astéroïdes (exploitation minière spatiale) sont-elles le futur de l'humanité ?",
      notes:
        "Discussion sur la faisabilité technique, les traités internationaux (espace), et le risque de pollution spatiale.",
    },
    did_you_know: {
      text: "Une carence en potassium peut provoquer des crampes musculaires et des problèmes cardiaques.",
    },
  },
  {
    date: "2026-10-25",
    general_question: {
      question:
        "Quel est le nom de la péninsule asiatique qui comprend les pays de l'Inde, du Pakistan et du Bangladesh ?",
      answer: "Le sous-continent indien.",
      explanation:
        "Il est bordé au nord par l'Himalaya et est géographiquement distinct du reste de l'Asie.",
    },
    open_question: {
      question:
        "Les multinationales ont-elles trop de pouvoir sur les gouvernements et les décisions politiques (lobbying, évasion fiscale) ?",
      notes:
        "Débat sur la corruption légale, la souveraineté nationale et la régulation internationale.",
    },
    did_you_know: {
      text: "Le sous-continent indien abrite les trois quarts des tigres sauvages du monde.",
    },
  },
  {
    date: "2026-10-26",
    general_question: {
      question:
        "Qui est le physicien italien qui a inventé la première pile électrique moderne au début du XIXe siècle ?",
      answer: "Alessandro Volta.",
      explanation:
        "La 'pile voltaïque' a été la première source continue d'électricité, marquant le début de l'électrochimie. L'unité de tension électrique, le Volt, porte son nom.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "Le terme 'Volt' a été choisi en 1881 lors du Congrès international des électriciens à Paris, en hommage à Alessandro Volta.",
    },
  },
  {
    date: "2026-10-27",
    general_question: {
      question:
        "Quel est l'organe qui produit la bile, essentielle à la digestion des graisses ?",
      answer: "Le foie.",
      explanation:
        "La bile est ensuite stockée dans la vésicule biliaire avant d'être libérée dans l'intestin grêle.",
    },
    open_question: {
      question:
        "Le concept de 'nation' et d'identité nationale est-il obsolète à l'ère de la mondialisation et des identités multiples ?",
      notes:
        "Discussion sur le nationalisme, le cosmopolitisme et le multiculturalisme.",
    },
    did_you_know: {
      text: "Le foie peut se régénérer : il peut reprendre sa taille normale même si 75 % de sa masse a été enlevée chirurgicalement.",
    },
  },
  {
    date: "2026-10-28",
    general_question: {
      question:
        "Quel est le nom de la membrane qui recouvre et protège le cerveau et la moelle épinière ?",
      answer: "Les méninges.",
      explanation:
        "Les méninges sont composées de trois couches : la dure-mère, l'arachnoïde et la pie-mère.",
    },
    open_question: {
      question:
        "Le boycott des entreprises qui ne respectent pas certaines normes éthiques (environnement, travail) est-il un outil efficace de changement social ?",
      notes:
        "Discussion sur l'impact économique réel, le 'greenwashing' et le pouvoir du consommateur.",
    },
    did_you_know: {
      text: "L'inflammation des méninges est appelée méningite.",
    },
  },
  {
    date: "2026-10-29",
    general_question: {
      question:
        "Quel est le nom de la mission Apollo qui a marqué le premier pas de l'homme sur la Lune en 1969 ?",
      answer: "Apollo 11.",
      explanation:
        "Neil Armstrong fut le premier homme à marcher sur la Lune le 20 juillet 1969, suivi par Buzz Aldrin.",
    },
    open_question: {
      question:
        "Le système de permis de conduire devrait-il être réévalué plus fréquemment pour les personnes âgées pour garantir la sécurité routière ?",
      notes:
        "Débat sur l'autonomie, la capacité physique et les discriminations liées à l'âge.",
    },
    did_you_know: {
      text: "La Lune est le seul corps céleste (hors la Terre) sur lequel des humains ont marché.",
    },
  },
  {
    date: "2026-10-30",
    general_question: {
      question:
        "Qui est le mathématicien connu pour avoir défini le concept de 'nombre imaginaire' (la racine carrée de -1) ?",
      answer:
        "René Descartes (bien que popularisé par d'autres, il a introduit le terme 'imaginaire').",
      explanation:
        "Le concept fut exploré par Cardano, mais le terme 'nombre imaginaire' fut inventé par Descartes en 1637. L'unité imaginaire est désignée par $i$ ($i^2 = -1$).",
    },
    open_question: {
      question:
        "Le droit des auteurs et artistes doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des créateurs.",
    },
    did_you_know: {
      text: "Descartes est également célèbre pour sa formule philosophique 'Cogito ergo sum' ('Je pense, donc je suis').",
    },
  },
  {
    date: "2026-10-31",
    general_question: {
      question:
        "Quelle fête est célébrée dans de nombreux pays occidentaux le 31 octobre, principalement associée aux costumes et aux citrouilles sculptées ?",
      answer: "Halloween.",
      explanation:
        "Elle trouve ses origines dans la fête celtique de Samain, marquant la fin de l'été et le début de l'année celtique.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "Le mot 'Halloween' est une contraction de l'anglais *All Hallows' Eve*, signifiant la veille de la Toussaint.",
    },
  },

  // --- Novembre 2026 (30 jours) ---
  {
    date: "2026-11-01",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée (notre galaxie) ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Elle est située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée dans environ 4,5 milliards d'années.",
    },
    open_question: {
      question:
        "La peine de prison est-elle avant tout punitive ou doit-elle être réhabilitatrice pour permettre la réinsertion sociale ?",
      notes:
        "Débat sur la surpopulation carcérale, les taux de récidive et les alternatives à l'incarcération.",
    },
    did_you_know: {
      text: "Le 1er novembre est la Toussaint, une fête chrétienne dédiée à tous les saints.",
    },
  },
  {
    date: "2026-11-02",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Na', essentiel pour l'équilibre hydrique et la fonction nerveuse ?",
      answer: "Le Sodium (Natrium).",
      explanation:
        "Le sodium est un métal alcalin. Son nom latin, *Natrium*, lui a donné son symbole chimique 'Na'.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "Le sel de table commun est composé de chlorure de sodium (NaCl).",
    },
  },
  {
    date: "2026-11-03",
    general_question: {
      question:
        "Quel est le nom de la ville italienne où se trouve le célèbre Colisée ?",
      answer: "Rome.",
      explanation:
        "Le Colisée, ou Amphithéâtre Flavien, est le plus grand amphithéâtre jamais construit et est devenu un symbole de la Rome impériale.",
    },
    open_question: {
      question:
        "Les entreprises technologiques (GAFA) sont-elles devenues trop puissantes et doivent-elles être démantelées (lois antitrust) ?",
      notes:
        "Discussion sur le monopole, la concurrence, la protection des données et le lobbying politique.",
    },
    did_you_know: {
      text: "Le Colisée pouvait être rempli d'eau pour des simulations de batailles navales (Naumachies), bien que ce point soit toujours débattu par les historiens.",
    },
  },
  {
    date: "2026-11-04",
    general_question: {
      question:
        "Quel est le nom de la force qui attire les objets dotés de masse les uns vers les autres ?",
      answer: "La Gravité (ou gravitation).",
      explanation:
        "La gravité est l'une des quatre forces fondamentales de la nature et est responsable du mouvement des planètes et des étoiles.",
    },
    open_question: {
      question:
        "Le droit des auteurs et artistes doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des créateurs.",
    },
    did_you_know: {
      text: "La Terre n'est pas parfaitement ronde. Elle est légèrement renflée à l'équateur à cause de la force centrifuge créée par sa rotation.",
    },
  },
  {
    date: "2026-11-05",
    general_question: {
      question:
        "Quel est le nom du célèbre document adopté le 4 juillet 1776, proclamant l'indépendance des États-Unis ?",
      answer: "La Déclaration d'Indépendance.",
      explanation:
        "Elle a été principalement rédigée par Thomas Jefferson et déclare que les 13 colonies sont des États libres et indépendants de la Grande-Bretagne.",
    },
    open_question: {
      question:
        "Le boycott des entreprises qui ne respectent pas certaines normes éthiques (environnement, travail) est-il un outil efficace de changement social ?",
      notes:
        "Discussion sur l'impact économique réel, le 'greenwashing' et le pouvoir du consommateur.",
    },
    did_you_know: {
      text: "Au Royaume-Uni, le 5 novembre est la 'Guy Fawkes Night' (Nuit des Feux de Joie), commémorant l'échec de la Conspiration des Poudres en 1605.",
    },
  },
  {
    date: "2026-11-06",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure les tremblements de terre ?",
      answer: "Le sismographe (ou sismomètre).",
      explanation:
        "Il enregistre l'amplitude et la durée des ondes sismiques et permet de localiser l'épicentre d'un séisme.",
    },
    open_question: {
      question:
        "Faut-il interdire la publicité pour les produits considérés comme mauvais pour la santé (sucre, alcool, malbouffe) ?",
      notes:
        "Débat sur la liberté de commerce versus la responsabilité de l'État dans la santé publique.",
    },
    did_you_know: {
      text: "L'échelle de Richter est une échelle logarithmique, ce qui signifie qu'un séisme de magnitude 6 est 10 fois plus puissant qu'un séisme de magnitude 5.",
    },
  },
  {
    date: "2026-11-07",
    general_question: {
      question:
        "Quel est le nom de l'événement volcanique survenu en 79 après J.-C. qui a détruit les villes de Pompéi et Herculanum ?",
      answer: "L'éruption du Vésuve.",
      explanation:
        "Cette éruption a enseveli les deux cités sous une épaisse couche de cendres et de roches, les préservant dans leur état d'origine.",
    },
    open_question: {
      question:
        "Le télétravail généralisé est-il bénéfique ou néfaste pour la cohésion d'équipe et l'innovation en entreprise ?",
      notes:
        "Débat sur l'équilibre entre flexibilité individuelle et dynamique collective au travail.",
    },
    did_you_know: {
      text: "Le Vésuve est le seul volcan actif sur le continent européen depuis plus de cent ans.",
    },
  },
  {
    date: "2026-11-08",
    general_question: {
      question:
        "Quel est le seul continent qui n'est traversé par aucun fleuve ?",
      answer: "L'Antarctique.",
      explanation:
        "L'eau y est presque entièrement sous forme de glace. Les rares flux d'eau sont saisonniers ou sous-glaciaires.",
    },
    open_question: {
      question:
        "Le droit à l'avortement est-il un droit fondamental absolu ou doit-il être soumis à certaines restrictions ?",
      notes:
        "Débat éthique et légal sur la temporalité, la conscience médicale et les motifs d'interruption de grossesse.",
    },
    did_you_know: {
      text: "L'Antarctique a des 'rivières de sang' : de l'eau riche en fer qui s'écoule du glacier Taylor, colorant la glace en rouge.",
    },
  },
  {
    date: "2026-11-09",
    general_question: {
      question:
        "Quel pays a été divisé par un mur célèbre (le Mur de Berlin) de 1961 à 1989 ?",
      answer: "L'Allemagne (entre la RFA et la RDA).",
      explanation:
        "Le Mur de Berlin séparait Berlin-Ouest (contrôlé par l'Ouest) de Berlin-Est (capitale de la RDA et contrôlé par l'Est).",
    },
    open_question: {
      question:
        "La démocratie est-elle le seul modèle politique légitime ou les régimes autoritaires peuvent-ils être plus efficaces pour la stabilité et le développement économique ?",
      notes:
        "Discussion sur les droits de l'homme, la corruption et la performance économique.",
    },
    did_you_know: {
      text: "La chute du Mur de Berlin a eu lieu le 9 novembre 1989, principalement due à une erreur de communication d'un porte-parole est-allemand, qui a annoncé l'ouverture immédiate des frontières.",
    },
  },
  {
    date: "2026-11-10",
    general_question: {
      question:
        "Quel est le nom du célèbre musée qui abrite la 'Nuit étoilée' de Vincent van Gogh ?",
      answer: "Le Museum of Modern Art (MoMA) à New York.",
      explanation:
        "Ce tableau iconique, peint en 1889 pendant le séjour de Van Gogh à l'asile de Saint-Rémy-de-Provence, est l'une des œuvres les plus reconnaissables de l'histoire de l'art.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "Van Gogh a été interné volontairement à l'asile de Saint-Paul-de-Mausole lorsqu'il a peint *La Nuit étoilée*.",
    },
  },
  {
    date: "2026-11-11",
    general_question: {
      question:
        "Quel événement majeur s'est produit le 11 novembre 1918, mettant fin à la Première Guerre mondiale ?",
      answer: "L'Armistice de Rethondes.",
      explanation:
        "Signé dans un wagon à Rethondes, il marque la cessation des combats entre les Alliés et l'Allemagne, menant au Traité de Versailles l'année suivante.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "Le 11 novembre est célébré dans de nombreux pays comme le Jour du Souvenir (ou *Veterans Day* aux États-Unis), en hommage aux soldats morts au combat.",
    },
  },
  {
    date: "2026-11-12",
    general_question: {
      question:
        "Quel est l'élément chimique qui a le numéro atomique 1 et le poids atomique le plus faible ?",
      answer: "L'Hydrogène (H).",
      explanation:
        "L'hydrogène est le constituant le plus abondant de l'univers et le gaz le plus léger.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "L'hydrogène est un élément clé dans la recherche sur l'énergie propre, notamment pour les piles à combustible.",
    },
  },
  {
    date: "2026-11-13",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure l'humidité de l'air ?",
      answer: "L'hygromètre.",
      explanation:
        "L'humidité de l'air est un facteur clé des prévisions météorologiques, jouant un rôle important dans la formation des nuages et des précipitations.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites à la quantité d'eau douce qu'une entreprise ou une personne peut utiliser dans les zones de stress hydrique ?",
      notes:
        "Discussion sur la gestion des ressources, l'agriculture intensive et la priorité de l'eau potable.",
    },
    did_you_know: {
      text: "Le mot 'novembre' vient du latin *novem*, signifiant 'neuf', car il était le neuvième mois du calendrier romain.",
    },
  },
  {
    date: "2026-11-14",
    general_question: {
      question: "Quel est le nom du plus haut sommet des Alpes ?",
      answer: "Le Mont Blanc.",
      explanation:
        "Situé entre la France et l'Italie, il culmine à environ 4 809 mètres d'altitude. Sa hauteur varie selon les dépôts de glace au sommet.",
    },
    open_question: {
      question:
        "L'IA générative doit-elle être soumise à des lois éthiques plus strictes que les entreprises classiques ?",
      notes:
        "Débat sur la régulation de l'IA (transparence, biais, impact sociétal) vs. la liberté d'innovation.",
    },
    did_you_know: {
      text: "La première ascension du Mont Blanc a eu lieu en 1786 par Jacques Balmat et Michel Paccard, marquant la naissance de l'alpinisme moderne.",
    },
  },
  {
    date: "2026-11-15",
    general_question: {
      question:
        "Quel est le nom du célèbre volcan japonais considéré comme sacré et souvent enneigé ?",
      answer: "Le Mont Fuji.",
      explanation:
        "Culminant à 3 776 mètres, c'est le plus haut sommet du Japon. C'est un volcan toujours actif, bien que sa dernière éruption remonte à 1707.",
    },
    open_question: {
      question:
        "Le salaire minimum est-il un outil efficace pour lutter contre la pauvreté ou un frein à l'emploi et à la compétitivité des entreprises ?",
      notes:
        "Débat sur l'inflation, le pouvoir d'achat et le marché du travail.",
    },
    did_you_know: {
      text: "Le Mont Fuji est un lieu de pèlerinage pour les bouddhistes et les shintoïstes depuis des siècles.",
    },
  },
  {
    date: "2026-11-16",
    general_question: {
      question:
        "Quel est le nom du processus par lequel les plantes transforment la lumière en énergie ?",
      answer: "La Photosynthèse.",
      explanation:
        "Elle utilise l'énergie lumineuse pour convertir le dioxyde de carbone et l'eau en glucose (sucre) et en oxygène.",
    },
    open_question: {
      question:
        "Le secret bancaire est-il nécessaire pour la liberté économique ou favorise-t-il la criminalité financière et la fraude fiscale ?",
      notes:
        "Discussion sur la transparence fiscale internationale, les paradis fiscaux et le droit à l'intimité financière.",
    },
    did_you_know: {
      text: "Les plantes absorbent plus de 100 milliards de tonnes de carbone par an grâce à la photosynthèse.",
    },
  },
  {
    date: "2026-11-17",
    general_question: {
      question:
        "Qui est le peintre espagnol célèbre pour ses 'montres molles' dans le tableau 'La Persistance de la mémoire' ?",
      answer: "Salvador Dalí.",
      explanation:
        "Figure majeure du Surréalisme, Dalí est connu pour ses images frappantes et bizarres inspirées des rêves et de l'inconscient.",
    },
    open_question: {
      question:
        "Comment l'urbanisme peut-il être repensé pour améliorer la qualité de vie et réduire l'empreinte carbone des grandes métropoles ?",
      notes:
        "Débat sur la 'ville du quart d'heure', les transports doux et la végétalisation urbaine.",
    },
    did_you_know: {
      text: "Dalí se faisait souvent appeler 'l'Enfant Terrible' du Surréalisme en raison de son comportement excentrique et de son autoportrait permanent.",
    },
  },
  {
    date: "2026-11-18",
    general_question: {
      question:
        "Quel est le nom du plus grand désert de sable au monde (hors déserts de glace) ?",
      answer: "Le Sahara.",
      explanation:
        "Il couvre une grande partie de l'Afrique du Nord et est le plus grand désert chaud. Le désert de l'Antarctique est le plus grand désert au monde en général.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "Le Sahara n'a pas toujours été un désert. Il y a environ 10 000 ans, il était une savane fertile avec de nombreux lacs et rivières.",
    },
  },
  {
    date: "2026-11-19",
    general_question: {
      question:
        "Quel est le nom du traité de 1919 qui a officiellement mis fin à la Première Guerre mondiale ?",
      answer: "Le Traité de Versailles.",
      explanation:
        "Signé entre les puissances alliées et l'Allemagne, il est souvent critiqué pour avoir imposé des conditions très dures à l'Allemagne, contribuant aux tensions futures.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de manifester pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "Le Traité de Versailles a été signé dans la Galerie des Glaces du Château de Versailles, le même lieu où l'Empire allemand avait été proclamé en 1871.",
    },
  },
  {
    date: "2026-11-20",
    general_question: {
      question:
        "Quel est le nom de la péninsule asiatique qui comprend les pays de l'Inde, du Pakistan et du Bangladesh ?",
      answer: "Le sous-continent indien.",
      explanation:
        "Il est bordé au nord par l'Himalaya et est géographiquement distinct du reste de l'Asie.",
    },
    open_question: {
      question:
        "Les pays développés devraient-ils annuler la dette des pays en développement en échange d'engagements environnementaux ?",
      notes:
        "Discussion sur le 'swap' dette-nature, la souveraineté économique et l'équité Nord-Sud.",
    },
    did_you_know: {
      text: "La collision des plaques tectoniques indienne et eurasienne a créé l'Himalaya, qui continue de croître d'environ 1 cm par an.",
    },
  },
  {
    date: "2026-11-21",
    general_question: {
      question:
        "Quel est le nom du plus grand lac d'eau douce d'Amérique du Nord, partagé par les États-Unis et le Canada ?",
      answer: "Le lac Supérieur.",
      explanation:
        "Il est le plus grand en superficie et le troisième plus grand en volume au monde. Son nom vient de sa position supérieure par rapport aux autres Grands Lacs.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "Le lac Supérieur contient suffisamment d'eau pour recouvrir toutes les Amériques sous une couche de 30 cm d'eau.",
    },
  },
  {
    date: "2026-11-22",
    general_question: {
      question: "Quel est le seul métal liquide à température ambiante ?",
      answer: "Le Mercure (Hg).",
      explanation:
        "Le mercure a un point de fusion de $-38,83^circ\text{C}$ et a été utilisé dans les thermomètres et les baromètres (aujourd'hui souvent remplacé par des alternatives moins toxiques).",
    },
    open_question: {
      question:
        "Le système de retraite par répartition est-il durable face au vieillissement démographique et à l'allongement de l'espérance de vie ?",
      notes:
        "Discussion sur l'âge de départ, les cotisations et la nécessité de réformes structurelles.",
    },
    did_you_know: {
      text: "Le mot 'novembre' vient du latin *novem*, signifiant 'neuf'.",
    },
  },
  {
    date: "2026-11-23",
    general_question: {
      question:
        "Quel est le nom de la doctrine selon laquelle la colonisation européenne était une mission 'civilisatrice' ?",
      answer: "Le Fardeau de l'homme blanc (White Man's Burden).",
      explanation:
        "Ce terme, popularisé par un poème de Rudyard Kipling, est souvent utilisé pour décrire l'idéologie justifiant l'impérialisme occidental.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "L'Inde abrite environ 18 % de la population mondiale, mais seulement 2,4 % de la superficie terrestre du monde.",
    },
  },
  {
    date: "2026-11-24",
    general_question: {
      question:
        "Quel est l'élément chimique qui, combiné à l'hydrogène, forme l'eau ($H_2O$) ?",
      answer: "L'Oxygène (O).",
      explanation:
        "L'oxygène est le troisième élément le plus abondant dans l'univers et est essentiel à la vie sur Terre.",
    },
    open_question: {
      question:
        "Comment l'urbanisme peut-il être repensé pour améliorer la qualité de vie et réduire l'empreinte carbone des grandes métropoles ?",
      notes:
        "Débat sur la 'ville du quart d'heure', les transports doux et la végétalisation urbaine.",
    },
    did_you_know: {
      text: "L'eau bouillante gèle plus rapidement que l'eau froide dans certaines conditions, un phénomène appelé l'effet Mpemba.",
    },
  },
  {
    date: "2026-11-25",
    general_question: {
      question:
        "Qui est le mathématicien connu pour avoir développé le calcul infinitésimal de manière indépendante de Newton ?",
      answer: "Gottfried Wilhelm Leibniz.",
      explanation:
        "Leibniz a également développé la notation encore utilisée aujourd'hui, notamment le symbole de l'intégrale ($int$).",
    },
    open_question: {
      question:
        "Le système de permis de conduire devrait-il être réévalué plus fréquemment pour les personnes âgées pour garantir la sécurité routière ?",
      notes:
        "Débat sur l'autonomie, la capacité physique et les discriminations liées à l'âge.",
    },
    did_you_know: {
      text: "Leibniz a également inventé un type d'ordinateur mécanique capable d'effectuer les quatre opérations arithmétiques de base.",
    },
  },
  {
    date: "2026-11-26",
    general_question: {
      question:
        "Quelle fête américaine est célébrée le quatrième jeudi de novembre, marquée par un repas de dinde ?",
      answer: "Thanksgiving (Action de grâce).",
      explanation:
        "Elle commémore traditionnellement la récolte et le repas partagé entre les pèlerins et les Amérindiens en 1621.",
    },
    open_question: {
      question:
        "Faut-il légaliser l'euthanasie et le suicide assisté pour garantir le droit à une 'bonne mort' ?",
      notes:
        "Débat éthique, médical et légal sur la fin de vie, la souffrance et le rôle des médecins.",
    },
    did_you_know: {
      text: "Le jour après Thanksgiving est connu sous le nom de *Black Friday*, marquant le début officieux de la saison des achats de Noël.",
    },
  },
  {
    date: "2026-11-27",
    general_question: {
      question:
        "Quel pays européen est la patrie des Jeux Olympiques antiques et modernes ?",
      answer: "La Grèce.",
      explanation:
        "Les Jeux antiques se tenaient à Olympie dès 776 av. J.-C. Les premiers Jeux modernes ont eu lieu à Athènes en 1896.",
    },
    open_question: {
      question:
        "Le mécénat privé (fondations d'entreprises) est-il un substitut bienvenu ou une menace à l'art et à la culture financés par l'État ?",
      notes:
        "Discussion sur l'indépendance artistique, les priorités de financement et l'influence privée.",
    },
    did_you_know: {
      text: "La flamme olympique est toujours allumée à Olympie, en Grèce, selon une cérémonie rituelle utilisant le Soleil et un miroir parabolique.",
    },
  },
  {
    date: "2026-11-28",
    general_question: {
      question:
        "Quel est le nom de l'ancienne capitale de l'Empire Inca, située dans les Andes péruviennes ?",
      answer: "Cuzco (ou Cusco).",
      explanation:
        "Cuzco était le centre politique et religieux de l'Empire Inca avant la conquête espagnole. Son nom signifie 'nombril' ou 'centre' en Quechua.",
    },
    open_question: {
      question:
        "Les critères de beauté (mode, chirurgie esthétique) sont-ils une forme de pression sociale genrée ou une libre expression individuelle ?",
      notes:
        "Discussion sur l'impact des médias, le patriarcat et l'autonomie corporelle.",
    },
    did_you_know: {
      text: "La ville de Cuzco était conçue pour avoir la forme d'un puma, un animal sacré dans la culture Inca.",
    },
  },
  {
    date: "2026-11-29",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Fe', essentiel à la production de l'hémoglobine dans le sang ?",
      answer: "Le Fer (Ferrum).",
      explanation:
        "Le fer est crucial pour le transport de l'oxygène des poumons vers le reste du corps.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "L'étoile la plus brillante de la nuit est Sirius, située dans la constellation du Grand Chien.",
    },
  },
  {
    date: "2026-11-30",
    general_question: {
      question:
        "Quel est le nom de l'instrument utilisé pour mesurer la pression atmosphérique ?",
      answer: "Le baromètre.",
      explanation:
        "Inventé par Evangelista Torricelli, il est essentiel pour les prévisions météorologiques, car la pression est un indicateur clé des changements de temps.",
    },
    open_question: {
      question:
        "Les technologies de surveillance de masse (caméras intelligentes, reconnaissance faciale) sont-elles un mal nécessaire pour la sécurité urbaine ?",
      notes:
        "Discussion sur la balance entre la sécurité publique et les libertés individuelles, ainsi que les risques de dérives autoritaires.",
    },
    did_you_know: {
      text: "Torricelli, l'inventeur du baromètre, était un élève de Galilée.",
    },
  },

  // --- Décembre 2026 (31 jours) ---
  {
    date: "2026-12-01",
    general_question: {
      question:
        "Quel est le nom de la ville qui abrite la célèbre statue du 'Christ Rédempteur', au Brésil ?",
      answer: "Rio de Janeiro.",
      explanation:
        "La statue, construite dans les années 1920 et 1930, est située au sommet du mont Corcovado et est un symbole majeur de la ville et du Brésil.",
    },
    open_question: {
      question:
        "Le revenu universel de base est-il une solution viable pour l'automatisation croissante des emplois ?",
      notes:
        "Discussion sur son coût, son impact sur l'incitation au travail et la réduction de la pauvreté.",
    },
    did_you_know: {
      text: "Le 1er décembre est la Journée Mondiale de lutte contre le SIDA.",
    },
  },
  {
    date: "2026-12-02",
    general_question: {
      question:
        "Quel est le nom de la membrane qui recouvre et protège le cerveau et la moelle épinière ?",
      answer: "Les méninges.",
      explanation:
        "Les méninges sont composées de trois couches : la dure-mère, l'arachnoïde et la pie-mère.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "Le mot 'décembre' vient du latin *decem*, signifiant 'dix', car il était le dixième mois du calendrier romain.",
    },
  },
  {
    date: "2026-12-03",
    general_question: {
      question:
        "Quel est le nom du plus grand volcan actif en Europe, situé en Sicile ?",
      answer: "L'Etna.",
      explanation:
        "Il culmine à plus de 3 300 mètres et est l'un des volcans les plus actifs et des plus hauts d'Europe.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "Le volcan Etna est entré en éruption il y a environ 500 000 ans, ce qui en fait l'un des plus anciens volcans actifs du monde.",
    },
  },
  {
    date: "2026-12-04",
    general_question: {
      question:
        "Qui est le sculpteur italien connu pour le 'David' et 'La Pietà' ?",
      answer: "Michel-Ange (Michelangelo Buonarroti).",
      explanation:
        "Le 'David' (sculpté entre 1501 et 1504) est une sculpture de marbre de la Renaissance, considérée comme l'un des chefs-d'œuvre de l'art occidental.",
    },
    open_question: {
      question:
        "Faut-il interdire l'élevage intensif des animaux pour des raisons éthiques, sanitaires et environnementales ?",
      notes:
        "Discussion sur le bien-être animal, les coûts de la viande et la sécurité alimentaire.",
    },
    did_you_know: {
      text: "Michel-Ange n'aimait pas le terme 'sculpteur' et se considérait d'abord comme un peintre.",
    },
  },
  {
    date: "2026-12-05",
    general_question: {
      question:
        "Quel est le nom de l'événement volcanique survenu en 79 après J.-C. qui a détruit les villes de Pompéi et Herculanum ?",
      answer: "L'éruption du Vésuve.",
      explanation:
        "Cette éruption a enseveli les deux cités sous une épaisse couche de cendres et de roches, les préservant dans leur état d'origine.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être obligatoire pour assurer une représentation démocratique maximale ?",
      notes:
        "Discussion sur la légitimité du vote, l'apathie politique et les sanctions en cas d'abstention.",
    },
    did_you_know: {
      text: "Les corps pétrifiés retrouvés à Pompéi et Herculanum sont en fait des moulages des espaces vides laissés par les corps après leur décomposition dans les cendres.",
    },
  },
  {
    date: "2026-12-06",
    general_question: {
      question:
        "Quel est le nom du célèbre volcan japonais considéré comme sacré et souvent enneigé ?",
      answer: "Le Mont Fuji.",
      explanation:
        "Culminant à 3 776 mètres, c'est le plus haut sommet du Japon. C'est un volcan toujours actif, bien que sa dernière éruption remonte à 1707.",
    },
    open_question: {
      question:
        "Le service militaire ou civil obligatoire pour les jeunes est-il un outil efficace d'intégration et de cohésion nationale ?",
      notes:
        "Discussion sur l'utilité, la contrainte individuelle et l'apprentissage de la citoyenneté.",
    },
    did_you_know: {
      text: "Seulement 30% des visiteurs du Mont Fuji montent au sommet ; la majorité se contente des sentiers de basse altitude.",
    },
  },
  {
    date: "2026-12-07",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'K' et essentiel au bon fonctionnement des nerfs et des muscles ?",
      answer: "Le Potassium (Kalium).",
      explanation:
        "Le potassium est un électrolyte vital. Son symbole 'K' vient du latin scientifique *Kalium*.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' d'ici 2050 est-il techniquement et économiquement réaliste à l'échelle mondiale ?",
      notes:
        "Débat sur la faisabilité des technologies de capture de carbone, les changements de mode de vie nécessaires et le coût de la transition énergétique.",
    },
    did_you_know: {
      text: "Le potassium a été isolé pour la première fois en 1807 par le chimiste anglais Humphry Davy.",
    },
  },
  {
    date: "2026-12-08",
    general_question: {
      question:
        "Quel est le nom du plus grand lac salé du monde, souvent qualifié de mer ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Elle est en réalité le plus grand lac endoréique (sans exutoire vers l'océan) au monde, bordée par cinq pays.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles avoir une obligation légale de réparer leurs produits plutôt que d'encourager le renouvellement (obsolescence programmée) ?",
      notes:
        "Discussion sur le 'droit à la réparation', la durabilité des produits et l'économie circulaire.",
    },
    did_you_know: {
      text: "La Mer Caspienne tire son nom des Caspiens, un ancien peuple qui vivait sur ses rives.",
    },
  },
  {
    date: "2026-12-09",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure l'humidité de l'air ?",
      answer: "L'hygromètre.",
      explanation:
        "L'humidité de l'air est un facteur clé des prévisions météorologiques, jouant un rôle important dans la formation des nuages et des précipitations.",
    },
    open_question: {
      question:
        "Les multinationales ont-elles trop de pouvoir sur les gouvernements et les décisions politiques (lobbying, évasion fiscale) ?",
      notes:
        "Débat sur la corruption légale, la souveraineté nationale et la régulation internationale.",
    },
    did_you_know: {
      text: "Le mot 'décembre' vient du latin *decem*, signifiant 'dix'.",
    },
  },
  {
    date: "2026-12-10",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Au' et connu pour sa résistance à la corrosion ?",
      answer: "L'or (Aurum).",
      explanation:
        "L'or est un métal précieux et inaltérable. Son nom latin, *Aurum*, signifie 'brillant' ou 'lueur de l'aube'.",
    },
    open_question: {
      question:
        "Faut-il imposer une taxe carbone aux frontières pour protéger l'industrie nationale et inciter les autres pays à réduire leurs émissions ?",
      notes:
        "Débat sur la protectionnisme, les règles de l'OMC et l'efficacité climatique.",
    },
    did_you_know: {
      text: "Le 10 décembre est la Journée des droits de l'homme, commémorant l'adoption de la Déclaration universelle des droits de l'homme en 1948.",
    },
  },
  {
    date: "2026-12-11",
    general_question: {
      question: "Quelle est la capitale de l'Australie ?",
      answer: "Canberra.",
      explanation:
        "Canberra est la capitale politique, tandis que Sydney est la ville la plus peuplée et la plus connue internationalement.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "La capitale de l'Australie était l'objet d'une compétition acharnée entre Sydney et Melbourne, d'où le choix d'une ville nouvelle et planifiée, Canberra.",
    },
  },
  {
    date: "2026-12-12",
    general_question: {
      question:
        "Quel est le nom de l'ancienne capitale de l'Empire Inca, située dans les Andes péruviennes ?",
      answer: "Cuzco (ou Cusco).",
      explanation:
        "Cuzco était le centre politique et religieux de l'Empire Inca avant la conquête espagnole. Son nom signifie 'nombril' ou 'centre' en Quechua.",
    },
    open_question: {
      question:
        "Faut-il interdire la chasse de loisir pour préserver la biodiversité et l'équilibre des écosystèmes ?",
      notes:
        "Débat sur la régulation des populations animales, les traditions locales et l'éthique animale.",
    },
    did_you_know: {
      text: "Les pierres utilisées dans les constructions incas de Cuzco étaient taillées si précisément qu'aucune maçonnerie n'était nécessaire, rendant les murs résistants aux tremblements de terre.",
    },
  },
  {
    date: "2026-12-13",
    general_question: {
      question:
        "Quel est le plus long fleuve d'Europe, qui se jette dans la mer Caspienne ?",
      answer: "La Volga.",
      explanation:
        "Elle coule entièrement en Russie et est d'une importance cruciale pour l'irrigation, la production hydroélectrique et le transport.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites aux multinationales en matière d'optimisation fiscale (évasion fiscale légale) ?",
      notes:
        "Débat sur les impôts minimums mondiaux, la concurrence fiscale et l'équité des contributions.",
    },
    did_you_know: {
      text: "La Volga est parfois surnommée 'la Mère-Volga' par les Russes en raison de son importance historique et culturelle.",
    },
  },
  {
    date: "2026-12-14",
    general_question: {
      question:
        "Quel est le nom du processus par lequel les rayons lumineux sont déviés lorsqu'ils passent d'un milieu à un autre (air/eau) ?",
      answer: "La réfraction.",
      explanation:
        "C'est ce qui explique pourquoi un bâton plongé dans l'eau semble cassé ou courbé, car la vitesse de la lumière change dans l'eau.",
    },
    open_question: {
      question:
        "Le sport électronique ('esports') est-il un sport légitime nécessitant la même reconnaissance que le sport traditionnel ?",
      notes:
        "Débat sur la reconnaissance athlétique, l'entraînement, la discipline et les compétitions internationales.",
    },
    did_you_know: {
      text: "Le mot 'réfraction' vient du latin *refractio*, signifiant 'action de briser'.",
    },
  },
  {
    date: "2026-12-15",
    general_question: {
      question:
        "Quel est le nom de l'instrument utilisé pour mesurer la pression atmosphérique ?",
      answer: "Le baromètre.",
      explanation:
        "Inventé par Evangelista Torricelli, il est essentiel pour les prévisions météorologiques, car la pression est un indicateur clé des changements de temps.",
    },
    open_question: {
      question:
        "Faut-il interdire la publicité pour les produits considérés comme mauvais pour la santé (sucre, alcool, malbouffe) ?",
      notes:
        "Débat sur la liberté de commerce versus la responsabilité de l'État dans la santé publique.",
    },
    did_you_know: {
      text: "Le premier baromètre à mercure a été créé en 1643 par Evangelista Torricelli.",
    },
  },
  {
    date: "2026-12-16",
    general_question: {
      question:
        "Qui est le peintre espagnol célèbre pour ses 'montres molles' dans le tableau 'La Persistance de la mémoire' ?",
      answer: "Salvador Dalí.",
      explanation:
        "Figure majeure du Surréalisme, Dalí est connu pour ses images frappantes et bizarres inspirées des rêves et de l'inconscient.",
    },
    open_question: {
      question:
        "Le concept de 'travail pour la vie' a-t-il disparu au profit de carrières plus courtes et variées ?",
      notes:
        "Débat sur la précarité, la reconversion professionnelle et la gestion de carrière par l'individu.",
    },
    did_you_know: {
      text: "Dalí est le seul artiste dont les œuvres sont exposées au musée du Prado et au musée Reina Sofia à Madrid.",
    },
  },
  {
    date: "2026-12-17",
    general_question: {
      question: "Quel est le plus grand désert de glace du monde ?",
      answer: "L'Antarctique.",
      explanation:
        "L'Antarctique est considéré comme le plus grand désert au monde (le plus grand désert de sable est le Sahara), car les précipitations y sont extrêmement faibles.",
    },
    open_question: {
      question:
        "Les véhicules autonomes doivent-ils être programmés pour privilégier la vie du passager ou celle du piéton en cas d'accident inévitable ?",
      notes:
        "Problème du dilemme du 'Trolley' appliqué à l'IA et aux véhicules, débat éthique sur la programmation morale.",
    },
    did_you_know: {
      text: "L'Antarctique est le seul continent sans gouvernement permanent, sans population indigène et sans fuseau horaire officiel.",
    },
  },
  {
    date: "2026-12-18",
    general_question: {
      question: "Quel est le nom du plus haut sommet des Alpes ?",
      answer: "Le Mont Blanc.",
      explanation:
        "Situé entre la France et l'Italie, il culmine à environ 4 809 mètres d'altitude. Sa hauteur varie selon les dépôts de glace au sommet.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de manifester pour éviter les débordements (blocages, violences, dégradations) ?",
      notes:
        "Discussion sur la liberté de réunion, l'ordre public et la légitimité de la contestation.",
    },
    did_you_know: {
      text: "Le Mont Blanc a donné son nom à un type de dessert à base de crème de marrons et de crème fouettée.",
    },
  },
  {
    date: "2026-12-19",
    general_question: {
      question:
        "Quel est l'élément chimique symbolisé par 'Fe', essentiel à la production de l'hémoglobine dans le sang ?",
      answer: "Le Fer (Ferrum).",
      explanation:
        "Le fer est crucial pour le transport de l'oxygène des poumons vers le reste du corps.",
    },
    open_question: {
      question:
        "Le droit à la santé est-il une responsabilité individuelle ou une obligation collective prise en charge par l'État ?",
      notes:
        "Débat sur les systèmes de santé universels, les assurances privées et la prévention.",
    },
    did_you_know: {
      text: "Le fer est l'élément le plus lourd produit par fusion dans les étoiles massives ; il est créé juste avant leur explosion en supernova.",
    },
  },
  {
    date: "2026-12-20",
    general_question: {
      question:
        "Dans quel sport est attribué le trophée appelé 'La Coupe Stanley' ?",
      answer: "Le hockey sur glace.",
      explanation:
        "C'est le trophée remis chaque année à l'équipe championne des séries éliminatoires de la Ligue nationale de hockey (NHL).",
    },
    open_question: {
      question:
        "Les classes préparatoires et les grandes écoles sont-elles le meilleur modèle pour former l'élite d'une nation ?",
      notes:
        "Débat sur l'égalité des chances, l'élitisme et la diversité des parcours éducatifs.",
    },
    did_you_know: {
      text: "La Coupe Stanley a été donnée en 1892 par Lord Stanley of Preston, alors gouverneur général du Canada.",
    },
  },
  {
    date: "2026-12-21",
    general_question: {
      question:
        "Quel est le nom de la galaxie où se situe notre Système Solaire ?",
      answer: "La Voie Lactée.",
      explanation:
        "C'est une galaxie spirale barrée, contenant entre 100 et 400 milliards d'étoiles. Notre Soleil se trouve dans l'un de ses bras spiraux, le bras d'Orion.",
    },
    open_question: {
      question:
        "Le concept de 'nation' et d'identité nationale est-il obsolète à l'ère de la mondialisation et des identités multiples ?",
      notes:
        "Discussion sur le nationalisme, le cosmopolitisme et le multiculturalisme.",
    },
    did_you_know: {
      text: "Le 21 décembre est généralement la date du solstice d'hiver, le jour le plus court de l'année dans l'hémisphère nord.",
    },
  },
  {
    date: "2026-12-22",
    general_question: {
      question:
        "Quel est le nom du plus grand désert de sable au monde (hors déserts de glace) ?",
      answer: "Le Sahara.",
      explanation:
        "Il couvre une grande partie de l'Afrique du Nord et est le plus grand désert chaud. Le désert de l'Antarctique est le plus grand désert au monde en général.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "La température moyenne estivale dans certaines parties du Sahara peut atteindre $50^circ\text{C}$.",
    },
  },
  {
    date: "2026-12-23",
    general_question: {
      question:
        "Quel est l'élément chimique qui, combiné à l'hydrogène, forme l'eau ($H_2O$) ?",
      answer: "L'Oxygène (O).",
      explanation:
        "L'oxygène est le troisième élément le plus abondant dans l'univers et est essentiel à la vie sur Terre.",
    },
    open_question: {
      question:
        "Les entreprises technologiques (GAFA) sont-elles devenues trop puissantes et doivent-elles être démantelées (lois antitrust) ?",
      notes:
        "Discussion sur le monopole, la concurrence, la protection des données et le lobbying politique.",
    },
    did_you_know: {
      text: "L'eau pure, sans impuretés, gèle exactement à $0^circ\text{C}$ à pression atmosphérique standard.",
    },
  },
  {
    date: "2026-12-24",
    general_question: {
      question:
        "Quel est le nom de l'événement volcanique survenu en 79 après J.-C. qui a détruit les villes de Pompéi et Herculanum ?",
      answer: "L'éruption du Vésuve.",
      explanation:
        "Cette éruption a enseveli les deux cités sous une épaisse couche de cendres et de roches, les préservant dans leur état d'origine.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une source d'évasion enrichissante ou une menace pour l'interaction sociale réelle ?",
      notes:
        "Discussion sur l'éducation, la formation professionnelle et l'isolement social.",
    },
    did_you_know: {
      text: "La veille de Noël est appelée *Christmas Eve* en anglais.",
    },
  },
  {
    date: "2026-12-25",
    general_question: {
      question:
        "Quel est le nom du plus grand désert de sable au monde (hors déserts de glace) ?",
      answer: "Le Sahara.",
      explanation:
        "Il couvre une grande partie de l'Afrique du Nord et est le plus grand désert chaud. Le désert de l'Antarctique est le plus grand désert au monde en général.",
    },
    open_question: {
      question:
        "Faut-il légaliser l'euthanasie et le suicide assisté pour garantir le droit à une 'bonne mort' ?",
      notes:
        "Débat éthique, médical et légal sur la fin de vie, la souffrance et le rôle des médecins.",
    },
    did_you_know: {
      text: "Le 25 décembre est Noël, la fête chrétienne célébrant la naissance de Jésus-Christ.",
    },
  },
  {
    date: "2026-12-26",
    general_question: {
      question:
        "Quel est le nom de la ville italienne où se trouve le célèbre Colisée ?",
      answer: "Rome.",
      explanation:
        "Le Colisée, ou Amphithéâtre Flavien, est le plus grand amphithéâtre jamais construit et est devenu un symbole de la Rome impériale.",
    },
    open_question: {
      question:
        "Le droit des auteurs et artistes doit-il être révisé à l'ère des contenus générés par l'IA (texte, art, musique) ?",
      notes:
        "Discussion sur la paternité des œuvres, l'entraînement des modèles d'IA sur des données protégées et la rémunération des créateurs.",
    },
    did_you_know: {
      text: "En Angleterre, le 26 décembre est le *Boxing Day*, traditionnellement un jour où l'on offrait des cadeaux aux domestiques et aux personnes démunies.",
    },
  },
  {
    date: "2026-12-27",
    general_question: {
      question:
        "Quel est l'élément chimique qui possède six protons et est essentiel à toute vie organique sur Terre ?",
      answer: "Le Carbone (C).",
      explanation:
        "Le carbone forme la base des molécules organiques (protéines, ADN, lipides) grâce à sa capacité à former quatre liaisons chimiques stables.",
    },
    open_question: {
      question:
        "Le droit des animaux devrait-il être réformé pour accorder une 'personnalité morale' aux animaux les plus évolués (grands singes, cétacés) ?",
      notes:
        "Débat sur le statut légal des animaux, l'éthique et les conséquences sur l'expérimentation et l'élevage.",
    },
    did_you_know: {
      text: "Chaque être vivant sur Terre est basé sur le carbone. On appelle cela la 'vie à base de carbone'.",
    },
  },
  {
    date: "2026-12-28",
    general_question: {
      question:
        "Quel pays européen est la patrie des Jeux Olympiques antiques et modernes ?",
      answer: "La Grèce.",
      explanation:
        "Les Jeux antiques se tenaient à Olympie dès 776 av. J.-C. Les premiers Jeux modernes ont eu lieu à Athènes en 1896.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être absolu ou limité par l'intérêt historique et la liberté d'expression ?",
      notes:
        "Débat sur l'effacement des données personnelles, l'archivage et l'accès à l'information publique.",
    },
    did_you_know: {
      text: "Les vainqueurs des Jeux Olympiques antiques ne recevaient pas de médailles, mais une couronne d'olivier sauvage.",
    },
  },
  {
    date: "2026-12-29",
    general_question: {
      question:
        "Quel est le nom de l'instrument qui mesure les tremblements de terre ?",
      answer: "Le sismographe (ou sismomètre).",
      explanation:
        "Il enregistre l'amplitude et la durée des ondes sismiques et permet de localiser l'épicentre d'un séisme.",
    },
    open_question: {
      question:
        "Le concept de 'croissance infinie' dans une planète aux ressources finies est-il une contradiction fondamentale ?",
      notes:
        "Discussion sur la croissance verte, la décroissance et l'économie circulaire.",
    },
    did_you_know: {
      text: "Le séisme le plus puissant jamais enregistré a eu lieu au Chili en 1960, atteignant une magnitude de 9,5.",
    },
  },
  {
    date: "2026-12-30",
    general_question: {
      question:
        "Qui est le mathématicien connu pour avoir défini le concept de 'nombre imaginaire' (la racine carrée de -1) ?",
      answer:
        "René Descartes (bien que popularisé par d'autres, il a introduit le terme 'imaginaire').",
      explanation:
        "Le concept fut exploré par Cardano, mais le terme 'nombre imaginaire' fut inventé par Descartes en 1637. L'unité imaginaire est désignée par $i$ ($i^2 = -1$).",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il un modèle d'excellence athlétique ou une machine de divertissement hyper-commercialisée ?",
      notes:
        "Discussion sur les salaires, les droits de diffusion, le dopage et l'esprit olympique.",
    },
    did_you_know: {
      text: "Descartes est également le père de la géométrie analytique, qui relie l'algèbre à la géométrie.",
    },
  },
  {
    date: "2026-12-31",
    general_question: {
      question:
        "Quel est le seul continent qui n'est traversé par aucun fleuve ?",
      answer: "L'Antarctique.",
      explanation:
        "L'eau y est presque entièrement sous forme de glace. Les rares flux d'eau sont saisonniers ou sous-glaciaires.",
    },
    open_question: {
      question:
        "Les technologies de surveillance des employés à distance (logiciels de suivi) sont-elles un abus ou une nécessité de gestion ?",
      notes:
        "Débat sur la confiance, le droit à la déconnexion et la mesure de la productivité.",
    },
    did_you_know: {
      text: "Le 31 décembre est connu comme la Saint-Sylvestre, du nom du Pape Sylvestre Ier.",
    },
  },
];


