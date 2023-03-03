import { createStore } from 'vuex'
import login from './login/login'
interface IRootState {
  name: string
  age: number
}
const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
