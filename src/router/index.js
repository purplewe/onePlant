import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Profile from '@/pages/profile/profile'
import PottedPlant from '@/pages/pottedPlant/pottedPlant'
import ShowItem from '@/pages/showItems/showItems'
import Info from '@/pages/profile/children/info'
import EditeInfo from '@/pages/profile/children/children/editeInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainHome',
      component: Home,
      children:
        [{
          path: 'profile',
          name: 'profile',
          component: Profile,
          // children: [{
          //   path: 'info',
          //   name: 'info',
          //   component: Info
          // }]
        },
        {
          path: 'pottedPlant',
          name: 'pottedPlant',
          component: PottedPlant
        },
        {
          path: 'showItem',
          name: 'showItem',
          component: ShowItem
        }]
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      children:[{
        path: 'editeInfo',
        name: 'editeInfo',
        component: EditeInfo
      }]
    }
  ]
})
