import Vue from 'vue'
import Router from 'vue-router'
import Recipe from '@/components/Recipe'
import Reveal from '@/components/Reveal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/reveal',
      name: 'reveal',
      component: Reveal
    },
  ]
})