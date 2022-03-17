<script>
  import LikeButton from './LikeButton.vue'

  export default {
    components: {
      LikeButton
    },
    props: {
      title: {
        type: String,
        required: true
      },
      instructions: {
        type: String,
        default: ''
      },
      images: {
        type: String,
        default: ''
      }
    }
  }
</script>

<template>
  <h1>{{ title }}</h1>
  <LikeButton />
  <p>{{ instructions }}</p>
  <img alt="picture of a drink" :src="images" />
</template>

<style lang="scss">
  img {
    width: 70%;
    margin-bottom: 5%;
    margin-top: 5%;
  }
</style>
