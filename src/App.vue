<template>
<router-view/>
</template>



<style>

@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

* {
  font-family: 'Roboto Slab', sans-serif;
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

a {
  color: #40c4ff;
}

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}



</style>
