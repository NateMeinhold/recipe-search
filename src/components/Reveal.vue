<template>
  <div class="hello">
    <h2>Recipe Reveal</h2>
    <p>
      <router-link to="/">Home</router-link>
    </p>

    <form v-on:submit.prevent="findMeal">
      <p>
        Nothing here
        <input type="text" v-model="ingredient" />
        <button type="submit">Search</button>
      </p>
    </form>

    <ul class="Instructions" v-if="results && results.length > 0">
      <li class="card" v-for="(item, index) of results" :key="index">
        <h1>{{item.strMeal}}</h1>
        <h3>{{item.strCategory}} - {{item.strArea}}</h3>
        <div id="thumbnail">
          <img :src="item.strMealThumb" :alt="item.strMeal" height="200" width="200" />
        </div>
        <ul>
          <li>
            {{item.strIngredient1}}
            {{item.strIngredient2}}
            {{item.strIngredient3}}
            {{item.strIngredient4}}
            {{item.strIngredient5}}
            {{item.strIngredient6}}
            {{item.strIngredient7}}
            {{item.strIngredient8}}
            {{item.strIngredient9}}
            {{item.strIngredient10}}
            {{item.strIngredient11}}
            {{item.strIngredient12}}
            {{item.strIngredient13}}
            {{item.strIngredient14}}
            {{item.strIngredient15}}
            {{item.strIngredient16}}
            {{item.strIngredient17}}
            {{item.strIngredient18}}
            {{item.strIngredient19}}
            {{item.strIngredient20}}
            {{item.strIngredient21}}
            {{item.strIngredient22}}
            {{item.strIngredient23}}
            {{item.strIngredient24}}
            {{item.strIngredient25}}
          </li>
          <!--make list items to add ingredients {{item.strIngredient1}}-->
        </ul>
        <p>{{item.strInstructions}}</p>
        <h3>link to Youtube</h3>
      </li>
    </ul>

    <div class="no-results" v-else-if="results && results.length === 0">
      <h2>No Recipes Found</h2>
      <p>Let's look for somthing else</p>
    </div>

    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for="(error, index) of errors" :key="index">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>


import axios from "axios";

export default {
  name: "Reveal",
  data() {
    return {
      results: null,
      errors: [],
      ingredient: null
    };
  },
  async created() {
    this.item = this.$route.params.item;
    console.log(this.item);
    console.log(this.item.strMeal);
    await axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php", {
        params: {
          s: this.item.strMeal
        }
      })
      .then(response => {
        this.results = response.data.meals;
        // console.log(this.results);
        // meal["ingredient"] = [];
        for (let meal of this.results) {
          meal["ingredient"] = []
          for (let i = 1; i <= 20; i++) {
            let ingredientVar = "strIngredient${i}";
            if (!meal[ingredientVar]) {
              meal.ingredients.push(meal[ingredientVar]);
            }
          }
        }
        console.log(this.results);
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
};
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
