const errorMessages = {
    
    /**
    * la méthode addErrorMessage créé un message et l'ajoute dans le bloc aside
    * @param {string} messageToDisplay : le message qui sera placé dans le textContent du p
    * @param {Node} parentElement : le node dans lequel est ajouté le p
    */

    addErrorMessages: function (messageToDisplay, parentElement) {
      console.log('on ajoute un message');
      // creer un p 
      const newParagraph = document.createElement('p');
      // avec une classe message 
      newParagraph.classList.add('message');
      // et un textContent
      newParagraph.textContent = messageToDisplay;
      // l'ajouter dans le DOM dans le aside ou dans le card
      parentElement.prepend(newParagraph);
    },
  
    /**
   * la méthode qui supprime les messages du bloc donné en paramètre
   * @param {Node} elementWhereToRemoveErrors : l'element dans lequel on va supprimer les erreurs
   */
    removeErrorMessages: function (elementWhereToRemoveErrors) {
      console.log('on supprime les messages');
      // recuperer dans le bloc les elements ayant la classe message
      const allMessageElements = elementWhereToRemoveErrors.querySelectorAll('.message');
      // pour chaque element du tableau : le supprimer du DOM
      for (const messageElem of allMessageElements) {
        // remove permet de supprimer un element du DOM
        messageElem.remove();
      }
    },
  }

  export default errorMessages;