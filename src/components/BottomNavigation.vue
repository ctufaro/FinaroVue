<template>
    <v-bottom-nav :value="true" fixed color="#e5e5e5">
        <v-btn color="#63C394" flat value="recent">
            <span>Recent</span>
            <v-icon>history</v-icon>
        </v-btn>
        <v-btn  color="#63C394" flat value="favorites">
            <span>Favorites</span>
            <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn color="#63C394" flat value="nearby">
            <span>Nearby</span>
            <v-icon>place</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>
<script>
export default {

}
</script>

<style>

</style>
