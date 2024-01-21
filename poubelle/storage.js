const storage = {
    /**
     * 
     * Stringify puis sauvegarde une donnée le localStorage
     * @param {string} name : le nom de l'item du localStorage
     * @param {any} dataToSave : les données à sauvegarder
     */

    saveToLocalStorage: function (name, dataToSave) {
        const dataToSaveEnString = JSON.stringify(dataToSave);
        localStorage.setItem(name, dataToSaveEnString);

    },

    /**
     * 
     * recupère la data et la parse avant de la renvoyer
     * @param {string} name : le nom de l'item du localStorage
     * @return {any} data récupèrée et parsée
     */

    getFromLocalStorage: function (name) {
        const dataFromLocalStorage = localStorage.getItem(name);
        const data = JSON.parse(dataFromLocalStorage);
        return data;
    }

}

export default storage;