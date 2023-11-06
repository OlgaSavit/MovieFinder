import http from "../index";
export const searchMovie = (params) => http.get(``, { params: params });
export const getMovieDetails = (params) => http.get(``, { params: params });
