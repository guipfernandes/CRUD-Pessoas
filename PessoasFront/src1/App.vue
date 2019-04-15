<template>
  <div id="app">
    <section class="container p-2">
      <div>
        <b-nav tabs>
          <b-nav-item>Home</b-nav-item>
        </b-nav>
      </div>
        <div class="card">
          <div class="card-header">
            Adicionar nova pessoa
          </div>
          <div class="card-body">
            <form>
                <b-container>
                  <b-row>
                    <b-col>
                      <div class="form-group mr-3">
                        <b-input-group prepend="Nome" class="mt-3">
                          <b-form-input type="text"></b-form-input>
                        </b-input-group>
                      </div>
                    </b-col>
                    <b-col>
                      <div class="form-group mr-3">
                        <b-input-group prepend="Email" class="mt-3">
                          <b-form-input type="email"></b-form-input>
                        </b-input-group>
                      </div>
                    </b-col>
                    <div class="w-100"></div>
                    <b-col>
                      <div class="form-group mr-3">
                        <b-input-group prepend="Endereço" class="mt-3">
                          <b-form-input type="text"></b-form-input>
                        </b-input-group>
                      </div>
                    </b-col>
                    <b-col md="auto">
                      <div class="form-group mr-3">
                        <div class="input-group mt-3">
                          <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Sexo</label>
                          </div>
                            <select class="custom-select" id="inputGroupSelect01">
                              <option selected></option>
                              <option value="M">M</option>
                              <option value="F">F</option>
                            </select>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                  <div class="mt-3">
                  <div class="w-100">
                    <button type="submit" class="btn btn-outline-primary btn-block">Add</button>
                  </div>
                </div>
                </b-container>
            </form>
          </div>
        </div>
      <div class="footer fixed-bottom">
        <footer class="page-footer font-small">
          <div class="container text-center">
            <div class="footer-copyright text-center py-2">
              <p class="text-muted credit">
                <strong>Project CRUD Pessoas</strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import PessoasManager from '@/components/PessoasManager'
import api from '@/api'
export default {
  name: 'app',
  components: {
    PessoasManager
  },
  methods: {
    async refreshPosts () {
      this.loading = true
      this.posts = await api.getPosts()
      this.loading = false
    },
    async populatePostToEdit (post) {
      this.model = Object.assign({}, post)
    },
    async savePost () {
      if (this.model.id) {
        await api.updatePost(this.model.id, this.model)
      } else {
        await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()
    },
    async deletePost (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.id === id) {
          this.model = {}
        }
        await api.deletePost(id)
        await this.refreshPosts()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
