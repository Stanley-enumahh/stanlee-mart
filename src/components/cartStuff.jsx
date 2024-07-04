import React from "react"
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { FaTrash } from "react-icons/fa";


export const CartStuff = (props)=>{
  
  const { cartItems, removeFromCart, addToCart, updateCartItemAmount, deleteCartItem } = useContext(ShopContext);

  const cartItemAmount = cartItems[props.itemId]


  return (
    <div className=" md:py-3 py-2 border-gray-400 border-t flex flex-row justify-between items-center h-[120px]">
      
        <div className="flex md:flex-row md:w-[30%] md:h-[100%] h-[90%] w-[45%] items-center md:gap-3 gap-3 md:ml-4 justify-between">
          <div className="bg-gray-100 rounded border">
            <img className=" drop-shadow-lg md:w-[100px] w-[130px] md:h-[100px] h-[60px] object-cover " src={props.img} alt={props.name} />
          </div>

      <div className="flex-col flex gap-1">
            <p className="text-xs">{props.name}</p>         
           <p className="font-bold md:text-sm text-xs">${props.price}</p> 
      </div>  
       
        </div>
        <div className="flex flex-col w-[35%] items-end gap-4 justify-between ">

        <div className="">
        <button
        onClick={() => deleteCartItem(props.itemId)}
        ><FaTrash size={12} className="hover:text-red-600 transition-all duration-150"/></button>
      </div>

         <div className="flex flex-row ">

            <button 
            onClick={() => removeFromCart(props.itemId)}
            className="shadow-md bg-[#ebebeb] md:px-4 px-2 rounded hover:bg-black hover:text-white transition-all duration-150">-</button>
            <input className=" md:w-[40px] w-[20px] flex flex-row text-center md:text-sm text-xs" value={cartItems[props.itemId]} 
            onChange={(e) => updateCartItemAmount(Number(e.target.value), props.itemId)}
            />
            <button  
            onClick={() => addToCart(props.itemId)}           
            className="shadow-md bg-[#ebebeb] md:px-4 px-2 rounded hover:bg-black hover:text-white transition-all duration-150">+</button>
         </div>
        </div>
  
    </div>
  )
}