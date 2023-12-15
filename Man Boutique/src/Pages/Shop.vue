<template>
  <div class="container px-2 px-md-4 mt-5">
    <div class="row gx-2 gx-md-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
      <div v-for="productItem in currentProducts" :key="productItem.id" class="col mb-4">
        <ProductCard :product="productItem" />
      </div>
    </div>

    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mt-4">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="goToPreviousPage" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="goToNextPage" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../store/ProductStore';
import { useCartStore } from '../store/CartStore';
import ProductCard from '../components/ProductCard.vue';
import { ref, computed } from 'vue';

const productStore = useProductStore();
const cartStore = useCartStore();

const itemsPerPage = 5; 
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(productStore.products.length / itemsPerPage));

const currentProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return productStore.products.slice(startIndex, endIndex);
});

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const goToPage = (page) => {
  currentPage.value = page;
};

onMounted(() => {
  productStore.fetchProducts();
});

console.log(cartStore.products);
console.log(productStore.products);
</script>
