<template>
    <span>{{ padZero(days) }}:{{ padZero(hours) }}:{{ padZero(minutes) }}:{{ padZero(seconds) }}</span>
</template>

<script>
export default {
    name:'TrendClock',
    mounted() {
        window.setInterval(() => {            
            this.now = Math.trunc((new Date()).getTime() / 1000);
            this.date = Math.trunc(Date.parse(this.dateprop) / 1000);            
        },1000);
    },
    data:() => ({
        now: null,
        date: null
    }),
    props:{
        dateprop:String
    },    
    computed: {
        seconds() {
            return (this.now - this.date) % 60;
        },
        minutes() {
            return Math.trunc((this.now - this.date) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.now - this.date) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.now - this.date) / 60 / 60 / 24);
        }
    },
    methods:{
        padZero(val){
            return (val < 10 ? '0' : '') + val;
        }
    }
}
</script>

<style>

</style>
