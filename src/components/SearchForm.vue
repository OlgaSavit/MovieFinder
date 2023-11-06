<template>
  <el-form
    @submit.prevent="onSearch(search)"
    :label-position="'left'"
    class="search-form"
  >
    <div class="flex-row">
      <el-form-item label="Search">
        <el-input v-model="search" placeholder="search movies by Title" />
      </el-form-item>
      <el-button
        type="primary"
        nativeType="submit"
        :isLoading="searchStore.isLoading"
        :disabled="search.length < 3"
        >Search</el-button
      >
    </div>
  </el-form>
</template>
<script setup>
import router from "@/router";
import { ref } from "vue";
import { useSearchStore } from "@/store/SearchStore";

const searchStore = useSearchStore();
let search = ref(searchStore.querySearch);
const onSearch = (str) => {
  if (str.length > 3) {
    searchStore.getMovies(str);
    router.push({ path: "/results" });
  }
};
</script>

<style>
.search-form {
  margin: auto;
  max-width: 460px;
}
.el-form-item {
  margin: 0;
  width: 100%;
}
.flex-row {
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
  button {
    margin: 0;
  }
}
</style>
