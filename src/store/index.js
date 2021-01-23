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
            ],
          },
          {
            TitleSpec: 'Звезда смерти',
            idProduct: 4,
            lowImg: require('@/assets/img/gardenSphere/4/1.jpg'),
            img: [require('@/assets/img/gardenSphere/4/1.jpg'),
              require('@/assets/img/gardenSphere/4/2.jpg'),
              require('@/assets/img/gardenSphere/4/3.jpg'),
              require('@/assets/img/gardenSphere/4/4.jpg'),
            ],
            descriptions: [
              { description: 'Диаметр очага 1000 мм.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Общая высота 1100 мм.' },
            ],
          },
          {
            TitleSpec: 'Охотник',
            idProduct: 5,
            lowImg: require('@/assets/img/gardenSphere/5/1.jpg'),
            img: [require('@/assets/img/gardenSphere/5/1.jpg'),
              require('@/assets/img/gardenSphere/5/2.jpg'),
            ],
            descriptions: [
              { description: 'Диаметр очага 900 мм.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Общая высота 1000 мм.' },
            ],
          },
          {
            TitleSpec: 'Влюбленные',
            idProduct: 6,
            lowImg: require('@/assets/img/gardenSphere/6/1.jpg'),
            img: [require('@/assets/img/gardenSphere/6/1.jpg'),
            ],
            descriptions: [
              { description: 'Диаметр очага 900 мм.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Общая высота 1000 мм.' },
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
            TitleSpec: 'Волки',
            idProduct: 1,
            lowImg: require('@/assets/img/barbecues/1/1.jpg'),
            img: [require('@/assets/img/barbecues/1/1.jpg'),
            ],
            descriptions: [
              { description: 'Высота мангала: 70 см.' },
              { description: 'Толщина металла составляет 3 мм.' },
              { description: 'Глубина коробки: 35 см.' },
            ],
          },
          {
            TitleSpec: 'Драконы',
            idProduct: 2,
            lowImg: require('@/assets/img/barbecues/2/1.jpg'),
            img: [require('@/assets/img/barbecues/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Высота мангала: 60 см.' },
              { description: 'Толщина металла составляет 3 мм.' },
              { description: 'Глубина коробки: 25 см.' },
            ],
          },
          {
            TitleSpec: 'Воздушные войска',
            idProduct: 3,
            lowImg: require('@/assets/img/barbecues/3/1.jpg'),
            img: [require('@/assets/img/barbecues/3/1.jpg'),
            ],
            descriptions: [
              { description: 'Высота мангала: 70 см.' },
              { description: 'Толщина металла составляет 3 мм.' },
              { description: 'Глубина коробки: 35 см.' },
            ],
          },
          {
            TitleSpec: 'Оленья поляна',
            idProduct: 4,
            lowImg: require('@/assets/img/barbecues/4/1.jpg'),
            img: [require('@/assets/img/barbecues/4/1.jpg'),
            ],
            descriptions: [
              { description: 'Высота мангала: 90 см.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Глубина коробки: 60 см.' },
            ],
          },
          {
            TitleSpec: 'World of Tanks',
            idProduct: 5,
            lowImg: require('@/assets/img/barbecues/5/1.jpg'),
            img: [require('@/assets/img/barbecues/5/1.jpg'),
            ],
            descriptions: [
              { description: 'Высота мангала: 60 см.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Глубина коробки: 35 см.' },
            ],
          },
          {
            TitleSpec: 'Восход',
            idProduct: 6,
            lowImg: require('@/assets/img/barbecues/6/1.jpg'),
            img: [require('@/assets/img/barbecues/6/1.jpg'),
            ],
            descriptions: [
              { description: 'Высота мангала: 80 см.' },
              { description: 'Толщина металла составляет 4 мм.' },
              { description: 'Глубина коробки: 70 см.' },
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
            TitleSpec: 'Чеширский кот',
            idProduct: 1,
            lowImg: require('@/assets/img/windowsGrill/1/1.jpg'),
            img: [require('@/assets/img/windowsGrill/1/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
            ],
          },
          {
            TitleSpec: 'Фигурная',
            idProduct: 2,
            lowImg: require('@/assets/img/windowsGrill/2/1.jpg'),
            img: [require('@/assets/img/windowsGrill/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
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
            TitleSpec: 'Лошади',
            idProduct: 1,
            lowImg: require('@/assets/img/railing/1/1.jpg'),
            img: [require('@/assets/img/railing/1/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
            ],
          },
          {
            TitleSpec: 'Цветы',
            idProduct: 2,
            lowImg: require('@/assets/img/railing/2/1.jpg'),
            img: [require('@/assets/img/railing/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
            ],
          },
          {
            TitleSpec: 'Модернизм',
            idProduct: 3,
            lowImg: require('@/assets/img/railing/3/1.jpg'),
            img: [require('@/assets/img/railing/3/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Завитушки',
            idProduct: 4,
            lowImg: require('@/assets/img/railing/4/1.jpg'),
            img: [require('@/assets/img/railing/4/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
            ],
          },
          {
            TitleSpec: 'Лес',
            idProduct: 5,
            lowImg: require('@/assets/img/railing/5/1.jpg'),
            img: [require('@/assets/img/railing/5/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
            ],
          },
          {
            TitleSpec: 'Аист в камышах',
            idProduct: 6,
            lowImg: require('@/assets/img/railing/6/1.jpg'),
            img: [require('@/assets/img/railing/6/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 4 мм.' },
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
            TitleSpec: 'Волчье дерево',
            idProduct: 1,
            lowImg: require('@/assets/img/mainGates/1/1.jpg'),
            img: [require('@/assets/img/mainGates/1/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Хижина в горах',
            idProduct: 2,
            lowImg: require('@/assets/img/mainGates/2/1.jpg'),
            img: [require('@/assets/img/mainGates/2/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Кленовые листья',
            idProduct: 3,
            lowImg: require('@/assets/img/mainGates/3/1.jpg'),
            img: [require('@/assets/img/mainGates/3/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Танцующие феи',
            idProduct: 4,
            lowImg: require('@/assets/img/mainGates/4/1.png'),
            img: [require('@/assets/img/mainGates/4/1.png'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Рыцари и дракон',
            idProduct: 5,
            lowImg: require('@/assets/img/mainGates/5/1.jpg'),
            img: [require('@/assets/img/mainGates/5/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Медведи',
            idProduct: 6,
            lowImg: require('@/assets/img/mainGates/6/1.jpg'),
            img: [require('@/assets/img/mainGates/6/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
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
            TitleSpec: 'Калибри',
            idProduct: 1,
            lowImg: require('@/assets/img/entranceGates/1/1.webp'),
            img: [require('@/assets/img/entranceGates/1/1.webp'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Танцующие феи',
            idProduct: 2,
            lowImg: require('@/assets/img/entranceGates/2/1.png'),
            img: [require('@/assets/img/entranceGates/2/1.png'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
            ],
          },
          {
            TitleSpec: 'Листопад',
            idProduct: 3,
            lowImg: require('@/assets/img/entranceGates/3/1.jpg'),
            img: [require('@/assets/img/entranceGates/3/1.jpg'),
            ],
            descriptions: [
              { description: 'Возможен любой размер' },
              { description: 'Толщина металла составляет 5 мм.' },
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
