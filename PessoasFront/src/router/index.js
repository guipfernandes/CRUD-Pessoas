import Home from '../components/Home'
import AdicionarPessoa from '../components/AdicionarPessoa'
import ListarPessoas from '../components/ListarPessoas'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/adicionarpessoa',
    name: 'adicionar-pessoa',
    component: AdicionarPessoa
  },
  {
    path: '/listarpessoas',
    name: 'listar-pessoa',
    component: ListarPessoas
  }
]
export default routes
