<template>
  <!-- RESULT -->
  <section class="result" id="result">
    <div class="container full-height d-flex align-items-start justify-content-center position-relative">
      <div class="mt-5">
        <h1>Congratulations!</h1>
      </div>
      <div class="pedestal position-absolute d-flex justify-content-center align-items-end bottom-0">
        <div class="second">
          <h4>Winner</h4>
          <img src="../assets/2.png" alt="">
        </div>
        <div class="first">
          <h4>Winner</h4>
          <img src="../assets/1.png" alt="">
        </div>
        <div class="third">
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
  created () {
    this.$confetti.start()
  }
}
</script>

<style>

</style>
