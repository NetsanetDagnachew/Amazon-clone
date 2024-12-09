import React, {useState, useEffect} from 'react';
import classes from './ProductDtails.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../components/Products/ProductCard';
import Loader from '../../components/Loader/Loader'

const ProductDetails = () => {
   const [product,setProduct]=useState({});
   const [isLoading, setIsLoading]=useState(false)
   const {productId}=useParams()
    
    useEffect(() => {
        setIsLoading(true)
      axios.get(`${productUrl}/products/${productId}`)
        .then((res)=>{
            // console.log(res);
            setProduct(res.data);
            setIsLoading(false)
        })
        .catch((err)=>{
            console.log(err);
            setIsLoading(false)
        })
    }, []);

    return (
        <LayOut>  
            { isLoading ?( <Loader/>):(<ProductCard product={product} 
                                                    key={product.id} 
                                                    flex={true}     
                                                    renderDesc={true}
                                                    renderAdd={true}/>
        )}          
         
        </LayOut>
    );
}

export default ProductDetails;
