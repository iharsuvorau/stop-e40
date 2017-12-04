<template>
  <div class="full-width">
    <top-nav :isWhite="false" :hasLogo="true" :lang="$route.params.lang"></top-nav>
    <main class="flex flex-column">
      <articles-list :lang="$route.params.lang" :standalone="true"></articles-list>
    </main>
    <footer-bar :lang="$route.params.lang"></footer-bar>
  </div>
</template>

<script>
import ArticlesList from '@/components/ArticlesList'

export default {
  components: {
    'articles-list': ArticlesList
  },

  data () {
    return {
      titles: {
        ru: 'Интервью экспертов и другие материалы',
        en: 'Expert interviews and other materials'
      }
    }
  },

  head: {
    title: function () {
      return {
        inner: this.titles[this.$route.params.lang],
        separator: '/',
        complement: this.defaultPageTitle[this.$route.params.lang]
      }
    },
    meta: function () {
      return [
        {name: 'og:title', content: this.titles[this.$route.params.lang]},
        {name: 'og:type', content: 'website'},
        {name: 'og:image', content: window.location.host + '/static/covers/public_opinion-3@2x.jpg'},
        {name: 'og:url', content: window.location}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
