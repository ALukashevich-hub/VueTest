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
              TitleSpec: 'gardenSphere1',
              img: [require('@/assets/1558886217_nedovolnoe-kote-s-sigaretoy-art2.jpg'),
                require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
                require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
              ],
              descriptions: [
                { description: 'Description1-1-1' },
                { description: 'Description1-1-2' },
                { description: 'Description1-1-3' },
              ],
            },
            {
              TitleSpec: 'gardenSphere2',
              img: [require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
                require('@/assets/1558886217_nedovolnoe-kote-s-sigaretoy-art2.jpg'),
                require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
              ],
              descriptions: [
                { description: 'Description1-2-1' },
                { description: 'Description1-2-2' },
                { description: 'Description1-2-3' },
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
              TitleSpec: 'barbecues1',
              img: [require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
                require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
                require('@/assets/1558886217_nedovolnoe-kote-s-sigaretoy-art2.jpg'),
              ],
              descriptions: [
                { description: 'Description2-1-1' },
                { description: 'Description2-1-2' },
                { description: 'Description2-1-3' },
              ],
            },
            {
              TitleSpec: 'barbecues2',
              img: [require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
                require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
                require('@/assets/1557841421_krasivye-foto_xaxa-net.ru-40.jpg'),
              ],
              descriptions: [
                { description: 'Description2-2-1' },
                { description: 'Description2-2-2' },
                { description: 'Description2-2-3' },
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
