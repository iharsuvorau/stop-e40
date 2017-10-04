<template>
  <section class="px3 pt4" v-if="petitionData">
    <h2 class="h2">{{ title }}</h2>
    <div class="reason mb3" v-for="(item, index) in petitionData.reasons" :key="index">
      <p class="m0 italic dark-grey">{{ item.content }}</p>
      <span class="h6 dark-grey bold">{{ item.author_name }},</span> <span class="h6 dark-grey">{{ formatDate(item.created_at) }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ['lang'],

  created () {
    this.init()
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang || from.params.slug !== to.params.slug) {
        this.init()
      }
    }
  },

  data () {
    return {
      reasonsAPI: 'https://api.change.org/v1/petitions/11887498/reasons?api_key=9d6e9d6859fff4e530136ed1b83c5ee941d73fd443aa3898b5bf283058de0fb0',
      corsProxy: 'https://cors-anywhere.herokuapp.com/',
      petitionData: null,
      title: ''
    }
  },

  methods: {
    init: function () {
      this.petitionReasons()
      this.fillTitle()
    },

    petitionReasons: function () {
      fetch(this.corsProxy + this.reasonsAPI).then(function (response) {
        return response.json()
      }).then((data) => {
        this.petitionData = data
      }).catch((err) => {
        console.log('error:', err)
      })
    },

    formatDate: function (d) {
      let date = new Date(d)
      return date.toLocaleDateString()
    },

    fillTitle: function () {
      if (this.lang === 'ru') {
        this.title = 'Почему люди подписываются'
      } else {
        this.title = 'Why people sign'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
