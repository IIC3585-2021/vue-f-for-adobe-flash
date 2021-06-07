<template>
    <img
        @click="$emit('toggle-reminder', game.id)"
        :class="[selected_game == game.id ? 'big-img-game' : 'img-game']"
        v-bind:src="game.thumbnail"
    >
    <div class="text">
        <h3>
            {{ game.title}}
        </h3>
        <button class="button" @click="$emit('add-favorite', game.id)">{{favorite_games.includes(game.id) ? "Remove from Favorites" : "Add to Favorites"}}</button>
        <p>Name: {{ game.title }}</p>
        <p>Description: {{ game.short_description }}</p>

        <p>Genre: {{ game.genre }}</p>
        <p>Platform: {{ game.platform }}</p>
        <a class="link" v-bind:href="game.game_url">Pruebalo aquí</a>
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
    width: 365px;
    height: 206px;

    overflow: hidden;
    margin: 0;
}

.big-img-game{
    width: 365px;
    height: 206px;

    overflow: hidden;
    margin: 0;
    margin-right: 1em;
    float: left;
}

.text {
    position: relative;
}

.link {
    color:slateblue;
}

</style>