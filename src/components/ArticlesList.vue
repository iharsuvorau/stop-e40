<template>
  <div class="p3 white">
    <section>
      <div class="border-top-delimeter"></div>
      <h2 class="pt2 mb4">Материалы экспертов, репортажи с Полесья</h2>

      <div class="pt3 flex flex-wrap justify-end">
        <div class="flex flex-wrap lg-col-10 md-col-10 xm-col-12 xs-col-12">
          <div class="article-item lg-col-4 md-col-6 sm-col-6 xs-col-6 pr3 pb3 flex flex-wrap" v-for="item in posts" :key="item.id">
            <article class="flex flex-column flex-auto justify-between bg-medium-grey">
              <header class="bg-dark-brown p2">
                <h3 class="m0 mb2"><router-link class="white-link" :to="{name: 'Article', params: {slug: item.slug}}">{{ item.title }}</router-link></h3>
                <p class="lead m0">{{ item.lead }}</p>
              </header>
              <footer class="bg-dark-brown flex items-end flex-auto p2">
                <ul class="list-reset m0">
                  <li>2017-09-01</li>
                </ul>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        {id: 1, slug: 'foo', title: 'Проект водного пути Е40', lead: '500 км водного пути через Припять и 11 охраняемых природных территории', cover: 'http://e40restoration.eu/images/242.jpg'},
        {id: 2, slug: 'bar', title: 'Охраняемые территории, через которые пройдёт водный путь Е40', lead: '', cover: ''},
        {id: 3, slug: 'eco-law', title: 'Какими правовыми актами регулируются экологические вопросы в Беларуси', lead: 'На вопросы отвечает эксперт Наталья Минченко, бывший сотрудник Министерства охраниы природы в Беларуси', cover: ''},
        {id: 4, slug: 'baz', title: 'Интервью о радиации', lead: '', cover: ''},
        {id: 5, slug: 'bag', title: 'Аналогичные проекты по спрямлению рек', lead: '', cover: ''}
      ]
    }
  }
}
</script>

<style scoped>
.article-item {
  height: 30em;
}
</style>
