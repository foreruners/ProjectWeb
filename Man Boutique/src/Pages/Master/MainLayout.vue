<template>
  <header>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
  </header>

  <div class="main-layout">
    <Navbar></Navbar>
    <div class="content">
      <router-view />
    </div>
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

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  background-color: #d7d7d7;
}
</style>
