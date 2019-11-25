<template>
  <div id="body">
    <section class="container p-4">
        <div class="text-center">
          <h1>Listar Pessoas</h1>
        </div>
        <div v-if="$store.getters.editMode">
            <adicionar-pessoa/>
        </div>
        <b-card header="Lista de Pessoas" class="mt-4 border-secondary table-responsive text-primary">
            <div class="alert alert-danger" role="alert" v-if="deletado">
                <strong>Oh God!</strong> Pessoa Deletada.
            </div>
            <div class="alert alert-info" role="alert" v-if="$store.getters.pessoaAtualizada">
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
              <tr v-for="pessoa in $store.getters.listaPessoa" v-bind:key="pessoa.id">
                <td>{{ pessoa.name }}</td>
                <td>{{ pessoa.email }}</td>
                <td>{{ pessoa.adress }}</td>
                <td>{{ pessoa.sex }}</td>
                <td class="text-right">
                  <b-button
                  href="#"
                  class="bg-success"
                  @click="editPessoa(pessoa)">Editar</b-button> -
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
      this.$store.commit('changeListaPessoa', this.listaPessoas)
    },
    async editPessoa (pessoa) {
      this.disableAlert()
      this.$store.commit('changePessoa', pessoa)
      this.$store.commit('changeEditMode', true)
    },
    async deletePessoa (id) {
      this.disableAlert()
      if (this.$store.getters.editMode) {
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
      this.$store.commit('changePessoaAtualizada', false)
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
