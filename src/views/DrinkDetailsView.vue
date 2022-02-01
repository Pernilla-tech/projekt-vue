<script>
  import axios from 'axios'
  import DrinkItem from '../components/DrinkItem.vue'

  export default {
    components: {
      DrinkItem
    },
    created() {
      axios
        .get(
          'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' +
            this.$route.params.id
        )
        .then((response) => {
          console.log(response)
          this.drink = response.data.drinks[0]
        })
    },
    data() {
      return {
        drink: null
      }
    }
  }
</script>

<template>
  <div v-if="drink != null">
    <DrinkItem
      :title="drink.strDrink"
      :instructions="drink.strInstructions"
      :images="drink.strDrinkThumb"
    />
  </div>
</template>
