<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '../../store/CartStore';

const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" :class="{ 'active': $route.path === '/' }">
              <i class="bi bi-house"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/shop" class="nav-link" :class="{ 'active': $route.path === '/shop' }">
              <i class="bi bi-shop-window"></i> Shop
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" :class="{ 'active': $route.path === '/contact' }">
              <i class="bi bi-telephone"></i> Contact
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" :class="{ 'active': $route.path === '/about' }">
              <i class="bi bi-info-circle"></i> About Us
            </RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav mx-auto">
          <li class="nav-item d-none d-lg-block">
            <RouterLink to="/" class="navbar-brand" >Man Boutique</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav">
          <RouterLink to="/cart" class="nav-link" :class="{ 'active': $route.path === '/cart' }">
            <i class="bi bi-cart4"></i> Cart ({{ cartStore.totalQuantity }})
          </RouterLink>
        </ul>

      </div>

  </nav>
</template>

<style scoped>

.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 3px;
  transition: all 0.2s;
}

.nav-link::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background-color: #9d9d97;
  transition: all 0.3s;
}

.nav-link:hover::before {
  width: 100%;
}

.navbar {
  background-color: rgba(9, 3, 39, 0.94);
}

</style>

