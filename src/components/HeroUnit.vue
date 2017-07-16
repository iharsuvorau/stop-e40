<template>
  <div class="hero-unit p3 flex flex-wrap justify-center">
    <div class="col-12 flex flex-wrap">
      <div class="lg-col-6 md-col-12 sm-col-12 xs-col-12">
        <h1 class="m0 white big sm-hide xs-hide col-12">{{ title }}</h1>
        <h1 class="m0 white medium md-hide lg-hide col-12">{{ title }}</h1>
      </div>

      <nav class="action-nav lg-col-6 md-col-12 sm-col-12 xs-col-12 flex flex-wrap py2">
        <div class="flex flex-wrap lg-col-4 md-col-4 sm-col-12 xs-col-12 pr1 pb1"><div class="border-btn border-box border white bold flex full-width items-end"><span class="pl1 pb1">Петиция</span></div></div>
        <div class="flex flex-wrap lg-col-4 md-col-4 sm-col-12 xs-col-12 pr1 pb1"><div class="border-btn border-box border white bold flex full-width items-end"><span class="pl1 pb1">Меморандум</span></div></div>
        <div class="flex flex-wrap lg-col-4 md-col-4 sm-col-12 xs-col-12 pr1 pb1"><div class="border-btn border-box border white bold flex full-width items-end"><span class="pl1 pb1">Пресс-кит</span></div></div>
      </nav>
    </div>

    <p id="tagline" class="h2 tagline white lg-col-8"><strong>{{ tagline }}</strong></p>
  </div>
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
.border-btn {
  min-height: 5em;
  min-width: 10em;
  transition: all 0.1s ease-in;
}

.border-btn:hover {
  background: white;
  color: black;
  cursor: pointer;
}

h1.big {
  font-size: 96px;
  font-weight: 900;
}

h1.medium {
  font-size: 72px;
  font-weight: 900;
}

.tagline {
  font-size: 36px;
  line-height: 48px;
}

.border {
  border: 3px solid white;
}
</style>
