<template>
  <section class="hero-unit p3 py4 flex flex-wrap justify-center">
    <div class="center flex flex-column justify-between">
      <!-- <h1 class="m0 mb4 col-12 font-ferry">{{ content.title }}</h1> -->
      <p class="tagline h1 m0" v-html="content.tagline"></p>
    </div>

    <!-- <action-nav :isWhite="false" class="lg-col-3 md-col-3 col-12 py2"></action-nav> -->
  </section>
</template>

<script>
import ActionNav from '@/components/ActionNav'

export default {
  props: ['lang'],

  created () {
    this.content = this.loadContent(this.lang, 'hero-unit')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'hero-unit')
      }
    }
  },

  data () {
    return {
      content: {title: '', tagline: ''}
    }
  },

  methods: {
  },

  components: {
    'action-nav': ActionNav
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

h1 {
  font-size: 3.25rem;
  line-height: 1.05;

  @media (max-width: 600px) {
    font-size: 2.75em;
  }
}

.tagline {
  font-family: 'Agipo';
  padding: 0 4rem 2rem 4rem;

  font-size: 2.7em;
  @media (max-width: 600px) {
    padding: 0 0 2rem 0;
    font-size: 2em;
  }

  @media (max-width: 400px) {
    font-size: 1.75em;
  }
}
</style>
