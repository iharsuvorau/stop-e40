<template>
  <div id="petition-stats">
    <ul class="list-reset mt3" v-if="petitionData">
      <li class="center pt1">
        <div class="stat_number red">{{ petitionData.signature_count }}</div>
        <div class="stat_label">подписей собрано</div>
      </li>
      <li class="mt2 center pt2">
        <div class="stat_number red">{{ petitionData.goal }}</div>
        <div class="stat_label">ближайшая цель</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
      petitionAPI: 'https://api.change.org/v1/petitions/11887498?api_key=9d6e9d6859fff4e530136ed1b83c5ee941d73fd443aa3898b5bf283058de0fb0',
      corsProxy: 'https://cors-anywhere.herokuapp.com/',
      petitionData: null
    }
  },

  methods: {
    init: function () {
      this.petitionStats()
    },

    petitionStats: function () {
      fetch(this.corsProxy + this.petitionAPI).then(function (response) {
        return response.json()
      }).then((data) => {
        // console.log(data)
        this.petitionData = data
      }).catch((err) => {
        console.log('error:', err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.stat_number {
  font-family: 'Agipo';
  font-size: 5em;
  line-height: 1.2em;
}

.stat_label {
  font-family: 'Agipo';
  font-size: 1.25em;
  // line-height: 1.1em;
}
</style>
