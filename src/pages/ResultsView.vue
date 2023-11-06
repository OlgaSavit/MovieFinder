<template>
  <p v-if="searchStore.movies.length">
    Results: {{ searchStore.totalResults }}
  </p>
  <div v-loading="searchStore.isLoading">
    <SliderComponent v-if="searchStore.movies.length" />
  </div>
  <div v-if="!searchStore.isLoading && !searchStore.movies.length">
    <h3 class="emptyList">The list is Empty</h3>
    <router-link to="/">
      <el-button type="primary">Go to Search</el-button>
    </router-link>
  </div>
</template>

<script setup>
import { useSearchStore } from "@/store/SearchStore";
import SliderComponent from "@/components/SliderComponent.vue";

const searchStore = useSearchStore();
</script>
<style scoped>
.emptyList {
  margin-bottom: 0;
}
</style>
