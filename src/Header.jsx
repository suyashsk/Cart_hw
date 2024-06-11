import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = ({cartSum , product}) => {
  return (
    <div className="headers">
        <h1 className="header_title">UseReducer</h1>
        <div className="cart_container"><AiOutlineShoppingCart className='cart_icon'/>
        {
          product.length? <span className='cart_len'>{cartSum}</span> : <span className='cart_len'>0</span>
        }
        
        </div>
        
    </div>
  )
}

export default Header