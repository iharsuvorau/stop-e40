<template>
  <footer class="p3">
    <nav class="flex flex-wrap dark-grey justify-between">
      <ul class="m0 list-reset">
        <li class="inline-block mr3">&copy;&nbsp;2017&mdash;{{ year }} <a href="http://bahna.land" title="Сделано в Багне">Bahna</a>+<a href="http://www.ptushki.org/" title="Сделано в АПБ">АПБ</a></li>
        <li class="inline-block mr2" v-for="(item, index) in content.main" :key="index">
          <a :href="item.link" v-html="item.text"></a>
        </li>
      </ul>
      <ul class="m0 list-reset">
        <li class="inline-block mr2" v-for="(item, index) in content.social" :key="index">
          <a :href="item.link" v-html="item.text"></a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  props: ['lang'],

  created: function () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'footer')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'footer')
      }
    }
  },

  data () {
    return {
      content: {}
    }
  },

  computed: {
    year: function () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/colors";

a {
  color: $dark-grey;

  &:hover, &:focus {
    color: black;
  }
}
</style>
