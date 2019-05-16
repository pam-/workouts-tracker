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
  padding: 20px 0;
  font-size: 30px;
}
button {
  border: none;
  padding: 1em 2em;
  border-radius: 10px;
  margin: 20px auto;
  width: 100px;
  background: #ffffff;
  font-weight: 500;
  cursor: pointer;
  &.btn-primary {
    display: block;
  }
  &.btn-secondary {
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
