import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import agentBoard from '@/components/routes/agentBoard'
import mainboard from '@/components/routes/mainBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/agentBoard',
      component: agentBoard
    },
    {
      path: '/mainboard',
      component: mainBoard
    }
  ]
})
