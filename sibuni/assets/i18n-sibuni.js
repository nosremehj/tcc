(function () {
    'use strict';

    var STORAGE_KEY = 'unitins-sibuni-lang';
    var GUIDE_URL = 'https://www.unitins.br/cms/Arquivos/Download/43B352E10D0678102C2B237174DC6E00B217FD8F';
    var PERFIL_ALUNO_REPLICA = '../perfil-aluno/index.html';

    var MESSAGES = {
        pt: {
            docTitle: 'Unitins - SIBUNI',
            docDescription: 'Unitins - Universidade Estadual do Tocantins — Sistema Integrado de Bibliotecas (SIBUNI).',
            skipToContent: 'Pular para o conteúdo principal',
            i18nGroupAria: 'Idioma da página',
            ariaMenu: 'Menu',
            ariaSearch: 'Pesquisar',
            ariaHome: 'Ir para a página inicial',
            altLogoUnitins: 'Logo Unitins',
            altSimbolo: 'Símbolo Unitins',
            altLogoGov: 'Logo Governo do Tocantins',
            navAria: 'Menu principal do SIBUNI',
            navCampus: 'Bibliotecas dos câmpus',
            navVirtual: 'Biblioteca Virtual',
            navFicha: 'Ficha Catalográfica',
            navTCC: 'Repositório Digital de TCCs',
            navLinks: 'Links úteis',
            megaPres: 'Apresentação',
            megaDados: 'BASES DE DADOS',
            megaDiv: 'DIVERSOS',
            megaRegimento: 'Regimento',
            megaTutorial: 'Tutorial sobre o Sibuni',
            megaEbooks: 'E-books Diversos',
            megaCat: 'Catálogo on-line',
            megaFAQ: 'Perguntas Frequentes',
            megaProd: 'Produtos e Serviços',
            mobileClose: 'Fechar',
            pageLead: 'Sistema Integrado de Bibliotecas da UNITINS',
            breadNavAria: 'Navegação estrutural',
            breadHome: 'Início',
            breadPortalAluno: 'Portal do Aluno',
            introTitle: 'Apresentação',
            introP: 'Composto pelas Bibliotecas dos Câmpus de Palmas, Dianópolis, Araguatins e Augustinópolis, o Sistema Integrado de Bibliotecas da Universidade Estadual do Tocantins (Sibuni) alinha a gestão do acervo bibliográfico da instituição, disponibilizando suporte informacional necessário para o desenvolvimento de atividades técnicas administrativas e aos programas de ensino, pesquisa e extensão da Universidade.',
            chipsAria: 'Câmpus com bibliotecas integradas ao SIBUNI',
            regimentoLink: 'Confira o Regimento de Acesso da Biblioteca Unitins',
            newsH: 'Notícias',
            newsAll: 'Todas as Notícias',
            modalClose: 'Fechar',
            placeSearch: 'Pesquisar…',
            ariaSearchSibuni: 'Pesquisar no SIBUNI',
            ariaSearchBtn: 'Pesquisar',
            sugTitle: 'Talvez você possa se interessar por…',
            sugPortalAluno: 'Portal do Aluno',
            sugVest: 'Vestibular',
            sugContra: 'Contracheque',
            sugProf: 'Portal do Professor',
            sugFerias: 'Férias',
            sugConc: 'Concursos',
            sugForm: 'Formulário de frequência',
            sugEvt: 'Sistema Eventos',
            sugLib: 'Biblioteca',
            sugDip: 'Diploma e Histórico',
            sugEst1: 'Estágio obrigatório',
            sugEst2: 'Estágio não obrigatório',
            socialIG: 'Instagram Unitins',
            socialFB: 'Facebook Unitins',
            socialYT: 'Youtube Unitins',
            socialTW: 'Twitter Unitins',
            socialLI: 'Linkedin Unitins',
            footColAtend: 'Atendimento ao Acadêmico',
            footOuvInst: 'Ouvidoria Institucional',
            footCentral162: 'Central 162 Ouvidoria Geral',
            footAcessoInfo: 'Acesso à Informação',
            footTransp: 'Portal da Transparência',
            footColCert: 'Certificação Acadêmica',
            footEmecStrong: 'Sistema e-MEC',
            footEmecSub: 'Instituição Credenciada Ativa',
            footQrAlt: 'QR Code e-MEC',
            footColSede: 'Sede Administrativa',
            footAddrLine1: '108 sul Alameda 11 Lote 03',
            footAddrLine2: 'Palmas-TO, CEP: 77020-122',
            footCopyrightLight: '© 2026 Universidade Estadual do Tocantins - UNITINS. Todos os direitos reservados. Projeto Acadêmico TCC.',
            footerDti: 'Desenvolvido pela Diretoria de Tecnologia da Informação',
            backTop: 'Voltar ao topo',
            themeToDark: 'Ativar tema escuro',
            themeToLight: 'Ativar tema claro',
            themeTitle: 'Alternar tema claro ou escuro',
            breadCurrent: 'SIBUNI',
        },
        en: {
            docTitle: 'Unitins - SIBUNI',
            docDescription: 'State University of Tocantins (Unitins) — Integrated Library System (SIBUNI).',
            skipToContent: 'Skip to main content',
            i18nGroupAria: 'Page language',
            ariaMenu: 'Menu',
            ariaSearch: 'Search',
            ariaHome: 'Go to home page',
            altLogoUnitins: 'Unitins logo',
            altSimbolo: 'Unitins symbol',
            altLogoGov: 'Tocantins state government logo',
            navAria: 'SIBUNI main menu',
            navCampus: 'Campus libraries',
            navVirtual: 'Virtual library',
            navFicha: 'Cataloging sheet',
            navTCC: 'Digital undergraduate thesis repository',
            navLinks: 'Useful links',
            megaPres: 'About',
            megaDados: 'DATABASES',
            megaDiv: 'OTHER',
            megaRegimento: 'Regulations',
            megaTutorial: 'Sibuni tutorial',
            megaEbooks: 'E-books',
            megaCat: 'Online catalog',
            megaFAQ: 'FAQ',
            megaProd: 'Products and services',
            mobileClose: 'Close',
            pageLead: 'Integrated Library System of UNITINS',
            breadNavAria: 'Structural navigation',
            breadHome: 'Home',
            breadPortalAluno: 'Student portal',
            introTitle: 'Overview',
            introP: 'Comprising the libraries of the Palmas, Dianópolis, Araguatins and Augustinópolis campuses, the Integrated Library System of the State University of Tocantins (Sibuni) aligns management of the institution’s bibliographic holdings, providing informational support for technical and administrative activities and for the University’s teaching, research, and extension programs.',
            chipsAria: 'Campuses served by SIBUNI',
            regimentoLink: 'See the Unitins Library Access Regulations',
            newsH: 'News',
            newsAll: 'All news',
            modalClose: 'Close',
            placeSearch: 'Search…',
            ariaSearchSibuni: 'Search SIBUNI',
            ariaSearchBtn: 'Search',
            sugTitle: 'You might also be interested in…',
            sugPortalAluno: 'Student portal',
            sugVest: 'Entrance exam',
            sugContra: 'Payslip',
            sugProf: 'Faculty portal',
            sugFerias: 'Leave (vacation)',
            sugConc: 'Public tenders',
            sugForm: 'Attendance form',
            sugEvt: 'Events system',
            sugLib: 'Library',
            sugDip: 'Diploma and transcript',
            sugEst1: 'Mandatory internship',
            sugEst2: 'Non-mandatory internship',
            socialIG: 'Unitins on Instagram',
            socialFB: 'Unitins on Facebook',
            socialYT: 'Unitins on YouTube',
            socialTW: 'Unitins on Twitter',
            socialLI: 'Unitins on LinkedIn',
            footColAtend: 'Student support',
            footOuvInst: 'Institutional ombudsman',
            footCentral162: 'Dial 162 — State ombudsman',
            footAcessoInfo: 'Access to information',
            footTransp: 'Transparency portal',
            footColCert: 'Academic certification',
            footEmecStrong: 'e-MEC system',
            footEmecSub: 'Active accredited institution',
            footQrAlt: 'e-MEC QR code',
            footColSede: 'Administrative headquarters',
            footAddrLine1: '108 Sul, Alameda 11, Lot 03',
            footAddrLine2: 'Palmas-TO, ZIP: 77020-122',
            footCopyrightLight: '© 2026 State University of Tocantins - UNITINS. All rights reserved. Academic TCC project.',
            footerDti: 'Developed by the Information Technology Directorate',
            backTop: 'Back to top',
            themeToDark: 'Switch to dark theme',
            themeToLight: 'Switch to light theme',
            themeTitle: 'Toggle light or dark theme',
            breadCurrent: 'SIBUNI',
        }
    };

    function getLang() {
        return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
    }

    function t(key) {
        var pack = MESSAGES[getLang()] || MESSAGES.pt;
        return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : (MESSAGES.pt[key] || key);
    }

    function guideHtml() {
        if (getLang() === 'en') {
            return '<strong>Access the <a href="' + GUIDE_URL + '" target="_blank" rel="noopener noreferrer">Library User Guide</a> here!</strong>';
        }
        return '<strong>Acesse aqui o <a href="' + GUIDE_URL + '" target="_blank" rel="noopener noreferrer">Guia do Usuário</a> da Biblioteca!</strong>';
    }

    function breadcrumbJson() {
        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: t('breadHome'), item: '#' },
                { '@type': 'ListItem', position: 2, name: t('breadPortalAluno'), item: PERFIL_ALUNO_REPLICA },
                { '@type': 'ListItem', position: 3, name: t('breadCurrent'), item: 'https://www.unitins.br/nPortal/sibuni' }
            ]
        };
    }

    function setHreflang() {
        var base = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : '';
        var pt = document.getElementById('hreflang-pt-br');
        var en = document.getElementById('hreflang-en');
        if (pt) pt.setAttribute('href', base || 'https://www.unitins.br/nPortal/sibuni');
        if (en) en.setAttribute('href', base || 'https://www.unitins.br/nPortal/sibuni');
    }

    function applyThemeToggleAria() {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        btn.setAttribute('aria-label', t(dark ? 'themeToLight' : 'themeToDark'));
        btn.setAttribute('title', t('themeTitle'));
    }

    function syncLangSwitcher() {
        var lang = getLang();
        var ptBtn = document.getElementById('ipro-pt');
        var enBtn = document.getElementById('ipro-en');
        var group = document.querySelector('.ipro-lang');
        if (group) group.setAttribute('aria-label', t('i18nGroupAria'));

        if (ptBtn && enBtn) {
            var ptOn = lang === 'pt';
            ptBtn.setAttribute('aria-pressed', ptOn ? 'true' : 'false');
            enBtn.setAttribute('aria-pressed', ptOn ? 'false' : 'true');
            ptBtn.classList.toggle('ipro-lang-on', ptOn);
            ptBtn.classList.toggle('ipro-lang-off', !ptOn);
            enBtn.classList.toggle('ipro-lang-on', !ptOn);
            enBtn.classList.toggle('ipro-lang-off', ptOn);
        }
    }

    function applyAll() {
        var lang = getLang();
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            el.textContent = t(key);
        });

        document.querySelectorAll('[data-i18n-html="guideHtml"]').forEach(function (el) {
            el.innerHTML = guideHtml();
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria-label')));
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
        });

        document.title = t('docTitle');
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', t('docDescription'));

        var ld = document.getElementById('ld-breadcrumb');
        if (ld) ld.textContent = JSON.stringify(breadcrumbJson());

        setHreflang();
        syncLangSwitcher();
        applyThemeToggleAria();
    }

    function setLang(lang) {
        var next = lang === 'en' ? 'en' : 'pt';
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        document.documentElement.setAttribute('data-lang', next);
        document.documentElement.setAttribute('lang', next === 'en' ? 'en' : 'pt-BR');
        applyAll();
    }

    function init() {
        var stored = null;
        try {
            stored = localStorage.getItem(STORAGE_KEY);
        } catch (e) {}
        var lang = (stored === 'en' || stored === 'pt') ? stored : 'pt';
        document.documentElement.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');

        applyAll();

        document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLang(btn.getAttribute('data-set-lang'));
            });
        });
    }

    window.unitinsI18n = {
        t: t,
        setLang: setLang,
        getLang: getLang,
        applyAll: applyAll,
        applyThemeToggleAria: applyThemeToggleAria
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
