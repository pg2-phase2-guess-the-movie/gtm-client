<template>
  <!-- GAME VIEW -->
  <section class="game-view position-relative">
    <div class="container full-height d-flex align-items-center justify-content-center">
      <!-- QUIZ CARD -->
      <div class="quiz-card row full-width">
        <div class="col-8 left-col d-flex flex-column justify-content-center">
          <h2>Guess the movie...</h2>
          <!-- EMOJI PLACE -->
          <h1 class="emoji mt-4">
            🐺🏛️💰
          </h1>
        </div>
        <div class="col right-col d-flex flex-column justify-content-center">
          <div class="login-form">
            <form>
              <div class="mb-3">
                <input type="email" class="form-control form-custom" placeholder="Answer here..">
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
          <h3 class="score">Your score: 0</h3>
        </div>
      </div>
    </div>
    <quitbutton />
  </section>
  <!-- GAME VIEW ENDS -->
</template>

<script>
import Quitbutton from '../components/Quitbutton.vue'
export default {
  components: { Quitbutton },
  name: 'Play'
}
</script>

<style>

</style>
