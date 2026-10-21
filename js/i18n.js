// Bascule de langue FR/EN. Le français est lu dans le HTML au chargement, l'anglais vient du dictionnaire STRINGS.
// Attributs : data-i18n (texte), data-i18n-html (HTML), data-i18n-attr="attribut:clé".
(function () {
    "use strict";

    var STORAGE_KEY = "bencv-lang";

    var STRINGS = {
        page_title: "Benjamin Menard, PhD: CTO, F2D Medical",
        meta_description: "Benjamin Menard, PhD in neuroscience, CTO and co-founder of F2D Medical. Class IIb medical devices, regulatory compliance (MDR, ISO 13485, ISO 14971), clinical trials, machine learning and LLMs.",
        skip: "Skip to content",
        nav_label: "Main navigation",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_career: "Career",
        nav_pubs: "Publications",
        nav_contact: "Contact",
        menu: "Menu",

        hero_lede: "From neurons to medical devices: I design, validate and industrialise health technologies.",
        hero_role: "PhD in neuroscience, CTO and co-founder of F2D Medical",
        scroll: "Scroll",

        essentials_title: "In short",
        m1: "PhD in neuroscience.",
        m2: "Over ten years of research, from cortex to sensor.",
        m3: "A class IIb medical device, CE marked and authorised by the SFDA in Saudi Arabia.",
        m4: "A validated core body temperature estimation model.",
        m5: "Over 35,000 hours of acquisition on patients, more than 140 million measurements.",
        m6: "Two patent families, eleven published filings.",

        about_title: "about",
        about_p1: "Entrepreneur, researcher and medical innovation engineer, I bring over ten years of experience in neuroscience, biomedical engineering and medical device development. At F2D Medical, which I co-founded and serve as CTO, I lead the design, validation and industrialisation of Thermodiag, a connected class IIb medical device.",
        about_p2: "I own the device's regulatory compliance, from risk management to clinical evaluation. I have taken part in fundraising rounds and investor due diligence, and I set the product strategy and development roadmap.",
        about_p3: "On the technical side, I build sensor data processing pipelines, machine learning models and LLM-based internal tools.",
        about_norms: "Standards I work with",
        about_where: "Based in",
        about_city: "Caen and Colombelles, Normandy, France",

        projects_title: "projects",
        projects_intro: "Professional and personal projects, from sensor to algorithm.",
        f2d_status: "Current project, since 2021",
        f2d_subtitle: "Connected class IIb medical device for body temperature monitoring, developed at F2D Medical, CE marked and authorised by the SFDA.",
        f2d_b1: "<strong>CTO and co-founder</strong>: leading R&amp;D and industrialisation, from design to market launch.",
        f2d_b2: "<strong>Head of QARA</strong>: ISO 13485 quality system, MDR 2017/745 technical documentation, ISO 14971 risk management, internal and supplier audits.",
        f2d_b3: "<strong>Scientific lead</strong>: design and monitoring of clinical trials, clinical evaluation plans and reports (CEP/CER), literature review.",
        f2d_b4: "<strong>Data and algorithms</strong>: validated core body temperature estimation model, over 35,000 hours of acquisition on patients, presented at PFIA Health &amp; AI 2025.",

        group_ai: "AI and software",
        aitools_title: "Internal tools, F2D Medical",
        aitools_subtitle: "On-premise internal app portal",
        aitools_b1: "<strong>Document impact map</strong>: a graph of references between the quality system's procedures, work instructions and forms, listing across several levels the documents to review when one changes.",
        aitools_b2: "<strong>Document assistant</strong>: RAG search for the relevant procedures and forms, with links to the source documents.",
        aitools_b3: "<strong>Meeting minutes</strong>: local transcription (Whisper), then drafting of the minutes by an LLM.",
        aitools_b4: "<strong>Shared foundation</strong>: in-house server and single sign-on (SSO).",
        tag_graph: "Graph",
        embedded_title: "Embedded AI objects",
        embedded_subtitle: "Personal projects: embedded ML and local LLM",
        embedded_desc: "Prototypes on an Arduino Nano 33 BLE Sense (nRF52840): on-device classification of sensor data, linked to a local LLM (Ollama) that drives an RGB LED and speech synthesis; presence detection from radio RSSI analysis and a classifier, prototype in progress; local voice assistant with tool calling.",
        tag_local_llm: "Local LLM",
        evolve_subtitle: "Personal project: ecosystem simulation",
        evolve_desc: "A simulation in which virtual species evolve through natural selection, built on a C++20 engine with an experimentation lab to observe how populations change. In development.",
        tag_evolution: "Evolution",
        dataplatform_title: "Clinical data analysis",
        dataplatform_subtitle: "Statistical modelling and decision support",
        dataplatform_desc: "A suite of tools for in-depth clinical data analysis, combining machine learning algorithms for prediction and medical decision support with statistical models to interpret results.",
        tag_stats: "Statistics",

        group_sensors: "Sensors and prototypes",
        hemangiome_title: "Thermal detection of haemangiomas",
        hemangiome_subtitle: "Experimental device for early diagnosis",
        hemangiome_desc: "A prototype based on controlled skin cooling and analysis of the thermal recovery, using datasets and machine learning algorithms to support prognosis.",
        tag_proto: "Prototyping",
        tag_elec: "Electronics",
        tag_patent: "Patent",
        tag_clinical: "Clinical",
        animal_title: "Animal welfare sensor",
        animal_subtitle: "Sound analysis for pig farming",
        animal_desc: "A sensor that analyses pig vocalisations in real time (FFT, spectrograms, MFCC), classifies welfare levels with machine learning and maps them to an A to F rating used as a consumer label.",
        animal_impact: "<strong>Impact:</strong> adds value to the sector, reduces the risk of mistreatment and brings transparency to consumers.",
        tag_signal: "Signal analysis",
        milk_title: "Milk quality sensor",
        milk_subtitle: "Real-time early detection of mastitis",
        milk_desc: "A sensor built into milking clusters that measures milk conductivity in real time to estimate somatic cell count. Prototyping and validation of a solution that flags anomalies immediately.",
        milk_impact: "<strong>Impact:</strong> fewer antibiotic treatments, lower risk of contaminating the bulk tank and better farm profitability.",
        tag_sensors: "Sensors",
        edwire_subtitle: "Fast identification of electrical wiring",
        edwire_desc: "A device that identifies electrical wires quickly and reliably during renovation and compliance work, by injecting a unique powerline code from each module.",
        edwire_impact: "<strong>Impact:</strong> a market of several million homes in France and 8 to 10 hours of labour saved per job.",
        tag_industrial: "Industrialisation",

        skills_title: "skills",
        s1_title: "Regulatory and quality",
        s1_b1: "<strong>MDR 2017/745, ISO 13485, ISO 14971</strong>: building and running the quality management system of a medical device end to end",
        s1_b2: "Applying IEC 62366-1, IEC 62304 and IEC 60601-1 to connected medical devices",
        s1_b3: "Writing and defending <strong>technical documentation</strong> before authorities and notified bodies",
        s1_b4: "<strong>Internal and supplier audits</strong> (ISO 19011)",
        s2_title: "Language models (LLMs)",
        s2_b1: "<strong>RAG</strong> over quality system documentation: indexing, search and answers linked to source documents (tool deployed in-house)",
        s2_b2: "<strong>Local transcription</strong> (Whisper) and LLM drafting of meeting minutes",
        s2_b3: "<strong>LLMs run locally</strong> (Ollama) with tool calling, so data stays on site",
        s2_b4: "Software development with <strong>Claude Code</strong> and the Claude API",
        s3_title: "Machine learning and signal",
        s3_b1: "<strong>Machine learning</strong> models (XGBoost) estimating core body temperature from wearable sensors, presented at PFIA Health &amp; AI 2025",
        s3_b2: "Advanced physiological signal processing: filtering, feature extraction, noisy and asynchronous time series",
        s3_b3: "End-to-end data pipelines: sensor acquisition, processing, visualisation (Python, PostgreSQL, real-time dashboards)",
        s4_title: "Clinical and medtech",
        s4_b1: "Design and monitoring of <strong>multicentre clinical trials</strong> in medtech",
        s4_b2: "Development and validation of <strong>class IIb medical devices</strong>, from R&amp;D to industrialisation",
        s4_b3: "Expertise in <strong>connected sensors and biomedical IoT</strong>",
        s5_title: "Prototyping and embedded",
        s5_b1: "Embedded programming and prototyping of connected sensors (BLE, nRF52840)",
        s5_b2: "3D design and rapid prototyping (Fusion 360, 3D printing)",
        s5_b3: "Manufacturing process development (tooling, product industrialisation)",
        s6_title: "Finance and strategy",
        s6_b1: "Active contribution to <strong>investor due diligence</strong> (multi-million euro fundraising rounds)",
        s6_b2: "Building and tracking <strong>strategic budgets</strong> and product roadmaps",
        s6_b3: "Defining <strong>go-to-market</strong> strategies and supplier industrialisation",
        s6_b4: "<strong>OKR</strong>-driven management and product prioritisation aligned with business goals",
        s7_title: "Leadership and management",
        s7_b1: "Hiring, structuring and leading the <strong>technical, R&amp;D and QARA</strong> teams",
        s7_b2: "Cross-functional coordination between regulatory, R&D, clinical and production",
        s8_title: "Scientific research",
        s8_b1: "<strong>Over ten years</strong> of research in neuroscience and experimental physiology, with methodological rigour carried into clinical trials",
        s8_b2: "Expertise in <strong>functional MRI</strong>, confocal and two-photon microscopy (doctoral research)",
        s8_b3: "International publications and conference talks",

        career_title: "career",
        career_intro: "From the neuroscience bench to leading technology at a medtech company.",
        j1_dates: "Dec 2021 to present",
        j1_title: "Chief Technology Officer, co-founder",
        loc_colombelles: "Colombelles, Normandy",
        j1_b1: "Leading R&D and industrialisation of class IIb medical devices: design, testing, validation.",
        j1_b2: "Regulatory compliance: MDR 2017/745, ISO 13485, ISO 14971, IEC 62366-1, IEC 62304, IEC 60601-1.",
        j1_b3: "Technical documentation and design dossier, ISO 19011 internal and supplier audits.",
        j1_b4: "Clinical trials: design, monitoring and data analysis; clinical evaluation plan and report (CEP/CER).",
        j1_b5: "Strategy and finance: investor due diligence, budget planning, roadmap prioritisation.",
        j1_b6: "Data, IoT and AI: sensors, signal processing, machine learning, LLM-based internal tools.",
        j2_dates: "Aug 2020 to Dec 2021",
        j2_title: "Postdoctoral researcher",
        j2_b1: "Research in biomedical engineering, medical devices and clinical trial organisation.",
        j3_dates: "Feb 2017 to Dec 2021",
        j3_title: "Scientific project manager",
        j3_b1: "Managing medtech R&D projects and regulatory coordination.",
        j4_dates: "Feb 2016 to Dec 2016",
        j4_title: "External consultant, IoT and health",
        j4_b1: "Designing experimental protocols, collecting and analysing physiological data.",
        j5_dates: "Jul 2015 to Oct 2015",
        j5_title: "Experimental and biological instrumentation engineer",
        j5_b1: "Developing two-photon microscopy and MRI procedures.",
        j6_dates: "Jul 2012 to Dec 2015",
        j6_title: "PhD student",
        j6_b1: "Impact of arterial hypertension on neuro-glio-vascular coupling, studied with MRI and two-photon microscopy.",
        j7_dates: "Dec 2014 to Oct 2015",
        j7_title: "Temporary lecturer and research assistant in neurobiology",
        j7_b1: "Research on chronic hypertension and neuro-glio-vascular coupling (2PLSM), teaching psychobiology.",
        j8_dates: "Dec 2013 to Dec 2014",
        j8_title: "Teaching fellow",
        j8_b1: "Teaching and academic support.",
        education_title: "Education",
        edu1: "PhD in neurobiology and neuroscience",
        edu1_meta: "Université de Caen Normandie, 2012 to 2015",
        edu2: "Master's in neurobiology and neuroscience",
        edu2_meta: "Université de Caen Normandie, 2007 to 2012",

        pubs_title: "publications and patents",
        pubs_articles: "Papers and talks",
        pubs_patents: "Patents",
        fam1_title: "Device for measuring temperatures and system for determining a deep internal temperature of a human being",
        fam1_meta: "4 publications, including a patent granted in France",
        fam2_title: "Multilayer cover for holding a device on a human body",
        fam2_meta: "7 publications across Europe, the Americas, Asia and Oceania",
        p1: "Granted 16 Jul 2021, in force",
        p2: "Published 17 Dec 2020",
        p3: "Published 17 Feb 2021, pending",
        p4: "Published 26 May 2022, pending",
        p5: "Published 22 Mar 2024",
        p6: "Published 28 Mar 2024",
        p7: "Published 20 Mar 2025, pending",
        p8: "Published 2 Apr 2025",
        p9: "Published 1 May 2025",
        p10: "Published 13 May 2025, pending",
        p11: "Published 30 Jul 2025, pending",

        certs_title: "certified training",
        c1: "Internal and supplier audit, ISO 19011 and ISO 13485",
        c2: "Technical documentation compliant with MDR 2017/745",
        c3: "ISO 13485: designing and implementing a QMS",
        c4_org: "Product risk management",
        c5: "IEC 62366-1: usability engineering for medical devices",
        c6: "IEC 62304: 2006 + Amd1 requirements applied to the software lifecycle",
        c7: "Medical device obligations (UDI)",
        c8: "Animal experimentation applied to biomedical research, levels 1 and 2",

        contact_title: "contact",
        contact_lede: "A medtech project, a regulatory or technical question? Get in touch.",
        footer_note: "Leaves, circuits and neuron are procedurally generated."
    };

    var FR = {};

    function storageGet() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function storageSet(v) {
        try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* stockage indisponible */ }
    }

    function eachAttr(el, fn) {
        el.dataset.i18nAttr.split(";").forEach(function (pair) {
            var parts = pair.split(":");
            fn(parts[0].trim(), parts[1].trim());
        });
    }

    // Mémorise le français d'origine, une seule fois.
    function captureFrench() {
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            FR[el.dataset.i18n] = el.textContent;
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            FR[el.dataset.i18nHtml] = el.innerHTML;
        });
        document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            eachAttr(el, function (attr, key) { FR[key] = el.getAttribute(attr); });
        });
    }

    function t(key, lang) {
        return lang === "en" ? STRINGS[key] : FR[key];
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var v = t(el.dataset.i18n, lang);
            if (v !== undefined) el.textContent = v;
        });
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var v = t(el.dataset.i18nHtml, lang);
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            eachAttr(el, function (attr, key) {
                var v = t(key, lang);
                if (v !== undefined) el.setAttribute(attr, v);
            });
        });

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.textContent = lang === "fr" ? "EN" : "FR";
            btn.setAttribute("aria-label", lang === "fr" ? "EN, switch to English" : "FR, passer en français");
        }

        storageSet(lang);
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
    }

    function init() {
        captureFrench();
        var initial = storageGet() === "en" ? "en" : "fr";
        if (initial !== "fr") applyLang(initial);

        var btn = document.getElementById("lang-toggle");
        if (btn) {
            btn.addEventListener("click", function () {
                applyLang(document.documentElement.lang === "fr" ? "en" : "fr");
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
