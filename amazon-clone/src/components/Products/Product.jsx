import React, { useState,useEffect } from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
const Product = () => {
    const [products, setProducts]=useState({})
    useEffect(() => {
       axios.get('https://fakestoreapi.com/products')
       .then(res=>{
        console.log(res);
     
          setProducts(res.data)
      //     console.log(products);      
       })
       .catch((err)=>{
        console.log(err); 

       })
      }, []);
    return (     
        <section className={classes.products_container}>
            {              
          products && products.map && products.map((singleProduct)=>{               
             return <ProductCard  product={singleProduct} Key={singleProduct.id}/>  
        })        
            }        
        </section>   
    );
}

export default Product;
