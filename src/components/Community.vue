<template>
    <div style="padding-left:13px; padding-top:10px;">
    <div v-for="item in items" :key="item.Id">
        <div class="card" style="width:97%;">
            <div class="card-header" style="padding:2px 5px;font-size: 18px; background-color:#E8E8E8;">
                <div style="float:right">
                    $125.50
                </div>
            </div>
            <div class="card-body" style="padding:3px 10px 0px 10px;">
                <div style="display:flex;padding-bottom:5px;">
                    <div style="font-size:20px;overflow: hidden;">
                        {{item.title}}                
                    </div>
                </div>
                <div style="display:flex">
                    <div><img :src="item.avatar" style="width:65px;padding-bottom:3px;"/></div>
                    <div style="padding-left:10px;padding-bottom:3px;">
                        <strong>{{item.user}}</strong>
                        <div class="box1 sb6" style="line-height:20px;">{{item.text}}</div>
                    </div>
                </div>
                <div style="color:#6c757d!important;">
                    2 days ago
                </div>                
            </div>
            <div class="card-footer text-muted" style="background-color:#F5F5F5; border-top:0px !important;padding:0px 10px;display:flex">                
                <div style="float:left; font-size: 24px; color: #9FABB6;padding-top:8px;">
                    <i class="far fa-thumbs-up"></i><span style="font-size:16px">12</span>&nbsp;
                    <i class="far fa-star"><span style="font-size:16px">22</span></i>
                </div>
                <div style="margin-left:auto;padding-bottom:15px;padding-top:8px;">
                    <button type="button" :class="`btn btn-outline-`+item.class" style="font-size: 14px; ">{{item.btntext}}</button> 
                </div>
            </div>
        </div>
        <div class="divider" style="padding-top:15px;"/>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        items: 
        [
          {avatar:require(`@/assets/images/avatar-chris.gif`),user:'@christufaro',btntext:'SELL MY TREND',class:'danger',title: '#gameofthrones',text: "awesome series, well worth the price."},
          {avatar:require(`@/assets/images/avatar-tx.gif`),user:'@anonymous',btntext:'BUY THIS TREND',class:'primary',title: '#SummerBBQ',text: "fucking garbage, buy my bags."},
          {avatar:require(`@/assets/images/avatar-chris.gif`),user:'@christufaro',btntext:'SELL MY TREND',class:'danger',title: '#Iamstarving',text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."},          
          {avatar:require(`@/assets/images/avatar-tx.gif`),user:'@anonymous',btntext:'BUY THIS TREND',class:'primary',title: '#storethatinyourassandshit',text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."},
          {avatar:require(`@/assets/images/avatar-chris.gif`),user:'@christufaro',btntext:'SELL MY TREND',class:'danger',title: '#liveatthegarden',text: `dog with fleas`}                    
        ]
      }
    }
  }
</script>

<style>
.box1 {  
  border: 2px solid #4da0ff;
  border-radius: .25rem;
  padding: 5px;
  background-color: #4da0ff;
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  color: white;
  position: relative;
}

.sb6:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 7px solid transparent;
  border-right: 7px solid #4da0ff;
  border-top: 7px solid #4da0ff;
  border-bottom: 7px solid transparent;
  left: -11px;
  top: 10px;
}
</style>
