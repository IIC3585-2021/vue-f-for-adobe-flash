<template>
    <img
        @click="toggleReminder(game.id)"
        :class="[selectedGame == game.id ? 'big-img-game' : 'img-game']"
        v-bind:src="game.thumbnail"
    >
    <div class="text">
        <h3>{{ game.title}}</h3>
        <button class="button" @click="addFavorite(game.id)">
            {{favoritesArray.includes(game.id) ? "Remove from Favorites" : "Add to Favorites"}}  <i class="fas fa-star"></i>
        </button>
        <p>Nombre: {{ game.title }}</p>
        <p>Descripción: {{ game.short_description }}</p>

        <p>Genero: {{ game.genre }}</p>
        <p>Plataforma: {{ game.platform }}</p>
        <a class="link" v-bind:href="game.game_url">Pruebalo aquí!</a>
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
    float: left;
}

.link {
    color:slateblue;
}

.button {
    color:#fff;
    background-color:#212529;
    border-color:#212529;
    display:inline-block;
    font-weight:400;
    line-height:1.5;
    text-align:center;
    text-decoration:none;
    vertical-align:middle;
    cursor:pointer;
    -webkit-user-select:none;
    -moz-user-select:none;
    user-select:none;
    border:1px solid transparent;
    padding:.375rem .75rem;
    font-size:1rem;
    border-radius:.25rem;
    transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce){
    .button{
        transition:none
    }
}

h3 {
    margin: 0;
}

p {
    margin-top: 5px;
    margin-bottom: 5px;
}

</style>