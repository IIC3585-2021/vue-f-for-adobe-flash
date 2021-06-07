<template>
    <div class="bigdiv">
        <div
            :class="[selected_game == game.id ? 'gamebig' : 'game']"
            :key="game.id" v-for="game in games"
        >
            <GameDiv
                @toggle-reminder="$emit('toggle-reminder', game.id)"
                @add-favorite="$emit('add-favorite', game.id)"
                :game="game" :selected_game="selected_game"
                :favorite_games="favorite_games"
            />
        </div>
    </div>
</template>


<script>

import GameDiv from "./GameDiv.vue";

export default {
    name: 'BigDiv',
    components: {
        GameDiv
    },
    props: {
        games: Array,
        selected_game: Number,
        favorite_games: Array,
    },
    emits: [
        'toggle-reminder',
        'add-favorite'
    ],
}
</script>

<style>
.bigdiv {
    position: absolute;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: flex-start;

    width: 100%;
    height: 70%;

    margin-top:1em;
    margin-bottom:1em;
    box-sizing: border-box;
    overflow-y:scroll;
    overflow-x: hidden;

}

.game {
    width: 360px;
    height: 250px;

    margin-top: 5%;
    box-sizing: border-box;
    overflow-y:hidden;
    overflow-x: hidden;
}

.gamebig {
    grid-column-start: span 3;

    width: 100%;
    height: 100%;

    padding-left: 1%;
    margin-top: 1.25em;

    overflow-y: hidden;
    align-items: left;
    text-align: left;
}

</style>