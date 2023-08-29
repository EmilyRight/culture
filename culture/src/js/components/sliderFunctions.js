/* eslint-disable import/no-cycle */
// import sliderView from '../main';
import View from '../museums/View';
import Swiper from '../vendor/swiper.min';

const options = {

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: {
    invert: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  breakpoints: {
    768: {
      spaceBetween: 16,
    },
  },
};
let swiper;

function createSlider() {
  const slider = document.querySelector('.swiper-wrapper');
  const sliderView = new View();
  slider.innerHTML = sliderView.render();
  swiper = new Swiper('.swiper-container', options);
  swiper.init();
  hideNavButtons(sliderView);
}

/**
 * @param {View} view
 */

function hideNavButtons(view) {
  const sliderElementsNumber = view.getDataArrayLength();
  const navButtons = document.querySelectorAll('.swiper-button');
  navButtons.forEach((btn) => {
    if (sliderElementsNumber < 4) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'flex';
    }
  });
}

function destroySlider() {
  swiper.destroy();
}

export { createSlider, destroySlider };
