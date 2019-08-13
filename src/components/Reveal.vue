<template>
  <div class="hello">

       <h2>Recipe Reveal</h2>
     <p>
       <router-link to="/">Home</router-link>
       </P>
       
    <form v-on:submit.prevent="findMeal">
      <p>Nothing here <input type="text" v-model="ingredient"> <button type="submit">Search</button></p>
    </form>
    
    <ul class="Instructions" v-if="results && results.length > 0">
      
      <li class="card" v-for="(item, index) of results" :key="index">
        <h1>{{item.strMeal}}</h1>
        <h3>{{item.strCategory}} - {{item.strArea}}</h3>
        <div id="thumbnail">
        <img :src="item.strMealThumb" :alt="item.strMeal" height="200" width="200">
        </div>
        <ul>
          <!--make list items to add ingredients {{item.strIngredient1}}-->
          </ul>
        <p> {{item.strInstructions}}</p>
        <h3> link to Youtube </h3> 
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
//import form the first page, then set params with mainly just title to pull in data from 1st call


// import axios from "axios";
// export default {
//   name: "Meal",
//   data () {
//     return {
//       posts: [],
//       errors: [],
//       blog: null,
//       weather: null
//     };
//   },
//   created () {
//     this.item = this.$route.params.blog
//     console.log(this.blog)


 import axios from 'axios'
  //turn API call into {{}} mounted call for recipe
 export default {
      name: 'Reveal',
   data () {
     return {
       results: null,
       errors: [],
       ingredient: null,
     }
   }, 
   methods: {
   findMeal: function() {
    //  https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata ...i think that "s" is the param this time
     axios.get('https://www.themealdb.com/api/json/v1/1/search.php', {
       params: {
        s: this.meal
       }
     })
     .then(response => {
       this.results = response.data.meals;
       this.meal=""
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
