<template>
  <div class="home flex flex-column full-width">
    <header class="">
      <top-nav :isWhite="false" :lang="$route.params.lang || defaultLang"></top-nav>
       <!-- <action-nav></action-nav> -->
      <hero-unit :lang="$route.params.lang || defaultLang"></hero-unit>
    </header>
    <section class="">
      <problem-description :lang="$route.params.lang || defaultLang"></problem-description>
      <articles-list :lang="$route.params.lang || defaultLang"></articles-list>
    </section>
  </div>
</template>

<script>
import HeroUnit from '@/components/HeroUnit'
import TopNav from '@/components/TopNav'
import ActionNav from '@/components/ActionNav'
import ProblemDescription from '@/components/ProblemDescription'
import ArticlesList from '@/components/ArticlesList'
// import MediaPublications from '@/components/MediaPublications'
// import SocialFeeds from '@/components/SocialFeeds'

export default {
  name: 'home',

  components: {
    'hero-unit': HeroUnit,
    'top-nav': TopNav,
    'action-nav': ActionNav,
    'problem-description': ProblemDescription,
    'articles-list': ArticlesList
    // 'media-publications': MediaPublications,
    // 'social-feeds': SocialFeeds
  },

  data () {
    return {
      defaultLang: 'ru',
      acceptableLangs: ['en', 'be', 'ru']
    }
  },

  created: function () {
    // define the browser's default language which matches accepted languages
    if (!this.$route.params.lang) {
      let userLangs = window.navigator.languages
      for (let i = 0; i < userLangs.length; i++) {
        let lang = userLangs[i].split('-')[0]
        if (this.acceptableLangs.indexOf(lang) > -1) {
          this.defaultLang = lang
          break
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
