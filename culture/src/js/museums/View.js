/* eslint-disable global-require */
import { html } from './SafeHtml';
import cardsData from '../constants/cardsData';

class View {
  constructor() {
    this.citiesArray = Array.from(new Set(cardsData.map((it) => it.cityId)));
    this.region = this.defineRegion();
    this.dataArray = cardsData.filter((it) => it.cityId === this.region);
  }

  getDataArrayLength() {
    return this.dataArray.length;
  }

  defineRegion() {
    let id = localStorage.getItem('siteId');
    if (!id || !this.citiesArray.includes(id)) {
      id = 'siteMSK';
    }
    return id;
  }

  render() {
    return html`

      ${this.dataArray.map((it, index) => html`
      <div class="swiper-slide slide">
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
              <svg width="15px" height="15px">
                <use xlink:href="#location"></use>
              </svg>
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
      `)}
   `;
  }
}

export default View;
