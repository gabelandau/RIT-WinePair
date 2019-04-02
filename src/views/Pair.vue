<template>
  <div class="home content-wrapper">
    <div v-if="valid">
      <h2 class="title is-2 animated fadeInLeft fast">{{ title }}</h2>
      <p class="subtitle animated fadeInLeft fast">{{ subtitle }}</p>

      <div ref="container">
        <Dropdown :data="startingPoint" v-on:selected="update" id="1"></Dropdown>
      </div>

      <div class="box result-box" v-if="result">
        <p class="box-heading">Your wine selection is...</p>
        <p class="box-main">{{ selection.grape }}</p>
        <p class="box-detail">{{ selection.reason }}</p>
      </div>
    </div>
    <div v-if="!valid">
      <h2 class="title is-2 animated fadeInLeft fast">Invalid Mode!</h2>
      <p class="subtitle animated fadeInLeft fast">Sorry, your pairing mode isn't valid! Please return to the home page and check one of the pairing options.</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Dropdown from '@/components/Dropdown'
import data from '@/assets/data'

export default {
  name: 'home',
  components: { Dropdown },
  props: ['mode'],
  data () {
    return {
      currentId: 1,
      data: data,
      startingPoint: null,
      valid: true,
      result: false,
      title: '',
      selection: {
        grape: '',
        reason: ''
      }
    }
  },
  methods: {
    update (item) {
      this.result = false
      this.currentId++

      if (item.level && this.currentId != item.level) {
        for (let i = item.level; i < 10; i++) {
          try {
            let elem = document.getElementById(i)
            elem.parentNode.removeChild(elem)
          } catch (err) {
            break
          }
        }

        this.currentId = item.level
      }

      if (item.next) {
        // Create instance of Vue component
        let ComponentClass = Vue.extend(Dropdown)
        let instance = new ComponentClass({ propsData: { data: item.next } })

        // Mount, set attributes, and append to DOM
        instance.$mount()
        instance.$el.id = this.currentId
        instance.$on('selected', this.update)
        this.$refs.container.appendChild(instance.$el)
      }

      if (item.result) {
        this.result = true
        this.selection = item.result
      }
    }
  },
  beforeMount () {
    if (this.mode == 'food') {
      this.title = 'Start With Food'
      this.subtitle = 'Pick your meal and we\'ll pick you out a wine to go with it!'
      this.startingPoint = this.data.food
    } else if (this.mode == 'wine') {
      this.title = 'Start With Wine'
      this.subtitle = 'Pick your wine and we\'ll pick you give some choices for dinner to go along!'
      this.startingPoint = this.data.wine
    } else {
      this.valid = false
    }
  }
}
</script>

<style>
.result-box {
  margin-top: 20px;
  background-color: #FA7C91;
  color: #fff;
}

.box-detail {
  font-size: 1.1em;
}

.box-main {
  font-size: 2.3em;
  margin-bottom: 20px;
}

.box-heading {
  font-size: 1.3em;
}
</style>