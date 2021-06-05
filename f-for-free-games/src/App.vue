<template>
  <h1>Encuentra tu juego ideal!</h1>
  <SearchBar :genres="genres" />
</template>

<script>
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    SearchBar
  },
  props: {
    options: {
      type: Object,
      default: {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "95dc739c69msh4db9097e9b0b5d2p16c196jsn3dd78469f40c",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "useQueryString": true
        }
      }
    }
  },
  data () {
    return {
      games: [],
      platforms: [],
      genres: [],
    }
  },
  async created() {
    const req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", this.options)
      .then(aux => (aux.json()))
      .then(res => this.games = res);
    let genresAux = new Set();
    let platformAux = new Set();
    this.games.map((game) => {
      platformAux.add(game.platform)
      genresAux.add(game.genre)
    });
    this.platforms = [...platformAux]
    this.genres = [...genresAux]
    console.log(this.genres)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
