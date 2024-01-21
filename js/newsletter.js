import errorMessages from "./errorMessages.js";
const newsletter = {
    init: function () {
    // on recupere les elements et on les enregistre non pas dans des 
    // variables libre mais en propriété de notre module newsletter
    newsletter.link = document.querySelectorAll('.menu__item')[1];
    newsletter.aside = document.querySelector('.newsletter');
    newsletter.btnclose = document.querySelector('.newsletter__close');
    newsletter.form = document.querySelector('.newsletter form');

    // on met un écouteur sur le me form le link et le btnclose
    newsletter.form.addEventListener('submit', newsletter.handleSubmit);
    newsletter.link.addEventListener('click', newsletter.handleClickMenuItem)
    newsletter.btnclose.addEventListener('click', newsletter.handleClickCloseBtn); 

    },

    // la fonction handler du form
    handleSubmit: function (event) {
      // on supprimer les messages d'erreur
      errorMessages.removeErrorMessage(newsletter.aside);
      // on réupère la valeur de l'input du form
      const emailInput = document.querySelector('.newsletter__field');
      const emailValue = emailInput.value;
      console.log(emailValue);

      // Les adresses mail interdites dans un tableau
      const forbiddenDomains = [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
      ];

      // on fait un boucle for pour savoir si l'input envoyé correspond au tableau des adresses interdites

      for (const domain of forbiddenDomains) {
              //valeur de l'input === tab de Domain
          if (emailValue.includes(domain)) {
            console.log('domain interdit trouvé', domain); 
            const messageToDisplay = "Les adresses jetables ne sont pas admises"
            //Function qui est dans ErrorMessage.js
            errorMessages.addErrorMessage(messageToDisplay, newsletter.aside);
            event.preventDefault();
          }
      }
    },

    handleClickMenuItem: function (event) {
      event.preventDefault();
      // on met un toggle au link newsletter pour afficher et supprimer la class 'newsletter--on'
      newsletter.aside.classList.toggle('newsletter--on');
    },

    handleClickCloseBtn: function (event) {
      // on supprimer la class 'newsletter--on' en cliquant sur le bouton
      newsletter.aside.classList.remove('newsletter--on');
    },
}

// le module n'est pas chargé dans le HTML dans app.js n'a pas avccès au code
// on va l'export pour que apps puisse l'importer
// on utilise rles mot "export default" pour export notre fichier

export default newsletter;

  
  






