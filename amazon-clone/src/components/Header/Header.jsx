import React from 'react';
import classes from './Header.module.css'
import { SlLocationPin } from "react-icons/sl";
import SearchIcon from '@mui/icons-material/Search';
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';

const Header = () => {
    return (
        <section className=''>
            <div className={classes.header_container}>
                <div className={classes.logo_container}>
                    <a href="/">
                        <img
                            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                            alt="amazon logo"
                            className="header__logo"/>
                    </a> 
                    <div className={classes.delivery}>
                        <span>
                        <SlLocationPin />
                        </span>
                        <div>
                            <p>Deliver to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>                               
                </div>


                
                      {/* search section */}
                <div className={classes.search}>                
                    <select name=" " id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" name="" id="" placeholder='Search product' />
                    <SearchIcon/>
                </div>
                     {/* third div */}
                <div className={classes.order_container}>
                    <a href='' className={classes.language}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg' alt='flag of USA' />
                        <select name='' id=''>
                            <option value=''>EN</option>
                        </select>
                    </a>
                    <a href=''>                        
                        <p>Sign In</p>
                        <span>Account &Lists</span>                        
                    </a>
                    {/* {orders} */}
                    <a href="">
                        <p>returns</p>
                        <span>& orders</span>
                    </a>                
                    <a href="" className={classes.cart}>
                        <BiCart size={35}/>
                        <span>0</span>
                    </a>

                </div>


            </div>
            <LowerHeader />
        </section>
        
    );
   
}

export default Header;
