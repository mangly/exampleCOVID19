import Vue from 'vue'
import App from './App.vue'
import request from "./plugins/request";
import vuetify from './plugins/vuetify';
import router from './router';
import VueVectorMap from 'vuevectormap'
import 'vuevectormap/src/scss/VueVectorMap.scss'

Vue.config.productionTip = false

require('jsvectormap/dist/maps/world')
Vue.use(VueVectorMap, { map: "world", backgroundColor: "#FFF" });
Vue.use(request);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
