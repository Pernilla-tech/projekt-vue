<template>
  <button @click="$store.commit('increment', 2)" class="btn btn-primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart-fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  </button>
  <span>
    <p>{{ $store.state.counter }} likes</p>
  </span>
</template>

<!-- <script>
  import { Store } from '@/store'
</script> -->

<style lang="scss" scoped>
  button {
    margin: 20px;
  }
</style>
