import Vue from 'vue'
import App from './App.vue'
//ask Becky about the bootstrap-vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
