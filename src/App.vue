<template>
  <Navbar/>
  <router-view class="setHeight"></router-view>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
 
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.setHeight{
  min-height: calc(100vh - 127px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
