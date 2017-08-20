<template>
  <section class="px3">
    <h1 class="center" v-html="content.title"></h1>
    <section class="flex flex-wrap" v-for="(events, year) in eventsByYear" :key="year">
      <h2 class="h1 col-12 my2" v-html="year"></h2>
      <div class="event pr2 pb2" v-for="(item, index) in events" :key="index">
        <article class="p2 border-top">
          <header class="mb1">
            <div class="h3 bold" v-html="item.date.monthDay"></div>
          </header>
          <div class="h4 dark-grey" v-if="item.place" v-html="item.place"></div>
          <p class="h4 m0 regular" v-html="item.title"></p>
        </article>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created: function () {
    // loadContent is a global helper method
    this.content = this.loadContent(this.lang, 'timeline')
    this.eventsByYear = this.sortEventsByYear(this.content.events)
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.content = this.loadContent(this.lang, 'timeline')
      }
    }
  },

  data () {
    return {
      content: {},
      eventsByYear: {}
    }
  },

  methods: {
    sortEventsByYear (events) {
      let sorted = {}
      events.forEach((el) => {
        if (Object.keys(sorted).indexOf(String(el.date.year)) > -1) {
          sorted[el.date.year].push(el)
        } else {
          sorted[el.date.year] = [el]
        }
      })
      return sorted
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

article {
  // background-color: $light-grey;
  transition: all 0.2s ease-in;
  // height: 400px;

  &:hover, &:focus {
    background-color: $light-grey;
  }
}

.event {
  flex-basis: 17.75em;
}
</style>
