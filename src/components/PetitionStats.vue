<template>
  <div id="petition-stats">
    <ul class="list-reset mt3" v-if="petitionData">
      <li class="center pt1">
        <div class="stat_number red">{{ petitionData.signature_count }}</div>
        <div class="stat_label">{{ currentLabel }}</div>
      </li>
      <li class="mt2 center pt2">
        <div class="stat_number red">{{ petitionData.goal }}</div>
        <div class="stat_label">{{ goalLabel }}</div>
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
      plpetitionAPI: 'http://www.godzinadlaziemi.pl/index.php?action=count',
      corsProxy: 'https://cors-anywhere.herokuapp.com/',
      petitionData: null,
      currentLabel: '',
      goalLabel: ''
    }
  },

  methods: {
    init: function () {
      this.petitionStats()
      this.fillLabels()
      this.plPetitionStats()
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
    },

    plPetitionStats: function () {
      fetch(this.corsProxy + this.plpetitionAPI).then(function (response) {
        return response.json()
      }).then((data) => {
        let el = document.getElementById('pl-petition-stats')
        if (this.$route.params.lang === 'ru') {
          el.innerHTML = '&nbsp;&mdash;&nbsp;<strong class=\'red\'>' + String(data.count) + '</strong> подписались'
        } else {
          el.innerHTML = '&nbsp;&mdash;&nbsp;<strong class=\'red\'>' + String(data.count) + '</strong> signs'
        }
      })
    },

    fillLabels: function () {
      if (this.$route.params.lang === 'ru') {
        this.currentLabel = 'подписей собрано'
        this.goalLabel = 'ближайшая цель'
      } else {
        this.currentLabel = 'signs collected'
        this.goalLabel = 'our goal'
      }
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
