<template>
  <nav class="flex flex-column items-center" :class="{white: isWhite}">
    <div class="mb1">
      <div class="border-btn border3 bold flex items-end" :class="{'border-white': isWhite, 'border-accent': !isWhite}">
        <span class="pl1 pb1 pr3">Петиция</span>
      </div>
    </div>
    <div class="mb1">
      <div class="border-btn border3 bold flex items-end" :class="{'border-white': isWhite, 'border-accent': !isWhite}">
        <span class="pl1 pb1 pr3">Меморандум</span>
      </div>
    </div>
    <div class="mb1">
      <div class="border-btn border3 bold flex items-end" :class="{'border-white': isWhite, 'border-accent': !isWhite}">
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

<style lang="scss" scoped>
$red: #FA5C77;

.border-accent {
  border-color: $red;
  color: $red;

  &:hover, &:focus {
    background: $red;
    color: white;
  }
}
</style>
