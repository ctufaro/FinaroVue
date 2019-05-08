<template>
    <div class="wrapper">
        <vue-headful title="trndx Exchange" description=""/>
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header profile">
                <div style="flex:40%;">
                    <a href='/'>
                        <img src="@/assets/images/avatar.png" style="width:65px;padding-left:5px;"/>
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
                    <button type="button" id="sidebarCollapse" class="btn btn-primary">
                        <i class="fas fa-align-justify"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    <img src="@/assets/images/trndxlogo-blue.png" style="width:40%"/>
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
                <div class="col-md-9 pricecolumn" v-bind:class="{ 'sidebar-offcanvas': sidebarOffCanvas, 'slide-in': slideIn}">
                    <TrendPane @close="slideIn=false" />
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
  props: {
  },
  data: () => ({
    sidebarOffCanvas:false,
    slideIn:false,
  }),  
  methods: {
      isMobile: function() {
          return window.matchMedia("only screen and (max-width: 768px)").matches;
      },
      trendClicked: function(trend){
        if (this.isMobile()){
            this.slideIn = true;         
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