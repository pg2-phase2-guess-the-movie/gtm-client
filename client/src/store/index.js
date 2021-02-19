import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    questionIndex: 0,
    question: {}
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    question (state, payload) {
      state.question = payload
    },
    setScore (state, payload) {
      state.user.forEach(user => {
        if (user.name === localStorage.name) {
          user.score += payload
        }
      })
    },
    addIndex (state, payload) {
      state.questionIndex += payload
    }
  },
  actions: {
    setUser (context, payload) {
      context.commit('setUser', payload)
    },
    question (context, payload) {
      context.commit('question', payload)
    },
    setScore (context, payload) {
      context.commit('setScore', payload)
      context.commit('addIndex', 1)
    }
  }
})
