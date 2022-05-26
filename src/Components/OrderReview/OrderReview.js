import React from 'react';
import Summary from '../Products/Summary/Summary';
import useProduct from './../../Hooks/useProducts';
import Review from './Review/Review';
import ReviewSummary from './Summary/ReviewSummary';
import useCart from './../../Hooks/useCart';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';



const OrderReview = () => {
    const [products] = useProduct()
    const [cart, SetCart] = useCart(products);

    const handleDelet = (key) => {
        const newCart = cart.filter(pd => pd.key !== key)
        deleteFromDb(key)
        SetCart(newCart);
        
    }
    
    return (
        <div className='products-container'>
            <div>
                
                    { cart.map(product => <Review key={product.key} handleDelet={handleDelet}  product={product}></Review>) }
                
            </div>



            <ReviewSummary>
            
            </ReviewSummary>
          </div>
  
    );
};

export default OrderReview;