import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Summary from '../Summary/Summary';
import Products from './ProductUi/Products';
import "./Shop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useCart from './../../../Hooks/useCart';
import useProduct from './../../../Hooks/useProducts';
import { Link, NavLink } from 'react-router-dom';



const Shop = () => {
    const [cart, SetCart] = useCart()
    const [products, setProducts] = useProduct([])
    const [search, Setsearch] = useState([]);


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                Setsearch(res)
            })
    }, [])
    useEffect(() => {
        const savedCart = getStoredCart();
        // console.log(savedCart);
        let newStoredCart = []
        if (products.length) {

            for (const key in savedCart) {

                // console.log(key, savedCart[key]);
                let quantityNumber = savedCart[key];
                const storedCart = products.find(product => product.key === key)
                // console.log(storedCart.length, storedCart);
                storedCart.quantity = quantityNumber;
                newStoredCart.push(storedCart)

            }
            SetCart(newStoredCart)
            // console.log(newStoredCart);



        }
    }, [products])
    // let total = 0;
    const searchHandler = params => {
        const serachText = params.target.value;
        const matchedResult = products.filter(prodcut => prodcut.name.toLowerCase().includes(serachText.toLowerCase()))
        console.log(matchedResult.length);
        console.log(matchedResult);
        Setsearch(matchedResult)
        


    }

    const BtnHandler = params => {
        // if(cart.)
        // console.log(cart);
        // console.log(params);
        const newCart = [...cart, params]
        addToDb(params.key)

        SetCart(newCart)
    }



    return (
        <>
            <div className='input-container'>
                <span className='srcAndiconCombine'>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    <input onChange={(target) => { searchHandler(target) }} className='inputField' type="text" placeholder='Search your products here' />
                </span>
            </div>
            <div className='products-container'>


                <div>
                    {
                        products.length ? search.map(product => <Products key={product.key} product={product} func={BtnHandler}></Products>) :
                            <div class="spinner-grow spinner" role="status">
                                <span class="visually-hidden">Loading...</span>
                                <p className='loadingTxt'>Loading</p>
                            </div>
                    }
                </div>


                <Summary key={cart.id} cart={cart}>
                    <NavLink to="/orderReview"> <button className='review-order-btn'>Review order</button></NavLink>
                </Summary>
            </div>
        </>)
};

export default Shop;