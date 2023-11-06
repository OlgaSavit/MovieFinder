<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>
        <PageHeader />
      </el-header>
      <el-main class="mainWrapper">
        <div class="wrapperNavigation">
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
.wrapperNavigation {
  margin-bottom: 20px;
}
</style>
