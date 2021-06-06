<template>
  <NavBar
    @toggle-reminder="toggleReminder"
    :favorite_games="favorite_games"
  />
  <h1>Encuentra tu juego ideal!</h1>
  <SearchBar @filter-games-genre="filterGamesGenre" @filter-games-platform="filterGamesPlatform"
  :genres="genres" :platforms="platforms" />
  <BigDiv
    @toggle-reminder="toggleReminder"
    @add-favorite="addFavorite"
    :games="games"
    :selected_game="selected_game"
    :favorite_games="favorite_games"
  />
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import BigDiv from "./components/BigDiv.vue";


export default {
  name: "App",
  components: {
    SearchBar,
    NavBar,
    BigDiv,
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
      selectedGenre: '',
      selectedPlatform: '',
      selected_game: 0,
      favorite_games: [2,1],
    }
  },
  methods: {
    removeFavorite(value) {
      var index = this.favorite_games.indexOf(value);
      if (index > -1) {
        this.favorite_games.splice(index, 1);
      }
    },
    addFavorite(id) {
      this.favorite_games.includes(id) ? this.removeFavorite(id) : this.favorite_games.push(id)
      console.log(this.favorite_games)
    },
    toggleReminder(id){
      this.selected_game === id ? this.selected_game = 0 : this.selected_game = id
    },
    async fetchGames() {
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
    },
    async filterGamesGenre(genre) {
      console.log(this.games)
      if (genre=="NotSelected") {
        this.selectedGenre = ''
        await this.fetchGames();
        if (this.selectedPlatform) {
          this.games = this.games.filter((game) => (game.platform === this.selectedPlatform))
          let genreAux = new Set();
          this.games.map((game) => {
            genreAux.add(game.genre)
          });
          this.genre = [...genreAux]
        }
      } else {
        this.selectedGenre = genre
        await this.fetchGames();
        if (this.selectedPlatform) {
          this.games = this.games.filter((game) => (game.genre === genre && game.platform === this.selectedPlatform))
        } else {
          this.games = this.games.filter((game) => (game.genre === genre))
          let platformAux = new Set();
          this.games.map((game) => {
            platformAux.add(game.platform)
          });
          this.platforms = [...platformAux]
        }
      }
      console.log(this.games)
    },
    async filterGamesPlatform(platform) {
      console.log(this.games)
      if (platform=="NotSelected") {
        this.selectedPlatform = ''
        await this.fetchGames();
        if (this.selectedGenre) {
          this.games = this.games.filter((game) => (game.genre === this.selectedGenre))
          let platformAux = new Set();
          this.games.map((game) => {
            platformAux.add(game.platform)
          });
          this.platforms = [...platformAux]
        }
      } else {
        this.selectedPlatform = platform
        await this.fetchGames();
        if (this.selectedGenre) {
          this.games = this.games.filter((game) => (game.platform === platform && game.genre === this.selectedGenre))
        } else {
          this.games = this.games.filter((game) => (game.platform === platform))
          let genreAux = new Set();
          this.games.map((game) => {
            genreAux.add(game.genre)
          });
          this.genre = [...genreAux]
        }
      }
      console.log(this.games)
    }
  },
  async created() {
    await this.fetchGames();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
