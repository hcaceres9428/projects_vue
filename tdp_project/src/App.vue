<template>
  <nav>
    <router-link to="/">Menú</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  background-color: #FFF3F3;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  text-align: right;
  font-size: x-large;
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
