const comments = {
    init: function () {
        const allCheckboxes = document.querySelectorAll('input[name=rating]');
        for (const checkbox of allCheckboxes) {
            checkbox.addEventListener('change', comments.handleClickOnRatingCheckbox)

        }
    },

    handleClickOnRatingCheckbox: function (event) {
        // dans le handleCheck : recuperer tous les commentaires et en fonction de leur data-rating les afficher ou les cacher
        // pour cacher un commentaire on a juste à lui ajouter la classe review--hidden
        const changedCheckbox = event.target;
        // recuperer le rating de la case qu'on vient de cocher
        const ratingOfchangedCheckbox = changedCheckbox.value;

        const allCommentsToFilter = document.querySelectorAll(`article[data-rating='${ratingOfchangedCheckbox}']`);
        // recuperer l'état de la checkobx : checked ou NON checked
        const isChecked = changedCheckbox.checked;
        console.log('isChecked', isChecked);

        for (const comment of allCommentsToFilter) {
            // si la classe hiden était presente c'est que les commentaires étaient afffiché donc on inverse
            comment.classList.toggle('review--hidden');
          }  
      
        },

    }

    export default comments;