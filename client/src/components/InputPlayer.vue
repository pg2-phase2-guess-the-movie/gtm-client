<template>
  <div class="all-page">
  <div class="input-player">
  <b-card no-body class="overflow-hidden" style="max-width: 540px; margin-top:150px; margin-bottom:150px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToRlQwTof45AEKh4Q3HARlW4S6tV9zS1kVg&usqp=CAU" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Welcome To GTM">
          <b-card-text>
           <div class="form-group">
            <label for="example1">Input Your Name</label>
            <input type="text" id="example1" class="form-control">
           </div>
          </b-card-text>
          <button class="btn btn-success">Get Started</button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
  </div>
</template>

<script>
export default {
  name: 'InputPlayer',
  data () {
    return {
      file: undefined
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-page{
  background-image: url('http://1.bp.blogspot.com/-agP85KBmiaU/UFVmvAMObcI/AAAAAAAAAVg/5FvzBhU7sQs/s1600/Amazing-Hypnotic-Animation-10.gif');
  background-color: black;
}
.input-player{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
