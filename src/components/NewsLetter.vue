<script>
  export default {
    data() {
      return {
        mail: '',
        first_name: '',
        last_name: '',
        message: 'Tack för att du prenumererar,',
        error: false,
        submitted: false
      }
    },
    watch: {
      mail() {
        this.validate()
      }
    },
    computed: {
      fullName() {
        return this.first_name + ' ' + this.last_name
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.submitted = true
      },
      validate() {
        if (this.mail.includes('@')) {
          this.error = false
        } else {
          this.error = true
        }
      }
    }
  }
</script>

<template>
  <form @submit="onSubmit">
    <div>
      <h2>Prenumerera på vårt nyhetsbrev</h2>
      <p>Få dom senaste nyheterna om drinkar varje vecka</p>
    </div>

    <div>
      <form class="row g-3">
        <input
          v-model="first_name"
          type="text"
          placeholder="Förnamn"
          name="first_name"
        />
        <input
          v-model="last_name"
          type="text"
          placeholder="Efternamn"
          name="last_name"
        />
        <input v-model="mail" type="text" placeholder="Epost" name="mail" />
      </form>
    </div>
    <div>
      <input
        type="submit"
        class="btn btn-primary"
        value="Prenumerera"
        :disabled="mail.length === 0"
      />
      <p id="error" v-if="error == true">Din epost måste innehålla ett @</p>
      <p id="message" v-if="this.submitted == true && error == false">
        {{ message }} {{ fullName }}
      </p>
    </div>
  </form>
</template>

<style lang="scss">
  #error {
    font-size: 18px;
    font-weight: bold;
    color: red;
    padding: 10px;
    padding-bottom: 25px;
  }

  #message {
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    padding-bottom: 25px;
  }
</style>
