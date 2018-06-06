import App from '../App'

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Profile from '@/pages/profile/profile'
import PottedPlant from '@/pages/pottedPlant/pottedPlant'
import ShowItems from '@/pages/showItems/showItems'
import ItemPage from '@/pages/showItems/children/itemPage'
import Info from '@/pages/profile/children/info'
import EditeInfo from '@/pages/profile/children/children/editeInfo'
import EditeHistory from '@/pages/showItems/children/children/editeHistory'
import Edite from '@/pages/showItems/children/children/edite'
import Login from '@/pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [
      {
        path: '',
        name: 'MainHome',
        component: Home,
        children:
          [{
            path: 'profile',
            name: 'profile',
            component: Profile,
            children: [{
              path: 'info',
              name: 'info',
              component: Info
            }]
          },
          {
            path: 'pottedPlant',
            name: 'pottedPlant',
            component: PottedPlant
          },
          {
            path: 'showItems',
            name: 'showItems',
            component: ShowItems
          }]
      },
      {
        path: '/editeInfo',
        name: 'editeInfo',
        component: EditeInfo
      },
      {
        path: '/itemPage',
        name: 'itemPage',
        component: ItemPage
      },
      {
        path: '/editeHistory',
        name: 'editeHistory',
        component: EditeHistory
      },
      {
        path: '/edite',
        name: 'edite',
        component: Edite
      },
      {
        path: '/login/',
        name: 'login',
        component: Login,
      }
    ]
  }]
})
