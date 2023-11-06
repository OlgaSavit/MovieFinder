import axios from "axios";
const BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}`;
const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default http;
