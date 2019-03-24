<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" tag="a" to="/">
          <h4 class="title is-4">WinePair</h4>
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="main-nav" v-bind:class="{ 'is-active': mobileActive }" @click="mobileActive = !mobileActive">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="main-nav" class="navbar-menu" v-bind:class="{ 'is-active': mobileActive }">
        <div class="navbar-start">
          <router-link class="navbar-item" tag="a" to="/" active-class="is-active" exact>Home</router-link>
          <router-link class="navbar-item" tag="a" to="/about" active-class="is-active" exact>About</router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Pair</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Start with Wine</a>
              <a class="navbar-item">Start with Food</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobileActive: false
    }
  },
  name: 'MainNav'
}
</script>

<style scoped>
nav {
  border-bottom: 1px solid #eee;
}
</style>
