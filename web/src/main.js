import Vue from 'vue'
import App from './App.vue'

import LottieVuePlayer from '@lottiefiles/vue-lottie-player';

import { BootstrapVue } from 'bootstrap-vue'
import { BFormCheckboxGroup } from 'bootstrap-vue'
import { BNavbarNav, BNavbar, BNavbarToggle, BNavbarBrand } from 'bootstrap-vue'
import { BCard } from 'bootstrap-vue'
import { BCarousel } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./scss/style.scss";

Vue.component('b-form-checkbox-group', BFormCheckboxGroup)
Vue.component('b-navbar-brand', BNavbarBrand)
Vue.component('b-navbar-toggle', BNavbarToggle)
Vue.component('b-navbar-nav', BNavbarNav)
Vue.component('b-navbar', BNavbar)
Vue.component('b-card', BCard)
Vue.component('b-carousel', BCarousel)

Vue.use(LottieVuePlayer);

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
