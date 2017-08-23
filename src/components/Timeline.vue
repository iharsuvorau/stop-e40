<template>
  <section class="px3 pt4">
    <h1 class="center m0 mb3" v-html="content.title"></h1>
    <section class="flex flex-wrap mt3">
      <div class="event pr2" v-for="(item, index) in content.events" :key="index">
        <article class="py2" @click="showDescr($event, index, item)">
          <div class="h3 mb1 bold" v-html="item.date.monthDay + ', ' + item.date.year"></div>
          <span class="h4 dark-grey" v-if="item.place" v-html="item.place"></span>
          <p class="h4 m0 mb1 regular" v-html="item.title"></p>
          <div v-show="item.isActive" v-if="item.paragraphs" class="h5 mt3">
            <p class="" v-for="(item, index) in item.paragraphs" :key="index" v-html="item.text"></p>
          </div>
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
    // this.eventsByYear = this.sortEventsByYear(this.content.events)
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
    },

    showDescr (event, index, item) {
      if (item.isActive) {
        item.isActive = false
      } else {
        item.isActive = true
      }

      this.content.events.forEach((el) => {
        if (el !== item) {
          el.isActive = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

article {
  transition: all 0.2s ease-in;
  height: 100%;
  border-top: 1px lighten($dark-grey, 35%) solid;

  &:hover, &:focus {
    // background-color: $light-grey;
    cursor: pointer;
    & .h3 {
      color: $blue;
      transition: all 0.2s ease-in;
    }

    border-color: $blue;
  }
}

.event {
  flex-basis: 17.75em;

  @media (max-width: 915px) {
    flex-basis: 100%;
  }
}
</style>
