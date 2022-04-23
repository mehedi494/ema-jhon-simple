import React, { useEffect, useState } from 'react';
import Summary from '../Summary/Summary';
import Products from './ProductUi/Products';
import "./Shop.css"
const Shop = () => {
    const [cart,SetCart] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
            .then(res => res.json())
            .then(res => setProducts(res))
    }, [])

    // let total = 0;
    const BtnHandler = params => {
        const newCart = [...cart, params]
        // console.log(cart);
        SetCart(newCart)
    }
    
    return (
        <div className='products-container'>


            <div>
                {
                    products.map(product => <Products key={product.key} product={product} func={BtnHandler}></Products>)
                }
            </div>


            <Summary key={cart.id} cart={cart}></Summary>
        </div>
    );
};

export default Shop;