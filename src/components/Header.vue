<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="../../images/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div id="myDropdown" class="dropdown-content">
        <a id="info">Link 1</a>
        <a @click="$router.push('main-page')">Main page</a>
        <a @click="$router.push('login-page')">Log out</a>
      </div>
      <div class="avatar-container">
        <img src="../../images/avatar.png" class="avatar" alt="Me">
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  right: 0;
  padding: 0;
  height: auto;
  top: 50px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd
}

.dropdown-content a:not(:first-child) {
  border-top: 1px solid lightgrey;
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

a {
  color: #40c4ff;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

</style>