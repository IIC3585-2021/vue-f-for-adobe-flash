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
    width: 60%;
    height:60%;
    margin-top:1em;
    margin-bottom:1em;
    margin-left:17%;
    border-style: solid;
    border-color: chocolate;
    box-sizing: border-box;
    overflow-y:scroll;
}

.game {
    position: relative;
    display: inline-block;
    width: 21%;
    height:20%;
    padding-left: 1%;

    margin-top: 5%;
    box-sizing: border-box;
    overflow-y:hidden;
}

.gamebig {
    position: relative;
    display: inline-block;
    width: 100%;
    height:100%;
    padding-left: 1%;

    margin-top: 5%;
    box-sizing: border-box;
    overflow-y:hidden;
}

</style>