<template>
  <div id="app">
    <MainNav></MainNav>
    <router-view/>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'

export default {
  components: { MainNav }
}
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
