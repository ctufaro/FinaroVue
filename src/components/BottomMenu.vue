<template>
    <v-bottom-nav :value="true" fixed color="#e5e5e5" >
        <v-btn color="#63C394" flat to="/search">
            <span>Trends</span>
            <i class="fas fa-chart-line bottom-icons"></i>
        </v-btn>
        <v-btn color="#63C394" flat to="/myfeed">
            <span>Feed</span>
            <i class="fas fa-home bottom-icons"></i>
        </v-btn>
        <v-btn color="#63C394" flat to="/portfolio">
            <span>Portfolio</span>
            <i class="fas fa-chart-pie bottom-icons"></i>
        </v-btn>        
        <v-btn color="#63C394" flat to="/notifications">
            <span>Notifs</span>
            <i class="fas fa-bell bottom-icons"></i>
        </v-btn>       

    </v-bottom-nav>
</template>
<script>
export default {

}
</script>

<style>
.bottom-icons{
    font-size:24px;
    margin-bottom: 4px;
}
.v-bottom-nav{
    border-top-width: .01em !important;
    border-top-color: rgb(211, 215, 219) !important;
    border-top-style: solid;
}
</style>
