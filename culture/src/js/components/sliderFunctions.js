import Swiper from '../vendor/swiper.min';

function createSlider(view) {
  const slider = document.querySelector('.swiper-wrapper');
  slider.innerHTML = view.render();
  handleSlider();
}

function handleSlider() {
  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 'auto',
    spaceBetween: 25,
    loop: false,
    breakpoints: {
      768: {
        spaceBetween: 16,
      },
    },
  });
  return swiper;
}

export default createSlider;
