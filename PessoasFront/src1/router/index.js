import Vue from 'vue'
import Router from 'vue-router'
import PessoasManager from '@/components/PessoasManager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pessoas',
      name: 'PessoasManager',
      component: PessoasManager
    }
  ]
})
