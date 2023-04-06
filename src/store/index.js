import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navFullscreen: false,
    navItems: [
      {
        navName: 'Каталог',
        navPath: '#'
      },
      {
        navName: 'Доставка',
        navPath: '#'
      },
      {
        navName: 'Оплата',
        navPath: '#'
      },
      {
        navName: 'Контакты',
        navPath: '#'
      },
      {
        navName: 'О компании',
        navPath: '#'
      }
    ],
    paintings: [],
    filteredPaintings: [],
    modalVisibility: false,
    modal: {}
  },
  mutations: {
    SET_PAINTINGS(state, data) {
      const nameProp = data.fileData;
      let keys = Object.keys(localStorage).filter((item) => item === nameProp);

      if (keys.length > 0) {
        state[nameProp] = JSON.parse(localStorage.getItem(`${nameProp}`));
      } else {
        state[nameProp] = data.response.map(item => {
          item.imgSrc = require(`../assets/img/${item.imgSrc}`);
          item.images = item.images.map(elem => elem = require(`../assets/img/${elem}`));
          return item;
        });
      }
    },
    TOGGLE_MENU(state) {
      state.navFullscreen = !state.navFullscreen;
    },
    SEARCH_PAINTINGS(state, value) {
      state.filteredPaintings = state.paintings.filter(item => item.imgName.toLowerCase().includes(value.toLowerCase()));
    },
    ADD_TO_CART(state, pictureId) {
      state.paintings = state.paintings.map(item => {
        if (item.id === pictureId) item.inCart = !item.inCart;
        return item;
      });
      
      localStorage.setItem("paintings",JSON.stringify(state.paintings));
    },
    OPEN_MODAL(state, pictureId) {
      state.paintings.forEach(item => item.id === pictureId ? state.modal = item : '');
      state.modalVisibility = true;
    },
    CLOSE_MODAL(state) {
      state.modalVisibility = false;
    },
  },
  actions: {
    fetchPaintings({commit}, fileData) {
      const response = require(`../assets/data/${fileData}.json`);
      commit('SET_PAINTINGS', {response, fileData});
      commit('SEARCH_PAINTINGS', '');
    }
  }
})
