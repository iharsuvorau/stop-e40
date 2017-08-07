<template>
  <nav class="flex flex-column items-center" :class="{white: isWhite}">
    <div class="mb1" v-for="(item, index) in content.items" :key="index">
      <router-link :to="{name: 'Page', params: {lang: lang, slug: item.slug}}">
        <span class="pl1 pb1 pr3 border-btn border3 bold flex items-end" :class="{'border-white': isWhite, 'border-accent': !isWhite}">
          {{ item.title }}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isWhite', 'isFlex'],

  created () {
    this.lang = this.$route.params.lang || this.defineDefaultLang()
    this.content = this.loadContent(this.lang, 'action-nav')
  },

  watch: {
    '$route' (to, from) {
      if (from.params.lang !== to.params.lang) {
        this.lang = this.$route.params.lang || this.defineDefaultLang()
        this.content = this.loadContent(this.lang, 'action-nav')
      }
    }
  },

  data () {
    return {
      lang: '',
      content: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';

.border-accent {
  border-color: $red;
  color: $red;

  a {
    color: $red;
  }

  &:hover, &:focus {
    background-color: $red;
    color: white;

    a {
      color: white;
    }
  }
}
</style>
