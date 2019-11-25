<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" fixed>
      <div class="container">
        <b-navbar-brand href="#">
          <router-link class="nav-link" to="/home">
          <i class="fa fa-user" style="font-size:24px"></i>
          Home
          </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="nav-link" to="/adicionarpessoa">Adicionar Pessoa</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/listarpessoas">Listar Pessoas</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<style scoped>
  .header {
    background-color: #000080
  }
</style>
