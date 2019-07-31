<template>
    <v-snackbar v-model="show" :top="position=='top'" :bottom="position=='bottom'" :color="color" :multi-line="mode === 'multi-line'" :timeout="timeout" :vertical="mode === 'vertical'">
    {{ text }}
        <v-btn dark flat @click="close">
            Close
        </v-btn>
    </v-snackbar>    
</template>

<script>
export default {
    name: 'SnackBar',
    data() {
        return {
            mode: 'multi-line',
            timeout: 0,//timeout: 6000,
        }
    },
    methods:{
        close(){
            this.$store.commit('closeSnack');
        }
    },
    computed:{
        color: function(){
            let type = this.$store.getters.vxSnackBar.type
            if(type == 'success')
                return '#63C394'
            else if(type == 'danger')
                return '#EF4139'
            else 
                return '#6B757B'
        },
        position:function(){
            return this.$store.getters.vxSnackBar.position;
        },
        show: function () {
            return this.$store.getters.vxSnackBar.show
        },
        text: function(){
            return this.$store.getters.vxSnackBar.text
        }
    },
    mounted(){
        if(this.$store.getters.vxUser.isnewuser){
            this.text = "Welcome! You have 1000 TDX in your account"
            this.$store.commit('openSnack', {type:'success',  text:'You have 1000 TDX in your account!', position:'bottom'});
        }        
    }
}
</script>

