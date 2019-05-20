<template>
<div style="padding-left:13px; padding-top:10px;">
    <div v-for="item in items" :key="item.Id">
        <div class="card" style="width:97%;">
            <div class="card-body" style="padding:10px;">
              <div>
                {{item.title}}
              </div>
                <div style="display:flex">
                    <div><img src="@/assets/images/avatar-chris.gif" style="width:65px;padding-bottom:15px;"/></div>
                    <div style="padding-left:10px;">                        
                        <p class="card-text" style="line-height:20px;">{{item.text}}</p>
                    </div>
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
            title: '#Brunchthisweekend',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          },
          {
            title: '#SummerBBQ',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          },
          {
            title: '#Ouioui',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          }
          ,
          {
            title: '#Ouioui',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          }
          ,
          {
            title: '#Ouioui',
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Eget sociis nat."
          }                    
        ]
      }
    }
  }
</script>

<style>

</style>
