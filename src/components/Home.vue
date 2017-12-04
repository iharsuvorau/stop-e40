<template>
  <div class="full-width">
    <header>
      <top-nav :hasLogo="true" :isWhite="false" :lang="$route.params.lang || defaultLang"></top-nav>
      <hero-unit :lang="$route.params.lang || defaultLang"></hero-unit>
    </header>
    <section class="mb4">
      <problem-description :lang="$route.params.lang || defaultLang"></problem-description>
      <articles-list :lang="$route.params.lang || defaultLang"></articles-list>
      <film-bar :lang="$route.params.lang || defaultLang"></film-bar>
      <time-line :lang="$route.params.lang || defaultLang"></time-line>
    </section>
    <footer-bar :lang="$route.params.lang || defaultLang"></footer-bar>
  </div>
</template>

<script>
import HeroUnit from '@/components/HeroUnit'
import ProblemDescription from '@/components/ProblemDescription'
import MediaPublications from '@/components/MediaPublications'
import Timeline from '@/components/Timeline'
import SocialFeeds from '@/components/SocialFeeds'
import Film from '@/components/Film'

export default {
  name: 'home',

  components: {
    'hero-unit': HeroUnit,
    'problem-description': ProblemDescription,
    'media-publications': MediaPublications,
    'time-line': Timeline,
    'social-feeds': SocialFeeds,
    'film-bar': Film
  },

  data () {
    return {
      defaultLang: 'ru'
    }
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'footer')
      }
    }
  },

  head: {
    title: function () {
      return {
        inner: this.defaultPageTitle[this.defineDefaultLang()],
        separator: ' ',
        complement: ' '
      }
    },
    meta: function () {
      return [
        {name: 'og:title', content: this.defaultPageTitle[this.$route.params.lang]},
        {name: 'og:type', content: 'website'},
        {name: 'og:image', content: window.location.host + '/static/covers/public_opinion-3@2x.jpg'},
        {name: 'og:url', content: window.location}
      ]
    }
  },

  created: function () {
    this.defaultLang = this.defineDefaultLang(this.$route.params.lang)
    // document.title = this.defaultTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
