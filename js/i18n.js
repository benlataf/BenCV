// Bascule de langue FR/EN pour le CV. Dictionnaire centralisé + application par data-attributes.
(function () {
    "use strict";

    var STORAGE_KEY = "bencv-lang";

    var STRINGS = {
        page_title: { fr: "Benjamin Menard, PhD — CTO | F2D Medical", en: "Benjamin Menard, PhD | CTO, F2D Medical" },
        meta_description: {
            fr: "Benjamin Menard, PhD — CTO & Cofondateur F2D Medical. Dispositifs médicaux, conformité réglementaire (MDR, ISO 13485, ISO 14971), essais cliniques, stratégie & due diligence.",
            en: "Benjamin Menard, PhD, CTO & Co-founder, F2D Medical. Medical devices, regulatory compliance (MDR, ISO 13485, ISO 14971), clinical trials, strategy & due diligence."
        },

        nav_about: { fr: "À propos", en: "About" },
        nav_projects: { fr: "Projets", en: "Projects" },
        nav_experience: { fr: "Expérience", en: "Experience" },
        nav_education: { fr: "Formation", en: "Education" },
        nav_skills: { fr: "Compétences", en: "Skills" },
        nav_patents: { fr: "Brevets", en: "Patents" },
        nav_courses: { fr: "Formations & Certifications", en: "Training & Certifications" },

        about_role: { fr: "CTO & Cofondateur — <strong>F2D Medical</strong>", en: "CTO & Co-founder, <strong>F2D Medical</strong>" },
        about_contact: {
            fr: "Caen / Colombelles, Normandie · <a href='mailto:contact@b-menard.fr'>contact@b-menard.fr</a>",
            en: "Caen / Colombelles, Normandy · <a href='mailto:contact@b-menard.fr'>contact@b-menard.fr</a>"
        },
        about_lead: {
            fr: "Entrepreneur, chercheur et CTO/ingénieur en innovation médicale, je combine plus de 10 ans d’expérience en neurosciences, ingénierie biomédicale et développement de dispositifs médicaux. En tant que CTO et cofondateur de F2D Medical, je pilote la conception, la validation et l’industrialisation de solutions innovantes de classe IIb, de l’idée à la mise sur le marché. <br>Expertise reconnue en conformité réglementaire : MDR 2017/745, ISO 13485, ISO 14971, IEC 62366-1, IEC 60601-1, évaluation clinique ; j’ai participé aux multiples levées de fonds de F2D Medical et aux due diligences d’investisseurs, tout en définissant les stratégies produit et les roadmaps de développement. <br>Passionné par la technologie et la santé, je maîtrise les environnements data et IoT, le traitement du signal, ainsi que la visualisation et l’analyse des données pour améliorer la performance des dispositifs.",
            en: "Entrepreneur, researcher and CTO/engineer in medical innovation, I combine over 10 years of experience in neuroscience, biomedical engineering and medical device development. As CTO and co-founder of F2D Medical, I lead the design, validation and industrialization of innovative Class IIb solutions, from concept to market launch. <br>Recognized expertise in regulatory compliance: MDR 2017/745, ISO 13485, ISO 14971, IEC 62366-1, IEC 60601-1, clinical evaluation; I have taken part in multiple F2D Medical fundraising rounds and investor due diligence processes, while defining product strategy and development roadmaps. <br>Passionate about technology and health, I am proficient in data and IoT environments, signal processing, and data visualization and analysis to improve device performance."
        },

        projects_title: { fr: "Projets", en: "Projects" },
        project_ribbon: { fr: "Projet Actuel", en: "Current Project" },

        f2d_title: { fr: "F2D Medical - Dispositif Médical de Classe IIb", en: "F2D Medical - Class IIb Medical Device" },
        f2d_subtitle: { fr: "Solution innovante pour le suivi des patients", en: "Innovative solution for patient monitoring" },
        f2d_desc: {
            fr: "Développement complet d'un dispositif médical connecté de classe IIb, de la conception à la mise sur le marché : Thermodiag, dispositif de suivi de la température corporelle.",
            en: "Full development of a connected Class IIb medical device, from design to market launch: Thermodiag, a body temperature monitoring device."
        },
        f2d_bullet1: {
            fr: "<strong>CTO & cofondateur</strong> : pilotage R&D et industrialisation du dispositif Thermodiag, de la conception à la mise sur le marché.",
            en: "<strong>CTO & co-founder</strong>: leading R&D and industrialization of the Thermodiag device, from design to market launch."
        },
        f2d_bullet2: {
            fr: "<strong>Responsable QARA</strong> : système qualité ISO 13485, dossier technique MDR 2017/745, gestion des risques ISO 14971, audits internes & fournisseurs.",
            en: "<strong>Head of QARA</strong>: ISO 13485 quality management system, MDR 2017/745 technical documentation, ISO 14971 risk management, internal and supplier audits."
        },
        f2d_bullet3: {
            fr: "<strong>Responsable scientifique</strong> : conception et suivi des essais cliniques, plans et rapports d'évaluation clinique (CEP/CER), veille bibliographique.",
            en: "<strong>Head of Science</strong>: clinical trial design and monitoring, clinical evaluation plans and reports (CEP/CER), literature review."
        },
        f2d_bullet4: {
            fr: "<strong>Data & algorithmes</strong> : traitement du signal et modèles prédictifs (machine learning) à partir des données capteurs Thermodiag.",
            en: "<strong>Data & algorithms</strong>: signal processing and predictive models (machine learning) built from Thermodiag sensor data."
        },

        dataplatform_title: { fr: "Systèmes d'analyse de données cliniques", en: "Clinical Data Analysis Systems" },
        dataplatform_subtitle: { fr: "Plateforme avancée d'analyse et modélisation statistique", en: "Advanced analytics and statistical modeling platform" },
        dataplatform_desc: {
            fr: "Développement d'une suite d'outils pour l'analyse approfondie des données cliniques, intégrant des algorithmes de machine learning pour la prédiction et l'aide à la décision médicale. Mise en place de modèles statistiques avancés pour l'interprétation des résultats cliniques.",
            en: "Development of a toolkit for in-depth clinical data analysis, incorporating machine learning algorithms for prediction and medical decision support. Implementation of advanced statistical models for interpreting clinical results."
        },

        hemangiome_title: { fr: "Détection Thermique des Hémangiomes", en: "Thermal Detection of Hemangiomas" },
        hemangiome_subtitle: { fr: "Dispositif expérimental de diagnostic précoce", en: "Experimental early diagnosis device" },
        hemangiome_desc: {
            fr: "Développement d'un prototype innovant basé sur le refroidissement contrôlé et l'analyse de la remontée thermique, avec exploitation de datasets et algorithmes de machine learning pour l'aide au pronostic.",
            en: "Development of an innovative prototype based on controlled cooling and thermal rebound analysis, using datasets and machine learning algorithms to support prognosis."
        },

        animalwelfare_title: { fr: "Capteur de Bien-être Animal", en: "Animal Welfare Sensor" },
        animalwelfare_subtitle: { fr: "Analyse sonore innovante pour l'élevage porcin", en: "Innovative sound analysis for pig farming" },
        animalwelfare_desc: {
            fr: "Développement d'un capteur d'analyse en temps réel des vocalisations porcines (FFT, spectrogrammes, MFCC) avec classification du niveau de bien-être par machine learning. Innovation majeure : mise en place d'une échelle de notation A–F traduite en label consommateur.",
            en: "Development of a sensor for real-time analysis of pig vocalizations (FFT, spectrograms, MFCC) with machine learning-based welfare level classification. Key innovation: an A-F rating scale translated into a consumer label."
        },
        animalwelfare_impact: {
            fr: "<strong>Impact Business & Sociétal :</strong> Valorisation de la filière porcine, réduction des risques de maltraitance, différenciation produit et amélioration de la transparence pour le consommateur.",
            en: "<strong>Business & Social Impact:</strong> Value creation for the pig farming industry, reduced risk of animal mistreatment, product differentiation and improved transparency for consumers."
        },

        milk_title: { fr: "Capteur de Qualité du Lait", en: "Milk Quality Sensor" },
        milk_subtitle: { fr: "Analyse en temps réel pour la détection précoce des mammites", en: "Real-time analysis for early mastitis detection" },
        milk_desc: {
            fr: "Développement d'un capteur intégré aux griffes de traite, mesurant en temps réel la conductivité du lait pour évaluer le taux cellulaire. Prototypage et validation de la solution permettant une détection immédiate des anomalies.",
            en: "Development of a sensor integrated into milking claws, measuring milk conductivity in real time to assess somatic cell count. Prototyping and validation of a solution enabling immediate anomaly detection."
        },
        milk_impact: {
            fr: "<strong>Impact Business :</strong> Réduction des traitements antibiotiques, diminution du risque de contamination du tank à lait et amélioration de la rentabilité des exploitations laitières.",
            en: "<strong>Business Impact:</strong> Reduced antibiotic treatments, lower risk of bulk tank contamination and improved profitability for dairy farms."
        },

        edwire_title: { fr: "ED-WIRE – Easy Wire Detection", en: "ED-WIRE - Easy Wire Detection" },
        edwire_subtitle: { fr: "Solution innovante pour l'identification des câblages électriques", en: "Innovative solution for electrical wiring identification" },
        edwire_desc: {
            fr: "Conception d'un dispositif permettant d'identifier rapidement et de manière fiable les fils électriques lors de rénovations et mises aux normes. Alternative aux méthodes classiques basée sur l'injection CPL avec codes uniques pour chaque module.",
            en: "Design of a device that quickly and reliably identifies electrical wires during renovations and code compliance work. An alternative to conventional methods, based on power-line communication injection with a unique code for each module."
        },
        edwire_impact: {
            fr: "<strong>Impact Business :</strong> Marché adressable de plusieurs millions de foyers en France. Réduction significative des coûts et du temps de main-d'œuvre (8–10h économisées par chantier).",
            en: "<strong>Business Impact:</strong> Addressable market of several million households in France. Significant reduction in cost and labor time (8-10 hours saved per job)."
        },

        badge_statistiques: { fr: "Statistiques", en: "Statistics" },
        badge_modelisation: { fr: "Modélisation", en: "Modeling" },
        badge_innovation: { fr: "Innovation", en: "Innovation" },
        badge_prototypage: { fr: "Prototypage", en: "Prototyping" },
        badge_electronique: { fr: "Électronique", en: "Electronics" },
        badge_brevet: { fr: "Brevet", en: "Patent" },
        badge_clinique: { fr: "Clinique", en: "Clinical" },
        badge_analysesignal: { fr: "Analyse du signal", en: "Signal Analysis" },
        badge_bienetreanimal: { fr: "Bien-être animal", en: "Animal Welfare" },
        badge_capteurs: { fr: "Capteurs", en: "Sensors" },
        badge_industrialisation: { fr: "Industrialisation", en: "Industrialization" },

        experience_title: { fr: "Expérience", en: "Experience" },
        exp1_title: { fr: "Chief Technology Officer (CTO) — Cofondateur", en: "Chief Technology Officer (CTO), Co-founder" },
        exp1_location: { fr: "Colombelles, Normandie, France", en: "Colombelles, Normandy, France" },
        exp1_bullet1: { fr: "Pilotage R&D et industrialisation de dispositifs médicaux (classe IIb) : conception, essais, validation.", en: "Leading R&D and industrialization of medical devices (Class IIb): design, testing, validation." },
        exp1_bullet2: { fr: "Conformité réglementaire : MDR 2017/745, ISO 13485, ISO 14971, IEC 62366-1, IEC 62304, IEC 60601-1.", en: "Regulatory compliance: MDR 2017/745, ISO 13485, ISO 14971, IEC 62366-1, IEC 62304, IEC 60601-1." },
        exp1_bullet3: { fr: "Gestion du dossier technique & design dossier", en: "Technical documentation and design file management" },
        exp1_bullet4: { fr: "Audits internes et fournisseurs ISO 19011.", en: "Internal and supplier audits (ISO 19011)." },
        exp1_bullet5: { fr: "Essais cliniques : conception, suivi et analyse des données.", en: "Clinical trials: design, monitoring and data analysis." },
        exp1_bullet6: { fr: "Plan et rapport d’évaluation clinique CEP/CER.", en: "Clinical evaluation plan and report (CEP/CER)." },
        exp1_bullet7: { fr: "Stratégie & finance : participation aux due diligences d’investisseurs, planification budgétaire, priorisation roadmap.", en: "Strategy & finance: participation in investor due diligence, budget planning, roadmap prioritization." },
        exp1_bullet8: { fr: "Data/IoT : capteurs, traitement du signal, Python, PostgreSQL, visualisation et dashboards.", en: "Data/IoT: sensors, signal processing, Python, PostgreSQL, visualization and dashboards." },
        exp1_dates: { fr: "Déc. 2021 – Présent", en: "Dec. 2021 – Present" },

        exp2_location: { fr: "Caen, Normandie, France", en: "Caen, Normandy, France" },
        exp2_bullet1: { fr: "Recherche en ingénierie biomédicale, dispositifs médicaux et organisation d’essais cliniques.", en: "Research in biomedical engineering, medical devices and clinical trial organization." },
        exp2_dates: { fr: "Août 2020 – Déc. 2021", en: "Aug. 2020 – Dec. 2021" },

        exp3_location: { fr: "Cairon, Basse-Normandie, France", en: "Cairon, Lower Normandy, France" },
        exp3_bullet1: { fr: "Management de projets R&D en medtech ; coordination réglementaire.", en: "R&D project management in medtech; regulatory coordination." },
        exp3_dates: { fr: "Fév. 2017 – Déc. 2021", en: "Feb. 2017 – Dec. 2021" },

        exp4_title: { fr: "Consultant externe (IoT / Santé)", en: "External Consultant (IoT / Health)" },
        exp4_bullet1: { fr: "Définition de protocoles expérimentaux, recueil et analyse de données physiologiques.", en: "Design of experimental protocols, collection and analysis of physiological data." },
        exp4_dates: { fr: "Fév. 2016 – Déc. 2016", en: "Feb. 2016 – Dec. 2016" },

        exp5_bullet1: { fr: "Impact de l’hypertension artérielle sur le couplage neuro-glio-vasculaire (IRM & microscopie biphoton).", en: "Impact of arterial hypertension on neuro-glio-vascular coupling (MRI & two-photon microscopy)." },
        exp5_dates: { fr: "Juil. 2012 – Déc. 2015", en: "Jul. 2012 – Dec. 2015" },

        exp6_title: { fr: "Ingénieur instrumentation expérimentale & biologique", en: "Experimental & Biological Instrumentation Engineer" },
        exp6_bullet1: { fr: "Développement de procédures en microscopie biphoton et IRM.", en: "Development of two-photon microscopy and MRI procedures." },
        exp6_dates: { fr: "Juil. 2015 – Oct. 2015", en: "Jul. 2015 – Oct. 2015" },

        exp7_bullet1: { fr: "Recherche sur l’hypertension chronique et le couplage neuro-glio-vasculaire (2PLSM). Enseignements en psychobiologie.", en: "Research on chronic hypertension and neuro-glio-vascular coupling (2PLSM). Teaching in psychobiology." },
        exp7_dates: { fr: "Déc. 2014 – Oct. 2015", en: "Dec. 2014 – Oct. 2015" },

        exp8_bullet1: { fr: "Activités d’enseignement et de soutien pédagogique.", en: "Teaching and educational support activities." },
        exp8_dates: { fr: "Déc. 2013 – Déc. 2014", en: "Dec. 2013 – Dec. 2014" },

        education_title: { fr: "Formation", en: "Education" },

        skills_title: { fr: "Compétences", en: "Skills" },
        skill1_title: { fr: "Réglementaire & Qualité", en: "Regulatory & Quality" },
        skill1_bullet1: {
            fr: "<strong>MDR 2017/745 · ISO 13485 · ISO 14971</strong> : construction et pilotage du système de management qualité d'un dispositif médical de bout en bout",
            en: "<strong>MDR 2017/745 · ISO 13485 · ISO 14971</strong>: end-to-end development and management of a medical device quality management system"
        },
        skill1_bullet2: { fr: "Application des normes IEC 62366-1 · IEC 62304 · IEC 60601-1 aux dispositifs médicaux connectés", en: "Application of IEC 62366-1 · IEC 62304 · IEC 60601-1 standards to connected medical devices" },
        skill1_bullet3: { fr: "Rédaction et défense de <strong>dossiers techniques</strong> face aux autorités et organismes notifiés", en: "Drafting and defending <strong>technical documentation</strong> before authorities and notified bodies" },
        skill1_bullet4: { fr: "<strong>Audits internes & fournisseurs</strong> (ISO 19011)", en: "<strong>Internal & supplier audits</strong> (ISO 19011)" },

        skill2_title: { fr: "IA & Data Science", en: "AI & Data Science" },
        skill2_bullet1: {
            fr: "Modélisation par <strong>machine learning</strong> (XGBoost) pour l'estimation de la température corporelle centrale à partir de capteurs portés : brique validée cliniquement et publiée (PFIA Health & AI, 2025)",
            en: "<strong>Machine learning</strong> modeling (XGBoost) for core body temperature estimation from wearable sensors: a clinically validated building block, published at PFIA Health & AI, 2025"
        },
        skill2_bullet2: { fr: "Traitement avancé du signal physiologique : filtrage, extraction de features, séries temporelles bruitées et asynchrones", en: "Advanced physiological signal processing: filtering, feature extraction, noisy and asynchronous time series" },
        skill2_bullet3: { fr: "Pipelines data de bout en bout : acquisition capteurs → traitement → visualisation (Python, PostgreSQL, dashboards temps réel)", en: "End-to-end data pipelines: sensor acquisition → processing → visualization (Python, PostgreSQL, real-time dashboards)" },
        skill2_bullet4: { fr: "Veille scientifique active en IA appliquée à la santé", en: "Active scientific watch on AI applied to healthcare" },

        skill3_title: { fr: "Clinique & MedTech", en: "Clinical & MedTech" },
        skill3_bullet1: { fr: "Conception et suivi d'<strong>essais cliniques multicentriques</strong> en medtech", en: "Design and monitoring of <strong>multicenter clinical trials</strong> in medtech" },
        skill3_bullet2: { fr: "Développement et validation de <strong>DM de classe IIb</strong> (R&D → industrialisation)", en: "Development and validation of <strong>Class IIb medical devices</strong> (R&D → industrialization)" },
        skill3_bullet3: { fr: "Expertise en <strong>capteurs connectés & IoT biomédical</strong>", en: "Expertise in <strong>connected sensors & biomedical IoT</strong>" },

        skill4_title: { fr: "Finance & Stratégie", en: "Finance & Strategy" },
        skill4_bullet1: { fr: "Contribution active aux <strong>due diligences investisseurs</strong> (levées de fonds à plusieurs millions d’euros)", en: "Active contribution to <strong>investor due diligence</strong> (multi-million euro fundraising rounds)" },
        skill4_bullet2: { fr: "Élaboration et suivi de <strong>budgets stratégiques</strong> et roadmaps produits", en: "Development and monitoring of <strong>strategic budgets</strong> and product roadmaps" },
        skill4_bullet3: { fr: "Définition de stratégies <strong>go‑to‑market</strong> et industrialisation fournisseurs", en: "Definition of <strong>go‑to‑market</strong> strategies and supplier industrialization" },
        skill4_bullet4: { fr: "Pilotage <strong>OKR</strong> et priorisation produit alignée sur objectifs business", en: "<strong>OKR</strong> management and product prioritization aligned with business objectives" },

        skill5_title: { fr: "Leadership & Management", en: "Leadership & Management" },
        skill5_bullet1: { fr: "Recrutement, structuration et encadrement des équipes <strong>technique/R&D et QARA</strong>", en: "Recruiting, structuring and managing the <strong>technical/R&D and QARA</strong> teams" },
        skill5_bullet2: { fr: "Coordination transverse entre réglementaire, R&D, clinique et production", en: "Cross-functional coordination between regulatory, R&D, clinical and production" },

        skill6_title: { fr: "Prototypage & Fabrication", en: "Prototyping & Manufacturing" },
        skill6_bullet1: { fr: "Conception de modèles 3D & prototypage rapide (Fusion 360, impression 3D)", en: "3D modeling & rapid prototyping (Fusion 360, 3D printing)" },
        skill6_bullet2: { fr: "Développement de procédé de fabrication (outillage, industrialisation produit)", en: "Manufacturing process development (tooling, product industrialization)" },

        skill7_title: { fr: "Scientifique", en: "Scientific" },
        skill7_bullet1: {
            fr: "<strong>10+ ans</strong> de recherche en neurosciences & physiologie expérimentale ; rigueur méthodologique appliquée aux essais cliniques actuels",
            en: "<strong>10+ years</strong> of research in neuroscience & experimental physiology; methodological rigor applied to current clinical trials"
        },
        skill7_bullet2: { fr: "Expertise en <strong>IRM fonctionnelle</strong>, microscopie confocale & biphoton (recherche doctorale)", en: "Expertise in <strong>functional MRI</strong>, confocal & two-photon microscopy (doctoral research)" },
        skill7_bullet3: { fr: "Publications internationales & communications en congrès", en: "International publications & conference presentations" },

        patents_title: { fr: "Brevets", en: "Patents" },
        patent1: {
            fr: "<strong>FR 3097115 B1</strong> — Dispositif de mesure de températures et système pour déterminer une température interne profonde d’un être humain (Délivré le 16 juil. 2021) — Statut : Actif",
            en: "<strong>FR 3097115 B1</strong>: Dispositif de mesure de températures et système pour déterminer une température interne profonde d'un être humain (Granted on Jul. 16, 2021), Status: Active"
        },
        patent2: {
            fr: "<strong>WO 2020/249665 A1</strong> — Device for measuring temperatures and system for determining a deep internal temperature of a human being (Publié le 17 déc. 2020)",
            en: "<strong>WO 2020/249665 A1</strong>: Device for measuring temperatures and system for determining a deep internal temperature of a human being (Published on Dec. 17, 2020)"
        },
        patent3: {
            fr: "<strong>EP 3780912 A1</strong> — Device for measuring temperatures and system for determining a deep internal temperature of a human being (Publié le 17 fév. 2021) — Statut : Pending",
            en: "<strong>EP 3780912 A1</strong>: Device for measuring temperatures and system for determining a deep internal temperature of a human being (Published on Feb. 17, 2021), Status: Pending"
        },
        patent4: {
            fr: "<strong>US 2022/0160240 A1</strong> — Device for measuring temperatures and system for determining a deep internal temperature of a human being (Publié le 26 mai 2022) — Statut : Pending",
            en: "<strong>US 2022/0160240 A1</strong>: Device for measuring temperatures and system for determining a deep internal temperature of a human being (Published on May 26, 2022), Status: Pending"
        },
        patent5: {
            fr: "<strong>FR 3139712 A1</strong> — Multi-layer cover for holding a device on a human body (Publié le 22 mars 2024)",
            en: "<strong>FR 3139712 A1</strong>: Multi-layer cover for holding a device on a human body (Published on Mar. 22, 2024)"
        },
        patent6: {
            fr: "<strong>WO 2024/061524 A1</strong> — Multilayer cover for holding a device on a human body (Publié le 28 mars 2024)",
            en: "<strong>WO 2024/061524 A1</strong>: Multilayer cover for holding a device on a human body (Published on Mar. 28, 2024)"
        },
        patent7: {
            fr: "<strong>AU 2023345784 A1</strong> — Multilayer cover for holding a device on a human body (Publié le 20 mars 2025) — Statut : Pending",
            en: "<strong>AU 2023345784 A1</strong>: Multilayer cover for holding a device on a human body (Published on Mar. 20, 2025), Status: Pending"
        },
        patent8: {
            fr: "<strong>CN 119997868 A</strong> — Multi-layered covering to hold the device on the body (Publié le 13 mai 2025) — Statut : Pending",
            en: "<strong>CN 119997868 A</strong>: Multi-layered covering to hold the device on the body (Published on May 13, 2025), Status: Pending"
        },
        patent9: {
            fr: "<strong>IL 319426 A</strong> — Multilayer cover for holding a device on a human body (Publié le 1 mai 2025)",
            en: "<strong>IL 319426 A</strong>: Multilayer cover for holding a device on a human body (Published on May 1, 2025)"
        },
        patent10: {
            fr: "<strong>MX 2025003114 A</strong> — Multilayer cover for holding a device on a human body (Publié le 2 avr. 2025)",
            en: "<strong>MX 2025003114 A</strong>: Multilayer cover for holding a device on a human body (Published on Apr. 2, 2025)"
        },
        patent11: {
            fr: "<strong>EP 4590176 A1</strong> — Multilayer cover for holding a device on a human body (Publié le 30 juil. 2025) — Statut : Pending",
            en: "<strong>EP 4590176 A1</strong>: Multilayer cover for holding a device on a human body (Published on Jul. 30, 2025), Status: Pending"
        },

        courses_title: { fr: "Formations & Certifications", en: "Training & Certifications" },
        course1: { fr: "Audit interne & fournisseurs — ISO 19011 / ISO 13485 — MD101", en: "Internal & supplier audit, ISO 19011 / ISO 13485, MD101" },
        course2: { fr: "Créer & maintenir des dossiers techniques conformes à la MDR 2017/745 — BSI Group", en: "Creating & maintaining technical documentation compliant with MDR 2017/745, BSI Group" },
        course3: { fr: "ISO 13485 : Conception et mise en application d'un QMS — Abylsen", en: "ISO 13485: Design and implementation of a QMS, Abylsen" },
        course5: { fr: "IEC 62366-1 : Application of usability engineering to medical devices — Aguila", en: "IEC 62366-1: Application of usability engineering to medical devices, Aguila" },
        course6: { fr: "IEC 62304 : Appliquer les exigences de la norme IEC 62304 : 2006 + Amd1 au cycle de vie des logiciels — MD101", en: "IEC 62304: Applying the requirements of IEC 62304: 2006 + Amd1 to the software lifecycle, MD101" },
        course7: { fr: "Obligations relatives aux DM (UDI) — GS1 France", en: "Medical device obligations (UDI), GS1 France" },
        course8: { fr: "Animal testing applied to biomedical research — Niveau 1 & 2 — CNRS", en: "Animal testing applied to biomedical research, Level 1 & 2, CNRS" }
    };

    function applyLang(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var entry = STRINGS[el.dataset.i18n];
            if (entry && entry[lang] !== undefined) el.textContent = entry[lang];
        });

        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var entry = STRINGS[el.dataset.i18nHtml];
            if (entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
        });

        var metaDesc = document.querySelector('meta[data-i18n-attr="meta_description"]');
        if (metaDesc && STRINGS.meta_description[lang] !== undefined) {
            metaDesc.setAttribute("content", STRINGS.meta_description[lang]);
        }

        document.querySelectorAll("[data-i18n-ribbon]").forEach(function (el) {
            var entry = STRINGS[el.dataset.i18nRibbon];
            if (entry && entry[lang] !== undefined) el.setAttribute("data-ribbon-text", entry[lang]);
        });

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.textContent = lang === "fr" ? "EN" : "FR";
            btn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
        }

        localStorage.setItem(STORAGE_KEY, lang);
    }

    document.addEventListener("DOMContentLoaded", function () {
        var initial = localStorage.getItem(STORAGE_KEY) || "fr";
        applyLang(initial);

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.addEventListener("click", function () {
                var next = document.documentElement.lang === "fr" ? "en" : "fr";
                applyLang(next);
            });
        }
    });
})();
