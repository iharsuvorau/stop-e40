<template>
  <div class="p3 bg-dark-brown white">
    <section>
      <div class="border-top-delimeter"></div>
      <h2 class="pt2 mb4">Материалы экспертов, репортажи с Полесья</h2>

      <div class="pt3 flex flex-wrap justify-end">
        <div class="flex flex-wrap lg-col-10 md-col-10 xm-col-12 xs-col-12">
          <div class="article-item lg-col-4 md-col-6 sm-col-6 xs-col-6 pr4 pb4 flex flex-wrap" v-for="item in posts" :key="item.id">
            <div class="flex-auto bg-medium-grey p2">
              <h3 class="m0">{{ item.title }}</h3>
              <p class="lead">{{ item.lead }}</p>
            </div>
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
        {id: 1, title: 'Проект водного пути Е40', lead: '500 км водного пути через Припять и 11 охраняемых природных территории'},
        {id: 2, title: 'Охраняемые территории, через которые пройдёт водный путь Е40', lead: ''},
        {id: 3, title: 'Как принимаются экологические законы в ЕС', lead: ''},
        {id: 4, title: 'Интервью о радиации', lead: ''},
        {id: 5, title: 'Аналогичные проекты по спрямлению рек', lead: ''}
      ]
    }
  }
}
</script>

<style>
.article-item {
  height: 30em;
}
</style>
