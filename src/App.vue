<template>
  <div id="app">
    <div id="nav">

      <router-link to="/">Login</router-link> |
      <router-link to="/main-page">MainPage</router-link> |
      <router-link to="/browse-page">About</router-link>

    </div>
    <router-view/>
  </div>
</template>



<style>

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
