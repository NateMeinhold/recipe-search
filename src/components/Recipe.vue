<template>
  <div class="hello">

       <h2>Recipe Search</h2>  
     <p>
      <!-- <h4> Instructions:</h4> -->
      <h4>Pick an ingredient and type it in, let's find something good! </h4> 
       <!-- <router-link to="/reveal">What's for dinner?</router-link> -->
       </p>
       
    <form v-on:submit.prevent="findRecipe">
      <p> <input type="text" v-model="ingredient"> <button type="submit">Search</button></p>
    </form>
     <!-- <p>
      <h4>Tap the button to learn how to make it! </h4> 
       </p> -->
    <section class="results">
    <ul class="recipeCards" v-if="results && results.length > 0">
      
      <li class="card" v-for="(item, index) of results" :key="index">
       <!--the whole thing: {{item}} -->
        <button type="button" class="btn btn-secondary" v-on:click="getMeal(item)">{{item.strMeal}}</button>
        <!-- Image Thumbnail-->
        <div id="thumbnail">
        <img :src="item.strMealThumb" :alt="item.strMeal" height="200" width="200">
        </div>
      </li>
    </ul>
  

    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Recipes Found</h2>
      <p>Let's look for somthing else</p>
    <!-- </div> -->
<!--I think I'm not calling this right...need to do more research-->
    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">
        {{error.message}}
        
      </li>
    </ul>
    </div>
    </section>
    <!-- <h4>Tap the button to learn how to make it! </h4>  -->
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
     getMeal: function(item) {
       //when debuging {item} was recorded as "observer "
       this.$router.push({name: "reveal", params: {item}})
       //I thought that the issue might've been in the push but changing item to item.srMeal didn't work
     },
   findRecipe: function() {
     axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
       params: {
        i: this.ingredient
       }
     })
     .then(response => {
       this.results = response.data.meals;
       this.ingredient=""
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
  padding: 5;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.recipeCards {
   display: grid;
  margin: 0 auto;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(10 rem, auto);
  justify-content: center;
}

.results{
  margin: 0 50px;
   /* background-image: url('/assets/paperTiny.jpg'); */
}

.card{
  background-image: url("../assets/wallTiny.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #42b983
}

</style>
