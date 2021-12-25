import axios from "axios";

const KEY = "AIzaSyAcSF0-g2tTHg78HROLnQO7LZ1s0zfj3uk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
