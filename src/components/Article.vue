<template>
  <div>
    <main class="flex flex-column">
      <top-nav :isWhite="false" :hasLogo="true" :lang="$route.params.lang"></top-nav>
      <article class="flex flex-wrap justify-between">
        <header :id="'article_header_' + content.id" class="px3 py4 col-12 bg-light-grey flex flex-column items-stretch" :class="{'white': content.cover}">
          <div class="col-9 flex flex-auto flex-column items-stretch" :class="{'white': content.cover, 'black': !content.cover}">
            <h1 class="m0" v-html="content.title"></h1>
            <div class="flex flex-column items-stretch flex-auto justify-between">
              <p class="m0 mt3" v-if="content.date" v-html="content.date"></p>
              <div id="social-sharing"></div>
            </div>
          </div>
        </header>

        <aside class="lg-col-2 md-col-3 sm-col-12 xs-col-12 mt4 pl3">
          <nav id="toc" class="sticky">
            <ul class="list-reset m0">
              <li class="mb2" v-for="(section, index) in content.sections" :key="index">
                <a :href="'#section'+index" class="dark-grey" :class="{'active': section.isActive}" v-html="section.title" @click="scrollTo($event, 'section' + index)"></a>
              </li>
            </ul>
          </nav>
        </aside>

        <div class="lg-col-10 md-col-9 sm-col-12 xs-col-12 mb4">
          <p class="px3 mt4 h3 medium" v-if="content.lead" v-html="content.lead"></p>
          <section class="mt4" v-for="(section, index) in content.sections" :key="index">
            <!-- Quote -->
            <div class="quote px1" v-if="section.quote" v-html="section.quote.text"></div>
            <!-- Header (show if no profile) -->
            <h2 class="px3 h2 lg-col-9 md-col-12 sm-col-12 xs-col-12" :id="'section'+index" v-if="section.title && !section.profile" v-html="section.title"></h2>
            <!-- Profile -->
            <div :id="'section'+index" class="clearfix px3 lg-col-9" v-if="section.profile">
              <div class="left" v-if="section.profile.portrait">
                <img class="circle" :src="section.profile.portrait" :alt="section.profile.name" width="150">
              </div>
              <div class="overflow-hidden pt2 pl3">
                <h2 class="h2 m0" v-html="section.profile.name"></h2>
                <p class="italic h5" v-html="section.profile.caption"></p>
              </div>
            </div>
            <!-- Images -->
            <div v-if="section.images">
              <figure class="pl3 m0" v-for="(img, index) in section.images" :key="index">
                <img :src="img.link" :alt="img.caption">
                <figcaption class="italic dark-grey h6 lg-col-8 sm-col-12" v-if="img.caption" v-html="img.caption"></figcaption>
              </figure>
            </div>
            <!-- Paragraphs -->
            <p class="px3 lg-col-9 md-col-12 sm-col-12 xs-col-12" v-for="(paragraph, index) in section.paragraphs" :key="index" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic'}"></p>
            <!-- Subsections -->
            <div v-if="section.sections">
              <section v-for="(section, index) in section.sections" :key="index">
                <!-- Quote -->
                <div class="quote px1" v-if="section.quote" v-html="section.quote.text"></div>
                <!-- Header -->
                <h3 class="px3 h3 lg-col-9 md-col-12 sm-col-12 xs-col-12" v-if="section.title" v-html="section.title"></h3>
                <!-- Paragraphs -->
                <p class="px3 lg-col-9 md-col-12 sm-col-12 xs-col-12" v-for="(paragraph, index) in section.paragraphs" :key="index" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic'}"></p>
                <!-- Tables -->
                <div class="px3 pb2 lg-col-9 md-col-12 sm-col-12 xs-col-12" v-if="section.tables">
                  <table class="mt2 full-width" v-for="(table, index) in section.tables" :key="index">
                    <caption class="h5 caps" v-if="table.caption" v-html="table.caption"></caption>
                    <thead v-if="table.headers">
                      <tr><th class="pr2 border-bottom" v-for="(th, index) in table.headers" :key="index" v-html="th"></th></tr>
                    </thead>
                    <tbody>
                      <tr class="align-top h5" v-for="(tr, index) in table.rows" :key="index">
                        <td class="pr2 py1 border-bottom" :class="{'caps': index === 0}" v-for="(td, index) in tr" :key="index" v-html="td"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </section>
        </div>

        <!--
        <aside class="lg-col-3 md-col-12 sm-col-12 xs-col-12 mt4 px3">
          <action-nav class="sticky"></action-nav>
        </aside>
        -->
      </article>
    </main>
    <hr width="150">
    <articles-list :lang="$route.params.lang"></articles-list>
    <footer-bar :lang="$route.params.lang"></footer-bar>
  </div>
</template>

<script>
import HeroUnit from '@/components/HeroUnit'
import ActionNav from '@/components/ActionNav'

require('@/share.js') // Yandex Social Sharing API

export default {
  created () {
    this.content = this.loadContent(this.$route.params.lang, 'articles/' + this.$route.params.lang + '/' + this.$route.params.slug)
  },

  mounted () {
    this.addBgImage(this.content.cover, this.content.id)
    this.initSocialBtns()
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang || from.params.slug !== to.params.slug) {
        this.content = this.loadContent(this.$route.params.lang, 'articles/' + this.$route.params.lang + '/' + this.$route.params.slug)
        this.$emit('updateHead')
        document.title = this.content.title.replace(/&nbsp;/g, ' ')

        // a hack to load the image for the same component
        setTimeout(() => {
          this.addBgImage(this.content.cover, this.content.id)
        }, 0)
      }
    }
  },

  components: {
    'hero-unit': HeroUnit,
    'action-nav': ActionNav
  },

  data () {
    return {
      content: {}
    }
  },

  head: {
    title: function () {
      return {
        inner: this.content.title,
        separator: '/',
        complement: this.defaultPageTitle[this.$route.params.lang]
      }
    },
    meta: function () {
      return [
        {name: 'og:title', content: this.content.title},
        {name: 'og:type', content: 'article'},
        {name: 'og:image', content: window.location.host + this.content.cover},
        {name: 'og:url', content: window.location},
        {name: 'description', content: this.content.lead}
      ]
    }
  },

  methods: {
    initSocialBtns: function () {
      window.Ya.share2('social-sharing', {
        content: {
          url: window.location,
          title: this.content.title,
          description: this.content.lead,
          image: this.content.cover
        },
        theme: {
          services: 'gplus,facebook,twitter,vkontakte',
          counter: true,
          lang: this.$route.params.lang
        }
      })
    },

    addBgImage: function (url, id) {
      if (url && url.length > 0) {
        let header = document.getElementById('article_header_' + id)
        header.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(' + url + ')'
        header.style.backgroundSize = 'cover'
      } else {
        // no image
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

header {
  min-height: 380px;
}

.sticky {
  position: sticky;
  top: 2em;
}

#toc {
  font-size: .8em;
}

td.caps {
  width: 200px;
}

.quote {
  font-family: 'Agipo';
  font-size: 2.45em;
  line-height: 1.25em;
  padding-top: 1.25em;
  padding-bottom: 1.25em;
  padding-right: 1em;
  max-width: 30em;
  color: $dark-grey;
}
</style>
