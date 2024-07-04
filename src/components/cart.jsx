import { PhoneData } from "./products";
import { ShopContext } from "../context/shopContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { CartStuff } from "./cartStuff";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="flex overflow-hidden bg-[#ccc] w-full h-screen justify-center items-center">
      <div className="overflow-hidden flex md:flex-row flex-col bg-white md:w-[80%] w-full md:h-[80%] h-full rounded-lg shadow-lg border-blue-300 md:border-2">
        <div className="relative flex flex-col md:w-[70%] w-full border md:h-full h-[80%] md:p-6 p-2">
          <div className="md:ml-4 mb-3">
            <h1 className="font-bold">Your Cart</h1>
          </div>

          <div className="select-none overflow-auto">
            {PhoneData.map((Phone, index) => {
              if (cartItems[Phone.id] !== 0) {
                return (
                  <CartStuff
                    name={Phone.name}
                    price={Phone.price}
                    img={Phone.img}
                    key={index}
                    itemId={Phone.id}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="md:relative md:h-full md:w-[30%] h-[30%] shadow-md bg-[#084c61] text-white flex flex-col items-center">
          <h1 className="md:mt-6 mt-2">Summary</h1>

          <div className="md:gap-0 gap-3 md:mt-8 h-full flex flex-col text-center items-center justify-between w-full">
            <span className="flex flex-row justify-between w-[80%]">
              <h1>Total price</h1>
              <p>${totalAmount}</p>
            </span>

            <div className="flex md:flex-col flex-row items-center md:w-[80%] w-[90%] gap-3 mb-4">
              <Link
                className=" flex flex-row justify-between md:w-full w-[50%] text-sm"
                to="/"
              >
                <button className="bg-gray-900 hover:bg-gray-800 duration-150 transition-all w-full py-2 rounded flex flex-row items-center justify-center gap-2 text-sm">
                  <BsArrowLeft />
                  back to shop
                </button>
              </Link>

              {totalAmount > 0 ? (
                <button className=" bg-indigo-600 md:w-full w-[50%] py-2 rounded hover:bg-indigo-500 transition-all duration-150 text-sm">
                  check out
                </button>
              ) : (
                <h1>your cart is empty</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
