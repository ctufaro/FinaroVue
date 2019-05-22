<template>
    <div style="padding-left:13px; padding-top:10px;">
    <div v-for="item in items" :key="item.Id">
        <div class="card" style="width:97%;">
            <div class="card-body" style="padding:10px;">
                <div style="display:flex;padding-bottom:5px;">
                    <div style="font-size:20px;overflow: hidden;">
                        {{item.title}}                
                    </div>
                    <div style="font-size:20px;margin-left:auto;padding-left:10px;">
                        <button type="button" class="btn btn-outline-success" style="width: 75px;font-size: 14px; ">$125.50</button>               
                    </div>                    
                </div>
                <div style="display:flex">
                    <div><img src="@/assets/images/avatar-chris.gif" style="width:65px;padding-bottom:15px;"/></div>
                    <div style="padding-left:10px;">
                        <div class="box1 sb6" style="line-height:20px;">{{item.text}}</div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-muted" style="background-color:#F5F5F5; border-top:0px !important;padding:0px 10px;display:flex">
                <div style="padding-top:6px;">2 days ago</div>
                <div style="font-size: 24px;color: #9FABB6;margin-left:auto;">
                    <i class="far fa-thumbs-up"></i>
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
        items: [
          {
            title: '#gameofthrones',
            text: "awesome series, well worth the price."
          },
          {
            title: '#SummerBBQ',
            text: "fucking garbage, buy my bags."
          },
          {
            title: '#Iamstarving',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          }
          ,
          {
            title: '#storethatinyourass',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          }
          ,
          {
            title: '#liveatthegarden',
            text: `dog with fleas`
          }                    
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
.sb6:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #4da0ff;
  border-top: 10px solid #4da0ff;
  border-bottom: 10px solid transparent;
  left: -20px;
  top: 8px;
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
  left: -14px;
  top: 10px;
}
</style>
