import { html } from './SafeHtml';
import cardsData from './constants';

class View {
  constructor() {
    this.dataArray = [];
  }

  defineRegion() {
    const id = localStorage.getItem('siteId') || 'siteMSK';
    return id;
  }

  filterDataArray() {
    const region = this.defineRegion();
    this.dataArray = cardsData.filter((it) => it.cityId === region);
  }

  render() {
    this.filterDataArray();
    console.log(this.dataArray);
    const src = require('../../img/icons/location.svg');
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
        class="slide__btn btn btn-primary"
        data-event="conv_offer${index + 1}"
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
    </div>`)}
   `;
  }
}

export default View;
