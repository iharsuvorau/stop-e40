<template>
  <section class="hero-unit p3 flex flex-wrap justify-center col-12">
    <div class="lg-col-6 md-col-12 sm-col-12 xs-col-12 pr4">
      <h1 class="m0 white big site-title col-12">{{ title }}</h1>
    </div>

    <action-nav :isWhite="true" class="lg-col-6 col-12 py2"></action-nav>

    <p id="tagline" class="h2 tagline white lg-col-8">{{ tagline }}</p>
  </section>
</template>

<script>
import ActionNav from '@/components/ActionNav'

export default {
  data () {
    return {
      title: '#STOP_E40',
      tagline: 'Общественная кампания против строительства водного пути Е40, который пройдёт через Припять и 11 заказников'
    }
  },

  components: {
    'action-nav': ActionNav
  }
}
</script>

<style scoped>
/* .action-nav {
  position: sticky;
  top: 0;
} */

.border-btn {
  min-height: 5em;
  /* min-width: 10em; */
  transition: all 0.1s ease-in;
}

.border-btn:hover {
  background: white;
  color: #706B67;
  cursor: pointer;
}

h1.big {
  font-size: 96px;
}
h1.medium {
  font-size: 72px;
}

.tagline {
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
}

.border {
  border: 3px solid white;
}
</style>
