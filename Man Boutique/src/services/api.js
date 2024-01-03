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
                alert(response.data.message);
                 
                return response.data.discount;
            } else {
                alert(response.data.message);
                return 0;
            }

        } catch (error) {
            console.error(error);
            alert('Coupon invalid: ' + error.message);
            return 0;
        }

        
    }

    static async doCheckout(data)
    {
        if (!Array.isArray(data.products) || typeof data.coupon !== 'string') {
            alert('Invalid data');
            return;
          }
          

        try {
            

            const response = await axios.post('http://localhost:3333/checkout', data);
            
            
            alert(response.data.message);
            cartStore.clearCart();
            localStorage.clear();
            return response.data;
        } catch (error) {
            console.error(error);
            alert('Checkout failed: ' + error.message);
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
