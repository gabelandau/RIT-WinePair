<template>
  <div class="home content-wrapper">
    <h2 class="title is-2 animated fadeInLeft fast">Welcome!</h2>
    <p class="subtitle animated fadeInLeft fast">Welcome to WinePair! We'll help you make the right decision on what foods to pair with the right wines. Click below on one of the starting points to get your pairing!</p>
    <div class="columns animated fadeInUp fast">
      <div class="column"><button class="button is-primary is-large is-fullwidth main-button">Start with Wine</button></div>
      <div class="column"><button class="button is-primary is-large is-fullwidth main-button">Start with Food</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.main-button {
  height: 75px !important;
}
</style>