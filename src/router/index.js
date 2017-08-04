import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Article from '@/components/Article'
import NotFound from '@/components/NotFound'

require('smoothscroll-polyfill').polyfill()

Vue.use(Router)

Vue.mixin({
  methods: {
    loadContent (lang, basename) {
      let content
      if (lang === 'en') {
        content = require('../assets/content/' + basename + '.en.json')
      } else if (lang === 'ru') {
        content = require('../assets/content/' + basename + '.ru.json')
      }
      return content
    }
  }
})

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
      path: '/:lang',
      name: 'HomeLang',
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
