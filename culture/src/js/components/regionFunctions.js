/* eslint-disable no-param-reassign */
import citiesData from '../constants/citiesData';
import { closeModal, openModal } from './modal';
import { createSlider, destroySlider } from './sliderFunctions';

function showRegion() {
  const id = localStorage.getItem('siteId') || 'siteMSK';
  const regionName = citiesData.find(({ siteId }) => siteId === id)?.name;
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
      destroySlider();
      createSlider();
    });
  });
}

function handleRegionModal() {
  const chooseRegionButton = document.querySelectorAll('.js-show-region-modal');
  const regionsList = document.querySelectorAll('.js-set-city');

  chooseRegionButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal('#region-modal-box');
    });
  });

  regionsList.forEach((region) => {
    region.addEventListener('click', () => {
      closeModal('#region-modal-box');
    });
  });
}

export { showRegion, handleRegionModal, chooseRegion };
