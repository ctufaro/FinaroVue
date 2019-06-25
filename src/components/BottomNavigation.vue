<template>
    <v-bottom-nav :value="true" fixed color="#e5e5e5">
        <v-btn color="#63C394" flat value="recent">
            <span>Favorites</span>
            <i class="fas fa-star bottom-icons"></i>
        </v-btn>
        <v-btn  color="#63C394" flat value="favorites">
            <span>Notifications</span>
            <i class="fas fa-bell bottom-icons"></i>
        </v-btn>
        <v-btn color="#63C394" flat value="nearby">
            <span>Messages</span>
            <i class="fas fa-envelope bottom-icons"></i>
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
</style>
