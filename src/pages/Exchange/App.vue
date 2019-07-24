<template>
    <div class="wrapper">        
        <vue-headful title="trndx Exchange" description=""/>

        <!-- Slideout Panels  -->
        <SlideOutPanel v-if="!this.isMobile()"/>
        <slideout-panel v-if="this.isMobile()"></slideout-panel>
        
        <!-- Page Content  -->
        <div id="content">
            <TopMenu @toggleSidebar="toggleSidebar"/>
            <div class="bottom-pad" />
            <div class="row justify-content-center h-100" >
                <!-- Search Results  -->
                <div class="col-md-4 searchcolumn">                 
                    <router-view name="secondpane" @trendClick="trendClicked"/>
                </div>
                <!-- Main Pane  -->
                <div class="col-md-5 pricecolumn" v-bind:class="{ 'sidebar-offcanvas': sidebarOffCanvas, 'slide-in': slideIn}">
                    <TrendPane @goback="goBack"/>
                </div>
                <div class="col-md-3" v-if="!this.isMobile()"></div>
                <BottomMenu v-if="this.isMobile()"/>
             </div>
        </div>

        <!-- Snackbar -->
        <SnackBar/>
    </div>
</template>

<script>
import TrendPane from '@/components/TrendPane.vue'
import TopMenu from '@/components/TopMenu.vue'
import BottomMenu from '@/components/BottomMenu.vue'
import SlideOutPanel from '@/components/SlideOutPanel.vue'
import SnackBar from '@/components/SnackBar.vue'
import uiMixin from '@/mixins/uimixin.js'

export default {
  name: 'Home',
  mixins: [uiMixin],
  components: {
    TrendPane,
    TopMenu,
    BottomMenu,
    SlideOutPanel,
    SnackBar
  },
  data: () => ({
    isActive:false,
    sidebarOffCanvas:false,
    slideIn:false    
  }),  
  methods: {
      trendClicked: function(trend){
        this.$store.commit('changeTrend', trend);
        this.getPriceVolData(trend);
        this.getTrendData(trend);             
      },
      async getPriceVolData(trend){
        let loader = this.showLoader();        
        let sName = trend.Name.replace("#", "%23");
        this.axios.get(`${this.$hostname}/api/pricevol/${sName}`).then(response => {
            this.$store.commit('changeTrendHistory', {'Prices':response.data.Prices,  'Times':response.data.Times});
        }).then(()=>{
            this.hideLoader(loader);
            if (this.isMobile()){
                this.slideIn = true;
            }             
        });
      },
      async getTrendData(trend){
        let loader = this.showLoader();
        let sName = trend.Name.replace("#", "%23");
        this.axios.get(`${this.$hostname}/api/tweets/${sName}`).then(response => {
            this.$store.commit('changeTrendVol', {'TweetVolume':response.data.TweetVolume, 'LoadDate':response.data.LoadDate, 'AvgSentiment':response.data.AvgSentiment});
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