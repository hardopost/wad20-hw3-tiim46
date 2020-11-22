<template>
  <body>
  <div class="profile" v-for="profile in profiles" :key="profile.id">
    <div class="profile img">
      <span>{{ profile.avatar }}</span>
    </div>
    <div class="profile-author">
      <span>{{ profile.firstname + profile.lastname }}</span>
    </div>
    <button type="button" name="Follow" class="follow-button">"Follow"</button>
  </div>
  <section class="browse-page">
  </section>
  </body>
</template>

<script>
export default {
  name: "Browse",
  computed: {
    profiles() {
      return this.$store.state.profiles
    }
  },
  mounted() {
    this.$store.dispatch("getProfiles")
  },
  pressed() {

  }
}
</script>

<style scoped>
* {
  font-family: 'Roboto Slab', serif;
  outline: none;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #0277bd;
  color: #263238;
}

/*------------------------------------*/

.browse-page {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
}

.profile {
  width: 40%;
  margin: 15px auto;
  border-radius: 5px;
  border: solid black;
  text-align: center;
}

.profile-author {
  color: black;
  padding: 10px;

}

.profile img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 150px;
  padding-top: 20px;
  object-fit: cover;
}

.follow-button {
  background-position: 5px center;
  background-color: purple;
  width: 100px;
  height: 40px;
  line-height: 10px;
  border: none;

}

.follow-button.pressed {
  background-color: white;
  color: purple;
  border: solid purple;
}

</style>