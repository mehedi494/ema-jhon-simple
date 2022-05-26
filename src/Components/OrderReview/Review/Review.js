import React from 'react';
import './Review.css';
const Review = (props) => {
    
    const { name, price,  quantity, key } = props.product
    // console.log(props.handle);
    
    return (
        <div className='singleProductContainer2'>
            {/* <div><img className='itemimg' src={img} alt="" /></div> */}

            <div>
               

                
                <div className='twoColoumn2'>
                    <div>
                        <h4>{name}</h4>
                        
                        <h3>$ <span> {price}</span></h3>
                        <p> <cite> Quantity: {quantity} </cite></p>
                        

                        <button onClick={() => props.handleDelet(key)} className='btn-addCart'> Remove</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Review;