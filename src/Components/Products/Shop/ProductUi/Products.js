import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props.product);
    const { img, name, category, seller, price, stock, ratings, shipping, features } = props.product
    return (
        <div className='singleProductContainer'>
            <div><img className='itemimg' src={img} alt="" /></div>

            <div>
                <h2>{name}</h2>

                <p  > by: <i>{seller}</i></p>
                <div className='twoColoumn'>
                    <div>
                        <h3>$ <span> {price}</span></h3>
                        <p> <cite>{stock} Available in Stock </cite></p>
                        <button onClick={() => props.func(props.product)} className='btn-addCart'><FontAwesomeIcon icon={faCartShopping} /> Add Cart</button>
                    </div>
                    <div className='rightSideElement'>
                        <h4>Features</h4>
                        <ul>
                            {
                                features.map(p =>
                                    <div key={p.description}>

                                        <li >{p.description} : {p.value}</li>

                                    </div>


                                )
                            }
                        </ul>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;