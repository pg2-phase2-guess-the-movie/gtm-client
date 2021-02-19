<template>
  <!-- QUIT GAME -->
  <div class="floating-button position-fixed">
    <button @click.prevent = "quit" class="btn btn-custom">QUIT GAME</button>
  </div>
  <!-- QUIT GAME ENDS -->
</template>

<script>
export default {
  name: 'Quit-button',
  methods: {
    quit () {
      this.$socket.emit('logout', { name: localStorage.name })
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
