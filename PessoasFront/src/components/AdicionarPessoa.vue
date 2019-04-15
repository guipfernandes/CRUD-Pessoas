<template>
  <div id="body">
    <section class="container p-4">
        <div class="text-center">
          <h1>Cadastro de Pessoas</h1>
        </div>
        <b-card :header="(editMode ? 'Editar Pessoa - ' + pessoa.name : 'Adicionar nova Pessoa')"
          class="border-secondary text-primary">
          <div class="alert alert-success" role="alert" v-if="adicionado">
            <strong>Well done!</strong> Pessoa Adicionada.
          </div>
          <b-form @submit.prevent="savePessoa">
            <b-container>
              <b-row>
                <b-col>
                  <b-form-group class="mr-3">
                    <b-input-group prepend="Nome" class="mt-3">
                      <b-form-input v-on:focus="disableAlert" required v-model="pessoa.name"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group class="mr-1">
                    <b-input-group prepend="Email" class="mt-3">
                      <b-form-input v-on:focus="disableAlert" required v-model="pessoa.email" type="email"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <div class="w-100"></div>
                <b-col>
                  <b-form-group class="mr-3">
                    <b-input-group prepend="Endereço" class="mt-3">
                      <b-form-input v-on:focus="disableAlert" required v-model="pessoa.adress"></b-form-input>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col md="auto">
                  <b-form-group class="mr-1">
                    <b-input-group prepend="Sexo" class="mt-3" for="inputGroupSelectSexo">
                        <b-form-select
                          required v-model="pessoa.sex" id="inputGroupSelectSexo" :options="optionsSex">
                        </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <div class="mt-3 mr-1">
                <div class="w-100">
                  <button v-if="!editMode" type="submit" class="btn btn-primary btn-block mr-3">Adicionar</button>
                </div>
              </div>
            </b-container>
          </b-form>
          <div class="mt-3 mr-1">
                <div class="text-right">
                  <a href="#/listarpessoas">Ver a Lista de Pessoas</a>
                </div>
              </div>
        </b-card>
    </section>
  </div>
</template>

<script>
import request from '../services/request'
export default {
  name: 'AdicionarPessoa',
  data () {
    return {
      pessoa: {
        name: '',
        email: '',
        adress: '',
        sex: ''
      },
      Props: this.pessoaProps,
      optionsSex: ['M', 'F'],
      listaPessoas: [],
      editMode: false,
      adicionado: false
    }
  },
  props: ['pessoaProps'],
  async created () {
    this.refreshListaPessoas()
  },
  methods: {
    async refreshListaPessoas () {
      this.listaPessoas = (await request.getPessoas()).pessoas
    },
    async savePessoa () {
      if (this.editMode) {
        await request.updatePessoa(this.pessoa.id, this.pessoa)
        this.atualizado = true
      } else {
        await request.addPessoa(this.pessoa)
        this.adicionado = true
      }
      await this.refreshListaPessoas()
      this.editMode = false
      this.pessoa.name = ''
      this.pessoa.email = ''
      this.pessoa.adress = ''
      this.pessoa.sex = ''
    },
    disableAlert () {
      this.adicionado = false
      this.deletado = false
      this.atualizado = false
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    font-family: 'Proza Libre', sans-serif;
    color: #21139b;
  }
</style>
