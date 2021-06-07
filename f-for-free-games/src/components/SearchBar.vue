<template>
    <div class="wrapper">
        <h3>Directorio de juegos</h3>
        <div class="bar-wrapper">
            <select @change="genreFilter($event)" class="fixed-size">
                <option disabled selected>Filtra juegos por genero</option>
                <option value="NotSelected">Mostrar todos</option>
                <option :value="genre" :key="genre" v-for="genre in genres">{{genre}}</option>
            </select>
            <select @change="platformFilter($event)" class="fixed-size">
                <option disabled selected>Filtra juegos por plataforma</option>
                <option value="NotSelected">Mostrar todos</option>
                <option :value="platform" :key="platform" v-for="platform in platforms">{{platform}}</option>
            </select>
        </div>
    </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
    name: 'SearchBar',
    methods: {...mapActions(["updateGenre", "updatePlatform"])}
}
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
}

.bar-wrapper {
    display: grid;
    grid-template-columns: auto auto;
    align-items: flex-start;
}

.fixed-size {
    width: 50%;
    height: 50%;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 25%;
    margin-inline-end: 0px;
}
</style>