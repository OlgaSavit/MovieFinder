import axios from "axios";
const API_KEY = "ad8acc4d";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const http = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default http;
