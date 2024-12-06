import React, { useEffect,useState } from 'react';
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import Product from '../../components/Products/Product';
import ProductCard from '../../components/Products/ProductCard';
const Results = () => {
    const [results,setResults]=useState([])
    const {categoryName}=useParams()
   // console.log(categoryName);
    useEffect(() => {
        axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res)=>{
        setResults(res.data)
        console.log(res);
       })
       .catch((err)=>{
        console.log(err)
       })
    }, []);

    
    
    return (
        <LayOut>
            <section>
                <h1 style={{padding:"30px"}}>Results</h1>
                <p style={{padding:"30px"}}>Category / {categoryName}</p>
                <hr />  
                <div className={classes.products_container}>
                    {
                    results && results.map && results?.map((Product)=>{
                     return    <ProductCard key={productUrl.id} 
                                        product={product} />
                    }
                       
                    
                    )}

                </div>
            
            </section>
        </LayOut>
    );
}

export default Results;
