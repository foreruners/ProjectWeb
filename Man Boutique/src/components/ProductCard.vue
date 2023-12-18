<template>
  <div class="card h-100 d-flex flex-column align-items-end mt-4 bg-secondary">
    <div >
      <img class="card-img-top" :src="product.image" alt="Product Image" data-toggle="modal" :data-target="'#myModal' + product.id"/>
      <div class="card-body p-4">
        <div class="d-flex justify-content-center small text-warning mb-2">
          <RatingStars :objectId="product.id" />
        </div>
        <div class="text-center">
          <h5 class="fw-bolder">{{ product.name }}</h5>
          Price: €{{ product.price }} - Quantity: {{ product.quantity }}
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent ">
    <div class="text-center"><a class="btn btn-outline-dark" href="#" @click="addToCartHandler(product.id)">Add to cart</a></div>
 </div>
    </div>

    <!-- Bootstrap Modal -->
    <div v-if="product.id" :id="'myModal' + product.id" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ product.name }} Details</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <img class="card-img" :src="product.image" alt="Product Image" />
          </div>
          <div class="col-md-6">
            
            <p>{{ product.description }}</p>
            <RatingStars :objectId="product.id" class="pb-2"/>
            <p>Price: €{{ product.price }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <div class="d-flex">
              <a class="btn btn-outline-dark" href="#" @click="addToCartHandler(product.id)">Add to cart</a>

            <RouterLink class="nav-link active" to="/cart">
            <i class="bi bi-cart4"></i> 
            </RouterLink>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useCartStore } from '../store/CartStore';
import RatingStars from './RatingStars.vue';

const props = defineProps(['product']);
const cartStore = useCartStore();

const addToCartHandler = (productId) => {
  console.log(productId);
  cartStore.addToCart(props.product);
  
};

</script>

<style>
.card-img-top {
  height: 250px;
  object-fit: cover;
  padding: 1.5rem;
}
</style>
