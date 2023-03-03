import { Module } from 'vuex'
import { accountLoginRequest } from '../../service/login/login'
interface ILoginState {
  token: string
  userInfo: any
}

export interface IRootState {
  name: string
  age: number
}
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
    }
  }
}

export default loginModule
