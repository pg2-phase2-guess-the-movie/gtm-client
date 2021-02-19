<template>
  <!-- QUIT GAME -->
  <div class="floating-button position-fixed">
    <button @click.prevent="quit" class="btn btn-custom">QUIT GAME</button>
  </div>
  <!-- QUIT GAME ENDS -->
</template>

<script>
export default {
  name: 'Quit-button',
  methods: {
    quit () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
