<template>
    <img
        @click="$emit('toggle-reminder', game.id)"
        :class="[selected_game == game.id ? 'big-img-game' : 'img-game']"
        v-bind:src="game.thumbnail"
    >
    <span>{{ game.title}}</span>
    <div>
        <button @click="$emit('add-favorite', game.id)">{{favorite_games.includes(game.id) ? "Remove from Favorites" : "Add to Favorites"}}</button>
        <h6>Name: {{ game.title }}</h6>
        <h6>Description: {{ game.short_description }}</h6>

        <h6>Genre: {{ game.genre }}</h6>
        <h6>Platform: {{ game.platform }}</h6>
        <a  v-bind:href="game.game_url">DOWNLOAD NOW!</a>
    </div>
</template>

<script>
export default {
    name: 'GameDiv',
    props: {
        game: Object,
        selected_game: Number,
        favorite_games: Array,
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