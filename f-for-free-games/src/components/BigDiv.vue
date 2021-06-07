<template>
    <div class="bigdiv">
        <div
            :class="[selectedGame == game.id ? 'gamebig' : 'game']"
            :key="game.id" v-for="game in allGames"
        >
            <GameDiv
                :game="game"
            />
        </div>
    </div>
</template>


<script>

import GameDiv from "./GameDiv.vue";

import { mapGetters, mapMutations } from "vuex";

export default {
    name: 'BigDiv',
    computed: mapGetters(["allGames", "selectedGame"]),
    components: {
        GameDiv
    },
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
    height: 270px;

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

    padding-top: 0;

    display: grid;
    grid-template-columns: 385px auto;
}

</style>