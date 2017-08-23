<template>
  <div class="full-width">
    <header class="">
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
import TopNav from '@/components/TopNav'
import ProblemDescription from '@/components/ProblemDescription'
import ArticlesList from '@/components/ArticlesList'
import MediaPublications from '@/components/MediaPublications'
import Timeline from '@/components/Timeline'
import Footer from '@/components/Footer'
import SocialFeeds from '@/components/SocialFeeds'
import Film from '@/components/Film'

export default {
  name: 'home',

  components: {
    'hero-unit': HeroUnit,
    'top-nav': TopNav,
    'problem-description': ProblemDescription,
    'articles-list': ArticlesList,
    'media-publications': MediaPublications,
    'time-line': Timeline,
    'footer-bar': Footer,
    'social-feeds': SocialFeeds,
    'film-bar': Film
  },

  data () {
    return {
      defaultLang: 'ru'
    }
  },

  created: function () {
    this.defaultLang = this.defineDefaultLang(this.$route.params.lang)
    document.title = this.defaultTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
