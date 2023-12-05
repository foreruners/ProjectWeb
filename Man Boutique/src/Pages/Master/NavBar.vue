<script setup>
import SocialMedia from '../../components/SocialMedia.vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
    <div class="container-fluid">
      <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/shop" class="nav-link">Shop</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
        </ul>

        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink to="/" class="navbar-brand">Man Boutique</RouterLink>
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
