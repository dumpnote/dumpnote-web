import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
