<script>
  import DrinkList from '../components/DrinkList.vue'

  export default {
    components: {
      DrinkList
    },
    data() {
      return {
        input: null,
        drinkImages1: '/drinkImages1.jpg',
        drinkImages2: '/drinkImages2.jpg',
        drinkImages3: '/drinkImages3.jpg',
        drinkImages4: '/drinkImages4.jpg'
      }
    },
    methods: {
      handleMyButton(input) {
        this.input = input
      }
    }
  }
</script>

<template>
  <header />
  <h1>Gin-drinkar</h1>
  <DrinkList />
  <div class="container">
    <div class="row">
      <div class="col">
        <img alt="" :src="drinkImages1" />
      </div>
      <div class="col">
        <img alt="" :src="drinkImages2" />
      </div>
      <div class="col">
        <img alt="" :src="drinkImages3" />
      </div>
      <div class="col">
        <img alt="" :src="drinkImages4" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  header {
    height: 100vh;
    background-image: url('/headerimage.jpg');
    background-size: cover;
    font-family: sans-serif;
  }
  h1 {
    margin: 50px;
  }

  img {
    width: 200px;
    padding: 20px;
    margin: 10px;
  }
</style>
