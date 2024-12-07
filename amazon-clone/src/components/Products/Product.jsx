import React, { useState,useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loader from '../Loader/Loader';
const Product = () => {
    const [products, setProducts]=useState({})
    const [isLoading, setIsLoading]=useState(false)
    useEffect(() => {
        // setIsLoading(true)
       axios.get('https://fakestoreapi.com/products')
       .then(res=>{
        console.log(res);     
          setProducts(res.data)
        setIsLoading(false)      
       })
       .catch((err)=>{
        console.log(err); 
        setIsLoading(false) 
       })
      }, []);
    return ( 
        <>
        {
            isLoading ?(<Loader />):(
                <section className={classes.products_container}>
            {              
          products && products.map && products.map((singleProduct)=>{               
             return <ProductCard  product={singleProduct} Key={singleProduct.id}/>  
            })        
            }        
            </section> 
            )
        }
        
        </>    
          
    );
}

export default Product;
