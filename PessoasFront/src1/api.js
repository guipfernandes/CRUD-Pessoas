import Vue from 'vue'
import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:8081/',
  json: true
})

export default {
  async execute (method, resource, data) {
    // inject the accessToken for each request
    let accessToken = await Vue.prototype.$auth.getAccessToken()
    return client({
      method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  getPosts () {
    return this.execute('get', '/pessoas')
  },
  getPost (id) {
    return this.execute('get', `/pessoas/${id}`)
  },
  createPost (data) {
    return this.execute('post', '/pessoas', data)
  },
  updatePost (id, data) {
    return this.execute('put', `/pessoas/${id}`, data)
  },
  deletePost (id) {
    return this.execute('delete', `/pessoas/${id}`)
  }
}
