(function () {
    'use strict';

    var STORAGE_KEY = 'unitins-iprotocolo-lang';

    var MESSAGES = {
        pt: {
            docTitle: 'IProtocolo — Protocolo Virtual | UNITINS',
            metaDescription: 'Ambiente oficial de protocolos virtuais da UNITINS: novas solicitações, acompanhamento e dúvidas frequentes.',
            skipToContent: 'Pular para o conteúdo principal',
            i18nGroupAria: 'Idioma da página',
            themeToDark: 'Ativar tema escuro',
            themeToLight: 'Ativar tema claro',
            themeTitle: 'Alternar tema claro ou escuro',
            navAdmin: 'Acesso administrativo',
            breadNavAria: 'Navegação estrutural',
            breadHome: 'Início',
            breadPortalAluno: 'Portal do Aluno',
            breadCurrent: 'IProtocolo',
            heroTitle: 'Protocolo virtual público',
            heroLead: 'Seja bem-vindo ao nosso ambiente de protocolos. Este é o local oficial e seguro onde acadêmicos, docentes, empresas parceiras e visitantes enviam e acompanham solicitações de serviço.',
            heroLi1: 'Suporte e controle de acesso aos sistemas;',
            heroLi2: 'Emissão e conferência de documentos oficiais;',
            heroLi3: 'Canal para dúvidas, elogios ou sugestões.',
            cardNewTitle: 'Nova solicitação',
            cardNewDesc: 'Abra um novo protocolo rapidamente.',
            cardMyTitle: 'Minhas solicitações',
            cardMyDesc: 'Acompanhe o status e o histórico dos seus protocolos.',
            cardFaqTitle: 'Dúvidas frequentes',
            cardFaqDesc: 'Soluções mais frequentes e orientações.',
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
            footerDti: 'Desenvolvido pela Diretoria de Tecnologia da Informação'
        },
        en: {
            docTitle: 'IProtocolo — Virtual front desk | UNITINS',
            metaDescription: 'Official UNITINS virtual protocols: new requests, tracking, and frequently asked questions.',
            skipToContent: 'Skip to main content',
            i18nGroupAria: 'Page language',
            themeToDark: 'Switch to dark theme',
            themeToLight: 'Switch to light theme',
            themeTitle: 'Toggle light or dark theme',
            navAdmin: 'Administrative access',
            breadNavAria: 'Structural navigation',
            breadHome: 'Home',
            breadPortalAluno: 'Student portal',
            breadCurrent: 'IProtocolo',
            heroTitle: 'Public virtual protocol',
            heroLead: 'Welcome to our protocol area. This is the official, secure place where students, faculty, partners, and visitors submit and track service requests.',
            heroLi1: 'Support and access to institutional systems;',
            heroLi2: 'Issuance and verification of official documents;',
            heroLi3: 'A clear path for questions, feedback, or suggestions.',
            cardNewTitle: 'New request',
            cardNewDesc: 'Open a new ticket quickly.',
            cardMyTitle: 'My requests',
            cardMyDesc: 'Track status and history of your tickets.',
            cardFaqTitle: 'Frequently asked questions',
            cardFaqDesc: 'Common answers and guidance.',
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
            footerDti: 'Developed by the Information Technology Directorate'
        }
    };

    function getLang() {
        return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'pt';
    }

    function t(key) {
        var pack = MESSAGES[getLang()] || MESSAGES.pt;
        return Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : (MESSAGES.pt[key] || key);
    }

    function applyThemeToggleAria() {
        var btn = document.getElementById('theme-toggle-ipro');
        if (!btn) return;
        var dark = document.documentElement.getAttribute('data-theme') === 'dark';
        btn.setAttribute('aria-label', t(dark ? 'themeToLight' : 'themeToDark'));
        btn.setAttribute('title', t('themeTitle'));
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

        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
        });

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
        });

        document.title = t('docTitle');
        var meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', t('metaDescription'));

        var ld = document.getElementById('ld-webpage-iprotocolo');
        if (ld) {
            ld.textContent = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: t('heroTitle'),
                description: t('metaDescription'),
                inLanguage: lang === 'en' ? 'en' : 'pt-BR',
                publisher: {
                    '@type': 'Organization',
                    name: 'Universidade Estadual do Tocantins — UNITINS',
                    url: 'https://www.unitins.br'
                }
            });
        }

        syncLangButtons();
        applyThemeToggleAria();

        var ldBc = document.getElementById('ld-breadcrumb-ipro');
        if (ldBc) {
            ldBc.textContent = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: t('breadHome'), item: '#' },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: t('breadPortalAluno'),
                        item: '../nportal-perfilaluno-replica/index.html'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: t('breadCurrent'),
                        item: 'https://www.unitins.br/iprotocolo/Default.aspx'
                    }
                ]
            });
        }
    }

    function syncLangButtons() {
        var lang = getLang();
        var pt = document.getElementById('ipro-pt');
        var en = document.getElementById('ipro-en');
        var group = document.querySelector('.ipro-lang');
        if (group) group.setAttribute('aria-label', t('i18nGroupAria'));
        if (pt && en) {
            var ptOn = lang === 'pt';
            pt.setAttribute('aria-pressed', ptOn ? 'true' : 'false');
            en.setAttribute('aria-pressed', ptOn ? 'false' : 'true');
            pt.classList.toggle('ipro-lang-on', ptOn);
            pt.classList.toggle('ipro-lang-off', !ptOn);
            en.classList.toggle('ipro-lang-on', !ptOn);
            en.classList.toggle('ipro-lang-off', ptOn);
        }
    }

    function setLang(next) {
        var v = next === 'en' ? 'en' : 'pt';
        try {
            localStorage.setItem(STORAGE_KEY, v);
        } catch (e) {}
        document.documentElement.setAttribute('data-lang', v);
        document.documentElement.setAttribute('lang', v === 'en' ? 'en' : 'pt-BR');
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

    window.unitinsIprotocoloI18n = {
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
