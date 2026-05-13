(function () {
    'use strict';

    var STORAGE_KEY = 'unitins-portalaluno-lang';
    var PERFIL_ALUNO_REPLICA = '../perfil-aluno/index.html';

    var MESSAGES = {
        pt: {
            docTitle: 'Portal do Aluno - Login | UNITINS',
            docDescription: 'Acesso ao Portal do Aluno da Universidade Estadual do Tocantins (UNITINS) com e-mail institucional.',
            skipToContent: 'Pular para o formulário de login',
            i18nGroupAria: 'Idioma da página',
            ariaLogo: 'Ir para o site institucional UNITINS',
            altLogo: 'Logo Unitins',
            breadNavAria: 'Navegação estrutural',
            breadHome: 'Início',
            breadPortalAluno: 'Portal do Aluno',
            breadCurrent: 'Login',
            introTitle: 'Portal do Aluno',
            introEmail: 'Acesse utilizando seu e-mail institucional:',
            lblEmail: 'E-mail (@unitins.br)',
            phEmail: 'E-mail (@unitins.br)',
            titleEmail: 'Use um e-mail @unitins.br',
            lblPassword: 'Senha',
            phPassword: 'Senha',
            forgotPassword: 'Esqueci minha senha',
            needHelp: 'Preciso de Ajuda',
            avaLink: 'AVA (Turmas 2001-2008)',
            avaTitle: 'AVA - Ambiente Virtual de Aprendizagem',
            btnEnter: 'Entrar',
            accordionTitle: 'Acesse nossos Tutoriais e Links Úteis',
            tut1: 'Primeiro acesso ou problemas de acesso',
            tut2: 'Esqueci a senha ou quero trocá-la',
            tut3: 'Como utilizar as ferramentas do Educ@',
            tut4: 'Guia Prático do Acadêmico',
            tut5: 'Manual do Acadêmico',
            tut6: 'SIBUNI - Sistema Integrado de Bibliotecas',
            footerRights: 'Todos os direitos reservados.',
            footerDti: 'Desenvolvido pela Diretoria de Tecnologia da Informação',
            footerInst: 'UNIVERSIDADE ESTADUAL DO TOCANTINS - UNITINS',
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
            themeToDark: 'Ativar tema escuro',
            themeToLight: 'Ativar tema claro',
            themeTitle: 'Alternar tema claro ou escuro',
        },
        en: {
            docTitle: 'Student Portal - Sign in | UNITINS',
            docDescription: 'Sign in to the Student Portal of the State University of Tocantins (UNITINS) with your institutional email.',
            skipToContent: 'Skip to login form',
            i18nGroupAria: 'Page language',
            ariaLogo: 'Go to the UNITINS institutional website',
            altLogo: 'Unitins logo',
            breadNavAria: 'Structural navigation',
            breadHome: 'Home',
            breadPortalAluno: 'Student portal',
            breadCurrent: 'Sign in',
            introTitle: 'Student Portal',
            introEmail: 'Sign in with your institutional email:',
            lblEmail: 'Email (@unitins.br)',
            phEmail: 'Email (@unitins.br)',
            titleEmail: 'Use an @unitins.br email address',
            lblPassword: 'Password',
            phPassword: 'Password',
            forgotPassword: 'Forgot my password',
            needHelp: 'I need help',
            avaLink: 'LMS (Classes 2001–2008)',
            avaTitle: 'LMS - Virtual Learning Environment',
            btnEnter: 'Sign in',
            accordionTitle: 'Tutorials and useful links',
            tut1: 'First sign-in or access issues',
            tut2: 'Forgot password or want to change it',
            tut3: 'How to use Educ@ tools',
            tut4: 'Practical Student Guide',
            tut5: 'Student Handbook',
            tut6: 'SIBUNI - Integrated Library System',
            footerRights: 'All rights reserved.',
            footerDti: 'Developed by the Information Technology Directorate',
            footerInst: 'STATE UNIVERSITY OF TOCANTINS - UNITINS',
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
            themeToDark: 'Switch to dark theme',
            themeToLight: 'Switch to light theme',
            themeTitle: 'Toggle light or dark theme',
        }
    };

    function getLang() {
        return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
    }

    function t(key) {
        var pack = MESSAGES[getLang()] || MESSAGES.pt;
        return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : (MESSAGES.pt[key] || key);
    }

    function breadcrumbJson() {
        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: t('breadHome'), item: '#' },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: t('breadPortalAluno'),
                    item: PERFIL_ALUNO_REPLICA
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    name: t('breadCurrent'),
                    item: 'https://www.unitins.br/PortalAluno/Account/Login'
                }
            ]
        };
    }

    function setHreflang() {
        var base = (typeof location !== 'undefined' && location.href) ? location.href.split('#')[0] : '';
        var pt = document.getElementById('hreflang-pt-br-login');
        var en = document.getElementById('hreflang-en-login');
        var fallback = 'https://www.unitins.br/PortalAluno/Account/Login';
        if (pt) pt.setAttribute('href', base || fallback);
        if (en) en.setAttribute('href', base || fallback);
    }

    function applyThemeToggleAria() {
        var btn = document.getElementById('theme-toggle-login');
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
            el.textContent = t(el.getAttribute('data-i18n'));
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

        var ld = document.getElementById('ld-breadcrumb-login');
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

    window.unitinsLoginI18n = {
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
