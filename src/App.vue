<template>
  <div id="app">
    <header>🍑</header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  background-color: #fef487;
}
header {
  padding: 10px 0;
  font-size: 30px;
}
button {
  border: none;
  border-radius: 10px;
  margin: 20px auto;
  background: #ffffff;
  font-weight: 500;
  cursor: pointer;
  &.btn-primary {
    padding: 15px;
    font-size: 20px;
    display: block;
    width: 300px;
  }
  &.btn-secondary {
    font-size: 1em;
    width: 120px;
    padding: 10px;
    display: inline-block;
  }
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
