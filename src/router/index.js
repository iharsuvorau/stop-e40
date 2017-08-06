import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import NotFound from '@/components/NotFound'

require('smoothscroll-polyfill').polyfill()

Vue.use(Router)

// global data and methods
Vue.mixin({
  data () {
    return {
      acceptableLangs: ['en', 'be', 'ru']
    }
  },

  methods: {
    loadContent (lang, basename) {
      // loads UI content of the component depending on the provided language
      let content
      if (lang === 'en') {
        content = require('../assets/content/' + basename + '.en.json')
      } else if (lang === 'ru') {
        content = require('../assets/content/' + basename + '.ru.json')
      }
      return content
    },

    defineDefaultLang (paramLang) {
      // define the browser's default language which matches accepted languages
      if (!paramLang) {
        let userLangs = window.navigator.languages
        for (let i = 0; i < userLangs.length; i++) {
          let lang = userLangs[i].split('-')[0]
          if (this.acceptableLangs.indexOf(lang) > -1) {
            return lang
          }
        }
      }
      return 'ru'
    }
  }
})

const router = new Router({
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
      path: '/:lang/articles/:slug',
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

// hooks before navigation
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

export default router
