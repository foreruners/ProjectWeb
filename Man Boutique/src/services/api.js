export default class Api {
    static headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

    }

    static url = 'http://localhost:3333/';

    static async checkCoupons(couponCode) 
    {

        try {
            const response = await axios.post(url + 'check-coupon', { couponCode: couponCode });
            console.log(response);

            if (response.data.success) {
                alert('Coupon is valid');
                 
                return response.data.discount;
            } else {
                alert('Coupon is not valid');
            }

        } catch (error) {
            console.error(error);
        }

        
    }

    static async doCheckout(data)
    {
        try {
            const response = await axios.post(url + 'checkout', data);
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }


    static async getProducts() 
    {
        try {
            const response = await axios.get(url + 'products');
            console.log(response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
