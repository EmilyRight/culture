/* eslint-disable global-require */
import { html } from './SafeHtml';
import cardsData from '../constants/cardsData';

class View {
  constructor() {
    this.citiesArray = Array.from(new Set(cardsData.map((it) => it.cityId)));
    this.region = this.defineRegion();
    this.dataArray = cardsData.filter((it) => it.cityId === this.region);
  }

  defineRegion() {
    let id = localStorage.getItem('siteId');
    if (!id || !this.citiesArray.includes(id)) {
      id = 'siteMSK';
    }
    return id;
  }

  render() {
    let markSrc = require('../../img/icons/location.svg');
    const btnPrevImg = require('../../img/icons/back.svg');

    if (markSrc.endsWith('/')) {
      markSrc = markSrc.slice(0, -1);
    }
    console.log(markSrc);
    return html`
    <div class="swiper-wrapper">
      ${this.dataArray.map((it, index) => html`
      <div class="swiper-slide" data-hash="slide${index}">
        <div class="slide">
          <div class="slide__text">
            <h3 class="slide__title">${it.title}</h3>
            <p class="slide__text">
            ${it.description}
            </p>
          </div>
          <div class="slide__btns">
            <a
            href="https://tele2.ru/minutes-management"
            class="slide__btn btn btn-primary js-gtm-event"
            data-event="conv_offer${index + 1}"
            target="_blank"
            >Получить билет</a
            >
            <div class="slide__map map link">
              <img alt="" src=${markSrc}/>
              <a
                class="map__link"
                data-event="address"
                href="${it.adress}"
                target="_blank"
                >Адрес музея</a
              >
            </div>
          </div>
        </div>
      </div>
      `)}
    </div>
    <div class="swiper-controls">
      <div class="swiper-button-prev">
        <img src=${btnPrevImg.endsWith('/') ? btnPrevImg.slice(0, -1) : btnPrevImg} alt="" />
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next">
        <img src=${btnPrevImg.endsWith('/') ? btnPrevImg.slice(0, -1) : btnPrevImg} alt="" />
      </div>
    </div>
   `;
  }
}

export default View;
