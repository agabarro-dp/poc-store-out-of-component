<template>
  <div id="app">
    From component: {{ enabled }}
    <br>
    From constant: {{ constantEnabled }}
    <br>
    <button @click="toggleEnabled">Press me!</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { property } from './constants'

export default {
  name: 'App',
  data: () => ({
    constantEnabled: property
  }),
  computed: {
    ...mapState(['enabled'])
  },
  methods: {
    ...mapMutations(['toggleEnabled'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
