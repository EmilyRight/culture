const cardsData = [
  {
    cityId: 'siteMSK',
    title: 'Царь-макет',
    description: 'Самый большой в Москве интерактивный макет России.',
    adress: 'https://yandex.ru/maps/-/CDQjIW0B',
  },

  {
    cityId: 'siteMSK',
    title: 'Музей Lego Megabricks',
    description: 'Экспонаты, созданные из популярного конструктора Lego.',
    adress: 'https://yandex.ru/maps/-/CDQjI8JK',
  },

  {
    cityId: 'siteMSK',
    title: 'Музей русского импрессионизма',
    description: 'Картины выдающихся российских художников.',
    adress: 'https://yandex.ru/maps/-/CDQjI8P~',
  },

  {
    cityId: 'siteMSK',
    title: 'Музей Музыки',
    description: 'Одна из старейших музыкальных коллекций мира.',
    adress: 'https://yandex.ru/maps/-/CDQjIHiN',
  },

  {
    cityId: 'siteMSK',
    title: 'Пушкинский музей',
    description: 'Экспонаты постоянной экспозиции Главного здания.',
    adress: 'https://yandex.ru/maps/-/CXXKrmB',
  },

  // spb

  {
    cityId: 'siteSPB',
    title: 'Музей Эрарта',
    description: 'Живопись, графика, скульптура и другие виды современного искусства.',
    adress: 'https://yandex.ru/maps/-/CDQjIGo2',
  },
  {
    cityId: 'siteSPB',
    title: 'Музей Фаберже',
    description: 'Шедевры ювелирного искусства Карла Фаберже — и не только.',
    adress: 'https://yandex.ru/maps/-/CDQjIOOT',
  },
  {
    cityId: 'siteSPB',
    title: 'Гранд Макет Россия',
    description: 'Самый большой макет России в мире — площадью 800 кв. м.',
    adress: 'https://yandex.ru/maps/-/CDQjISzH',
  },

  // NN6
  {
    cityId: 'siteNNOV',
    title: 'НГХМ. Искусство ХХ века',
    description: 'Произведения современного искусства.',
    adress: 'https://yandex.ru/maps/-/CDQjMAoB',
  },

  {
    cityId: 'siteNNOV',
    title: 'НГХМ. Русское искусство',
    description: 'Произведения разных периодов развития национальной культуры.',
    adress: 'https://yandex.ru/maps/-/CDQjMIOd',
  },

  {
    cityId: 'siteNNOV',
    title: 'Музей «Домик Каширина»',
    description: 'Место, связанное с детскими годами великого писателя.',
    adress: 'https://yandex.ru/maps/-/CDQjMQ60',
  },

  {
    cityId: 'siteNNOV',
    title: 'Музей-квартира А.М.Горького',
    description: 'Уникальная экспозиция из 1500 подлинных экспонатов.',
    adress: 'https://yandex.ru/maps/-/CDQjMYLp',
  },

  // Казань

  {
    cityId: 'siteKAZAN',
    title: 'Музей изобразительных искусств РТ',
    description: 'Центр художественной жизни Казани.',
    adress: 'https://yandex.ru/maps/-/CDQjMJ6B',
  },

  {
    cityId: 'siteKAZAN',
    title: 'Центр «Эрмитаж-Казань»',
    description: 'Первое представительство Государственного Эрмитажа в России.',
    adress: 'https://yandex.ru/maps/-/CDQjMNMD',
  },

  {
    cityId: 'siteKAZAN',
    title: 'Национальный музей РТ',
    description: 'Главное музейное хранилище республики.',
    adress: 'https://yandex.ru/maps/-/CDQjMRKv',
  },

  {
    cityId: 'siteKAZAN',
    title: 'Музей естественной истории Татарстана',
    description: 'Коллекции из разных областей геологических знаний.',
    adress: 'https://yandex.ru/maps/-/CDQjM62U',
  },

  {
    cityId: 'siteKAZAN',
    title: 'Центр Artplay Media',
    description: 'Увлекательные выставки в интерактивном формате.',
    adress: 'https://yandex.ru/maps/-/CDQjMG~n',
  },

  // Екатеринбург
  {
    cityId: 'siteEKT',
    title: 'Культурно-просветительский центр «Эрмитаж-Урал»',
    description: 'Западноевропейское искусство, искусство фарфора и другие экспозиции.',
    adress: 'https://yandex.ru/maps/-/CDQjMOYQ',
  },

  {
    cityId: 'siteEKT',
    title: 'Музей истории Екатеринбурга',
    description: 'От завода — к городу: все о Екатеринбурге, его жителях и быте.',
    adress: 'https://yandex.ru/maps/-/CDQjMO9M',
  },

  {
    cityId: 'siteEKT',
    title: 'Музей В. Высоцкого',
    description: 'Восстановленный гостиничный номер с личными вещами артиста.',
    adress: 'https://yandex.ru/maps/-/CDQjM8Oz',
  },

  // КРАСНОЯРСК

  {
    cityId: 'siteKRASNOYARSK',
    title: '«Ньютон Парк»',
    description: 'Интерактивный музей науки для всей семьи.',
    adress: 'https://yandex.ru/maps/-/CDQjMDLu',
  },

  {
    cityId: 'siteKRASNOYARSK',
    title: 'Музейный центр «Площадь Мира»',
    description: 'Крупнейшая в Сибири выставочная площадка современного искусства.',
    adress: 'https://yandex.ru/maps/-/CDQjMH8K',
  },

  // Тула

  {
    cityId: 'siteTULA',
    title: 'Кластер «Октава»',
    description: 'Выставочное и креативное пространство с лекциями, мастер-классами, музыкальными и другими мероприятиями.',
    adress: 'https://yandex.ru/maps/-/CDQjMLZO',
  },

];

export default cardsData;
