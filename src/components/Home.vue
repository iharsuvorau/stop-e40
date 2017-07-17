<template>
  <div class="home flex flex-column">
    <header class="hero-image">
      <top-nav></top-nav>
      <!-- <action-nav></action-nav> -->
      <hero-unit></hero-unit>
    </header>
    <section class="bg-graphics">
      <problem-description></problem-description>
      <articles-list></articles-list>
      <media-publications></media-publications>
      <social-feeds></social-feeds>
    </section>
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

.bg-graphics {
  background-image:
    url('../assets/images/bg-graphics-2.png'),
    linear-gradient(to bottom, #706B67, #9D9B9B);
  background-repeat: no-repeat;
  background-position-y: 55%;
  background-size: contain;
}

.bg-photo-1 {
  background-image: url('../assets/images/pripyat-0.jpg');
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-size: cover;
  height: 20em;
}

</style>
