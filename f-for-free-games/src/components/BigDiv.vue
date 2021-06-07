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
    methods: {
        ...mapMutations(["toggleReminder"]),

    },
    components: {
        GameDiv
    },
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