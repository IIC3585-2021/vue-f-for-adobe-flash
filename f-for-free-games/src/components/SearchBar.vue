<template>
    <div class="wrapper">
        <h3>Directorio de juegos</h3>
        <div class="barWrapper">
            <select @change="genreFilter()" class="fixed-size">
                <option disabled selected>Filtra juegos por genero</option>
                <option value="NotSelected">Mostrar todos</option>
                <option :value="genre" :key="genre" v-for="genre in genres">{{genre}}</option>
            </select>
            <select @change="platformFilter()" class="fixed-size">
                <option disabled selected>Filtra juegos por plataforma</option>
                <option value="NotSelected">Mostrar todos</option>
                <option :value="platform" :key="platform" v-for="platform in platforms">{{platform}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: {
        genres: Array,
        platforms: Array,
    },
    methods: {
        genreFilter() {
            this.$emit('filter-games-genre', event.target.value)
        },
        platformFilter() {
            this.$emit('filter-games-platform', event.target.value)
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
}

.bar-wrapper {
    
}

.fixed-size {
    width: 25%;
    height: 50%;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 25%;
    margin-inline-end: 0px;
}
</style>