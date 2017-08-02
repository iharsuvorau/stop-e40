<template>
  <section class="flex flex-wrap">
    <div id="descr-image-wrapper" class="descr-image-wrapper lg-col-6 col-12 image2"></div>
    <div class="descr-block lg-col-6 col-12 flex flex-column justify-between">
      <article class="pt3 pl3 pr3" v-for="tab in tabs" :key="tab.id" v-if="tab.show">
        <h1 class="h2 m0"><a href="" v-html="tab.title"></a></h1>
        <p v-for="p in tab.paragraphs" :key="p.id">{{ p.text }}</p>
      </article>
      <nav class="flex bold px3 pb2">
        <a v-for="t in tabs" :key="t.id" @click="showTab($event, t.id, tabs)" :class="t.className" :href="'#' + t.name">&mdash;</a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {
          id: 1,
          name: 'stop',
          title: 'Почему проект Е40 нужно остановить',
          next: 'why',
          show: true,
          className: 'active',
          imageClass: 'image2',
          paragraphs: [
            {id: 1, text: 'Е40 — это проект судоходного пути длиной более 2000 километров, который может пройти по территории Польши, Беларуси и Украины. Предполагается, что Е40 станет новой торговой трассой между портами Балтийского и Чёрного морей. Проект Е40 финансируется Евросоюзом. Ведущий партнер со стороны Польши — Морской институт в Гданьске, со стороны Беларуси — Днепро-Бугский водный канал.'}
          ]
        },
        {
          id: 2,
          name: 'e40',
          title: 'Проект Е40',
          next: 'what',
          show: false,
          className: '',
          imageClass: 'image1',
          paragraphs: [
            {id: 2, text: 'По территории Беларуси пройдет более 500 км водной трассы, основная часть которых — по уникальной реке Припять и через ряд важных охраняемых природных территорий на ее берегах. Строительство водного пути предполагает.'}
          ]
        },
        {
          id: 3,
          name: 'pripyat',
          title: 'Припять',
          next: 'pripyat',
          show: false,
          className: '',
          imageClass: 'image0',
          paragraphs: [
            {id: 1, text: 'Припять-река.'}
          ]
        }
      ]
    }
  },

  methods: {
    showTab: (e, id, tabs) => {
      e.preventDefault()

      let imageClass = ''

      for (let t of tabs) {
        if (t.id === id) {
          t.show = true
          t.className = 'active'
          imageClass = t.imageClass
        } else {
          t.show = false
          t.className = ''
        }
      }

      document.getElementById('descr-image-wrapper').className = 'descr-image-wrapper col-6 ' + imageClass
    }
  }
}
</script>

<style lang="scss" scoped>
$blue: #4CD0FF;
$light-grey: rgb(242, 246, 247);
$yellow: rgb(255, 228, 94);

.descr-image-wrapper, img {
  transition: all 0.5s ease-out;
}

nav a {
  color: black;
  font-size: 1.5em;
  font-weight: 900;

  &:hover, &:focus, &.active {
    color: white;
  }
}

h1 a {
  color: black;

  &:hover, &:focus {
    color: $blue;
  }
}

section {
  // height: 380px;
  overflow-y: hidden;
}

.descr-image-wrapper {
  background: $light-grey;
  background-size: cover;
  background-position-y: 50%;
  height: 380px;
}

.descr-block {
  background: $yellow;
  overflow-y: scroll;
  height: 380px;
  @media (max-device-width: 1025px) {
    height: auto;
    min-height: 380px;
  }
}

.image0 {
  background-image: url('../assets/images/pripyat-0-opt.jpg');
}
.image1 {
  background-image: url('../assets/images/pripyat-1-opt.jpg');
}
.image2 {
  background-image: url('../assets/images/pripyat-2-opt.jpg');
}
</style>
