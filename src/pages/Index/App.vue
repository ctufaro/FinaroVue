<template>
  <v-app>
    <span>
      <vue-headful title="trndx" description=""/>
      <div class="menu">
        <v-btn color="info" href="/exchange.html">Visit Exchange</v-btn>
        <v-btn color="success"  v-on:click.prevent="domesomething()">Sign Up</v-btn>
      </div>
      <div class="main-content">
        <img src="@/assets/images/trndxlogo.png"/>
      </div>
    </span>
    <v-footer class="ftr">
      <v-spacer></v-spacer>
      <div></div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods:{
    domesomething:function(){
      this.$swal({
        type: 'success',
        title: 'Success!',
        text: 'Excellent Work!'
      });      
    }
  }
}
</script>

<style>
span{
  background-color: #0079FF;
}

img {
  width:20em;
}

@media (max-width: 768px) {
  img {
    width:15em;
  }
}

.menu{
  position:fixed;
  right:0;
  padding-right: 10px;
  padding-top: 10px;
}

.main-content {
  display: grid;
  height: 95vh;
  margin: 0;
  place-items: center center;
}

.ftr{
  background-color: #2196F7 !important;
}
</style>



