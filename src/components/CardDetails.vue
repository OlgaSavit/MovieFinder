<template>
  <el-card class="wrapperDetailsCard">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12">
        <div class="wrapperImg">
          <img
            :src="props.movie.Poster"
            class="image"
            :alt="props.movie.Title"
          />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <div style="padding: 14px">
          <el-table :data="tableData">
            <el-table-column
              class-name="label"
              prop="label"
              label="Label"
              width="65%"
            />
            <el-table-column
              class-name="text"
              prop="info"
              label="Info"
              width="100%"
            />
          </el-table>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
});
const tableData = [
  {
    label: "Name",
    info: props.movie.Title,
  },
  {
    label: "Director",
    info: props.movie.Director,
  },
  {
    label: "Year",
    info: props.movie.Year,
  },
  {
    label: "Genre",
    info: props.movie.Genre,
  },
  {
    label: "Actors",
    info: props.movie.Actors,
  },
  {
    label: "Country",
    info: props.movie.Country,
  },
  {
    label: "Language",
    info: props.movie.Language,
  },
];
</script>
<style scoped>
@import "@/styles/detailsCard.scss";
</style>
