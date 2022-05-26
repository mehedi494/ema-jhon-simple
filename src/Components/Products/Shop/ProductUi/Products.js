import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faStar as fasStar} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-regular-svg-icons'

import Rating from 'react-rating';

const Products = (props) => {
    // console.log(props.product);
    const { img, name, seller, price, stock, features, star } = props.product
    console.log(props.product);
    
       
    
    return (
        <div>
            {
                props.product ? 
                    <div className='singleProductContainer'>
                        <div><img className='itemimg' src={img} alt="" /></div>

                        <div>
                            <h2>{name}</h2>

                            <p  > by: <i>{seller}</i></p>
                            <div className='twoColoumn'>
                                <div>
                                    <h3>$ <span> {price}</span></h3>
                                    <p> <cite>{stock} Available in Stock </cite></p>
                                    <Rating
                                        readonly
                                        initialRating={star}
                                        fullSymbol={<FontAwesomeIcon className='startIcon' icon={fasStar} />}
                                        emptySymbol={<FontAwesomeIcon className='startIcon' icon={faStar}
                                        />} />

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
                    :
                    <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> 
            }
        </div>
    );
};

export default Products;