<template>
    <div style="padding-left:13px; padding-top:10px;">
        <div class="btn-group w-100" style="width:97% !important; padding-bottom:3px;">
            <button type="button" class="btn btn-outline-secondary" :class="{ active: selected }" @click="filtertab('Feed')">Feed</button>
            <button type="button" class="btn btn-outline-secondary" @click="filtertab('Sellers')">Sellers</button>
            <button type="button" class="btn btn-outline-secondary" @click="filtertab('Buyers')">Buyers</button>
        </div>
        <div v-for="item in items" :key="item.Id">
            <div class="card animate bounceIn" style="width: 97%;">
                <div class="card-body" style="padding-bottom: 10px;">
                    <div style="display: flex; padding-bottom: 0px;">
                        <div>
                            <img :src="item.avatar" style="width: 65px;">
                        </div>
                        <div style="width: 100%; padding-left: 5px;">
                            <span :class="`badge badge-`+item.class" style="font-size:14px;" :style="[item.type == 'Feed' ? {'display':'inline'} : {'display':'none'}]">{{item.text}}</span>
                            <div style="font-size: 24px; font-weight: 400; color: black; margin-top: -5px;">
                                {{item.title}}
                            </div>
                            <div style="margin-top: -8px;font-size: 16px;">                                
                                <div style="color: #1C1C1C !important;" v-html="item.user" />                                                                 
                            </div>
                            <div style="margin-top: -5px;font-size: 14px;">
                                <div style="color: #6B757B !important;">1 day ago</div>                                
                            </div>                            
                        </div>
                    </div>
                    <div v-if="tabName!='Feed'" style="float:right;margin-top:-10%;margin-right:-8px;" @click.prevent="goToTrend(item.title)">
                        <button type="button" @click.prevent="goToTrend(item.title)">
                            <span aria-hidden="true"><i class="fas fa-chevron-right"></i></span>                
                        </button>
                    </div>
                    <div style="display: flex; padding-bottom: 0px; padding-top: 5px;">
                        <div style="float: left; font-size: 24px; color: #9CAAB5; width: 100%;">
                            <i class="far fa-thumbs-up"></i><span style="font-size: 16px;">12</span>&nbsp;
                            <i class="far fa-star"><span style="font-size: 16px;">22</span></i>
                        </div>
                        <div style="float: right; font-size: 24px !important;font-weight:400;" :class="`text-`+item.class">
                            $1.25
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted" style="background-color: #F7F7F7; border-top: 0px !important; padding: 0px 10px;" :style="[item.type == 'Feed' ? {'display':'none'} : {'display':'block'}]">
                    <div style="margin-left: auto; padding-bottom: 8px; padding-top: 8px;">
                        <button type="button" :class="`btn btn-outline-`+item.class" style="font-size: 14px; width: 100%;">{{item.btntext}}</button>
                    </div>
                </div>
            </div>
            <div class="divider" style="padding-top:15px;"/>
        </div>
    </div>
</template>
<script>
  import uiMixin from '@/mixins/uimixin.js'
  
  let loader = null;

  export default {
    mixins: [uiMixin],
    data: () => ({
        selected:true,
        saveditems:[],
        tabName: 'Feed',        
        items: 
        [
          {avatar:require(`@/assets/images/avatar-chris.gif`),type:'Buyers',user:'@christufaro',btntext:'SELL MY TREND',class:'danger',title: '#newyorkyankees',text: "awesome series, well worth the price."},
          {avatar:require(`@/assets/images/avatar-kathleen.jpg`),type:'Sellers',user:'@katlyco',btntext:'BUY THIS TREND',class:'success',title: '#mindhunter',text: "fucking garbage, buy my bags."},
          {avatar:require(`@/assets/images/avatar-rosie.jpg`),type:'Buyers',user:'@mickey',btntext:'SELL MY TREND',class:'danger',title: '#loldollz',text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."},          
          {avatar:require(`@/assets/images/avatar-teddy.jpg`),type:'Sellers',user:'@teddyboom',btntext:'BUY THIS TREND',class:'success',title: '#tonkatrucks',text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."},
          {avatar:require(`@/assets/images/avatar-harrison.jpg`),type:'Buyers',user:'@chacha',btntext:'SELL MY TREND',class:'danger',title: '#poopoodiaper',text: `dog with fleas`},
          {avatar:require(`@/assets/images/avatar-harrison.jpg`),type:'Feed',user:`@chacha`,btntext:'SELL MY TREND',class:'danger',title: '#gameofthrones',text: 'sold'},
          {avatar:require(`@/assets/images/avatar-rosie.jpg`),type:'Feed',user:'@mickey',btntext:'BUY THIS TREND',class:'success',title: '#thebachelor',text: 'purchased'},
          {avatar:require(`@/assets/images/avatar-teddy.jpg`),type:'Feed',user:'@teddyboom',btntext:'BUY THIS TREND',class:'success',title: '#cincodemayo',text: 'purchased'},
          {avatar:require(`@/assets/images/avatar-kathleen.jpg`),type:'Feed',user:'@katlyco',btntext:'BUY THIS TREND',class:'success',title: '#fatherofthebride',text: 'purchased'}
        ]
    }),    
    methods:{
      filtertab(t){        
        this.items = this.saveditems.filter(w => w.type == t);
        this.selected = false;
        this.tabName = t;        
      },
      goToTrend(t){
        if(this.isMobile()) this.$parent.slideIn = true;        
        this.$router.push({name:"My Feed Trend", query: { name: t }});
      }
    },
    created: function(){
      this.saveditems = this.items;           
    },
    mounted: function(){      
      this.items = this.saveditems.filter(w => w.type == 'Feed');
      loader = this.showLoader();    
    },
    updated:function(){
        this.hideLoader(loader);
    }
  }
</script>

<style>

</style>
