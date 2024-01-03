<template>
<div class="card h-100 d-flex flex-column align-items-end mt-4">
    <div>
      <div class="image-height">
        <img
          class="card-img-top"
          :src="product.image"
          alt="Product Image"
          data-toggle="modal"
          :data-target="'#myModal' + product.id"
        />
        
      </div>
      <div class="card-body p-2 mt-auto d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-center small mb-1">
          <RatingStars :objectId="product.id" />
        </div>
        <div class="text-center">
          <h5 class="fw-bolder">{{ product.name }}</h5>
          Price: {{ product.price }}€
        </div>
      </div>
      <div class="card-footer p-4  bg-transparent">
        <div class="text-center">
          <button
            v-if="product.quantity > 0"
            class="btn btn-outline-dark w-100"
            @click.prevent="addToCartHandler(product.id)"
          >
            Add to cart
          </button>
          <span v-else class="text-danger">Out of Stock</span>
        </div>
      </div>
    </div>
  </div>

    <!-- Bootstrap Modal -->
    <div
      v-if="product.id"
      :id="'myModal' + product.id"
      class="modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ product.name }} Details</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <img
                  class="card-img"
                  :src="product.image"
                  alt="Product Image"
                />
              </div>
              <div class="col-md-6">
                <p>{{ product.description }}</p>
                <RatingStars :objectId="product.id" class="pb-2" />
                <p>Price: €{{ product.price }}</p>
                
                <div class="d-flex">
                  <a v-if="product.quantity > 0"
                    class="btn btn-outline-dark justify-content-center w-100 mx-2"
                    href="#"
                    @click="addToCartHandler(product.id)"
                    >Add to cart</a
                  >
                  <span v-else class="text-danger px-2">Out of Stock</span>
                  <a href="/cart"  class="btn btn-outline-dark justify-content-center "> <i class="bi bi-cart4"></i></a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useCartStore } from "../store/CartStore";
import RatingStars from "./RatingStars.vue";


const props = defineProps(["product"]);
const cartStore = useCartStore();

const addToCartHandler = (productId) => {
  const productAdded = cartStore.addToCart(props.product);
  
};
</script>

<style scoped >
.card-img-top {
  object-fit: cover;
  padding: 2rem;
}

.image-height {
  height: 15rem;
  overflow: hidden;
}

.card-group {
  height: calc(100vh / 1.5);
}
.card-img-top:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease-in-out;
}

.card {
  border-radius: 1rem  ;
  border:2px solid #8e8e8e83;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.5s ease-in-out;}

.card:hover {
  box-shadow: 0 30px 30px 0 rgba(255, 255, 255, 0.2);
}

.card-footer {
  background-color: transparent;
  border-top: none;
}

.card-body {
  background-color: transparent;
  height: 8rem;
}

@import'../styleCart.css';



</style>
