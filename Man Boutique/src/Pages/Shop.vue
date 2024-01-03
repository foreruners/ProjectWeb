<template>
  <div class="container px-1 px-md-4" style="margin-top: 80px;">
    <!-- Barra de pesquisa -->
    <div class="d-flex justify-content-center h-100">
      <div class="searchbar">
        <input v-model="searchQuery" class="search_input" type="text" name="" placeholder="Search product">
        <a href="#" class="search_icon"><i class="bi bi-search"></i></a>
      </div>
    </div>

    <!-- Exibição dos cards -->
    <div class="row gx-2 gx-md-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
      <div v-for="productItem in currentProducts" :key="productItem.id" class="col mb-4 card-group">
        <ProductCard :product="productItem" />
      </div>
    </div>

    <!-- Paginação -->
    <nav aria-label="Navegação entre páginas" class="pagination">
      <ul class="pagination justify-content-center pagination-gray">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Anterior" @click="goToPreviousPage">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Anterior</span>
          </a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
          <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Próxima" @click="goToNextPage">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Próxima</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import { useProductStore } from '../store/ProductStore';
import ProductCard from '../components/ProductCard.vue';

const productStore = useProductStore();

const itemsPerPage = 8;
const currentPage = ref(1);
const searchQuery = ref('');

// Filtragem dos produtos com base na pesquisa
const filteredProducts = computed(() => {
  return searchQuery.value
    ? productStore.products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    : productStore.products;
});

// Cálculo do número total de páginas
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

// Obtém os produtos da página atual
const currentProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredProducts.value.slice(startIndex, endIndex);
});

// Função para ir para uma página específica
const goToPage = (page) => {
  currentPage.value = page;
};

// Função para ir para a página anterior
const goToPreviousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

// Função para ir para a próxima página
const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

// Observador para voltar à página 1 quando a pesquisa é alterada
watch(searchQuery, () => {
  currentPage.value = 1;
});

// Carregar os produtos da base de dados ao montar o componente
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

.search{
  background-color: #f8f9fa;
  color: #6c757d;
  border: 1px solid #dee2e6;
  border-color: #dee2e6;

}

.search:hover{
  background-color: #f7f8f9;
  color: #6c757d;
  border: 1px solid #dee2e6;
  border-color: #dee2e6;

}

.searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 50px;
    background-color: #171133;
    border-radius: 25px;
    padding: 5px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 350px;
    caret-color:rgb(255, 255, 255);
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #000000;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    text-decoration:none;
    }

</style>
