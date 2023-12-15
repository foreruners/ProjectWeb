<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '../../store/CartStore';

const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">
              <i class="bi bi-house"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/shop">
              <i class="bi bi-shop-window"></i> Shop
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/contact">
              <i class="bi bi-telephone"></i> Contact
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/about">
              <i class="bi bi-info-circle"></i> About
            </RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav mx-auto">
          <li class="nav-item d-none d-lg-block">
            <RouterLink class="navbar-brand" to="/">Man Boutique</RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav">
          <RouterLink class="nav-link active" to="/cart">
            <i class="bi bi-cart4"></i> Cart ({{ cartStore.totalQuantity }})
          </RouterLink>
        </ul>

      </div>

  </nav>
</template>

<style scoped>
/* Holdeing */
</style>
