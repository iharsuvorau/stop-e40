<template>
  <section class="hero-unit p3 flex flex-wrap justify-center col-12">
    <div class="lg-col-6 md-col-12 sm-col-12 xs-col-12 pr4">
      <h1 class="m0 white big col-12">{{ title }}</h1>
    </div>

    <nav class="action-nav lg-col-6 md-col-12 sm-col-12 xs-col-12 flex py2">
      <div class="lg-col-4 md-col-4 sm-col-4 xs-col-12 pr1 pb1"><div class="border-btn border-box border white bold flex flex-auto items-end"><span class="pl1 pb1 pr3">Петиция</span></div></div>
      <div class="lg-col-4 md-col-4 sm-col-4 xs-col-12 pr1 pb1"><div class="border-btn border-box border white bold flex flex-auto items-end"><span class="pl1 pb1 pr3">Меморандум</span></div></div>
      <div class="lg-col-4 md-col-4 sm-col-4 xs-col-12 pb1"><div class="border-btn border-box border white bold flex flex-auto items-end"><span class="pl1 pb1 pr3">Пресс-кит</span></div></div>
    </nav>

    <p id="tagline" class="h2 tagline white lg-col-8">{{ tagline }}</p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: '#STOP_E40',
      tagline: 'Общественная кампания против строительства водного пути Е40, который пройдёт через Припять и 11 заказников'
    }
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

h1 {
  font-family: 'Teko', sans-serif;
  font-weight: 900;
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
