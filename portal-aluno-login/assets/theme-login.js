(function () {
    'use strict';

    var STORAGE_KEY = 'unitins-portalaluno-theme';

    function currentTheme() {
        return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function setTheme(theme) {
        var t = theme === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t);
        try {
            localStorage.setItem(STORAGE_KEY, t);
        } catch (e) {}
        syncToggle();
    }

    function syncToggle() {
        var btn = document.getElementById('theme-toggle-login');
        if (!btn) return;

        var dark = currentTheme() === 'dark';
        btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
        if (window.unitinsLoginI18n && window.unitinsLoginI18n.applyThemeToggleAria) {
            window.unitinsLoginI18n.applyThemeToggleAria();
        } else {
            btn.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
        }

        var moon = btn.querySelector('.theme-icon-dark');
        var sun = btn.querySelector('.theme-icon-light');
        if (moon) moon.classList.toggle('d-none', dark);
        if (sun) sun.classList.toggle('d-none', !dark);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle-login');
        if (btn) {
            btn.addEventListener('click', function () {
                setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
            });
        }
        syncToggle();
    });
})();
