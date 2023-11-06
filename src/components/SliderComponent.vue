<template>
  <div class="wrapperSwiper">
    <swiper
      :slidesPerView="6"
      :spaceBetween="30"
      @reachEnd="onReachEnd"
      :navigation="true"
      :modules="[Navigation]"
      :breakpoints="{
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1200: { slidesPerView: 4 },
        1400: { slidesPerView: 5 },
      }"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper"
    >
      <swiper-slide
        v-for="movie of searchStore.movies"
        :key="movie.imdbID"
        :movie="movie"
      >
        <CardComponent :movie="movie" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSearchStore } from "@/store/SearchStore";
import CardComponent from "@/components/CardComponent.vue";

const searchStore = useSearchStore();
import { Navigation } from "swiper/modules";
const onReachEnd = () => {
  if (
    searchStore.querySearch &&
    searchStore.movies?.length < searchStore.totalResults
  ) {
    searchStore.addNextPage(searchStore.page + 1);
  }
};
</script>
<style scoped>
.wrapperSwiper {
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
  @media screen and (max-width: 1200px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (max-width: 576px) {
    padding-left: 45px;
    padding-right: 45px;
  }
  .swiper {
    position: initial;
  }
  .swiper-button-next {
    right: -10px !important;
  }
  .swiper-button-prev {
    left: -10px !important;
  }
}
</style>
