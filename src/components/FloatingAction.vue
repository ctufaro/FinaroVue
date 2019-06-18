<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition"><!--width="500"-->
      <template v-slot:activator="{ on }">
        <v-btn color="#63C394" :fixed="true" dark fab bottom right v-on="on">
          <v-icon>add</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Add A Trend
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Trend Name*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name:"FloatingAction",
    data () {
        return {
            dialog: false
        }
    },
    created(){
        const el = document.createElement('div');
        el.setAttribute('data-app', true);
        document.body.appendChild(el);
    }
}
</script>

<style>
.grey.lighten-2 {
    background-color: #63C394 !important;
    border-color: #63C394 !important;
}

.headline{
    color:white !important;
}
</style>
