<template>
  <v-app>
    <span>
      <vue-headful title="trndx - own the trend" description=""/>
      <div class="menu">
        <v-btn color="info" href="/exchange.html">Visit Exchange</v-btn>
        <v-btn color="success"  v-on:click.prevent="domesomething()">Sign Up</v-btn>
      </div>
      <div class="main-content">
        <img src="@/assets/images/trndxmainlogo.png"/>
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

<style src="@/assets/css/index.css"></style>



