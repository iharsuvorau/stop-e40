import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Article from '@/components/Article'
import NotFound from '@/components/NotFound'

require('smoothscroll-polyfill').polyfill()

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
      path: '/articles/:slug',
      name: 'Article',
      components: {
        default: Article
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
