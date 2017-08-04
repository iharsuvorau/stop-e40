<template>
  <section class="flex flex-wrap">
    <div id="descr-image-wrapper" class="descr-image-wrapper lg-col-6 md-col-12 sm-col-12 xs-col-12 image2"></div>
    <div class="descr-block lg-col-6 md-col-12 sm-col-12 xs-col-12 flex flex-column justify-between">
      <article class="pt3 pl3 pr3" v-for="tab in content.tabs" :key="tab.id" v-if="tab.show">
        <h1 class="h2 m0"><a href="" v-html="tab.title"></a></h1>
        <p v-for="p in tab.paragraphs" :key="p.id">{{ p.text }}</p>
      </article>
      <nav class="flex bold px3 pb2">
        <a v-for="t in content.tabs" :key="t.id" @click="showTab($event, t.id, content.tabs)" :class="t.className" :href="'#' + t.name">&mdash;</a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created () {
    this.content = this.loadContent(this.lang, 'problem-description')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'problem-description')
      }
    }
  },

  data () {
    return {
      content: {}
    }
  },

  methods: {
    showTab: (e, id, tabs) => {
      e.preventDefault()

      let imageClass = ''

      for (let t of tabs) {
        if (t.id === id) {
          t.show = true
          t.className = 'active'
          imageClass = t.imageClass
        } else {
          t.show = false
          t.className = ''
        }
      }

      document.getElementById('descr-image-wrapper').className = 'descr-image-wrapper lg-col-6 md-col-12 sm-col-12 xs-col-12  ' + imageClass
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

nav a {
  color: black;
  font-size: 1.5em;
  font-weight: 900;

  &:hover, &:focus, &.active {
    color: white;
  }
}

h1 a {
  color: black;

  &:hover, &:focus {
    color: $blue;
  }
}

section {
  // height: 380px;
  overflow-y: hidden;
}

.descr-image-wrapper {
  transition: all 0.5s ease-out;
  background: $light-grey;
  background-size: cover;
  background-position-y: 50%;
  height: 380px;
}

.descr-block {
  background: $yellow;
  overflow-y: scroll;
  height: 380px;
  @media (max-device-width: 1025px) {
    height: auto;
    min-height: 380px;
  }
}

.image0 {
  background-image: url('../assets/images/pripyat-opt.jpg');
}
.image1 {
  background-image: url('../assets/images/pripyat-1-opt.jpg');
}
.image2 {
  background-image: url('../assets/images/pripyat-2-opt.jpg');
}
</style>
