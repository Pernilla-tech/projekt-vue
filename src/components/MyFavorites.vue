<script>
  export default {
    props: ['items']
  }
</script>

<template>
  <ul>
    <li v-for="(item, key) in items">
      <div>{{ item }}</div>
      <button class="btn btn-primary" @click="$emit('remove-item', key)">
        Ta bort
      </button>
    </li>
  </ul>
</template>
