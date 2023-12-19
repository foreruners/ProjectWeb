<template>
    <div class="cart container text-center mt-5 mb-5 p-5">
        <h1 class="text-start">Shopping Cart</h1>
        <div class="row">
            <div class="col-9">
                <div v-if="cartItems.length === 0">
                    <p>Cart is empty.</p>
                </div>
                <div v-else class="show">
                    <div class="cart-items">
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush" style="max-height: 500px; overflow: auto;">
                                    <li v-for="item in cartItems" :key="item.id">
                                        <div class="item-details pb-1">
                                            <div class="row">
                                                <div class="col-2 text-start">
                                                    <img :src="item.image" class="small-image" />
                                                </div>
                                                <div class="col-3">
                                                    {{ item.name }}
                                                </div>
                                                <div class="col">

                                                </div>
                                                <div class="col text-end">
                                                    <div class="row">
                                                        <div class="col">
                                                            <button class="btn btn-light"
                                                                @click="decrement(item.id)">-</button>
                                                        </div>
                                                        <div class="col">
                                                            <div class="pt-2">
                                                                {{ item.quantity }}
                                                            </div>
                                                        </div>
                                                        <div class="col ">
                                                            <button class="btn btn-light"
                                                                @click="increment(item.id)">+</button>
                                                        </div>
                                                        <div class="col text-end">
                                                            <button class="btn btn-light"
                                                                @click="removeItem(item.id)">Delete</button>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row pb-5 ps-5 text-start">
                    <div class="cart-cupons">
                        <h3>Cupons</h3>
                        <input type="text" v-model="couponCode" placeholder="Enter coupon code" />
                        <button @click="">Apply</button>
                        </div>
                </div>
                <div class="row pt-5 ps-5 text-start">
                    <div class="cart-total">
                        <p>Total Price: {{ totalPrice}}€ </p>
                        <p>Discount: {{discount1 }}€ </p>
                        <p>Total: {{ total}}€ </p>
                        <button @click="">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import axios from 'axios';
import { defineProps , computed, ref} from 'vue';
import { useCartStore } from '../store/CartStore';


const props = defineProps(['product']);
const cartStore = useCartStore();
const cartItems = cartStore.cart;
const increment = cartStore.incrementQuantity;
const decrement = cartStore.decrementQuantity;
const removeItem = cartStore.removeFromCart;
let couponCode = ref('');
//console.log(couponCode.value);


const totalPrice = computed(() => {
  return (cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2);
});


const discount1 = 0;
const total = computed(() => {
  return (totalPrice.value - discount1).toFixed(2);
});

</script>


<style scoped>
.row {
    background-color: rgb(246, 245, 245);
}
.small-image {
    width: 50px;
    height: 50px;
}
</style>

