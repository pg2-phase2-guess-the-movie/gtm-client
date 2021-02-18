<template>
  <div class="home">
    <InputPlayer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InputPlayer from '@/components/InputPlayer.vue'

export default {
  name: 'Home',
  components: {
    InputPlayer
  }
}
</script>
