<template>
  <section class="py4">
    <h1 class="m0 center" v-html="content.title"></h1>
    <!-- <ul class="tag-list list-reset center">
      <li class="inline-block mr2" v-for="tag in tags" :key="tag.id"><a href="#">{{ tag.title }}</a></li>
    </ul> -->

    <div class="py3 flex flex-wrap justify-center">
      <article class="flex flex-column justify-between m2" v-for="item in posts" :key="item.id">
        <header class="p2">
          <h2 class="h3 m0 mb2"><router-link class="" :to="{name: 'Article', params: {lang: lang, slug: item.slug}}" v-html="item.title"></router-link></h2>
          <p class="lead m0" v-html="item.teaser"></p>
        </header>
        <footer class="flex items-end flex-auto p2">
          <ul class="list-reset m0">
            <li class="inline-block mr1">{{ item.date }}</li>
            <li class="inline-block mr1"><a href="#">{{ item.tag.title }}</a></li>
          </ul>
        </footer>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created: function () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'articles-list')
    this.posts = this.getPosts(this.lang).sort(this.compareById)
    // this.getTags()
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'articles-list')
        this.posts = this.getPosts(this.lang).sort(this.compareById)
        this.getTags()
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

article {
  height: 25em;
  background: rgb(242, 246, 247);
  width: 20em;
}

h2 a {
  color: black;
}
h2 a:hover, h2 a:focus {
  color: #4CD0FF;
}

article footer a {
  color: $dark-grey;
  &:hover, &:focus {
    color: black;
  }
}

.tag-list a {
  color: $dark-grey;

  &:hover, &:focus {
    color: black;
  }
}
</style>
