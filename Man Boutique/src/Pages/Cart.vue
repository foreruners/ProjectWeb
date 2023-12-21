<template>
    <div class="cart container text-center mt-5 mb-5 p-5">
         <div class="row">
            <div class="col-12 col-md-9">
                <div v-if="cartItems.length === 0">
                    <div class="card">
                      <div class="card-header">
                        <h3 class="text-start">Shopping Cart</h3>
                      </div>
                      <div class="card-body">
                        <p>Cart is empty.</p>
                      </div>
                    </div>
                </div>
                <div v-else class="show">
                    <div class="cart-items">
                        <div class="card">
                            <div class="card-header">
                                 <h3 class="text-start">Shopping Cart</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush" style="max-height: 60vh; overflow: auto;">
                                    <li v-for="item in cartItems" :key="item.id">
                                        <div class="item-details pb-1">
                                            <div class="row" >
                                                <div class="col-12 col-md-2 text-start">
                                                    <img :src="item.image" style="max-width: 5vw;" class="img-fluid" alt="Product Image" />
                                                </div>
                                                <div class="col-12 col-md-3 " >
                                                    {{ item.name }}
                                                </div>
                                                <div class="col-12 col-md-4  text-end">
                                                    <div class="row" >
                                                        <div class="col-6 col-md-3">
                                                            <button class="btn btn-light btn-sm"
                                                                @click="decrement(item.id)">-</button>
                                                        </div>
                                                        <div class="col-6 col-md-3">
                                                            <div class="pt-2">
                                                                {{ item.quantity }}
                                                            </div>
                                                        </div>
                                                        <div class="col-6 col-md-3 ">
                                                            <button class="btn btn-light btn-sm"
                                                                @click="increment(item.id)">+</button>
                                                        </div>
                                                        <div class="col-6 col-md-3">
                                                            <button class="btn btn-light btn-sm"
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
            <div class="col-12 col-md-3">
                    <div class="row pb-3 text-start">
                        <div class="cart-cupons col-md-12">
                            <h3>Cupons</h3>
                            <input type="text" v-model="couponCode" placeholder="Enter coupon code" />
                            <button @click="applyCoupon" class="btn btn-primary">Apply</button>
                        </div>
                    </div>
                <div class="row pt-3 text-start">
                    <div class="cart-total col-md-12">
                        <p>Total Price: {{ totalPrice}}€ </p>
                        <p>Discount: {{discount1 }}% </p>
                        <p>Total: {{ total}}€ </p>
                        <button @click="checkout" class="btn btn-primary btn-block">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps , computed, ref} from 'vue';
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
  return (totalPrice.value - (totalPrice.value * discount1.value/100)).toFixed(2);
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
.row {
    background-color: rgb(246, 245, 245);
}
#appSummary{
    justify-content:center;
}
</style>

