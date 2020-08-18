import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/main.scss'
import '@/assets/scss/image.scss'
import '@/assets/scss/login.scss'
import '@/assets/scss/footer.scss'
import '@/assets/scss/admin-player.scss'
import '@/assets/scss/contact.scss'
import '@/assets/scss/team.scss'
import '@/assets/scss/player.scss'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
