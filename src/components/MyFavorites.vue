<script>
  export default {
    emits: ['remove-item'],
    props: {
      items: {
        type: String,
        default: ''
      }
    }
  }
</script>

<template>
  <ul>
    <li v-for="(item, key) in items" :key="item.key">
      <div>{{ item }}</div>
      <button class="btn btn-primary" @click="$emit('remove-item', key)">
        Ta bort
      </button>
    </li>
  </ul>
</template>
