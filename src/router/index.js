import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/index/login')), 'login');
const layout = r => require.ensure([], () => r(require('@/page/index/layout')), 'layout');
const home = r => require.ensure([], () => r(require('@/page/index/home')), 'home');

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/layout',
      component: layout,
      name: '',
      children: [
         {
          path: '',
          component: home,
          meta: [],
        } 
      ]
    }
  ],
  
})
