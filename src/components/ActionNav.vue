<template>
  <nav class="action-nav flex" :class="{white: isWhite}">
    <div class="col-4 xs-col-12 pr1 pb1">
      <div class="border-btn border-box bold flex flex-auto items-end" :class="{'bold-border-white': isWhite, 'bold-border-black': !isWhite}">
        <span class="pl1 pb1 pr3">Петиция</span>
      </div>
    </div>
    <div class="col-4 xs-col-12 pr1 pb1">
      <div class="border-btn border-box bold flex flex-auto items-end" :class="{'bold-border-white': isWhite, 'bold-border-black': !isWhite}">
        <span class="pl1 pb1 pr3">Меморандум</span>
      </div>
    </div>
    <div class="col-4 xs-col-12 pb1">
      <div class="border-btn border-box bold flex flex-auto items-end" :class="{'bold-border-white': isWhite, 'bold-border-black': !isWhite}">
        <span class="pl1 pb1 pr3">Пресс-кит</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['isWhite']
}
</script>

<style scoped>
/* .action-nav {
  position: absolute;
  top: 10.5em;
  right: 6em;
} */

.border-btn {
  min-height: 5em;
  /* min-width: 10em; */
  transition: all 0.1s ease-in;
}

</style>
