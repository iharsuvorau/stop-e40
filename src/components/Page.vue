<template>
  <div class="full-width">
    <top-nav :isWhite="false" :hasLogo="true" :lang="$route.params.lang"></top-nav>
    <main class="flex flex-column">
      <article class="flex flex-wrap justify-between">
        <header class="px3 py4 col-12">
          <div class="col-9">
            <h1 class="m0" v-if="content.title" v-html="content.title"></h1>
            <p class="m0 h3 mt3" v-if="content.teaser" v-html="content.teaser"></p>
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

        <div class="lg-col-7 md-col-9 sm-col-12 xs-col-12 mb4 default-links">
          <p class="px3 mt4 h3 medium" v-if="content.lead" v-html="content.lead"></p>
          <section class="px3 mt4" v-for="(section, index) in content.sections" :key="index">
            <h2 class="h2" :id="'section'+index" v-if="section.title" v-html="section.title"></h2>
            <p v-for="(paragraph, index) in section.paragraphs" :key="index" v-if="paragraph.text" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic', 'bold': paragraph.style === 'bold', 'h3': paragraph.style === 'h3', 'h2': paragraph.style === 'h2'}"></p>
            <ul v-for="(paragraph, index) in section.paragraphs" :key="index" v-if="paragraph.list">
              <!-- List -->
              <li v-for="(item, index) in paragraph.list" :key="index">
                <a v-if="item.link" :href="item.link" :title="item.text" v-html="item.text"></a>
                <span v-if="!item.link" v-html="item.text"></span>
                <!-- List Meta -->
                <ul class="list-reset m0 h6 dark-grey" v-if="item.meta">
                  <li class="inline-block mr2" v-for="(item, index) in item.meta" :key="index">
                    <span v-if="item.name">{{ item.name }}: </span>
                    <span v-if="item.value" v-html="item.value"></span>
                  </li>
                </ul>
              </li>
            </ul>

            <div v-if="section.sections">
              <section v-for="(section, index) in section.sections" :key="index">
                <h3 class="h3" v-if="section.title" v-html="section.title"></h3>
                <p v-for="(paragraph, index) in section.paragraphs" :key="index" v-if="paragraph.text" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic', 'bold': paragraph.style === 'bold'}"></p>
                <ul v-for="(paragraph, index) in section.paragraphs" :key="index" v-if="paragraph.list">
                  <!-- List -->
                  <li v-for="(item, index) in paragraph.list" :key="index">
                    <a v-if="item.link" :href="item.link" :title="item.text" v-html="item.text"></a>
                    <span v-if="!item.link" v-html="item.text"></span>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </div>

        <aside class="lg-col-3 md-col-12 sm-col-12 xs-col-12 mt4 px3">
          <action-nav class="sticky"></action-nav>
        </aside>

      </article>
    </main>
    <footer-bar :lang="$route.params.lang"></footer-bar>
  </div>
</template>

<script>
import HeroUnit from '@/components/HeroUnit'
import TopNav from '@/components/TopNav'
import ActionNav from '@/components/ActionNav'
import Footer from '@/components/Footer'

export default {
  components: {
    'hero-unit': HeroUnit,
    'top-nav': TopNav,
    'action-nav': ActionNav,
    'footer-bar': Footer
  },

  created () {
    this.content = this.loadContent(this.$route.params.lang, 'pages/' + this.$route.params.lang + '/' + this.$route.params.slug)
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang || from.params.slug !== to.params.slug) {
        this.content = this.loadContent(this.$route.params.lang, 'pages/' + this.$route.params.lang + '/' + this.$route.params.slug)
      }
    }
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

#toc {
  font-size: .8em;
}

.sticky {
  position: sticky;
  top: 2em;
}
</style>
