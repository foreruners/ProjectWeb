<script>
import GridSample from '../components/GridSample.vue';

export default {
  components: {
    GridSample
  }
};
</script>

<template>
  <section class="hero d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="hero-content text-center">
            <h1 class="hero-title">Welcome To Man Boutique</h1>
            <h6 class="hero-description">
              Discover the elegance and sophistication of men's fashion.
            </h6>
            <router-link to="/shop" class="btn btn-primary hero-button">
              Explore our collection
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div class="container p-4">
    <h1 class="text-center p-4">New collection</h1>
    <GridSample></GridSample>
  </div>

  <div class="container p-4">
    <h1 class="text-center p-4">Best sellers</h1>
    <GridSample></GridSample>
  </div>

  <h1 style="text-align: center; color: chartreuse;">Loking for some ideas</h1>
  
</template>
  
<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),
    url('../imgs/myHero.webp') center/cover no-repeat;
  color: #fff;
  padding: 100px 0;
  height: 100vh;
}

.hero-content {
  text-align: left;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.hero-button {
  padding: 10px 30px;
  font-size: 1.2rem;

  border-color: #f9f7f7;
  background-color: rgba(9, 3, 39, 0.4)
}

.hero-button:hover {
  border-color: #f9f7f7;
  background-color: rgba(10, 10, 10, 0.6)
}
</style>
  
