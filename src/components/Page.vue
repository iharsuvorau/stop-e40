<template>
  <div class="full-width">
    <top-nav :isWhite="false" :hasLogo="true" :lang="$route.params.lang"></top-nav>
    <main class="flex flex-column">
      <article class="flex flex-wrap justify-between">
        <header class="px3 py4 col-12">
          <div class="lg-col-9">
            <h1 class="m0" v-if="content.title" v-html="content.title"></h1>
            <p class="m0 h3 mt3" v-if="content.teaser" v-html="content.teaser"></p>
            <social-sharing :url="windowLocation"
                            :title="convertHTMLToText(content.title)"
                            :description="convertHTMLToText(content.teaser)"
                            hashtags="stop_e40"
                            inline-template>
              <div class="mt2">
                <network network="googleplus">
                  <i class="fa fa-fw fa-google-plus social-btn on-light"></i>
                </network>
                <network network="facebook">
                  <i class="fa fa-fw fa-facebook social-btn on-light"></i>
                </network>
                <network network="vk">
                  <i class="fa fa-fw fa-vk social-btn on-light" aria-hidden="true"></i>
                </network>
                <network network="twitter">
                  <i class="fa fa-fw fa-twitter social-btn on-light"></i>
                </network>                
                <network network="linkedin">
                  <i class="fa fa-fw fa-linkedin social-btn on-light"></i>
                </network>
              </div>
            </social-sharing>
          </div>
        </header>

        <aside class="lg-col-2 md-col-3 sm-col-12 xs-col-12 mt4 pl3">
          <nav id="toc" class="sticky">
            <ul class="list-reset m0" v-if="!showPetitionStats">
              <li class="mb2" v-for="(section, index) in content.sections" :key="index">
                <a :href="'#section' + index" class="dark-grey" :class="{'active': section.isActive}" v-html="section.title" @click="scrollTo($event, 'section' + index)"></a>
              </li>
            </ul>
            <petition-stats :lang="$route.params.lang" v-if="showPetitionStats"></petition-stats>
          </nav>

        </aside>

        <div class="lg-col-7 md-col-9 sm-col-12 xs-col-12 mb4 default-links-nodeco">
          <p class="px3 mt4 h3 medium" v-if="content.lead" v-html="content.lead"></p>
          <section class="px3 my4" v-for="(section, index) in content.sections" :key="index">
            <!-- Profile -->
            <div :id="'section'+index" class="clearfix" v-if="section.profile">
              <div class="left">
                <img class="circle" :src="section.profile.portrait" :alt="section.profile.name" width="150">
              </div>
              <div class="overflow-hidden pt2 pl3">
                <h2 class="h2 m0" v-html="section.profile.name"></h2>
                <p class="italic h5" v-html="section.profile.caption"></p>
              </div>
            </div>
            <!-- Header (show if no profile) -->
            <h2 class="h2" :id="'section'+index" v-if="section.title && !section.profile" v-html="section.title"></h2>
            <!-- Images -->
            <div v-if="section.images">
              <figure class="p0 m0" v-for="(img, index) in section.images" :key="index">
                <img class="circle" :src="img.link" :alt="img.caption" :width="img.width">
                <figcaption class="italic dark-grey h6 lg-col-8 sm-col-12" v-if="img.caption" v-html="img.caption"></figcaption>
              </figure>
            </div>
            <p v-for="(paragraph, index) in section.paragraphs" :key="index" v-if="paragraph.text" v-html="paragraph.text" :class="{'italic': paragraph.style === 'italic', 'bold': paragraph.style === 'bold', 'h3': paragraph.style === 'h3', 'h2': paragraph.style === 'h2'}"></p>
            <ul v-for="(paragraph, index) in section.paragraphs" :key="index" v-if="paragraph.list">
              <!-- List -->
              <li class="mb1" v-for="(item, index) in paragraph.list" :key="index">
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
                  <li class="mb1" v-for="(item, index) in paragraph.list" :key="index">
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
              </section>
            </div>
          </section>

          <petition-reasons :lang="$route.params.lang" v-if="showPetitionReasons"></petition-reasons>
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
import PetitionStats from '@/components/PetitionStats'
import PetitionReasons from '@/components/PetitionReasons'

export default {
  components: {
    'petition-stats': PetitionStats,
    'petition-reasons': PetitionReasons
  },

  created () {
    this.init()
    this.initPetition()
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang || from.params.slug !== to.params.slug) {
        this.init()
        this.initPetition()
        this.$emit('updateHead')
        this.windowLocation = String(window.location)
      }
    }
  },

  data () {
    return {
      content: {},
      changeOrgAPI: 'https://api.change.org/v1/petitions/11887498?api_key=9d6e9d6859fff4e530136ed1b83c5ee941d73fd443aa3898b5bf283058de0fb0',
      corsProxy: 'https://cors-anywhere.herokuapp.com/',
      petitionData: {},
      showPetitionStats: false,
      showPetitionReasons: false,
      windowLocation: String(window.location)
    }
  },

  // TODO: the head doesn't change between the same component pages

  head: {
    title: function () {
      return {
        inner: this.convertHTMLToText(this.content.title),
        separator: '/',
        complement: this.defaultPageTitle[this.$route.params.lang]
      }
    },
    meta: function () {
      return [
        {name: 'og:title', content: this.convertHTMLToText(this.content.title)},
        {name: 'og:type', content: 'article'},
        {name: 'og:image', content: window.location.host + '/static/covers/public_opinion-3@2x.jpg'},
        {name: 'og:url', content: window.location},
        {name: 'description', content: this.convertHTMLToText(this.content.teaser)}
      ]
    }
  },

  methods: {
    init: function () {
      this.content = this.loadContent(this.$route.params.lang, 'pages/' + this.$route.params.lang + '/' + this.$route.params.slug)
      // document.title = this.content.title
    },

    initPetition: function () {
      if (this.$route.params.slug === 'petition') {
        this.showPetitionStats = true
        this.showPetitionReasons = true
      } else {
        this.showPetitionStats = false
        this.showPetitionReasons = false
      }
    },

    getPageTitle: function () {
      return {
        inner: this.content.title,
        separator: '/',
        complement: this.defaultPageTitle[this.$route.params.lang]
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
