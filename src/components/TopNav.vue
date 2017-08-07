<template>
  <nav class="px3 py2 bold shadow-bottom" :class="{white: isWhite}">
    <div class="flex flex-wrap justify-between">
      <ul class="list-reset m0 sm-hide xs-hide">
        <li class="h3 inline-block mr3" v-if="hasLogo"><a :href="'/' + lang" class="font-ferry black">#STOP_E40</a></li>
        <!-- <li class="inline-block mr3" v-for="(item, index) in content.main" :key="index">
          <a :href="'/#/' + item.slug" @click="smoothScroll($event, item.slug)">{{ item.title }}</a>
        </li> -->
        <li class="inline-block mr3" v-for="item in pages" :key="item.id">
          <router-link :to="{name: 'Page', params: {lang: lang, slug: item.slug}}">{{ item.title }}</router-link>
        </li>
        <li class="inline-block"><a id="movieRef" href="" title="Stop E40" @click="showMovie($event)"></a></li>
      </ul>
      <span class="lg-hide md-hide"><a href="#" @click="showSideNav($event)">Меню</a></span>

      <ul class="list-reset m0">
        <li class="inline-block" v-for="(item, index) in content.langs" :key="index">
          <router-link class="mr3" v-show="lang !== item.slug" :to="{path: getCurrentPathWithLang(item.slug)}">{{ item.title }}</router-link>
        </li>
      </ul>

      <section id="sidenav" class="flex flex-column justify-between" v-if="sideNavVisible" @click="stopPropagation($event)">
        <ul class="list-reset m0 p3">
          <li class="mb1" v-for="(item, index) in content.main" :key="index">
            <router-link :to="{path: item.slug}">{{ item.title }}</router-link>
          </li>
          <li class="mb1" v-for="item in pages" :key="item.id">
            <router-link :to="{name: 'Page', params: {lang: lang, slug: item.slug}}">{{ item.title }}</router-link>
          </li>
          <li class="mb1"><a id="movieRefSideMenu" href="" title="Stop E40" @click="showMovie($event)"></a></li>
        </ul>
        <h1 class="font-ferry m0 px3 py3 h2 blue">#stop_e40</h1>
      </section>

      <div id="movie-modal" class="p4" v-if="movieVisible">
        <div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/75KGIq7SToU?rel=0?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
      </div>
    </div>
  </nav>
</template>

<script>
var movieIcon = require('../assets/images/movie.svg')

export default {
  props: ['isWhite', 'hasLogo', 'lang'],

  created () {
    this.lang = this.lang || this.$route.params.lang || this.defineDefaultLang()
    this.content = this.loadContent(this.lang, 'top-nav')
    this.pages = this.getPages(this.lang).sort(this.compareById)
  },

  mounted () {
    let img1 = document.createElement('img')
    img1.src = movieIcon
    img1.style = 'width: 30px; position: relative; top: 15px; margin-top: -20px'
    let movieRef = document.getElementById('movieRef')
    movieRef.appendChild(img1)
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.lang = this.lang || this.$route.params.lang || this.defineDefaultLang()
        this.content = this.loadContent(this.lang, 'top-nav')
        this.pages = this.getPages(this.lang).sort(this.compareById)
      }
    }
  },

  data () {
    return {
      sideNavVisible: false,
      movieVisible: false,
      content: {},
      pages: []
    }
  },

  methods: {
    getPages (lang) {
      if (lang === 'ru') {
        // requireAll is a global helper method
        return this.requireAll(require.context('../assets/content/pages/ru/', false, /\.json$/))
      } else if (lang === 'en') {
        return this.requireAll(require.context('../assets/content/pages/en/', false, /\.json$/))
      }
    },

    showSideNav (event) {
      event.stopPropagation()

      this.sideNavVisible = true

      document.getElementsByTagName('body')[0].addEventListener('click', () => {
        this.sideNavVisible = false
      })
    },

    showMovie (event) {
      event.stopPropagation()
      event.preventDefault()

      this.movieVisible = true

      document.getElementsByTagName('body')[0].addEventListener('click', () => {
        this.movieVisible = false
      })
    },

    stopPropagation (event) {
      event.stopPropagation()
    },

    getCurrentPathWithLang (lang) {
      let parts = window.location.pathname.split('/')
      parts[1] = lang
      return parts.join('/')
    },

    smoothScroll: function (event, sid) {
      event.preventDefault()
      let ref = document.getElementById(sid)
      ref.scrollIntoView({behavior: 'smooth'})
      window.location.hash = sid
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

nav {
  z-index: 999;
}

.shadow-bottom {
  box-shadow: 0 2px 4px $shadow-color;
}

a {
  color: rgba(130, 147, 153, 1);

  &:hover, &:focus, &.router-link-active {
    color: black;
  }
}

#sidenav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  background: white;
  box-shadow: 2px 0 4px $shadow-color;
}

#movie-modal {
  position: fixed;
  top: 10%;
  left: 15%;
  width: 70%;
  background: white;
  box-shadow: 0 2px 40px $shadow-dark-color;
  border-radius: 15px;
}
</style>
