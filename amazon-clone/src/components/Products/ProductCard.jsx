import React from 'react';
import classes from './Product.module.css'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';

const ProductCard = ({product}) => {  
   const { image, title, id, rating, price}= product;  
    function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
    return (
        <div className={classes.card__container}>
            <a href="">
                <img src={image} alt=""/>
             
            </a>
            <div >
                <div className={classes.title}>
                    <h3>{truncate(title, 50)}</h3>  
                          
                </div>                
                <div className={classes.rating}>
                     <Rating value ={rating.rate} precision={0.1} />
                     <small>{rating.count}</small>                       
                </div>
                <div>
                    <CurrencyFormat amount={price} />
                </div>          
                
                <button className={classes.button}>add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
