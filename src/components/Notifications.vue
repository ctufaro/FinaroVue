<template>
    <div class="animate bounceIn">
        <v-list two-line>
            <v-list-tile v-for="item in items" :key="item.title" avatar>
                <v-list-tile-avatar @click="snackbar = true">
                    <img :src="item.avatar">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.did }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
        <v-snackbar v-model="snackbar" :color="color" :multi-line="mode === 'multi-line'" :timeout="timeout" :vertical="mode === 'vertical'">
        {{ text }}
            <v-btn dark flat @click="snackbar = false">
                Close
            </v-btn>
        </v-snackbar>
    </div>  
</template>

<script>
  export default {
    name:'Notifications',
    data () {
      return {
        snackbar: false,
        color: '#63C394',
        mode: 'multi-line',
        timeout: 6000,
        text: 'Hello, I\'m a snackbar',          
        items: [
          { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', did:'Went long on #NewYorkYankees',icon:'fas fa-money-bill-wave-alt' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', did:'Shorted #strangerthings',icon:'fas fa-paper-plane' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', did:'Sold for 1000 trndx points',icon:'fas fa-paper-plane' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', did:'Has an outstanding portfolio',icon:'fas fa-tachometer-alt' }
        ]
      }
    }
  }
</script>

<style>

</style>
