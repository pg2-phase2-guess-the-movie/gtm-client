<template>
  <!-- USER TAGNAME -->
  <div class="floating-tagname position-fixed">
    <!-- CARD TO LOOPING -->
    <div class="tagname-card" v-for="user in listUser" :key="user.name">
      <h4>name: {{user.name}}</h4>
      <h4>score: {{user.score}}</h4>
    </div>
    <!-- CARD TO LOOPING ENDS -->
  </div>
  <!-- USER TAGNAME ENDS -->
</template>

<script>
export default {
  name: 'Tagname',
  computed: {
    listUser () {
      return this.$store.state.user
    }
  }
}
</script>

<style>

</style>
