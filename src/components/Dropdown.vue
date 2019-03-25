<template>
  <div class="field animated fadeInUp fast">
    <p class="dropdown-title">{{ data.title }}</p>
    <div class="control">
      <div class="select is-large" >
        <select v-on:change="update()" v-model="select">
          <option disabled selected value="0">Please Choose</option>
          <option v-for="item in data.items" :key="item.item" :value="item">{{ item.item }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      select: 0
    }
  },
  methods: {
    update () {
      this.$emit('selected', this.select)
    }
  }
}
</script>

<style>
.dropdown-title {
  font-size: 1.2em;
}
</style>