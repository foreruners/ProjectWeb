<template>
   
   <!-- Cart Summary -->
        <hr class="my-4">
        <div class="d-flex justify-content-between mb-5">
          <h6>TOTAL PRICE</h6>
          <h6 class="text-muted">{{ totalPrice }} €</h6>
        </div>
        <div class="d-flex justify-content-between mb-5">
          <h6>DISCOUNT</h6>
          <h6 class="text-muted"> {{ discount1 }} %</h6>
        </div>
        <div class="d-flex justify-content-between mb-5">
          <h6>FINAL PRICE</h6>
          <h6 class="text-muted">{{ total }} €</h6>
        </div>
        <div v-if="cartItemsLength !== 0">
          <button type="button" class="btn  btn-block " data-toggle="modal"
                  data-target="#cartModal" data-mdb-ripple-color="dark">Checkout</button>
        </div>
        <div v-else>
          <button type="button" class="btn  btn-block" @click="checkout">Checkout</button>
        </div>


        <!-- setup  Cart Summary Modal-->
    <div v-if="cartItems.length !== 0" >
        <div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-muted" id="ModalLabel"><i>Cart Summary</i></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-for="item in cartItems" :key="item.id"
                            class="row mb-4 d-flex justify-content-between align-items-center ">
                            <div class="col-md-3 col-lg-3 col-xl-3">
                                <h6 class="text-muted mb-0"><i>{{ item.name }}</i></h6>
                            </div>
                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                <div class="pt-2 text-muted">
                                    <i>{{ item.quantity }}</i>
                                </div>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 class="mb-0 text-muted"><i>{{ (item.price * item.quantity).toFixed(2) }}€</i></h6>
                            </div>
                        </div>
                        <p class="text-muted"><i>Price: {{ totalPrice }} €</i></p>
                        <p class="text-muted"><i>Discount: {{ discount1 }} %</i></p>
                        <p class="text-muted"><i>Final Price: {{ total }} €</i></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            @click="checkout">Continue</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
  </template>
  
  <script setup>
  //props is used to pass data from parent to child
  const props = defineProps({
    totalPrice: Number,
    discount1: Number,
    total: Number,
    cartItemsLength: Number,
    applyCoupon: Function,
    couponCode: String,
    checkout: Function,
    cartItems: Array
  });
</script>