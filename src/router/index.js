import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/pages/HomeView.vue";
import DetailView from "@/pages/DetailView.vue";
import ResultsView from "@/pages/ResultsView.vue";
import CreateMovieView from "@/pages/CreateMovieView.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: HomeView,
    },
    {
      name: "ResultsView",
      path: "/results",
      component: ResultsView,
    },
    {
      name: "CreateMovieView",
      path: "/create-movie",
      component: CreateMovieView,
    },
    {
      name: "Details",
      path: "/movie/:id/details",
      component: DetailView,
    },
  ],
});

export default router;
