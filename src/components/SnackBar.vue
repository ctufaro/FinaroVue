<template>
    <v-snackbar v-model="snackbar" :top="position=='top'" :bottom="position=='bottom'" :color="color" :multi-line="mode === 'multi-line'" :timeout="timeout" :vertical="mode === 'vertical'">
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
            snackbar: this.$store.getters.vxSnackBar.show,
            color: this.$store.getters.vxSnackBar.color,
            mode: 'multi-line',
            timeout: 0,//timeout: 6000,
            text: this.$store.getters.vxSnackBar.text,
            position: this.$store.getters.vxSnackBar.position,
        }
    },
    mounted(){
        if(this.$store.getters.vxUser.isnewuser){
            //this.text = "You have 1000 TDX in your account!"
            //this.snackbar = true;
        }        
    }
}
</script>

