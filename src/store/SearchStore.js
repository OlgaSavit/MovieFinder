import { defineStore } from "pinia";
import { getMovieDetails, searchMovie } from "@/api/requests/movie";
import { ElNotification } from "element-plus";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    isLoading: false,
    movies: [],
    totalResults: 0,
    page: 1,
    querySearch: "",
    currentMovie: null,
    isCurrentMovieLoading: false,
    myMovieList: [],
  }),
  actions: {
    async getMovies(search) {
      try {
        this.querySearch = search;
        this.page = 1;
        this.isLoading = true;
        const res = await searchMovie({ s: search });
        if (res?.data?.Response === "True") {
          this.movies = res.data.Search;
          this.totalResults = res.data.totalResults;
        } else {
          this.movies = [];
          this.totalResults = 0;
          ElNotification({
            title: "Error",
            message: `${res.data?.Error}`,
            type: "error",
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    async addNextPage(page = 1) {
      try {
        this.page = page;
        const res = await searchMovie({ s: this.querySearch, page });
        if (res?.data?.Response === "True") {
          this.movies = [...this.movies, ...res.data.Search];
        } else {
          this.movies = [];
          this.totalResults = 0;
          ElNotification({
            title: "Error",
            message: `${res.data?.Error}`,
            type: "error",
          });
        }
      } catch (err) {
        console.error(err.response);
      }
    },
    async getMovieDetailsAction(id) {
      this.currentMovie = null;
      try {
        this.isCurrentMovieLoading = true;
        const res = await getMovieDetails({ i: id });
        if (res?.data?.Response === "True") {
          this.currentMovie = res.data;
        } else {
          this.currentMovie = null;
          ElNotification({
            title: "Error",
            message: `${res.data?.Error}`,
            type: "error",
          });
        }
      } catch (err) {
        console.error(err.response);
      } finally {
        this.isCurrentMovieLoading = false;
      }
    },
    addNewMovie(item) {
      this.myMovieList = [...this.myMovieList, item];
    },
  },
});
