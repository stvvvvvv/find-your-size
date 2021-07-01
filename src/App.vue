<template>
  <div id="nav">
    <router-link to="/">Footwear</router-link> |
    <router-link to="/outwear">Outerwear</router-link> |
    <router-link to="/pants">Pants</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #2c3e50;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
