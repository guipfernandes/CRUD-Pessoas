<template>
  <div class="Home">
    <div class="text-center">
      <div class="py-4">
        <img src="../assets/logo.png" alt="Logo" width=300 height=350>
      </div>
      <h1>{{ msg }}</h1>
      <h2>Let's start</h2>
      <ul>
        <li>
          <a href="#/adicionarpessoa">
            Adicionar Pessoa
          </a>
        </li>
        <li>
          <a href="#/listarpessoas">
            Listar Pessoas
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Project CRUD Pessoas'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #00eeff;
}
</style>
