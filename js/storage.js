const storage = {
   /**
   * fonction qui sauvegarde au localStorage
   * @param {any} name : nom de l'élément à sauvegarder
   * @param {any} value : valeur de l'élément à sauvegarder
   */

    saveToLocalStorage: function (name, value) {
        const valueJSON = JSON.stringify(value);
        localStorage.setItem(name, valueJSON);
    },


   /**
   * fonction qui prend les données du localStorage
   * @param {any} name : nom de l'élément à prendre
   */

    saveFromLocalStorage: function (name) {
        const dataFromLocalStorange = localStorage.getItem(name);
        const dataFromLocalStorangeJSON = JSON.parse(dataFromLocalStorange);
        return dataFromLocalStorangeJSON;
    },
}

export default storage;