<template>
  <!-- LOGIN -->
  <section class="login">
    <div class="container full-height d-flex flex-column align-items-end justify-content-center">
      <div class="hero-text">
        <h1>Guess <br>the movie</h1>
        <img src="../assets/icon_emoji.png" alt="">
      </div>
      <div class="login-form mt-5 mb-5">
        <form @submit.prevent="login">
          <div class="mb-3">
            <input v-model="name" type="text" class="form-control form-custom" placeholder="Your Nickname..">
          </div>
          <button type="submit" class="btn btn-fullwidth btn-custom">I'M PLAY</button>
        </form>
      </div>
    </div>
  </section>
  <!-- LOGIN ENDS -->
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      name: ''
    }
  },
  sockets: {
    connect () {
      console.log('--------------connected')
    }
  },
  methods: {
    login () {
      this.$socket.emit('login', { name: this.name })
      this.$router.push('/lobby')
      localStorage.setItem('name', this.name)
      // this.$store.dispatch('login', this.name)
      //   .then(user => {
      //     const payload = user.data.newPlayer
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    }
  }
}
</script>
