<template>
  <div class="main-page">
    <h1>See on postituste leht</h1>
    <posts></posts>
  </div>
</template>

<script>
import Posts from "@/components/Posts";
export default {
  name: "MainPage.vue",
  components: {Posts}
}
</script>

<style scoped>

.main-page {
  background-color: #0277bd;
  color: #263238;
}

</style>
