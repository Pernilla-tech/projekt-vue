<script>
  import FooterComponent from './components/FooterComponent.vue'

  export default {
    components: {
      FooterComponent
    }
  }
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/">
              Hem
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/search">
              Sök drink
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/contact">
              Kontakt
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <main class="container">
    <RouterView />
  </main>

  <footer>
    <FooterComponent />
  </footer>
</template>

<style lang="scss">
  body {
    text-align: center;
  }

  form {
    display: inline-block;
    padding: 10px;
    margin: 20px;
    margin-bottom: 0;
    width: 400px;
    text-align: center;

    input {
      margin: 10px;
      padding: 5px;
    }
  }

  nav {
    background-color: white;
    box-shadow: 0 0 25px 0 grey;
    opacity: 80%;
  }
</style>
