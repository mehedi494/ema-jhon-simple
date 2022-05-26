import React from 'react';
import useCart from './../../../Hooks/useCart';

import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useProduct from './../../../Hooks/useProducts';
import { NavLink } from 'react-router-dom';
import { clearTheCart } from '../../../utilities/fakedb';

const ReviewSummary = () => {
    const [products] = useProduct()
    const [ cart ] = useCart(products)
    
    // console.log(cart);

    let total = 0;
    let TotalQuantity = 0;
    for (const product of cart) {
        // console.log(product.quantity);
        //    console.log(product.quantity);
        product.quantity = !product.quantity ? product.quantity = 1 : product.quantity;
        total =  product.price * product.quantity
        TotalQuantity += product.quantity;

        
    }
    const RemoveLS = () => {
        clearTheCart()
    }
    // console.log(TotalQuantity);

    //........... REDUCER USE......................

    //     const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer,0)
    // 
    // const totalPrice = cart.reduce((previous,product)=>previous+ product.price,0)
    // const TotalQuantity = cart.reduce((previous, product) => previous + product.quantity, 0)
    // console.log(TotalQuantity);
    // ...............................................................................
    const Shipping = total > 0 ? 15 : 0;
    const grossTotal = total + Shipping
    const EstTxt = total * 5 / 100
    const grandTotal = (grossTotal + EstTxt);


    return (
        <div className='summary-Container'>
            <h1>Order summary </h1>
            <h3>Items Ordered :  <span>{TotalQuantity}</span></h3>
            <div className='twoColumContainer'>
                <div className="twoColumElement">
                    <p>Items</p>
                    <p>$<span>{total.toFixed(2)}</span></p>
                </div>
                <div className="twoColumElement">
                    <p>Shipping & Handling:</p>
                    <p>$<span>{Shipping.toFixed(2)}</span></p>
                </div>
                <div className="twoColumElement">
                    <p>Total before tax:</p>
                    <p>$<span>{grossTotal.toFixed(2)}</span></p>
                </div>
                <div className="twoColumElement border">
                    <p>Estimated Tax: </p>
                    <p>$<span>{EstTxt.toFixed(2)}</span></p>
                </div>
                <div className="twoColumElement">
                    <h3>Grand Total:</h3>
                    <p>$<span>{grandTotal.toFixed(2)}</span></p>

                </div>
                <NavLink to='/PlaceOrder'><button onClick={ ()=>RemoveLS()} className='review-order-btn'><FontAwesomeIcon icon={faBagShopping} /> Place Order</button></NavLink>
            </div>


        </div>
    );
};

export default ReviewSummary;