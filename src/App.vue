<template>
  <div id="app">
    <img alt="Veggie Image" src="./assets/veg.jpg">
    
     <router-view/>
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue'
// import Home from './components/Home.vue'

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
  background-image: url('./assets/cut-board1small.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
