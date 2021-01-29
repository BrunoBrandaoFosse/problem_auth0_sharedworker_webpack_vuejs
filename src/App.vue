<template>
  <div id="app">
    <h3>Problem with Auth0</h3>
    <p>I've been having trouble using Auth0 with Worker-Plugin in VueJs</p>
  </div>
</template>

<script>
import "./start";

export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
body {
  background-color: #161B21;
  font-size: 16px;
}
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cccccc;
  margin-top: 60px;
  margin-left: 30px;
  margin-right: 30px;
  border: 2px solid #58a6ff;
  padding: 15px;
}
h3 {
  color: white;
  text-transform: uppercase;
}
h3::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  margin: 15px auto 0 auto;
  background-color: #58a6ff;
}
</style>
