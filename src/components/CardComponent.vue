<template>
  <el-card class="wrapper-card">
    <router-link :to="{ name: 'Details', params: { id: movie.imdbID } }">
      <el-link :underline="false" type="success">
        <div class="wrapper-img">
          <img
            :src="posterImage"
            class="image"
            :alt="props.movie.Title"
            @error="handleImageError"
          />
        </div>
      </el-link>
    </router-link>
    <div class="info-wrapper">
      <router-link :to="{ name: 'Details', params: { id: movie.imdbID } }">
        <el-link :underline="false" type="success" href="#">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="movie.Title"
            placement="top-start"
          >
            <span tag="b" class="title">{{ movie.Title }}</span>
          </el-tooltip>
        </el-link>
      </router-link>
      <div class="bottom">
        <time class="text">{{ movie.Year }}</time>
      </div>
    </div>
  </el-card>
</template>
<script setup>
import { defineProps, ref } from "vue";
import defaultImg from "@/assets/default.jpg";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
});
const posterImage = ref(props.movie.Poster);
const handleImageError = () => {
  posterImage.value = defaultImg;
};
</script>
<style scoped>
@import "@/styles/card.scss";
</style>
