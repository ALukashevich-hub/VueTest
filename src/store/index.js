import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    'garden-sphere':
      {
        name: 'Уличные очаги',
        idCategory: 1,
        info: [
          {
            TitleSpec: 'Путешествие в рождество',
            idProduct: 1,
            lowImg: require('@/assets/img/gardenSphere/1/2.webp'),
            img: [require('@/assets/img/gardenSphere/1/1.webp'),
              require('@/assets/img/gardenSphere/1/2.webp'),
              require('@/assets/img/gardenSphere/1/3.webp'),
            ],
            descriptions: [
              { description: 'Диаметр очага 850 мм.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Общая высота 1000 мм.' },
              { description: 'Цена 800 бел. руб.' },
            ],
          },
          {
            TitleSpec: 'Ежик в тумане',
            idProduct: 2,
            lowImg: require('@/assets/img/gardenSphere/2/1.webp'),
            img: [require('@/assets/img/gardenSphere/2/1.webp'),
            ],
            descriptions: [
              { description: 'Диаметр очага 700 мм.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Общая высота 800 мм.' },
              { description: 'Цена 800 бел. руб.' },
            ],
          },
          {
            TitleSpec: 'Карнавал',
            idProduct: 3,
            lowImg: require('@/assets/img/gardenSphere/3/1.webp'),
            img: [require('@/assets/img/gardenSphere/3/1.webp'),
            ],
            descriptions: [
              { description: 'Диаметр очага 900 мм.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Общая высота 1100 мм.' },
              { description: 'Цена 900 бел. руб.' },
            ],
          },
        ],
      },
    barbecues:
      {
        name: 'Мангалы',
        idCategory: 2,
        info: [
          {
            TitleSpec: 'Мангал 1',
            idProduct: 1,
            lowImg: require('@/assets/img/barbecues/1/1.jpg'),
            img: [require('@/assets/img/barbecues/1/1.jpg'),
              require('@/assets/img/barbecues/1/2.jpg'),
              require('@/assets/img/barbecues/1/3.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'Мангал 2',
            idProduct: 2,
            lowImg: require('@/assets/img/barbecues/2/1.jpg'),
            img: [require('@/assets/img/barbecues/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'Мангал 3',
            idProduct: 3,
            lowImg: require('@/assets/img/barbecues/3/1.jpg'),
            img: [require('@/assets/img/barbecues/3/1.jpg'),
              require('@/assets/img/barbecues/3/2.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
        ],
      },
    'windows-grill':
      {
        name: 'Решетки',
        idCategory: 3,
        info: [
          {
            TitleSpec: 'Решетка на окно 1',
            idProduct: 1,
            lowImg: require('@/assets/img/windowsGrill/1/1.jpg'),
            img: [require('@/assets/img/windowsGrill/1/1.jpg'),
              require('@/assets/img/windowsGrill/1/2.png'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'Решетка на окно 2',
            idProduct: 2,
            lowImg: require('@/assets/img/windowsGrill/2/1.jpg'),
            img: [require('@/assets/img/windowsGrill/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
        ],
      },
    railing:
      {
        name: 'Перила',
        idCategory: 4,
        info: [
          {
            TitleSpec: 'перила 1',
            idProduct: 1,
            lowImg: require('@/assets/img/railing/1/1.jpg'),
            img: [require('@/assets/img/railing/1/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'перила 2',
            idProduct: 2,
            lowImg: require('@/assets/img/railing/2/1.jpg'),
            img: [require('@/assets/img/railing/2/1.jpg'),
              require('@/assets/img/railing/2/2.jpg'),
              require('@/assets/img/railing/2/3.png'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'перила 3',
            idProduct: 3,
            lowImg: require('@/assets/img/railing/3/1.jpg'),
            img: [require('@/assets/img/railing/3/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'перила 4',
            idProduct: 4,
            lowImg: require('@/assets/img/railing/4/1.jpg'),
            img: [require('@/assets/img/railing/4/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'перила 5',
            idProduct: 5,
            lowImg: require('@/assets/img/railing/5/1.jpg'),
            img: [require('@/assets/img/railing/5/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
        ],
      },
    'main-gates':
      {
        name: 'Ворота',
        idCategory: 5,
        info: [
          {
            TitleSpec: 'Главные ворота 1',
            idProduct: 1,
            lowImg: require('@/assets/img/mainGates/1/1.jpg'),
            img: [require('@/assets/img/mainGates/1/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'Главные ворота 2',
            idProduct: 2,
            lowImg: require('@/assets/img/mainGates/2/1.jpg'),
            img: [require('@/assets/img/mainGates/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'Главные ворота 3',
            idProduct: 3,
            lowImg: require('@/assets/img/mainGates/3/1.jpg'),
            img: [require('@/assets/img/mainGates/3/1.jpg'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'Главные ворота 4',
            idProduct: 4,
            lowImg: require('@/assets/img/mainGates/4/1.png'),
            img: [require('@/assets/img/mainGates/4/1.png'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
        ],
      },
    'entrance-gates':
      {
        name: 'Калитки',
        idCategory: 6,
        info: [
          {
            TitleSpec: 'калитка 1',
            idProduct: 1,
            lowImg: require('@/assets/img/entranceGates/1/1.webp'),
            img: [require('@/assets/img/entranceGates/1/1.webp'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
          {
            TitleSpec: 'калитка 2',
            idProduct: 2,
            lowImg: require('@/assets/img/entranceGates/2/1.png'),
            img: [require('@/assets/img/entranceGates/2/1.png'),
              require('@/assets/img/entranceGates/2/2.png'),
            ],
            descriptions: [
              { description: 'Описание №1' },
              { description: 'Описание №2' },
              { description: 'Описание №3' },
            ],
          },
        ],
      },
  },
  mutations: {
    // nextProduct(state, category) {
    //   state[category].idProduct += 1;
    // },
    // previousProduct(state, category) {
    //   state[category].idProduct -= 1;
    // },
  },
  actions: {
  },
  modules: {
  },
});
