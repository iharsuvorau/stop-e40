<template>
  <section class="px3 py4">
    <h1 class="center m0 mb3" v-html="content.title"></h1>
    <div class="flex flex-wrap justify-center" v-if="content.description">
      <p class="col-7" v-html="content.description"></p>
    </div>
    <div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://www.youtube.com/embed/75KGIq7SToU?rel=0?ecver=2" width="640" height="360" frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe></div>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created: function () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'film')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'film')
      }
    }
  },

  data () {
    return {
      content: {}
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  @media (max-width: 800px) {
    width: 90%;
  }
}
</style>
