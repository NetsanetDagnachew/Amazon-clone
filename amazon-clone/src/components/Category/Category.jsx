import React from 'react';
import {categoryInfos} from './CatagoryFullInfo';
import CategoryCard from './CategoryCard'
import classes from './category.module.css'
const Category = () => {
    return (
        <section className={classes.category__container}>
            {           
              categoryInfos.map((infos,i)=>{
               return <CategoryCard data={infos} key={i}  />
            })
            
            }
          
        </section>
    )
}

export default Category;
