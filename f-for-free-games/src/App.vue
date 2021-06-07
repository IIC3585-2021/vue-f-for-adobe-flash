<template>
  <NavBar/>
  <h1>Encuentra tu juego ideal!</h1>
  <SearchBar/>
  <BigDiv/>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import NavBar from "./components/NavBar.vue";
import BigDiv from "./components/BigDiv.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["fetchGames"])},
  components: {
    SearchBar,
    NavBar,
    BigDiv,
  },
  computed: mapGetters(["allGames"]),

  created() {
    this.fetchGames();
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
