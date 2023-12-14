<template>
    <div class="cart container text-center mt-5 mb-5 p-5">
        <h1 class="text-start">Shopping Cart</h1>
        <div class="row">
            <div class="col-9">
                <div v-if="cartItems.length === 0">
                    <p>Your cart is empty.</p>
                </div>
                <div v-else class="show">
                    <div class="cart-items">
                        <div class="card">
                            <div class="card-body">
                                <ul class="list-group list-group-flush" style="max-height: 400px; overflow: auto;">
                                    <li v-for="item in cartItems" :key="item.id">
                                        <div class="item-details pb-1">
                                            <div class="row">
                                                <div class="col-2 text-start">
                                                    <img :src="item.image" />
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
                                                                @click="removeFromCart(item)">-</button>
                                                        </div>
                                                        <div class="col">
                                                            <div class="pt-2">
                                                                {{ item.quantity }}
                                                            </div>
                                                        </div>
                                                        <div class="col ">
                                                            <button class="btn btn-light"
                                                                @click="addInCard(item)">+</button>
                                                        </div>
                                                        <div class="col text-end">
                                                            <button class="btn btn-light"
                                                                @click="deletedItem(item)">Delete</button>
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
                        <input type="text" v-model="getCouponCode" placeholder="Enter coupon code" />
                        <button @click="checkCoupons">Apply</button>
                    </div>
                </div>
                <div class="row pt-5 ps-5 text-start">
                    <div class="cart-total">
                        <p>Total Price: {{ }}€ </p>
                        <p>Discount: {{ }}€ </p>
                        <p>Total: {{ }}€ </p>
                        <button @click="Docheckout">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import Api from '../services/api.js';
export default {
    data() {
        return {
         getCouponCode: '',
            // for testing purposes
            cartItems: [
                { id: 1, name: "vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", price: 10, quantity: 1, image: "item2.jpg" },
                { id: 2, name: "Item 2", price: 20, quantity: 2, image: "item2.jpg" },
                { id: 3, name: "Item 3", price: 15, quantity: 1, image: "item3.jpg" },
                { id: 4, name: "Item 4", price: 12, quantity: 3, image: "item4.jpg" },
                { id: 5, name: "Item 5", price: 8, quantity: 2, image: "item5.jpg" },
                { id: 6, name: "Item 6", price: 15, quantity: 1, image: "item6.jpg" },
                { id: 7, name: "Item 7", price: 10, quantity: 4, image: "item7.jpg" },
                { id: 8, name: "Item 8", price: 18, quantity: 2, image: "item8.jpg" },
                { id: 8, name: "Item 8", price: 18, quantity: 2, image: "item8.jpg" },
                { id: 9, name: "Item 9", price: 25, quantity: 3, image: "item9.jpg" },
                { id: 10, name: "Item 10", price: 30, quantity: 1, image: "item10.jpg" },
                { id: 11, name: "Item 11", price: 15, quantity: 2, image: "item11.jpg" },
                { id: 12, name: "Item 12", price: 22, quantity: 1, image: "item12.jpg" }
                      
            ]
        };
    },
    methods: {
        removeFromCart(item) {
            // Remove item from cart
            const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                this.cartItems.splice(index, 1);
            }
        },
        addInCard(item) {
            // Add item to cart
                const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
                if (index !== -1) {
                    this.cartItems[index].quantity += 1;
                }
            
        },
        deletedItem(item) {
            // Delete item from cart
            const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1)
             {
                 this.cartItems.splice(index, 1);
            }
        },
        getTotalPrice() {
            // Calculate total price of items in cart
            this.totalPrice = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
       
        },
        getTotal()
        {
            //total = totalPrice - discount
        },
        doCheckout() {
            // Perform checkout process
           

            
            this.cartItems = [];      
          
        },
        checkCoupons()
         {
            // Check if cupon is valid
             Api.checkCoupons(this.getCouponCode)
                .then(response => {
                    if (response.data) {
                        this.discount = response.data.discount;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            
        }

    }
}

</script>


<style scoped>
.row {
    background-color: rgb(246, 245, 245);
}
</style>

