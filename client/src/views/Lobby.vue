<template>
  <!-- LOBBY -->
  <section class="lobby color-fading">
    <div class="card" v-for="user in listUser" :key="user.name">
      <div class="card-body">
        {{user.name}}
      </div>
    </div>
    <div class="container full-height d-flex flex-column align-items-center justify-content-center">
      <button @click.prevent="start" class="btn btn-custom">START QUIZ</button>
      <h3 class="mt-5">Players join: {{listUser.length}}</h3>
    </div>
    <quitbutton />
    <tagname />
  </section>
  <!-- LOBBY ENDS -->
</template>

<script>
import Quitbutton from '../components/Quitbutton'
import Tagname from '../components/Tagname'
export default {
  name: 'Lobby',
  components: {
    Quitbutton
  },
  computed: {
    listUser () {
      return this.$store.state.user
    }
  },
  sockets: {
    user (payload) {
      this.$store.dispatch('setUser', payload)
    }
  },
  methods: {
    start () {
      this.$router.push('/play')
      this.$socket.emit('start', this.$store.state.questionIndex)
    }
  }
}
</script>
