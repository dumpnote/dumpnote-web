import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storeModAuth = {
  state: {
    avatar: 'https://gravatar.com/avatar/e8191adeac90ddd3971f0bb7ee5a3fe2',
  },
  getters: {
    authed: () => false,
  },
};

const store = new Vuex.Store({
  modules: {
    auth: storeModAuth,
  },
});

export default store;
