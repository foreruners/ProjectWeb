<script setup>
import SocialMedia from '../../components/SocialMedia.vue';
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '../../store/CartStore';

const cartStore = useCartStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
    <div class="container-fluid">
      <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/shop">Shop</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/contact">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/cart">
              <i class="bi bi-cart"></i>Cart ({{ cartStore.totalQuantity }})
              
            </RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="navbar-brand" to="/">Man Boutique</RouterLink>
            </li>
        </ul>

        <ul class="navbar-nav">
          <SocialMedia></SocialMedia>
        </ul>

      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Holdeing */
</style>
