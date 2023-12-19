<template>
  <div class="container px-2 px-md-4 mt-5">
    <div class="row gx-2 gx-md-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
      <div v-for="productItem in currentProducts" :key="productItem.id" class="col mb-4">
        <ProductCard :product="productItem" />
      </div>
    </div>

    <!-- Custom Pagination -->
    <nav aria-label="Page navigation example" class="pagination">
      <ul class="pagination justify-content-center pagination-gray">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous" @click="goToPreviousPage">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" @click="goToNextPage">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
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

const itemsPerPage = 12; 
const currentPage = ref(1);


const totalPages = computed(() => Math.ceil(productStore.products.length / itemsPerPage));

const currentProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return productStore.products.slice(startIndex, endIndex);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

onMounted(() => {
  productStore.fetchProducts();
});

</script>

<style scoped>
.pagination-gray .page-link,
.pagination-gray .page-item.active .page-link {
  background-color: #f8f9fa; 
  color: #6c757d;
  border-color: #dee2e6; 
}

.pagination {
  justify-content: center;
  padding-top: 1rem;

}
.pagination-gray .page-link:hover {
  background-color: #e9ecef; 
}

.pagination-gray .page-item.active .page-link {
  background-color: #f8f9fa;
  color: #6c757d;
  border-color: #7b7d7f;
}
</style>
