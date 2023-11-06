<template>
  <CreateMovieForm />
  <div v-if="searchStore.myMovieList.length">
    <h3>Created movie list</h3>
    <el-row :gutter="20">
      <el-col
        v-for="movie of searchStore.myMovieList"
        :key="movie.imdbID"
        :movie="movie"
        :xs="24"
        :sm="12"
        :md="6"
        ><div class="grid-content ep-bg-purple" />
        <CardComponent :movie="movie" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import CreateMovieForm from "@/components/CreateMovieForm.vue";
import CardComponent from "@/components/CardComponent.vue";
import { useSearchStore } from "@/store/SearchStore";
const searchStore = useSearchStore();
</script>
