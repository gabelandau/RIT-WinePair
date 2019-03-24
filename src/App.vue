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
