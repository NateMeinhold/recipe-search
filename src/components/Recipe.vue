<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      This is where the text goes
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
       <h2>Recipe Search</h2>
     <p>
       <router-link to="/homophones">What's for dinner?</router-link>
       </P>
       
    <form v-on:submit.prevent="findWords">
      <p>Find Recipes related to: <input type="text" v-model="ingredient"> <button type="submit">Search</button></p>
    </form>
    
    <ul class="results" v-if="results && results.length > 0">
      <!-- //need to fix this to be recipes -->
      <li class="item" v-for="(item, index) of results" :key="index">
        <p><strong>{{item.word}}</strong></p>
        <p>{{item.score}}</p>
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

// Add API Call
// <!--<script>
// // import axios from 'axios'

// // export default {
// //   name: 'Rhymesaurus',
// //   data () {
// //     return {
// //       results: null,
// //       errors: [],
// //       phrase: '',
// //       rhyme: ''
// //     }
// //   }, 
// //   methods: {
// //   findWords: function() {
// //     axios.get('https://api.datamuse.com/words', {
// //       params: {
// //         ml: this.phrase,
// //         rel_rhy: this.rhyme
// //       }
// //     })
// //     .then(response => {
// //       this.results = response.data;
// //     })
// //     .catch(error => {
// //       this.errors.push(error);
// //     });
// //   }
// // }
    
// // }
// // </script>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
