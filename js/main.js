// Interactions du site : navigation, défilement fluide (Lenis), animations GSAP liées au scroll.
// Tout est optionnel : sans JS ou sans les bibliothèques CDN, la page reste complète et lisible.
(function () {
    "use strict";

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var nav = document.getElementById("site-nav");
    var lenis = null;

    /* ---------- Navigation ---------- */

    var menuBtn = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");

    function setMenu(open) {
        menu.classList.toggle("is-open", open);
        menu.setAttribute("aria-hidden", open ? "false" : "true");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        var en = document.documentElement.lang === "en";
        menuBtn.textContent = open ? (en ? "Close" : "Fermer") : "Menu";
        if (lenis) open ? lenis.stop() : lenis.start();
        document.body.style.overflow = open ? "hidden" : "";
    }

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
            setMenu(!menu.classList.contains("is-open"));
        });
        menu.addEventListener("click", function (e) {
            if (e.target.closest("a")) setMenu(false);
        });
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && menu.classList.contains("is-open")) {
                setMenu(false);
                menuBtn.focus();
            }
        });
    }

    // Liens d'ancrage : défilement fluide via Lenis quand il est actif.
    document.addEventListener("click", function (e) {
        var a = e.target.closest('a[href^="#"]');
        if (!a || !lenis) return;
        var id = a.getAttribute("href");
        var target = id === "#top" ? 0 : document.querySelector(id);
        if (target === null) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: id === "#top" ? 0 : -72, duration: 1.4 });
        if (id !== "#top") history.replaceState(null, "", id);
    });

    // Barre de navigation : fond au scroll, masquée en descente, réapparaît en remontée.
    var lastY = window.scrollY;
    function onScrollNav(y) {
        nav.classList.toggle("is-scrolled", y > 40);
        var goingDown = y > lastY + 4;
        var goingUp = y < lastY - 4;
        if (goingDown && y > window.innerHeight * 0.6) nav.classList.add("is-hidden");
        else if (goingUp || y < 80) nav.classList.remove("is-hidden");
        lastY = y;
    }

    // Lien actif selon la section visible.
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    var sections = links.map(function (l) { return document.querySelector(l.getAttribute("href")); }).filter(Boolean);
    if ("IntersectionObserver" in window && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                links.forEach(function (l) {
                    l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id);
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        sections.forEach(function (s) { spy.observe(s); });
    }

    function onScroll(y) {
        onScrollNav(y);
    }

    /* ---------- Étiquettes « instrument » des orbites (valeurs décoratives) ---------- */

    var orbits = document.querySelector(".orbits");
    var liveTemp = document.querySelector('[data-live="temp"]');
    var liveHr = document.querySelector('[data-live="hr"]');
    var temp = 36.9;
    var hr = 64;
    var liveTimer = null;

    function tickLive() {
        temp = Math.min(37.2, Math.max(36.6, temp + (Math.random() - 0.5) * 0.08));
        hr = Math.round(Math.min(70, Math.max(58, hr + (Math.random() - 0.5) * 3)));
        if (liveTemp) liveTemp.textContent = "● " + temp.toFixed(1) + " °C";
        if (liveHr) liveHr.textContent = "● " + hr + " bpm";
    }

    function setHeroRunning(on) {
        if (!orbits) return;
        if (on && !reduceMotion) {
            if (orbits.unpauseAnimations) orbits.unpauseAnimations();
            if (!liveTimer) liveTimer = setInterval(tickLive, 1400);
        } else {
            if (orbits.pauseAnimations) orbits.pauseAnimations();
            clearInterval(liveTimer);
            liveTimer = null;
        }
        document.querySelectorAll(".pcb-pulse").forEach(function (p) {
            p.style.animationPlayState = on ? "running" : "paused";
        });
    }

    var hero = document.querySelector(".hero");
    if (hero && "IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
            setHeroRunning(entries[0].isIntersecting);
        }).observe(hero);
    }
    if (reduceMotion) setHeroRunning(false);

    /* ---------- Courbe Thermodiag : sonde au survol, état hyperthermie au-delà de 38 °C ---------- */

    var feature = document.querySelector(".feature");
    var thermo = feature && feature.querySelector(".thermo");
    var thermoSetProgress = null;

    if (thermo) {
        var curve = thermo.querySelector(".curve");
        var curveHot = thermo.querySelector(".curve-hot");
        var probe = thermo.querySelector(".probe");
        var probeLabel = thermo.querySelector(".probe-label");
        var probeTrace = thermo.querySelector(".probe-trace");
        var feverTag = thermo.querySelector(".fever-tag");
        var curveLen = curve.getTotalLength();
        [curve, curveHot].forEach(function (c) { c.style.strokeDasharray = curveLen; });

        // Axe : 37 °C à y = 140, 50 unités par degré (décoratif, sans valeur clinique).
        thermoSetProgress = function (p) {
            var len = curveLen * p;
            curve.style.strokeDashoffset = curveLen - len;
            curveHot.style.strokeDashoffset = curveLen - len;
            var pt = curve.getPointAtLength(Math.max(len, 0.01));
            probe.setAttribute("transform", "translate(" + pt.x.toFixed(1) + " " + pt.y.toFixed(1) + ")");
            probeTrace.setAttribute("d", "M" + pt.x.toFixed(1) + " " + (pt.y + 8).toFixed(1) + "V212H350V222");
            var t = 37 + (140 - pt.y) / 50;
            probeLabel.textContent = t.toFixed(1) + " °C";
            var nearEdge = pt.x > 410;
            probeLabel.setAttribute("text-anchor", nearEdge ? "end" : "middle");
            probeLabel.setAttribute("x", nearEdge ? "-16" : "0");
            probeLabel.setAttribute("y", nearEdge ? "-12" : "-18");
            feature.classList.toggle("is-fever", t > 38);
        };
        thermoSetProgress(1);

        document.addEventListener("langchange", function (e) {
            feverTag.textContent = feverTag.dataset[e.detail.lang] || feverTag.textContent;
        });
        if (document.documentElement.lang === "en") feverTag.textContent = feverTag.dataset.en;
    }

    /* ---------- Animations GSAP ---------- */

    function initMotion() {
        var gsap = window.gsap;
        var ST = window.ScrollTrigger;
        if (!gsap || !ST) return false;
        gsap.registerPlugin(ST);

        if (window.Lenis && !reduceMotion) {
            lenis = new window.Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true });
            lenis.on("scroll", function (e) {
                ST.update();
                onScroll(e.scroll);
            });
            gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);
        }

        if (reduceMotion) return true;

        // Séquence d'ouverture, unique moment orchestré de la page.
        var intro = gsap.timeline({ defaults: { ease: "expo.out" } });
        intro
            .from(".leaf--hero", { rotate: -48, opacity: 0, scale: 0.9, transformOrigin: "60% 100%", duration: 2.4 }, 0)
            .from(".portrait", { opacity: 0, scale: 1.05, yPercent: 3, duration: 1.8 }, 0.15)
            .from(".hero-name .line > span", { yPercent: 115, duration: 1.4, stagger: 0.09 }, 0.25)
            .from(".leaf--front", { rotate: 70, opacity: 0, transformOrigin: "50% 100%", duration: 2.2 }, 0.3)
            .from(".orbits", { opacity: 0, duration: 1.6, ease: "power1.out" }, 0.8)
            .from(".hero-lede, .hero-role, .scroll-cue", { opacity: 0, y: 18, duration: 1.1, stagger: 0.08 }, 0.7);

        // Parallaxe du héros : trois plans à des vitesses différentes.
        var heroST = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
        gsap.to(".leaf--hero", { yPercent: -14, rotate: "-=8", ease: "none", scrollTrigger: heroST });
        gsap.to(".hero-figure", { yPercent: 4, ease: "none", scrollTrigger: heroST });
        gsap.to(".leaf--front", { yPercent: -45, rotate: "+=10", ease: "none", scrollTrigger: heroST });
        gsap.to(".hero-copy", { yPercent: -12, opacity: 0.2, ease: "none", scrollTrigger: heroST });

        // Parallaxe au pointeur (souris uniquement) : les plans du héros réagissent au mouvement.
        if (window.matchMedia("(pointer: fine)").matches) {
            var layers = [
                { el: ".leaf--hero", k: -14 },
                { el: ".orbits", k: 10 },
                { el: ".leaf--front", k: 26 }
            ].map(function (l) {
                return {
                    x: gsap.quickTo(l.el, "x", { duration: 1.2, ease: "power3.out" }),
                    y: gsap.quickTo(l.el, "y", { duration: 1.2, ease: "power3.out" }),
                    k: l.k
                };
            });
            hero.addEventListener("pointermove", function (e) {
                var nx = e.clientX / window.innerWidth - 0.5;
                var ny = e.clientY / window.innerHeight - 0.5;
                layers.forEach(function (l) { l.x(nx * l.k * 2); l.y(ny * l.k); });
            });
        }

        // Manifeste : chaque phrase s'allume en passant au centre de l'écran.
        gsap.utils.toArray(".manifest p").forEach(function (p) {
            gsap.fromTo(p, { opacity: 0.45 }, {
                opacity: 1,
                ease: "none",
                scrollTrigger: { trigger: p, start: "top 90%", end: "top 58%", scrub: true }
            });
        });

        // Neurone : les neurites se tracent pendant la lecture du manifeste.
        var neurites = gsap.utils.toArray(".neuron .neurite");
        gsap.set(neurites, { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.to(neurites, {
            strokeDashoffset: 0,
            ease: "none",
            stagger: 0.12,
            scrollTrigger: { trigger: ".essentials", start: "top 75%", end: "bottom 60%", scrub: 0.6 }
        });
        gsap.from(".neuron .soma", {
            scale: 0, transformOrigin: "50% 50%", ease: "back.out(2)", duration: 0.8,
            scrollTrigger: { trigger: ".essentials", start: "top 70%" }
        });

        // ECG : le tracé défile une fois, à l'arrivée.
        var ecg = document.querySelector(".ecg path");
        if (ecg) {
            gsap.fromTo(ecg, { strokeDasharray: 1, strokeDashoffset: 1 }, {
                strokeDashoffset: 0, duration: 2.2, ease: "power2.inOut",
                scrollTrigger: { trigger: ".ecg", start: "top 88%" }
            });
        }

        // Frise du parcours : la piste dorée se remplit avec la lecture.
        var fill = document.querySelector(".timeline-fill");
        if (fill) {
            gsap.fromTo(fill, { "--p": 0 }, {
                "--p": 1, ease: "none",
                scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 70%", scrub: true }
            });
        }

        // Courbe Thermodiag : la sonde parcourt la courbe au survol (au défilement sur écran tactile).
        if (thermoSetProgress) {
            var probeState = { p: 1 };
            var probeTween = null;
            var playProbe = function () {
                if (probeTween && probeTween.isActive()) return;
                probeState.p = 0;
                probeTween = gsap.to(probeState, {
                    p: 1, duration: 3.4, ease: "sine.inOut",
                    onUpdate: function () { thermoSetProgress(probeState.p); }
                });
            };
            var art = feature.querySelector(".feature-art");
            if (window.matchMedia("(pointer: fine)").matches) {
                art.addEventListener("pointerenter", playProbe);
            } else {
                ST.create({ trigger: art, start: "top 70%", once: true, onEnter: playProbe });
                art.addEventListener("click", playProbe);
            }
        }

        // Feuille du contact : légère dérive.
        gsap.fromTo(".leaf--contact", { yPercent: 12, rotate: -160 }, {
            yPercent: -8, rotate: -146, ease: "none",
            scrollTrigger: { trigger: ".contact", start: "top bottom", end: "bottom bottom", scrub: true }
        });

        return true;
    }

    function boot() {
        var ok = initMotion();
        if (!lenis) {
            window.addEventListener("scroll", function () { onScroll(window.scrollY); }, { passive: true });
        }
        onScroll(window.scrollY);

        var resizeTimer;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                onScroll(window.scrollY);
            }, 150);
        });

        // Le changement de langue modifie la hauteur des blocs : recalcul.
        document.addEventListener("langchange", function () {
            if (ok && window.ScrollTrigger) window.ScrollTrigger.refresh();
            onScroll(window.scrollY);
        });

        if (ok && document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                window.ScrollTrigger.refresh();
            });
        }
    }

    // Les scripts sont en defer : GSAP et Lenis sont chargés avant celui-ci.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }
})();
