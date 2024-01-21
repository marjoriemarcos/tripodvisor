import storage from "../js/storage.js";
const theme = {

    bodyElem : null,
    btnElemAll : null,

    init: function () {

    // on récupère notre body
    theme.bodyElem = document.body;

    // on va voir si dans le localStorage il y a la valeur isDark
    // si true on active le dark-theme
    theme.initLocalState();


    // on récupère le bouton du dark thème
    theme.btnDark = document.querySelector('#theme-switch');
    theme.btnDark.addEventListener('click', theme.handleDarkChange);

    // on récupère le bouton du rouge thème
    // on recupère les boutons couleurs
    const allColorBtn = document.querySelectorAll('.theme-button');

   // on parcours le tableau des boutons et pour chaque bouton on pose un ecouteur de click
    for (const btn of allColorBtn) {
        btn.addEventListener('click', theme.handleColorChange);
    }
    },

    handleDarkChange: function () {
        // function qui permet de changer de thème
        theme.bodyElem.classList.toggle('theme-dark');
        theme.saveDarkThemeToLocalStorage();
    },

    handleColorChange: function(event) {  
       const clickBtn = event.currentTarget;
       const colorTheme = clickBtn.id;
       theme.changeColorThem(colorTheme);
       storage.saveToLocalStorage('ColorTheme', colorTheme);

    },

    /**
     * funbction qui change la couleur du site 
     * @param {string} theme : 'theme-green', 'theme-red', 'theme-blue'
     */

    changeColorThem: function (themeClass) {
        document.body.classList.remove('theme-red', 'theme-blue', 'theme-green');
        document.body.classList.add(themeClass);
        const logoImg = document.querySelector('.logo__image');
        const newImgLink = `img/logo-${themeClass}.png`;
        logoImg.src = newImgLink;
    },


    saveDarkThemeToLocalStorage: function () {
        // on vérifie si le body contien le dark-theme - renvoie true si class présente ou false si non
        const isDark = theme.bodyElem.classList.contains('theme-dark');
        // on utilise notre fonction du module storage pour enregistrer le darkmode 
        storage.saveToLocalStorage('isDark', isDark);

    },

    initLocalState: function () {
        // theme dark
        // on récupère isDark du localStorage avec notre fonction en storage
        const isDarkBoolean = storage.getFromLocalStorage('isDark');

        if (isDarkBoolean) {
            theme.bodyElem.classList.add('theme-dark');
        } 


        // il faut regarder si dans le localstorage y'a un theme et si oui l'activer 
        // changeColorTheme(theme-du-local-storage)
        const colorThemeFromStorage = storage.getFromLocalStorage('ColorTheme');
        if (colorThemeFromStorage) { 
            theme.changeColorThem(colorThemeFromStorage);
        }

    },

}
// export default theme;




 
