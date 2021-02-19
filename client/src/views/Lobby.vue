<template>
  <!-- LOBBY -->
  <section class="lobby color-fading">
    <div class="container full-height d-flex flex-column align-items-center justify-content-center">
      <button class="btn btn-custom">START QUIZ</button>
      <h3 class="mt-5">Players join: 0</h3>
    </div>
    <quitbutton />
  </section>
  <!-- LOBBY ENDS -->
</template>

<script>
import Quitbutton from '../components/Quitbutton'
export default {
  name: 'Lobby',
  components: {
    Quitbutton
  }
}
</script>

<style>

</style>
