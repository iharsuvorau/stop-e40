import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home
      }
    },
    {
      path: '/articles',
      name: 'Articles',
      components: {
        default: Articles
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
