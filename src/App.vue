<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/veg.jpg">
    <Recipe msg=""/>
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue'

export default {
  name: 'app',
  components: {
    Recipe
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-image: url('./assets/cut-board1.jpg')
}
</style>
