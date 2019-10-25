import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueIconFont from 'vue-icon-font';
// iconfont.js
import '@/assets/iconfont.js'

// import Vant from 'vant'

Vue.config.productionTip = false;
Vue.use(VueIconFont)
// Vue.use(Vant)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
