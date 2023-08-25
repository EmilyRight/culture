import $ from 'jquery';
import { WOW } from './vendor/wow.min';
import detectDevice from './components/detectDevice';
import Swiper from './vendor/swiper.min';
import { closeModal, openModal } from './components/modal';
import {
  fieldListener, validateFields, keyField, prepField,
} from './components/inputs';
import generateId from './components/utils';
import GTMEvents from './components/gtmEvents';
import regionsData from './regionsData';
import View from './museums/View';

const GTM = new GTMEvents();
const view = new View();
window.jQuery = window.$ = $;
/// /////// DocReady //////////
window.addEventListener('load', () => {
  detectDevice(); // videoTeaser();
  new WOW().init();
  faqOpener();
  GTM.addEventListeners();
  goNextSection();
  showRegion();
  createSlider();

  handleRegionModal();
  chooseRegion();

  scrollTeaser(document.querySelector('.teaser-next'));
});

function goNextSection() {
  const goNextBtns = document.querySelectorAll('.js-go-next');
  const sectionsList = document.querySelectorAll('section');

  goNextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const btnParentNode = btn.closest('section');
      let sectionToScrollTo;
      sectionsList.forEach((el, index) => {
        if (el === btnParentNode) {
          sectionToScrollTo = sectionsList[index + 1];
          scrollToElement(sectionToScrollTo);
        }
      });
    });
  });
}

function scrollToElement(el) {
  const offs = 0;
  const y = el.getBoundingClientRect().top + window.scrollY + offs;
  window.scrollTo({ top: y, behavior: 'smooth' }); // element.scrollIntoView();
}

// scroll to next if URL contains #about

function scrollTeaser(el) {
  if (window.location.hash === '#about') {
    scrollToElement(el);
  }
}

function setActive(arr) {
  const activeClassName = 'active';
  arr.forEach((el) => {
    const itemText = el.childNodes[3]; // хардкод текстового дочернего узла
    if (el.classList.contains(activeClassName)) {
      itemText.style.transition = 'none';
      el.classList.remove(activeClassName);
    }
  });
}
function faqOpener() {
  const itemsList = document.querySelectorAll('.faq__item');
  const activeClassName = 'active';
  itemsList.forEach((item) => {
    item.addEventListener('click', () => {
      const itemText = item.childNodes[3]; // хардкод текстового дочернего узла
      if (item.classList.contains(activeClassName)) {
        itemText.style.transition = 'none';
        item.classList.remove(activeClassName);
      } else {
        setActive(itemsList);
        itemText.style.transition = '0.2s ease-in-out';
        item.classList.add(activeClassName);
      }
    });
  });
}

function showRegion() {
  const id = localStorage.getItem('siteId') || 'siteMSK';
  console.log(id);
  const regionName = regionsData.find(({ siteId }) => siteId === id)?.name;
  const regionSpan = document.querySelectorAll('.js-regionFullName');
  regionSpan.forEach((it) => {
    it.innerHTML = `${regionName}`;
  });
  localStorage.setItem('siteId', id);
}

function setRegion(cityCode) {
  localStorage.setItem('siteId', cityCode);
}

function chooseRegion() {
  const regionsList = document.querySelectorAll('.js-set-city');
  regionsList.forEach((region) => {
    region.addEventListener('click', () => {
      const cityCode = region.getAttribute('data-area');
      setRegion(cityCode);
      showRegion();
      closeModal('#region-modal-box');
      createSlider();
    });
  });
}

function handleRegionModal() {
  const chooseRegionButton = document.querySelectorAll('.js-show-region-modal');
  const regionsList = document.querySelectorAll('.js-set-city');

  chooseRegionButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('hey');
      openModal('#region-modal-box');
    });
  });

  regionsList.forEach((region) => {
    region.addEventListener('click', () => {
      closeModal('#region-modal-box');
    });
  });
}

function createSlider() {
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
