<template>
  <nav class="p3 bold" :class="{white: isWhite}">
    <div class="flex flex-wrap justify-between">
      <ul class="list-reset m0 mb2">
        <li class="site-title h3 inline-block mr3" v-if="hasLogo"><a href="/" class="accent-black-link">#STOP_E40</a></li>
        <li class="inline-block mr3" v-for="item in items" :key="item.id">{{ item.title }}</li>
      </ul>

      <ul class="list-reset m0">
        <li class="inline-block" v-for="item in alternative" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isWhite', 'hasLogo'],

  data () {
    return {
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
  }
}
</script>

<style>

</style>
