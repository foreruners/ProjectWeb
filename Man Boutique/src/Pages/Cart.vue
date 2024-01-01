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
                                        <!-- Loop for display cart items-->
                                        <div v-for="item in cartItems" :key="item.id"
                                            class="row mb-4 d-flex justify-content-between align-items-center ">
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                                <img :src="item.image" class="img-fluid rounded-3" alt="Product Image">
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                                <h6 class="text-muted mb-0">{{ item.name }}</h6>
                                            </div>
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                <button class="btn btn-inc-decr btn-link px-2" @click="decrement(item.id)">
                                                    <i class="bi bi-dash"></i>
                                                </button>
                                                <div class="pt-2 text-muted px-2" style="font-size: 1rem;">
                                                    {{ item.quantity }}
                                                </div>
                                                <button class="btn btn-inc-decr btn-link px-2" @click="increment(item.id)">
                                                    <i class="bi bi-plus"></i>
                                                </button>
                                            </div>
                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0 text-muted">{{ item.price }} €/unit</h6>
                                            </div>
                                            <div class="col-md-1 col-lg-1 col-xl-1">
                                                <button class="btn btn-style btn-link px-2" @click="removeItem(item.id)">
                                                    <i class="bi bi-trash3"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4">
                                    <div class="pt-5">
                                            <a href="/shop"><h6 class="mb-0 btn btn-primary hero-button"> Back to shop</h6></a> 
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
                                            <input type="text" id="form3Examplea2" placeholder="Enter your code"
                                                class="form-control form-control-lg" v-model="couponCode" />
                                            <label class="form-label text-muted" for="form3Examplea2"></label>
                                        </div>
                                        <button @click="applyCoupon" class="btn btn-style btn-primary">Apply</button>
                                    </div>
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
                                    <button type="button" class="btn  btn-block btn-lg" data-toggle="modal"
                                        data-target="#exampleModal" data-mdb-ripple-color="dark">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



<!-- setup  Cart Summary Modal-->
    <div v-if="cartItems.length !== 0" >
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-muted" id="exampleModalLabel"><i>Cart Summary</i></h5>
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
                                <h6 class="mb-0 text-muted"><i>{{ item.price * item.quantity }}€</i></h6>
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
import { defineProps, computed, ref, onMounted } from 'vue';
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
a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
}

a:hover {
    color: #535bf2;
}



h1 {
    font-size: 3.2em;
    line-height: 1.1;
}


.btn {
    background-color: #171133;
    border-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-weight: bold;
    transition: all 0.5s ease-in-out;
}


.btn:hover {
    background-color: #171133;
    border-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    font-weight: bold;
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
}


</style>

