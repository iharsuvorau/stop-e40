<template>
  <main class="full-width flex flex-column">
    <top-nav :isWhite="false" :hasLogo="true" :lang="$route.params.lang"></top-nav>
    <article class="flex flex-wrap justify-between">
      <header class="px3 py4 col-12 bg-light-grey">
        <div class="col-9">
          <h1 class="m0" v-html="content.title"></h1>
          <ul class="list-reset dark-grey">
            <li class="inline-block mr2" v-if="content.date">{{ content.date }}</li>
            <li class="inline-block mr2" v-if="content.tag">{{ content.tag.title }}</li>
          </ul>
          <p class="m0 h3 mt3" v-html="content.teaser"></p>
        </div>
      </header>

      <aside class="lg-col-2 md-col-3 sm-col-12 xs-col-12 mt4 pl3">
        <nav id="toc" class="sticky">
          <ul class="list-reset m0">
            <li class="mb2" v-for="(section, index) in content.sections" :key="index">
              <a :href="'#section'+index" class="dark-grey" :class="{'active': section.isActive}" v-html="section.title" @click="smoothScroll($event, index)"></a>
            </li>
          </ul>
        </nav>
      </aside>

      <div class="lg-col-7 md-col-9 sm-col-12 xs-col-12 mb4">
        <p class="px3 mt4 h3 medium" v-if="content.lead" v-html="content.lead"></p>
        <section class="px3 mt4" v-for="(section, index) in content.sections" :key="index">
          <h2 class="h2" :id="'section'+index" v-if="section.title" v-html="section.title"></h2>
          <p v-for="(paragraph, index) in section.paragraphs" :key="index" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic'}"></p>

          <div v-if="section.sections">
            <section v-for="(section, index) in section.sections" :key="index">
              <h3 class="h3" v-if="section.title" v-html="section.title"></h3>
              <p v-for="(paragraph, index) in section.paragraphs" :key="index" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic'}"></p>
            </section>
          </div>
        </section>
      </div>

      <aside class="lg-col-3 md-col-12 sm-col-12 xs-col-12 mt4 px3">
        <action-nav class="sticky"></action-nav>
      </aside>

    </article>
  </main>
</template>

<script>
import HeroUnit from '@/components/HeroUnit'
import TopNav from '@/components/TopNav'
import ActionNav from '@/components/ActionNav'

export default {
  created () {
    this.content = this.loadContent(this.$route.params.lang, 'articles/' + this.$route.params.lang + '/' + this.$route.params.slug)
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.$route.params.lang, 'articles/' + this.$route.params.lang + '/' + this.$route.params.slug)
      }
    }
  },

  components: {
    'hero-unit': HeroUnit,
    'top-nav': TopNav,
    'action-nav': ActionNav
  },

  data () {
    return {
      content: {}
    }
  },

  methods: {
    smoothScroll: function (event, sid) {
      event.preventDefault()
      this.content.sections.forEach((el) => {
        if (el.id === sid) {
          el.isActive = true
        } else {
          el.isActive = false
        }
      })

      // scroll to the target
      let ref = document.getElementById('section' + sid)
      ref.scrollIntoView({behavior: 'smooth'})

      // update the URL
      let parts = window.location.hash.split('/')
      let prevHashes = parts[parts.length - 1].split('#')
      if (prevHashes.length > 1) {
        prevHashes[1] = 'section' + sid
        window.location.hash = parts.slice(0, parts.length - 1).join('/') + '/' + prevHashes.join('#')
      } else {
        window.location.hash += '#section' + sid
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

.sticky {
  position: sticky;
  top: 2em;
}

#toc {
  font-size: .8em;
}
</style>
