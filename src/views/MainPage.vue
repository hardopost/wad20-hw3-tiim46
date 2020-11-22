<template>
  <div class="main-page">
    <Header></Header>
    <posts></posts>
  </div>
</template>

<script>
import Posts from "@/components/Posts";
import Header from "@/components/Header";
export default {
  name: "MainPage.vue",
  components: {Header, Posts}
}
</script>

<style scoped>

.main-page {
  background-color: #0277bd;
  color: #263238;
}

</style>
