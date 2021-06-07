<template>
    <img
        @click="toggleReminder(game.id)"
        :class="[selectedGame == game.id ? 'big-img-game' : 'img-game']"
        v-bind:src="game.thumbnail"
    >
    <span>{{ game.title}}</span>
    <div>
        <button @click="addFavorite(game.id)">{{favoritesArray.includes(game.id) ? "Remove from Favorites" : "Add to Favorites"}}</button>
        <h6>Name: {{ game.title }}</h6>
        <h6>Description: {{ game.short_description }}</h6>

        <h6>Genre: {{ game.genre }}</h6>
        <h6>Platform: {{ game.platform }}</h6>
        <a  v-bind:href="game.game_url">DOWNLOAD NOW!</a>
    </div>
</template>

<script>

import { mapMutations, mapGetters } from "vuex";

export default {
    name: 'GameDiv',
    computed: mapGetters(["favoritesArray", "selectedGame"]),
    methods: {
        ...mapMutations(["toggleReminder", "addFavorite"]),

    },
    props: {
        game: Object,
    }
}
</script>

<style>

.img-game{
    width: 90%;
    height: 70%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 0;
}

.big-img-game{
    width: 50%;
    height: 50%;
    position: flex;
    display: block;
    overflow: hidden;
    margin: 0;
    float: left;
}

</style>