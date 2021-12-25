<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
const API_KEY = "AIzaSyA_oDYhlFNxaOKgWUXh6XrQLuMyUF6GLj0";

export default {
  name: "App",
  components: {
    SearchBar,
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    },
  },
};
</script>
