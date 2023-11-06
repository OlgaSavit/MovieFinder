<template>
  <div class="wrapper">
    <div class="loadingWrapper" v-loading="searchStore.isCurrentMovieLoading">
      <div v-if="searchStore.currentMovie">
        <h2>{{ searchStore.currentMovie.Title }}</h2>
        <CardDetails :movie="searchStore.currentMovie" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { useSearchStore } from "@/store/SearchStore";
import CardDetails from "@/components/CardDetails.vue";

const searchStore = useSearchStore();
const cardId = route.params.id;
onMounted(() => {
  searchStore.getMovieDetailsAction(cardId);
});
</script>

<style>
.loadingWrapper {
  min-height: 400px;
}
.wrapper {
  max-width: 850px;
  margin: auto;
}
</style>
