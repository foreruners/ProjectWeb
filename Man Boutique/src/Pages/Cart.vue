<template>
    <div class="container py-5 h-100" style="margin-top: 80px;">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12">
                <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                    <div class="card-body p-0">
                        <div class="row g-0">
                            <div class="col-lg-8">
                                <div class="p-5">
                                    <div class="d-flex justify-content-between align-items-center mb-5">
                                        <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                                        <h6 class="mb-0 text-muted">{{ cartItems.length }} items</h6>
                                    </div>
                                    <hr class="my-4">
                                    <div v-if="cartItems.length === 0">
                                        <h3>CART IS EMPTY</h3>
                                    </div>
                                    <div v-else class="show">
                                        
                                        <CartItem v-for="item in cartItems" :key="item.id" :item="item" :increment="increment" :decrement="decrement" :removeItem="removeItem" />

                                    </div>
                                    <hr class="my-4">
                                    <div class="pt-5">
                                            <a href="/shop"><h6 class="mb-0 btn  hero-button"> Back to shop</h6></a> 
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 bg-grey" id="summary">
                                <div class="p-5">
                                  <h3 class="fw-bold mb-5 mt-2 pt-1">SUMMARY</h3>
                                  <hr class="my-4">
                                  <h5 class="mb-3">COUPON</h5>
                                  <div class="mb-5">
                                    <div class="form-outline">
                                      <input type="text" id="formC" placeholder="Enter your code"
                                             class="form-control form-control-lg" v-model="couponCode" />
                                      <label class="form-label text-muted" for="form3Examplea2"></label>
                                    </div>
                                    <button @click="applyCoupon" class="btn btn-style">Apply</button>
                                  </div>
                                    <CartSummary :totalPrice="totalPrice" :discount1="discount1" :total="total" :cartItemsLength="cartItems.length" :applyCoupon="applyCoupon" :checkout="checkout"  :cartItems="cartItems"/>
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
import { defineProps, computed, ref, onMounted } from 'vue';
import { useCartStore } from '../store/CartStore';
import Api from '../services/api.js';
import CartItem from '../components/CartItemsComp.vue';
import CartSummary from '../components/CartSummary.vue';





const props = defineProps(['product']);
const cartStore = useCartStore();
const cartItems = cartStore.cart;
const increment = cartStore.incrementQuantity;
const decrement = cartStore.decrementQuantity;
const removeItem = cartStore.removeFromCart;
const couponCode = ref('');
const discount1 = ref(0);

//the reduce() method reduces the array to a single value 
const totalPrice = computed(() => {
    return (cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);
});


const applyCoupon = async () => {

    if (couponCode.value === '') {
        alert('Please enter a coupon code');
        return;
    }

    discount1.value = await Api.checkCoupons(couponCode.value);
    console.log(couponCode.value);
};


const total = computed(() => {
    return (totalPrice.value - (totalPrice.value * discount1.value / 100)).toFixed(2);
});


const checkout = async () => {

    if (cartItems.length === 0) {
        alert('Cart is empty');
        return;
    }
    const data = {
        products: cartItems.map(item => ({ id: item.id, quantity: item.quantity })),
        coupon: couponCode.value,
    };

    await Api.doCheckout(data);



};

</script>

<style>
@import'../styleCart.css';

</style>

