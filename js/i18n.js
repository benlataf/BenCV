// Bascule de langue FR/EN. Le français est lu dans le HTML au chargement, l'anglais vient du dictionnaire STRINGS.
// Attributs : data-i18n (texte), data-i18n-html (HTML), data-i18n-attr="attribut:clé".
(function () {
    "use strict";

    var STORAGE_KEY = "bencv-lang";

    var STRINGS = {
        page_title: "Benjamin Menard, PhD: CTO, F2D Medical",
        meta_description: "Benjamin Menard, PhD in neuroscience, CTO and co-founder of F2D Medical: CE-marked class IIb medical device, quality and regulatory (MDR, ISO 13485, ISO 14971), clinical trials, machine learning.",
        skip: "Skip to content",
        nav_label: "Main navigation",
        nav_about: "About",
        nav_projects: "Projects",
        nav_career: "Career",
        nav_pubs: "Publications",
        nav_contact: "Contact",
        menu: "Menu",

        hero_lede: "From neurons to medical devices: I took an armband that estimates core body temperature all the way to CE marking.",
        hero_role: "PhD in neuroscience, CTO and co-founder of F2D Medical",
        scroll: "Scroll",

        essentials_title: "In short",
        m1: "<span class=\"manifest-num\">Class IIb</span> A CE-marked medical device, also authorised in Saudi Arabia by the SFDA.",
        m2: "<span class=\"manifest-num\">0.35&nbsp;°C</span> Mean absolute error against an invasive reference probe.",
        m3: "<span class=\"manifest-num\">35,000&nbsp;h</span> Of patient recordings, more than 140 million measurements.",
        m4: "<span class=\"manifest-num\">9 patents</span> Granted in Europe, the United States, China, Japan, Israel, Morocco and South Africa, across two families I co-invented.",
        m5: "<span class=\"manifest-num\">PhD</span> In neuroscience, first author in the Journal of Cerebral Blood Flow &amp; Metabolism.",

        about_title: "about",
        about_p1: "My PhD looked at how the brain matches its blood flow to its activity, and at what hypertension breaks in that process. Since then I have worked on the same thing seen from the outside: the heat that blood carries to the skin. It is what I measured to detect haemangiomas, and it is what Thermodiag uses to infer core body temperature.",
        about_p2: "At F2D Medical, which I co-founded in 2021, I hold the roles a young medtech company cannot yet split: technology, quality and regulatory, scientific affairs. In practice, that means writing the technical documentation for an algorithm I have been developing since 2017, then defending before the notified body technical choices made on the test bench.",
        about_p3: "Outside F2D, I build things to understand them: embedded ML on microcontrollers, locally run LLMs, an evolution simulator in C++20.",
        about_norms: "Standards I work with",
        about_tools: "Tools and techniques",
        tool_mri: "MRI",
        tool_2p: "Two-photon microscopy",
        about_where: "Based in",
        about_city: "Caen, Normandy, France",

        projects_title: "projects",
        f2d_status: "Current project, since 2021",
        f2d_subtitle: "A connected armband that continuously estimates core body temperature, without an invasive probe. Class IIb medical device, CE marked and authorised by the SFDA, developed at F2D Medical.",
        f2d_b1: "<strong>Sensor</strong>: multi-sensor armband, electronics and BLE firmware, industrialisation with suppliers.",
        f2d_b2: "<strong>Model</strong>: machine learning (XGBoost) estimate of core body temperature, mean absolute error of 0.35&nbsp;°C against an invasive reference probe; presented at PFIA Health &amp; AI 2025.",
        f2d_b3: "<strong>Clinical</strong>: multicentre clinical trials, clinical evaluation plan and report (CEP/CER); more than 35,000 hours of patient recordings overall.",
        f2d_b4: "<strong>Regulatory</strong>: head of QARA; ISO 13485 quality system, MDR 2017/745 technical documentation, ISO 14971 risk management, internal and supplier audits.",
        f2d_b5: "<strong>Company</strong>: CTO and co-founder; hiring and leading the technical, R&amp;D and QARA teams; investor due diligence for fundraising rounds.",

        group_ai: "AI and software",
        aitools_title: "Internal tools, F2D Medical",
        aitools_subtitle: "On-premise internal app portal",
        aitools_b1: "<strong>Document impact map</strong>: a graph of references between the quality system's procedures, work instructions and forms, listing across several levels the documents to review when one changes.",
        aitools_b2: "<strong>Document assistant</strong>: RAG search for the relevant procedures and forms, with links to the source documents.",
        aitools_b3: "<strong>Meeting minutes</strong>: local transcription (Whisper), then drafting of the minutes by an LLM.",
        aitools_b4: "<strong>Shared foundation</strong>: in-house server and single sign-on (SSO).",

        group_sensors: "Sensors and prototypes",
        hemangiome_title: "Thermal detection of haemangiomas",
        hemangiome_subtitle: "Experimental device for early diagnosis",
        hemangiome_desc: "Research prototype: controlled skin cooling, then machine learning analysis of the thermal recovery.",
        animal_title: "Animal welfare sensor",
        animal_subtitle: "Sound analysis for pig farming",
        animal_desc: "A sensor that analyses pig vocalisations in real time (FFT, spectrograms, MFCC), classifies welfare levels with machine learning and maps them to an A to F rating used as a consumer label.",
        milk_title: "Milk quality sensor",
        milk_subtitle: "Real-time early detection of mastitis",
        milk_desc: "A sensor built into milking clusters that measures milk conductivity in real time to estimate somatic cell count and flag an anomaly during milking.",
        edwire_subtitle: "Fast identification of electrical wiring",
        edwire_desc: "A device that identifies electrical wires quickly and reliably during renovation and compliance work, by injecting a unique powerline code from each module.",

        group_lab: "Personal lab",
        embedded_title: "Embedded AI objects",
        embedded_subtitle: "Embedded ML and local LLM",
        embedded_desc: "An Arduino Nano 33 BLE Sense (nRF52840) acts as the sensory body of a local LLM (Ollama): on-device sensor classification, answers through an RGB LED and speech synthesis. Variants: presence detection from radio RSSI analysis (in progress), a local voice assistant with tool calling.",
        evolve_subtitle: "Ecosystem simulation",
        evolve_desc: "A simulation in which virtual species evolve through natural selection, built on a C++20 engine with an experimentation lab to observe how populations change. In development.",

        career_title: "career",
        career_intro: "From the neuroscience bench to leading technology at a medtech company.",
        j1_dates: "Dec 2021 to present",
        j1_title: "Chief Technology Officer, co-founder",
        loc_colombelles: "Colombelles, Normandy",
        j1_b1: "Technology lead: R&D, industrialisation and CE marking of Thermodiag, a class IIb medical device.",
        j1_b2: "Head of QARA and scientific lead: quality system, technical documentation, clinical trials and clinical evaluation.",
        j1_b3: "Hiring and leading the technical, R&D and QARA teams; investor due diligence for fundraising rounds.",
        j2_dates: "Aug 2020 to Dec 2021",
        j2_title: "Postdoctoral researcher",
        j2_b1: "Research in biomedical engineering, medical devices and clinical trial organisation.",
        j3_dates: "Feb 2016 to Dec 2021",
        j3_title: "Scientific project manager",
        j3_b1: "External IoT and health consultant in 2016, then project manager: medtech and connected sensor R&D projects, experimental protocols, regulatory coordination.",
        j6_dates: "Jul 2012 to Dec 2015",
        j6_title: "PhD student, temporary lecturer and instrumentation engineer",
        j6_b1: "Thesis: impact of arterial hypertension on neuro-glio-vascular coupling, studied with MRI and two-photon microscopy.",
        j6_b2: "Developed MRI and two-photon microscopy procedures (engineer, 2015); taught psychobiology (teaching fellow, then temporary lecturer, 2013 to 2015).",
        education_title: "Education",
        edu1: "PhD in neurobiology and neuroscience",
        edu1_meta: "Université de Caen Normandie, 2012 to 2015",
        edu2: "Master's in neurobiology and neuroscience",
        edu2_meta: "Université de Caen Normandie, 2012",

        pubs_title: "publications and patents",
        pubs_articles: "Papers and talks",
        pub_first: "first author",
        pub_coauthor: "co-author",
        pubs_patents: "Patents",
        fam1_title: "Device for measuring temperatures and system for determining a deep internal temperature of a human being",
        fam1_meta: "Co-inventor. Granted by 7 offices; applications pending in Canada, Brazil and South Korea.",
        fam2_title: "Multilayer cover for holding a device on a human body",
        fam2_meta: "Co-inventor. Granted in South Africa and France; applications pending in Europe, China, Australia, Mexico and Israel.",
        p1: "Granted 16 Jul 2021",
        p2: "Granted 31 Jul 2024, unitary effect",
        p3: "Granted 25 Oct 2024",
        p4: "Granted 31 Oct 2024",
        p5: "Granted 2 May 2025",
        p6: "Granted 1 Feb 2026",
        p7: "Granted 24 Feb 2026",
        p8: "Granted 17 Dec 2025",
        p9: "Granted 12 Jun 2026",

        contact_title: "contact",
        contact_lede: "Want to talk medtech, regulatory affairs or AI in health? Write to me.",
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
