<template>
  <div class="login-page">

    <p>See on login leht!</p>

    <HelloWorld msg="Welcome to Your Vue.js App"/> <!--Komponendi sisse toomine-->

  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "LoginPage.vue",

  components: {
    HelloWorld //komponendi sissetoomine
  }
}
</script>

<style scoped>

</style>