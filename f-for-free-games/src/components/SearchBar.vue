<template>
    <div class="wrapper">
        <h3>Directorio de juegos</h3>
        <select @change="onSelect()" name="cars" id="cars" class="fixed-size">
            <option disabled selected>Filtra juegos por genero</option>
            <option value="NotSelected">Mostrar todos</option>
            <option :value="genre" :key="genre" v-for="genre in genres">{{genre}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props: {
        genres: Array,
    },
    methods: {
        onSelect() {
            this.$emit('filter-games-genre', event.target.value)
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