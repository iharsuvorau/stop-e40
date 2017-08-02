<template>
  <nav class="px3 py2 bold shadow-bottom" :class="{white: isWhite}">
    <div class="flex flex-wrap justify-between">
      <ul class="list-reset m0 sm-hide xs-hide">
        <li class=" h3 inline-block mr3" v-if="hasLogo"><a href="/" class="accent-black-link">#STOP_E40</a></li>
        <li class="inline-block mr3" v-for="item in items" :key="item.id"><a href="#">{{ item.title }}</a></li>
      </ul>
      <span class="lg-hide md-hide"><a href="#" @click="showSideNav($event)">Меню</a></span>

      <ul class="list-reset m0">
        <li class="inline-block" v-for="item in alternative" :key="item.id"><a href="#">{{ item.title }}</a></li>
      </ul>

      <section id="sidenav" class="flex flex-column justify-between" v-if="sideNavVisible" @click="stopPropagation($event)">
        <ul class="list-reset m0 p3">
          <li class="mb2" v-for="item in items" :key="item.id"><a href="#">{{ item.title }}</a></li>
        </ul>
        <h1 class="font-ferry m0 px3 py3 h2">#stop_e40</h1>
      </section>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isWhite', 'hasLogo'],

  data () {
    return {
      sideNavVisible: false,
      items: [
        {title: 'Материалы', path: '#', id: 1},
        {title: 'Хронология', path: '#', id: 2},
        {title: 'Соц-сети', path: '#', id: 3},
        {title: 'Публикации в СМИ', path: '#', id: 4},
        {title: 'Галерея', path: '#', id: 5}
      ],
      alternative: [
        {title: 'English', path: '#', id: 6}
      ]
    }
  },

  methods: {
    showSideNav: function (event) {
      event.stopPropagation()

      this.sideNavVisible = true

      document.getElementsByTagName('body')[0].addEventListener('click', () => {
        this.sideNavVisible = false
      })
    },

    stopPropagation: function (event) {
      event.stopPropagation()
    }
  },

  mounted: () => {
    console.log('created')
  }
}
</script>

<style lang="scss" scoped>
$shadow-color: rgba(130, 147, 153, .2);

.shadow-bottom {
  box-shadow: 0 2px 4px $shadow-color;
}

a {
  color: rgba(130, 147, 153, 1);

  &:hover, &:focus {
    color: black;
  }
}

#sidenav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: auto;
  background: white;
  box-shadow: 2px 0 4px $shadow-color;
}

</style>
