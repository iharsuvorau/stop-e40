<template>
  <section class="py4">
    <h1 class="m0 center">Материалы экспертов, репортажи с Полесья</h1>
    <ul class="tag-list list-reset center">
      <li class="inline-block mr2" v-for="tag in tags" :key="tag.id"><a href="#">{{ tag.title }}</a></li>
    </ul>

    <div class="py3 flex flex-wrap justify-center">
      <article class="flex flex-column justify-between m2" v-for="item in posts" :key="item.id">
        <header class="p2">
          <h2 class="h3 m0 mb2"><router-link class="" :to="{name: 'Article', params: {slug: item.slug}}">{{ item.title }}</router-link></h2>
          <p class="lead m0">{{ item.lead }}</p>
        </header>
        <footer class="flex items-end flex-auto p2">
          <ul class="list-reset m0">
            <li class="inline-block mr1">2017-09-01</li>
            <li class="inline-block mr1"><a href="#">{{ item.tag.title }}</a></li>
          </ul>
        </footer>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {id: 1, tag: {id: 1, title: 'е40', slug: 'e40'}, slug: 'foo', title: 'Проект водного пути Е40', lead: '500 км водного пути через Припять и 11 охраняемых природных территории', cover: 'http://e40restoration.eu/images/242.jpg'},
        {id: 2, tag: {id: 1, title: 'оопт', slug: 'oopt'}, slug: 'bar', title: 'Охраняемые территории, через которые пройдёт водный путь Е40', lead: '', cover: ''},
        {id: 3, tag: {id: 1, title: 'закон', slug: 'law'}, slug: 'eco-law', title: 'Какими правовыми актами регулируются экологические вопросы в Беларуси', lead: 'На вопросы отвечает эксперт Наталья Минченко, бывший сотрудник Министерства охраниы природы в Беларуси', cover: ''},
        {id: 4, tag: {id: 1, title: 'репортажи', slug: 'report'}, slug: 'baz', title: 'Интервью о радиации', lead: '', cover: ''},
        {id: 5, tag: {id: 1, title: 'репортажи', slug: 'report'}, slug: 'bag', title: 'Аналогичные проекты по спрямлению рек', lead: '', cover: ''}
      ],

      tags: []
    }
  },

  methods: {
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
  },

  created: function () {
    this.getTags()
  }
}
</script>

<style lang="scss" scoped>
$dark-grey: #829399;

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
