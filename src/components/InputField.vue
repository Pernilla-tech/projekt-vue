<script>
  export default {
    emits: ['updated'],
    props: {
      label: {
        type: String,
        default: ''
      },
      id: {
        type: [String, Number],
        required: true
      }
    },
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      v-model="value"
      @input="$emit('updated', value)"
    />
  </div>
</template>
