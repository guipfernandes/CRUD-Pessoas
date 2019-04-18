import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pessoa: {},
    editMode: '',
    pessoaAtualizada: '',
    listaPessoa: []
  },
  mutations: {
    changePessoa (state, pessoa) {
      state.pessoa = pessoa
    },
    changeEditMode (state, editMode) {
      state.editMode = editMode
    },
    changePessoaAtualizada (state, pessoaAtualizada) {
      state.pessoaAtualizada = pessoaAtualizada
    },
    changeListaPessoa (state, listaPessoa) {
      state.listaPessoa = listaPessoa
    }
  },
  getters: {
    pessoa: state => state.pessoa,
    editMode: state => state.editMode,
    pessoaAtualizada: state => state.pessoaAtualizada,
    listaPessoa: state => state.listaPessoa
  }
})
