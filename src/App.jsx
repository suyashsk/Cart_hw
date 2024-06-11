


import './App.css'
import Header from "./Header";
import { useEffect, useState } from "react";
import Productcart from "./Productcart";
import phone1  from './assets/phone-1.png';
import phone2  from './assets/phone-2.png';
import phone3  from './assets/phone-3.png';
import phone4  from './assets/phone-4.png';
function App() {
  const [product, setProduct] = useState([
    {
      img:phone1,
      title: "Samsung Galaxy S8",
      price : 399.99,
      quantity : 1
    },
    {
      img : phone2,
      title : "Google Pixel",
      price : 499.99,
      quantity : 1
    },
    {
      img : phone3,
      title : "Xiaomi Redmi Note 2",
      price : 699.99,
      quantity : 1
    },
    {
      img : phone4,
      title : "Samsung Galaxy S7",
      price : 599.99,
      quantity : 1
    }
  ])

  const[total,setTotal] = useState(0)
  const[cartSum,setCartSum] = useState(0);



  function handleInc(index) {
    let temp=[...product]
   temp[index].quantity+=1;
   setProduct(temp)
  }


  function handleDec(index){
    let temp=[...product]
    if(temp[index].quantity>1){
    temp[index].quantity-=1;
    setProduct(temp)
    }
    else{
      handleRemove(index)
    }
  }


  function handleRemove(index){
    let temp=[...product]
    temp.splice(index,1)
    setProduct(temp)
  }

  useEffect(()=>{
    let sum =0;
    let totalqty = 0;
    product.forEach((item,index)=>{
      sum += (item.quantity * item.price);
      setTotal(sum.toFixed(2));
      totalqty += item.quantity;
      if(product.length>0){
        setCartSum(totalqty)
      }
    })
  },[product])
  return (
    <>
      <Header cartSum={cartSum} product={product} />
      <div className="yrbag">
        <h1>Your Bag</h1>
      </div>
      {
        product.length ?
        <div className="products_main">
        <div className="products_sub">
        {
        product.map((item,index)=>{
          return(
            
              <Productcart 
                img={item.img}
                title={item.title}
                price={item.price}
                qty={item.quantity}
                index={index}
                handleInc={handleInc}
                handleDec={handleDec}
                handleRemove={handleRemove} />
            
          )
        })
        }
      </div>
      
      <hr></hr>
      <div className="total">
        <p className="total_text">Total</p>
        <p className="total_text total_amt">${total}</p>
      </div>
      <button className='clear_cart' onClick={()=>setProduct([])}>Clear Cart</button>
      </div> : <div className="last">
        <h4>is Currently Empty</h4>
      </div>
    }
    </>
  )
}

export default App
