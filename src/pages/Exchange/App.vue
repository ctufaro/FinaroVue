<template>
    <div class="wrapper">        
        <vue-headful title="trndx Exchange" description=""/>

        <!-- Slideout Panels  -->
        <SlideOutPanel v-if="!this.isMobile()"/>
        <slideout-panel v-if="this.isMobile()"></slideout-panel>
        
        <!-- Page Content  -->
        <div id="content">
            <v-toolbar fixed color="white"  :dense=true v-if="this.isMobile()">
              <v-avatar size="35" @click="toggleSidebar">
                  <img src="@/assets/images/avatar-chris.gif" alt="Chris">
              </v-avatar>
              <v-toolbar-title class="page-title text-secondary ml-2">{{this.$route.name}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon class="text-secondary">
                  <v-icon>fas fa-search</v-icon>
              </v-btn>
              <v-btn icon class="text-secondary">
                  <v-icon>fas fa-plus-circle</v-icon>
              </v-btn>              
          <!--<v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>-->
            </v-toolbar>
            <div class="bottom-pad" />
            <div class="row justify-content-center h-100" >
                <!-- Search Results  -->
                <div class="col-md-4 searchcolumn">                 
                    <router-view name="secondpane" @trendClick="trendClicked"/>
                </div>
                <!-- Main Pane  -->
                <div class="col-md-5 pricecolumn" v-bind:class="{ 'sidebar-offcanvas': sidebarOffCanvas, 'slide-in': slideIn}">
                    <TrendPane @goback="goBack" :selected-trend="this.selectedTrend"/>
                </div>
                <div class="col-md-3 misccolumn">                    
                </div>
                <FloatingAction v-if="false"/>
                <BottomNavigation v-if="this.isMobile()"/>
             </div>
        </div>
    </div>
</template>

<script>
import TrendPane from '@/components/TrendPane.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import FloatingAction from '@/components/FloatingAction.vue'
import SlideOutPanel from '@/components/SlideOutPanel.vue'
import uiMixin from '@/mixins/uimixin.js'

export default {
  name: 'Home',
  mixins: [uiMixin],
  components: {
    TrendPane,
    BottomNavigation,
    SlideOutPanel,
    FloatingAction
  },
  data: () => ({
    isActive:false,
    sidebarOffCanvas:false,
    slideIn:false,
    selectedTrend:{name:null, price: null, prices:[0,0,0,0], color:null},
    trendVolSent:{tweetVolume:[], loadDate:[], avgSentiment:[]}
  }),  
  methods: {
      trendClicked: function(trend){
        this.selectedTrend.name = trend.Name;
        this.selectedTrend.price = trend.PriceText;
        this.selectedTrend.prices = trend.Prices;
        this.selectedTrend.color = trend.Color;
        this.getTrendData();             
      },
      async getTrendData(){
        let loader = this.showLoader();
        let sName = this.selectedTrend.name.replace("#", "%23");
        this.axios.get(`${this.$hostname}/api/tweets/${sName}`).then(response => {
            this.trendVolSent.tweetVolume = response.data.TweetVolume;
            this.trendVolSent.loadDate = response.data.LoadDate;
            this.trendVolSent.avgSentiment = response.data.AvgSentiment;  
        }).then(()=>{
            this.hideLoader(loader);
            if (this.isMobile()){
                this.slideIn = true;
            }             
        });
      },
      toggleSidebar: function(){
          if (this.isMobile()){
            this.isActive = !this.isActive;
            this.$showPanel({component: SlideOutPanel, width: 275, openOn: 'left',                
              keepAlive: true, //enable Vue's keep-alive functionality
              props: {isActive:true}
            })            
          }
      },
      goBack:function(){
          if(this.$route.name === 'Order Form'){
            this.$router.go(-1)
          } 
          else if(this.$route.name === 'My Feed Trend'){
            this.slideIn=false;
            this.$router.go(-1)
          }
          else {
            this.slideIn=false;
            this.$router.push('search');
          }          
      }
  },
  created(){
    if (this.isMobile()) this.sidebarOffCanvas = true;
  }
}
</script>

<style src="@/assets/css/exchange.css"></style>
<style src="@/assets/css/bootbuttons.css"></style>
<style src="@/assets/css/exchange-template.css"></style>
<style src="@/assets/css/pane-slide.css"></style>

<style>
@media (max-width: 768px) {
.bottom-pad {
    padding-bottom:48px !important;
  }
}
</style>