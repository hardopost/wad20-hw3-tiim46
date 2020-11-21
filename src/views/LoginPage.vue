<template>
  <div class="login-page">
    <Login/> <!--Komponendi sisse toomine-->
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  name: "LoginPage.vue",

  components: {
    Login
  }
}
</script>

<style scoped>

</style>