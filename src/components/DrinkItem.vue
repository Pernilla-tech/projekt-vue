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
  <img alt="" :src="images" />
</template>
