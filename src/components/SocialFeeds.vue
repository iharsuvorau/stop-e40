<template>
  <section class="px3 mt4">
    <h1 class="m0 center" v-html="content.title"></h1>
    <div class="flex mt3 flex-wrap">
      <div class="col-4">
        <a class="twitter-timeline" data-dnt="true" href="https://twitter.com/hashtag/stop_e40" data-widget-id="899317276876394496">#stop_e40 Tweets</a>
      </div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created: function () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'social-feeds')
    this.twitterInit()
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'social-feeds')
        this.twitterInit()
      }
    }
  },

  data () {
    return {
      content: {}
    }
  },

  methods: {
    twitterInit () {
      !(function (d, s, id) {
        var js
        var fjs = d.getElementsByTagName(s)[0]
        var p = /^http:/.test(d.location) ? 'http' : 'https'
        if (!d.getElementById(id)) {
          js = d.createElement(s)
          js.id = id
          js.src = p + '://platform.twitter.com/widgets.js'
          fjs.parentNode.insertBefore(js, fjs)
        }
      }(document, 'script', 'twitter-wjs'))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
