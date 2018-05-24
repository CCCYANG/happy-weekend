<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './components/footer'
export default {
  name: 'App',
  components: {
    Foot
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
html, body {
  width: 100%;
  height: 100%;
}
</style>
