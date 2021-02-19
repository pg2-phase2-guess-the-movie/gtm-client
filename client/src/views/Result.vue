<template>
  <!-- RESULT -->
  <section class="result" id="result">
    <div class="container full-height d-flex flex-column align-items-center justify-content-start position-relative">
      <div class="mt-5">
        <h1>Congratulations!</h1>
      </div>
      <div class="mt-5">
        <button @click.prevent="quit" class="btn btn-custom">QUIT GAME</button>
      </div>
      <div class="pedestal position-absolute d-flex justify-content-center align-items-end bottom-0">
        <div class="second">
          <!-- Second place winner -->
          <h4>Winner</h4>
          <img src="../assets/2.png" alt="">
        </div>
        <div class="first">
          <!-- First place winner -->
          <h4>Winner</h4>
          <img src="../assets/1.png" alt="">
        </div>
        <div class="third">
          <!-- Third place winner -->
          <h4>Winner</h4>
          <img src="../assets/3.png" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- RESULT ENDS -->
</template>

<script>
export default {
  name: 'Result',
  methods: {
    quit () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    this.$confetti.start()
  }
}
</script>

<style>

</style>
