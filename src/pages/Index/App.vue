<template>
  <v-app>
    <span>
      <vue-headful title="trndx - own the trend" description=""/>
      <div class="menu">
        <v-btn outline color="white" v-on:click.prevent="goTo('/exchange.html/#/search')">Visit Exchange</v-btn>
        <v-btn outline color="white"  v-on:click.prevent="domesomething()">Sign Up</v-btn>
      </div>
      <div class="main-content animate bounceIn">
        <img src="@/assets/images/trndxmainlogo-white.png" />
      </div>
    </span>
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
    },
    goTo:function(url){
      window.location.href = url;
    }
  }
}
</script>

<style src="@/assets/css/index.css"></style>



