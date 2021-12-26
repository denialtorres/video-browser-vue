<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos" @videoSelect="onVideoSelect"></VideoList>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import youtube from "./apis/youtube";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
  },
  data: function () {
    return {
      videos: [],
    };
  },
  methods: {
    onVideoSelect(video) {
      console.log(video);
    },
    onTermChange(searchTerm) {
      youtube
        .get("/search", {
          params: { q: searchTerm },
        })
        .then((response) => {
          this.videos = response.data.items;
        });
    },
  },
};
</script>
