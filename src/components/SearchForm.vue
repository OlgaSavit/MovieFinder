<template>
  <el-form
    @submit.prevent="onSearch(search)"
    :label-position="'left'"
    style="max-width: 460px"
  >
    <div class="flexRow">
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
form {
  margin: auto;
}
.el-form-item {
  margin: 0;
  width: 100%;
}
.flexRow {
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
