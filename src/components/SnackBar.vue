<template>
    <v-snackbar v-model="snackbar" :color="color" :multi-line="mode === 'multi-line'" :timeout="timeout" :vertical="mode === 'vertical'">
    {{ text }}
        <v-btn dark flat @click="snackbar = false">
            Close
        </v-btn>
    </v-snackbar>    
</template>

<script>
export default {
    name: 'SnackBar',
    data() {
        return {
            snackbar: false,
            color: '#63C394',
            mode: 'multi-line',
            timeout: 0,//timeout: 6000,
            text: 'Hello, I\'m a snackbar'
        }
    },
    mounted(){
        if(this.$store.getters.vxUser.isnewuser){
            this.text = "You have 1000 TDX in your account!"
            this.snackbar = true;
        }        
    }
}
</script>

