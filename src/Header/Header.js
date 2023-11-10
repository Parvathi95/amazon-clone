import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch, FaShoppingBasket } from "react-icons/fa";
import {FaLocationDot} from 'react-icons/fa6'

function Header() {
  return (
    <div>
        <nav className="header">
            <div className="header_Top">
                <div className="header_left_nav">
                    {/* <MenuIcon/> */}
                    <FaBars/>
                </div>
                <Link to="/">
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" className='logo' />
                </Link>
                <div className="headerSearch">
                    <input type="search" className='headerSearch_input' />
                    <FaSearch className='headerSearchIcon'/>
                </div>
                <div className="headerNavbar">
                    <Link to="/Login" className='headerLink'>
                        <div className="headerOptions">
                            <span className='headerOption_one'>Hello</span>
                            <span className='headerOption_two'>User</span>
                        </div>
                    </Link>
                    <Link to="/Orders" className='headerLink'>
                        <div className="headerOptions">
                            <span className='headerOption_one'>Return</span>
                            <span className='headerOption_two'>Order</span>
                        </div>
                    </Link>
                    <Link to="/" className='headerLink'>
                        <div className="headerOptions">
                            <span className='headerOption_one'>Try</span>
                            <span className='headerOption_two'>Prime</span>
                        </div>
                    </Link>
                    <Link to="/Profile" className='headerLink'>
                        <div className="headerOptions">
                            <span className='headerOption_one'>Your</span>
                            <span className='headerOption_two'>Profile</span>
                        </div>
                    </Link>
                    <Link to="/Cart" className='headerLink'>
                        <div className="headerOption_Basket">
                            <FaShoppingBasket/>
                            <span className="headerOption_two basketCount">0</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="headerBottom">
                <div className="headerAddress">
                <div className="headerAddress_icon">
                    <FaLocationDot/>
                </div>
                <div className="headerOptions">
                    <span className='headerOption_one'>Deliver To</span>
                </div>
            </div>
            <div className="headerBottom_Navbar">
                <span>
                    <Link to="/ListProducts" className='headerLink'>
                        All Products 
                    </Link>
                </span>
                <span>Books</span>
                <span>New Release</span>
                <span>Gift Ideas</span>
                <span>Amazon Pay</span>
            </div>
         </div>
        </nav>
    </div>
  )
}

export default Header