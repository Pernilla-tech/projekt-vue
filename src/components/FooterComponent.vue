<script>
  import NewsLetter from './NewsLetter.vue'

  export default {
    components: {
      NewsLetter
    }
  }
</script>

<template>
  <footer>
    <NewsLetter />
  </footer>
</template>

<style lang="scss">
  footer {
    background-color: white;
    opacity: 80%;

    p {
      padding-bottom: 0;
    }
  }
</style>
