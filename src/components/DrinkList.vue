<script>
  import axios from 'axios'

  export default {
    created() {
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
        .then((response) => {
          this.drinks = response.data.drinks
        })
    },
    data() {
      return {
        drinks: null
      }
    }
  }
</script>

<template>
  <ol>
    <li :key="drink.idDrink" v-for="drink in drinks">
      <router-link class="link-secondary" :to="`/drink/${drink.idDrink}`">
        {{ drink.strDrink }}
      </router-link>
    </li>
  </ol>
</template>
