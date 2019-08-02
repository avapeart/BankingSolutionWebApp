import Vue from 'vue';
import App from '@/views/app/app.vue';
import router from '@/configs/router';
import store from '@/store';
import '@/configs/register-service-worker';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
