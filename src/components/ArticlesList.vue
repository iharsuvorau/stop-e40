<template>
  <section id="materials" class="pt4 px3">
    <h1 class="m0 mb3 center" :class="{'mb3': !standalone, 'mb4': standalone}" v-html="content.title"></h1>
    <div class="flex flex-wrap justify-center">
      <article class="flex flex-column justify-between m2" v-for="item in posts" :key="item.id">
        <header>
          <router-link class="" :to="{name: 'Article', params: {lang: lang, slug: item.slug}}">
            <div :id="'cover_' + item.id" class="cover" v-if="item.cover"></div>
          </router-link>
          <div class="p2">
            <h2 class="h3 m0"><router-link class="black-blue-link" :id="'title_link_' + item.id" :to="{name: 'Article', params: {lang: lang, slug: item.slug}}" v-html="item.title"></router-link></h2>
            <p class="lead m0 pt2 pb1" v-if="!item.cover" v-html="item.teaser"></p>
          </div>
        </header>
        <footer class="p2">
          <ul class="list-reset m0 dark-grey">
            <li class="inline-block mr1 h6">{{ item.date }}</li>
          </ul>
        </footer>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lang', 'standalone'],

  created () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'articles-list')
    this.posts = this.getPosts(this.lang).sort(this.compareById)
  },

  mounted () {
    this.addCovers()
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'articles-list')
        this.posts = this.getPosts(this.lang).sort(this.compareById)

        // NOTE: a hack to render covers after the DOM will be updated
        // TODO: find a better solution
        setTimeout(() => {
          this.addCovers()
        }, 0)
      }
    }
  },

  data () {
    return {
      content: {},
      posts: [],
      tags: []
    }
  },

  methods: {
    getPosts (lang) {
      if (lang === 'ru') {
        // requireAll is a global helper method
        return this.requireAll(require.context('../assets/content/articles/ru/', false, /\.json$/))
      } else if (lang === 'en') {
        return this.requireAll(require.context('../assets/content/articles/en/', false, /\.json$/))
      }
    },

    getTags: function () {
      let tags = [{id: 0, title: 'все', slug: 'all'}]

      this.posts.forEach((el) => {
        let unique = true

        tags.forEach((t) => {
          if (t.title === el.tag.title) {
            unique = false
          }
        })

        if (unique) {
          tags.push(el.tag)
        }
      }, this)

      this.tags = tags
    },

    addCovers () {
      this.posts.forEach((el) => {
        let cover = document.getElementById('cover_' + el.id)
        if (cover && el.cover && el.cover.length > 0) {
          // add an image
          cover.style.backgroundImage = 'url(' + el.cover + ')'
          cover.style.backgroundSize = 'cover'

          // highlight the corresponding title
          let title = document.getElementById('title_link_' + el.id)
          cover.addEventListener('mouseover', (event) => {
            title.className = 'blue-blue-link'
          })
          cover.addEventListener('mouseout', (event) => {
            title.className = 'black-blue-link'
          })
        }
      }, this)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

$article-height: 25em;

article {
  height: $article-height;
  background: rgb(242, 246, 247);
  width: 20em;
  overflow: hidden;
  position: relative;
}

.cover {
  height: $article-height / 2;
  width: 100%;
  background: lighten($dark-grey, 30%);
  transition: all 0.2s ease-out;
}

.tag-list a {
  color: $dark-grey;

  &:hover, &:focus {
    color: black;
  }
}
</style>
