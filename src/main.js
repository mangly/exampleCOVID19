import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueVectorMap from 'vuevectormap'
import 'vuevectormap/src/scss/VueVectorMap.scss'

Vue.config.productionTip = false

require('jsvectormap/dist/maps/world')
Vue.use(VueVectorMap, { map: "world", backgroundColor: "#FFF" });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
