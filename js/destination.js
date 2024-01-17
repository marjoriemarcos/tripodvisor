// "Module" des actions possibles sur les Card destination

const destinations = {

    // une méthode qui pose des ecouteurs de click sur les boutons coeur des cartes
    init: function () {
  
      // recuperer tous les bouton btn__like dans un tableau
      const allBtnLike = document.querySelectorAll('.btn__like')
  
      // pour chaque bouton : ajouter un click listener
      for (let btnLike of allBtnLike) {
        btnLike.addEventListener('click', destinations.handleLikeClick);
      }
    },
  
    handleLikeClick: function (event) {
        // dans le handler de click : afficher un message d'erreur
        console.log('coeur cliqué');
        console.log(event);

        // on supprime les éventuels messages du div qui contient toutes les cards
        errorMessages.removeErrorMessage(document.querySelector('.cards'));

        // comment savoir sur quel coeur (de quelle destination) on a cliqué
        const clickedHeart = event.currentTarget;
        console.log(clickedHeart);

        // on a le coeur on veut recuperer parmis ses parents la card
        // on a la fonction closest qui permet comme querySelector de trouver 
        // un element à partir d'un selecteur CSS mais en cherchant non as dans les enfants mais dans les parents
        const correspondingCard = clickedHeart.closest('.card');
        console.log('correspondingCard', correspondingCard);
        errorMessages.addErrorMessage('Vous n\' etes pas encore inscrit', correspondingCard)

    },
  }; // fin destination
  
  // au chargement de la page HTML : executer l'init du module destinations
  document.addEventListener('DOMContentLoaded', destinations.init);