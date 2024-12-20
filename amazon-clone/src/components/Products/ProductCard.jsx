import React, { useContext, useReducer} from 'react';
import classes from './Product.module.css'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import {Link} from 'react-router-dom';
import {DataContext} from '../DataProvider/DataProvider';
import {Type} from '../../Utility/action.type';

const ProductCard = ({product,flex,renderDesc,renderAdd}) => {  
   const { image, title, id, rating, price, description}= product;  
   const [state,dispatch]= useContext (DataContext)
   
   const addToCart=()=>{
    dispatch({
        type:Type.ADD_TO_BASKET,
        item:{ image, title, id, rating, price, description}
    })
   }
    return (
        // className={classes.card__container}
         
        <div className={`${classes.card__container} ${flex?classes.product__flexed :''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt=""/>
             
            </Link>
            <div >
                <div className={classes.title}>
                    <h3>{title}</h3>  
                     {renderDesc && <div style={{maxWidth:'400px'}}>{description}</div>}     
                </div>                
                <div className={classes.rating}>
                     <Rating value ={rating?.rate} precision={0.1} />
                     <small>{rating?.count}</small>                       
                </div>
                <div>
                    <CurrencyFormat amount={price} />
                </div>          
                
                {
                    renderAdd && <button className={classes.button} onClick={addToCart}>add to cart</button>
            
                }
                
            </div>
        </div>
    );
}

export default ProductCard;
