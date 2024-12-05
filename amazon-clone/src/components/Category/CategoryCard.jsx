import React from 'react';
import classes from './category.module.css'

const CategoryCard = ({data}) => {
    // console.log(data);
    return (
        <div className={classes.category}>
           
            <a href=''>
                <span>                    
                    <h2>{data?.title}</h2>
                    <img src={data?.imgLink} alt="category images" />
                    <p>shop now</p> 
                </span>
            </a>
        </div>
    )
}

export default CategoryCard;
