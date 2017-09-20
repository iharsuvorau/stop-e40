<template>
  <section id="problem-description" class="flex flex-wrap mb4">
    <div id="descr-image-wrapper" class="descr-image-wrapper lg-col-6 col-12 image0"></div>
    <div class="descr-block lg-col-6 col-12 flex flex-column justify-between">
      <article class="pt3 pl3 pr3" v-for="tab in content.tabs" :key="tab.id" v-if="tab.show">
        <h1 class="h2 m0" v-html="tab.title"></h1>
        <p v-for="p in tab.paragraphs" :key="p.id" v-html="p.text"></p>
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

  mounted () {
    this.autoSwitch()

    let section = document.getElementById('problem-description')

    section.addEventListener('mouseenter', () => {
      window.clearInterval(this.intervalID)
    })

    section.addEventListener('mouseleave', () => {
      this.autoSwitch()
    })
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
      content: {},
      autoTabID: 1,
      intervalID: undefined
    }
  },

  methods: {
    showTab: function (e, id, tabs) {
      if (e) {
        e.preventDefault()
      }

      this.autoTabID = id
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

      let imgWrapper = document.getElementById('descr-image-wrapper')
      if (imgWrapper) {
        imgWrapper.className = 'descr-image-wrapper lg-col-6 md-col-12 sm-col-12 xs-col-12  ' + imageClass
      }
    },

    autoSwitch: function () {
      this.intervalID = window.setInterval(this.switchHandler, 5000)
    },

    switchHandler: function () {
      if (this.autoTabID >= this.content.tabs.length) {
        this.autoTabID = 1
      } else {
        this.autoTabID++
      }

      this.showTab(false, this.autoTabID, this.content.tabs)
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

  &:hover, &.active {
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

#problem-description {
  height: 380px;

  @media (max-device-width: 1023px) {
    height: auto;
  }

  .descr-block {
    @media (max-device-width: 1023px) {
      height: auto;
      min-height: 380px;
    }
  }
}

.descr-image-wrapper {
  transition: all 0.5s ease-out;
  background: $light-grey;
  background-size: cover;
  background-position-y: 50%;
  height: 380px;
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
}

.descr-block {
  background: $yellow;
  overflow-y: scroll;
  // height: 380px;
  // @media (max-device-width: 1025px) {
  //   height: auto;
  //   min-height: 380px;
  // }
}

.image0 {
  background-image: url('../assets/images/problem-descr-pripyat-earth.jpg');
  @media (-webkit-min-device-pixel-ration: 2), (min-resolution: 192dpi) {
    background-image: url('../assets/images/problem-descr-pripyat-earth@2x.jpg');
  }
}

.image1 {
  background-image: url('../assets/images/problem-descr-tree.jpg');
  @media (-webkit-min-device-pixel-ration: 2), (min-resolution: 192dpi) {
    background-image: url('../assets/images/problem-descr-tree@2x.jpg');
  }
}

.image2 {
  background-image: url('../assets/images/problem-descr-e40-stop.jpg');
  @media (-webkit-min-device-pixel-ration: 2), (min-resolution: 192dpi) {
    background-image: url('../assets/images/problem-descr-e40-stop@2x.jpg');
  }
}
</style>
