import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    score: 0
  },
  mutations: {
    setUser(state, {name, score}) {
      state.name = name
      state.score = score
    }
  },
  actions: {
    login(context, payload) {
      return axios({
        method: 'POST',
        data: {
          name: payload
        }
      })
        .then(user => {
          console.log(user);
          context.commit('setUser', user)
        })
        .catch(err => {
          console.log(err);
        })
    },
    setUser(context, payload) {

    }
  }
})
