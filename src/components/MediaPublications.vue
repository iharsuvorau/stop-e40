<template>
  <section id="publications" class="pt4 px3">
    <h1 class="m0 center" v-html="content.title"></h1>
    <div v-if="content.sections">
      <section v-for="(section, index) in content.sections" :key="index">
        <h2 v-if="section.title" v-html="section.title"></h2>
        <div class="flex flex-column">
          <article class="flex flex-wrap bg-light-grey mb1" v-for="(item, index) in section.items" :key="index">
            <div class="col-3 bg-dark-grey p2 flex flex-wrap center items-center justify-center">
              <h3 class="m0" v-if="!item.cover" v-html="item.title"></h3>
              <img v-if="item.cover" :src="item.cover" :alt="item.title" :title="item.title" class="">
            </div>
            <section class="col-9 p2">
              <header>
                <span class="mr2" v-if="item.date">{{ item.date }}</span>
                <span class="mr2" v-if="item.author">{{ item.author }}</span>
              </header>
              <h4 class="m0 my1 h3" v-if="item.link"><a :href="item.link" :title="item.publicationTitle" v-html="item.publicationTitle"></a></h4>
              <h4 class="m0 my1 h3" v-else v-html="item.publicationTitle"></h4>
              <p class="m0 mb2" v-if="item.teaser" v-html="item.teaser"></p>
            </section>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created: function () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'media-publications')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'media-publications')
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
@import '../assets/styles/colors';

header {
  font-size: .8em;
  color: $dark-grey;
}

article a {
  color: black;

  &:hover, &:focus {
    color: $blue;
  }
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
