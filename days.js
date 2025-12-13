// days.js
// Contient les données quotidiennes pour "Le Savoir Épique", de 2025-12-25 à 2026-12-31.
// Les 100 premières entrées sont fournies ci-dessous (jusqu'au 2026-04-03).
// Format des dates : YYYY-MM-DD.

const DAYS_DATA = [
  // Jours 1 à 8 : Décembre 2025
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
      date: "2025-12-30",
      general_question: {
        question:
          "Quel est le nom de la galaxie qui contient notre système solaire ?",
        answer: "La Voie Lactée.",
        explanation:
          "La Voie Lactée est une galaxie spirale barrée, abritant des centaines de milliards d'étoiles, dont notre Soleil.",
      },
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
        "Quelles sont les résolutions de Nouvel An les plus importantes pour une société durable en 2026 ?",
      notes:
        "Réflexion sur les changements sociaux, environnementaux et politiques nécessaires pour l'année à venir.",
    },
    did_you_know: {
      text: "Le temps de latence avant de s'endormir est appelé 'latence d'endormissement'. S'il est inférieur à cinq minutes, cela indique souvent un déficit de sommeil.",
    },
  },
  {
    date: "2026-01-01",
    general_question: {
      question: "Quel est le nom du plus grand océan sur Terre ?",
      answer: "L'océan Pacifique.",
      explanation:
        "L'océan Pacifique est le plus vaste et le plus profond des cinq océans. Il couvre environ un tiers de la surface terrestre.",
    },
    open_question: {
      question:
        "Est-il préférable de se fixer des objectifs à long terme ambitieux ou de petits objectifs quotidiens pour la réussite personnelle ?",
      notes:
        "Débat sur les stratégies de développement personnel (vision globale vs. micro-progression).",
    },
    did_you_know: {
      text: "Une journée sur Vénus est plus longue qu'une année sur Vénus (rotation sidérale : 243 jours terrestres ; période orbitale : 225 jours terrestres).",
    },
  },

  // Jours 9 à 39 : Janvier 2026 (31 jours)
  {
    date: "2026-01-02",
    general_question: {
      question:
        "Qui est l'auteur des romans '1984' et 'La Ferme des animaux' ?",
      answer: "George Orwell.",
      explanation:
        "Ces deux œuvres sont des classiques de la littérature dystopique et satirique, critiquant le totalitarisme et la manipulation politique.",
    },
    open_question: {
      question:
        "La censure de contenu sur Internet par les plateformes privées est-elle une protection nécessaire ou une atteinte à la liberté d'expression ?",
      notes:
        "Débat sur la modération du contenu et la responsabilité des grandes entreprises technologiques.",
    },
    did_you_know: {
      text: "Le bambou est la plante qui pousse le plus rapidement sur Terre, certaines espèces pouvant grandir de près d'un mètre par jour.",
    },
  },
  {
    date: "2026-01-03",
    general_question: {
      question: "Quelle est la capitale de l'Australie ?",
      answer: "Canberra.",
      explanation:
        "Contrairement à la croyance populaire, Sydney et Melbourne ne sont pas la capitale. Canberra a été choisie comme compromis entre les deux villes rivales en 1908.",
    },
    open_question: {
      question:
        "L'éducation à domicile (homeschooling) offre-t-elle de meilleurs résultats que l'école publique traditionnelle ?",
      notes:
        "Débat sur les méthodes pédagogiques, la socialisation et la personnalisation de l'apprentissage.",
    },
    did_you_know: {
      text: "Les fourmis sont incroyablement fortes et peuvent soulever entre 50 et 100 fois leur propre poids corporel.",
    },
  },
  {
    date: "2026-01-04",
    general_question: {
      question: "Quel est l'élément chimique avec le symbole 'Fe' ?",
      answer: "Le Fer.",
      explanation:
        "Le symbole Fe vient du mot latin 'ferrum'. Le fer est un métal essentiel à la vie, notamment dans l'hémoglobine du sang.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être étendu à toutes les informations personnelles en ligne ?",
      notes:
        "Débat sur l'effacement des données, la mémoire d'Internet et la liberté d'information.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est d'environ 356 400 kilomètres, tandis que la plus grande est d'environ 406 700 kilomètres (apogée et périgée).",
    },
  },
  {
    date: "2026-01-05",
    general_question: {
      question:
        "Quel peintre espagnol est associé au mouvement du Surréalisme et à l'œuvre 'La Persistance de la mémoire' ?",
      answer: "Salvador Dalí.",
      explanation:
        "Ce tableau, souvent appelé 'Les montres molles', est l'une des images les plus célèbres du Surréalisme. ",
    },
    open_question: {
      question:
        "Le salaire universel de base (revenu de base) est-il une solution économique viable pour l'avenir ?",
      notes:
        "Débat sur l'impact sur le travail, l'égalité sociale et le financement d'un revenu inconditionnel.",
    },
    did_you_know: {
      text: "Il y a plus d'arbres sur Terre qu'il n'y a d'étoiles dans la Voie Lactée (environ 3 000 milliards d'arbres contre 100 à 400 milliards d'étoiles).",
    },
  },
  {
    date: "2026-01-06",
    general_question: {
      question:
        "Quel est le rôle principal des mitochondries dans la cellule ?",
      answer: "La production d'énergie (ATP).",
      explanation:
        "Les mitochondries sont souvent appelées les 'centrales électriques' de la cellule, car elles effectuent la respiration cellulaire pour générer de l'Adénosine triphosphate (ATP).",
    },
    open_question: {
      question:
        "Faut-il réglementer la durée maximale de travail par semaine (32 heures, 4 jours) pour améliorer le bien-être général ?",
      notes:
        "Débat sur la productivité, le stress professionnel et l'équilibre vie privée/vie professionnelle.",
    },
    did_you_know: {
      text: "Le cri d'un canard n'aurait pas d'écho. Des études ont prouvé que c'est faux : le cri d'un canard émet bien un écho.",
    },
  },
  {
    date: "2026-01-07",
    general_question: {
      question:
        "Quel pays a remporté la première Coupe du Monde de football en 1930 ?",
      answer: "L'Uruguay.",
      explanation:
        "Le tournoi a eu lieu en Uruguay, et l'équipe nationale uruguayenne a battu l'Argentine en finale (4-2).",
    },
    open_question: {
      question:
        "L'exploration des fonds marins est-elle plus importante pour l'humanité que l'exploration spatiale ?",
      notes:
        "Débat sur l'allocation des ressources entre la connaissance de la Terre (océans) et la quête de l'extérieur (espace).",
    },
    did_you_know: {
      text: "L'odeur de la pluie est appelée 'pétrichor'. Elle est due à un mélange d'huiles végétales et d'une substance chimique produite par des bactéries, la géosmine.",
    },
  },
  {
    date: "2026-01-08",
    general_question: {
      question:
        "Quelle loi de la physique stipule que 'l'énergie ne peut être ni créée ni détruite, seulement transformée' ?",
      answer: "Le premier principe de la thermodynamique.",
      explanation:
        "Ce principe est également connu sous le nom de loi de la conservation de l'énergie.",
    },
    open_question: {
      question:
        "L'accès gratuit et illimité à l'information en ligne est-il un droit fondamental dans la société moderne ?",
      notes:
        "Débat sur la neutralité du net, le financement de l'information et les barrières économiques ou géographiques.",
    },
    did_you_know: {
      text: "Le Mont Everest, mesuré à 8 848,86 mètres, continue de grandir d'environ 4 millimètres par an en raison du mouvement des plaques tectoniques.",
    },
  },
  {
    date: "2026-01-09",
    general_question: {
      question: "Qui était le premier empereur romain ?",
      answer: "Auguste (Octave).",
      explanation:
        "Auguste est le fondateur du Principat, la première phase de l'Empire romain, qu'il a dirigé de 27 av. J.-C. jusqu'à sa mort en 14 apr. J.-C.",
    },
    open_question: {
      question:
        "Faut-il mettre en place un système de vote obligatoire dans les démocraties pour garantir une participation maximale ?",
      notes:
        "Débat sur la citoyenneté, la légitimité des élus et la liberté individuelle.",
    },
    did_you_know: {
      text: "Les humains et les bananes partagent environ 50% de leur ADN.",
    },
  },
  {
    date: "2026-01-10",
    general_question: {
      question: "Quelle est l'unité de mesure de la résistance électrique ?",
      answer: "L'Ohm (Ω).",
      explanation:
        "L'ohm est l'unité de résistance électrique du Système international (SI), nommée d'après le physicien allemand Georg Simon Ohm.",
    },
    open_question: {
      question:
        "Le sport professionnel moderne est-il trop axé sur le profit, au détriment de l'esprit sportif et de l'accessibilité ?",
      notes:
        "Débat sur les salaires des athlètes, les contrats publicitaires et l'impact de l'argent sur la compétition.",
    },
    did_you_know: {
      text: "Le savais-tu ? La NASA utilise des brosses à dents pour nettoyer en douceur les roches fossilisées sur les sites d'exploration.",
    },
  },
  {
    date: "2026-01-11",
    general_question: {
      question: "Dans quel roman apparaît le personnage de Jean Valjean ?",
      answer: "Les Misérables.",
      explanation:
        "Écrit par Victor Hugo en 1862, ce roman épique suit la vie de Jean Valjean, un ancien forçat en quête de rédemption.",
    },
    open_question: {
      question:
        "Le 'zéro déchet' est-il un objectif réaliste ou une utopie pour la majorité des foyers ?",
      notes:
        "Débat sur les défis logistiques et économiques du mode de vie 'zéro déchet' face à la société de consommation.",
    },
    did_you_know: {
      text: "Le mot 'pangramme' désigne une phrase qui utilise toutes les lettres de l'alphabet au moins une fois (ex: Portez ce vieux whisky au juge blond qui fume).",
    },
  },
  {
    date: "2026-01-12",
    general_question: {
      question:
        "Quel gaz est responsable de l'odeur caractéristique de l'ail et des oignons ?",
      answer: "Les composés soufrés (ou organo-sulfurés).",
      explanation:
        "Ce sont des molécules organiques contenant du soufre qui sont libérées lorsque les cellules sont écrasées ou coupées, provoquant l'odeur et parfois les larmes.",
    },
    open_question: {
      question:
        "Devrait-on imposer une éducation financière obligatoire dès le lycée ?",
      notes:
        "Débat sur la nécessité d'enseigner la gestion budgétaire, l'épargne et l'investissement aux jeunes.",
    },
    did_you_know: {
      text: "Le ciel est bleu parce que l'atmosphère terrestre diffuse plus efficacement la lumière bleue que les autres couleurs (phénomène de diffusion de Rayleigh).",
    },
  },
  {
    date: "2026-01-13",
    general_question: {
      question: "Quelle est la plus grande île du monde (hors continents) ?",
      answer: "Le Groenland.",
      explanation:
        "Le Groenland, territoire autonome rattaché au Danemark, est la plus grande île non continentale avec une superficie de plus de 2,1 millions de km².",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être légalement obligées de divulguer les algorithmes utilisés pour prendre des décisions importantes (recrutement, prêts) ?",
      notes:
        "Débat sur la transparence des algorithmes et le risque de biais dans les systèmes automatisés.",
    },
    did_you_know: {
      text: "La température la plus basse jamais enregistrée sur Terre est de $-89,2^{circ}\text{C}$ à Vostok, Antarctique, en 1983.",
    },
  },
  {
    date: "2026-01-14",
    general_question: {
      question: "Qui a inventé le téléphone en 1876 ?",
      answer: "Alexander Graham Bell.",
      explanation:
        "Bell a déposé le brevet pour le téléphone en mars 1876. Il y a eu débat avec Elisha Gray, mais Bell est généralement reconnu comme l'inventeur commercial.",
    },
    open_question: {
      question:
        "Le développement de l'énergie nucléaire est-il une nécessité face à l'urgence climatique, malgré ses risques ?",
      notes:
        "Débat sur l'énergie bas carbone, la gestion des déchets radioactifs et la sécurité des installations.",
    },
    did_you_know: {
      text: "Les crocodiles ne peuvent pas tirer leur langue, car celle-ci est fixée au fond de leur gueule.",
    },
  },
  {
    date: "2026-01-15",
    general_question: {
      question: "Quelle est la monnaie officielle du Japon ?",
      answer: "Le Yen (¥).",
      explanation:
        "Le Yen est la troisième devise la plus échangée sur le marché des changes après le dollar américain et l'euro.",
    },
    open_question: {
      question:
        "Dans quelle mesure l'Histoire enseignée dans les écoles doit-elle être révisée pour inclure des perspectives non-occidentales ?",
      notes:
        "Débat sur le programme scolaire, la décolonisation de l'Histoire et la mémoire collective.",
    },
    did_you_know: {
      text: "Le plus grand organisme vivant connu est un champignon, Armillaria ostoyae, qui s'étend sur plus de 9 km² dans l'Oregon, aux États-Unis.",
    },
  },
  {
    date: "2026-01-16",
    general_question: {
      question: "Quel océan borde la côte est des États-Unis ?",
      answer: "L'océan Atlantique.",
      explanation:
        "L'océan Atlantique sépare les Amériques de l'Europe et de l'Afrique.",

      open_question: {
        question:
          "La créativité humaine peut-elle être réellement remplacée par des outils d'Intelligence Artificielle générative ?",
        notes:
          "Débat sur la propriété intellectuelle, l'originalité et le rôle de l'artiste à l'ère du numérique.",
      },
      did_you_know: {
        text: "Les flocons de neige se forment en hexagones (six côtés) car les molécules d'eau se lient de manière à créer des réseaux cristallins à six branches stables.",
      },
    },

    date: "2026-01-17",
    general_question: {
      question:
        "Quel est le nom de l'instrument de musique national de l'Écosse ?",
      answer: "La cornemuse (Great Highland Bagpipe).",
      explanation:
        "Bien que la cornemuse existe dans de nombreuses cultures, l'instrument est fortement associé à la culture écossaise.",
    },
    open_question: {
      question:
        "Le sport électronique (e-sport) mérite-t-il d'être reconnu comme un sport olympique officiel ?",
      notes:
        "Débat sur la définition du sport, l'effort physique et la reconnaissance culturelle du jeu vidéo.",
    },
    did_you_know: {
      text: "Le corps humain contient assez de carbone pour fabriquer 9 000 crayons.",
    },
  },
  {
    date: "2026-01-18",
    general_question: {
      question: "Qui a peint 'La Joconde' (Mona Lisa) ?",
      answer: "Léonard de Vinci.",
      explanation:
        "Ce portrait, achevé vers 1506, est exposé au musée du Louvre à Paris et est considéré comme l'une des œuvres d'art les plus célèbres au monde.",
    },
    open_question: {
      question:
        "Le 'droit à la déconnexion' est-il suffisant pour protéger les employés des exigences du travail constant ?",
      notes:
        "Débat sur les frontières entre vie professionnelle et vie privée à l'ère des smartphones et des mails professionnels tardifs.",
    },
    did_you_know: {
      text: "Le silence complet n'existe pas : si vous vous trouvez dans une chambre anéchoïque (insonorisée), vous entendrez le son de votre propre cœur et de votre sang circulant.",
    },
  },
  {
    date: "2026-01-19",
    general_question: {
      question: "Quelle est la formule chimique du sel de table ?",
      answer: "NaCl (Chlorure de sodium).",
      explanation:
        "Le chlorure de sodium est un composé ionique essentiel à la vie et le principal composant du sel de table.",
    },
    open_question: {
      question:
        "Devrait-on limiter l'utilisation de l'eau pour l'agriculture intensive dans les régions soumises à la sécheresse ?",
      notes:
        "Débat sur la sécurité alimentaire, la gestion des ressources en eau et l'impact du changement climatique.",
    },
    did_you_know: {
      text: "Jupiter est si grand que tous les autres corps du système solaire (planètes, astéroïdes, comètes, etc.) pourraient tenir à l'intérieur.",
    },
  },
  {
    date: "2026-01-20",
    general_question: {
      question:
        "Quel pays est le berceau de la philosophie stoïcienne antique ?",
      answer: "La Grèce (Athènes).",
      explanation:
        "Le Stoïcisme a été fondé à Athènes par Zénon de Citium vers 300 av. J.-C. Il met l'accent sur la vertu, la raison et le contrôle des émotions.",
    },
    open_question: {
      question:
        "Les gouvernements devraient-ils investir massivement dans la géo-ingénierie pour lutter contre le réchauffement climatique ?",
      notes:
        "Débat sur les solutions technologiques radicales, le risque de conséquences imprévues et l'éthique de la manipulation du climat.",
    },
    did_you_know: {
      text: "Un cafard peut vivre plusieurs semaines sans tête ; il meurt finalement de faim, car il ne peut plus boire d'eau.",
    },
  },
  {
    date: "2026-01-21",
    general_question: {
      question: "Quel fleuve traverse Londres ?",
      answer: "La Tamise.",
      explanation:
        "La Tamise (Thames en anglais) est le fleuve le plus long entièrement en Angleterre et a été essentielle au développement historique de Londres.",
    },
    open_question: {
      question:
        "La surveillance numérique de masse (caméras, reconnaissance faciale) est-elle compatible avec une société libre et démocratique ?",
      notes:
        "Débat sur la sécurité publique, le droit à la vie privée et les abus potentiels de la technologie de surveillance.",
    },
    did_you_know: {
      text: "Le miel est le seul aliment qui ne se gâte pas. Des pots de miel vieux de milliers d'années ont été trouvés dans des tombes égyptiennes et étaient encore comestibles.",
    },
  },
  {
    date: "2026-01-22",
    general_question: {
      question: "Qui a découvert la pénicilline en 1928 ?",
      answer: "Alexander Fleming.",
      explanation:
        "Le médecin et bactériologiste écossais a accidentellement découvert les propriétés antibactériennes du champignon Penicillium rubens.",
    },
    open_question: {
      question:
        "Le système de notation scolaire traditionnel (notes, examens) est-il un bon indicateur de la capacité d'apprentissage et de la réussite future ?",
      notes:
        "Débat sur l'évaluation, la mémorisation vs. la pensée critique, et le stress lié aux notes.",
    },
    did_you_know: {
      text: "Le colibri est le seul oiseau capable de voler en arrière.",
    },
  },
  {
    date: "2026-01-23",
    general_question: {
      question: "Quelle est la capitale du Canada ?",
      answer: "Ottawa.",
      explanation:
        "Ottawa, en Ontario, est la capitale fédérale du Canada. Elle a été choisie par la reine Victoria en 1857 pour son emplacement stratégique et neutre.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de propriété pour des raisons écologiques (ex: interdiction de construire sur certaines terres naturelles) ?",
      notes:
        "Débat sur le droit individuel vs. l'intérêt général de la préservation de l'environnement.",
    },
    did_you_know: {
      text: "La Terre est la seule planète de notre système solaire qui ne doit pas son nom à une divinité gréco-romaine.",
    },
  },
  {
    date: "2026-01-24",
    general_question: {
      question: "Dans quel pays se trouve le célèbre Machu Picchu ?",
      answer: "Au Pérou.",
      explanation:
        "Cette citadelle inca du XVe siècle est située dans la cordillère des Andes, au-dessus de la Vallée Sacrée.",
    },
    open_question: {
      question:
        "Le développement de véhicules autonomes est-il un progrès incontournable ou un risque sécuritaire et social trop grand ?",
      notes:
        "Débat sur l'impact sur l'emploi (chauffeurs), la sécurité routière et l'éthique des décisions algorithmiques en cas d'accident.",
    },
    did_you_know: {
      text: "Les vaches ont chacune une meilleure amie et peuvent être stressées lorsqu'elles en sont séparées.",
    },
  },
  {
    date: "2026-01-25",
    general_question: {
      question: "Quel est le plus grand mammifère terrestre ?",
      answer: "L'éléphant d'Afrique.",
      explanation:
        "L'éléphant de savane d'Afrique est le plus grand animal terrestre. Les mâles peuvent peser jusqu'à 6 tonnes.",
    },
    open_question: {
      question:
        "L'anonymat sur Internet devrait-il être strictement réglementé pour prévenir la cyberintimidation et la criminalité ?",
      notes:
        "Débat sur le droit à l'anonymat comme protection des lanceurs d'alerte et la nécessité d'identifier les auteurs d'abus.",
    },
    did_you_know: {
      text: "Le soleil est si puissant qu'il peut éclairer la Terre même à 150 millions de kilomètres de distance.",
    },
  },
  {
    date: "2026-01-26",
    general_question: {
      question:
        "Quel dramaturge anglais a écrit 'Hamlet' et 'Roméo et Juliette' ?",
      answer: "William Shakespeare.",
      explanation:
        "Souvent considéré comme le plus grand écrivain de langue anglaise, il est l'auteur de 39 pièces de théâtre et de 154 sonnets.",
    },
    open_question: {
      question:
        "L'obsolescence programmée devrait-elle être sévèrement punie pour encourager la durabilité des produits ?",
      notes:
        "Débat sur la responsabilité des fabricants et la promotion d'une économie circulaire.",
    },
    did_you_know: {
      text: "Un an (une période orbitale) sur Mercure (88 jours terrestres) est plus court qu'une journée sidérale (la durée d'une rotation : 58 jours terrestres).",
    },
  },
  {
    date: "2026-01-27",
    general_question: {
      question:
        "Quel était le nom du premier satellite artificiel lancé dans l'espace en 1957 ?",
      answer: "Spoutnik 1.",
      explanation:
        "Lancé par l'Union Soviétique, Spoutnik 1 a marqué le début de l'ère spatiale et de la course à l'espace avec les États-Unis.",
    },
    open_question: {
      question:
        "Faut-il instaurer une 'taxe carbone' mondiale uniforme pour financer la transition écologique ?",
      notes:
        "Débat sur l'équité de cette taxe pour les pays en développement et son impact sur le coût de la vie.",
    },
    did_you_know: {
      text: "Les escargots ont environ 14 000 dents, situées sur leur langue appelée radula.",
    },
  },
  {
    date: "2026-01-28",
    general_question: {
      question:
        "Quel célèbre scientifique est connu pour avoir laissé tomber un marteau et une plume en même temps sur la Lune (vidéo) ?",
      answer: "David Scott.",
      explanation:
        "Ceci a été réalisé lors de la mission Apollo 15 en 1971 pour démontrer que, sans résistance de l'air, tous les objets tombent à la même vitesse (principe d'équivalence de Galilée).",
    },
    open_question: {
      question:
        "Le sport de haut niveau nécessite-t-il l'utilisation de méthodes extrêmes (nutrition, entraînement, médicaments) qui dépassent les limites éthiques ?",
      notes:
        "Débat sur le dopage, la pression de la performance et la santé à long terme des athlètes.",
    },
    did_you_know: {
      text: "La lumière met environ 8 minutes et 20 secondes pour voyager du Soleil à la Terre.",
    },
  },
  {
    date: "2026-01-29",
    general_question: {
      question: "Quelle est la plus longue chaîne de montagnes du monde ?",
      answer: "Les Andes.",
      explanation:
        "Situées en Amérique du Sud, les Andes s'étendent sur environ 7 000 km, traversant sept pays.",
    },
    open_question: {
      question:
        "L'art doit-il être financé principalement par des fonds publics ou par des mécènes privés ?",
      notes:
        "Débat sur l'indépendance artistique, l'accès à la culture et la politique budgétaire.",
    },
    did_you_know: {
      text: "Le pingouin Adélie est un oiseau, mais il passe environ 75% de sa vie dans l'eau.",
    },
  },
  {
    date: "2026-01-30",
    general_question: {
      question:
        "Quel est le seul pays d'Amérique du Sud dont le nom vient d'une ligne imaginaire ?",
      answer: "L'Équateur.",
      explanation:
        "Son nom dérive de l'équateur, la ligne de latitude zéro qui traverse le pays.",
    },
    open_question: {
      question:
        "Est-il éthique de créer des 'bébés à la carte' par modification génétique pour éliminer certaines maladies héréditaires ?",
      notes:
        "Débat sur le génie génétique, le risque de dérives eugénistes et l'acceptation du handicap.",
    },
    did_you_know: {
      text: "Le 'test du Marshmallow' est une célèbre expérience psychologique qui mesurait l'autocontrôle chez les enfants.",
    },
  },
  {
    date: "2026-01-31",
    general_question: {
      question:
        "Quel scientifique a découvert le noyau atomique à travers l'expérience de la feuille d'or ?",
      answer: "Ernest Rutherford.",
      explanation:
        "En 1911, Rutherford a démontré que l'atome possède un noyau petit et dense chargé positivement, remettant en cause le modèle de Thomson (plum pudding).",
    },
    open_question: {
      question:
        "Faut-il imposer l'apprentissage du code informatique (programmation) dès l'école primaire ?",
      notes:
        "Débat sur les compétences numériques, la pensée logique et l'adaptation aux métiers du futur.",
    },
    did_you_know: {
      text: "Le bourdonnement que vous entendez dans une coquille de mer n'est pas l'océan, mais le son ambiant de votre environnement amplifié et réverbéré à l'intérieur de la coquille.",
    },
  },

  // Jours 40 à 68 : Février 2026 (28 jours)
  {
    date: "2026-02-01",
    general_question: {
      question:
        "Quel est l'organe qui consomme le plus d'oxygène dans le corps humain ?",
      answer: "Le cerveau.",
      explanation:
        "Bien qu'il ne représente qu'environ 2% du poids corporel, le cerveau consomme près de 20% de l'oxygène total du corps au repos.",
    },
    open_question: {
      question:
        "Les voyages internationaux devraient-ils être limités pour les particuliers, et réservés aux nécessités professionnelles ou humanitaires ?",
      notes:
        "Débat sur la réduction de l'empreinte carbone personnelle et l'impact sur le tourisme et les échanges culturels.",
    },
    did_you_know: {
      text: "L'étoile la plus proche du système solaire est Proxima Centauri, située à environ 4,24 années-lumière de la Terre.",
    },
  },
  {
    date: "2026-02-02",
    general_question: {
      question: "Quel est le nom du plus long fleuve du monde ?",
      answer: "L'Amazone.",
      explanation:
        "Bien que le Nil ait longtemps été considéré comme le plus long, des études récentes (2007) confirment que l'Amazone le dépasse légèrement, atteignant environ 7 062 km.",
    },
    open_question: {
      question:
        "Devrait-on autoriser la création de réserves naturelles entièrement gérées par l'intelligence artificielle pour la protection de la faune ?",
      notes:
        "Débat sur l'efficacité des systèmes automatisés face à l'expertise humaine et l'éthique de la gestion des écosystèmes.",
    },
    did_you_know: {
      text: "Le drapeau de la Californie, 'Bear Flag', porte un ours grizzly, mais aucun ours grizzly sauvage n'a été vu en Californie depuis 1922.",
    },
  },
  {
    date: "2026-02-03",
    general_question: {
      question: "Quel est le seul continent qui est aussi un pays ?",
      answer: "L'Australie.",
      explanation:
        "Le continent de l'Australie est composé du Commonwealth d'Australie, de la Tasmanie, de la Nouvelle-Guinée et d'autres îles environnantes. Souvent, on confond le continent (Australie/Océanie) et le pays (Australie).",
    },
    open_question: {
      question:
        "Le sport pour enfants doit-il se concentrer sur la compétition ou sur le développement des compétences et le plaisir ?",
      notes:
        "Débat sur la pression précoce, les bienfaits du jeu et la spécialisation sportive.",
    },
    did_you_know: {
      text: "Les chevreuils n'ont pas de vésicule biliaire.",
    },
  },
  {
    date: "2026-02-04",
    general_question: {
      question: "Quel compositeur est l'auteur des 'Quatre Saisons' ?",
      answer: "Antonio Vivaldi.",
      explanation:
        "Ce groupe de quatre concertos pour violon est l'une des œuvres les plus célèbres du répertoire de la musique classique baroque. ",
    },
    open_question: {
      question:
        "Faut-il limiter la durée des mandats politiques pour favoriser le renouvellement des idées et prévenir la corruption ?",
      notes:
        "Débat sur l'expérience politique versus la stagnation du pouvoir et le professionnalisme de la classe politique.",
    },
    did_you_know: {
      text: "La plus ancienne loi toujours en vigueur au monde est celle sur les feux de circulation au Royaume-Uni (datant de 1865).",
    },
  },
  {
    date: "2026-02-05",
    general_question: {
      question: "Quel gaz est le plus abondant dans l'atmosphère terrestre ?",
      answer: "L'Azote (N₂).",
      explanation:
        "L'azote représente environ 78% de l'atmosphère, suivi par l'oxygène (environ 21%).",
    },
    open_question: {
      question:
        "Le 'bien-être animal' doit-il être placé au même niveau de priorité que les droits humains dans les lois nationales ?",
      notes:
        "Débat sur l'éthique de l'exploitation animale, la sentience et la hiérarchie des droits.",
    },
    did_you_know: {
      text: "Le seul aliment qui ne se gâte pas et ne pourrit pas est le miel.",
    },
  },
  {
    date: "2026-02-06",
    general_question: {
      question: "Quel est le prénom du fondateur de la marque Ferrari ?",
      answer: "Enzo.",
      explanation:
        "Enzo Ferrari (1898-1988) était un pilote automobile italien et le fondateur de la Scuderia Ferrari, puis de la compagnie automobile Ferrari.",
    },
    open_question: {
      question:
        "Faut-il rendre l'accès à l'université gratuit, indépendamment des revenus des étudiants et de leurs résultats ?",
      notes:
        "Débat sur l'égalité des chances, la qualité de l'enseignement supérieur et le financement public.",
    },
    did_you_know: {
      text: "La température du corps humain augmente légèrement à mesure que le jour avance et diminue au milieu de la nuit.",
    },
  },
  {
    date: "2026-02-07",
    general_question: {
      question:
        "Comment s'appelle l'organe qui régule le taux de sucre dans le sang (glycémie) ?",
      answer: "Le pancréas.",
      explanation:
        "Le pancréas produit l'insuline et le glucagon, deux hormones qui contrôlent les niveaux de glucose dans le sang.",
    },
    open_question: {
      question:
        "Les technologies de réalité virtuelle et augmentée sont-elles une échappatoire bienvenue ou une menace pour la connexion sociale réelle ?",
      notes:
        "Débat sur l'immersion numérique, l'isolement social et l'avenir des interactions humaines.",
    },
    did_you_know: {
      text: "En moyenne, un adulte sourit 15 fois par jour, tandis qu'un enfant sourit environ 400 fois par jour.",
    },
  },
  {
    date: "2026-02-08",
    general_question: {
      question: "Quelle est la plus grande planète du système solaire ?",
      answer: "Jupiter.",
      explanation:
        "Jupiter est plus de deux fois et demie plus massive que toutes les autres planètes combinées.",
    },
    open_question: {
      question:
        "Faut-il développer une législation mondiale unique pour encadrer la protection des données personnelles en ligne ?",
      notes:
        "Débat sur la souveraineté numérique, le RGPD européen et la coopération internationale en matière de vie privée.",
    },
    did_you_know: {
      text: "Les koalas dorment en moyenne 20 heures par jour, en partie à cause de leur régime alimentaire pauvre en calories à base de feuilles d'eucalyptus.",
    },
  },
  {
    date: "2026-02-09",
    general_question: {
      question:
        "Quel pays a pour devise nationale 'Liberté, Égalité, Fraternité' ?",
      answer: "La France.",
      explanation:
        "Cette devise républicaine trouve ses origines dans la Révolution française et est inscrite dans la Constitution française.",
    },
    open_question: {
      question:
        "Le mouvement végane est-il une solution écologique et éthique ou une approche trop radicale de l'alimentation ?",
      notes:
        "Débat sur l'impact environnemental de la viande, le traitement des animaux et les défis nutritionnels du véganisme.",
    },
    did_you_know: {
      text: "Les chauves-souris sont les seuls mammifères capables de voler.",
    },
  },
  {
    date: "2026-02-10",
    general_question: {
      question: "Qui a peint le plafond de la chapelle Sixtine ?",
      answer: "Michel-Ange (Michelangelo).",
      explanation:
        "Michel-Ange a peint le célèbre plafond entre 1508 et 1512, sur commande du pape Jules II. L'œuvre la plus célèbre est 'La Création d'Adam'.",
    },
    open_question: {
      question:
        "La critique et l'opposition politique sont-elles plus importantes pour une démocratie que le consensus et la stabilité ?",
      notes:
        "Débat sur le rôle de l'opposition, la polarisation et l'efficacité gouvernementale.",
    },
    did_you_know: {
      text: "Il faut environ 8 minutes pour que les globules rouges parcourent le corps humain en entier.",
    },
  },
  {
    date: "2026-02-11",
    general_question: {
      question:
        "Quel scientifique a découvert la loi de la gravitation universelle ?",
      answer: "Isaac Newton.",
      explanation:
        "Newton a formulé cette loi dans son ouvrage 'Philosophiae Naturalis Principia Mathematica' (1687), décrivant la force d'attraction entre deux masses. ",
    },
    open_question: {
      question:
        "La privatisation des services publics essentiels (eau, énergie, santé) est-elle inévitable ou doit-elle être évitée ?",
      notes:
        "Débat sur l'efficacité du marché versus l'accès universel et l'équité des services.",
    },
    did_you_know: {
      text: "L'organe le plus long du corps humain n'est pas l'intestin grêle, mais la peau, qui couvre une surface de près de 2 mètres carrés chez l'adulte.",
    },
  },
  {
    date: "2026-02-12",
    general_question: {
      question:
        "Quel gaz est le principal responsable de l'effet de serre d'origine humaine ?",
      answer: "Le dioxyde de carbone ($\text{CO}_2$).",
      explanation:
        "Le $\text{CO}_2$ est libéré en grande quantité par la combustion des énergies fossiles et est le moteur principal du réchauffement climatique anthropique.",
    },
    open_question: {
      question:
        "Les influenceurs des réseaux sociaux devraient-ils être tenus responsables des conseils (financiers, santé) qu'ils donnent à leurs abonnés ?",
      notes:
        "Débat sur la crédibilité, la désinformation et la réglementation des contenus promotionnels et informatifs.",
    },
    did_you_know: {
      text: "Le plus long mot français sans aucune lettre répétée est 'syndicalisme' (12 lettres).",
    },
  },
  {
    date: "2026-02-13",
    general_question: {
      question: "Quel pays a donné naissance à la danse du Tango ?",
      answer: "L'Argentine (et l'Uruguay).",
      explanation:
        "Le Tango est né dans les faubourgs de Buenos Aires (Argentine) et Montevideo (Uruguay) à la fin du XIXe siècle.",
    },
    open_question: {
      question:
        "Faut-il abolir les tests sur animaux pour la recherche scientifique, même si cela ralentit les avancées médicales ?",
      notes:
        "Débat sur l'éthique animale, les méthodes alternatives et les impératifs de la santé humaine.",
    },
    did_you_know: {
      text: "Les fourmis sont plus nombreuses sur Terre que les humains, avec une biomasse totale estimée similaire à celle de l'humanité.",
    },
  },
  {
    date: "2026-02-14",
    general_question: {
      question: "Quel est le seul métal liquide à température ambiante ?",
      answer: "Le Mercure (Hg).",
      explanation:
        "Le mercure est un élément chimique unique, métal et liquide, utilisé historiquement dans les thermomètres avant d'être remplacé par des alternatives moins toxiques.",
    },
    open_question: {
      question:
        "La Saint-Valentin est-elle une fête commerciale ou une célébration utile de l'amour dans une société individualiste ?",
      notes:
        "Débat sur la consommation, les traditions et l'expression des sentiments.",
    },
    did_you_know: {
      text: "La plus petite montagne du monde, le Mont Wycheproof en Australie, mesure seulement 43 mètres de haut.",
    },
  },
  {
    date: "2026-02-15",
    general_question: {
      question: "Qui a peint 'Le Cri' ?",
      answer: "Edvard Munch.",
      explanation:
        "Ce tableau expressionniste norvégien (créé en plusieurs versions entre 1893 et 1910) est souvent interprété comme une représentation de l'angoisse existentielle moderne.",
    },
    open_question: {
      question:
        "La liberté d'expression doit-elle permettre la diffusion de propos offensants ou discriminatoires ?",
      notes:
        "Débat sur les limites de la liberté d'expression face au respect d'autrui et aux lois anti-haine.",
    },
    did_you_know: {
      text: "Un 'jiffy' est une unité de temps réelle, définie en physique comme le temps qu'il faut à la lumière pour parcourir un centimètre dans le vide (environ 33 picosecondes).",
    },
  },
  {
    date: "2026-02-16",
    general_question: {
      question: "Quelle est la capitale de l'Allemagne ?",
      answer: "Berlin.",
      explanation:
        "Berlin est à la fois la capitale et la plus grande ville d'Allemagne, jouant un rôle central dans l'histoire européenne contemporaine.",
    },
    open_question: {
      question:
        "Devrait-on créer une citoyenneté mondiale pour traiter les problèmes transnationaux (climat, pandémies) ?",
      notes:
        "Débat sur la souveraineté nationale versus la gouvernance mondiale et la solidarité internationale.",
    },
    did_you_know: {
      text: "La pomme de terre, en plus d'être un féculent, est un légume qui contient 80% d'eau.",
    },
  },
  {
    date: "2026-02-17",
    general_question: {
      question:
        "Quel animal est le symbole de la sagesse dans de nombreuses cultures occidentales ?",
      answer: "La chouette (ou le hibou).",
      explanation:
        "Dans la mythologie grecque, la chouette était l'attribut de la déesse Athéna, déesse de la sagesse et de la stratégie.",
    },
    open_question: {
      question:
        "Le système de santé doit-il privilégier les soins préventifs plutôt que les traitements curatifs ?",
      notes:
        "Débat sur l'investissement dans la prévention (éducation, dépistage) et le coût du traitement des maladies chroniques.",
    },
    did_you_know: {
      text: "Le lac Baïkal en Sibérie contient environ 20% de l'eau douce de surface non gelée du monde.",
    },
  },
  {
    date: "2026-02-18",
    general_question: {
      question:
        "Quel célèbre bâtiment a été construit pour l'Exposition universelle de 1889 à Paris ?",
      answer: "La Tour Eiffel.",
      explanation:
        "Conçue par Gustave Eiffel, elle devait initialement être démolie après l'Exposition, mais son utilité pour la transmission radio l'a sauvée.",
    },
    open_question: {
      question:
        "L'automatisation et les robots vont-ils libérer les humains du travail ou provoquer un chômage de masse ?",
      notes:
        "Débat sur la transformation du marché de l'emploi, la reconversion professionnelle et le rôle du travail dans la société.",
    },
    did_you_know: {
      text: "Le cri du paon s'appelle le léonnement. Le cri est très aigu et strident.",
    },
  },
  {
    date: "2026-02-19",
    general_question: {
      question:
        "Quelles sont les trois couleurs primaires additives (lumière) ?",
      answer: "Rouge, Vert, Bleu (RVB).",
      explanation:
        "Les couleurs primaires additives sont utilisées dans les écrans d'ordinateur et la télévision. Leur superposition crée le blanc.",
    },
    open_question: {
      question:
        "L'adoption par les couples de même sexe devrait-elle être légalement autorisée dans tous les pays ?",
      notes:
        "Débat sur l'égalité des droits, le bien-être de l'enfant et la définition traditionnelle de la famille.",
    },
    did_you_know: {
      text: "La plus petite partie d'un être vivant capable de fonctionner de manière autonome est la cellule.",
    },
  },
  {
    date: "2026-02-20",
    general_question: {
      question: "Quel prix Nobel est attribué dans le domaine de l'économie ?",
      answer:
        "Le Prix de la Banque de Suède en sciences économiques en mémoire d'Alfred Nobel.",
      explanation:
        "Il n'est pas techniquement un prix Nobel 'original', mais il est administré et présenté avec les autres prix Nobel.",
    },
    open_question: {
      question:
        "Devrait-on interdire la possession de voitures individuelles dans les centres-villes pour des raisons écologiques et de congestion ?",
      notes:
        "Débat sur la mobilité urbaine, les transports en commun et la liberté individuelle de déplacement.",
    },
    did_you_know: {
      text: "Le son voyage près de 5 fois plus vite dans l'eau que dans l'air.",
    },
  },
  {
    date: "2026-02-21",
    general_question: {
      question: "Qui a écrit 'Don Quichotte' ?",
      answer: "Miguel de Cervantes.",
      explanation:
        "Publié en deux parties (1605 et 1615), 'L'Ingénieux Hidalgo Don Quichotte de la Manche' est considéré comme le premier roman moderne.",
    },
    open_question: {
      question:
        "Le rôle principal des médias est-il d'informer objectivement ou de servir de contre-pouvoir et d'éduquer les citoyens ?",
      notes:
        "Débat sur la neutralité, l'engagement et l'indépendance financière des médias.",
    },
    did_you_know: {
      text: "Il y a plus de combinaisons possibles dans le jeu d'échecs (estimées à $10^{120}$) qu'il n'y a d'atomes dans l'univers observable (estimés à $10^{80}$).",
    },
  },
  {
    date: "2026-02-22",
    general_question: {
      question:
        "Comment appelle-t-on la réaction chimique qui permet aux plantes de créer leur nourriture à partir de la lumière du soleil ?",
      answer: "La photosynthèse.",
      explanation:
        "Processus par lequel les plantes, les algues et certaines bactéries transforment l'énergie lumineuse, l'eau et le $\text{CO}_2$ en sucres et en oxygène.",
    },
    open_question: {
      question:
        "Les artistes devraient-ils retirer leurs œuvres des plateformes qui utilisent l'IA pour générer du contenu sans compensation équitable ?",
      notes:
        "Débat sur la rémunération de la création, le droit d'auteur et l'utilisation des données d'entraînement par l'IA.",
    },
    did_you_know: {
      text: "Il faut environ 100 litres d'eau pour produire une tasse de café (de la culture du grain à la tasse).",
    },
  },
  {
    date: "2026-02-23",
    general_question: {
      question:
        "Quel est le nom du plus long fleuve d'Europe occidentale (entièrement en Europe) ?",
      answer: "Le Danube.",
      explanation:
        "Le Danube est le deuxième plus long fleuve d'Europe après la Volga. Il traverse dix pays différents avant de se jeter dans la mer Noire.",
    },
    open_question: {
      question:
        "Faut-il interdire l'exploration et l'exploitation des ressources de l'Arctique pour protéger l'écosystème polaire ?",
      notes:
        "Débat sur les enjeux économiques (pétrole, gaz) face à l'urgence climatique et la biodiversité.",
    },
    did_you_know: {
      text: "Le caméléon ne change pas de couleur pour se camoufler, mais principalement pour réguler sa température ou communiquer son humeur.",
    },
  },
  {
    date: "2026-02-24",
    general_question: {
      question: "Qui a été le premier homme à marcher sur la Lune ?",
      answer: "Neil Armstrong.",
      explanation:
        "Il a posé le pied sur la Lune le 20 juillet 1969, lors de la mission Apollo 11, et a prononcé la célèbre phrase : 'Un petit pas pour l'homme, un pas de géant pour l'humanité'.",
    },
    open_question: {
      question:
        "Le droit de manifester est-il absolu ou doit-il être strictement encadré pour garantir l'ordre public ?",
      notes:
        "Débat sur la liberté de réunion, la sécurité des citoyens et les méthodes de maintien de l'ordre.",
    },
    did_you_know: {
      text: "La plus vieille créature connue est une palourde d'Islande nommée Ming, morte à l'âge de 507 ans en 2006.",
    },
  },
  {
    date: "2026-02-25",
    general_question: {
      question: "Quel artiste est connu pour avoir peint 'La Nuit Étoilée' ?",
      answer: "Vincent van Gogh.",
      explanation:
        "Le célèbre tableau 'La Nuit Étoilée' a été peint par le peintre post-impressionniste néerlandais en juin 1889, lors de son séjour à l'asile de Saint-Rémy-de-Provence.",
    },
    open_question: {
      question:
        "Faut-il accorder le droit de vote à partir de 16 ans dans les élections nationales ?",
      notes:
        "Débat sur la maturité politique des jeunes, leur implication civique et l'impact sur les résultats électoraux.",
    },
    did_you_know: {
      text: "L'émail des dents est la substance la plus dure du corps humain.",
    },
  },
  {
    date: "2026-02-26",
    general_question: {
      question: "Quelle est la science qui étudie les champignons ?",
      answer: "La mycologie.",
      explanation:
        "La mycologie est une branche de la biologie qui se concentre sur les champignons, leurs propriétés, leur classification et leurs usages.",
    },
    open_question: {
      question:
        "Les pays riches ont-ils une obligation morale de compenser les pays pauvres pour les dommages causés par le changement climatique ?",
      notes:
        "Débat sur la justice climatique, la dette historique et les fonds de 'pertes et dommages'.",
    },
    did_you_know: {
      text: "La Station Spatiale Internationale (ISS) orbite autour de la Terre à environ 28 000 km/h, effectuant 16 révolutions complètes par jour.",
    },
  },
  {
    date: "2026-02-27",
    general_question: {
      question:
        "Quel écrivain français est l'auteur des 'Trois Mousquetaires' ?",
      answer: "Alexandre Dumas.",
      explanation:
        "Ce roman historique d'aventure (1844) raconte les exploits de d'Artagnan et de ses amis Athos, Porthos et Aramis, avec la célèbre devise : 'Un pour tous, tous pour un'.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "Un chameau peut boire jusqu'à 150 litres d'eau en moins de 15 minutes.",
    },
  },
  {
    date: "2026-02-28",
    general_question: {
      question: "Quelle est l'unité de mesure de la pression atmosphérique ?",
      answer: "Le Pascal (Pa) ou l'Hectopascal (hPa).",
      explanation:
        "Le Pascal est l'unité SI. L'hPa est souvent utilisé en météorologie (1 hPa = 1 millibar). La pression moyenne au niveau de la mer est d'environ 1013 hPa.",
    },
    open_question: {
      question:
        "Devrait-on financer la recherche spatiale au détriment de la résolution des problèmes terrestres (faim, pauvreté) ?",
      notes:
        "Débat sur l'utilité pratique de l'espace (technologies, satellites) face à l'urgence des problèmes sociaux.",
    },
    did_you_know: {
      text: "Le sang de la limule (crabe fer à cheval) est bleu et est utilisé pour tester la stérilité des vaccins et des équipements médicaux.",
    },
  },

  // Jours 69 à 100 : Mars 2026 (31 jours) et Avril 2026 (3 jours)

  {
    date: "2026-03-01",
    general_question: {
      question:
        "Quel est le nom de la péninsule partagée par l'Espagne et le Portugal ?",
      answer: "La péninsule Ibérique.",
      explanation:
        "La péninsule Ibérique est située à l'extrémité sud-ouest de l'Europe et est bordée par la mer Méditerranée et l'océan Atlantique.",
    },
    open_question: {
      question:
        "La liberté de la presse est-elle vraiment garantie par la loi ou est-elle inévitablement influencée par les intérêts financiers de ses propriétaires ?",
      notes:
        "Débat sur l'indépendance éditoriale, la concentration des médias et le journalisme d'investigation.",
    },
    did_you_know: {
      text: "La Grande Barrière de Corail, au large de l'Australie, est la plus grande structure vivante sur Terre et peut être vue de l'espace.",
    },
  },
  {
    date: "2026-03-02",
    general_question: {
      question:
        "Quelle est la principale fonction du cône de l'œil (cellules coniques) ?",
      answer: "La perception des couleurs (vision diurne).",
      explanation:
        "Les cônes sont l'un des deux types de photorécepteurs de la rétine. Ils sont responsables de la perception des couleurs et de la vision de jour (vision photopique).",
    },
    open_question: {
      question:
        "Faut-il taxer les transactions financières spéculatives pour financer les services sociaux ?",
      notes:
        "Débat sur la 'taxe Tobin', la stabilité financière et la redistribution des richesses.",
    },
    did_you_know: {
      text: "Les astronautes de l'ISS voient environ 16 levers et couchers de soleil chaque jour, en raison de leur vitesse orbitale.",
    },
  },
  {
    date: "2026-03-03",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde. ",
    },
    open_question: {
      question:
        "L'agriculture biologique est-elle la seule voie possible pour une alimentation saine et durable ?",
      notes:
        "Débat sur la productivité, l'utilisation des pesticides et le coût pour le consommateur.",
    },
    did_you_know: {
      text: "La baleine bleue, le plus grand animal de la planète, a un cœur de la taille d'une petite voiture, et son bruit peut être entendu à des kilomètres.",
    },
  },
  {
    date: "2026-03-04",
    general_question: {
      question: "Qui a fondé l'entreprise Microsoft avec Paul Allen ?",
      answer: "Bill Gates.",
      explanation:
        "Microsoft, fondée en 1975, est devenue l'une des plus grandes entreprises technologiques du monde, pionnière dans le domaine des systèmes d'exploitation (Windows).",
    },
    open_question: {
      question:
        "La diversité culturelle et ethnique des équipes est-elle un avantage stratégique prouvé pour les entreprises ?",
      notes:
        "Débat sur les études de cas, la lutte contre les biais et les bénéfices de perspectives multiples.",
    },
    did_you_know: {
      text: "Le son de la foudre est créé lorsque la chaleur intense de l'éclair fait exploser l'air qui l'entoure, se déplaçant plus lentement que la lumière.",
    },
  },
  {
    date: "2026-03-05",
    general_question: {
      question: "Dans quelle ville se trouve le Colisée (Colosseum) ?",
      answer: "Rome (Italie).",
      explanation:
        "Cet amphithéâtre elliptique, construit entre 70 et 80 après J.-C., est l'un des symboles les plus puissants de la Rome antique.",
    },
    open_question: {
      question:
        "La régulation gouvernementale des loyers est-elle la meilleure solution pour garantir l'accès à un logement abordable ?",
      notes:
        "Débat sur l'offre et la demande de logements, l'impact sur l'investissement et les alternatives (construction publique).",
    },
    did_you_know: {
      text: "L'Australie est le seul pays à avoir une chaîne de montagnes qui s'appelle 'The Great Dividing Range' (la Grande Chaîne de Division).",
    },
  },
  {
    date: "2026-03-06",
    general_question: {
      question:
        "Quel est le seul chiffre dont le nom a le même nombre de lettres que sa valeur ?",
      answer: "Quatre.",
      explanation:
        "Quatre (4) lettres pour représenter la valeur 4. (Un : 3, Deux : 4, etc.)",
    },
    open_question: {
      question:
        "Faut-il taxer lourdement les produits de luxe (voitures, yachts, jets privés) pour financer les initiatives écologiques ?",
      notes:
        "Débat sur la 'justice verte', la consommation ostentatoire et l'efficacité fiscale.",
    },
    did_you_know: {
      text: "Un nuage cirrus est composé de cristaux de glace plutôt que de gouttelettes d'eau, et peut atteindre une altitude de 20 km.",
    },
  },
  {
    date: "2026-03-07",
    general_question: {
      question:
        "Quel est le nom de la théorie selon laquelle les continents se déplacent lentement sur la surface de la Terre ?",
      answer: "La tectonique des plaques.",
      explanation:
        "Cette théorie, proposée initialement par Alfred Wegener (dérive des continents), explique les tremblements de terre, les volcans et la formation des chaînes de montagnes.",
    },
    open_question: {
      question:
        "Le système de justice pénale devrait-il se concentrer davantage sur la réhabilitation des délinquants que sur la punition ?",
      notes:
        "Débat sur la justice réparatrice, la récidive et le rôle de la prison dans la société.",
    },
    did_you_know: {
      text: "Le nombre $pi$ ($approx 3,14159$) ne se termine jamais et ne se répète jamais, c'est un nombre irrationnel.",
    },
  },
  {
    date: "2026-03-08",
    general_question: {
      question:
        "Qui était la reine d'Égypte célèbre pour sa liaison avec Jules César et Marc Antoine ?",
      answer: "Cléopâtre VII.",
      explanation:
        "Elle fut la dernière pharaonne d'Égypte et son histoire est célèbre pour ses manœuvres politiques et ses relations avec les dirigeants romains.",
    },
    open_question: {
      question:
        "La Journée Internationale des Droits des Femmes est-elle toujours pertinente dans les sociétés occidentales modernes ?",
      notes:
        "Débat sur l'égalité formelle versus l'égalité réelle, et la persistance des inégalités salariales ou du plafond de verre.",
    },
    did_you_know: {
      text: "Les papillons goûtent avec leurs pieds.",
    },
  },
  {
    date: "2026-03-09",
    general_question: {
      question: "Quel est le sport pratiqué par l'équipe des 'All Blacks' ?",
      answer: "Le Rugby.",
      explanation:
        "Les All Blacks sont l'équipe nationale de Nouvelle-Zélande de rugby à XV, célèbres pour leur 'Haka' (danse maorie) avant les matchs.",
    },
    open_question: {
      question:
        "L'éducation civique devrait-elle inclure des cours obligatoires sur la vérification des sources (fact-checking) et la pensée critique ?",
      notes:
        "Débat sur la lutte contre la désinformation (fake news) et le rôle de l'école dans la formation d'un citoyen éclairé.",
    },
    did_you_know: {
      text: "Le plus ancien livre imprimé au monde a été réalisé en Chine en 868 après J.-C. : il s'agit du 'Soutra du Diamant'.",
    },
  },
  {
    date: "2026-03-10",
    general_question: {
      question: "Quelle est la capitale du Brésil ?",
      answer: "Brasília.",
      explanation:
        "Brasília a été inaugurée en 1960, remplaçant Rio de Janeiro, et a été construite selon un plan architectural moderne célèbre (d'Oscar Niemeyer).",
    },
    open_question: {
      question:
        "La colonisation d'autres planètes (Mars) est-elle la prochaine étape inévitable pour l'humanité, ou une distraction coûteuse ?",
      notes:
        "Débat sur l'avenir de l'espèce, le risque d'extinction sur Terre et les investissements nécessaires.",
    },
    did_you_know: {
      text: "La pomme est plus efficace qu'une tasse de café pour vous réveiller le matin, grâce à son taux de fructose et d'autres sucres naturels.",
    },
  },
  {
    date: "2026-03-11",
    general_question: {
      question: "Quel est le nom de la planète la plus proche du Soleil ?",
      answer: "Mercure.",
      explanation:
        "Mercure est la planète la plus petite et la plus proche du Soleil. Sa température de surface varie entre $427^{circ}\text{C}$ le jour et $-173^{circ}\text{C}$ la nuit.",
    },
    open_question: {
      question:
        "Faut-il imposer une taxe sur l'héritage pour limiter la concentration de la richesse et favoriser l'égalité des chances ?",
      notes:
        "Débat sur la méritocratie, le droit de transmettre son patrimoine et le rôle de l'État dans la redistribution.",
    },
    did_you_know: {
      text: "Le mot 'buffet' a été emprunté de la langue française par l'anglais, mais la prononciation est souvent différente (le 't' est souvent silencieux en français).",
    },
  },
  {
    date: "2026-03-12",
    general_question: {
      question:
        "Qui est l'auteur de l'hymne national français, 'La Marseillaise' ?",
      answer: "Claude Joseph Rouget de Lisle.",
      explanation:
        "L'officier de génie l'a composé en 1792, initialement sous le titre 'Chant de guerre pour l'armée du Rhin'.",
    },
    open_question: {
      question:
        "Le droit de grève devrait-il être limité dans certains secteurs considérés comme vitaux (santé, transports) ?",
      notes:
        "Débat sur l'équilibre entre les droits des travailleurs et la continuité des services publics essentiels.",
    },
    did_you_know: {
      text: "Les chats ne peuvent pas goûter le sucré, car ils ont perdu les récepteurs gustatifs pour le sucré au cours de l'évolution.",
    },
  },
  {
    date: "2026-03-13",
    general_question: {
      question:
        "Quelle est la plus grande réserve d'eau douce (non gelée) sur Terre ?",
      answer: "Les eaux souterraines (aquifères).",
      explanation:
        "La plus grande partie de l'eau douce terrestre est stockée sous forme de glace (70%). Parmi l'eau liquide, la grande majorité se trouve dans les aquifères souterrains, bien plus que dans les lacs et rivières.",
    },
    open_question: {
      question:
        "Les entreprises de jeux vidéo sont-elles moralement responsables des phénomènes d'addiction de leurs utilisateurs ?",
      notes:
        "Débat sur les mécanismes de rétention des jeux (loot boxes, micro-transactions) et la santé publique.",
    },
    did_you_know: {
      text: "Le cri de l'ara (un grand perroquet) est si puissant qu'il peut être entendu à plus de 8 kilomètres de distance.",
    },
  },
  {
    date: "2026-03-14",
    general_question: {
      question:
        "Quel est le nom du célèbre scientifique connu pour avoir jeté les bases de la physique quantique ?",
      answer: "Max Planck.",
      explanation:
        "Planck est le fondateur de la théorie des quanta (1900), qui postule que l'énergie est rayonnée en unités discrètes appelées 'quanta'.",
    },
    open_question: {
      question:
        "La surveillance des employés via des outils numériques (logiciels, caméras) est-elle une pratique acceptable pour maximiser la productivité ?",
      notes:
        "Débat sur la confiance, le droit à la vie privée au travail et le stress induit par la surveillance.",
    },
    did_you_know: {
      text: "Le jour de $pi$ est célébré le 14 mars (3/14 aux États-Unis), car les trois premiers chiffres de $pi$ sont 3.14.",
    },
  },
  {
    date: "2026-03-15",
    general_question: {
      question: "Quel est l'élément chimique le plus léger de l'univers ?",
      answer: "L'Hydrogène (H).",
      explanation:
        "L'hydrogène (H) est l'élément le plus léger et le plus abondant dans l'univers. Il est composé d'un seul proton et d'un seul électron.",
    },
    open_question: {
      question:
        "La démocratie directe (référendums fréquents) est-elle supérieure à la démocratie représentative ?",
      notes:
        "Débat sur la compétence des citoyens, la manipulation de l'opinion et la rapidité des décisions politiques.",
    },
    did_you_know: {
      text: "Il n'y a pas de ponts sur le fleuve Amazone, car il traverse principalement des zones de jungle peu peuplées.",
    },
  },
  {
    date: "2026-03-16",
    general_question: {
      question:
        "Quel mouvement artistique est caractérisé par des formes géométriques et la décomposition de la perspective (ex: 'Les Demoiselles d'Avignon') ?",
      answer: "Le Cubisme.",
      explanation:
        "Le cubisme a été développé au début du XXe siècle par Pablo Picasso et Georges Braque.",
    },
    open_question: {
      question:
        "Faut-il rendre obligatoire l'emballage réutilisable ou consigné pour tous les produits de grande consommation ?",
      notes:
        "Débat sur la pollution plastique, le coût de la logistique du réemploi et l'acceptation par le consommateur.",
    },
    did_you_know: {
      text: "La tortue peut respirer par l'anus. Elle utilise des sacs appelés bourses cloacales, qui servent de branchies improvisées.",
    },
  },
  {
    date: "2026-03-17",
    general_question: {
      question:
        "Quel est le nom de la déesse romaine de l'amour et de la beauté ?",
      answer: "Vénus.",
      explanation:
        "Vénus est l'équivalent de la déesse grecque Aphrodite. Le terme est également utilisé pour désigner la deuxième planète du système solaire.",
    },
    open_question: {
      question:
        "Les influenceurs des réseaux sociaux devraient-ils être considérés comme des professionnels du marketing et être réglementés comme tels ?",
      notes:
        "Débat sur la publicité déguisée, la transparence et la protection des consommateurs (notamment les jeunes).",
    },
    did_you_know: {
      text: "Saint Patrick n'était pas irlandais. Il est né en Grande-Bretagne (probablement en Écosse ou au Pays de Galles) et a été capturé par des pirates pour être vendu comme esclave en Irlande.",
    },
  },
  {
    date: "2026-03-18",
    general_question: {
      question:
        "Quel est le plus grand désert froid du monde (le plus grand désert tout court) ?",
      answer: "L'Antarctique.",
      explanation:
        "Un désert est défini par ses faibles précipitations annuelles. L'Antarctique, malgré la glace, reçoit très peu de pluie ou de neige et est donc le plus grand désert.",
    },
    open_question: {
      question:
        "Faut-il limiter la liberté de circulation des personnes non vaccinées en cas de pandémie mondiale ?",
      notes:
        "Débat sur la santé publique, les droits individuels et la discrimination médicale (question hypothétique).",
    },
    did_you_know: {
      text: "La planète Uranus est inclinée sur le côté, si bien qu'elle tourne sur son axe à un angle de presque 90 degrés par rapport au plan de son orbite.",
    },
  },
  {
    date: "2026-03-19",
    general_question: {
      question:
        "Quel est l'inventeur de l'ampoule électrique commercialement viable ?",
      answer: "Thomas Edison.",
      explanation:
        "Bien que d'autres aient travaillé sur des versions antérieures, Edison est crédité de l'invention de l'ampoule pratique et durable (fin des années 1870).",
    },
    open_question: {
      question:
        "Le système de retraite par répartition est-il encore viable face à l'augmentation de la longévité et au déclin de la natalité ?",
      notes:
        "Débat sur l'âge de départ, le financement des retraites et la solidarité intergénérationnelle.",
    },
    did_you_know: {
      text: "Un calmar géant a les plus grands yeux du règne animal, avec un diamètre pouvant atteindre 27 centimètres.",
    },
  },
  {
    date: "2026-03-20",
    general_question: {
      question:
        "Quel est l'organe qui produit la bile pour aider à la digestion des graisses ?",
      answer: "Le Foie.",
      explanation:
        "Le foie produit la bile, qui est ensuite stockée et concentrée dans la vésicule biliaire, avant d'être libérée dans l'intestin grêle pour émulsionner les graisses.",
    },
    open_question: {
      question:
        "Le développement des métavers va-t-il créer une économie réelle ou une bulle spéculative sans valeur durable ?",
      notes:
        "Débat sur l'investissement dans les mondes virtuels, le travail numérique et l'impact de la réalité augmentée.",
    },
    did_you_know: {
      text: "Le jour et la nuit sont égaux aujourd'hui (équinoxe de printemps dans l'hémisphère nord, ou d'automne dans le sud).",
    },
  },
  {
    date: "2026-03-21",
    general_question: {
      question: "Dans quel pays se trouve le célèbre temple d'Angkor Wat ?",
      answer: "Le Cambodge.",
      explanation:
        "Ce complexe de temples du XIIe siècle était à l'origine dédié au dieu hindou Vishnou, puis au bouddhisme.",
    },
    open_question: {
      question:
        "L'énergie solaire et éolienne doit-elle être privilégiée même si elle est intermittente et nécessite d'énormes infrastructures de stockage ?",
      notes:
        "Débat sur les énergies renouvelables, l'impact paysager et la nécessité d'une production de base (nucléaire, gaz).",
    },
    did_you_know: {
      text: "Le papier est composé de cellulose, une molécule organique, ce qui en fait un polymère naturel. La cellulose est un glucide.",
    },
  },
  {
    date: "2026-03-22",
    general_question: {
      question: "Qui a peint 'Le Jardin des délices' ?",
      answer: "Jérôme Bosch.",
      explanation:
        "Ce triptyque allégorique (vers 1490-1510) est célèbre pour ses scènes fantastiques, ses créatures hybrides et son symbolisme complexe.",
    },
    open_question: {
      question:
        "Les musées et les institutions culturelles devraient-ils restituer tous les artefacts historiques acquis à l'époque coloniale ?",
      notes:
        "Débat sur la réparation historique, la conservation des œuvres et la définition de la propriété culturelle.",
    },
    did_you_know: {
      text: "Un nuage moyen pèse environ 500 tonnes (l'équivalent de 100 éléphants), mais il est maintenu en l'air par l'effet de la densité et des courants d'air ascendants.",
    },
  },
  {
    date: "2026-03-23",
    general_question: {
      question:
        "Quel auteur de science-fiction a popularisé l'idée des 'Trois Lois de la Robotique' ?",
      answer: "Isaac Asimov.",
      explanation:
        "Ces lois sont un ensemble de règles destinées à guider le comportement des robots pour éviter qu'ils ne nuisent aux humains (publiées en 1942 dans la nouvelle 'Runaround').",
    },
    open_question: {
      question:
        "Faut-il limiter l'utilisation des antibiotiques dans l'élevage intensif pour prévenir l'émergence de bactéries résistantes ?",
      notes:
        "Débat sur la santé publique, l'industrie alimentaire et le risque d'une crise d'antibiorésistance mondiale.",
    },
    did_you_know: {
      text: "La Russie est si grande qu'elle compte 11 fuseaux horaires différents.",
    },
  },
  {
    date: "2026-03-24",
    general_question: {
      question: "Quel est le plus grand organe sensoriel du corps humain ?",
      answer: "La Peau.",
      explanation:
        "La peau est l'organe le plus étendu et le plus lourd du corps. Elle est responsable du sens du toucher et sert de barrière protectrice.",
    },
    open_question: {
      question:
        "Le développement de l'exploration minière dans l'espace est-il une menace pour l'avenir ou une nécessité pour les ressources terrestres ?",
      notes:
        "Débat sur la pollution spatiale, les traités internationaux et l'accès aux minéraux rares (sur les astéroïdes).",
    },
    did_you_know: {
      text: "Le café était à l'origine considéré comme la 'boisson amère de Satan' avant d'être finalement accepté par l'Église au XVIe siècle.",
    },
  },
  {
    date: "2026-03-25",
    general_question: {
      question:
        "Qui était le chef militaire carthaginois célèbre pour avoir traversé les Alpes avec des éléphants de guerre ?",
      answer: "Hannibal Barca.",
      explanation:
        "Pendant la Deuxième Guerre punique (218 av. J.-C.), Hannibal a mené une armée de 37 éléphants pour attaquer Rome par le nord. ",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' (compenser les émissions) est-il une solution écologique viable ou un permis de polluer pour les entreprises ?",
      notes:
        "Débat sur l'efficacité de la compensation (plantation d'arbres, marchés du carbone) face à la nécessité de la réduction absolue.",
    },
    did_you_know: {
      text: "Les astronautes en orbite deviennent temporairement plus grands (jusqu'à 5 cm) en raison de l'absence de gravité qui permet à la colonne vertébrale de s'étirer.",
    },
  },
  {
    date: "2026-03-26",
    general_question: {
      question: "Quel pays a pour symbole la feuille d'érable ?",
      answer: "Le Canada.",
      explanation:
        "La feuille d'érable est l'emblème national depuis le XVIIIe siècle et figure sur le drapeau du pays depuis 1965.",
    },
    open_question: {
      question:
        "Faut-il rendre le bénévolat obligatoire pour les étudiants afin de renforcer le lien social et l'engagement civique ?",
      notes:
        "Débat sur le service communautaire, l'implication contrainte et les bénéfices du volontariat.",
    },
    did_you_know: {
      text: "La vitesse de la lumière est d'environ 299 792 kilomètres par seconde dans le vide ($c = 299,792,458 \text{m/s}$). Elle est la limite de vitesse dans l'univers.",
    },
  },
  {
    date: "2026-03-27",
    general_question: {
      question:
        "Qui est l'auteur de l'œuvre philosophique 'Ainsi parlait Zarathoustra' ?",
      answer: "Friedrich Nietzsche.",
      explanation:
        "Ce livre, publié entre 1883 et 1885, est célèbre pour introduire les concepts de 'Volonté de puissance' et de 'Surhomme' (Übermensch).",
    },
    open_question: {
      question:
        "L'intelligence artificielle devrait-elle être utilisée par les forces de police pour prédire les crimes ?",
      notes:
        "Débat sur la 'justice prédictive', le risque de biais algorithmique et la présomption d'innocence.",
    },
    did_you_know: {
      text: "Le 'rêve' moyen dure entre 5 et 20 minutes, et vous en faites plusieurs par nuit sans vous en souvenir.",
    },
  },
  {
    date: "2026-03-28",
    general_question: {
      question: "Quel est le gaz noble le plus léger ?",
      answer: "L'Hélium (He).",
      explanation:
        "L'hélium est le deuxième élément le plus abondant dans l'univers après l'hydrogène. C'est un gaz inerte utilisé pour gonfler les ballons et dans l'imagerie par résonance magnétique (IRM).",
    },
    open_question: {
      question:
        "Faut-il abolir la propriété privée des données génétiques humaines pour en faire un bien commun de l'humanité ?",
      notes:
        "Débat sur les brevets sur la vie, la recherche médicale et l'éthique de la bio-ingénierie.",
    },
    did_you_know: {
      text: "Les éléphants sont les seuls animaux qui ne peuvent pas sauter.",
    },
  },
  {
    date: "2026-03-29",
    general_question: {
      question: "Quelle est la religion majoritaire en Inde ?",
      answer: "L'Hindouisme.",
      explanation:
        "L'Hindouisme est la plus ancienne religion encore pratiquée. Environ 80% de la population indienne est hindoue.",
    },
    open_question: {
      question:
        "Le concept de 'Croissance Zéro' ou 'Décroissance' est-il la seule issue crédible pour sauver la planète ?",
      notes:
        "Débat sur la compatibilité de la croissance économique avec la soutenabilité écologique et le bien-être social.",
    },
    did_you_know: {
      text: "La plus petite pièce de monnaie américaine, le 'demi-cent', a été frappée pour la dernière fois en 1857.",
    },
  },
  {
    date: "2026-03-30",
    general_question: {
      question: "Quel est le nom de la péninsule où se trouve la Mecque ?",
      answer: "La péninsule Arabique.",
      explanation:
        "La Mecque, ville sainte de l'Islam, est située dans la région du Hedjaz, dans l'actuelle Arabie saoudite, sur la péninsule Arabique.",
    },
    open_question: {
      question:
        "L'accès à la culture (musées, concerts, livres) devrait-il être gratuit pour tous les citoyens ?",
      notes:
        "Débat sur le financement de la culture, la démocratisation de l'accès et le rôle de l'État.",
    },
    did_you_know: {
      text: "Les dauphins dorment avec un seul œil fermé. Ils alternent les hémisphères de leur cerveau pour pouvoir rester à la fois vigilants et en repos.",
    },
  },
  {
    date: "2026-03-31",
    general_question: {
      question: "Quel est le nom donné au phénomène de la queue d'une comète ?",
      answer: "La chevelure (ou la queue).",
      explanation:
        "La queue, ou coma, est formée par les gaz et les poussières sublimés sous l'effet du vent solaire, et pointe toujours à l'opposé du Soleil. ",
    },
    open_question: {
      question:
        "Faut-il interdire l'usage des téléphones portables aux enfants de moins de 13 ans, y compris à l'école ?",
      notes:
        "Débat sur la sécurité en ligne, l'impact sur la concentration et le développement social des enfants.",
    },
    did_you_know: {
      text: "Le son produit par le craquement des doigts est dû à l'éclatement de bulles de gaz dans le liquide synovial des articulations, selon la théorie la plus acceptée.",
    },
  },

  {
    date: "2026-04-01",
    general_question: {
      question:
        "Quel est le surnom populaire donné au poisson d'avril en France ?",
      answer: "Poisson d'avril.",
      explanation:
        "Le 1er avril, il est de coutume de faire des farces et de coller un poisson en papier dans le dos des gens. L'origine est incertaine, mais remonterait au XVIe siècle et au changement de calendrier.",
    },
    open_question: {
      question:
        "Est-il éthique d'utiliser l'humour (la farce) comme un outil politique ou social pour dénoncer une injustice ?",
      notes:
        "Débat sur la satire, la critique et les limites de l'humour dans l'espace public.",
    },
    did_you_know: {
      text: "Le chocolat au lait a été inventé en Suisse par Daniel Peter en 1875, qui a trouvé le moyen d'y incorporer du lait en poudre (lait concentré par Nestlé).",
    },
  },
  {
    date: "2026-04-02",
    general_question: {
      question:
        "Quel célèbre bâtiment de Pise, Italie, est connu pour son inclinaison involontaire ?",
      answer: "La Tour de Pise (Torre Pendente di Pisa).",
      explanation:
        "La tour a commencé à s'incliner lors de sa construction au XIIe siècle à cause d'un sol instable, mais elle a été stabilisée au début du XXIe siècle.",
    },
    open_question: {
      question:
        "Faut-il privilégier les investissements dans les énergies renouvelables locales (éoliennes, panneaux solaires) ou les projets d'énergie verte à grande échelle (barrages, fermes solaires désertiques) ?",
      notes:
        "Débat sur la décentralisation de l'énergie, l'impact environnemental local et l'efficacité de la production.",
    },
    did_you_know: {
      text: "L'aigle à tête blanche (symbole des États-Unis) ne pèse qu'environ 4,5 à 6,5 kg. Il doit rester léger pour pouvoir voler.",
    },
  },
  {
    date: "2026-04-03",
    general_question: {
      question:
        "Quel gaz est le principal composant de l'air que nous expirons (le plus grand volume) ?",
      answer: "L'Azote ($\text{N}_2$).",
      explanation:
        "L'air inhalé est composé d'environ 78% d'azote. L'azote n'est pas utilisé par le corps, donc l'air expiré contient toujours près de 78% d'azote (l'oxygène passe de 21% à 16%).",
    },
    open_question: {
      question:
        "L'euthanasie et le suicide assisté devraient-ils être un droit universel et légalement accessible à toute personne en souffrance incurable ?",
      notes:
        "Débat sur l'autonomie individuelle, l'éthique médicale et la définition de la fin de vie.",
    },
    did_you_know: {
      text: "Les tornades les plus fortes du monde peuvent atteindre des vitesses de vent allant jusqu'à 480 km/h.",
    },

    date: "2026-04-04",
    general_question: {
      question:
        "Quel est le plus grand lac d'eau douce au monde, en superficie ?",
      answer: "Le Lac Supérieur.",
      explanation:
        "Situé à la frontière entre les États-Unis et le Canada, le Lac Supérieur est le plus grand des Grands Lacs et le plus grand lac d'eau douce par sa surface.",
    },
    open_question: {
      question:
        "L'abolition des brevets sur les médicaments vitaux est-elle nécessaire pour garantir un accès mondial à la santé ?",
      notes:
        "Débat sur l'innovation pharmaceutique, la recherche et le droit à la santé universel.",
    },
    did_you_know: {
      text: "Le son voyage plus rapidement dans un solide (comme l'acier) que dans un liquide (l'eau) ou un gaz (l'air).",
    },
  },
  {
    date: "2026-04-05",
    general_question: {
      question:
        "Qui a peint le célèbre tableau post-impressionniste 'Les Tournesols' ?",
      answer: "Vincent van Gogh.",
      explanation:
        "Van Gogh a peint plusieurs séries de natures mortes de tournesols à Arles à la fin des années 1880. ",
    },
    open_question: {
      question:
        "Les parents sont-ils responsables des infractions commises en ligne par leurs enfants mineurs ?",
      notes:
        "Débat sur la responsabilité légale, l'éducation numérique et la protection des mineurs sur Internet.",
    },
    did_you_know: {
      text: "Les kangourous utilisent leur queue comme une cinquième patte pour l'équilibre et la propulsion.",
    },
  },
  {
    date: "2026-04-06",
    general_question: {
      question:
        "Quel pays a été le premier à reconnaître la déclaration d'indépendance des États-Unis en 1777 ?",
      answer: "La France.",
      explanation:
        "La France a été le premier pays à reconnaître formellement les États-Unis comme une nation souveraine, jouant un rôle crucial dans la Guerre d'Indépendance.",
    },
    open_question: {
      question:
        "Faut-il imposer un quota minimum de représentation des femmes en politique pour atteindre la parité ?",
      notes:
        "Débat sur les politiques de discrimination positive, l'efficacité des quotas et la méritocratie.",
    },
    did_you_know: {
      text: "L'odorat du chien est environ 10 000 à 100 000 fois plus développé que celui de l'homme.",
    },
  },
  {
    date: "2026-04-07",
    general_question: {
      question:
        "Quelle est l'unité de mesure de la fréquence (nombre de cycles par seconde) ?",
      answer: "Le Hertz (Hz).",
      explanation:
        "Le Hertz est l'unité SI de la fréquence. Il est nommé d'après le physicien allemand Heinrich Hertz. 1 Hz = 1 cycle par seconde.",
    },
    open_question: {
      question:
        "Le sport automobile (Formule 1, Rallye) peut-il justifier son existence face aux enjeux de la transition énergétique ?",
      notes:
        "Débat sur l'innovation technologique vs. l'empreinte carbone élevée et l'exemple donné par ces industries.",
    },
    did_you_know: {
      text: "Le seul continent qui ne possède pas de moustiques est l'Antarctique.",
    },
  },
  {
    date: "2026-04-08",
    general_question: {
      question:
        "Dans quel film la phrase culte 'Que la force soit avec toi' est-elle souvent prononcée ?",
      answer: "Star Wars (La Guerre des Étoiles).",
      explanation:
        "Cette phrase est une bénédiction ou un souhait de chance souvent échangé par les Jedi. ",
    },
    open_question: {
      question:
        "Faut-il limiter l'usage de la reconnaissance faciale dans les aéroports et les lieux publics pour protéger la vie privée ?",
      notes:
        "Débat sur l'équilibre entre la sécurité nationale et la surveillance de masse.",
    },
    did_you_know: {
      text: "Un séisme de magnitude 7 libère autant d'énergie qu'une bombe atomique de 32 millions de tonnes de TNT.",
    },
  },
  {
    date: "2026-04-09",
    general_question: {
      question:
        "Quel scientifique a découvert la structure en double hélice de l'ADN avec James Watson ?",
      answer: "Francis Crick.",
      explanation:
        "Watson et Crick ont publié leur modèle en 1953, se basant sur les travaux de Rosalind Franklin. Ils ont reçu le Prix Nobel en 1962.",
    },
    open_question: {
      question:
        "Le travail doit-il être considéré comme la principale source d'identité et de valeur sociale de l'individu ?",
      notes:
        "Débat sur la société post-travail, le revenu universel et la valeur des activités non rémunérées.",
    },
    did_you_know: {
      text: "Les poulpes ont trois cœurs : deux pompent le sang à travers les branchies, et le troisième le fait circuler dans le reste du corps.",
    },
  },
  {
    date: "2026-04-10",
    general_question: {
      question: "Quelle est la plus grande lune de Saturne ?",
      answer: "Titan.",
      explanation:
        "Titan est la deuxième plus grande lune du système solaire et la seule, à part la Terre, à posséder une atmosphère dense et des étendues de liquide (hydrocarbures) à sa surface.",
    },
    open_question: {
      question:
        "L'éducation doit-elle privilégier les matières scientifiques (STEM) au détriment des sciences humaines et des arts ?",
      notes:
        "Débat sur l'équilibre des programmes, les besoins du marché du travail et la formation d'un citoyen complet.",
    },
    did_you_know: {
      text: "La majorité des diamants naturels ont été formés il y a entre 1 et 3 milliards d'années, sous une pression et une chaleur extrêmes.",
    },
  },
  {
    date: "2026-04-11",
    general_question: {
      question:
        "Dans quel pays la civilisation Aztèque a-t-elle principalement prospéré ?",
      answer: "Le Mexique.",
      explanation:
        "L'Empire aztèque, avec sa capitale Tenochtitlan (sur le site de l'actuelle Mexico), a dominé la Méso-Amérique du XIVe au XVIe siècle.",
    },
    open_question: {
      question:
        "L'utilisation de drones par les particuliers devrait-elle être strictement interdite ou fortement réglementée pour des raisons de sécurité et de vie privée ?",
      notes:
        "Débat sur le loisir, la photographie aérienne et les risques d'espionnage ou de terrorisme.",
    },
    did_you_know: {
      text: "Le cri du dodo était inconnu car il était une espèce insulaire, non habituée aux prédateurs, et donc silencieuse (éteinte au XVIIe siècle).",
    },
  },
  {
    date: "2026-04-12",
    general_question: {
      question:
        "Quel est le plus grand État des États-Unis par sa superficie ?",
      answer: "L'Alaska.",
      explanation:
        "L'Alaska est deux fois et demie plus grand que le Texas, le deuxième État. Il a été acheté à la Russie en 1867. ",
    },
    open_question: {
      question:
        "Les super-riches (milliardaires) ont-ils une obligation morale de redistribuer une grande partie de leur fortune ?",
      notes:
        "Débat sur la philanthropie, la taxation progressive et le rôle des fondations privées (Ex. : Bill Gates).",
    },
    did_you_know: {
      text: "Le 12 avril est la 'Journée internationale du vol spatial habité', en commémoration du premier vol de Youri Gagarine en 1961.",
    },
  },
  {
    date: "2026-04-13",
    general_question: {
      question:
        "Quel écrivain français est l'auteur de 'Vingt mille lieues sous les mers' ?",
      answer: "Jules Verne.",
      explanation:
        "Publié en 1870, ce roman de science-fiction met en scène le capitaine Nemo et son sous-marin, le Nautilus.",
    },
    open_question: {
      question:
        "Faut-il interdire l'exploitation minière en haute mer avant de connaître l'étendue des dégâts sur les écosystèmes sous-marins ?",
      notes:
        "Débat sur l'accès aux minéraux rares (lithium, cobalt) et la conservation marine.",
    },
    did_you_know: {
      text: "Le seul aliment qui ne se périme jamais (à condition qu'il soit bien stocké) est le riz blanc non cuit.",
    },
  },
  {
    date: "2026-04-14",
    general_question: {
      question:
        "Dans le corps humain, quel acide est produit en grande quantité par l'estomac pour la digestion ?",
      answer: "L'acide chlorhydrique ($\text{HCl}$).",
      explanation:
        "L'acide chlorhydrique a un $\text{pH}$ très bas (entre 1,5 et 3,5) et est essentiel pour décomposer les aliments et tuer les bactéries ingérées.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées d'offrir des congés payés pour la santé mentale, au même titre que la santé physique ?",
      notes:
        "Débat sur la reconnaissance du stress et du burn-out, et la politique de bien-être au travail.",
    },
    did_you_know: {
      text: "Les chameaux ont trois paupières pour se protéger du sable dans le désert.",
    },
  },
  {
    date: "2026-04-15",
    general_question: {
      question: "Quel est le nom du plus grand cratère d'impact sur Mars ?",
      answer: "Le bassin d'Hellas (Hellas Planitia).",
      explanation:
        "Avec un diamètre d'environ 2 300 km et une profondeur de plus de 7 km, c'est l'une des plus grandes structures d'impact connues du système solaire. ",
    },
    open_question: {
      question:
        "La liberté artistique (chanson, film, peinture) devrait-elle être limitée si elle heurte les sensibilités religieuses ou culturelles ?",
      notes: "Débat sur la censure, l'offense et le rôle provocateur de l'art.",
    },
    did_you_know: {
      text: "L'Impôt sur le revenu moderne est né en Grande-Bretagne en 1799 pour financer la guerre contre la France napoléonienne.",
    },
  },
  {
    date: "2026-04-16",
    general_question: {
      question:
        "Quel groupe de rock anglais a créé l'album 'The Dark Side of the Moon' ?",
      answer: "Pink Floyd.",
      explanation:
        "Sorti en 1973, cet album conceptuel est l'un des plus vendus de tous les temps, célèbre pour ses thèmes de la folie et de l'avidité.",
    },
    open_question: {
      question:
        "Les réseaux sociaux sont-ils aujourd'hui un outil de démocratisation de l'information ou une chambre d'écho polarisante ?",
      notes:
        "Débat sur les algorithmes, la désinformation et la création de bulles idéologiques.",
    },
    did_you_know: {
      text: "Les rêves se produisent pendant la phase de sommeil $\text{REM}$ (Rapid Eye Movement), qui représente environ 20% du temps de sommeil total.",
    },
  },
  {
    date: "2026-04-17",
    general_question: {
      question:
        "Comment appelle-t-on la transformation chimique de l'eau en vapeur d'eau ?",
      answer: "Vaporisation (ou évaporation).",
      explanation:
        "La vaporisation est le passage de l'état liquide à l'état gazeux. Elle nécessite l'apport d'énergie (chaleur).",
    },
    open_question: {
      question:
        "Faut-il légaliser et réglementer le marché des stupéfiants pour des raisons fiscales et de santé publique ?",
      notes:
        "Débat sur la criminalité, le contrôle qualité et les exemples de pays ayant opté pour la légalisation.",
    },
    did_you_know: {
      text: "Le point de fusion de l'or est de $1 064,18^{circ}\text{C}$.",
    },
  },
  {
    date: "2026-04-18",
    general_question: {
      question:
        "Quel est le nom du célèbre détroit reliant l'océan Atlantique et la mer Méditerranée ?",
      answer: "Le détroit de Gibraltar.",
      explanation:
        "Il sépare l'Europe (Espagne, Gibraltar) de l'Afrique (Maroc) et est une route maritime stratégique.",
    },
    open_question: {
      question:
        "La croissance de la population mondiale est-elle le problème écologique principal, devant la surconsommation des pays riches ?",
      notes:
        "Débat sur la pression démographique versus l'empreinte carbone et l'inégalité de la consommation par habitant.",
    },
    did_you_know: {
      text: "La pomme de terre, introduite en Europe au $\text{XVI}^e$ siècle, a été longtemps considérée comme toxique et servait d'abord de nourriture pour le bétail.",
    },
  },
  {
    date: "2026-04-19",
    general_question: {
      question:
        "Qui a formulé les lois du mouvement des planètes au début du $\text{XVII}^e$ siècle ?",
      answer: "Johannes Kepler.",
      explanation:
        "Kepler a établi trois lois empiriques décrivant le mouvement des planètes autour du Soleil (orbites elliptiques, etc.). ",
    },
    open_question: {
      question:
        "Le vote par Internet (électronique) est-il la solution pour augmenter la participation électorale ou un risque pour la sécurité des résultats ?",
      notes:
        "Débat sur la fraude, la cryptographie et l'accessibilité du vote en ligne.",
    },
    did_you_know: {
      text: "La foudre frappe le sol environ 100 fois par seconde dans le monde.",
    },
  },
  {
    date: "2026-04-20",
    general_question: {
      question: "Quel est le plus grand récif corallien du monde ?",
      answer: "La Grande Barrière de Corail.",
      explanation:
        "Située au large de l'Australie, elle s'étend sur plus de 2 300 kilomètres et est visible depuis l'espace. Elle est gravement menacée par le réchauffement climatique.",
    },
    open_question: {
      question:
        "L'utilisation d'assistants vocaux (Alexa, Google Home) est-elle un bénéfice pratique ou une intrusion dans la vie privée ?",
      notes:
        "Débat sur la collecte de données, l'écoute permanente et le consentement des utilisateurs.",
    },
    did_you_know: {
      text: "Le seul continent au monde qui ne contient pas d'espèces de serpents est l'Antarctique.",
    },
  },
  {
    date: "2026-04-21",
    general_question: {
      question:
        "Quelle ville est traditionnellement considérée comme la date de fondation de Rome (légende de Romulus et Remus) ?",
      answer: "753 av. J.-C.",
      explanation:
        "Selon la tradition romaine, Rome fut fondée par Romulus le 21 avril 753 av. J.-C.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être légalement contraintes de s'assurer que leurs chaînes d'approvisionnement sont éthiques et sans exploitation du travail ?",
      notes:
        "Débat sur la responsabilité sociale des entreprises, le 'fast-fashion' et le travail des enfants.",
    },
    did_you_know: {
      text: "Le métal le plus cher est le rhodium, un métal du groupe du platine, principalement utilisé comme catalyseur.",
    },
  },
  {
    date: "2026-04-22",
    general_question: {
      question:
        "Quel est le principal gaz libéré par les vaches lors de leur digestion ?",
      answer: "Le méthane ($\text{CH}_4$).",
      explanation:
        "Le méthane est un puissant gaz à effet de serre (plus puissant que le $\text{CO}_2$ à court terme) libéré par la fermentation entérique des ruminants.",
    },
    open_question: {
      question:
        "La Journée de la Terre (Earth Day) a-t-elle un impact réel ou est-ce une simple opération de 'greenwashing' ?",
      notes:
        "Débat sur la sensibilisation, l'action concrète et le marketing environnemental des entreprises.",
    },
    did_you_know: {
      text: "La plus ancienne pyramide égyptienne n'est pas Gizeh, mais la Pyramide à degrés de Djoser, construite vers 2650 av. J.-C.",
    },
  },
  {
    date: "2026-04-23",
    general_question: {
      question:
        "Quel est le nom du détroit qui sépare la Sibérie (Russie) de l'Alaska (États-Unis) ?",
      answer: "Le détroit de Béring.",
      explanation:
        "Ce détroit est célèbre pour avoir été, pendant les périodes glaciaires, un pont terrestre (Béringie) qui a permis le peuplement des Amériques.",
    },
    open_question: {
      question:
        "Faut-il privilégier l'adoption internationale ou le placement familial pour les enfants sans parents ?",
      notes:
        "Débat sur le respect de l'identité culturelle de l'enfant versus le besoin d'un foyer stable et aimant.",
    },
    did_you_know: {
      text: "William Shakespeare et Miguel de Cervantes, deux des plus grands écrivains occidentaux, sont morts le même jour (23 avril 1616), mais en raison des calendriers différents (Julien et Grégorien), ce n'était pas le même jour civil.",
    },
  },
  {
    date: "2026-04-24",
    general_question: {
      question:
        "Quel est le nom du plus grand océan de l'Antiquité (l'océan qui entourait la Pangée) ?",
      answer: "La Panthalassa.",
      explanation:
        "Il était l'océan unique et immense qui entourait le supercontinent de la Pangée, il y a environ 250 millions d'années.",
    },
    open_question: {
      question:
        "L'anxiété croissante chez les jeunes est-elle un problème individuel ou un symptôme d'une société en crise (climat, avenir économique) ?",
      notes:
        "Débat sur la santé mentale, le stress lié à l'avenir (éco-anxiété) et la pression sociale.",
    },
    did_you_know: {
      text: "L'huile de moteur est réutilisable, mais la majorité est recyclée pour faire des carburants marins ou d'autres produits pétroliers, et non de la nouvelle huile moteur.",
    },
  },
  {
    date: "2026-04-25",
    general_question: {
      question:
        "Quel compositeur est l'auteur de 'La Marche Turque' et de la symphonie 'Jupiter' ?",
      answer: "Wolfgang Amadeus Mozart.",
      explanation:
        "La symphonie $\text{No.} 41$ de Mozart est surnommée 'Jupiter'. Il a écrit la Marche Turque (Rondo alla Turca) pour sa Sonate pour piano $\text{No.} 11$.",
    },
    open_question: {
      question:
        "Les banques centrales devraient-elles utiliser la 'monnaie numérique' pour améliorer la politique monétaire et l'inclusion financière ?",
      notes:
        "Débat sur les CBDC (Central Bank Digital Currencies), le contrôle des transactions et la fin de l'argent liquide.",
    },
    did_you_know: {
      text: "Le cœur humain bat environ 100 000 fois par jour.",
    },
  },
  {
    date: "2026-04-26",
    general_question: {
      question: "Quelle était l'ancienne capitale de l'Empire Inca ?",
      answer: "Cuzco (ou Cusco).",
      explanation:
        "Située dans les Andes péruviennes, Cuzco était le centre politique et religieux de l'Empire Inca avant la conquête espagnole. ",
    },
    open_question: {
      question:
        "Faut-il imposer des cours obligatoires sur les religions et la laïcité dès le plus jeune âge ?",
      notes:
        "Débat sur la tolérance, la connaissance des cultures et le rôle de l'État dans l'éducation religieuse.",
    },
    did_you_know: {
      text: "L'accident nucléaire de Tchernobyl s'est produit le 26 avril 1986 en Ukraine. C'est l'une des pires catastrophes écologiques et humaines de l'histoire.",
    },
  },
  {
    date: "2026-04-27",
    general_question: {
      question:
        "Quel gaz est le principal composant des ballons gonflables qui flottent (plus léger que l'air) ?",
      answer: "L'Hélium (He).",
      explanation:
        "L'hélium est un gaz rare, inerte et non inflammable, ce qui le rend sûr pour les ballons. L'hydrogène, encore plus léger, est trop inflammable.",
    },
    open_question: {
      question:
        "Le système de notation 'étoiles' (restaurants, hôtels) est-il un bon indicateur de qualité ou favorise-t-il l'uniformité ?",
      notes:
        "Débat sur la critique, l'innovation et la subjectivité de la qualité dans les services.",
    },
    did_you_know: {
      text: "Un mois sans l'occurrence de la pleine lune est possible. Cela s'est produit en février 1866 et se reproduira en février 2037.",
    },
  },
  {
    date: "2026-04-28",
    general_question: {
      question: "Quelle est la science qui étudie les oiseaux ?",
      answer: "L'Ornithologie.",
      explanation:
        "L'ornithologie est une branche de la zoologie dédiée aux oiseaux, y compris leur comportement, leur physiologie et leur classification.",
    },
    open_question: {
      question:
        "L'agriculture urbaine (potagers sur les toits, fermes verticales) peut-elle jouer un rôle significatif dans l'alimentation des grandes villes ?",
      notes:
        "Débat sur la logistique, la productivité et la réduction de l'empreinte carbone des aliments.",
    },
    did_you_know: {
      text: "Il y a plus de jours entre deux vendredis 13 consécutifs qu'entre deux samedis 13 consécutifs.",
    },
  },
  {
    date: "2026-04-29",
    general_question: {
      question: "Qui a fondé l'entreprise automobile Ford ?",
      answer: "Henry Ford.",
      explanation:
        "Henry Ford a fondé la Ford Motor Company en 1903. Il est célèbre pour avoir introduit la production en série basée sur le travail à la chaîne (le fordisme).",
    },
    open_question: {
      question:
        "Faut-il interdire l'utilisation des animaux sauvages dans les cirques et les spectacles itinérants ?",
      notes:
        "Débat sur le bien-être animal, la tradition culturelle et les alternatives éthiques au spectacle.",
    },
    did_you_know: {
      text: "La statue de la Liberté à New York était à l'origine destinée à la ville de Port-Saïd, en Égypte, pour marquer l'entrée du canal de Suez.",
    },
  },
  {
    date: "2026-04-30",
    general_question: {
      question:
        "Quel prix littéraire français est souvent considéré comme le plus prestigieux ?",
      answer: "Le Prix Goncourt.",
      explanation:
        "Créé en 1903, le Goncourt est décerné à l'auteur du meilleur ouvrage d'imagination en prose de l'année. ",
    },
    open_question: {
      question:
        "Le concept de 'neutralité du net' (égalité de traitement des données) est-il essentiel pour la liberté d'Internet ?",
      notes:
        "Débat sur le contrôle des flux de données par les fournisseurs d'accès (FAI) et l'accès équitable à l'information.",
    },
    did_you_know: {
      text: "La langue la plus parlée dans le monde, en termes de locuteurs natifs, est le mandarin (chinois), devant l'espagnol et l'anglais.",
    },
  },

  // Jours 128 à 158 : Mai 2026 (31 jours)
  {
    date: "2026-05-01",
    general_question: {
      question:
        "Quelle est la fleur traditionnellement offerte en France le 1er mai ?",
      answer: "Le muguet (Clochette de mai).",
      explanation:
        "Offrir du muguet est un porte-bonheur pour le mois de mai. Le 1er mai est aussi la Fête du Travail dans de nombreux pays.",
    },
    open_question: {
      question:
        "Les syndicats ont-ils encore un rôle pertinent dans la défense des droits des travailleurs de l'économie numérique (freelance, plateformes) ?",
      notes:
        "Débat sur l'organisation des travailleurs indépendants, la précarité et les nouvelles formes d'emploi.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-05-02",
    general_question: {
      question: "Quel est le plus grand État d'Afrique par sa superficie ?",
      answer: "L'Algérie.",
      explanation:
        "Depuis la partition du Soudan en 2011, l'Algérie est le plus vaste pays du continent africain.",
    },
    open_question: {
      question:
        "Le cinéma devrait-il être davantage subventionné par l'État pour garantir la diversité culturelle face aux superproductions ?",
      notes:
        "Débat sur l'industrie culturelle, la qualité artistique et la concurrence des plateformes de streaming.",
    },
    did_you_know: {
      text: "La plus vieille créature marine encore vivante est une éponge d'une espèce non identifiée, découverte à 2 134 mètres de profondeur et estimée à 10 000 ans.",
    },
  },
  {
    date: "2026-05-03",
    general_question: {
      question:
        "Quel pays a pour langue officielle le portugais en Amérique du Sud ?",
      answer: "Le Brésil.",
      explanation:
        "Le Brésil a été colonisé par le Portugal, tandis que la plupart des autres pays d'Amérique du Sud parlent l'espagnol.",
    },
    open_question: {
      question:
        "Faut-il former des armées de 'soldats-robots' (entièrement autonomes) pour réduire les pertes humaines dans les conflits ?",
      notes:
        "Débat sur l'éthique de la guerre automatisée, le droit international et le risque de déshumanisation des conflits.",
    },
    did_you_know: {
      text: "La plus petite quantité de matière observable est le quark, qui est un constituant des protons et des neutrons.",
    },
  },
  {
    date: "2026-05-04",
    general_question: {
      question:
        "Quel prix scientifique est souvent considéré comme l'équivalent du Prix Nobel en mathématiques ?",
      answer: "La Médaille Fields.",
      explanation:
        "Elle est décernée tous les quatre ans à des mathématiciens de moins de 40 ans. (Il n'y a pas de Prix Nobel en mathématiques). ",
    },
    open_question: {
      question:
        "La liberté des médias est-elle menacée par la pression des annonceurs et la recherche du 'clic' à tout prix ?",
      notes:
        "Débat sur le modèle économique des médias, la qualité de l'information et le journalisme d'investigation.",
    },
    did_you_know: {
      text: "Le 4 mai est souvent célébré comme le 'Star Wars Day' en raison du jeu de mots 'May the Fourth be with you' (May the Force be with you).",
    },
  },
  {
    date: "2026-05-05",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Vatican qui abrite le plafond de Michel-Ange ?",
      answer: "La Chapelle Sixtine.",
      explanation:
        "Bien que techniquement une chapelle du palais apostolique, elle fait partie du complexe des Musées du Vatican et est célèbre pour ses fresques.",
    },
    open_question: {
      question:
        "L'industrie du jeu vidéo devrait-elle être tenue responsable de la représentation stéréotypée et violente de certains groupes sociaux ?",
      notes:
        "Débat sur la liberté de création, l'impact sur les joueurs et les lois sur le contenu numérique.",
    },
    did_you_know: {
      text: "Le chili est en fait un fruit (une baie), et ses graines ne sont pas ce qui rend la plante piquante, mais le tissu qui les entoure (le placenta).",
    },
  },
  {
    date: "2026-05-06",
    general_question: {
      question:
        "Quel est le plus grand volcan du système solaire, situé sur Mars ?",
      answer: "L'Olympus Mons.",
      explanation:
        "Avec une hauteur de 21,9 km, l'Olympus Mons (Mont Olympe) est près de trois fois plus haut que l'Everest. ",
    },
    open_question: {
      question:
        "Faut-il imposer des cours obligatoires de cuisine et de nutrition pour lutter contre l'obésité et les maladies associées ?",
      notes:
        "Débat sur l'éducation à la santé, la responsabilité individuelle et le rôle de l'école dans l'alimentation.",
    },
    did_you_know: {
      text: "La première monnaie métallique a été utilisée en Lydie (Turquie actuelle) vers 600 av. J.-C.",
    },
  },
  {
    date: "2026-05-07",
    general_question: {
      question:
        "Quel est le nom de la seule planète du système solaire qui tourne sur elle-même dans le sens des aiguilles d'une montre ?",
      answer: "Vénus.",
      explanation:
        "La rotation rétrograde de Vénus, ainsi que celle d'Uranus (qui roule sur le côté), est une anomalie par rapport aux autres planètes. ",
    },
    open_question: {
      question:
        "Les lanceurs d'alerte (whistleblowers) devraient-ils bénéficier d'une immunité totale pour les informations qu'ils révèlent ?",
      notes:
        "Débat sur la protection des sources, l'intérêt public et la sécurité nationale.",
    },
    did_you_know: {
      text: "La plus petite distance entre deux points dans l'espace-temps n'est pas une ligne droite, mais une géodésique (une courbe).",
    },
  },
  {
    date: "2026-05-08",
    general_question: {
      question:
        "Quel événement historique majeur est commémoré le 8 mai en France et dans d'autres pays alliés ?",
      answer:
        "La Victoire de 1945 (fin de la Seconde Guerre mondiale en Europe).",
      explanation:
        "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie face aux Alliés.",
    },
    open_question: {
      question:
        "Le service militaire ou civique obligatoire (mixte) est-il nécessaire pour renforcer l'unité nationale et le sens des responsabilités ?",
      notes:
        "Débat sur les coûts, la liberté individuelle et l'efficacité d'une formation civique et militaire.",
    },
    did_you_know: {
      text: "Le mot 'ambulance' vient du français 'hôpital ambulant', utilisé pour désigner les hôpitaux mobiles lors des guerres napoléoniennes.",
    },
  },
  {
    date: "2026-05-09",
    general_question: {
      question:
        "Quel animal est le symbole national de la Chine et est considéré comme une espèce menacée ?",
      answer: "Le Panda géant.",
      explanation:
        "Le panda est originaire des régions montagneuses du centre de la Chine et est un symbole mondial de la conservation de la faune.",
    },
    open_question: {
      question:
        "La régulation de la taille et de la concentration des grandes entreprises technologiques (GAFA) est-elle suffisante pour empêcher les monopoles ?",
      notes:
        "Débat sur le droit de la concurrence, la protection des données et le pouvoir politique des multinationales.",
    },
    did_you_know: {
      text: "Les astronautes qui travaillent à l'extérieur de l'ISS doivent porter des couches pour adultes, car il n'y a pas de toilettes dans leur combinaison spatiale.",
    },
  },
  {
    date: "2026-05-10",
    general_question: {
      question:
        "Quel artiste est l'auteur de la célèbre sculpture 'Le Penseur' ?",
      answer: "Auguste Rodin.",
      explanation:
        "Créée à l'origine en 1880, cette sculpture en bronze représente un homme en méditation profonde. ",
    },
    open_question: {
      question:
        "Les réseaux sociaux devraient-ils être contraints d'utiliser des algorithmes qui favorisent le contenu 'positif' ou 'éducatif' ?",
      notes:
        "Débat sur l'impact sur le bien-être, la liberté algorithmique et le risque de censure du contenu critique.",
    },
    did_you_know: {
      text: "Le seul oiseau capable de voir la couleur bleue est le pigeon.",
    },
  },
  {
    date: "2026-05-11",
    general_question: {
      question: "Quelle est l'unité de mesure de la puissance électrique ?",
      answer: "Le Watt (W).",
      explanation:
        "Le Watt est l'unité SI de la puissance, nommée d'après l'inventeur écossais James Watt. C'est le taux auquel l'énergie est transférée ou utilisée.",
    },
    open_question: {
      question:
        "Faut-il développer l'énergie de fusion nucléaire (qui promet une énergie quasi-illimitée et propre) au détriment de l'énergie de fission (nucléaire classique) ?",
      notes:
        "Débat sur l'horizon technologique (ITER), les coûts de recherche et la nécessité d'une production d'énergie immédiate.",
    },
    did_you_know: {
      text: "Le cri d'une mouche est appelé le 'bourdonnement'.",
    },
  },
  {
    date: "2026-05-12",
    general_question: {
      question: "Quel est le nom du plus grand océan de la Terre ?",
      answer: "L'océan Pacifique.",
      explanation:
        "Il est si vaste qu'il couvre près d'un tiers de la surface terrestre et contient plus de la moitié de l'eau libre de la planète.",
    },
    open_question: {
      question:
        "L'apprentissage des langues mortes (latin, grec ancien) est-il encore pertinent dans le système éducatif moderne ?",
      notes:
        "Débat sur l'importance des racines culturelles, l'étymologie et la nécessité de préparer aux métiers du futur.",
    },
    did_you_know: {
      text: "Le pont de Londres que l'on voit souvent en photo n'est pas le 'London Bridge' historique, mais le 'Tower Bridge'. Le London Bridge a été vendu et déplacé en Arizona, États-Unis.",
    },
  },
  {
    date: "2026-05-13",
    general_question: {
      question: "Quel pays a pour capitale La Havane ?",
      answer: "Cuba.",
      explanation:
        "La Havane est la capitale et la plus grande ville de Cuba. Elle est célèbre pour son architecture coloniale et ses voitures anciennes.",
    },
    open_question: {
      question:
        "La surveillance biométrique (empreintes, iris) dans les lieux publics est-elle une atteinte intolérable à la liberté ?",
      notes:
        "Débat sur le droit à l'anonymat, la sécurité et la traçabilité des individus par l'État.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-05-14",
    general_question: {
      question:
        "Quel est le nom de l'hormone du sommeil, souvent utilisée pour traiter les troubles du sommeil ?",
      answer: "La Mélatonine.",
      explanation:
        "La mélatonine est sécrétée par la glande pinéale. Sa production est stimulée par l'obscurité, signalant au corps qu'il est temps de dormir.",
    },
    open_question: {
      question:
        "Les cryptomonnaies peuvent-elles réellement remplacer les monnaies fiduciaires traditionnelles (Euro, Dollar) ?",
      notes:
        "Débat sur la volatilité, la régulation, la confiance et le rôle des banques centrales.",
    },
    did_you_know: {
      text: "La plus petite cellule du corps humain est le spermatozoïde, et la plus grande est l'ovule.",
    },
  },
  {
    date: "2026-05-15",
    general_question: {
      question: "Quelle était la capitale de l'Empire byzantin ?",
      answer: "Constantinople (aujourd'hui Istanbul).",
      explanation:
        "Fondée par l'empereur Constantin Ier en 330 apr. J.-C., elle a été le centre de l'Empire romain d'Orient pendant plus de mille ans. ",
    },
    open_question: {
      question:
        "Faut-il limiter l'accès aux forêts et aux zones naturelles pour les protéger de la surfréquentation touristique ?",
      notes:
        "Débat sur l'écotourisme, le droit d'accès à la nature et la conservation des écosystèmes.",
    },
    did_you_know: {
      text: "Le Soleil est techniquement une étoile naine jaune de type G, mais elle est en fait blanche vue de l'espace.",
    },
  },
  {
    date: "2026-05-16",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Andromède est une galaxie spirale géante située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée (prévue dans 4,5 milliards d'années).",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Zone de l'Océan Pacifique' est si lointaine qu'il y a plus de chance d'y rencontrer un astronaute que n'importe qui d'autre (c'est le cimetière des engins spatiaux).",
    },
  },
  {
    date: "2026-05-17",
    general_question: {
      question: "Quel est le nom du plus grand lac salé du monde ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Bien qu'appelée 'mer', elle est techniquement le plus grand lac du monde en superficie (environ $371 000 \text{km}^2$).",
    },
    open_question: {
      question:
        "L'éducation religieuse devrait-elle être laissée entièrement aux familles et aux institutions religieuses, ou faire partie de l'école publique ?",
      notes:
        "Débat sur la neutralité de l'État, le pluralisme et la transmission des valeurs.",
    },
    did_you_know: {
      text: "Le corps humain est constitué d'environ 60% d'eau.",
    },
  },
  {
    date: "2026-05-18",
    general_question: {
      question:
        "Quel est le principal composant de la coquille d'un œuf de poule ?",
      answer: "Le Carbonate de Calcium ($\text{CaCO}_3$).",
      explanation:
        "Le carbonate de calcium est une substance très solide qui protège l'œuf et est également présente dans le calcaire et le marbre.",
    },
    open_question: {
      question:
        "Faut-il taxer davantage les produits importés pour encourager la production locale et réduire l'empreinte carbone du transport ?",
      notes:
        "Débat sur le protectionnisme, les accords commerciaux internationaux et l'autonomie alimentaire.",
    },
    did_you_know: {
      text: "Le seul continent qui n'a pas de glaciers est l'Australie.",
    },
  },
  {
    date: "2026-05-19",
    general_question: {
      question:
        "Qui est l'auteur des romans policiers 'Dix Petits Nègres' et 'Le Crime de l'Orient-Express' ?",
      answer: "Agatha Christie.",
      explanation:
        "Agatha Christie est l'une des romancières les plus vendues de tous les temps. Ses personnages célèbres sont Hercule Poirot et Miss Marple.",
    },
    open_question: {
      question:
        "L'accès à l'information sur Internet devrait-il être payant pour garantir la qualité et la pérennité du journalisme ?",
      notes:
        "Débat sur le 'paywall', le modèle économique des médias et l'accès gratuit à la connaissance.",
    },
    did_you_know: {
      text: "Le mot 'nerd' (intello) a été inventé par le Dr Seuss dans son livre 'If I Ran the Zoo' en 1950.",
    },
  },
  {
    date: "2026-05-20",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Royaume-Uni, connu pour abriter la Pierre de Rosette ?",
      answer: "Le British Museum.",
      explanation:
        "Situé à Londres, le British Museum possède des collections couvrant l'histoire, l'art et la culture humaines, avec plus de 8 millions d'œuvres.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'biens partagés' (voitures, outils, logements) pour lutter contre la surconsommation et l'individualisme ?",
      notes:
        "Débat sur l'économie collaborative, la propriété privée et l'efficacité des ressources.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas composés de vapeur d'eau (qui est un gaz invisible), mais de minuscules gouttelettes d'eau liquide ou de cristaux de glace en suspension.",
    },
  },
  {
    date: "2026-05-21",
    general_question: {
      question: "Quel est le plus haut sommet d'Afrique ?",
      answer: "Le Mont Kilimandjaro.",
      explanation:
        "Situé en Tanzanie, il est le plus haut sommet isolé du monde (qui n'appartient pas à une chaîne de montagnes). ",
    },
    open_question: {
      question:
        "Le droit au suicide assisté devrait-il être étendu aux personnes qui ne sont pas en phase terminale, mais dont la souffrance psychologique est jugée insupportable ?",
      notes:
        "Débat sur l'autonomie, l'évaluation de la souffrance et la définition de la dignité de la fin de vie.",
    },
    did_you_know: {
      text: "Le plus long règne d'un monarque britannique est celui de la Reine Élisabeth II, qui a régné pendant plus de 70 ans.",
    },
  },
  {
    date: "2026-05-22",
    general_question: {
      question:
        "Quel est le nom du traité qui a mis fin à la Première Guerre mondiale ?",
      answer: "Le Traité de Versailles.",
      explanation:
        "Signé le 28 juin 1919 dans la Galerie des Glaces du Château de Versailles, il a officiellement mis fin au conflit entre les Alliés et l'Allemagne.",
    },
    open_question: {
      question:
        "L'humanité devrait-elle se concentrer sur la conservation des espèces menacées ou sur la restauration des écosystèmes entiers ?",
      notes:
        "Débat sur les priorités de la biodiversité : protéger l'emblématique ou le fonctionnel.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas, elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-05-23",
    general_question: {
      question:
        "Quel est le nom de la force qui s'oppose au mouvement dans l'air ou dans un liquide ?",
      answer: "La Traînée (ou Résistance de l'air/fluide).",
      explanation:
        "La traînée est la force de friction qui agit parallèlement à la vitesse du fluide et s'oppose au mouvement. ",
    },
    open_question: {
      question:
        "Faut-il introduire le droit à l'erreur fiscale pour les citoyens de bonne foi, sans pénalité lourde ?",
      notes:
        "Débat sur la complexité de l'administration, la confiance de l'État envers le citoyen et les sanctions.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-05-24",
    general_question: {
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi.",
      explanation:
        "New Delhi est la capitale de l'Inde, bien que Mumbai (Bombay) soit souvent la plus grande ville en termes de population.",
    },
    open_question: {
      question:
        "L'enseignement doit-il se faire uniquement en présentiel pour garantir la qualité ou doit-on généraliser l'enseignement en ligne ?",
      notes:
        "Débat sur l'interactivité sociale, l'accès à distance et l'efficacité des plateformes numériques.",
    },
    did_you_know: {
      text: "Les étoiles filantes ne sont pas des étoiles, mais de petites particules de débris (météoroïdes) qui se désintègrent en entrant dans l'atmosphère terrestre.",
    },
  },
  {
    date: "2026-05-25",
    general_question: {
      question: "Qui a peint 'Le Serment des Horaces' ?",
      answer: "Jacques-Louis David.",
      explanation:
        "Ce tableau néoclassique (1784) est considéré comme un chef-d'œuvre qui illustre les vertus civiques et le devoir envers la patrie.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être conditionné à la réussite d'un test de connaissances civiques de base ?",
      notes:
        "Débat sur la compétence de l'électeur, l'élitisme et l'universalité du suffrage.",
    },
    did_you_know: {
      text: "La première personne à faire le tour du monde en solitaire et sans escale a été l'Australien Jon Sanders en 1988.",
    },
  },
  {
    date: "2026-05-26",
    general_question: {
      question:
        "Quel est le nom de la plus grande baie du monde (par sa ligne côtière) ?",
      answer: "La baie d'Hudson.",
      explanation:
        "Située dans le nord-est du Canada, la baie d'Hudson est la deuxième plus grande baie du monde après le golfe du Mexique.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de partager leurs profits avec leurs employés (intéressement) ?",
      notes:
        "Débat sur le capitalisme, la participation des salariés et la redistribution des richesses.",
    },
    did_you_know: {
      text: "Le seul chiffre dont l'orthographe contient la lettre 'a' est 'quatre'.",
    },
  },
  {
    date: "2026-05-27",
    general_question: {
      question: "Qui est l'auteur du roman 'Le Petit Prince' ?",
      answer: "Antoine de Saint-Exupéry.",
      explanation:
        "Publié en 1943, ce conte philosophique est l'un des livres les plus traduits et vendus au monde. ",
    },
    open_question: {
      question:
        "Le système de santé occidental (traitement des maladies) est-il trop dépendant des grandes entreprises pharmaceutiques ?",
      notes: "Débat sur le lobbying, les brevets et la recherche indépendante.",
    },
    did_you_know: {
      text: "Le mot 'chèque' vient du mot persan 'sak' qui signifie 'mandat ou document légal'.",
    },
  },
  {
    date: "2026-05-28",
    general_question: {
      question:
        "Quel était le nom de l'explorateur vénitien qui a parcouru la Route de la soie au $\text{XIII}^e$ siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, Le Livre des merveilles, a documenté ses voyages en Asie, y compris en Chine à la cour de Kubilai Khan.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'monnaies locales' (complémentaires) pour favoriser l'économie circulaire et le commerce de proximité ?",
      notes:
        "Débat sur l'impact sur l'économie nationale, la fraude et la confiance dans les monnaies alternatives.",
    },
    did_you_know: {
      text: "La plus ancienne université du monde toujours en activité est l'Université Al Quaraouiyine, fondée à Fès, Maroc, en 859.",
    },
  },
  {
    date: "2026-05-29",
    general_question: {
      question:
        "Quel est le nom du gaz noble utilisé pour éclairer les panneaux publicitaires et les tubes néon (couleur rouge-orange) ?",
      answer: "Le Néon (Ne).",
      explanation:
        "Le néon émet une lumière rouge-orange vif lorsqu'il est sous tension électrique dans un tube à basse pression.",
    },
    open_question: {
      question:
        "Le recours au tir de barrage pour la protection des cultures contre les animaux (loups, sangliers) est-il éthiquement acceptable ?",
      notes:
        "Débat sur la coexistence homme-faune, la protection des espèces et l'économie agricole.",
    },
    did_you_know: {
      text: "Le mot 'samouraï' vient du mot japonais 'saburau', qui signifie 'servir'.",
    },
  },
  {
    date: "2026-05-30",
    general_question: {
      question: "Quel fleuve est considéré comme le plus sacré de l'Inde ?",
      answer: "Le Gange (Ganga).",
      explanation:
        "Le Gange est vénéré par les hindous comme la déesse Ganga. Il est un lieu de pèlerinage et de purification rituelle.",
    },
    open_question: {
      question:
        "La surveillance des frontières par des drones et des capteurs est-elle une solution technologique viable et humaine à la crise migratoire ?",
      notes:
        "Débat sur la sécurité, le droit d'asile et la déshumanisation des contrôles.",
    },
    did_you_know: {
      text: "Le drapeau olympique, avec ses cinq anneaux, a été conçu en 1913. Chaque anneau représente un continent et leurs couleurs combinées apparaissent dans tous les drapeaux nationaux.",
    },
  },
  {
    date: "2026-05-31",
    general_question: {
      question:
        "Quelle est la principale source de Vitamine $\text{D}$ pour le corps humain ?",
      answer: "Le Soleil (exposition aux rayons UV).",
      explanation:
        "L'exposition au soleil permet à la peau de synthétiser la Vitamine $\text{D}$, essentielle à l'absorption du calcium et à la santé osseuse. ",
    },
    open_question: {
      question:
        "Le tabac (ou la nicotine) devrait-il être totalement interdit pour les générations nées après 2010 ?",
      notes:
        "Débat sur la santé publique, l'interdiction générationnelle et le droit individuel de fumer.",
    },
    did_you_know: {
      text: "Une année sur Mars dure 687 jours terrestres (soit presque deux fois plus qu'une année terrestre).",
    },
  },

  // Jours 159 à 188 : Juin 2026 (30 jours)
  {
    date: "2026-06-01",
    general_question: {
      question:
        "Quel est le nom de la force qui maintient l'eau à la surface d'un verre, malgré la gravité ?",
      answer: "La Tension de surface.",
      explanation:
        "La tension de surface est le phénomène par lequel la surface d'un liquide se comporte comme une membrane élastique, due aux forces de cohésion entre les molécules d'eau.",
    },
    open_question: {
      question:
        "La 'Fast Fashion' (mode rapide) devrait-elle être limitée par des lois pour réduire son impact environnemental et social ?",
      notes:
        "Débat sur la production de vêtements jetables, la pollution et les conditions de travail dans l'industrie textile.",
    },
    did_you_know: {
      text: "L'œil d'autruche est plus grand que son cerveau.",
    },
  },
  {
    date: "2026-06-02",
    general_question: {
      question: "Quel est le nom de la déesse grecque de la victoire ?",
      answer: "Nikè.",
      explanation:
        "Nikè (ou Nike) est souvent représentée ailée. La célèbre marque de sport porte son nom. ",
    },
    open_question: {
      question:
        "Faut-il imposer des limites de vitesse globales sur Internet (débit) pour réduire la consommation d'énergie des centres de données ?",
      notes:
        "Débat sur l'écologie numérique, la performance et l'accès à la haute vitesse.",
    },
    did_you_know: {
      text: "La Terre est la planète la plus dense du système solaire.",
    },
  },
  {
    date: "2026-06-03",
    general_question: {
      question:
        "Quel est le seul pays d'Europe qui partage une frontière terrestre avec le Danemark ?",
      answer: "L'Allemagne.",
      explanation:
        "Le Danemark est en grande partie entouré d'eau, mais partage une courte frontière terrestre avec l'Allemagne au sud (Jutland).",
    },
    open_question: {
      question:
        "La vaccination contre les maladies infantiles (Rougeole, etc.) devrait-elle être strictement obligatoire pour l'inscription à l'école ?",
      notes:
        "Débat sur l'immunité collective, la liberté de choix des parents et la santé publique.",
    },
    did_you_know: {
      text: "Un 'joli' (unité de mesure) est utilisé pour définir le travail effectué par une force, équivalent à un newton agissant sur un mètre.",
    },
  },
  {
    date: "2026-06-04",
    general_question: {
      question:
        "Qui est l'auteur des essais philosophiques 'L'Étranger' et 'La Peste' ?",
      answer: "Albert Camus.",
      explanation:
        "Camus était un philosophe, écrivain et lauréat du prix Nobel de littérature (1957), souvent associé à la philosophie de l'absurde.",
    },
    open_question: {
      question:
        "Les banques devraient-elles cesser de financer les projets d'énergies fossiles pour accélérer la transition écologique ?",
      notes:
        "Débat sur la finance verte, la responsabilité des institutions financières et l'approvisionnement énergétique.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-06-05",
    general_question: {
      question: "Quelle est la capitale de l'Islande ?",
      answer: "Reykjavik.",
      explanation:
        "Reykjavik est la capitale la plus septentrionale du monde, célèbre pour ses sources chaudes et son utilisation des énergies géothermiques.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles interdire l'utilisation des écrans (smartphones, tablettes) en classe, même à des fins pédagogiques ?",
      notes:
        "Débat sur la distraction, les outils numériques éducatifs et l'impact sur la concentration des élèves.",
    },
    did_you_know: {
      text: "La 'Journée mondiale de l'environnement' est célébrée chaque 5 juin, établie par l'ONU en 1972.",
    },
  },
  {
    date: "2026-06-06",
    general_question: {
      question:
        "Quel événement majeur de la Seconde Guerre mondiale est commémoré le 6 juin ?",
      answer: "Le débarquement de Normandie (D-Day).",
      explanation:
        "Le 6 juin 1944, les forces alliées ont lancé l'assaut amphibie le plus important de l'histoire pour libérer l'Europe de l'occupation nazie. ",
    },
    open_question: {
      question:
        "Faut-il imposer une 'taxe sur la malbouffe' pour financer la prévention des maladies liées à l'alimentation ?",
      notes:
        "Débat sur la fiscalité comportementale, la liberté de consommation et l'impact sur les revenus modestes.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-06-07",
    general_question: {
      question:
        "Quel est le nom de la couche de l'atmosphère terrestre qui absorbe la majeure partie du rayonnement ultraviolet du Soleil ?",
      answer: "La couche d'Ozone.",
      explanation:
        "Située principalement dans la stratosphère, la couche d'ozone ($\text{O}_3$) est essentielle pour protéger la vie sur Terre des $\text{UV}$ nocifs.",
    },
    open_question: {
      question:
        "Les robots devraient-ils payer des impôts ou des cotisations sociales pour compenser les emplois qu'ils suppriment ?",
      notes:
        "Débat sur la 'taxe robot', le financement de la protection sociale et la définition du travail à l'ère de l'automatisation.",
    },
    did_you_know: {
      text: "Le mot 'radar' est un acronyme signifiant 'Radio Detection And Ranging'.",
    },
  },
  {
    date: "2026-06-08",
    general_question: {
      question:
        "Quel animal marin est le plus grand invertébré (sans colonne vertébrale) connu ?",
      answer: "Le calmar colossal (Mesonychoteuthis hamiltoni).",
      explanation:
        "Bien que le calmar géant soit plus connu, le calmar colossal est généralement plus lourd et détient le record du plus grand œil du monde animal.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Journée mondiale des océans' est célébrée chaque 8 juin, visant à sensibiliser à la protection des écosystèmes marins.",
    },
  },
  {
    date: "2026-06-09",
    general_question: {
      question:
        "Qui a peint 'Les Noces de Cana', la plus grande toile du musée du Louvre ?",
      answer: "Paul Véronèse.",
      explanation:
        "Cette œuvre massive (6,77 m par 9,94 m) représente le premier miracle de Jésus-Christ et fait face à la Joconde dans la salle des États du Louvre.",
    },
    open_question: {
      question:
        "La censure de contenu sur Internet par les plateformes privées est-elle une protection nécessaire ou une atteinte à la liberté d'expression ?",
      notes:
        "Débat sur la modération du contenu, la responsabilité des grandes entreprises technologiques et les abus potentiels.",
    },
    did_you_know: {
      text: "La Russie possède la plus longue frontière terrestre du monde, s'étendant sur plus de 22 400 km à travers 14 pays.",
    },
  },
  {
    date: "2026-06-10",
    general_question: {
      question:
        "Quel est le plus grand désert de sable au monde (hors régions polaires) ?",
      answer: "Le Sahara.",
      explanation:
        "Le Sahara, qui couvre une grande partie de l'Afrique du Nord, est le plus grand désert chaud. ",
    },
    open_question: {
      question:
        "Le tourisme de masse est-il compatible avec la préservation des sites historiques et naturels ?",
      notes:
        "Débat sur les quotas d'accès, la dégradation des sites (ex: Venise, Machu Picchu) et l'économie locale.",
    },
    did_you_know: {
      text: "Les escargots ont environ 14 000 dents, situées sur leur langue appelée radula.",
    },
  },
  {
    date: "2026-06-11",
    general_question: {
      question: "Quelle est l'unité de mesure de la force ?",
      answer: "Le Newton (N).",
      explanation:
        "Nommé d'après Isaac Newton, $1 \text{Newton}$ est la force nécessaire pour accélérer une masse de $1 \text{kg}$ à raison de $1 \text{m/s}^2$ ($F = ma$).",
    },
    open_question: {
      question:
        "Les gouvernements devraient-ils imposer un temps de 'déconnexion' numérique obligatoire pour les citoyens ?",
      notes:
        "Débat sur le droit à la tranquillité, l'hyperconnexion et la santé mentale collective.",
    },
    did_you_know: {
      text: "Le seul État des États-Unis à produire du café est Hawaï.",
    },
  },
  {
    date: "2026-06-12",
    general_question: {
      question:
        "Quel pays a remporté la première Coupe du Monde de football organisée en Afrique (2010) ?",
      answer: "L'Espagne.",
      explanation:
        "L'Espagne a battu les Pays-Bas en finale à Johannesburg (Afrique du Sud), sur un but d'Andrés Iniesta.",
    },
    open_question: {
      question:
        "Faut-il mettre fin au secret bancaire dans tous les pays pour lutter contre l'évasion fiscale et le blanchiment d'argent ?",
      notes:
        "Débat sur la souveraineté fiscale, la protection des données et la justice économique mondiale.",
    },
    did_you_know: {
      text: "La température la plus chaude jamais enregistrée sur Terre est de $56,7^{circ}\text{C}$ dans la Vallée de la Mort, en Californie, en 1913.",
    },
  },
  {
    date: "2026-06-13",
    general_question: {
      question:
        "Qui a inventé l'imprimerie à caractères mobiles en Europe au $\text{XV}^e$ siècle ?",
      answer: "Johannes Gutenberg.",
      explanation:
        "Son invention (vers 1440) a permis la diffusion rapide du savoir et est considérée comme l'une des inventions les plus importantes de l'histoire.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles imposer le port d'un uniforme pour réduire les inégalités sociales et la pression de la mode ?",
      notes:
        "Débat sur l'égalité, l'expression individuelle et le coût d'un uniforme scolaire.",
    },
    did_you_know: {
      text: "La foudre frappe les hommes beaucoup plus souvent que les femmes (environ 5 fois plus), bien que la raison exacte soit encore débattue (exposition professionnelle, comportement).",
    },
  },
  {
    date: "2026-06-14",
    general_question: {
      question:
        "Quel est le nom de l'instrument de musique composé de 88 touches ?",
      answer: "Le Piano.",
      explanation:
        "Un piano moderne standard possède 52 touches blanches et 36 touches noires, soit un total de 88 touches.",
    },
    open_question: {
      question:
        "Faut-il réglementer la durée maximale de travail par semaine (32 heures, 4 jours) pour améliorer le bien-être général ?",
      notes:
        "Débat sur la productivité, le stress professionnel et l'équilibre vie privée/vie professionnelle.",
    },
    did_you_know: {
      text: "Le 14 juin est la 'Journée mondiale du donneur de sang', visant à sensibiliser au besoin de dons sûrs.",
    },
  },
  {
    date: "2026-06-15",
    general_question: {
      question: "Quel est l'élément chimique avec le symbole 'Au' ?",
      answer: "L'Or.",
      explanation:
        "Le symbole Au vient du mot latin aurum. L'or est un métal de transition, précieux et inaltérable.",
    },
    open_question: {
      question:
        "L'exploration des fonds marins est-elle plus importante pour l'humanité que l'exploration spatiale ?",
      notes:
        "Débat sur la biodiversité marine (encore largement inexplorée) vs. les avancées technologiques spatiales.",
    },
    did_you_know: {
      text: "Un 'parsec' est une unité de mesure de distance utilisée en astronomie, équivalant à environ 3,26 années-lumière.",
    },
  },
  {
    date: "2026-06-16",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' (compenser les émissions) est-il une solution écologique viable ou un permis de polluer pour les entreprises ?",
      notes:
        "Débat sur l'efficacité de la compensation (plantation d'arbres) face à la nécessité de la réduction absolue.",
    },
    did_you_know: {
      text: "Les nuages portent des noms latins pour décrire leur apparence (cumulus, cirrus, stratus) inventés par Luke Howard en 1803.",
    },
  },
  {
    date: "2026-06-17",
    general_question: {
      question:
        "Quel est le nom de la péninsule partagée par l'Espagne et le Portugal ?",
      answer: "La péninsule Ibérique.",
      explanation:
        "La péninsule est située à l'extrémité sud-ouest de l'Europe et est bordée par la mer Méditerranée et l'océan Atlantique.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de propriété pour des raisons écologiques (ex: interdiction de construire sur certaines terres naturelles) ?",
      notes:
        "Débat sur le droit individuel versus l'intérêt général de la préservation de l'environnement.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-06-18",
    general_question: {
      question:
        "Quel scientifique a découvert la loi de la gravitation universelle ?",
      answer: "Isaac Newton.",
      explanation:
        "Newton a formulé cette loi dans son ouvrage 'Philosophiae Naturalis Principia Mathematica' (1687), décrivant la force d'attraction entre deux masses.",
    },
    open_question: {
      question:
        "L'éducation civique devrait-elle inclure des cours obligatoires sur la vérification des sources (fact-checking) et la pensée critique ?",
      notes:
        "Débat sur la lutte contre la désinformation (fake news) et le rôle de l'école dans la formation d'un citoyen éclairé.",
    },
    did_you_know: {
      text: "Le mont Everest s'agrandit d'environ 4 millimètres par an en raison du mouvement des plaques tectoniques, un phénomène appelé l'orogenèse.",
    },
  },
  {
    date: "2026-06-19",
    general_question: {
      question:
        "Quel est le nom de l'explorateur portugais crédité du premier tour du monde (bien qu'il soit mort en cours de route) ?",
      answer: "Fernand de Magellan.",
      explanation:
        "Magellan a initié l'expédition en 1519. Il est mort aux Philippines en 1521, mais son navire, le Victoria, a complété le voyage en 1522.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion criminelle et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "Les papillons goûtent avec leurs pieds (ils possèdent des chimiorécepteurs sur les pattes).",
    },
  },
  {
    date: "2026-06-20",
    general_question: {
      question:
        "Quelle est la science qui étudie le comportement des animaux dans leur environnement naturel ?",
      answer: "L'Éthologie.",
      explanation:
        "L'éthologie est l'étude scientifique et objective du comportement animal, souvent par observation de terrain.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de divulguer les algorithmes utilisés pour prendre des décisions importantes (recrutement, prêts) ?",
      notes:
        "Débat sur la transparence des algorithmes et le risque de biais dans les systèmes automatisés.",
    },
    did_you_know: {
      text: "Le 20 juin est le jour le plus long de l'année dans l'hémisphère nord (solstice d'été), le moment où la durée du jour est maximale.",
    },
  },
  {
    date: "2026-06-21",
    general_question: {
      question:
        "Quel est l'élément chimique essentiel aux plantes pour la photosynthèse, qui leur donne leur couleur verte ?",
      answer: "Le Magnésium (Mg).",
      explanation:
        "Le Magnésium est un constituant central de la molécule de chlorophylle, qui capte la lumière.",
    },
    open_question: {
      question:
        "L'art doit-il être financé principalement par des fonds publics ou par des mécènes privés ?",
      notes:
        "Débat sur l'indépendance artistique, l'accès à la culture et la politique budgétaire.",
    },
    did_you_know: {
      text: "Le jour le plus long de l'année est le solstice d'été, qui tombe généralement le 20 ou le 21 juin.",
    },
  },
  {
    date: "2026-06-22",
    general_question: {
      question: "Quel est le nom du gaz noble le plus léger ?",
      answer: "L'Hélium (He).",
      explanation:
        "L'hélium est le deuxième élément le plus abondant dans l'univers après l'hydrogène. C'est un gaz inerte utilisé pour gonfler les ballons et dans l'IRM.",
    },
    open_question: {
      question:
        "Faut-il taxer les transactions financières spéculatives pour financer les services sociaux ?",
      notes:
        "Débat sur la 'taxe Tobin', la stabilité financière et la redistribution des richesses.",
    },
    did_you_know: {
      text: "La plus ancienne loi toujours en vigueur au monde est celle sur les feux de circulation au Royaume-Uni (datant de 1865).",
    },
  },
  {
    date: "2026-06-23",
    general_question: {
      question:
        "Quel est l'organe qui consomme le plus d'oxygène dans le corps humain ?",
      answer: "Le cerveau.",
      explanation:
        "Bien qu'il ne représente qu'environ 2% du poids corporel, le cerveau consomme près de 20% de l'oxygène total du corps au repos.",
    },
    open_question: {
      question:
        "Les voyages internationaux devraient-ils être limités pour les particuliers, et réservés aux nécessités professionnelles ou humanitaires ?",
      notes:
        "Débat sur la réduction de l'empreinte carbone personnelle et l'impact sur le tourisme et les échanges culturels.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-06-24",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "L'agriculture biologique est-elle la seule voie possible pour une alimentation saine et durable ?",
      notes:
        "Débat sur la productivité, l'utilisation des pesticides et le coût pour le consommateur.",
    },
    did_you_know: {
      text: "La baleine bleue, le plus grand animal de la planète, a un cœur de la taille d'une petite voiture, et son bruit peut être entendu à des kilomètres.",
    },
  },
  {
    date: "2026-06-25",
    general_question: {
      question: "Qui a fondé l'entreprise automobile Ford ?",
      answer: "Henry Ford.",
      explanation:
        "Henry Ford a fondé la Ford Motor Company en 1903. Il est célèbre pour avoir introduit la production en série basée sur le travail à la chaîne (le fordisme).",
    },
    open_question: {
      question:
        "Faut-il interdire l'utilisation des animaux sauvages dans les cirques et les spectacles itinérants ?",
      notes:
        "Débat sur le bien-être animal, la tradition culturelle et les alternatives éthiques au spectacle.",
    },
    did_you_know: {
      text: "La statue de la Liberté à New York était à l'origine destinée à la ville de Port-Saïd, en Égypte, pour marquer l'entrée du canal de Suez.",
    },
  },
  {
    date: "2026-06-26",
    general_question: {
      question:
        "Quel prix littéraire français est souvent considéré comme le plus prestigieux ?",
      answer: "Le Prix Goncourt.",
      explanation:
        "Créé en 1903, le Goncourt est décerné à l'auteur du meilleur ouvrage d'imagination en prose de l'année.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité du net' (égalité de traitement des données) est-il essentiel pour la liberté d'Internet ?",
      notes:
        "Débat sur le contrôle des flux de données par les fournisseurs d'accès (FAI) et l'accès équitable à l'information.",
    },
    did_you_know: {
      text: "La langue la plus parlée dans le monde, en termes de locuteurs natifs, est le mandarin (chinois), devant l'espagnol et l'anglais.",
    },
  },
  {
    date: "2026-06-27",
    general_question: {
      question:
        "Quelle est la fleur traditionnellement offerte en France le 1er mai ?",
      answer: "Le muguet (Clochette de mai).",
      explanation:
        "Offrir du muguet est un porte-bonheur pour le mois de mai. Le 1er mai est aussi la Fête du Travail dans de nombreux pays.",
    },
    open_question: {
      question:
        "Les syndicats ont-ils encore un rôle pertinent dans la défense des droits des travailleurs de l'économie numérique (freelance, plateformes) ?",
      notes:
        "Débat sur l'organisation des travailleurs indépendants, la précarité et les nouvelles formes d'emploi.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-06-28",
    general_question: {
      question: "Quel est le plus grand État d'Afrique par sa superficie ?",
      answer: "L'Algérie.",
      explanation:
        "Depuis la partition du Soudan en 2011, l'Algérie est le plus vaste pays du continent africain.",
    },
    open_question: {
      question:
        "Le cinéma devrait-il être davantage subventionné par l'État pour garantir la diversité culturelle face aux superproductions ?",
      notes:
        "Débat sur l'industrie culturelle, la qualité artistique et la concurrence des plateformes de streaming.",
    },
    did_you_know: {
      text: "La plus vieille créature marine encore vivante est une éponge d'une espèce non identifiée, découverte à 2 134 mètres de profondeur et estimée à 10 000 ans.",
    },
  },
  {
    date: "2026-06-29",
    general_question: {
      question:
        "Quel pays a pour langue officielle le portugais en Amérique du Sud ?",
      answer: "Le Brésil.",
      explanation:
        "Le Brésil a été colonisé par le Portugal, tandis que la plupart des autres pays d'Amérique du Sud parlent l'espagnol.",
    },
    open_question: {
      question:
        "Faut-il former des armées de 'soldats-robots' (entièrement autonomes) pour réduire les pertes humaines dans les conflits ?",
      notes:
        "Débat sur l'éthique de la guerre automatisée, le droit international et le risque de déshumanisation des conflits.",
    },
    did_you_know: {
      text: "La plus petite quantité de matière observable est le quark, qui est un constituant des protons et des neutrons.",
    },
  },
  {
    date: "2026-06-30",
    general_question: {
      question:
        "Quel prix scientifique est souvent considéré comme l'équivalent du Prix Nobel en mathématiques ?",
      answer: "La Médaille Fields.",
      explanation:
        "Elle est décernée tous les quatre ans à des mathématiciens de moins de 40 ans. (Il n'y a pas de Prix Nobel en mathématiques).",
    },
    open_question: {
      question:
        "La liberté des médias est-elle menacée par la pression des annonceurs et la recherche du 'clic' à tout prix ?",
      notes:
        "Débat sur le modèle économique des médias, la qualité de l'information et le journalisme d'investigation.",
    },
    did_you_know: {
      text: "Le 4 mai est souvent célébré comme le 'Star Wars Day' en raison du jeu de mots 'May the Fourth be with you' (May the Force be with you).",
    },
  },

  // Jours 189 à 200 : Juillet 2026 (12 jours)
  {
    date: "2026-07-01",
    general_question: {
      question: "Quelle ville est la capitale de l'Australie ?",
      answer: "Canberra.",
      explanation:
        "Contrairement à la croyance populaire, Sydney et Melbourne ne sont pas la capitale. Canberra a été choisie comme compromis entre les deux villes rivales en 1908.",
    },
    open_question: {
      question:
        "Faut-il interdire l'utilisation des animaux sauvages dans les cirques et les spectacles itinérants ?",
      notes:
        "Débat sur le bien-être animal, la tradition culturelle et les alternatives éthiques au spectacle.",
    },
    did_you_know: {
      text: "Le seul animal domestique qui ne figure pas sur l'Arche de Noé est le chat (selon certaines interprétations du récit biblique).",
    },
  },
  {
    date: "2026-07-02",
    general_question: {
      question: "Quel est le nom de la science qui étudie les champignons ?",
      answer: "La mycologie.",
      explanation:
        "La mycologie est une branche de la biologie qui se concentre sur les champignons, leurs propriétés, leur classification et leurs usages.",
    },
    open_question: {
      question:
        "Les pays riches ont-ils une obligation morale de compenser les pays pauvres pour les dommages causés par le changement climatique ?",
      notes:
        "Débat sur la justice climatique, la dette historique et les fonds de 'pertes et dommages'.",
    },
    did_you_know: {
      text: "La Station Spatiale Internationale (ISS) orbite autour de la Terre à environ 28 000 km/h, effectuant 16 révolutions complètes par jour.",
    },
  },
  {
    date: "2026-07-03",
    general_question: {
      question:
        "Quel écrivain français est l'auteur des 'Trois Mousquetaires' ?",
      answer: "Alexandre Dumas.",
      explanation:
        "Ce roman historique d'aventure (1844) raconte les exploits de d'Artagnan et de ses amis Athos, Porthos et Aramis, avec la célèbre devise : 'Un pour tous, tous pour un'.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "Un chameau peut boire jusqu'à 150 litres d'eau en moins de 15 minutes.",
    },
  },
  {
    date: "2026-07-04",
    general_question: {
      question:
        "Quel événement historique majeur est commémoré le 4 juillet aux États-Unis ?",
      answer: "La Déclaration d'Indépendance.",
      explanation:
        "Le 4 juillet 1776, le Congrès a adopté la Déclaration d'Indépendance, séparant les treize colonies britanniques.",
    },
    open_question: {
      question:
        "L'individualisme croissant dans les sociétés occidentales est-il une libération ou une cause de l'isolement social ?",
      notes:
        "Débat sur la liberté personnelle, la cohésion communautaire et l'impact sur les liens interpersonnels.",
    },
    did_you_know: {
      text: "Les feux d'artifice ont été inventés en Chine au $\text{VII}^e$ siècle de notre ère.",
    },
  },
  {
    date: "2026-07-05",
    general_question: {
      question: "Quel est le nom de la péninsule où se trouve la Mecque ?",
      answer: "La péninsule Arabique.",
      explanation:
        "La Mecque, ville sainte de l'Islam, est située dans la région du Hedjaz, dans l'actuelle Arabie saoudite.",
    },
    open_question: {
      question:
        "L'accès à la culture (musées, concerts, livres) devrait-il être gratuit pour tous les citoyens ?",
      notes:
        "Débat sur le financement de la culture, la démocratisation de l'accès et le rôle de l'État.",
    },
    did_you_know: {
      text: "Les dauphins dorment avec un seul œil fermé. Ils alternent les hémisphères de leur cerveau pour pouvoir rester à la fois vigilants et en repos.",
    },
  },
  {
    date: "2026-07-06",
    general_question: {
      question: "Quel est le nom donné au phénomène de la queue d'une comète ?",
      answer: "La chevelure (ou la queue).",
      explanation:
        "La queue, ou coma, est formée par les gaz et les poussières sublimés sous l'effet du vent solaire, et pointe toujours à l'opposé du Soleil.",
    },
    open_question: {
      question:
        "Faut-il interdire l'usage des téléphones portables aux enfants de moins de 13 ans, y compris à l'école ?",
      notes:
        "Débat sur la sécurité en ligne, l'impact sur la concentration et le développement social des enfants.",
    },
    did_you_know: {
      text: "Le son produit par le craquement des doigts est dû à l'éclatement de bulles de gaz dans le liquide synovial des articulations.",
    },
  },
  {
    date: "2026-07-07",
    general_question: {
      question:
        "Quel est le plus grand désert chaud du monde (le plus grand désert tout court) ?",
      answer: "Le Sahara.",
      explanation:
        "Un désert est défini par ses faibles précipitations annuelles. Le Sahara, bien que chaud, est le plus grand désert subtropical.",
    },
    open_question: {
      question:
        "L'utilisation d'assistants vocaux (Alexa, Google Home) est-elle un bénéfice pratique ou une intrusion dans la vie privée ?",
      notes:
        "Débat sur la collecte de données, l'écoute permanente et le consentement des utilisateurs.",
    },
    did_you_know: {
      text: "Le mot 'buffet' a été emprunté de la langue française par l'anglais, mais la prononciation est souvent différente (le 't' est souvent silencieux en français).",
    },
  },
  {
    date: "2026-07-08",
    general_question: {
      question: "Quel est le nom du plus long fleuve du monde ?",
      answer: "L'Amazone.",
      explanation:
        "Bien que le Nil ait longtemps été considéré comme le plus long, des études récentes (2007) confirment que l'Amazone le dépasse légèrement, atteignant environ 7 062 km.",
    },
    open_question: {
      question:
        "Devrait-on autoriser la création de réserves naturelles entièrement gérées par l'intelligence artificielle pour la protection de la faune ?",
      notes:
        "Débat sur l'efficacité des systèmes automatisés face à l'expertise humaine et l'éthique de la gestion des écosystèmes.",
    },
    did_you_know: {
      text: "Le drapeau de la Californie, 'Bear Flag', porte un ours grizzly, mais aucun ours grizzly sauvage n'a été vu en Californie depuis 1922.",
    },
  },
  {
    date: "2026-07-09",
    general_question: {
      question: "Quel est l'élément chimique avec le symbole 'Fe' ?",
      answer: "Le Fer.",
      explanation:
        "Le symbole Fe vient du mot latin 'ferrum'. Le fer est un métal essentiel à la vie, notamment dans l'hémoglobine du sang.",
    },
    open_question: {
      question:
        "Le droit à l'oubli numérique devrait-il être étendu à toutes les informations personnelles en ligne ?",
      notes:
        "Débat sur l'effacement des données, la mémoire d'Internet et la liberté d'information.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est d'environ 356 400 kilomètres.",
    },
  },
  {
    date: "2026-07-10",
    general_question: {
      question:
        "Quel peintre espagnol est associé au mouvement du Surréalisme et à l'œuvre 'La Persistance de la mémoire' ?",
      answer: "Salvador Dalí.",
      explanation:
        "Ce tableau, souvent appelé 'Les montres molles', est l'une des images les plus célèbres du Surréalisme.",
    },
    open_question: {
      question:
        "Le salaire universel de base (revenu de base) est-il une solution économique viable pour l'avenir ?",
      notes:
        "Débat sur l'impact sur le travail, l'égalité sociale et le financement d'un revenu inconditionnel.",
    },
    did_you_know: {
      text: "Il y a plus d'arbres sur Terre qu'il n'y a d'étoiles dans la Voie Lactée (environ 3 000 milliards d'arbres contre 100 à 400 milliards d'étoiles).",
    },
  },
  {
    date: "2026-07-11",
    general_question: {
      question: "Quel pays a remporté la Coupe du Monde de football en 2010 ?",
      answer: "L'Espagne.",
      explanation:
        "L'Espagne a battu les Pays-Bas en finale en Afrique du Sud. ",
    },
    open_question: {
      question:
        "L'exploration des fonds marins est-elle plus importante pour l'humanité que l'exploration spatiale ?",
      notes:
        "Débat sur l'allocation des ressources entre la connaissance de la Terre (océans) et la quête de l'extérieur (espace).",
    },
    did_you_know: {
      text: "L'odeur de la pluie est appelée 'pétrichor'. Elle est due à un mélange d'huiles végétales et d'une substance chimique produite par des bactéries, la géosmine.",
    },
  },
  {
    date: "2026-07-12",
    general_question: {
      question:
        "Quelle loi de la physique stipule que 'l'énergie ne peut être ni créée ni détruite, seulement transformée' ?",
      answer: "Le premier principe de la thermodynamique.",
      explanation:
        "Ce principe est également connu sous le nom de loi de la conservation de l'énergie.",
    },
    open_question: {
      question:
        "L'accès gratuit et illimité à l'information en ligne est-il un droit fondamental dans la société moderne ?",
      notes:
        "Débat sur la neutralité du net, le financement de l'information et les barrières économiques ou géographiques.",
    },
    did_you_know: {
      text: "Le Mont Everest, mesuré à 8 848,86 mètres, continue de grandir d'environ 4 millimètres par an en raison du mouvement des plaques tectoniques.",
    },

    // Jours 201 à 231 : Juillet (19 jours restants) & Août 2026 (12 premiers jours)

    date: "2026-07-13",
    general_question: {
      question:
        "Quel empereur romain a légalisé le christianisme avec l'Édit de Milan en 313 apr. J.-C. ?",
      answer: "Constantin Ier.",
      explanation:
        "Constantin a mis fin à la persécution des chrétiens dans l'Empire romain, ce qui a été un tournant majeur pour la religion.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion criminelle et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "L'Électricité statique (celle qui fait coller un ballon à un pull) est due à un déséquilibre de charges électriques (électrons) entre deux surfaces.",
    },
  },
  {
    date: "2026-07-14",
    general_question: {
      question:
        "Quel événement historique majeur est commémoré le 14 juillet en France ?",
      answer:
        "La Fête de la Fédération (1790), qui commémorait la Prise de la Bastille (1789).",
      explanation:
        "Bien que souvent associée à la prise de la Bastille, le 14 juillet célèbre officiellement la Fête de la Fédération, symbole de l'unité nationale.",
    },
    open_question: {
      question:
        "La croissance de la population mondiale est-elle le problème écologique principal, devant la surconsommation des pays riches ?",
      notes:
        "Débat sur la pression démographique versus l'empreinte carbone et l'inégalité de la consommation par habitant.",
    },
    did_you_know: {
      text: "L'Hymne national français 'La Marseillaise' a été composé par Claude Joseph Rouget de Lisle en 1792.",
    },
  },
  {
    date: "2026-07-15",
    general_question: {
      question: "Quel est le plus grand récif corallien du monde ?",
      answer: "La Grande Barrière de Corail.",
      explanation:
        "Située au large de l'Australie, elle s'étend sur plus de 2 300 kilomètres et est visible depuis l'espace.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être légalement contraintes de s'assurer que leurs chaînes d'approvisionnement sont éthiques et sans exploitation du travail ?",
      notes:
        "Débat sur la responsabilité sociale des entreprises, le 'fast-fashion' et le travail des enfants.",
    },
    did_you_know: {
      text: "La plus ancienne pyramide égyptienne n'est pas Gizeh, mais la Pyramide à degrés de Djoser, construite vers 2650 av. J.-C.",
    },
  },
  {
    date: "2026-07-16",
    general_question: {
      question:
        "Quel est le nom de l'instrument de musique composé de 88 touches ?",
      answer: "Le Piano.",
      explanation:
        "Un piano moderne standard possède 52 touches blanches et 36 touches noires, soit un total de 88 touches.",
    },
    open_question: {
      question:
        "Faut-il réglementer la durée maximale de travail par semaine (32 heures, 4 jours) pour améliorer le bien-être général ?",
      notes:
        "Débat sur la productivité, le stress professionnel et l'équilibre vie privée/vie professionnelle.",
    },
    did_you_know: {
      text: "Le 14 juin est la 'Journée mondiale du donneur de sang', visant à sensibiliser au besoin de dons sûrs.",
    },
  },
  {
    date: "2026-07-17",
    general_question: {
      question: "Quel est l'élément chimique avec le symbole 'Au' ?",
      answer: "L'Or.",
      explanation:
        "Le symbole Au vient du mot latin aurum. L'or est un métal de transition, précieux et inaltérable.",
    },
    open_question: {
      question:
        "L'exploration des fonds marins est-elle plus importante pour l'humanité que l'exploration spatiale ?",
      notes:
        "Débat sur la biodiversité marine (encore largement inexplorée) vs. les avancées technologiques spatiales.",
    },
    did_you_know: {
      text: "Un 'parsec' est une unité de mesure de distance utilisée en astronomie, équivalant à environ 3,26 années-lumière.",
    },
  },
  {
    date: "2026-07-18",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' (compenser les émissions) est-il une solution écologique viable ou un permis de polluer pour les entreprises ?",
      notes:
        "Débat sur l'efficacité de la compensation (plantation d'arbres) face à la nécessité de la réduction absolue.",
    },
    did_you_know: {
      text: "Les nuages portent des noms latins pour décrire leur apparence (cumulus, cirrus, stratus) inventés par Luke Howard en 1803.",
    },
  },
  {
    date: "2026-07-19",
    general_question: {
      question:
        "Quel est le nom de la péninsule partagée par l'Espagne et le Portugal ?",
      answer: "La péninsule Ibérique.",
      explanation:
        "La péninsule est située à l'extrémité sud-ouest de l'Europe et est bordée par la mer Méditerranée et l'océan Atlantique.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de propriété pour des raisons écologiques (ex: interdiction de construire sur certaines terres naturelles) ?",
      notes:
        "Débat sur le droit individuel versus l'intérêt général de la préservation de l'environnement.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-07-20",
    general_question: {
      question:
        "Quel scientifique a découvert la loi de la gravitation universelle ?",
      answer: "Isaac Newton.",
      explanation:
        "Newton a formulé cette loi dans son ouvrage 'Philosophiae Naturalis Principia Mathematica' (1687), décrivant la force d'attraction entre deux masses.",
    },
    open_question: {
      question:
        "L'éducation civique devrait-elle inclure des cours obligatoires sur la vérification des sources (fact-checking) et la pensée critique ?",
      notes:
        "Débat sur la lutte contre la désinformation (fake news) et le rôle de l'école dans la formation d'un citoyen éclairé.",
    },
    did_you_know: {
      text: "Le mont Everest s'agrandit d'environ 4 millimètres par an en raison du mouvement des plaques tectoniques, un phénomène appelé l'orogenèse.",
    },
  },
  {
    date: "2026-07-21",
    general_question: {
      question:
        "Quel est le nom de l'explorateur portugais crédité du premier tour du monde (bien qu'il soit mort en cours de route) ?",
      answer: "Fernand de Magellan.",
      explanation:
        "Magellan a initié l'expédition en 1519. Il est mort aux Philippines en 1521, mais son navire, le Victoria, a complété le voyage en 1522.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion criminelle et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "Les papillons goûtent avec leurs pieds (ils possèdent des chimiorécepteurs sur les pattes).",
    },
  },
  {
    date: "2026-07-22",
    general_question: {
      question:
        "Quel est le nom de la science qui étudie le comportement des animaux dans leur environnement naturel ?",
      answer: "L'Éthologie.",
      explanation:
        "L'éthologie est l'étude scientifique et objective du comportement animal, souvent par observation de terrain.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de divulguer les algorithmes utilisés pour prendre des décisions importantes (recrutement, prêts) ?",
      notes:
        "Débat sur la transparence des algorithmes et le risque de biais dans les systèmes automatisés.",
    },
    did_you_know: {
      text: "Le 20 juin est le jour le plus long de l'année dans l'hémisphère nord (solstice d'été), le moment où la durée du jour est maximale.",
    },
  },
  {
    date: "2026-07-23",
    general_question: {
      question:
        "Quel est l'élément chimique essentiel aux plantes pour la photosynthèse, qui leur donne leur couleur verte ?",
      answer: "Le Magnésium (Mg).",
      explanation:
        "Le Magnésium est un constituant central de la molécule de chlorophylle, qui capte la lumière.",
    },
    open_question: {
      question:
        "L'art doit-il être financé principalement par des fonds publics ou par des mécènes privés ?",
      notes:
        "Débat sur l'indépendance artistique, l'accès à la culture et la politique budgétaire.",
    },
    did_you_know: {
      text: "Le jour le plus long de l'année est le solstice d'été, qui tombe généralement le 20 ou le 21 juin.",
    },
  },
  {
    date: "2026-07-24",
    general_question: {
      question: "Quel est le nom du gaz noble le plus léger ?",
      answer: "L'Hélium (He).",
      explanation:
        "L'hélium est le deuxième élément le plus abondant dans l'univers après l'hydrogène. C'est un gaz inerte utilisé pour gonfler les ballons et dans l'IRM.",
    },
    open_question: {
      question:
        "Faut-il taxer les transactions financières spéculatives pour financer les services sociaux ?",
      notes:
        "Débat sur la 'taxe Tobin', la stabilité financière et la redistribution des richesses.",
    },
    did_you_know: {
      text: "La plus ancienne loi toujours en vigueur au monde est celle sur les feux de circulation au Royaume-Uni (datant de 1865).",
    },
  },
  {
    date: "2026-07-25",
    general_question: {
      question:
        "Quel est l'organe qui consomme le plus d'oxygène dans le corps humain ?",
      answer: "Le cerveau.",
      explanation:
        "Bien qu'il ne représente qu'environ 2% du poids corporel, le cerveau consomme près de 20% de l'oxygène total du corps au repos.",
    },
    open_question: {
      question:
        "Les voyages internationaux devraient-ils être limités pour les particuliers, et réservés aux nécessités professionnelles ou humanitaires ?",
      notes:
        "Débat sur la réduction de l'empreinte carbone personnelle et l'impact sur le tourisme et les échanges culturels.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-07-26",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "L'agriculture biologique est-elle la seule voie possible pour une alimentation saine et durable ?",
      notes:
        "Débat sur la productivité, l'utilisation des pesticides et le coût pour le consommateur.",
    },
    did_you_know: {
      text: "La baleine bleue, le plus grand animal de la planète, a un cœur de la taille d'une petite voiture, et son bruit peut être entendu à des kilomètres.",
    },
  },
  {
    date: "2026-07-27",
    general_question: {
      question: "Qui a fondé l'entreprise automobile Ford ?",
      answer: "Henry Ford.",
      explanation:
        "Henry Ford a fondé la Ford Motor Company en 1903. Il est célèbre pour avoir introduit la production en série basée sur le travail à la chaîne (le fordisme).",
    },
    open_question: {
      question:
        "Faut-il interdire l'utilisation des animaux sauvages dans les cirques et les spectacles itinérants ?",
      notes:
        "Débat sur le bien-être animal, la tradition culturelle et les alternatives éthiques au spectacle.",
    },
    did_you_know: {
      text: "La statue de la Liberté à New York était à l'origine destinée à la ville de Port-Saïd, en Égypte, pour marquer l'entrée du canal de Suez.",
    },
  },
  {
    date: "2026-07-28",
    general_question: {
      question:
        "Quel prix littéraire français est souvent considéré comme le plus prestigieux ?",
      answer: "Le Prix Goncourt.",
      explanation:
        "Créé en 1903, le Goncourt est décerné à l'auteur du meilleur ouvrage d'imagination en prose de l'année.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité du net' (égalité de traitement des données) est-il essentiel pour la liberté d'Internet ?",
      notes:
        "Débat sur le contrôle des flux de données par les fournisseurs d'accès (FAI) et l'accès équitable à l'information.",
    },
    did_you_know: {
      text: "La langue la plus parlée dans le monde, en termes de locuteurs natifs, est le mandarin (chinois), devant l'espagnol et l'anglais.",
    },
  },
  {
    date: "2026-07-29",
    general_question: {
      question:
        "Quelle est la fleur traditionnellement offerte en France le 1er mai ?",
      answer: "Le muguet (Clochette de mai).",
      explanation:
        "Offrir du muguet est un porte-bonheur pour le mois de mai. Le 1er mai est aussi la Fête du Travail dans de nombreux pays.",
    },
    open_question: {
      question:
        "Les syndicats ont-ils encore un rôle pertinent dans la défense des droits des travailleurs de l'économie numérique (freelance, plateformes) ?",
      notes:
        "Débat sur l'organisation des travailleurs indépendants, la précarité et les nouvelles formes d'emploi.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-07-30",
    general_question: {
      question: "Quel est le plus grand État d'Afrique par sa superficie ?",
      answer: "L'Algérie.",
      explanation:
        "Depuis la partition du Soudan en 2011, l'Algérie est le plus vaste pays du continent africain.",
    },
    open_question: {
      question:
        "Le cinéma devrait-il être davantage subventionné par l'État pour garantir la diversité culturelle face aux superproductions ?",
      notes:
        "Débat sur l'industrie culturelle, la qualité artistique et la concurrence des plateformes de streaming.",
    },
    did_you_know: {
      text: "La plus vieille créature marine encore vivante est une éponge d'une espèce non identifiée, découverte à 2 134 mètres de profondeur et estimée à 10 000 ans.",
    },
  },
  {
    date: "2026-07-31",
    general_question: {
      question:
        "Quel pays a pour langue officielle le portugais en Amérique du Sud ?",
      answer: "Le Brésil.",
      explanation:
        "Le Brésil a été colonisé par le Portugal, tandis que la plupart des autres pays d'Amérique du Sud parlent l'espagnol.",
    },
    open_question: {
      question:
        "Faut-il former des armées de 'soldats-robots' (entièrement autonomes) pour réduire les pertes humaines dans les conflits ?",
      notes:
        "Débat sur l'éthique de la guerre automatisée, le droit international et le risque de déshumanisation des conflits.",
    },
    did_you_know: {
      text: "La plus petite quantité de matière observable est le quark, qui est un constituant des protons et des neutrons.",
    },
  },
  {
    date: "2026-08-01",
    general_question: {
      question:
        "Quel prix scientifique est souvent considéré comme l'équivalent du Prix Nobel en mathématiques ?",
      answer: "La Médaille Fields.",
      explanation:
        "Elle est décernée tous les quatre ans à des mathématiciens de moins de 40 ans. (Il n'y a pas de Prix Nobel en mathématiques).",
    },
    open_question: {
      question:
        "La liberté des médias est-elle menacée par la pression des annonceurs et la recherche du 'clic' à tout prix ?",
      notes:
        "Débat sur le modèle économique des médias, la qualité de l'information et le journalisme d'investigation.",
    },
    did_you_know: {
      text: "Le 4 mai est souvent célébré comme le 'Star Wars Day' en raison du jeu de mots 'May the Fourth be with you' (May the Force be with you).",
    },
  },
  {
    date: "2026-08-02",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Vatican qui abrite le plafond de Michel-Ange ?",
      answer: "La Chapelle Sixtine.",
      explanation:
        "Bien que techniquement une chapelle du palais apostolique, elle fait partie du complexe des Musées du Vatican et est célèbre pour ses fresques.",
    },
    open_question: {
      question:
        "L'industrie du jeu vidéo devrait-elle être tenue responsable de la représentation stéréotypée et violente de certains groupes sociaux ?",
      notes:
        "Débat sur la liberté de création, l'impact sur les joueurs et les lois sur le contenu numérique.",
    },
    did_you_know: {
      text: "Le chili est en fait un fruit (une baie), et ses graines ne sont pas ce qui rend la plante piquante, mais le tissu qui les entoure (le placenta).",
    },
  },
  {
    date: "2026-08-03",
    general_question: {
      question:
        "Quel est le plus grand volcan du système solaire, situé sur Mars ?",
      answer: "L'Olympus Mons.",
      explanation:
        "Avec une hauteur de 21,9 km, l'Olympus Mons (Mont Olympe) est près de trois fois plus haut que l'Everest.",
    },
    open_question: {
      question:
        "Faut-il imposer des cours obligatoires de cuisine et de nutrition pour lutter contre l'obésité et les maladies associées ?",
      notes:
        "Débat sur l'éducation à la santé, la responsabilité individuelle et le rôle de l'école dans l'alimentation.",
    },
    did_you_know: {
      text: "La première monnaie métallique a été utilisée en Lydie (Turquie actuelle) vers 600 av. J.-C.",
    },
  },
  {
    date: "2026-08-04",
    general_question: {
      question:
        "Quel est le nom de la seule planète du système solaire qui tourne sur elle-même dans le sens des aiguilles d'une montre ?",
      answer: "Vénus.",
      explanation:
        "La rotation rétrograde de Vénus est une anomalie par rapport aux autres planètes.",
    },
    open_question: {
      question:
        "Les lanceurs d'alerte (whistleblowers) devraient-ils bénéficier d'une immunité totale pour les informations qu'ils révèlent ?",
      notes:
        "Débat sur la protection des sources, l'intérêt public et la sécurité nationale.",
    },
    did_you_know: {
      text: "La plus petite distance entre deux points dans l'espace-temps n'est pas une ligne droite, mais une géodésique (une courbe).",
    },
  },
  {
    date: "2026-08-05",
    general_question: {
      question:
        "Quel événement historique majeur est commémoré le 8 mai en France et dans d'autres pays alliés ?",
      answer:
        "La Victoire de 1945 (fin de la Seconde Guerre mondiale en Europe).",
      explanation:
        "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie face aux Alliés.",
    },
    open_question: {
      question:
        "Le service militaire ou civique obligatoire (mixte) est-il nécessaire pour renforcer l'unité nationale et le sens des responsabilités ?",
      notes:
        "Débat sur les coûts, la liberté individuelle et l'efficacité d'une formation civique et militaire.",
    },
    did_you_know: {
      text: "Le mot 'ambulance' vient du français 'hôpital ambulant', utilisé pour désigner les hôpitaux mobiles lors des guerres napoléoniennes.",
    },
  },
  {
    date: "2026-08-06",
    general_question: {
      question:
        "Quel animal est le symbole national de la Chine et est considéré comme une espèce menacée ?",
      answer: "Le Panda géant.",
      explanation:
        "Le panda est originaire des régions montagneuses du centre de la Chine et est un symbole mondial de la conservation de la faune.",
    },
    open_question: {
      question:
        "La régulation de la taille et de la concentration des grandes entreprises technologiques (GAFA) est-elle suffisante pour empêcher les monopoles ?",
      notes:
        "Débat sur le droit de la concurrence, la protection des données et le pouvoir politique des multinationales.",
    },
    did_you_know: {
      text: "Les astronautes qui travaillent à l'extérieur de l'ISS doivent porter des couches pour adultes, car il n'y a pas de toilettes dans leur combinaison spatiale.",
    },
  },
  {
    date: "2026-08-07",
    general_question: {
      question:
        "Quel artiste est l'auteur de la célèbre sculpture 'Le Penseur' ?",
      answer: "Auguste Rodin.",
      explanation:
        "Créée à l'origine en 1880, cette sculpture en bronze représente un homme en méditation profonde.",
    },
    open_question: {
      question:
        "Les réseaux sociaux devraient-ils être contraints d'utiliser des algorithmes qui favorisent le contenu 'positif' ou 'éducatif' ?",
      notes:
        "Débat sur l'impact sur le bien-être, la liberté algorithmique et le risque de censure du contenu critique.",
    },
    did_you_know: {
      text: "Le seul oiseau capable de voir la couleur bleue est le pigeon.",
    },
  },
  {
    date: "2026-08-08",
    general_question: {
      question: "Quelle est l'unité de mesure de la puissance électrique ?",
      answer: "Le Watt (W).",
      explanation:
        "Le Watt est l'unité SI de la puissance, nommée d'après l'inventeur écossais James Watt.",
    },
    open_question: {
      question:
        "Faut-il développer l'énergie de fusion nucléaire (qui promet une énergie quasi-illimitée et propre) au détriment de l'énergie de fission (nucléaire classique) ?",
      notes:
        "Débat sur l'horizon technologique (ITER), les coûts de recherche et la nécessité d'une production d'énergie immédiate.",
    },
    did_you_know: {
      text: "Le cri d'une mouche est appelé le 'bourdonnement'.",
    },
  },
  {
    date: "2026-08-09",
    general_question: {
      question: "Quel est le nom du plus grand océan de la Terre ?",
      answer: "L'océan Pacifique.",
      explanation:
        "Il est si vaste qu'il couvre près d'un tiers de la surface terrestre.",
    },
    open_question: {
      question:
        "L'apprentissage des langues mortes (latin, grec ancien) est-il encore pertinent dans le système éducatif moderne ?",
      notes:
        "Débat sur l'importance des racines culturelles, l'étymologie et la nécessité de préparer aux métiers du futur.",
    },
    did_you_know: {
      text: "Le pont de Londres que l'on voit souvent en photo n'est pas le 'London Bridge' historique, mais le 'Tower Bridge'.",
    },
  },
  {
    date: "2026-08-10",
    general_question: {
      question: "Quel pays a pour capitale La Havane ?",
      answer: "Cuba.",
      explanation:
        "La Havane est la capitale et la plus grande ville de Cuba. Elle est célèbre pour son architecture coloniale et ses voitures anciennes.",
    },
    open_question: {
      question:
        "La surveillance biométrique (empreintes, iris) dans les lieux publics est-elle une atteinte intolérable à la liberté ?",
      notes:
        "Débat sur le droit à l'anonymat, la sécurité et la traçabilité des individus par l'État.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-08-11",
    general_question: {
      question:
        "Quel est le nom de l'hormone du sommeil, souvent utilisée pour traiter les troubles du sommeil ?",
      answer: "La Mélatonine.",
      explanation:
        "La mélatonine est sécrétée par la glande pinéale. Sa production est stimulée par l'obscurité, signalant au corps qu'il est temps de dormir.",
    },
    open_question: {
      question:
        "Les cryptomonnaies peuvent-elles réellement remplacer les monnaies fiduciaires traditionnelles (Euro, Dollar) ?",
      notes:
        "Débat sur la volatilité, la régulation, la confiance et le rôle des banques centrales.",
    },
    did_you_know: {
      text: "La plus petite cellule du corps humain est le spermatozoïde, et la plus grande est l'ovule.",
    },
  },
  {
    date: "2026-08-12",
    general_question: {
      question: "Quelle était la capitale de l'Empire byzantin ?",
      answer: "Constantinople (aujourd'hui Istanbul).",
      explanation:
        "Fondée par l'empereur Constantin Ier en 330 apr. J.-C., elle a été le centre de l'Empire romain d'Orient pendant plus de mille ans.",
    },
    open_question: {
      question:
        "Faut-il limiter l'accès aux forêts et aux zones naturelles pour les protéger de la surfréquentation touristique ?",
      notes:
        "Débat sur l'écotourisme, le droit d'accès à la nature et la conservation des écosystèmes.",
    },
    did_you_know: {
      text: "Le Soleil est techniquement une étoile naine jaune de type G, mais elle est en fait blanche vue de l'espace.",
    },
  },

  // Jours 232 à 262 : Août (19 jours restants) & Septembre 2026 (12 premiers jours)
  {
    date: "2026-08-13",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Andromède est une galaxie spirale géante située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Zone de l'Océan Pacifique' est si lointaine qu'il y a plus de chance d'y rencontrer un astronaute que n'importe qui d'autre (c'est le cimetière des engins spatiaux).",
    },
  },
  {
    date: "2026-08-14",
    general_question: {
      question: "Quel est le nom du plus grand lac salé du monde ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Bien qu'appelée 'mer', elle est techniquement le plus grand lac du monde en superficie (environ $371 000 \text{km}^2$).",
    },
    open_question: {
      question:
        "L'éducation religieuse devrait-elle être laissée entièrement aux familles et aux institutions religieuses, ou faire partie de l'école publique ?",
      notes:
        "Débat sur la neutralité de l'État, le pluralisme et la transmission des valeurs.",
    },
    did_you_know: {
      text: "Le corps humain est constitué d'environ 60% d'eau.",
    },
  },
  {
    date: "2026-08-15",
    general_question: {
      question:
        "Quel est le principal composant de la coquille d'un œuf de poule ?",
      answer: "Le Carbonate de Calcium ($\text{CaCO}_3$).",
      explanation:
        "Le carbonate de calcium est une substance très solide qui protège l'œuf et est également présente dans le calcaire et le marbre.",
    },
    open_question: {
      question:
        "Faut-il taxer davantage les produits importés pour encourager la production locale et réduire l'empreinte carbone du transport ?",
      notes:
        "Débat sur le protectionnisme, les accords commerciaux internationaux et l'autonomie alimentaire.",
    },
    did_you_know: {
      text: "Le seul continent qui n'a pas de glaciers est l'Australie.",
    },
  },
  {
    date: "2026-08-16",
    general_question: {
      question:
        "Qui est l'auteur des romans policiers 'Dix Petits Nègres' et 'Le Crime de l'Orient-Express' ?",
      answer: "Agatha Christie.",
      explanation:
        "Agatha Christie est l'une des romancières les plus vendues de tous les temps.",
    },
    open_question: {
      question:
        "L'accès à l'information sur Internet devrait-il être payant pour garantir la qualité et la pérennité du journalisme ?",
      notes:
        "Débat sur le 'paywall', le modèle économique des médias et l'accès gratuit à la connaissance.",
    },
    did_you_know: {
      text: "Le mot 'nerd' (intello) a été inventé par le Dr Seuss dans son livre 'If I Ran the Zoo' en 1950.",
    },
  },
  {
    date: "2026-08-17",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Royaume-Uni, connu pour abriter la Pierre de Rosette ?",
      answer: "Le British Museum.",
      explanation:
        "Situé à Londres, le British Museum possède des collections couvrant l'histoire, l'art et la culture humaines.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'biens partagés' (voitures, outils, logements) pour lutter contre la surconsommation et l'individualisme ?",
      notes:
        "Débat sur l'économie collaborative, la propriété privée et l'efficacité des ressources.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas composés de vapeur d'eau (qui est un gaz invisible), mais de minuscules gouttelettes d'eau liquide ou de cristaux de glace en suspension.",
    },
  },
  {
    date: "2026-08-18",
    general_question: {
      question: "Quel est le plus haut sommet d'Afrique ?",
      answer: "Le Mont Kilimandjaro.",
      explanation:
        "Situé en Tanzanie, il est le plus haut sommet isolé du monde.",
    },
    open_question: {
      question:
        "Le droit au suicide assisté devrait-il être étendu aux personnes qui ne sont pas en phase terminale, mais dont la souffrance psychologique est jugée insupportable ?",
      notes:
        "Débat sur l'autonomie, l'évaluation de la souffrance et la définition de la dignité de la fin de vie.",
    },
    did_you_know: {
      text: "Le plus long règne d'un monarque britannique est celui de la Reine Élisabeth II, qui a régné pendant plus de 70 ans.",
    },
  },
  {
    date: "2026-08-19",
    general_question: {
      question:
        "Quel est le nom du traité qui a mis fin à la Première Guerre mondiale ?",
      answer: "Le Traité de Versailles.",
      explanation:
        "Signé le 28 juin 1919, il a officiellement mis fin au conflit entre les Alliés et l'Allemagne.",
    },
    open_question: {
      question:
        "L'humanité devrait-elle se concentrer sur la conservation des espèces menacées ou sur la restauration des écosystèmes entiers ?",
      notes:
        "Débat sur les priorités de la biodiversité : protéger l'emblématique ou le fonctionnel.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas, elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-08-20",
    general_question: {
      question:
        "Quel est le nom de la force qui s'oppose au mouvement dans l'air ou dans un liquide ?",
      answer: "La Traînée (ou Résistance de l'air/fluide).",
      explanation:
        "La traînée est la force de friction qui agit parallèlement à la vitesse du fluide et s'oppose au mouvement.",
    },
    open_question: {
      question:
        "Faut-il introduire le droit à l'erreur fiscale pour les citoyens de bonne foi, sans pénalité lourde ?",
      notes:
        "Débat sur la complexité de l'administration, la confiance de l'État envers le citoyen et les sanctions.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-08-21",
    general_question: {
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi.",
      explanation: "New Delhi est la capitale de l'Inde.",
    },
    open_question: {
      question:
        "L'enseignement doit-il se faire uniquement en présentiel pour garantir la qualité ou doit-on généraliser l'enseignement en ligne ?",
      notes:
        "Débat sur l'interactivité sociale, l'accès à distance et l'efficacité des plateformes numériques.",
    },
    did_you_know: {
      text: "Les étoiles filantes ne sont pas des étoiles, mais de petites particules de débris (météoroïdes) qui se désintègrent en entrant dans l'atmosphère terrestre.",
    },
  },
  {
    date: "2026-08-22",
    general_question: {
      question: "Qui a peint 'Le Serment des Horaces' ?",
      answer: "Jacques-Louis David.",
      explanation:
        "Ce tableau néoclassique (1784) est considéré comme un chef-d'œuvre qui illustre les vertus civiques et le devoir envers la patrie.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être conditionné à la réussite d'un test de connaissances civiques de base ?",
      notes:
        "Débat sur la compétence de l'électeur, l'élitisme et l'universalité du suffrage.",
    },
    did_you_know: {
      text: "La première personne à faire le tour du monde en solitaire et sans escale a été l'Australien Jon Sanders en 1988.",
    },
  },
  {
    date: "2026-08-23",
    general_question: {
      question:
        "Quel est le nom de la plus grande baie du monde (par sa ligne côtière) ?",
      answer: "La baie d'Hudson.",
      explanation:
        "Située dans le nord-est du Canada, la baie d'Hudson est la deuxième plus grande baie du monde après le golfe du Mexique.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de partager leurs profits avec leurs employés (intéressement) ?",
      notes:
        "Débat sur le capitalisme, la participation des salariés et la redistribution des richesses.",
    },
    did_you_know: {
      text: "Le seul chiffre dont l'orthographe contient la lettre 'a' est 'quatre'.",
    },
  },
  {
    date: "2026-08-24",
    general_question: {
      question: "Qui est l'auteur du roman 'Le Petit Prince' ?",
      answer: "Antoine de Saint-Exupéry.",
      explanation:
        "Publié en 1943, ce conte philosophique est l'un des livres les plus traduits et vendus au monde.",
    },
    open_question: {
      question:
        "Le système de santé occidental (traitement des maladies) est-il trop dépendant des grandes entreprises pharmaceutiques ?",
      notes: "Débat sur le lobbying, les brevets et la recherche indépendante.",
    },
    did_you_know: {
      text: "Le mot 'chèque' vient du mot persan 'sak' qui signifie 'mandat ou document légal'.",
    },
  },
  {
    date: "2026-08-25",
    general_question: {
      question:
        "Quel était le nom de l'explorateur vénitien qui a parcouru la Route de la soie au $\text{XIII}^e$ siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, Le Livre des merveilles, a documenté ses voyages en Asie, y compris en Chine à la cour de Kubilai Khan.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'monnaies locales' (complémentaires) pour favoriser l'économie circulaire et le commerce de proximité ?",
      notes:
        "Débat sur l'impact sur l'économie nationale, la fraude et la confiance dans les monnaies alternatives.",
    },
    did_you_know: {
      text: "La plus ancienne université du monde toujours en activité est l'Université Al Quaraouiyine, fondée à Fès, Maroc, en 859.",
    },
  },
  {
    date: "2026-08-26",
    general_question: {
      question:
        "Quel est le nom du gaz noble utilisé pour éclairer les panneaux publicitaires et les tubes néon (couleur rouge-orange) ?",
      answer: "Le Néon (Ne).",
      explanation:
        "Le néon émet une lumière rouge-orange vif lorsqu'il est sous tension électrique dans un tube à basse pression.",
    },
    open_question: {
      question:
        "Le recours au tir de barrage pour la protection des cultures contre les animaux (loups, sangliers) est-il éthiquement acceptable ?",
      notes:
        "Débat sur la coexistence homme-faune, la protection des espèces et l'économie agricole.",
    },
    did_you_know: {
      text: "Le mot 'samouraï' vient du mot japonais 'saburau', qui signifie 'servir'.",
    },
  },
  {
    date: "2026-08-27",
    general_question: {
      question: "Quel fleuve est considéré comme le plus sacré de l'Inde ?",
      answer: "Le Gange (Ganga).",
      explanation: "Le Gange est vénéré par les hindous comme la déesse Ganga.",
    },
    open_question: {
      question:
        "La surveillance des frontières par des drones et des capteurs est-elle une solution technologique viable et humaine à la crise migratoire ?",
      notes:
        "Débat sur la sécurité, le droit d'asile et la déshumanisation des contrôles.",
    },
    did_you_know: {
      text: "Le drapeau olympique, avec ses cinq anneaux, a été conçu en 1913. Leurs couleurs combinées apparaissent dans tous les drapeaux nationaux.",
    },
  },
  {
    date: "2026-08-28",
    general_question: {
      question:
        "Quelle est la principale source de Vitamine $\text{D}$ pour le corps humain ?",
      answer: "Le Soleil (exposition aux rayons UV).",
      explanation:
        "L'exposition au soleil permet à la peau de synthétiser la Vitamine $\text{D}$, essentielle à l'absorption du calcium et à la santé osseuse.",
    },
    open_question: {
      question:
        "Le tabac (ou la nicotine) devrait-il être totalement interdit pour les générations nées après 2010 ?",
      notes:
        "Débat sur la santé publique, l'interdiction générationnelle et le droit individuel de fumer.",
    },
    did_you_know: {
      text: "Une année sur Mars dure 687 jours terrestres (soit presque deux fois plus qu'une année terrestre).",
    },
  },
  {
    date: "2026-08-29",
    general_question: {
      question:
        "Quel est le nom de la force qui maintient l'eau à la surface d'un verre, malgré la gravité ?",
      answer: "La Tension de surface.",
      explanation:
        "La tension de surface est le phénomène par lequel la surface d'un liquide se comporte comme une membrane élastique.",
    },
    open_question: {
      question:
        "La 'Fast Fashion' (mode rapide) devrait-elle être limitée par des lois pour réduire son impact environnemental et social ?",
      notes:
        "Débat sur la production de vêtements jetables, la pollution et les conditions de travail dans l'industrie textile.",
    },
    did_you_know: {
      text: "L'œil d'autruche est plus grand que son cerveau.",
    },
  },
  {
    date: "2026-08-30",
    general_question: {
      question: "Quel est le nom de la déesse grecque de la victoire ?",
      answer: "Nikè.",
      explanation: "Nikè (ou Nike) est souvent représentée ailée.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites de vitesse globales sur Internet (débit) pour réduire la consommation d'énergie des centres de données ?",
      notes:
        "Débat sur l'écologie numérique, la performance et l'accès à la haute vitesse.",
    },
    did_you_know: {
      text: "La Terre est la planète la plus dense du système solaire.",
    },
  },
  {
    date: "2026-08-31",
    general_question: {
      question:
        "Quel est le seul pays d'Europe qui partage une frontière terrestre avec le Danemark ?",
      answer: "L'Allemagne.",
      explanation:
        "Le Danemark est en grande partie entouré d'eau, mais partage une courte frontière terrestre avec l'Allemagne au sud (Jutland).",
    },
    open_question: {
      question:
        "La vaccination contre les maladies infantiles (Rougeole, etc.) devrait-elle être strictement obligatoire pour l'inscription à l'école ?",
      notes:
        "Débat sur l'immunité collective, la liberté de choix des parents et la santé publique.",
    },
    did_you_know: {
      text: "Un 'joli' (unité de mesure) est utilisé pour définir le travail effectué par une force, équivalent à un newton agissant sur un mètre.",
    },
  },
  {
    date: "2026-09-01",
    general_question: {
      question:
        "Quel écrivain français est l'auteur des essais philosophiques 'L'Étranger' et 'La Peste' ?",
      answer: "Albert Camus.",
      explanation:
        "Camus était un philosophe, écrivain et lauréat du prix Nobel de littérature (1957), souvent associé à la philosophie de l'absurde.",
    },
    open_question: {
      question:
        "Les banques devraient-elles cesser de financer les projets d'énergies fossiles pour accélérer la transition écologique ?",
      notes:
        "Débat sur la finance verte, la responsabilité des institutions financières et l'approvisionnement énergétique.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-09-02",
    general_question: {
      question: "Quelle est la capitale de l'Islande ?",
      answer: "Reykjavik.",
      explanation:
        "Reykjavik est la capitale la plus septentrionale du monde, célèbre pour ses sources chaudes et son utilisation des énergies géothermiques.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles interdire l'utilisation des écrans (smartphones, tablettes) en classe, même à des fins pédagogiques ?",
      notes:
        "Débat sur la distraction, les outils numériques éducatifs et l'impact sur la concentration des élèves.",
    },
    did_you_know: {
      text: "La 'Journée mondiale de l'environnement' est célébrée chaque 5 juin, établie par l'ONU en 1972.",
    },
  },
  {
    date: "2026-09-03",
    general_question: {
      question:
        "Quel événement majeur de la Seconde Guerre mondiale est commémoré le 6 juin ?",
      answer: "Le débarquement de Normandie (D-Day).",
      explanation:
        "Le 6 juin 1944, les forces alliées ont lancé l'assaut amphibie le plus important de l'histoire pour libérer l'Europe de l'occupation nazie.",
    },
    open_question: {
      question:
        "Faut-il imposer une 'taxe sur la malbouffe' pour financer la prévention des maladies liées à l'alimentation ?",
      notes:
        "Débat sur la fiscalité comportementale, la liberté de consommation et l'impact sur les revenus modestes.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-09-04",
    general_question: {
      question:
        "Quel est le nom de la couche de l'atmosphère terrestre qui absorbe la majeure partie du rayonnement ultraviolet du Soleil ?",
      answer: "La couche d'Ozone.",
      explanation:
        "Située principalement dans la stratosphère, la couche d'ozone ($\text{O}_3$) est essentielle pour protéger la vie sur Terre des $\text{UV}$ nocifs.",
    },
    open_question: {
      question:
        "Les robots devraient-ils payer des impôts ou des cotisations sociales pour compenser les emplois qu'ils suppriment ?",
      notes:
        "Débat sur la 'taxe robot', le financement de la protection sociale et la définition du travail à l'ère de l'automatisation.",
    },
    did_you_know: {
      text: "Le mot 'radar' est un acronyme signifiant 'Radio Detection And Ranging'.",
    },
  },
  {
    date: "2026-09-05",
    general_question: {
      question:
        "Quel animal marin est le plus grand invertébré (sans colonne vertébrale) connu ?",
      answer: "Le calmar colossal (Mesonychoteuthis hamiltoni).",
      explanation:
        "Le calmar colossal est généralement plus lourd et détient le record du plus grand œil du monde animal.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Journée mondiale des océans' est célébrée chaque 8 juin, visant à sensibiliser à la protection des écosystèmes marins.",
    },
  },
  {
    date: "2026-09-06",
    general_question: {
      question:
        "Qui a peint 'Les Noces de Cana', la plus grande toile du musée du Louvre ?",
      answer: "Paul Véronèse.",
      explanation:
        "Cette œuvre massive (6,77 m par 9,94 m) représente le premier miracle de Jésus-Christ et fait face à la Joconde.",
    },
    open_question: {
      question:
        "La censure de contenu sur Internet par les plateformes privées est-elle une protection nécessaire ou une atteinte à la liberté d'expression ?",
      notes:
        "Débat sur la modération du contenu, la responsabilité des grandes entreprises technologiques et les abus potentiels.",
    },
    did_you_know: {
      text: "La Russie possède la plus longue frontière terrestre du monde, s'étendant sur plus de 22 400 km à travers 14 pays.",
    },
  },
  {
    date: "2026-09-07",
    general_question: {
      question:
        "Quel est le plus grand désert de sable au monde (hors régions polaires) ?",
      answer: "Le Sahara.",
      explanation:
        "Le Sahara, qui couvre une grande partie de l'Afrique du Nord, est le plus grand désert chaud.",
    },
    open_question: {
      question:
        "Le tourisme de masse est-il compatible avec la préservation des sites historiques et naturels ?",
      notes:
        "Débat sur les quotas d'accès, la dégradation des sites (ex: Venise, Machu Picchu) et l'économie locale.",
    },
    did_you_know: {
      text: "Les escargots ont environ 14 000 dents, situées sur leur langue appelée radula.",
    },
  },
  {
    date: "2026-09-08",
    general_question: {
      question: "Quelle est l'unité de mesure de la force ?",
      answer: "Le Newton (N).",
      explanation:
        "Nommé d'après Isaac Newton, $1 \text{Newton}$ est la force nécessaire pour accélérer une masse de $1 \text{kg}$ à raison de $1 \text{m/s}^2$ ($F = ma$).",
    },
    open_question: {
      question:
        "Les gouvernements devraient-ils imposer un temps de 'déconnexion' numérique obligatoire pour les citoyens ?",
      notes:
        "Débat sur le droit à la tranquillité, l'hyperconnexion et la santé mentale collective.",
    },
    did_you_know: {
      text: "Le seul État des États-Unis à produire du café est Hawaï.",
    },
  },
  {
    date: "2026-09-09",
    general_question: {
      question:
        "Quel pays a remporté la première Coupe du Monde de football organisée en Afrique (2010) ?",
      answer: "L'Espagne.",
      explanation:
        "L'Espagne a battu les Pays-Bas en finale à Johannesburg (Afrique du Sud).",
    },
    open_question: {
      question:
        "Faut-il mettre fin au secret bancaire dans tous les pays pour lutter contre l'évasion fiscale et le blanchiment d'argent ?",
      notes:
        "Débat sur la souveraineté fiscale, la protection des données et la justice économique mondiale.",
    },
    did_you_know: {
      text: "La température la plus chaude jamais enregistrée sur Terre est de $56,7^{circ}\text{C}$ dans la Vallée de la Mort, en Californie, en 1913.",
    },
  },
  {
    date: "2026-09-10",
    general_question: {
      question:
        "Qui a inventé l'imprimerie à caractères mobiles en Europe au $\text{XV}^e$ siècle ?",
      answer: "Johannes Gutenberg.",
      explanation:
        "Son invention (vers 1440) a permis la diffusion rapide du savoir.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles imposer le port d'un uniforme pour réduire les inégalités sociales et la pression de la mode ?",
      notes:
        "Débat sur l'égalité, l'expression individuelle et le coût d'un uniforme scolaire.",
    },
    did_you_know: {
      text: "La foudre frappe les hommes beaucoup plus souvent que les femmes (environ 5 fois plus), bien que la raison exacte soit encore débattue.",
    },
  },
  {
    date: "2026-09-11",
    general_question: {
      question:
        "Quel est le nom de l'instrument de musique composé de 88 touches ?",
      answer: "Le Piano.",
      explanation:
        "Un piano moderne standard possède 52 touches blanches et 36 touches noires, soit un total de 88 touches.",
    },
    open_question: {
      question:
        "Faut-il réglementer la durée maximale de travail par semaine (32 heures, 4 jours) pour améliorer le bien-être général ?",
      notes:
        "Débat sur la productivité, le stress professionnel et l'équilibre vie privée/vie professionnelle.",
    },
    did_you_know: {
      text: "Le 14 juin est la 'Journée mondiale du donneur de sang', visant à sensibiliser au besoin de dons sûrs.",
    },
  },
  {
    date: "2026-09-12",
    general_question: {
      question: "Quel est l'élément chimique avec le symbole 'Au' ?",
      answer: "L'Or.",
      explanation:
        "Le symbole Au vient du mot latin aurum. L'or est un métal de transition, précieux et inaltérable.",
    },
    open_question: {
      question:
        "L'exploration des fonds marins est-elle plus importante pour l'humanité que l'exploration spatiale ?",
      notes:
        "Débat sur la biodiversité marine (encore largement inexplorée) vs. les avancées technologiques spatiales.",
    },
    did_you_know: {
      text: "Un 'parsec' est une unité de mesure de distance utilisée en astronomie, équivalant à environ 3,26 années-lumière.",
    },
  },

  // Jours 263 à 293 : Septembre (18 jours restants) & Octobre 2026 (13 premiers jours)
  {
    date: "2026-09-13",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' (compenser les émissions) est-il une solution écologique viable ou un permis de polluer pour les entreprises ?",
      notes:
        "Débat sur l'efficacité de la compensation (plantation d'arbres) face à la nécessité de la réduction absolue.",
    },
    did_you_know: {
      text: "Les nuages portent des noms latins pour décrire leur apparence (cumulus, cirrus, stratus) inventés par Luke Howard en 1803.",
    },
  },
  {
    date: "2026-09-14",
    general_question: {
      question:
        "Quel est le nom de la péninsule partagée par l'Espagne et le Portugal ?",
      answer: "La péninsule Ibérique.",
      explanation:
        "La péninsule est située à l'extrémité sud-ouest de l'Europe.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de propriété pour des raisons écologiques (ex: interdiction de construire sur certaines terres naturelles) ?",
      notes:
        "Débat sur le droit individuel versus l'intérêt général de la préservation de l'environnement.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-09-15",
    general_question: {
      question:
        "Quel scientifique a découvert la loi de la gravitation universelle ?",
      answer: "Isaac Newton.",
      explanation:
        "Newton a formulé cette loi dans son ouvrage 'Philosophiae Naturalis Principia Mathematica' (1687).",
    },
    open_question: {
      question:
        "L'éducation civique devrait-elle inclure des cours obligatoires sur la vérification des sources (fact-checking) et la pensée critique ?",
      notes:
        "Débat sur la lutte contre la désinformation (fake news) et le rôle de l'école dans la formation d'un citoyen éclairé.",
    },
    did_you_know: {
      text: "Le mont Everest s'agrandit d'environ 4 millimètres par an en raison du mouvement des plaques tectoniques.",
    },
  },
  {
    date: "2026-09-16",
    general_question: {
      question:
        "Quel est le nom de l'explorateur portugais crédité du premier tour du monde (bien qu'il soit mort en cours de route) ?",
      answer: "Fernand de Magellan.",
      explanation:
        "Magellan a initié l'expédition en 1519. Il est mort aux Philippines en 1521, mais son navire, le Victoria, a complété le voyage en 1522.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion criminelle et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "Les papillons goûtent avec leurs pieds (ils possèdent des chimiorécepteurs sur les pattes).",
    },
  },
  {
    date: "2026-09-17",
    general_question: {
      question:
        "Quel est le nom de la science qui étudie le comportement des animaux dans leur environnement naturel ?",
      answer: "L'Éthologie.",
      explanation:
        "L'éthologie est l'étude scientifique et objective du comportement animal.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de divulguer les algorithmes utilisés pour prendre des décisions importantes (recrutement, prêts) ?",
      notes:
        "Débat sur la transparence des algorithmes et le risque de biais dans les systèmes automatisés.",
    },
    did_you_know: {
      text: "Le 20 juin est le jour le plus long de l'année dans l'hémisphère nord (solstice d'été).",
    },
  },
  {
    date: "2026-09-18",
    general_question: {
      question:
        "Quel est l'élément chimique essentiel aux plantes pour la photosynthèse, qui leur donne leur couleur verte ?",
      answer: "Le Magnésium (Mg).",
      explanation:
        "Le Magnésium est un constituant central de la molécule de chlorophylle, qui capte la lumière.",
    },
    open_question: {
      question:
        "L'art doit-il être financé principalement par des fonds publics ou par des mécènes privés ?",
      notes:
        "Débat sur l'indépendance artistique, l'accès à la culture et la politique budgétaire.",
    },
    did_you_know: {
      text: "Le jour le plus long de l'année est le solstice d'été, qui tombe généralement le 20 ou le 21 juin.",
    },
  },
  {
    date: "2026-09-19",
    general_question: {
      question: "Quel est le nom du gaz noble le plus léger ?",
      answer: "L'Hélium (He).",
      explanation:
        "L'hélium est le deuxième élément le plus abondant dans l'univers après l'hydrogène.",
    },
    open_question: {
      question:
        "Faut-il taxer les transactions financières spéculatives pour financer les services sociaux ?",
      notes:
        "Débat sur la 'taxe Tobin', la stabilité financière et la redistribution des richesses.",
    },
    did_you_know: {
      text: "La plus ancienne loi toujours en vigueur au monde est celle sur les feux de circulation au Royaume-Uni (datant de 1865).",
    },
  },
  {
    date: "2026-09-20",
    general_question: {
      question:
        "Quel est l'organe qui consomme le plus d'oxygène dans le corps humain ?",
      answer: "Le cerveau.",
      explanation:
        "Bien qu'il ne représente qu'environ 2% du poids corporel, le cerveau consomme près de 20% de l'oxygène total du corps au repos.",
    },
    open_question: {
      question:
        "Les voyages internationaux devraient-ils être limités pour les particuliers, et réservés aux nécessités professionnelles ou humanitaires ?",
      notes:
        "Débat sur la réduction de l'empreinte carbone personnelle et l'impact sur le tourisme et les échanges culturels.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-09-21",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "L'agriculture biologique est-elle la seule voie possible pour une alimentation saine et durable ?",
      notes:
        "Débat sur la productivité, l'utilisation des pesticides et le coût pour le consommateur.",
    },
    did_you_know: {
      text: "La baleine bleue, le plus grand animal de la planète, a un cœur de la taille d'une petite voiture.",
    },
  },
  {
    date: "2026-09-22",
    general_question: {
      question: "Qui a fondé l'entreprise automobile Ford ?",
      answer: "Henry Ford.",
      explanation: "Henry Ford a fondé la Ford Motor Company en 1903.",
    },
    open_question: {
      question:
        "Faut-il interdire l'utilisation des animaux sauvages dans les cirques et les spectacles itinérants ?",
      notes:
        "Débat sur le bien-être animal, la tradition culturelle et les alternatives éthiques au spectacle.",
    },
    did_you_know: {
      text: "La statue de la Liberté à New York était à l'origine destinée à la ville de Port-Saïd, en Égypte.",
    },
  },
  {
    date: "2026-09-23",
    general_question: {
      question:
        "Quel prix littéraire français est souvent considéré comme le plus prestigieux ?",
      answer: "Le Prix Goncourt.",
      explanation:
        "Créé en 1903, le Goncourt est décerné à l'auteur du meilleur ouvrage d'imagination en prose de l'année.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité du net' (égalité de traitement des données) est-il essentiel pour la liberté d'Internet ?",
      notes:
        "Débat sur le contrôle des flux de données par les fournisseurs d'accès (FAI) et l'accès équitable à l'information.",
    },
    did_you_know: {
      text: "La langue la plus parlée dans le monde, en termes de locuteurs natifs, est le mandarin (chinois).",
    },
  },
  {
    date: "2026-09-24",
    general_question: {
      question:
        "Quelle est la fleur traditionnellement offerte en France le 1er mai ?",
      answer: "Le muguet (Clochette de mai).",
      explanation:
        "Offrir du muguet est un porte-bonheur pour le mois de mai. Le 1er mai est aussi la Fête du Travail.",
    },
    open_question: {
      question:
        "Les syndicats ont-ils encore un rôle pertinent dans la défense des droits des travailleurs de l'économie numérique (freelance, plateformes) ?",
      notes:
        "Débat sur l'organisation des travailleurs indépendants, la précarité et les nouvelles formes d'emploi.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-09-25",
    general_question: {
      question: "Quel est le plus grand État d'Afrique par sa superficie ?",
      answer: "L'Algérie.",
      explanation:
        "Depuis la partition du Soudan en 2011, l'Algérie est le plus vaste pays du continent africain.",
    },
    open_question: {
      question:
        "Le cinéma devrait-il être davantage subventionné par l'État pour garantir la diversité culturelle face aux superproductions ?",
      notes:
        "Débat sur l'industrie culturelle, la qualité artistique et la concurrence des plateformes de streaming.",
    },
    did_you_know: {
      text: "La plus vieille créature marine encore vivante est une éponge d'une espèce non identifiée, découverte à 2 134 mètres de profondeur.",
    },
  },
  {
    date: "2026-09-26",
    general_question: {
      question:
        "Quel pays a pour langue officielle le portugais en Amérique du Sud ?",
      answer: "Le Brésil.",
      explanation: "Le Brésil a été colonisé par le Portugal.",
    },
    open_question: {
      question:
        "Faut-il former des armées de 'soldats-robots' (entièrement autonomes) pour réduire les pertes humaines dans les conflits ?",
      notes:
        "Débat sur l'éthique de la guerre automatisée, le droit international et le risque de déshumanisation des conflits.",
    },
    did_you_know: {
      text: "La plus petite quantité de matière observable est le quark, qui est un constituant des protons et des neutrons.",
    },
  },
  {
    date: "2026-09-27",
    general_question: {
      question:
        "Quel prix scientifique est souvent considéré comme l'équivalent du Prix Nobel en mathématiques ?",
      answer: "La Médaille Fields.",
      explanation:
        "Elle est décernée tous les quatre ans à des mathématiciens de moins de 40 ans.",
    },
    open_question: {
      question:
        "La liberté des médias est-elle menacée par la pression des annonceurs et la recherche du 'clic' à tout prix ?",
      notes:
        "Débat sur le modèle économique des médias, la qualité de l'information et le journalisme d'investigation.",
    },
    did_you_know: {
      text: "Le 4 mai est souvent célébré comme le 'Star Wars Day'.",
    },
  },
  {
    date: "2026-09-28",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Vatican qui abrite le plafond de Michel-Ange ?",
      answer: "La Chapelle Sixtine.",
      explanation:
        "Elle fait partie du complexe des Musées du Vatican et est célèbre pour ses fresques.",
    },
    open_question: {
      question:
        "L'industrie du jeu vidéo devrait-elle être tenue responsable de la représentation stéréotypée et violente de certains groupes sociaux ?",
      notes:
        "Débat sur la liberté de création, l'impact sur les joueurs et les lois sur le contenu numérique.",
    },
    did_you_know: {
      text: "Le chili est en fait un fruit (une baie).",
    },
  },
  {
    date: "2026-09-29",
    general_question: {
      question:
        "Quel est le plus grand volcan du système solaire, situé sur Mars ?",
      answer: "L'Olympus Mons.",
      explanation:
        "Avec une hauteur de 21,9 km, l'Olympus Mons est près de trois fois plus haut que l'Everest.",
    },
    open_question: {
      question:
        "Faut-il imposer des cours obligatoires de cuisine et de nutrition pour lutter contre l'obésité et les maladies associées ?",
      notes:
        "Débat sur l'éducation à la santé, la responsabilité individuelle et le rôle de l'école dans l'alimentation.",
    },
    did_you_know: {
      text: "La première monnaie métallique a été utilisée en Lydie (Turquie actuelle) vers 600 av. J.-C.",
    },
  },
  {
    date: "2026-09-30",
    general_question: {
      question:
        "Quel est le nom de la seule planète du système solaire qui tourne sur elle-même dans le sens des aiguilles d'une montre ?",
      answer: "Vénus.",
      explanation:
        "La rotation rétrograde de Vénus est une anomalie par rapport aux autres planètes.",
    },
    open_question: {
      question:
        "Les lanceurs d'alerte (whistleblowers) devraient-ils bénéficier d'une immunité totale pour les informations qu'ils révèlent ?",
      notes:
        "Débat sur la protection des sources, l'intérêt public et la sécurité nationale.",
    },
    did_you_know: {
      text: "La plus petite distance entre deux points dans l'espace-temps n'est pas une ligne droite, mais une géodésique (une courbe).",
    },
  },
  {
    date: "2026-10-01",
    general_question: {
      question:
        "Quel événement historique majeur est commémoré le 8 mai en France et dans d'autres pays alliés ?",
      answer:
        "La Victoire de 1945 (fin de la Seconde Guerre mondiale en Europe).",
      explanation: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie.",
    },
    open_question: {
      question:
        "Le service militaire ou civique obligatoire (mixte) est-il nécessaire pour renforcer l'unité nationale et le sens des responsabilités ?",
      notes:
        "Débat sur les coûts, la liberté individuelle et l'efficacité d'une formation civique et militaire.",
    },
    did_you_know: {
      text: "Le mot 'ambulance' vient du français 'hôpital ambulant', utilisé pour désigner les hôpitaux mobiles lors des guerres napoléoniennes.",
    },
  },
  {
    date: "2026-10-02",
    general_question: {
      question:
        "Quel animal est le symbole national de la Chine et est considéré comme une espèce menacée ?",
      answer: "Le Panda géant.",
      explanation:
        "Le panda est originaire des régions montagneuses du centre de la Chine.",
    },
    open_question: {
      question:
        "La régulation de la taille et de la concentration des grandes entreprises technologiques (GAFA) est-elle suffisante pour empêcher les monopoles ?",
      notes:
        "Débat sur le droit de la concurrence, la protection des données et le pouvoir politique des multinationales.",
    },
    did_you_know: {
      text: "Les astronautes qui travaillent à l'extérieur de l'ISS doivent porter des couches pour adultes.",
    },
  },
  {
    date: "2026-10-03",
    general_question: {
      question:
        "Quel artiste est l'auteur de la célèbre sculpture 'Le Penseur' ?",
      answer: "Auguste Rodin.",
      explanation:
        "Créée à l'origine en 1880, cette sculpture en bronze représente un homme en méditation profonde.",
    },
    open_question: {
      question:
        "Les réseaux sociaux devraient-ils être contraints d'utiliser des algorithmes qui favorisent le contenu 'positif' ou 'éducatif' ?",
      notes:
        "Débat sur l'impact sur le bien-être, la liberté algorithmique et le risque de censure du contenu critique.",
    },
    did_you_know: {
      text: "Le seul oiseau capable de voir la couleur bleue est le pigeon.",
    },
  },
  {
    date: "2026-10-04",
    general_question: {
      question: "Quelle est l'unité de mesure de la puissance électrique ?",
      answer: "Le Watt (W).",
      explanation:
        "Le Watt est l'unité SI de la puissance, nommée d'après l'inventeur écossais James Watt.",
    },
    open_question: {
      question:
        "Faut-il développer l'énergie de fusion nucléaire (qui promet une énergie quasi-illimitée et propre) au détriment de l'énergie de fission (nucléaire classique) ?",
      notes:
        "Débat sur l'horizon technologique (ITER), les coûts de recherche et la nécessité d'une production d'énergie immédiate.",
    },
    did_you_know: {
      text: "Le cri d'une mouche est appelé le 'bourdonnement'.",
    },
  },
  {
    date: "2026-10-05",
    general_question: {
      question: "Quel est le nom du plus grand océan de la Terre ?",
      answer: "L'océan Pacifique.",
      explanation:
        "Il est si vaste qu'il couvre près d'un tiers de la surface terrestre.",
    },
    open_question: {
      question:
        "L'apprentissage des langues mortes (latin, grec ancien) est-il encore pertinent dans le système éducatif moderne ?",
      notes:
        "Débat sur l'importance des racines culturelles, l'étymologie et la nécessité de préparer aux métiers du futur.",
    },
    did_you_know: {
      text: "Le pont de Londres que l'on voit souvent en photo n'est pas le 'London Bridge' historique, mais le 'Tower Bridge'.",
    },
  },
  {
    date: "2026-10-06",
    general_question: {
      question: "Quel pays a pour capitale La Havane ?",
      answer: "Cuba.",
      explanation: "La Havane est la capitale et la plus grande ville de Cuba.",
    },
    open_question: {
      question:
        "La surveillance biométrique (empreintes, iris) dans les lieux publics est-elle une atteinte intolérable à la liberté ?",
      notes:
        "Débat sur le droit à l'anonymat, la sécurité et la traçabilité des individus par l'État.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-10-07",
    general_question: {
      question:
        "Quel est le nom de l'hormone du sommeil, souvent utilisée pour traiter les troubles du sommeil ?",
      answer: "La Mélatonine.",
      explanation:
        "La mélatonine est sécrétée par la glande pinéale. Sa production est stimulée par l'obscurité.",
    },
    open_question: {
      question:
        "Les cryptomonnaies peuvent-elles réellement remplacer les monnaies fiduciaires traditionnelles (Euro, Dollar) ?",
      notes:
        "Débat sur la volatilité, la régulation, la confiance et le rôle des banques centrales.",
    },
    did_you_know: {
      text: "La plus petite cellule du corps humain est le spermatozoïde, et la plus grande est l'ovule.",
    },
  },
  {
    date: "2026-10-08",
    general_question: {
      question: "Quelle était la capitale de l'Empire byzantin ?",
      answer: "Constantinople (aujourd'hui Istanbul).",
      explanation:
        "Fondée par l'empereur Constantin Ier en 330 apr. J.-C., elle a été le centre de l'Empire romain d'Orient.",
    },
    open_question: {
      question:
        "Faut-il limiter l'accès aux forêts et aux zones naturelles pour les protéger de la surfréquentation touristique ?",
      notes:
        "Débat sur l'écotourisme, le droit d'accès à la nature et la conservation des écosystèmes.",
    },
    did_you_know: {
      text: "Le Soleil est techniquement une étoile naine jaune de type G, mais elle est en fait blanche vue de l'espace.",
    },
  },
  {
    date: "2026-10-09",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Andromède est une galaxie spirale géante située à environ 2,5 millions d'années-lumière et est en trajectoire de collision avec la Voie Lactée.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Zone de l'Océan Pacifique' est si lointaine qu'il y a plus de chance d'y rencontrer un astronaute que n'importe qui d'autre (c'est le cimetière des engins spatiaux).",
    },
  },
  {
    date: "2026-10-10",
    general_question: {
      question: "Quel est le nom du plus grand lac salé du monde ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Bien qu'appelée 'mer', elle est techniquement le plus grand lac du monde en superficie (environ $371 000 \text{km}^2$).",
    },
    open_question: {
      question:
        "L'éducation religieuse devrait-elle être laissée entièrement aux familles et aux institutions religieuses, ou faire partie de l'école publique ?",
      notes:
        "Débat sur la neutralité de l'État, le pluralisme et la transmission des valeurs.",
    },
    did_you_know: {
      text: "Le corps humain est constitué d'environ 60% d'eau.",
    },
  },
  {
    date: "2026-10-11",
    general_question: {
      question:
        "Quel est le principal composant de la coquille d'un œuf de poule ?",
      answer: "Le Carbonate de Calcium ($\text{CaCO}_3$).",
      explanation:
        "Le carbonate de calcium est une substance très solide qui protège l'œuf.",
    },
    open_question: {
      question:
        "Faut-il taxer davantage les produits importés pour encourager la production locale et réduire l'empreinte carbone du transport ?",
      notes:
        "Débat sur le protectionnisme, les accords commerciaux internationaux et l'autonomie alimentaire.",
    },
    did_you_know: {
      text: "Le seul continent qui n'a pas de glaciers est l'Australie.",
    },
  },
  {
    date: "2026-10-12",
    general_question: {
      question:
        "Qui est l'auteur des romans policiers 'Dix Petits Nègres' et 'Le Crime de l'Orient-Express' ?",
      answer: "Agatha Christie.",
      explanation:
        "Agatha Christie est l'une des romancières les plus vendues de tous les temps.",
    },
    open_question: {
      question:
        "L'accès à l'information sur Internet devrait-il être payant pour garantir la qualité et la pérennité du journalisme ?",
      notes:
        "Débat sur le 'paywall', le modèle économique des médias et l'accès gratuit à la connaissance.",
    },
    did_you_know: {
      text: "Le mot 'nerd' (intello) a été inventé par le Dr Seuss dans son livre 'If I Ran the Zoo' en 1950.",
    },
  },
  {
    date: "2026-10-13",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Royaume-Uni, connu pour abriter la Pierre de Rosette ?",
      answer: "Le British Museum.",
      explanation:
        "Situé à Londres, le British Museum possède des collections couvrant l'histoire, l'art et la culture humaines.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'biens partagés' (voitures, outils, logements) pour lutter contre la surconsommation et l'individualisme ?",
      notes:
        "Débat sur l'économie collaborative, la propriété privée et l'efficacité des ressources.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas composés de vapeur d'eau (qui est un gaz invisible), mais de minuscules gouttelettes d'eau liquide ou de cristaux de glace en suspension.",
    },
  },

  // Jours 294 à 324 : Octobre (18 jours restants) & Novembre 2026 (13 premiers jours)
  {
    date: "2026-10-14",
    general_question: {
      question: "Quel est le plus haut sommet d'Afrique ?",
      answer: "Le Mont Kilimandjaro.",
      explanation:
        "Situé en Tanzanie, il est le plus haut sommet isolé du monde.",
    },
    open_question: {
      question:
        "Le droit au suicide assisté devrait-il être étendu aux personnes qui ne sont pas en phase terminale, mais dont la souffrance psychologique est jugée insupportable ?",
      notes:
        "Débat sur l'autonomie, l'évaluation de la souffrance et la définition de la dignité de la fin de vie.",
    },
    did_you_know: {
      text: "Le plus long règne d'un monarque britannique est celui de la Reine Élisabeth II, qui a régné pendant plus de 70 ans.",
    },
  },
  {
    date: "2026-10-15",
    general_question: {
      question:
        "Quel est le nom du traité qui a mis fin à la Première Guerre mondiale ?",
      answer: "Le Traité de Versailles.",
      explanation:
        "Signé le 28 juin 1919, il a officiellement mis fin au conflit entre les Alliés et l'Allemagne.",
    },
    open_question: {
      question:
        "L'humanité devrait-elle se concentrer sur la conservation des espèces menacées ou sur la restauration des écosystèmes entiers ?",
      notes:
        "Débat sur les priorités de la biodiversité : protéger l'emblématique ou le fonctionnel.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas, elles ont de courtes périodes de repos de quelques minutes, plusieurs fois par jour.",
    },
  },
  {
    date: "2026-10-16",
    general_question: {
      question:
        "Quel est le nom de la force qui s'oppose au mouvement dans l'air ou dans un liquide ?",
      answer: "La Traînée (ou Résistance de l'air/fluide).",
      explanation:
        "La traînée est la force de friction qui agit parallèlement à la vitesse du fluide et s'oppose au mouvement.",
    },
    open_question: {
      question:
        "Faut-il introduire le droit à l'erreur fiscale pour les citoyens de bonne foi, sans pénalité lourde ?",
      notes:
        "Débat sur la complexité de l'administration, la confiance de l'État envers le citoyen et les sanctions.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-10-17",
    general_question: {
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi.",
      explanation: "New Delhi est la capitale de l'Inde.",
    },
    open_question: {
      question:
        "L'enseignement doit-il se faire uniquement en présentiel pour garantir la qualité ou doit-on généraliser l'enseignement en ligne ?",
      notes:
        "Débat sur l'interactivité sociale, l'accès à distance et l'efficacité des plateformes numériques.",
    },
    did_you_know: {
      text: "Les étoiles filantes ne sont pas des étoiles, mais de petites particules de débris (météoroïdes) qui se désintègrent en entrant dans l'atmosphère terrestre.",
    },
  },
  {
    date: "2026-10-18",
    general_question: {
      question: "Qui a peint 'Le Serment des Horaces' ?",
      answer: "Jacques-Louis David.",
      explanation:
        "Ce tableau néoclassique (1784) est considéré comme un chef-d'œuvre qui illustre les vertus civiques et le devoir envers la patrie.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être conditionné à la réussite d'un test de connaissances civiques de base ?",
      notes:
        "Débat sur la compétence de l'électeur, l'élitisme et l'universalité du suffrage.",
    },
    did_you_know: {
      text: "La première personne à faire le tour du monde en solitaire et sans escale a été l'Australien Jon Sanders en 1988.",
    },
  },
  {
    date: "2026-10-19",
    general_question: {
      question:
        "Quel est le nom de la plus grande baie du monde (par sa ligne côtière) ?",
      answer: "La baie d'Hudson.",
      explanation:
        "Située dans le nord-est du Canada, la baie d'Hudson est la deuxième plus grande baie du monde après le golfe du Mexique.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de partager leurs profits avec leurs employés (intéressement) ?",
      notes:
        "Débat sur le capitalisme, la participation des salariés et la redistribution des richesses.",
    },
    did_you_know: {
      text: "Le seul chiffre dont l'orthographe contient la lettre 'a' est 'quatre'.",
    },
  },
  {
    date: "2026-10-20",
    general_question: {
      question: "Qui est l'auteur du roman 'Le Petit Prince' ?",
      answer: "Antoine de Saint-Exupéry.",
      explanation:
        "Publié en 1943, ce conte philosophique est l'un des livres les plus traduits et vendus au monde.",
    },
    open_question: {
      question:
        "Le système de santé occidental (traitement des maladies) est-il trop dépendant des grandes entreprises pharmaceutiques ?",
      notes: "Débat sur le lobbying, les brevets et la recherche indépendante.",
    },
    did_you_know: {
      text: "Le mot 'chèque' vient du mot persan 'sak' qui signifie 'mandat ou document légal'.",
    },
  },
  {
    date: "2026-10-21",
    general_question: {
      question:
        "Quel était le nom de l'explorateur vénitien qui a parcouru la Route de la soie au $\text{XIII}^e$ siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, Le Livre des merveilles, a documenté ses voyages en Asie.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'monnaies locales' (complémentaires) pour favoriser l'économie circulaire et le commerce de proximité ?",
      notes:
        "Débat sur l'impact sur l'économie nationale, la fraude et la confiance dans les monnaies alternatives.",
    },
    did_you_know: {
      text: "La plus ancienne université du monde toujours en activité est l'Université Al Quaraouiyine, fondée à Fès, Maroc, en 859.",
    },
  },
  {
    date: "2026-10-22",
    general_question: {
      question:
        "Quel est le nom du gaz noble utilisé pour éclairer les panneaux publicitaires et les tubes néon (couleur rouge-orange) ?",
      answer: "Le Néon (Ne).",
      explanation:
        "Le néon émet une lumière rouge-orange vif lorsqu'il est sous tension électrique.",
    },
    open_question: {
      question:
        "Le recours au tir de barrage pour la protection des cultures contre les animaux (loups, sangliers) est-il éthiquement acceptable ?",
      notes:
        "Débat sur la coexistence homme-faune, la protection des espèces et l'économie agricole.",
    },
    did_you_know: {
      text: "Le mot 'samouraï' vient du mot japonais 'saburau', qui signifie 'servir'.",
    },
  },
  {
    date: "2026-10-23",
    general_question: {
      question: "Quel fleuve est considéré comme le plus sacré de l'Inde ?",
      answer: "Le Gange (Ganga).",
      explanation: "Le Gange est vénéré par les hindous comme la déesse Ganga.",
    },
    open_question: {
      question:
        "La surveillance des frontières par des drones et des capteurs est-elle une solution technologique viable et humaine à la crise migratoire ?",
      notes:
        "Débat sur la sécurité, le droit d'asile et la déshumanisation des contrôles.",
    },
    did_you_know: {
      text: "Le drapeau olympique, avec ses cinq anneaux, a été conçu en 1913.",
    },
  },
  {
    date: "2026-10-24",
    general_question: {
      question:
        "Quelle est la principale source de Vitamine $\text{D}$ pour le corps humain ?",
      answer: "Le Soleil (exposition aux rayons UV).",
      explanation:
        "L'exposition au soleil permet à la peau de synthétiser la Vitamine $\text{D}$.",
    },
    open_question: {
      question:
        "Le tabac (ou la nicotine) devrait-il être totalement interdit pour les générations nées après 2010 ?",
      notes:
        "Débat sur la santé publique, l'interdiction générationnelle et le droit individuel de fumer.",
    },
    did_you_know: {
      text: "Une année sur Mars dure 687 jours terrestres (soit presque deux fois plus qu'une année terrestre).",
    },
  },
  {
    date: "2026-10-25",
    general_question: {
      question:
        "Quel est le nom de la force qui maintient l'eau à la surface d'un verre, malgré la gravité ?",
      answer: "La Tension de surface.",
      explanation:
        "La tension de surface est le phénomène par lequel la surface d'un liquide se comporte comme une membrane élastique.",
    },
    open_question: {
      question:
        "La 'Fast Fashion' (mode rapide) devrait-elle être limitée par des lois pour réduire son impact environnemental et social ?",
      notes:
        "Débat sur la production de vêtements jetables, la pollution et les conditions de travail dans l'industrie textile.",
    },
    did_you_know: {
      text: "L'œil d'autruche est plus grand que son cerveau.",
    },
  },
  {
    date: "2026-10-26",
    general_question: {
      question: "Quel est le nom de la déesse grecque de la victoire ?",
      answer: "Nikè.",
      explanation: "Nikè (ou Nike) est souvent représentée ailée.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites de vitesse globales sur Internet (débit) pour réduire la consommation d'énergie des centres de données ?",
      notes:
        "Débat sur l'écologie numérique, la performance et l'accès à la haute vitesse.",
    },
    did_you_know: {
      text: "La Terre est la planète la plus dense du système solaire.",
    },
  },
  {
    date: "2026-10-27",
    general_question: {
      question:
        "Quel est le seul pays d'Europe qui partage une frontière terrestre avec le Danemark ?",
      answer: "L'Allemagne.",
      explanation:
        "Le Danemark est en grande partie entouré d'eau, mais partage une courte frontière terrestre avec l'Allemagne au sud (Jutland).",
    },
    open_question: {
      question:
        "La vaccination contre les maladies infantiles (Rougeole, etc.) devrait-elle être strictement obligatoire pour l'inscription à l'école ?",
      notes:
        "Débat sur l'immunité collective, la liberté de choix des parents et la santé publique.",
    },
    did_you_know: {
      text: "Un 'joli' (unité de mesure) est utilisé pour définir le travail effectué par une force.",
    },
  },
  {
    date: "2026-10-28",
    general_question: {
      question:
        "Quel écrivain français est l'auteur des essais philosophiques 'L'Étranger' et 'La Peste' ?",
      answer: "Albert Camus.",
      explanation:
        "Camus était un philosophe, écrivain et lauréat du prix Nobel de littérature (1957).",
    },
    open_question: {
      question:
        "Les banques devraient-elles cesser de financer les projets d'énergies fossiles pour accélérer la transition écologique ?",
      notes:
        "Débat sur la finance verte, la responsabilité des institutions financières et l'approvisionnement énergétique.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-10-29",
    general_question: {
      question: "Quelle est la capitale de l'Islande ?",
      answer: "Reykjavik.",
      explanation: "Reykjavik est la capitale la plus septentrionale du monde.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles interdire l'utilisation des écrans (smartphones, tablettes) en classe, même à des fins pédagogiques ?",
      notes:
        "Débat sur la distraction, les outils numériques éducatifs et l'impact sur la concentration des élèves.",
    },
    did_you_know: {
      text: "La 'Journée mondiale de l'environnement' est célébrée chaque 5 juin.",
    },
  },
  {
    date: "2026-10-30",
    general_question: {
      question:
        "Quel événement majeur de la Seconde Guerre mondiale est commémoré le 6 juin ?",
      answer: "Le débarquement de Normandie (D-Day).",
      explanation:
        "Le 6 juin 1944, les forces alliées ont lancé l'assaut amphibie le plus important de l'histoire.",
    },
    open_question: {
      question:
        "Faut-il imposer une 'taxe sur la malbouffe' pour financer la prévention des maladies liées à l'alimentation ?",
      notes:
        "Débat sur la fiscalité comportementale, la liberté de consommation et l'impact sur les revenus modestes.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas ; elles ont de courtes périodes de repos de quelques minutes.",
    },
  },
  {
    date: "2026-10-31",
    general_question: {
      question:
        "Quel est le nom de la couche de l'atmosphère terrestre qui absorbe la majeure partie du rayonnement ultraviolet du Soleil ?",
      answer: "La couche d'Ozone.",
      explanation:
        "Située principalement dans la stratosphère, la couche d'ozone ($\text{O}_3$) est essentielle pour protéger la vie sur Terre.",
    },
    open_question: {
      question:
        "Les robots devraient-ils payer des impôts ou des cotisations sociales pour compenser les emplois qu'ils suppriment ?",
      notes:
        "Débat sur la 'taxe robot', le financement de la protection sociale et la définition du travail à l'ère de l'automatisation.",
    },
    did_you_know: {
      text: "Le mot 'radar' est un acronyme signifiant 'Radio Detection And Ranging'.",
    },
  },
  {
    date: "2026-11-01",
    general_question: {
      question:
        "Quel animal marin est le plus grand invertébré (sans colonne vertébrale) connu ?",
      answer: "Le calmar colossal (Mesonychoteuthis hamiltoni).",
      explanation:
        "Le calmar colossal est généralement plus lourd et détient le record du plus grand œil du monde animal.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Journée mondiale des océans' est célébrée chaque 8 juin.",
    },
  },
  {
    date: "2026-11-02",
    general_question: {
      question:
        "Qui a peint 'Les Noces de Cana', la plus grande toile du musée du Louvre ?",
      answer: "Paul Véronèse.",
      explanation:
        "Cette œuvre massive (6,77 m par 9,94 m) représente le premier miracle de Jésus-Christ.",
    },
    open_question: {
      question:
        "La censure de contenu sur Internet par les plateformes privées est-elle une protection nécessaire ou une atteinte à la liberté d'expression ?",
      notes:
        "Débat sur la modération du contenu, la responsabilité des grandes entreprises technologiques et les abus potentiels.",
    },
    did_you_know: {
      text: "La Russie possède la plus longue frontière terrestre du monde, s'étendant sur plus de 22 400 km à travers 14 pays.",
    },
  },
  {
    date: "2026-11-03",
    general_question: {
      question:
        "Quel est le plus grand désert de sable au monde (hors régions polaires) ?",
      answer: "Le Sahara.",
      explanation:
        "Le Sahara, qui couvre une grande partie de l'Afrique du Nord, est le plus grand désert chaud.",
    },
    open_question: {
      question:
        "Le tourisme de masse est-il compatible avec la préservation des sites historiques et naturels ?",
      notes:
        "Débat sur les quotas d'accès, la dégradation des sites (ex: Venise, Machu Picchu) et l'économie locale.",
    },
    did_you_know: {
      text: "Les escargots ont environ 14 000 dents, situées sur leur langue appelée radula.",
    },
  },
  {
    date: "2026-11-04",
    general_question: {
      question: "Quelle est l'unité de mesure de la force ?",
      answer: "Le Newton (N).",
      explanation:
        "Nommé d'après Isaac Newton, $1 \text{Newton}$ est la force nécessaire pour accélérer une masse de $1 \text{kg}$ à raison de $1 \text{m/s}^2$ ($F = ma$).",
    },
    open_question: {
      question:
        "Les gouvernements devraient-ils imposer un temps de 'déconnexion' numérique obligatoire pour les citoyens ?",
      notes:
        "Débat sur le droit à la tranquillité, l'hyperconnexion et la santé mentale collective.",
    },
    did_you_know: {
      text: "Le seul État des États-Unis à produire du café est Hawaï.",
    },
  },
  {
    date: "2026-11-05",
    general_question: {
      question:
        "Quel pays a remporté la première Coupe du Monde de football organisée en Afrique (2010) ?",
      answer: "L'Espagne.",
      explanation: "L'Espagne a battu les Pays-Bas en finale à Johannesburg.",
    },
    open_question: {
      question:
        "Faut-il mettre fin au secret bancaire dans tous les pays pour lutter contre l'évasion fiscale et le blanchiment d'argent ?",
      notes:
        "Débat sur la souveraineté fiscale, la protection des données et la justice économique mondiale.",
    },
    did_you_know: {
      text: "La température la plus chaude jamais enregistrée sur Terre est de $56,7^{circ}\text{C}$ dans la Vallée de la Mort, en Californie, en 1913.",
    },
  },
  {
    date: "2026-11-06",
    general_question: {
      question:
        "Qui a inventé l'imprimerie à caractères mobiles en Europe au $\text{XV}^e$ siècle ?",
      answer: "Johannes Gutenberg.",
      explanation:
        "Son invention (vers 1440) a permis la diffusion rapide du savoir.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles imposer le port d'un uniforme pour réduire les inégalités sociales et la pression de la mode ?",
      notes:
        "Débat sur l'égalité, l'expression individuelle et le coût d'un uniforme scolaire.",
    },
    did_you_know: {
      text: "La foudre frappe les hommes beaucoup plus souvent que les femmes (environ 5 fois plus).",
    },
  },
  {
    date: "2026-11-07",
    general_question: {
      question:
        "Quel est le nom de l'instrument de musique composé de 88 touches ?",
      answer: "Le Piano.",
      explanation:
        "Un piano moderne standard possède 52 touches blanches et 36 touches noires, soit un total de 88 touches.",
    },
    open_question: {
      question:
        "Faut-il réglementer la durée maximale de travail par semaine (32 heures, 4 jours) pour améliorer le bien-être général ?",
      notes:
        "Débat sur la productivité, le stress professionnel et l'équilibre vie privée/vie professionnelle.",
    },
    did_you_know: {
      text: "Le 14 juin est la 'Journée mondiale du donneur de sang'.",
    },
  },
  {
    date: "2026-11-08",
    general_question: {
      question: "Quel est l'élément chimique avec le symbole 'Au' ?",
      answer: "L'Or.",
      explanation: "Le symbole Au vient du mot latin aurum.",
    },
    open_question: {
      question:
        "L'exploration des fonds marins est-elle plus importante pour l'humanité que l'exploration spatiale ?",
      notes:
        "Débat sur la biodiversité marine vs. les avancées technologiques spatiales.",
    },
    did_you_know: {
      text: "Un 'parsec' est une unité de mesure de distance utilisée en astronomie.",
    },
  },
  {
    date: "2026-11-09",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité carbone' (compenser les émissions) est-il une solution écologique viable ou un permis de polluer pour les entreprises ?",
      notes:
        "Débat sur l'efficacité de la compensation (plantation d'arbres) face à la nécessité de la réduction absolue.",
    },
    did_you_know: {
      text: "Les nuages portent des noms latins pour décrire leur apparence.",
    },
  },
  {
    date: "2026-11-10",
    general_question: {
      question:
        "Quel est le nom de la péninsule partagée par l'Espagne et le Portugal ?",
      answer: "La péninsule Ibérique.",
      explanation:
        "La péninsule est située à l'extrémité sud-ouest de l'Europe.",
    },
    open_question: {
      question:
        "Faut-il limiter le droit de propriété pour des raisons écologiques (ex: interdiction de construire sur certaines terres naturelles) ?",
      notes:
        "Débat sur le droit individuel versus l'intérêt général de la préservation de l'environnement.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-11-11",
    general_question: {
      question:
        "Quel scientifique a découvert la loi de la gravitation universelle ?",
      answer: "Isaac Newton.",
      explanation:
        "Newton a formulé cette loi dans son ouvrage 'Philosophiae Naturalis Principia Mathematica' (1687).",
    },
    open_question: {
      question:
        "L'éducation civique devrait-elle inclure des cours obligatoires sur la vérification des sources (fact-checking) et la pensée critique ?",
      notes:
        "Débat sur la lutte contre la désinformation (fake news) et le rôle de l'école dans la formation d'un citoyen éclairé.",
    },
    did_you_know: {
      text: "Le mont Everest s'agrandit d'environ 4 millimètres par an.",
    },
  },
  {
    date: "2026-11-12",
    general_question: {
      question:
        "Quel est le nom de l'explorateur portugais crédité du premier tour du monde (bien qu'il soit mort en cours de route) ?",
      answer: "Fernand de Magellan.",
      explanation:
        "Magellan a initié l'expédition en 1519. Il est mort aux Philippines en 1521.",
    },
    open_question: {
      question:
        "L'abolition de la peine de mort est-elle un signe de civilisation avancée ou une menace pour la justice et la sécurité ?",
      notes:
        "Débat sur les droits humains, la dissuasion criminelle et le risque d'erreur judiciaire.",
    },
    did_you_know: {
      text: "Les papillons goûtent avec leurs pieds.",
    },
  },
  {
    date: "2026-11-13",
    general_question: {
      question:
        "Quel est le nom de la science qui étudie le comportement des animaux dans leur environnement naturel ?",
      answer: "L'Éthologie.",
      explanation:
        "L'éthologie est l'étude scientifique et objective du comportement animal.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de divulguer les algorithmes utilisés pour prendre des décisions importantes (recrutement, prêts) ?",
      notes:
        "Débat sur la transparence des algorithmes et le risque de biais dans les systèmes automatisés.",
    },
    did_you_know: {
      text: "Le 20 juin est le jour le plus long de l'année dans l'hémisphère nord.",
    },
  },

  // Jours 325 à 355 : Novembre (17 jours restants) & Décembre 2026 (14 premiers jours)
  {
    date: "2026-11-14",
    general_question: {
      question:
        "Quel est l'élément chimique essentiel aux plantes pour la photosynthèse, qui leur donne leur couleur verte ?",
      answer: "Le Magnésium (Mg).",
      explanation:
        "Le Magnésium est un constituant central de la molécule de chlorophylle.",
    },
    open_question: {
      question:
        "L'art doit-il être financé principalement par des fonds publics ou par des mécènes privés ?",
      notes:
        "Débat sur l'indépendance artistique, l'accès à la culture et la politique budgétaire.",
    },
    did_you_know: {
      text: "Le jour le plus long de l'année est le solstice d'été.",
    },
  },
  {
    date: "2026-11-15",
    general_question: {
      question: "Quel est le nom du gaz noble le plus léger ?",
      answer: "L'Hélium (He).",
      explanation:
        "L'hélium est le deuxième élément le plus abondant dans l'univers après l'hydrogène.",
    },
    open_question: {
      question:
        "Faut-il taxer les transactions financières spéculatives pour financer les services sociaux ?",
      notes:
        "Débat sur la 'taxe Tobin', la stabilité financière et la redistribution des richesses.",
    },
    did_you_know: {
      text: "La plus ancienne loi toujours en vigueur au monde est celle sur les feux de circulation au Royaume-Uni.",
    },
  },
  {
    date: "2026-11-16",
    general_question: {
      question:
        "Quel est l'organe qui consomme le plus d'oxygène dans le corps humain ?",
      answer: "Le cerveau.",
      explanation:
        "Bien qu'il ne représente qu'environ 2% du poids corporel, le cerveau consomme près de 20% de l'oxygène total du corps au repos.",
    },
    open_question: {
      question:
        "Les voyages internationaux devraient-ils être limités pour les particuliers, et réservés aux nécessités professionnelles ou humanitaires ?",
      notes:
        "Débat sur la réduction de l'empreinte carbone personnelle et l'impact sur le tourisme et les échanges culturels.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-11-17",
    general_question: {
      question:
        "Quel est le nom du célèbre musée à Saint-Pétersbourg, Russie ?",
      answer: "Le Musée de l'Ermitage.",
      explanation:
        "Situé dans le Palais d'Hiver, l'Ermitage est l'un des plus grands et des plus anciens musées du monde.",
    },
    open_question: {
      question:
        "L'agriculture biologique est-elle la seule voie possible pour une alimentation saine et durable ?",
      notes:
        "Débat sur la productivité, l'utilisation des pesticides et le coût pour le consommateur.",
    },
    did_you_know: {
      text: "La baleine bleue, le plus grand animal de la planète, a un cœur de la taille d'une petite voiture.",
    },
  },
  {
    date: "2026-11-18",
    general_question: {
      question: "Qui a fondé l'entreprise automobile Ford ?",
      answer: "Henry Ford.",
      explanation: "Henry Ford a fondé la Ford Motor Company en 1903.",
    },
    open_question: {
      question:
        "Faut-il interdire l'utilisation des animaux sauvages dans les cirques et les spectacles itinérants ?",
      notes:
        "Débat sur le bien-être animal, la tradition culturelle et les alternatives éthiques au spectacle.",
    },
    did_you_know: {
      text: "La statue de la Liberté à New York était à l'origine destinée à la ville de Port-Saïd, en Égypte.",
    },
  },
  {
    date: "2026-11-19",
    general_question: {
      question:
        "Quel prix littéraire français est souvent considéré comme le plus prestigieux ?",
      answer: "Le Prix Goncourt.",
      explanation:
        "Créé en 1903, le Goncourt est décerné à l'auteur du meilleur ouvrage d'imagination en prose de l'année.",
    },
    open_question: {
      question:
        "Le concept de 'neutralité du net' (égalité de traitement des données) est-il essentiel pour la liberté d'Internet ?",
      notes:
        "Débat sur le contrôle des flux de données par les fournisseurs d'accès (FAI) et l'accès équitable à l'information.",
    },
    did_you_know: {
      text: "La langue la plus parlée dans le monde, en termes de locuteurs natifs, est le mandarin (chinois).",
    },
  },
  {
    date: "2026-11-20",
    general_question: {
      question:
        "Quelle est la fleur traditionnellement offerte en France le 1er mai ?",
      answer: "Le muguet (Clochette de mai).",
      explanation: "Offrir du muguet est un porte-bonheur pour le mois de mai.",
    },
    open_question: {
      question:
        "Les syndicats ont-ils encore un rôle pertinent dans la défense des droits des travailleurs de l'économie numérique (freelance, plateformes) ?",
      notes:
        "Débat sur l'organisation des travailleurs indépendants, la précarité et les nouvelles formes d'emploi.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas.",
    },
  },
  {
    date: "2026-11-21",
    general_question: {
      question: "Quel est le plus grand État d'Afrique par sa superficie ?",
      answer: "L'Algérie.",
      explanation:
        "Depuis la partition du Soudan en 2011, l'Algérie est le plus vaste pays du continent africain.",
    },
    open_question: {
      question:
        "Le cinéma devrait-il être davantage subventionné par l'État pour garantir la diversité culturelle face aux superproductions ?",
      notes:
        "Débat sur l'industrie culturelle, la qualité artistique et la concurrence des plateformes de streaming.",
    },
    did_you_know: {
      text: "La plus vieille créature marine encore vivante est une éponge d'une espèce non identifiée.",
    },
  },
  {
    date: "2026-11-22",
    general_question: {
      question:
        "Quel pays a pour langue officielle le portugais en Amérique du Sud ?",
      answer: "Le Brésil.",
      explanation: "Le Brésil a été colonisé par le Portugal.",
    },
    open_question: {
      question:
        "Faut-il former des armées de 'soldats-robots' (entièrement autonomes) pour réduire les pertes humaines dans les conflits ?",
      notes:
        "Débat sur l'éthique de la guerre automatisée, le droit international et le risque de déshumanisation des conflits.",
    },
    did_you_know: {
      text: "La plus petite quantité de matière observable est le quark.",
    },
  },
  {
    date: "2026-11-23",
    general_question: {
      question:
        "Quel prix scientifique est souvent considéré comme l'équivalent du Prix Nobel en mathématiques ?",
      answer: "La Médaille Fields.",
      explanation:
        "Elle est décernée tous les quatre ans à des mathématiciens de moins de 40 ans.",
    },
    open_question: {
      question:
        "La liberté des médias est-elle menacée par la pression des annonceurs et la recherche du 'clic' à tout prix ?",
      notes:
        "Débat sur le modèle économique des médias, la qualité de l'information et le journalisme d'investigation.",
    },
    did_you_know: {
      text: "Le 4 mai est souvent célébré comme le 'Star Wars Day'.",
    },
  },
  {
    date: "2026-11-24",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Vatican qui abrite le plafond de Michel-Ange ?",
      answer: "La Chapelle Sixtine.",
      explanation:
        "Elle fait partie du complexe des Musées du Vatican et est célèbre pour ses fresques.",
    },
    open_question: {
      question:
        "L'industrie du jeu vidéo devrait-elle être tenue responsable de la représentation stéréotypée et violente de certains groupes sociaux ?",
      notes:
        "Débat sur la liberté de création, l'impact sur les joueurs et les lois sur le contenu numérique.",
    },
    did_you_know: {
      text: "Le chili est en fait un fruit (une baie).",
    },
  },
  {
    date: "2026-11-25",
    general_question: {
      question:
        "Quel est le plus grand volcan du système solaire, situé sur Mars ?",
      answer: "L'Olympus Mons.",
      explanation:
        "Avec une hauteur de 21,9 km, l'Olympus Mons est près de trois fois plus haut que l'Everest.",
    },
    open_question: {
      question:
        "Faut-il imposer des cours obligatoires de cuisine et de nutrition pour lutter contre l'obésité et les maladies associées ?",
      notes:
        "Débat sur l'éducation à la santé, la responsabilité individuelle et le rôle de l'école dans l'alimentation.",
    },
    did_you_know: {
      text: "La première monnaie métallique a été utilisée en Lydie (Turquie actuelle) vers 600 av. J.-C.",
    },
  },
  {
    date: "2026-11-26",
    general_question: {
      question:
        "Quel est le nom de la seule planète du système solaire qui tourne sur elle-même dans le sens des aiguilles d'une montre ?",
      answer: "Vénus.",
      explanation:
        "La rotation rétrograde de Vénus est une anomalie par rapport aux autres planètes.",
    },
    open_question: {
      question:
        "Les lanceurs d'alerte (whistleblowers) devraient-ils bénéficier d'une immunité totale pour les informations qu'ils révèlent ?",
      notes:
        "Débat sur la protection des sources, l'intérêt public et la sécurité nationale.",
    },
    did_you_know: {
      text: "La plus petite distance entre deux points dans l'espace-temps n'est pas une ligne droite, mais une géodésique (une courbe).",
    },
  },
  {
    date: "2026-11-27",
    general_question: {
      question:
        "Quel événement historique majeur est commémoré le 8 mai en France et dans d'autres pays alliés ?",
      answer:
        "La Victoire de 1945 (fin de la Seconde Guerre mondiale en Europe).",
      explanation: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie.",
    },
    open_question: {
      question:
        "Le service militaire ou civique obligatoire (mixte) est-il nécessaire pour renforcer l'unité nationale et le sens des responsabilités ?",
      notes:
        "Débat sur les coûts, la liberté individuelle et l'efficacité d'une formation civique et militaire.",
    },
    did_you_know: {
      text: "Le mot 'ambulance' vient du français 'hôpital ambulant'.",
    },
  },
  {
    date: "2026-11-28",
    general_question: {
      question:
        "Quel animal est le symbole national de la Chine et est considéré comme une espèce menacée ?",
      answer: "Le Panda géant.",
      explanation:
        "Le panda est originaire des régions montagneuses du centre de la Chine.",
    },
    open_question: {
      question:
        "La régulation de la taille et de la concentration des grandes entreprises technologiques (GAFA) est-elle suffisante pour empêcher les monopoles ?",
      notes:
        "Débat sur le droit de la concurrence, la protection des données et le pouvoir politique des multinationales.",
    },
    did_you_know: {
      text: "Les astronautes qui travaillent à l'extérieur de l'ISS doivent porter des couches pour adultes.",
    },
  },
  {
    date: "2026-11-29",
    general_question: {
      question:
        "Quel artiste est l'auteur de la célèbre sculpture 'Le Penseur' ?",
      answer: "Auguste Rodin.",
      explanation:
        "Créée à l'origine en 1880, cette sculpture en bronze représente un homme en méditation profonde.",
    },
    open_question: {
      question:
        "Les réseaux sociaux devraient-ils être contraints d'utiliser des algorithmes qui favorisent le contenu 'positif' ou 'éducatif' ?",
      notes:
        "Débat sur l'impact sur le bien-être, la liberté algorithmique et le risque de censure du contenu critique.",
    },
    did_you_know: {
      text: "Le seul oiseau capable de voir la couleur bleue est le pigeon.",
    },
  },
  {
    date: "2026-11-30",
    general_question: {
      question: "Quelle est l'unité de mesure de la puissance électrique ?",
      answer: "Le Watt (W).",
      explanation:
        "Le Watt est l'unité SI de la puissance, nommée d'après l'inventeur écossais James Watt.",
    },
    open_question: {
      question:
        "Faut-il développer l'énergie de fusion nucléaire (qui promet une énergie quasi-illimitée et propre) au détriment de l'énergie de fission (nucléaire classique) ?",
      notes:
        "Débat sur l'horizon technologique (ITER), les coûts de recherche et la nécessité d'une production d'énergie immédiate.",
    },
    did_you_know: {
      text: "Le cri d'une mouche est appelé le 'bourdonnement'.",
    },
  },
  {
    date: "2026-12-01",
    general_question: {
      question: "Quel est le nom du plus grand océan de la Terre ?",
      answer: "L'océan Pacifique.",
      explanation:
        "Il est si vaste qu'il couvre près d'un tiers de la surface terrestre.",
    },
    open_question: {
      question:
        "L'apprentissage des langues mortes (latin, grec ancien) est-il encore pertinent dans le système éducatif moderne ?",
      notes:
        "Débat sur l'importance des racines culturelles, l'étymologie et la nécessité de préparer aux métiers du futur.",
    },
    did_you_know: {
      text: "Le pont de Londres que l'on voit souvent en photo n'est pas le 'London Bridge' historique, mais le 'Tower Bridge'.",
    },
  },
  {
    date: "2026-12-02",
    general_question: {
      question: "Quel pays a pour capitale La Havane ?",
      answer: "Cuba.",
      explanation: "La Havane est la capitale et la plus grande ville de Cuba.",
    },
    open_question: {
      question:
        "La surveillance biométrique (empreintes, iris) dans les lieux publics est-elle une atteinte intolérable à la liberté ?",
      notes:
        "Débat sur le droit à l'anonymat, la sécurité et la traçabilité des individus par l'État.",
    },
    did_you_know: {
      text: "Le mot 'alphabet' vient des deux premières lettres de l'alphabet grec : 'alpha' et 'bêta'.",
    },
  },
  {
    date: "2026-12-03",
    general_question: {
      question:
        "Quel est le nom de l'hormone du sommeil, souvent utilisée pour traiter les troubles du sommeil ?",
      answer: "La Mélatonine.",
      explanation:
        "La mélatonine est sécrétée par la glande pinéale. Sa production est stimulée par l'obscurité.",
    },
    open_question: {
      question:
        "Les cryptomonnaies peuvent-elles réellement remplacer les monnaies fiduciaires traditionnelles (Euro, Dollar) ?",
      notes:
        "Débat sur la volatilité, la régulation, la confiance et le rôle des banques centrales.",
    },
    did_you_know: {
      text: "La plus petite cellule du corps humain est le spermatozoïde, et la plus grande est l'ovule.",
    },
  },
  {
    date: "2026-12-04",
    general_question: {
      question: "Quelle était la capitale de l'Empire byzantin ?",
      answer: "Constantinople (aujourd'hui Istanbul).",
      explanation:
        "Fondée par l'empereur Constantin Ier en 330 apr. J.-C., elle a été le centre de l'Empire romain d'Orient.",
    },
    open_question: {
      question:
        "Faut-il limiter l'accès aux forêts et aux zones naturelles pour les protéger de la surfréquentation touristique ?",
      notes:
        "Débat sur l'écotourisme, le droit d'accès à la nature et la conservation des écosystèmes.",
    },
    did_you_know: {
      text: "Le Soleil est techniquement une étoile naine jaune de type G, mais elle est en fait blanche vue de l'espace.",
    },
  },
  {
    date: "2026-12-05",
    general_question: {
      question:
        "Quel est le nom de la galaxie la plus proche de la Voie Lactée ?",
      answer: "La galaxie d'Andromède (M31).",
      explanation:
        "Andromède est une galaxie spirale géante située à environ 2,5 millions d'années-lumière.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Zone de l'Océan Pacifique' est si lointaine qu'il y a plus de chance d'y rencontrer un astronaute que n'importe qui d'autre.",
    },
  },
  {
    date: "2026-12-06",
    general_question: {
      question: "Quel est le nom du plus grand lac salé du monde ?",
      answer: "La Mer Caspienne.",
      explanation:
        "Bien qu'appelée 'mer', elle est techniquement le plus grand lac du monde en superficie.",
    },
    open_question: {
      question:
        "L'éducation religieuse devrait-elle être laissée entièrement aux familles et aux institutions religieuses, ou faire partie de l'école publique ?",
      notes:
        "Débat sur la neutralité de l'État, le pluralisme et la transmission des valeurs.",
    },
    did_you_know: {
      text: "Le corps humain est constitué d'environ 60% d'eau.",
    },
  },
  {
    date: "2026-12-07",
    general_question: {
      question:
        "Quel est le principal composant de la coquille d'un œuf de poule ?",
      answer: "Le Carbonate de Calcium ($\text{CaCO}_3$).",
      explanation:
        "Le carbonate de calcium est une substance très solide qui protège l'œuf.",
    },
    open_question: {
      question:
        "Faut-il taxer davantage les produits importés pour encourager la production locale et réduire l'empreinte carbone du transport ?",
      notes:
        "Débat sur le protectionnisme, les accords commerciaux internationaux et l'autonomie alimentaire.",
    },
    did_you_know: {
      text: "Le seul continent qui n'a pas de glaciers est l'Australie.",
    },
  },
  {
    date: "2026-12-08",
    general_question: {
      question:
        "Qui est l'auteur des romans policiers 'Dix Petits Nègres' et 'Le Crime de l'Orient-Express' ?",
      answer: "Agatha Christie.",
      explanation:
        "Agatha Christie est l'une des romancières les plus vendues de tous les temps.",
    },
    open_question: {
      question:
        "L'accès à l'information sur Internet devrait-il être payant pour garantir la qualité et la pérennité du journalisme ?",
      notes:
        "Débat sur le 'paywall', le modèle économique des médias et l'accès gratuit à la connaissance.",
    },
    did_you_know: {
      text: "Le mot 'nerd' (intello) a été inventé par le Dr Seuss dans son livre 'If I Ran the Zoo' en 1950.",
    },
  },
  {
    date: "2026-12-09",
    general_question: {
      question:
        "Quel est le nom du célèbre musée du Royaume-Uni, connu pour abriter la Pierre de Rosette ?",
      answer: "Le British Museum.",
      explanation:
        "Situé à Londres, le British Museum possède des collections couvrant l'histoire, l'art et la culture humaines.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'biens partagés' (voitures, outils, logements) pour lutter contre la surconsommation et l'individualisme ?",
      notes:
        "Débat sur l'économie collaborative, la propriété privée et l'efficacité des ressources.",
    },
    did_you_know: {
      text: "Les nuages ne sont pas composés de vapeur d'eau (qui est un gaz invisible).",
    },
  },
  {
    date: "2026-12-10",
    general_question: {
      question: "Quel est le plus haut sommet d'Afrique ?",
      answer: "Le Mont Kilimandjaro.",
      explanation:
        "Situé en Tanzanie, il est le plus haut sommet isolé du monde.",
    },
    open_question: {
      question:
        "Le droit au suicide assisté devrait-il être étendu aux personnes qui ne sont pas en phase terminale, mais dont la souffrance psychologique est jugée insupportable ?",
      notes:
        "Débat sur l'autonomie, l'évaluation de la souffrance et la définition de la dignité de la fin de vie.",
    },
    did_you_know: {
      text: "Le plus long règne d'un monarque britannique est celui de la Reine Élisabeth II.",
    },
  },
  {
    date: "2026-12-11",
    general_question: {
      question:
        "Quel est le nom du traité qui a mis fin à la Première Guerre mondiale ?",
      answer: "Le Traité de Versailles.",
      explanation:
        "Signé le 28 juin 1919, il a officiellement mis fin au conflit.",
    },
    open_question: {
      question:
        "L'humanité devrait-elle se concentrer sur la conservation des espèces menacées ou sur la restauration des écosystèmes entiers ?",
      notes:
        "Débat sur les priorités de la biodiversité : protéger l'emblématique ou le fonctionnel.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas.",
    },
  },
  {
    date: "2026-12-12",
    general_question: {
      question:
        "Quel est le nom de la force qui s'oppose au mouvement dans l'air ou dans un liquide ?",
      answer: "La Traînée (ou Résistance de l'air/fluide).",
      explanation:
        "La traînée est la force de friction qui agit parallèlement à la vitesse du fluide.",
    },
    open_question: {
      question:
        "Faut-il introduire le droit à l'erreur fiscale pour les citoyens de bonne foi, sans pénalité lourde ?",
      notes:
        "Débat sur la complexité de l'administration, la confiance de l'État envers le citoyen et les sanctions.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-12-13",
    general_question: {
      question: "Quelle est la capitale de l'Inde ?",
      answer: "New Delhi.",
      explanation: "New Delhi est la capitale de l'Inde.",
    },
    open_question: {
      question:
        "L'enseignement doit-il se faire uniquement en présentiel pour garantir la qualité ou doit-on généraliser l'enseignement en ligne ?",
      notes:
        "Débat sur l'interactivité sociale, l'accès à distance et l'efficacité des plateformes numériques.",
    },
    did_you_know: {
      text: "Les étoiles filantes ne sont pas des étoiles.",
    },
  },
  {
    date: "2026-12-14",
    general_question: {
      question: "Qui a peint 'Le Serment des Horaces' ?",
      answer: "Jacques-Louis David.",
      explanation:
        "Ce tableau néoclassique (1784) illustre les vertus civiques.",
    },
    open_question: {
      question:
        "Le droit de vote devrait-il être conditionné à la réussite d'un test de connaissances civiques de base ?",
      notes:
        "Débat sur la compétence de l'électeur, l'élitisme et l'universalité du suffrage.",
    },
    did_you_know: {
      text: "La première personne à faire le tour du monde en solitaire et sans escale a été l'Australien Jon Sanders en 1988.",
    },
  },

  // Jours 356 à 365 : Décembre 2026 (17 jours restants)
  {
    date: "2026-12-15",
    general_question: {
      question:
        "Quel est le nom de la plus grande baie du monde (par sa ligne côtière) ?",
      answer: "La baie d'Hudson.",
      explanation:
        "Située dans le nord-est du Canada, la baie d'Hudson est la deuxième plus grande baie du monde après le golfe du Mexique.",
    },
    open_question: {
      question:
        "Les entreprises devraient-elles être obligées de partager leurs profits avec leurs employés (intéressement) ?",
      notes:
        "Débat sur le capitalisme, la participation des salariés et la redistribution des richesses.",
    },
    did_you_know: {
      text: "Le seul chiffre dont l'orthographe contient la lettre 'a' est 'quatre'.",
    },
  },
  {
    date: "2026-12-16",
    general_question: {
      question: "Qui est l'auteur du roman 'Le Petit Prince' ?",
      answer: "Antoine de Saint-Exupéry.",
      explanation:
        "Publié en 1943, ce conte philosophique est l'un des livres les plus traduits et vendus au monde.",
    },
    open_question: {
      question:
        "Le système de santé occidental (traitement des maladies) est-il trop dépendant des grandes entreprises pharmaceutiques ?",
      notes: "Débat sur le lobbying, les brevets et la recherche indépendante.",
    },
    did_you_know: {
      text: "Le mot 'chèque' vient du mot persan 'sak' qui signifie 'mandat ou document légal'.",
    },
  },
  {
    date: "2026-12-17",
    general_question: {
      question:
        "Quel était le nom de l'explorateur vénitien qui a parcouru la Route de la soie au $\text{XIII}^e$ siècle ?",
      answer: "Marco Polo.",
      explanation:
        "Son livre, Le Livre des merveilles, a documenté ses voyages en Asie.",
    },
    open_question: {
      question:
        "Faut-il encourager les 'monnaies locales' (complémentaires) pour favoriser l'économie circulaire et le commerce de proximité ?",
      notes:
        "Débat sur l'impact sur l'économie nationale, la fraude et la confiance dans les monnaies alternatives.",
    },
    did_you_know: {
      text: "La plus ancienne université du monde toujours en activité est l'Université Al Quaraouiyine, fondée à Fès, Maroc, en 859.",
    },
  },
  {
    date: "2026-12-18",
    general_question: {
      question:
        "Quel est le nom du gaz noble utilisé pour éclairer les panneaux publicitaires et les tubes néon (couleur rouge-orange) ?",
      answer: "Le Néon (Ne).",
      explanation:
        "Le néon émet une lumière rouge-orange vif lorsqu'il est sous tension électrique.",
    },
    open_question: {
      question:
        "Le recours au tir de barrage pour la protection des cultures contre les animaux (loups, sangliers) est-il éthiquement acceptable ?",
      notes:
        "Débat sur la coexistence homme-faune, la protection des espèces et l'économie agricole.",
    },
    did_you_know: {
      text: "Le mot 'samouraï' vient du mot japonais 'saburau', qui signifie 'servir'.",
    },
  },
  {
    date: "2026-12-19",
    general_question: {
      question: "Quel fleuve est considéré comme le plus sacré de l'Inde ?",
      answer: "Le Gange (Ganga).",
      explanation: "Le Gange est vénéré par les hindous comme la déesse Ganga.",
    },
    open_question: {
      question:
        "La surveillance des frontières par des drones et des capteurs est-elle une solution technologique viable et humaine à la crise migratoire ?",
      notes:
        "Débat sur la sécurité, le droit d'asile et la déshumanisation des contrôles.",
    },
    did_you_know: {
      text: "Le drapeau olympique, avec ses cinq anneaux, a été conçu en 1913.",
    },
  },
  {
    date: "2026-12-20",
    general_question: {
      question:
        "Quelle est la principale source de Vitamine $\text{D}$ pour le corps humain ?",
      answer: "Le Soleil (exposition aux rayons UV).",
      explanation:
        "L'exposition au soleil permet à la peau de synthétiser la Vitamine $\text{D}$.",
    },
    open_question: {
      question:
        "Le tabac (ou la nicotine) devrait-il être totalement interdit pour les générations nées après 2010 ?",
      notes:
        "Débat sur la santé publique, l'interdiction générationnelle et le droit individuel de fumer.",
    },
    did_you_know: {
      text: "Une année sur Mars dure 687 jours terrestres.",
    },
  },
  {
    date: "2026-12-21",
    general_question: {
      question:
        "Quel est le nom de la force qui maintient l'eau à la surface d'un verre, malgré la gravité ?",
      answer: "La Tension de surface.",
      explanation:
        "La tension de surface est le phénomène par lequel la surface d'un liquide se comporte comme une membrane élastique.",
    },
    open_question: {
      question:
        "La 'Fast Fashion' (mode rapide) devrait-elle être limitée par des lois pour réduire son impact environnemental et social ?",
      notes:
        "Débat sur la production de vêtements jetables, la pollution et les conditions de travail dans l'industrie textile.",
    },
    did_you_know: {
      text: "L'œil d'autruche est plus grand que son cerveau.",
    },
  },
  {
    date: "2026-12-22",
    general_question: {
      question: "Quel est le nom de la déesse grecque de la victoire ?",
      answer: "Nikè.",
      explanation: "Nikè (ou Nike) est souvent représentée ailée.",
    },
    open_question: {
      question:
        "Faut-il imposer des limites de vitesse globales sur Internet (débit) pour réduire la consommation d'énergie des centres de données ?",
      notes:
        "Débat sur l'écologie numérique, la performance et l'accès à la haute vitesse.",
    },
    did_you_know: {
      text: "La Terre est la planète la plus dense du système solaire.",
    },
  },
  {
    date: "2026-12-23",
    general_question: {
      question:
        "Quel est le seul pays d'Europe qui partage une frontière terrestre avec le Danemark ?",
      answer: "L'Allemagne.",
      explanation:
        "Le Danemark est en grande partie entouré d'eau, mais partage une courte frontière terrestre avec l'Allemagne au sud (Jutland).",
    },
    open_question: {
      question:
        "La vaccination contre les maladies infantiles (Rougeole, etc.) devrait-elle être strictement obligatoire pour l'inscription à l'école ?",
      notes:
        "Débat sur l'immunité collective, la liberté de choix des parents et la santé publique.",
    },
    did_you_know: {
      text: "Un 'joli' (unité de mesure) est utilisé pour définir le travail effectué par une force.",
    },
  },
  {
    date: "2026-12-24",
    general_question: {
      question:
        "Quel écrivain français est l'auteur des essais philosophiques 'L'Étranger' et 'La Peste' ?",
      answer: "Albert Camus.",
      explanation:
        "Camus était un philosophe, écrivain et lauréat du prix Nobel de littérature (1957).",
    },
    open_question: {
      question:
        "Les banques devraient-elles cesser de financer les projets d'énergies fossiles pour accélérer la transition écologique ?",
      notes:
        "Débat sur la finance verte, la responsabilité des institutions financières et l'approvisionnement énergétique.",
    },
    did_you_know: {
      text: "La plus petite distance entre la Terre et la Lune est appelée 'périgée'.",
    },
  },
  {
    date: "2026-12-25",
    general_question: {
      question:
        "Quel est l'événement chrétien principal célébré le 25 décembre ?",
      answer: "Noël (la naissance de Jésus-Christ).",
      explanation:
        "Noël est une fête majeure dans le monde entier, à la fois religieuse et culturelle.",
    },
    open_question: {
      question:
        "Le consumérisme excessif lié aux fêtes de fin d'année est-il éthiquement justifiable face aux enjeux écologiques et sociaux ?",
      notes:
        "Débat sur la surconsommation, le sens de la fête et les alternatives plus sobres.",
    },
    did_you_know: {
      text: "La tradition de l'arbre de Noël est originaire de l'Allemagne au $\text{XVI}^e$ siècle.",
    },
  },
  {
    date: "2026-12-26",
    general_question: {
      question:
        "Quel est le nom de la ville qui est la capitale de l'Islande ?",
      answer: "Reykjavik.",
      explanation: "Reykjavik est la capitale la plus septentrionale du monde.",
    },
    open_question: {
      question:
        "Les écoles devraient-elles interdire l'utilisation des écrans (smartphones, tablettes) en classe, même à des fins pédagogiques ?",
      notes:
        "Débat sur la distraction, les outils numériques éducatifs et l'impact sur la concentration des élèves.",
    },
    did_you_know: {
      text: "Le 26 décembre est célébré comme le 'Boxing Day' dans de nombreux pays du Commonwealth.",
    },
  },
  {
    date: "2026-12-27",
    general_question: {
      question:
        "Quel événement majeur de la Seconde Guerre mondiale est commémoré le 6 juin ?",
      answer: "Le débarquement de Normandie (D-Day).",
      explanation:
        "Le 6 juin 1944, les forces alliées ont lancé l'assaut amphibie le plus important de l'histoire.",
    },
    open_question: {
      question:
        "Faut-il imposer une 'taxe sur la malbouffe' pour financer la prévention des maladies liées à l'alimentation ?",
      notes:
        "Débat sur la fiscalité comportementale, la liberté de consommation et l'impact sur les revenus modestes.",
    },
    did_you_know: {
      text: "Les fourmis domestiques ne dorment pas.",
    },
  },
  {
    date: "2026-12-28",
    general_question: {
      question:
        "Quel est le nom de la couche de l'atmosphère terrestre qui absorbe la majeure partie du rayonnement ultraviolet du Soleil ?",
      answer: "La couche d'Ozone.",
      explanation:
        "Située principalement dans la stratosphère, la couche d'ozone ($\text{O}_3$) est essentielle pour protéger la vie sur Terre.",
    },
    open_question: {
      question:
        "Les robots devraient-ils payer des impôts ou des cotisations sociales pour compenser les emplois qu'ils suppriment ?",
      notes:
        "Débat sur la 'taxe robot', le financement de la protection sociale et la définition du travail à l'ère de l'automatisation.",
    },
    did_you_know: {
      text: "Le mot 'radar' est un acronyme signifiant 'Radio Detection And Ranging'.",
    },
  },
  {
    date: "2026-12-29",
    general_question: {
      question:
        "Quel animal marin est le plus grand invertébré (sans colonne vertébrale) connu ?",
      answer: "Le calmar colossal (Mesonychoteuthis hamiltoni).",
      explanation:
        "Le calmar colossal est généralement plus lourd et détient le record du plus grand œil du monde animal.",
    },
    open_question: {
      question:
        "Le système de notation 'âge légal de consommation' pour l'alcool et le tabac est-il efficace ou devrait-on privilégier l'éducation ?",
      notes:
        "Débat sur les lois restrictives, la responsabilité individuelle et la prévention des risques.",
    },
    did_you_know: {
      text: "La 'Journée mondiale des océans' est célébrée chaque 8 juin.",
    },
  },
  {
    date: "2026-12-30",
    general_question: {
      question:
        "Qui a peint 'Les Noces de Cana', la plus grande toile du musée du Louvre ?",
      answer: "Paul Véronèse.",
      explanation:
        "Cette œuvre massive (6,77 m par 9,94 m) représente le premier miracle de Jésus-Christ.",
    },
    open_question: {
      question:
        "La censure de contenu sur Internet par les plateformes privées est-elle une protection nécessaire ou une atteinte à la liberté d'expression ?",
      notes:
        "Débat sur la modération du contenu, la responsabilité des grandes entreprises technologiques et les abus potentiels.",
    },
    did_you_know: {
      text: "La Russie possède la plus longue frontière terrestre du monde.",
    },
  },
  {
    date: "2026-12-31",
    general_question: {
      question:
        "Quel est le plus grand désert de sable au monde (hors régions polaires) ?",
      answer: "Le Sahara.",
      explanation:
        "Le Sahara, qui couvre une grande partie de l'Afrique du Nord, est le plus grand désert chaud.",
    },
    open_question: {
      question:
        "Le tourisme de masse est-il compatible avec la préservation des sites historiques et naturels ?",
      notes:
        "Débat sur les quotas d'accès, la dégradation des sites (ex: Venise, Machu Picchu) et l'économie locale.",
    },
    did_you_know: {
      text: "Le 31 décembre est connu sous le nom de 'Réveillon de la Saint-Sylvestre', marquant la fin de l'année civile.",
    },
  },
];

// Fonction pour exporter les données dans le scope global ou par module export
if (typeof module !== "undefined" && module.exports) {
  module.exports = DAYS_DATA;
}
