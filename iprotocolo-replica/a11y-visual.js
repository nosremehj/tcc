(function () {
    'use strict';

    var STORAGE_KEY = 'unitins-visual-a11y';

    var DEFAULTS = { font: 'md', spacing: 'normal', contrast: 'normal' };

    var LABELS = {
        pt: {
            fab: 'Acessibilidade visual',
            title: 'Leitura personalizada',
            font: 'Tamanho da fonte',
            fontSm: 'Menor',
            fontMd: 'Normal',
            fontLg: 'Maior',
            fontXl: 'Muito maior',
            spacing: 'Espaçamento',
            spacingNormal: 'Padrão',
            spacingWide: 'Amplo',
            contrast: 'Contraste',
            contrastNormal: 'Padrão',
            contrastHigh: 'Alto contraste',
            save: 'Aplicar',
            reset: 'Redefinir',
            close: 'Fechar painel'
        },
        en: {
            fab: 'Visual accessibility',
            title: 'Personalized reading',
            font: 'Font size',
            fontSm: 'Smaller',
            fontMd: 'Normal',
            fontLg: 'Larger',
            fontXl: 'Largest',
            spacing: 'Spacing',
            spacingNormal: 'Default',
            spacingWide: 'Comfortable',
            contrast: 'Contrast',
            contrastNormal: 'Default',
            contrastHigh: 'High contrast',
            save: 'Apply',
            reset: 'Reset',
            close: 'Close panel'
        }
    };

    function langPack() {
        var l = document.documentElement.getAttribute('lang') || 'pt-BR';
        return l.indexOf('en') === 0 ? LABELS.en : LABELS.pt;
    }

    function readSettings() {
        var o = {};
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) o = JSON.parse(raw);
        } catch (e) {}
        return {
            font: o.font === 'sm' || o.font === 'md' || o.font === 'lg' || o.font === 'xl' ? o.font : DEFAULTS.font,
            spacing: o.spacing === 'wide' || o.spacing === 'normal' ? o.spacing : DEFAULTS.spacing,
            contrast: o.contrast === 'high' || o.contrast === 'normal' ? o.contrast : DEFAULTS.contrast
        };
    }

    function writeSettings(s) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
        } catch (e) {}
    }

    function applyToDocument(s) {
        var h = document.documentElement;
        h.setAttribute('data-a11y-font-size', s.font);
        h.setAttribute('data-a11y-spacing', s.spacing);
        h.setAttribute('data-a11y-contrast', s.contrast);
    }

    function syncFormFromSettings(root, s) {
        var f = root.querySelector('input[name="unitins-a11y-font"][value="' + s.font + '"]');
        if (f) f.checked = true;
        var sp = root.querySelector('input[name="unitins-a11y-spacing"][value="' + s.spacing + '"]');
        if (sp) sp.checked = true;
        var c = root.querySelector('input[name="unitins-a11y-contrast"][value="' + s.contrast + '"]');
        if (c) c.checked = true;
    }

    function collectFromForm(root) {
        var font = root.querySelector('input[name="unitins-a11y-font"]:checked');
        var spacing = root.querySelector('input[name="unitins-a11y-spacing"]:checked');
        var contrast = root.querySelector('input[name="unitins-a11y-contrast"]:checked');
        return {
            font: font ? font.value : DEFAULTS.font,
            spacing: spacing ? spacing.value : DEFAULTS.spacing,
            contrast: contrast ? contrast.value : DEFAULTS.contrast
        };
    }

    function buildPanel() {
        var root = document.createElement('div');
        root.className = 'unitins-a11y-root';
        root.setAttribute('id', 'unitins-a11y-root');
        root.innerHTML =
            '<button type="button" class="unitins-a11y-fab" id="unitins-a11y-fab" aria-expanded="false" aria-controls="unitins-a11y-panel">' +
            '<span aria-hidden="true">A</span><span class="unitins-a11y-fab-text"></span></button>' +
            '<div class="unitins-a11y-panel" id="unitins-a11y-panel" role="dialog" aria-modal="false" hidden>' +
            '<h2 id="unitins-a11y-title"></h2>' +
            '<fieldset class="unitins-a11y-field"><legend class="unitins-a11y-legend-font"></legend><div class="unitins-a11y-options">' +
            '<label><input type="radio" name="unitins-a11y-font" value="sm" /><span class="t-f-sm"></span></label>' +
            '<label><input type="radio" name="unitins-a11y-font" value="md" /><span class="t-f-md"></span></label>' +
            '<label><input type="radio" name="unitins-a11y-font" value="lg" /><span class="t-f-lg"></span></label>' +
            '<label><input type="radio" name="unitins-a11y-font" value="xl" /><span class="t-f-xl"></span></label>' +
            '</div></fieldset>' +
            '<fieldset class="unitins-a11y-field"><legend class="unitins-a11y-legend-spacing"></legend><div class="unitins-a11y-options">' +
            '<label><input type="radio" name="unitins-a11y-spacing" value="normal" /><span class="t-s-n"></span></label>' +
            '<label><input type="radio" name="unitins-a11y-spacing" value="wide" /><span class="t-s-w"></span></label>' +
            '</div></fieldset>' +
            '<fieldset class="unitins-a11y-field"><legend class="unitins-a11y-legend-contrast"></legend><div class="unitins-a11y-options">' +
            '<label><input type="radio" name="unitins-a11y-contrast" value="normal" /><span class="t-c-n"></span></label>' +
            '<label><input type="radio" name="unitins-a11y-contrast" value="high" /><span class="t-c-h"></span></label>' +
            '</div></fieldset>' +
            '<div class="unitins-a11y-actions">' +
            '<button type="button" class="secondary" id="unitins-a11y-reset"></button>' +
            '<button type="button" id="unitins-a11y-save"></button>' +
            '</div></div>';

        document.body.appendChild(root);

        function fillTexts() {
            var L = langPack();
            root.querySelector('.unitins-a11y-fab-text').textContent = L.fab;
            root.querySelector('#unitins-a11y-fab').setAttribute('aria-label', L.fab);
            root.querySelector('#unitins-a11y-title').textContent = L.title;
            root.querySelector('.unitins-a11y-legend-font').textContent = L.font;
            root.querySelector('.unitins-a11y-legend-spacing').textContent = L.spacing;
            root.querySelector('.unitins-a11y-legend-contrast').textContent = L.contrast;
            root.querySelector('.t-f-sm').textContent = L.fontSm;
            root.querySelector('.t-f-md').textContent = L.fontMd;
            root.querySelector('.t-f-lg').textContent = L.fontLg;
            root.querySelector('.t-f-xl').textContent = L.fontXl;
            root.querySelector('.t-s-n').textContent = L.spacingNormal;
            root.querySelector('.t-s-w').textContent = L.spacingWide;
            root.querySelector('.t-c-n').textContent = L.contrastNormal;
            root.querySelector('.t-c-h').textContent = L.contrastHigh;
            root.querySelector('#unitins-a11y-reset').textContent = L.reset;
            root.querySelector('#unitins-a11y-save').textContent = L.save;
        }

        var fab = root.querySelector('#unitins-a11y-fab');
        var panel = root.querySelector('#unitins-a11y-panel');

        function setOpen(open) {
            panel.hidden = !open;
            fab.setAttribute('aria-expanded', open ? 'true' : 'false');
            if (open) {
                fillTexts();
                syncFormFromSettings(root, readSettings());
            }
        }

        fillTexts();
        applyToDocument(readSettings());
        syncFormFromSettings(root, readSettings());

        fab.addEventListener('click', function (ev) {
            ev.stopPropagation();
            setOpen(panel.hidden);
        });

        root.querySelector('#unitins-a11y-save').addEventListener('click', function () {
            var s = collectFromForm(root);
            writeSettings(s);
            applyToDocument(s);
            setOpen(false);
        });

        root.querySelector('#unitins-a11y-reset').addEventListener('click', function () {
            try {
                localStorage.removeItem(STORAGE_KEY);
            } catch (e) {}
            applyToDocument(DEFAULTS);
            syncFormFromSettings(root, DEFAULTS);
        });

        document.addEventListener('click', function (ev) {
            if (!root.contains(ev.target) && !panel.hidden) setOpen(false);
        });

        var mo = new MutationObserver(function () {
            fillTexts();
        });
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

        window.unitinsVisualA11y = {
            refresh: fillTexts,
            getSettings: readSettings,
            apply: function (s) {
                writeSettings(s);
                applyToDocument(s);
            }
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildPanel);
    } else {
        buildPanel();
    }
})();
