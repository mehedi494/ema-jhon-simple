import { useState, useEffect } from 'react';

const useProduct= () => {
    const [products, SetProducts] = useState([])
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
            .then(res => res.json())
            .then(data => SetProducts(data))
    },[])
    return [products,SetProducts]
}
export default useProduct;