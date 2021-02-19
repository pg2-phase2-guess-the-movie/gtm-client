<template>
  <!-- GAME VIEW -->
  <section class="game-view position-relative">
    <Tagname/>
    <div class="container full-height d-flex align-items-center justify-content-center">
      <!-- QUIZ CARD -->
      <div class="quiz-card row full-width">
        <div class="col-8 left-col d-flex flex-column justify-content-center">
          <h2>Guess the movie...</h2>
          <!-- EMOJI PLACE -->
          <h1 class="emoji mt-4">
            {{question.emoji}}
          </h1>
        </div>
        <div class="col right-col d-flex flex-column justify-content-center">
          <div class="login-form">
            <form @submit.prevent="checkAnswer">
              <div class="mb-3">
                <input type="text" v-model="answer" class="form-control form-custom" placeholder="Answer here..">
              </div>
              <button type="submit" class="btn btn-fullwidth btn-custom">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <!-- QUIZ CARD ENDS -->
    </div>
    <div class="footer-bar position-absolute bottom-0 full-width">
      <div class="container d-flex justify-content-center full-height">
        <div class="score d-flex align-items-center full-height">
          <h3 class="score">Your score: {{score}}</h3>
        </div>
      </div>
    </div>
    <quitbutton />
  </section>
  <!-- GAME VIEW ENDS -->
</template>

<script>
import Quitbutton from '../components/Quitbutton.vue'
import Tagname from '../components/Tagname'
export default {
  data () {
    return {
      answer: ''
    }
  },
  components: { Quitbutton, Tagname },
  name: 'Play',
  sockets: {
    question (payload) {
      this.$store.dispatch('question', payload)
    }
  },
  computed: {
    question () {
      return this.$store.state.question
    },
    score () {
      let score = 0
      this.$store.state.user.forEach(user => {
        if (user.name === localStorage.name) {
          score = user.score
        }
      })
      return score
    }
  },
  methods: {
    checkAnswer () {
      console.log(this.$store.state.question.movie_name)
      if ((this.answer).toLowerCase().trim() === (this.$store.state.question.movie_name).toLowerCase().trim()) {
        this.$store.dispatch('setScore', 10)
      }
      this.$socket.emit('setScore', this.$store.state.user)
      this.$socket.emit('start', this.$store.state.questionIndex)
    }
  }
}
</script>

<style>

</style>
