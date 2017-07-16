<template>
  <div id="app" class="flex">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    htmlDecode: (nodeName, input) => {
      let el = document.createElement(nodeName)
      el.innerHTML = input
      return el.childNodes.length === 0 ? '' : el
    }
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
