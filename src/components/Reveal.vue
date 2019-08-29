<template>
<body>
  <div class="hello">
  
    <form v-on:submit.prevent="findMeal">
      <!-- <p>
        Nothing here
        <input type="text" v-model="ingredient" />
        <button type="submit">Search</button>
      </p>-->
    </form>
<!-- need to get everything outside of this large UL -->
    <container class="instructions"  v-for="(item, index) of results" :key="index">
      
      <header>
          <h1>{{item.strMeal}} </h1>
          <h3>{{item.strCategory}} - {{item.strArea}}</h3>
        </header>

        <aside>
          <div class="photo">
            <!-- height="200" width="200" -->
            <img :src="item.strMealThumb" :alt="item.strMeal" /> 
          </div>
        </aside>

         <sidebar>
          <div class="ingredients">
            <h4>What you'll need</h4>
            <ul>
              <li>
                {{item.strIngredient1}}
              </li>
              <li>
                {{item.strIngredient2}}
              </li>
              <li>
                {{item.strIngredient3}}
               </li>
              <li>
                {{item.strIngredient4}}
                </li>
              <li>
                {{item.strIngredient5}}
               </li>
              <li>
                {{item.strIngredient6}}
                </li>
              <li>
                {{item.strIngredient7}}
                </li>
              <li>
                {{item.strIngredient8}}
                </li>
              <li>
                {{item.strIngredient9}}
                </li>
              <li>
                {{item.strIngredient10}}
                </li>
              <li>
                {{item.strIngredient11}}
                </li>
              <li>
                {{item.strIngredient12}}
                </li>
              <li>
                {{item.strIngredient13}}
                </li>
              <li>
                {{item.strIngredient14}}
                </li>
              <li>
                {{item.strIngredient15}}
                </li>
              <li>
                {{item.strIngredient16}}
                </li>
              <li>
                {{item.strIngredient17}}
                </li>
              <li>
                {{item.strIngredient18}}
                </li>
              <li>
                {{item.strIngredient19}}
                </li>
              <li>
                {{item.strIngredient20}}
                </li>
              <li>
                {{item.strIngredient21}}
              </li>
            </ul>
          </div>
        </sidebar>

         <main>
           <h4>How to make it</h4>
          <p>{{item.strInstructions}}</p>
        </main>
      <!-- </li> -->
      <footer>
    <h3>https://www.youtube.com/watch?v=:src="item.strMealThumb" :href="strYoutube"{{strYoutube}}</h3>
    <router-link to="/">Something Else?</router-link>
  </footer>
      
      </container>
      
      <!-- Doing some work with the old code, need to preserve in place -->
    <!-- <ul class="Instructions" v-if="results && results.length > 0">  -->
      
      <!-- <li class="card" v-for="(item, index) of results" :key="index">
        <header>
          <h1>{{item.strMeal}}</h1>
          <h3>{{item.strCategory}} - {{item.strArea}}</h3>
        </header> -->

        <!-- </ul> -->
        <!-- </li> I can close off the Header list here but I lose all my data in the process-->

        <!-- <aside>
          <div id="thumbnail">
            <img :src="item.strMealThumb" :alt="item.strMeal" height="200" width="200" />
          </div>
        </aside> -->

        <!-- <sidebar>
          <div class="ingredients">
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
            </ul>
          </div>
        </sidebar> -->
        

        <!-- <article>
          <p>{{item.strInstructions}}</p>
        </article>
      </li> -->
    <!-- </ul> -->

     <!-- <p>{{item.strInstructions}}</p> -->
  <!-- </div> -->
  <!-- <footer>
    <h3>link to Youtube need to loop in</h3>
    <router-link to="/">Something Else?</router-link>
  </footer> -->

  </div>
</body>
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
        //commented out the loop that wasn't working..
        // console.log(this.results);
        // meal["ingredient"] = [];
        // for (let meal of this.results) {
        //   meal["ingredient"] = []
        //   for (let i = 1; i <= 20; i++) {
        //     let ingredientVar = "strIngredient${i}";
        //     if (!meal[ingredientVar]) {
        //       meal.ingredients.push(meal[ingredientVar]);
        //     }
        //   }
        // }
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
/* h3 {
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
} */
/* .ingredients {
  background-color: bisque;
} */

ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
} 

header{
  /* background-color: #42b983; */
  /* background-image: url("../assets/paperTiny.jpg"); */
  background-image: url("../assets/wallTiny.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  float: center;
}

.photo{
 max-width: 30%;
  height: auto;
  padding-bottom: 60 rem;
  float: right;
  /* clear: left; */
   background-image: url("../assets/wallTiny.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.ingredients{
  background-image: url("../assets/wallTiny.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

main{
   background-image: url("../assets/wallTiny.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

footer{
   background-image: url("../assets/wallTiny.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
/* header {
  grid-column-start: 1;
  grid-column-end: 3;
}
sidebar {
  grid-row-start: 2;
  grid-row-end: 3;
}
footer {
  grid-column-start: 2;
  grid-column-end: 3;
} */

/* body {
  display: grid;
  grid-gap: 1em 1ex;
  grid-template-areas:
    'header aside '
    'sidebar  aside'
    'footer main ';
  grid-template-columns: 1fr 20ch;
  min-height: 100vh;
   background-color: #42b983;
} */

/* header {
  grid-area: header;
}

aside {
  grid-area: sidebar;
}

article {
  grid-area: main;
}

footer {
  grid-area: footer;
} */
</style>
