import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProduct: {
      gardenSphere:
        {
          name: 'gardenSphere',
          idProduct: 1,
          info: [
            {
              TitleSpec: 'Сфера с кошаком',
              img: [require('@/assets/img/testing.webp'),
                require('@/assets/img/imgTest2.webp'),
                require('@/assets/img/imgTest3.webp'),
              ],
              descriptions: [
                { description: 'Бла бла бла, только лучшее, бла бла бла' },
                { description: 'Толщина металла 4мм, огнеупорная краска и т.д.' },
                { description: 'ещё одно описание' },
              ],
            },
            {
              TitleSpec: 'Сфера с елкой и ещё чем-то',
              img: [require('@/assets/img/imgTest4.webp'),
                require('@/assets/img/imgTest5.webp'),
              ],
              descriptions: [
                { description: 'Первое описание второго товара' },
                { description: 'Второе описание второго товара' },
              ],
            },
            {
              TitleSpec: 'Третья сфера',
              img: [require('@/assets/img/imgTest4.webp'),
              ],
              descriptions: [
                { description: 'Первое описание третьего товара' },
                { description: 'Второе описание третьего товара' },
              ],
            },
          ],
        },
      barbecues:
        {
          name: 'barbecues',
          idProduct: 1,
          info: [
            {
              TitleSpec: 'Мангал со скелетами',
              img: [require('@/assets/img/TestBarb1.webp'),
                require('@/assets/img/TestBarb2.jpg'),
                require('@/assets/img/TestBarb3.jpg'),
              ],
              descriptions: [
                { description: 'Чего-нибудь написано' },
                { description: 'Красивый, дорогущий и бла бла бла' },
                { description: 'Описание №3' },
                { description: 'Описание №4' },
                { description: 'Описание №5, не много ли описаний???' },
              ],
            },
            {
              TitleSpec: 'Мангал в форме большегруза',
              img: [require('@/assets/img/testBarb4.jpeg'),
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
  },
  mutations: {
    nextProduct(state, category) {
      state.allProduct[category].idProduct += 1;
    },
    previousProduct(state, category) {
      state.allProduct[category].idProduct -= 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
