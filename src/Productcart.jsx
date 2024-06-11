import React from 'react'
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
const Productcart = (
    {
        img,
        title,
        price,
        qty,
        index,
        handleInc,
        handleDec,
        handleRemove
    }
) => {
  return (
    <div className="product_items_container">
        <div className="product_items_sare">
            <div style={{display:"flex" , alignItems:"center" , justifyContent:"flex-start", gap:"20px",width:"100%" , marginBottom:"5px" , padding:"1px"}}>
            <img width="80px" src={img} alt="mobileimage"/>
            <div className="title_div">
                <h2>{title}</h2>
                <p style={{color:"#64748b"}}>${price}</p>
                <button className='btn_rm' onClick={()=>handleRemove(index)}>Remove</button>
            </div>
            </div>
            <div className='arrows_ka_div'>
                <p onClick={()=>handleInc(index)}><BiChevronUp className='arrow'/></p> 
                <p>{qty}</p>
                <p onClick={()=>handleDec(index)}><BiChevronDown className='arrow'/></p>
            </div>
        </div>
    </div>
  )
}

export default Productcart