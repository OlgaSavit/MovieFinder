<script>
export default {
  name: "PageHeader",
  props: {
    msg: String,
  },
};
</script>

<template>
  <el-header>
    <div aria-label="A complete example of page header">
      <h1>Movie Finder</h1>
    </div>
  </el-header>
</template>
<style lang="scss">
@import "@/styles/header";
</style>
