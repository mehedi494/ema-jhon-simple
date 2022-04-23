import React from 'react';
import { useState } from 'react';

import './Summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const Summary = props => {
    const { cart } = props;
// const [ price, SetPrice]=useState([])
//     console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
        
        
        
        // console.log(newCart);
        

    }
    const Shipping = total * 5/ 100
    const grossTotal = total + Shipping
    const EstTxt = total * 5 / 100
    const grandTotal = Shipping + grossTotal + EstTxt;

    return (
        <div className='summary-Container'>
            <h1>Order summary </h1>
            <h3>Items Ordered :  <span>{props.cart.length}</span></h3>
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
                    <p>$<span>{ grossTotal.toFixed(2)}</span></p>
                </div>
                <div className="twoColumElement border">
                    <p>Estimated Tax:</p>
                    <p>$<span>{EstTxt.toFixed(2)}</span></p>
                </div>
                <div className="twoColumElement">
                    <h3>Grand Total:</h3>
                    <h3>$<span>{grandTotal.toFixed(2)}</span></h3>
                </div>
                <button className='review-order-btn'><FontAwesomeIcon icon={faBagShopping} /> Check out</button>
            </div>


        </div>
    );
};

export default Summary;