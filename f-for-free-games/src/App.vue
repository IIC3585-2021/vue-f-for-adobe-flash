<template>
  <h1>Encuentra tu juego ideal!</h1>
  <SearchBar />
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
      platforms: new Set(),
      genres: new Set(),
    }
  },
  async created() {
    const req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", this.options)
      .then(aux => (aux.json()))
      .then(res => this.games = res)
    this.games.map((game) => {
      this.platforms.add(game.platform)
      this.genres.add(game.genre)
    })
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
