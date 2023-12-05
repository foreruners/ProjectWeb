<script setup>
import SocialMedia from '../../components/SocialMedia.vue';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary w-100">
    <div class="container-fluid">
      <div class="collapse navbar-collapse text-center" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Shop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>

        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
            <a class="navbar-brand" href="#">Man Boutique</a>
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
