import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import ArticlesHome from '@/components/ArticlesHome'
import Page from '@/components/Page'
import NotFound from '@/components/NotFound'
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'
import HeroUnit from '@/components/HeroUnit'
import ActionNav from '@/components/ActionNav'
import ArticlesList from '@/components/ArticlesList'

require('smoothscroll-polyfill').polyfill()

Vue.use(Router)

Vue.component('top-nav', TopNav)
Vue.component('footer-bar', Footer)
Vue.component('hero-unit', HeroUnit)
Vue.component('action-nav', ActionNav)
Vue.component('articles-list', ArticlesList)

// global data and methods
Vue.mixin({
  data () {
    return {
      acceptableLangs: ['en', 'be', 'ru'],
      defaultTitle: 'Общественная кампания против восстановления водного пути Е40'
    }
  },

  methods: {
    requireAll (requireContext) {
      // ref: https://webpack.github.io/docs/context.html#context-module-api
      return requireContext.keys().map(requireContext)
    },

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
      // TODO: while there are no translations launch without EN version
      // if (!paramLang) {
      //   let userLangs = window.navigator.languages
      //   for (let i = 0; i < userLangs.length; i++) {
      //     let lang = userLangs[i].split('-')[0]
      //     if (this.acceptableLangs.indexOf(lang) > -1) {
      //       return lang
      //     }
      //   }
      // }
      return 'ru'
    },

    compareById (a, b) {
      // compares arrays of objects by the ID attribute
      if (a.id < b.id) {
        return -1
      }
      if (a.id > b.id) {
        return 1
      }
      return 0
    }
  }
})

const router = new Router({
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
      path: '/:lang/articles',
      name: 'ArticlesHome',
      component: ArticlesHome
    },
    {
      path: '/:lang/articles/:slug',
      name: 'Article',
      components: {
        default: Article
      }
    },
    {
      path: '/:lang/pages/:slug',
      name: 'Page',
      components: {
        default: Page
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
