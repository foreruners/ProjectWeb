<template>
  <header>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
  </header>

    <div>
        <Navbar></Navbar>
        <router-view />
        <Footer></Footer>
    </div>
    
  </template>
  
  <script>
  import Navbar from './NavBar.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
  </script>