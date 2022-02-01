<script>
  import DrinkItem from '../components/DrinkItem.vue'
  import MyFavorites from '../components/MyFavorites.vue'
  import axios from 'axios'

  export default {
    components: {
      DrinkItem,
      MyFavorites
    },
    data() {
      return {
        drink: null,
        drink_name: '',
        item: '',
        items: []
      }
    },
    methods: {
      addItem() {
        this.items.push(this.item)
        this.item = ''
      },
      removeItem(itemKey) {
        this.items.splice(itemKey, 1)
      },
      onClick() {
        console.log('hej')
        this.drink = null
        axios
          .get(
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
              this.drink_name
          )
          .then((response) => {
            console.log(response)
            if (response.data.drinks != null) {
              this.drink = response.data.drinks[0]
            }
          })
      }
    }
  }
</script>

<template>
  <div id="wrapper">
    <h1>Sök drink</h1>

    <input v-model="drink_name" type="search" />

    <input
      type="button"
      class="btn btn-primary"
      @click="onClick"
      value="Sök drink"
    />

    <div v-if="drink != null">
      <DrinkItem
        :title="drink.strDrink"
        :instructions="drink.strInstructions"
        :images="drink.strDrinkThumb"
      />
    </div>

    <input
      type="text"
      placeholder="Lista för mina favoritdrinkar"
      v-model="item"
    />

    <button class="btn btn-primary" @click.prevent="addItem">Lägg till</button>

    <MyFavorites :items="items" @remove-item="removeItem" />
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    margin: 70px;
  }
  ul {
    list-style: none;
    margin: 20px;
  }
  input {
    margin-right: 20px;
  }
</style>
