import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    score: 0,
    quizzes: []
  },
  mutations: {
    setUser (state, { name, score }) {
      state.name = name
      state.score = score
    },
    setQuizzes (state, payload) {
      state.quizzes = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'login',
        data: {
          name: payload
        }
      })
    },
    setUser (context, payload) {
      context.commit('setUser', payload)
    },
    getQuizzes (context, payload) {
      return axios({
        method: 'GET',
        url: '/quiz',
        headers: {
          name: localStorage.getItem('name')
        }
      })
    },
    setQuizzes (context, payload) {
      context.commit('setQuizzes', payload)
    }

  }
})
