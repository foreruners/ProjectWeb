<template>
    <div class="container py-5 h-100">
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
                                        <div v-for="item in cartItems" :key="item.id" class="row mb-4 d-flex justify-content-between align-items-center ">
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                                <img :src="item.image" class="img-fluid rounded-3" alt="Product Image">
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                                <h6 class="text-muted mb-0">{{ item.name }}</h6>
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button class="btn btn-link px-2" @click="decrement(item.id)">
                                                    <i class="bi bi-dash-square"></i>
                                                </button>

                                                <div class="pt-2 text-muted">
                                                    {{ item.quantity }}
                                                </div>

                                                <button class="btn btn-link px-2" @click="increment(item.id)">
                                                    <i class="bi bi-file-plus"></i>
                                                </button>
                                            </div>
                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0 text-muted">{{ item.price }} €/unit</h6>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-xl-1">
                                                <button class="btn btn-link px-2" @click="removeItem(item.id)">
                                                    <i class="bi bi-trash3"></i></button>
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="my-4">

                                    <div class="pt-5">
                                        <router-link to="/shop" class="btn btn-primary hero-button">
                                            <h6 class="mb-0"> Back to shop</h6>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 bg-grey">
                                <div class="p-5">
                                    <h3 class="fw-bold mb-5 mt-2 pt-1">SUMMARY</h3>
                                    <hr class="my-4">
                                    <h5 class="mb-3">COUPON</h5>

                                    <div class="mb-5">
                                        <div class="form-outline">
                                            <input type="text" id="form3Examplea2" placeholder="Enter your code" class="form-control form-control-lg"
                                                v-model="couponCode" />
                                            <label class="form-label text-muted" for="form3Examplea2"></label>
                                        </div>
                                        <button @click="applyCoupon" class="btn btn-primary">Apply</button>
                                    </div>

                                    <hr class="my-4">

                                    <div class="d-flex justify-content-between mb-5">
                                        <h5>TOTAL PRICE</h5>
                                        <h5>{{ totalPrice }} €</h5>
                                    </div>

                                    <div class="d-flex justify-content-between mb-5">
                                        <h5>DISCOUNT</h5>
                                        <h5> {{ discount1 }} %</h5>
                                    </div>

                                    <div class="d-flex justify-content-between mb-5">
                                        <h5>FINAL PRICE</h5>
                                        <h5>{{ total }} €</h5>
                                    </div>

                                    <button type="button" class="btn btn-primary btn-block btn-lg"
                                        data-mdb-ripple-color="dark" @click="checkout">Checkout</button>

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
import { defineProps, computed, ref } from 'vue';
import { useCartStore } from '../store/CartStore';
import Api from '../services/api.js';


const props = defineProps(['product']);
const cartStore = useCartStore();
const cartItems = cartStore.cart;
const increment = cartStore.incrementQuantity;
const decrement = cartStore.decrementQuantity;
const removeItem = cartStore.removeFromCart;
const couponCode = ref('');
const discount1 = ref(0);






const totalPrice = computed(() => {
    return (cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);
});


const applyCoupon = async () => {
    discount1.value = await Api.checkCoupons(couponCode.value);
    console.log(couponCode.value);
};
const total = computed(() => {
    return (totalPrice.value - (totalPrice.value * discount1.value / 100)).toFixed(2);
});


const checkout = async () => {
    console.log(couponCode.value);
    const data = {
        products: cartItems.map(item => ({ id: item.id, quantity: item.quantity })),
        coupon: couponCode.value,
    };

    await Api.doCheckout(data);
};

</script>


<style scoped>
@import '../styleCart.css';
</style>

