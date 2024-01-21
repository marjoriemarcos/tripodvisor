import storage from "./storage.js";

const slider = {

  currentImage: 0,
  imageNodeArray: [],

  init: function () {

    slider.createImg();

    const btnSliderImg = document.querySelectorAll('.slider__btn');
    const btnSliderImgRight = btnSliderImg[1];
    const btnSliderImgLeft = btnSliderImg[0];
    btnSliderImgRight.addEventListener('click', slider.handleBtnSliderImgRight);
    btnSliderImgLeft.addEventListener('click', slider.handleBtnSliderImgLeft);

    const index = storage.saveFromLocalStorage('currentImage');
    if (index) {
      slider.goToSlide(index);
    } else {
      slider.goToSlide(0);
    }

  },

  handleBtnSliderImgRight: function() {
    console.log('on a cliqué à droite')
    let nextImageToDisplay;
    const lastImagesIndex = slider.imageNodeArray.length - 1;
    if (lastImagesIndex === slider.currentImage) {
      nextImageToDisplay = 0;
    } else {
      nextImageToDisplay = slider.currentImage + 1;
    }
    slider.goToSlide(nextImageToDisplay);

  },
  handleBtnSliderImgLeft: function() {
    console.log('on a cliqué à gauche');
    let nextImageToDisplay;
    if (slider.currentImage === 0 ){
      nextImageToDisplay = slider.imageNodeArray.length - 1;
    } else {
      nextImageToDisplay = slider.currentImage - 1;
    }
    slider.goToSlide(nextImageToDisplay);

  },

  goToSlide: function (indexToDisplay) {
    const imgCurrentDisplayed = slider.imageNodeArray[slider.currentImage];
    imgCurrentDisplayed.classList.remove('slider__img--current');
    slider.imageNodeArray[indexToDisplay].classList.add(('slider__img--current'));
    slider.currentImage = indexToDisplay;
    storage.saveToLocalStorage('currentImage', indexToDisplay);

  },

  createImg: function () {
    const parentElemImg = document.querySelector('.slider');

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

    for (let imageArray of sliderImages) {
      const imgElem = document.createElement('img');
      imgElem.classList.add('slider__img');
      imgElem.alt = imageArray.alt;
      imgElem.src = `./img/${imageArray.src}`;
      parentElemImg.appendChild(imgElem);
      slider.imageNodeArray.push(imgElem);
    }

  },
  
}



export default slider;