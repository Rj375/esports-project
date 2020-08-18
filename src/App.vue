<template>
  <div id="app">
    <nav-bar></nav-bar>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from "@/components/Nav";
  import Footer from "@/components/Footer";
  
  
  export default {
    components: {
      NavBar,Footer
    }
  }
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 

}

#nav {
    
 

   
  a {
    font-weight: bold;
    color: #2c3e50;
    background: #17a2b8;
     
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a:hover{
    color: #fff;
  }
 
 
  
}

 

</style>
