import { createStore } from 'vuex'


export default createStore({
  state : {
    games: [],
    platforms: [],
    genres: [],
    selectedGenre: '',
    selectedPlatform: '',
    selected_game: 0,
    favorite_games: [],
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
  getters : {
    allGames : state => state.games,
    allGenres : state => state.genres,
    allPlatform : state => state.platforms,
    selectedGame : state => state.selected_game,
    favoritesArray : state => state.favorite_games,
  },
  actions : {
    async fetchGames({ commit }) {
      const default_op = {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "95dc739c69msh4db9097e9b0b5d2p16c196jsn3dd78469f40c",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "useQueryString": true
        }
      }
      const req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", default_op)
        .then(aux => (aux.json()))
        .then(res => commit('setGames', res) );
    },
    async filterGamesGenre({ commit }, genre) {
      const default_op = {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "95dc739c69msh4db9097e9b0b5d2p16c196jsn3dd78469f40c",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "useQueryString": true
        }
      }
      const req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", default_op)
        .then(aux => (aux.json()))
        .then(res => commit('updateGenre', {games: res, game_genre: genre.target.value}) );
    },
    async filterGamesPlatform({ commit }, platform) {
      const default_op = {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "95dc739c69msh4db9097e9b0b5d2p16c196jsn3dd78469f40c",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "useQueryString": true
        }
      }
      const req = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", default_op)
        .then(aux => (aux.json()))
        .then(res => commit('updatePlatform', {games: res, game_platform: platform.target.value}) );
    },
  },
  mutations: {
    setGames: (state, games) => {
      state.games = games
      let genresAux = new Set();
      let platformAux = new Set();
      state.games.map((game) => {
        platformAux.add(game.platform)
        genresAux.add(game.genre)
      });
      state.platforms = [...platformAux]
      state.genres = [...genresAux]
    },
    updateGenre: (state, payload) => {
      const games = payload.games
      const genre = payload.game_genre
      state.games = games
      if (genre=="NotSelected") {
        state.selectedGenre = ''
        if (state.selectedPlatform) {
          state.games = state.games.filter((game) => (game.platform === state.selectedPlatform))
          let genreAux = new Set();
          state.games.map((game) => {
            genreAux.add(game.genre)
          });
          state.genre = [...genreAux]
        }
      } else {
        state.selectedGenre = genre;
        if (state.selectedPlatform) {
          state.games = state.games.filter((game) => (game.genre === genre && game.platform === state.selectedPlatform))
        } else {
          state.games = state.games.filter((game) => (game.genre === genre))
          let platformAux = new Set();
          state.games.map((game) => {
            platformAux.add(game.platform)
          });
          state.platforms = [...platformAux]
        }
      }
    },
    updatePlatform: (state, payload) => {
      const games = payload.games
      const platform = payload.game_platform
      state.games = games
      if (platform=="NotSelected") {
        state.selectedPlatform = ''
        if (state.selectedGenre) {
          state.games = state.games.filter((game) => (game.genre === state.selectedGenre))
          let platformAux = new Set();
          state.games.map((game) => {
            platformAux.add(game.platform)
          });
          state.platforms = [...platformAux]
        }
      } else {
        state.selectedPlatform = platform
        if (state.selectedGenre) {
          state.games = state.games.filter((game) => (game.platform === platform && game.genre === state.selectedGenre))
        } else {
          state.games = state.games.filter((game) => (game.platform === platform))
          let genreAux = new Set();
          state.games.map((game) => {
            genreAux.add(game.genre)
          });
          state.genre = [...genreAux]
        }
      }
    },
    addFavorite: (state, id) => {
      if (state.favorite_games.includes(id)) {
        const index = state.favorite_games.indexOf(id);
        if (index > -1) {
          state.favorite_games.splice(index, 1);
        }
      } else {
        state.favorite_games.push(id)
      }
    },
    toggleReminder: (state, id) => {
      state.selected_game === id ? state.selected_game = 0 : state.selected_game = id
    },
  },
})
