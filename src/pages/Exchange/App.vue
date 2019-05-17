<template>
    <div class="wrapper">        
        <vue-headful title="trndx Exchange" description=""/>
        <!-- Preloader -->
        <div id="loader-wrapper" :style="[this.showLoader ? {'display':'block'} : {'display':'none'}]">             
            <div id="loader">
                <v-progress-circular :size="70" :width="7" color="#0079FF" indeterminate></v-progress-circular>
            </div>
        </div>

        <!-- Sidebar  -->
        <nav id="sidebar" :class="{ active: isActive }">
            <div class="sidebar-header profile">
                <div style="flex:40%;">
                    <a href='/'>
                        <img src="@/assets/images/avatar-chris.gif" style="width:65px;padding-left:5px;"/>
                    </a>
                </div>
                <div style="flex:60%;">
                    <a href='/' id="sidebar-logo">
                        <img src="@/assets/images/trndxlogo-white.png" style="width:145px;padding-left:25px;"/>
                    </a>
                </div>
            </div>

            <ul class="list-unstyled components">
                <!--<li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">My stocks</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>-->
                <li>
                    <a href="#">My stocks <span class="float-right circle">22</span></a>                    
                </li>
                <li>
                    <a href="#">Buy stocks</a>
                </li>                                                
                <li>                    
                    <a href="#">Pending orders</a>
                </li>
                <li>
                    <a href="#">Insights</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">History</a>
                </li>                                                                                                
            </ul>
        </nav>

        <!-- Page Content  -->
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding:7px 0px 1px 0px;">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="hamburger" @click="toggleSidebar">
                        <i class="fas fa-bars"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    <img src="@/assets/images/trndxlogo-blue.png" style="width:30%"/>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="row justify-content-center h-100" >
                <!-- Search Results  -->
                <div class="col-md-3 searchcolumn">                    
                    <SearchResults @trendClick="trendClicked"/>
                </div>
                <!-- Main Pane  -->
                <div class="col-md-5 pricecolumn" v-bind:class="{ 'sidebar-offcanvas': sidebarOffCanvas, 'slide-in': slideIn}">
                    <TrendPane @goback="goBack" />
                </div>
                <div class="col-md-4 misccolumn">                    
                    
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import SearchResults from '@/components/SearchResults.vue'
import TrendPane from '@/components/TrendPane.vue'

export default {
  name: 'Home',
  components: {
    SearchResults,
    TrendPane
  },
  data: () => ({
    isActive:false,
    showLoader:false,
    sidebarOffCanvas:false,
    slideIn:false,
    selectedTrend:{name:null, price: null, prices:[0,0,0,0], color:null},
  }),  
  methods: {
      isMobile: function() {
          return window.matchMedia("only screen and (max-width: 768px)").matches;
      },
      trendClicked: function(trend){
        this.selectedTrend.name = trend.Name;
        this.selectedTrend.price = trend.PriceText;
        this.selectedTrend.prices = trend.Prices;
        this.selectedTrend.color = trend.Color;
        if (this.isMobile()){
            this.slideIn = true;         
        }        
      },
      toggleSidebar: function(){
          this.isActive = !this.isActive;
      },
      goBack:function(){
          if(this.$route.name === 'Order Form'){
            this.$router.go(-1)
          } else {
            this.slideIn=false
          }          
      }
  },
  created(){
    if (this.isMobile()) this.sidebarOffCanvas = true;
  }
}
</script>

<style src="@/assets/css/exchange-template.css"></style>
<style scoped src="@/assets/css/pane-slide.css"></style>
<style scoped src="@/assets/css/exchange.css"></style>

