<script setup>
import { RouterLink, RouterView, useRoute  } from 'vue-router'
import { useCartStore } from '../../store/CartStore';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const cartStore = useCartStore();
const navbarCollapse = ref(null);
const isScrolled = ref(false);
const route = useRoute();

const isScrollEffectRequired = computed(() => {
  return ['/', '/contact'].includes(route.path);
});

const closeNavbar = () => {
  if (navbarCollapse.value.classList.contains('show')) {
    navbarCollapse.value.classList.remove('show');
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar navbar-expand-lg  fixed-top" :class="{ 'scrolled': isScrolled && isScrollEffectRequired, 'default': !isScrollEffectRequired }">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src="../../assets/img/myIcon.png" alt="Logo" class="nav-logo"></span>
    </button>

    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent" ref="navbarCollapse">

      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link" :class="{ 'active': $route.path === '/' }" @click="closeNavbar">
            <i class="bi bi-house"></i> Home
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/shop" class="nav-link" :class="{ 'active': $route.path === '/shop' }" @click="closeNavbar">
            <i class="bi bi-shop-window"></i> Shop
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/contact" class="nav-link" :class="{ 'active': $route.path === '/contact' }"
            @click="closeNavbar">
            <i class="bi bi-telephone"></i> Contact
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/about" class="nav-link" :class="{ 'active': $route.path === '/about' }" @click="closeNavbar">
            <i class="bi bi-info-circle"></i> About Us
          </RouterLink>
        </li>
      </ul>

      <ul class="navbar-nav mx-auto">
        <li class="nav-item d-none d-lg-block">
          <RouterLink to="/" class="navbar-brand"><img src="../../assets/img/myIcon.png" alt="Logo" class="nav-logo"
              @click="closeNavbar">
          </RouterLink>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li>
          <RouterLink to="/cart" class="nav-link" :class="{ 'active': $route.path === '/cart' }" @click="closeNavbar">
            <i class="bi bi-cart4"></i> Cart ({{ cartStore.totalQuantity }})
          </RouterLink>
        </li>
      </ul>

    </div>

  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  display: inline-block;
  padding-bottom: 3px;
  color: rgb(221, 221, 230);
  font-weight: 500;
  transition: all 0.2s;
  text-shadow:#000000 2px 2px 2px;
}

.nav-logo {
  max-height: 30px;
  width: auto;
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
  background-color: rgba(9, 3, 39, 0);
  color: black;
  padding-top: 10px;
  padding-left: 60px;
  padding-right: 60px;
  transition: all 0.3s;
  font-size:larger;
}

.navbar.scrolled {
  background-color: rgb(9, 3, 39);
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: medium;
}

.navbar.default {
  background-color: rgb(9, 3, 39);
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: medium;
}

.navbar-collapse {
  justify-content: space-between;
}

.navbar-nav.mx-auto {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.active{
  font-weight: 1000;
}

@media (max-width: 991px) {
  .navbar {
  background-color: rgb(9, 3, 39);
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: medium;
}
}
</style>

