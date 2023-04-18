import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue } from "./StateProvider";
function Header() {
  const [{basket}, dispatch] = useStateValue();
  
  return (
    <div className='header'> 
       <Link to = "/">
           <img className='header_logo' 
                src ="https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png"
                alt="wait..."  
            />
       </Link>
        <div className="header_search">
            <input className= "header_searchInput"
            type="text" />
            <SearchIcon className="header_searchIcon" />
        </div>
        <div className="header_nav">
            <div className ="header_option">
                <span className="header_optionOne">Hello Guest</span>
                <span className="header_optionTwo">Sign In</span> 

            </div>
            <div className ="header_option">
                <span className="header_optionOne">Returns</span>
                <span className="header_optionTwo">Orders </span> 
            </div>
            <div className ="header_option">
                <span className="header_optionOne">Your</span>
                <span className="header_optionTwo">Prime</span> 
            </div>
            <Link to="/Checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionTwo header_basketCount">{basket?.length}</span>
                </div>  
                 {/* ? is called optional chaining to handle the error */}

            </Link>
            

        </div>
    </div>
  )
}

export default Header