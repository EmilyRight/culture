/* eslint-disable import/no-cycle */
// import sliderView from '../main';
import View from '../museums/View';
import Swiper from '../vendor/swiper.min';

function createSlider() {
  const slider = document.querySelector('.swiper-container');
  const sliderView = new View();
  console.log(sliderView);
  slider.innerHTML = sliderView.render();
  handleSlider();
}

function handleSlider() {
  const swiper = new Swiper('.swiper-container', {
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: false,
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
    },
  });
  console.log(swiper);
  return swiper;
}

export default createSlider;
