<template>
  <div class="browse-page">
    <Header/>
    <Profiles/>
  </div>
</template>

<script>
import Profiles from "@/components/Profiles";
import Header from "@/components/Header";

export default {
  name: "BrowsePage.vue",
  components: {
    Header,
    Profiles
  }
}
</script>

<style scoped>

</style>