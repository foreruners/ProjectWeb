<template>

    <div class="cart">
        <h1>Shopping Cart</h1>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            
            // for testing purposes
            cartItems: [
                { id: 1, name: "Item 1", price: 10, quantity: 1, image: "item1.jpg" },
                { id: 2, name: "Item 2", price: 20, quantity: 2, image: "item2.jpg" },
                { id: 3, name: "Item 3", price: 15, quantity: 1, image: "item3.jpg" },
                { id: 4, name: "Item 4", price: 12, quantity: 3, image: "item4.jpg" }
            ]
        };
    },
    methods: {
        removeFromCart(item) {
            // Remove item from cart
        },
        getTotalPrice() {
            // Calculate total price of items in cart
        },
        checkout() {
            // Perform checkout process
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>

