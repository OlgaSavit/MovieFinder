<template>
  <div class="common-layout">
    <el-container class="container is-vertical">
      <PageHeader />
      <el-main class="main-wrapper">
        <div class="wrapper-navigation">
          <router-link to="/">
            <el-button :plain="!isActive('/')" type="success">Home</el-button>
          </router-link>
          <router-link to="/create-movie">
            <el-button :plain="!isActive('/create-movie')" type="success"
              >Create new Movie</el-button
            >
          </router-link>
          <router-link to="/results">
            <el-button :plain="!isActive('/results')" type="success"
              >Results</el-button
            >
          </router-link>
        </div>

        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "LayoutComponent",
  components: { PageHeader },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
<style>
.wrapper-navigation {
  margin-bottom: 20px;
}
</style>
