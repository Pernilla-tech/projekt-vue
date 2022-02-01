import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import DrinkDetailsView from './views/DrinkDetailsView.vue'
import SearchDrinksView from './views/SearchDrinksView.vue'
import ContactView from './views/ContactView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: DrinkDetailsView,
      path: '/drink/:id'
    },
    {
      component: SearchDrinksView,
      path: '/search'
    },
    {
      component: ContactView,
      path: '/contact'
    }
  ]
})
