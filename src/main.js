import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/rest.scss'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
