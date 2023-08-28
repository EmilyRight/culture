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
    let src = require('../../img/icons/location.svg');
    if (src.endsWith('/')) {
      src = src.slice(0, -1);
    }
    const slider = document.querySelector('.swiper-wrapper');
    const sliderView = new View();
    slider.innerHTML = sliderView.render();
    console.log(src);
    return html`
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
            <img alt="" src=${src}/>
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
   `;
  }
}

export default View;
