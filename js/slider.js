const slider = {
    // numéro de l'image actuelement affcihée
    currentImage: 0,
  
    // tableau avec toutes les images : les elements node du DOM
    // au debut le tableau est vide mais après la creation des images il contient nos 3 images
    imagesNodeArray: [],
  
    /**
     * function init qui créé les images et pose les écouteurs d'evenements
     */
    init: function () {
      // creation des images et ajout des images dans le tableau imagesNodeArray
      slider.createImages();
  
      // après la création de simages, elles ont été normalement toutes pushée dan sle tableau
      console.log(slider.imagesNodeArray); // nos images sont dans le tableau
  
      // recuperer les boutons precedent et suivant
      const sliderButtons = document.querySelectorAll('.slider__btn');
      const nextButton = sliderButtons[1];
      const previousButton = sliderButtons[0];
  
      // placer des ecouteur de click sur les boutons
      previousButton.addEventListener('click', slider.handlePrevClick);
      nextButton.addEventListener('click', slider.handleNextClick);
    },
  
    /**
     * function handlePrevClick executé au click sur le bouton précedent
     */
    handlePrevClick: function() {
      console.log('on a cliqué sur le bouton precedent');
  
      let nextIndexToDisplay;
      // si c'est la premiere image
      if (slider.currentImage === 0) {
        // on va à la derniere du tableau : celle qui est à l'index lenght (3) -1 -> l'index 2
        nextIndexToDisplay = slider.imagesNodeArray.length - 1;
      }
      else {
        // sinon on passe à la precedente en supprimant 1
        nextIndexToDisplay = slider.currentImage - 1;
      }
  
      slider.goToSlide(nextIndexToDisplay);
    },
  
    /**
     * function handleNextClick executé au click sur le bouton next
     */
    handleNextClick: function() {
      console.log('on a cliqué sur le bouton suivant');
  
      // ajouter la classe slider__img--current à l'image suivante (currentImage + 1)
      // attention si l'image courrante c'est la dernière on peut pas ajouter 1
      // si l'image courante c'est la 2 on peut pas faire +1 : soit on fait rien, soit on revient à l'image 0
      let nextIndexToDisplay;
  
      // si c'est la derniere image c'est à dire l'index 2 (3 - 1)
      if (slider.currentImage === slider.imagesNodeArray.length - 1) {
        // on revient au debut
        nextIndexToDisplay = 0;
      }
      else {
        // sinon on passe à la suivante en ajoutant 1
        nextIndexToDisplay = slider.currentImage + 1;
      }
      
      // afficher l'image nextIndexToDisplay
      slider.goToSlide(nextIndexToDisplay);
    },
  
    /**
     * function goToSlide
     * cache l'image courrante et affiche celle dont l'index est passé en paramètre
     * @param {number} indexOfImageToDisplay : index de l'image sur laquelle mettre la classe slider__img--current
     */
    goToSlide: function (indexOfImageToDisplay) {
      // supprimer la classe slider__img--current de l'image actuelement affichée
      // 1/ soit on va la chercher dans le DOM
      // 2/ soit on va la chercher dans un tableau dans notre module où on a stocké toutes les images dans une propriété imagesNodeArray : c'est celle qui se trouve à l'index currentImage
      const imgCurrentlyDisplayed = slider.imagesNodeArray[slider.currentImage];
      imgCurrentlyDisplayed.classList.remove('slider__img--current');
  
      // afficher l'image dont l'index est pasé en param
      slider.imagesNodeArray[indexOfImageToDisplay].classList.add('slider__img--current');
  
      // mettre à jour l'image courrante pour les prochains clics: 
      slider.currentImage = indexOfImageToDisplay;
    },
  
    /**
     * function createImages
     * créé toutes les images du slider 
     */
    createImages: function () {
      // recuperer le parent qui va contenir les images : <section class="slider">
      const parentElem = document.querySelector('.slider');
    
      // la liste de nos images
      const sliderImages = [
        {
          src: 'ocean.jpg',
          alt: 'Partir à la mer'
        },
        {
          src: 'ski.jpg',
          alt: 'Parir à la neige'
        },
        {
          src: 'city.jpg',
          alt: 'Partir à la ville'
        }
      ];
    
      // on boucle su le tableau et pour chaque ligne on ajoute une img
      for (let imageArray of sliderImages) {
        // creer un node de type img avec la fonction document.createElement
        const imgElem = document.createElement('img');
    
        // lui ajouter la source : la ligne src du sous tableau
        imgElem.src = './img/' + imageArray.src;
    
        // lui ajouter la classe slider__img
        imgElem.classList.add('slider__img');
    
        // lui ajouter la propriété alt : la ligne alt du sous tableau
        imgElem.alt = imageArray.alt;
  
        // a chaque nouvelle image créé on l'ajoute dans le tableau
        slider.imagesNodeArray.push(imgElem);
    
        // ajouter l'image dans le parent avec la fonction appendChild
        parentElem.appendChild(imgElem);
      }
    
      // recupere la premiere des images et lui ajouter la classe slider__img--current pour qu'elle s'affiche
      const firstImgElem = document.querySelector('.slider__img');
      firstImgElem.classList.add('slider__img--current');
    }
  }
  
  document.addEventListener('DOMContentLoaded', slider.init);