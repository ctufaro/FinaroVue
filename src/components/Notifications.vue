<template>
    <div class="animate bounceIn">
        <v-list three-line>
            <v-list-tile v-for="item in items" :key="item.key" avatar>
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}
                        <span class="time">9:07 am</span>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.did }}</v-list-tile-sub-title>                    
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
  export default {
    name:'Notifications',
    data () {
      return {       
        items: [
          { title: 'Sign-up Bonus', did:'You just received 1000 trndx points!', icon:'fas fa-money-bill-wave-alt', key:1 }
        ]
      }
    }
  }
</script>

<style>
.time{
    float:right;
    font-size: small;
}
</style>
