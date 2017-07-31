<template>
  <article class="px3 white">
    <header class="flex pb2">
      <h3 class="m0 pt3 mb1 mr3" :id="t.name" v-for="t in tabs" :key="t.id">
        <a @click="showTab($event, t.id, tabs)" :class="t.className" :href="'#' + t.name">{{ t.title }}</a>
      </h3>
      <div class="border-bottom-delimeter"></div>
    </header>
    <div class="flex flex-wrap justify-center col-12 mt3">
      <section class="py3 lg-col-8" v-for="tab in tabs" :key="tab.id" v-if="tab.show">
        <p v-for="p in tab.paragraphs" :key="p.id"><big>{{ p.text }}</big></p>
      </section>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          id: 1,
          name: 'stop',
          title: 'почему нужно остановить',
          show: true,
          className: 'active',
          paragraphs: [
            {id: 1, text: 'Е40 — это проект судоходного пути длиной более 2000 километров, который может пройти по территории Польши, Беларуси и Украины. Предполагается, что Е40 станет новой торговой трассой между портами Балтийского и Чёрного морей. Проект Е40 финансируется Евросоюзом. Ведущий партнер со стороны Польши — Морской институт в Гданьске, со стороны Беларуси — Днепро-Бугский водный канал. Разработка проекта началась в 2013 году и продолжается по настоящий момент.'},
            {id: 2, text: 'По территории Беларуси пройдет более 500 км водной трассы, основная часть которых — по уникальной реке Припять и через ряд важных охраняемых природных территорий на ее берегах. Строительство водного пути предполагает.'}
          ]
        },
        {
          id: 2,
          name: 'e40',
          title: 'проект Е40',
          show: false,
          className: '',
          paragraphs: [
            {id: 1, text: 'Проблема Е49'},
            {id: 2, text: 'По территории Беларуси пройдет более 500 км водной трассы, основная часть которых — по уникальной реке Припять и через ряд важных охраняемых природных территорий на ее берегах. Строительство водного пути предполагает.'}
          ]
        },
        {
          id: 3,
          name: 'pripyat',
          title: 'Припять',
          show: false,
          className: '',
          paragraphs: [
            {id: 1, text: 'Припять-река.'},
            {id: 2, text: 'По территории Беларуси пройдет более 500 км водной трассы, основная часть которых — по уникальной реке Припять и через ряд важных охраняемых природных территорий на ее берегах. Строительство водного пути предполагает.'}
          ]
        }
      ]
    }
  },

  methods: {
    showTab: (e, id, tabs) => {
      e.preventDefault()
      for (let t of tabs) {
        if (t.id === id) {
          t.show = true
          t.className = 'active'
        } else {
          t.show = false
          t.className = ''
        }
      }
    }
  }
}
</script>

<style scoped>
a {
  color: white;
}

a:hover, a.active {
  color: #FFD500;
}

header {
  position: relative;
  overflow-x: scroll;
}
</style>
