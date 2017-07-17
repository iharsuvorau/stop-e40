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

</style>
