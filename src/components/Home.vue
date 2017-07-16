<template>
  <div class="home flex flex-column">
    <div class="hero-image">
      <top-nav></top-nav>
      <!-- <action-nav></action-nav> -->
      <hero-unit></hero-unit>
    </div>
    <problem-description></problem-description>
    <articles-list></articles-list>
    <media-publications></media-publications>
    <social-feeds></social-feeds>
  </div>
</template>

<script>
import HeroUnit from '@/components/HeroUnit'
import TopNav from '@/components/TopNav'
import ActionNav from '@/components/ActionNav'
import ProblemDescription from '@/components/ProblemDescription'
import ArticlesList from '@/components/ArticlesList'
import MediaPublications from '@/components/MediaPublications'
import SocialFeeds from '@/components/SocialFeeds'

export default {
  name: 'home',

  components: {
    'hero-unit': HeroUnit,
    'top-nav': TopNav,
    'action-nav': ActionNav,
    'problem-description': ProblemDescription,
    'articles-list': ArticlesList,
    'media-publications': MediaPublications,
    'social-feeds': SocialFeeds
  },

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-image {
  background-image: url('../assets/images/pripyat-2.jpg');
  background-size: cover;
  background-position-y: 60%;
}
</style>
