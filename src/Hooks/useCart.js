import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';
import useProduct from './useProducts';



const useCart = (products) => {
    const [cart, SetCart] = useState([])
    
    
    useEffect(() => {
        const savedCart = getStoredCart();
        // console.log(savedCart);
        let newStoredCart = []
        if (products?.length) {

            for (const key in savedCart) {

                // console.log(key, savedCart[key]);
                let quantityNumber = savedCart[key];
                const storedCart = products.find(product => product.key === key)
                // console.log(storedCart.length, storedCart);
                storedCart.quantity = quantityNumber;
                newStoredCart.push(storedCart)

            }
            SetCart(newStoredCart)
            // console.log(newStoredCart)


        }
    }, [products])

    return [cart,SetCart]
    
};

export default useCart;