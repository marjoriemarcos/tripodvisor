
const theme = {
    init: function () {

    // on récupère le bouton du dark thème
    theme.btnDark = document.querySelector('#theme-switch');
    theme.btnDark.addEventListener('click', theme.handleClick);

    // on récupère le bouton du rouge thème

    theme.btnRed = document.querySelector('#theme-red');
    theme.btnRed.addEventListener('click', theme.handleClickColor);


    // on récupère le bouton du vert thème

    theme.btnGreen = document.querySelector('#theme-green');
    theme.btnGreen.addEventListener('click', theme.handleClickColor);


    // on récupère le bouton du bleu thème

    theme.btnBlue = document.querySelector('#theme-blue');
    theme.btnBlue.addEventListener('click', theme.handleClickColor);
    
    },

    // function qui permet de changer de thème
    handleClick: function () {
        console.log('on a cliqué !!!');
        const bodyElem = document.body;
        bodyElem.classList.toggle('theme-dark');

    },

    handleClickColor: function(event) {  
        const eventTarget = event.target.id;
        // on récupère tout les bnt
        const btnElemAll = document.querySelectorAll('.btn');
        if(eventTarget === 'theme-red') {
            for (btn of btnElemAll) {
                btn.id = "theme-red";
            }
        }
        if(eventTarget === 'theme-blue') {
            for (btn of btnElemAll) {
                btn.id = "theme-blue";
            }
        }
        if(eventTarget === 'theme-green') {
            for (btn of btnElemAll) {
                btn.id = "theme-green";
            }
        }
    },

}

document.addEventListener('DOMContentLoaded', theme.init )




 
