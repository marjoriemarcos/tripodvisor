import storage from "./storage.js";
const theme = {
    bodyElem: null,

    init: function () {
        theme.bodyElem = document.body;
        theme.firstInitOfLocalStorage ();
        const btnDarkTheme = document.querySelector('#theme-switch');
        btnDarkTheme.addEventListener('click', theme.handleClickbtnDarkTheme);

        theme.imgChangedWithColor = document.querySelector('.logo__image');

        const btnColorTheme = document.querySelectorAll('.theme-button');
        for (const eachbtnColored of btnColorTheme) {
            eachbtnColored.addEventListener('click', theme.handleClickbtnColorTheme);
        }
    },

    handleClickbtnDarkTheme: function () {
        theme.bodyElem.classList.toggle('theme-dark');
        // sauvegarde dans le local storage
        const isContainClassDarkThem =  theme.bodyElem.classList.contains('theme-dark');
        storage.saveToLocalStorage('isDark', isContainClassDarkThem);
    },

    handleClickbtnColorTheme: function (event) {
        const cliquedThem = event.target.id;
        console.log('cliquedThem', cliquedThem)
        storage.saveToLocalStorage('isColored', cliquedThem);
        storage.saveToLocalStorage('isColoredImg', `img/logo-${cliquedThem}.png`);
        theme.chooseColor(cliquedThem);

    },

    chooseColor: function (name) {
        document.body.classList.remove('theme-green', 'theme-red', 'theme-blue');
        theme.bodyElem.classList.add(name);
        const logoImg = document.querySelector('.logo__image');
        logoImg.src = "img/logo-" + name + ".png";
    },


    firstInitOfLocalStorage: function () {
        const isDarkBolean = storage.saveFromLocalStorage('isDark');
        const isDarkThemeBody = (isDarkBolean) ? theme.bodyElem.classList.add('theme-dark') : theme.bodyElem.classList.remove('theme-dark');

        const isColored = storage.saveFromLocalStorage('isColored');
        if (isColored) {
            theme.chooseColor(isColored);
        }

       },

}

document.addEventListener('DOMContentLoaded', theme.init);

export default theme;