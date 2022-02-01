<script>
  import InputField from '../components/InputField.vue'
  import SubmitButton from '../components/SubmitButton.vue'

  export default {
    components: {
      InputField,
      SubmitButton
    },
    data() {
      return {
        text: '',
        form: {
          submitted: false,
          name: '',
          phone_number: '',
          email: ''
        }
      }
    }
  }
</script>

<template>
  <h1>Kontakta oss</h1>
  <form v-if="!form.submitted">
    <div class="mb-3">
      <input-field
        label="Namn"
        id="name"
        @updated="form.name = $event"
        class="form-control"
      />
    </div>
    <div>{{ form.name }}</div>
    <div class="mb-3">
      <input-field
        label="Telefon"
        id="phone_number"
        @updated="form.phone_number = $event"
        class="form-control"
      />
    </div>
    <div>{{ form.phone_number }}</div>
    <div class="mb-3">
      <input-field
        label="Mail"
        id="email"
        @updated="form.email = $event"
        class="form-control"
      />
    </div>
    <div>{{ form.email }}</div>

    <div>
      <textarea
        class="form-control"
        id="textarea"
        v-model="text"
        placeholder="Skriv ditt meddelande här..."
        rows="3"
        max-rows="6"
      />
    </div>

    <submit-button @form-submitted="form.submitted = true" />
  </form>
  <div v-else><p>Tack för att du kontaktat oss!</p></div>
</template>

<style lang="scss" scoped>
  h1 {
    margin: 25px;
  }
  textarea {
    margin-bottom: 20px;
  }
</style>
