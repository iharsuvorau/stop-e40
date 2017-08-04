<template>
  <nav class="px3 py2 bold shadow-bottom" :class="{white: isWhite}">
    <div class="flex flex-wrap justify-between">
      <ul class="list-reset m0 sm-hide xs-hide">
        <li class="h3 inline-block mr3" v-if="hasLogo"><a href="/" class="font-ferry black">#STOP_E40</a></li>
        <li class="inline-block mr3" v-for="item in content.main" :key="item.id"><a href="#">{{ item.title }}</a></li>
      </ul>
      <span class="lg-hide md-hide"><a href="#" @click="showSideNav($event)">Меню</a></span>

      <ul class="list-reset m0">
        <li class="inline-block" v-for="item in content.langs" :key="item.id">
          <router-link class="mr3" v-show="lang !== item.path" :to="{name: 'HomeLang', params: {lang: item.path}}">{{ item.title }}</router-link>
        </li>
      </ul>

      <section id="sidenav" class="flex flex-column justify-between" v-if="sideNavVisible" @click="stopPropagation($event)">
        <ul class="list-reset m0 p3">
          <li class="mb2" v-for="item in content.items" :key="item.id"><a href="#">{{ item.title }}</a></li>
        </ul>
        <h1 class="font-ferry m0 px3 py3 h2 blue">#stop_e40</h1>
      </section>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isWhite', 'hasLogo', 'lang'],

  created () {
    this.content = this.loadContent(this.lang, 'top-nav')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'top-nav')
      }
    }
  },

  data () {
    return {
      sideNavVisible: false,
      content: {menu: [], langs: []}
    }
  },

  methods: {
    showSideNav (event) {
      event.stopPropagation()

      this.sideNavVisible = true

      document.getElementsByTagName('body')[0].addEventListener('click', () => {
        this.sideNavVisible = false
      })
    },

    stopPropagation (event) {
      event.stopPropagation()
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

</style>
