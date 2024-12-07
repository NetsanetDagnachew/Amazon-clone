import React from 'react';
import classes from './Product.module.css'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {  
   const { image, title, id, rating, price}= product;  
    
    return (
        // className={classes.card__container}
         
        <div className={`${classes.card__container}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt=""/>
             
            </Link>
            <div >
                <div className={classes.title}>
                    <h3>{title}</h3>  
                          
                </div>                
                <div className={classes.rating}>
                     <Rating value ={rating?.rate} precision={0.1} />
                     <small>{rating?.count}</small>                       
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
