<template>
  <div id="body">
    <section class="container p-4">
        <div class="text-center">
          <h1>Listar Pessoas</h1>
        </div>
        <div v-if="editMode">
            <b-card :header="(editMode ? 'Editar Pessoa - ' + pessoa.name : 'Adicionar nova Pessoa')"
            class="border-secondary text-primary">
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
                    <button v-if="editMode" type="submit" class="btn btn-primary btn-block mr-3">Atualizar</button>
                    </div>
                </div>
                </b-container>
            </b-form>
            </b-card>
        </div>
        <b-card header="Lista de Pessoas" class="mt-4 border-secondary table-responsive text-primary">
            <div class="alert alert-danger" role="alert" v-if="deletado">
                <strong>Oh God!</strong> Pessoa Deletada.
            </div>
            <div class="alert alert-info" role="alert" v-if="atualizado">
                <strong>You did that!</strong> Pessoa Atualizada.
            </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  Nome
                </th>
                <th>
                  Email
                </th>
                <th>
                  Endereço
                </th>
                <th>
                  Sexo
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pessoa in listaPessoas" v-bind:key="pessoa.id">
                <td>{{ pessoa.name }}</td>
                <td>{{ pessoa.email }}</td>
                <td>{{ pessoa.adress }}</td>
                <td>{{ pessoa.sex }}</td>
                <td class="text-right">
                  <b-button href="#" class="bg-success" @click="editPessoa(pessoa)">Editar</b-button> -
                  <b-button
                  class="bg-danger"
                  v-b-modal.deleteConfirm
                  @click="pessoaDeleteId=pessoa.id; showAlertDelete=true">Deletar</b-button>
                </td>
              </tr>
              <b-modal v-model="showAlertDelete" centered ok-title="Confirmar" cancel-title="Cancelar" id="deleteConfirm" title="Deletar Pessoa">
                <p class="my-4">Tem certeza que deseja excluir essa pessoa?</p>
                <div slot="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="showAlertDelete=false">Cancelar</button>
                    <button type="button" class="btn btn-primary" @click="deletePessoa(pessoaDeleteId); showAlertDelete=false">Confirmar</button>
                </div>
              </b-modal>
            </tbody>
          </table>
        </b-card>
      <footer class="footer fixed-bottom font-small">
        <div class="container text-center">
            <strong>Project CRUD Pessoas</strong>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
import request from '../services/request'
export default {
  name: 'ListarPessoas',
  data () {
    return {
      pessoa: {
        name: '',
        email: '',
        adress: '',
        sex: ''
      },
      optionsSex: ['M', 'F'],
      listaPessoas: [],
      editMode: false,
      deletado: false,
      atualizado: false,
      pessoaDeleteId: '',
      showAlertDelete: false
    }
  },
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
    async editPessoa (pessoa) {
      this.disableAlert()
      this.pessoa = Object.assign({}, pessoa)
      this.editMode = true
    },
    async deletePessoa (id) {
      this.disableAlert()
      if (this.editMode) {
        alert('Finalize a edição para poder deletar um registro!')
      } else {
        await request.deletePessoa(id)
        this.deletado = true
        await this.refreshListaPessoas()
      }
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
  .footer {
    color: #4682B4;
    background-color: #D3D3D3;
    bottom:0;
    width:100%;
}
</style>
