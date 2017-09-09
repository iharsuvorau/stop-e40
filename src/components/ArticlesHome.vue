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

  computed: {
  },

  created () {
  }
}
</script>

<style lang="scss" scoped>

</style>
