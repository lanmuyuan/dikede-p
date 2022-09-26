import { getCode, login } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { Message } from 'element-ui'
const state = {
  token: getToken(),
  codeData: {
    codeImg: '',
    random: ''
  }

}
const mutations = {
  SET_LOGINCODE(state, payload) {
    state.codeData.codeImg = payload.codeImg
    state.codeData.random = payload.random
  },
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  REMOVE_TOKEN(state) {
    state.token = null
    removeToken()
  }
}
const actions = {
  async asyncGetCode({ commit }) {
    const random = Math.random()
    const { data } = await getCode(random)
    const imgUrl = window.URL.createObjectURL(data)
    commit('SET_LOGINCODE', { codeImg: imgUrl, random })
  },
  async asyncLogin({ commit }, logindata) {
    try {
      const { data } = await login(logindata)
      if (!data.success) {
        throw data.msg
      }
      console.log(data)
      Message({ message: '登录成功', type: 'success' })
      commit('SET_TOKEN', data.token)
    } catch (error) {
      console.dir(error)
      Message({ message: error, type: 'error' })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

