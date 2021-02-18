import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
  },
  actions: {
    login(context, payload) {
      return axios({
        method: 'POST',
        data: {
          name: payload
        }
      })
    }
  }
})
