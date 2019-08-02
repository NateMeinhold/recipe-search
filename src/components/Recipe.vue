<template>
  <div class="hello">

       <h2>Recipe Search</h2>
     <p>
       <!-- <router-link to="URL">What's for dinner?</router-link> -->
       </P>
       
    <form v-on:submit.prevent="findRecipe">
      <p>Find recipes related to: <input type="text" v-model="ingredient"> <button type="submit">Search</button></p>
    </form>
    
    <ul class="results" v-if="results && results.length > 0">
      
      <li class="item" v-for="(item, index) of results" :key="index">
        {{item}}
      </li>
    </ul>

    
    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Recipes Found</h2>
      <p>Let's look for somthing else</p>
    </div>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
 import axios from 'axios'

 export default {
      name: 'Recipe',
   data () {
     return {
       results: null,
       errors: [],
       ingredient: null,
     }
   }, 
   methods: {
   findRecipe: function() {
     axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
       params: {
        i: this.ingredient
       }
     })
     .then(response => {
       this.results = response.data.meals;
       this.ingredient=" "
     })
     .catch(error => {
       this.errors.push(error);
     });
   }
 }
    
}
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
