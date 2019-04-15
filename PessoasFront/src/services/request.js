import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, url, data) {
    return client({
      method,
      url: url,
      data
    }).then(req => {
      return req.data
    })
  },
  getPessoas () {
    return this.execute('get', '/pessoas/')
  },
  getPessoa (id) {
    return this.execute('get', `/pessoas/${id}`)
  },
  addPessoa (data) {
    return this.execute('post', '/pessoas/', data)
  },
  updatePessoa (id, data) {
    return this.execute('put', `/pessoas/${id}`, data)
  },
  deletePessoa (id) {
    return this.execute('delete', `/pessoas/${id}`)
  }

}
