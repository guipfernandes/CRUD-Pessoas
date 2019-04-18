// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.component('Home', require('./components/Home.vue').default)
Vue.component('PessoasManager', require('./components/PessoasManager.vue').default)
Vue.component('NavBar', require('./components/NavBar.vue').default)
Vue.component('AdicionarPessoa', require('./components/AdicionarPessoa.vue').default)

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
