import axios from 'axios';
import { useCartStore } from '../store/CartStore';

const cartStore = useCartStore();


export default class Api {
    static headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

    }

    

    static async checkCoupons(couponCode) 
    {

        try {
            const response = await axios.post('http://localhost:3333/check-coupon', { couponCode: couponCode });
            console.log(response);

            if (response.data.success) {
                alert('Coupon is valid');
                 
                return response.data.discount;
            } else {
                alert('Coupon is not valid');
                return 0;
            }

        } catch (error) {
            console.error(error);
            alert('Coupon is not valid');
            return 0;
        }

        
    }

    static async doCheckout(data)
    {
       // if (!Array.isArray(data.products) || typeof data.coupon !== 'string') {
       //     throw new Error('Invalid data format for checkout.');
       //   }

        try {
            

            const response = await axios.post('http://localhost:3333/checkout', data);
            
            
            alert('Checkout done');
            cartStore.clearCart();
            localStorage.clear();
        } catch (error) {
            console.error(error);
            alert('Checkout failed ' + error.error);
        }
    }


    static async getProducts() 
    {
        try {
            const response = await axios.get('http://localhost:3333/products');
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
