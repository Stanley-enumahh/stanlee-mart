import React, { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [Drop, setDrop] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  // Function to handle the activation of a link.
  const handleSetActive = (to) => {};

  return (
    <div className="z-50 backdrop-blur fixed top-0 flex flex-row justify-between md:w-[85%] w-[90%] mt-3">
      <div className="flex flex-row md:gap-2 gap-1 items-center text-blue-600">
        <HiBars3BottomLeft
          onClick={() => {
            setDrop(!Drop);
          }}
          className=" md:text-3xl text-2xl p-1 bg-blue-100 rounded hover:bg-blue-300 transition-all duration-150 cursor-pointer"
        />
        <h1 className="font-bold md:text-lg  select-none bg-white px-3 py-1 rounded">
          S-MART
        </h1>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <div className="bg-blue-100 md:flex hidden flex-row items-center px-2 rounded">
          <CiSearch className="font-bold text-blue-600" />
          <input
            type="text"
            name=""
            id=""
            className="outline-none border-none bg-blue-100 py-2 text-sm w-[400px] pl-2"
            placeholder=" search essentails, electronics & more"
          />
        </div>

        <div className="select-none md:flex hidden">
          <button className="shadow-sm flex flex-row items-center gap-1 text-sm bg-white hover:bg-blue-300 duration-150 transition-all px-2 py-2 text-gray-600 rounded">
            {" "}
            <FaRegUser className="text-blue-200" /> logout
          </button>
        </div>

        <div className="select-none">
          <Link to="/cart" className="relative flex flex-row">
            <button className="flex flex-row items-center gap-2 text-gray-600 hover:bg-blue-300 duration-150 transition-all md:border-l border-none border-gray-600 px-2 py-1 shadow-sm bg-white rounded">
              <BsCart3 size={20} className="md:text-blue-200 text-blue-600" />
              <span className="md:flex hidden">cart</span>
              <span className="absolute w-2 h-2 flex items-center justify-center md:right-[-12px] right-[-8px] md:top-[-10px] top-[-7px] p-2 bg-red-500 rounded text-xs text-white">
                {getTotalCartItems()}
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`drop-down absolute bg-white md:top-16 top-12 md:p-6 p-3 border border-blue-200 rounded shadow-lg md:w-[300px] w-[180px] text-sm ${
          Drop ? "flex" : "hidden"
        }`}
      >
        <ul className="select-none flex flex-col md:gap-6 gap-4 w-full z-50">
          <li className="flex hover:text-blue-400 duration-150 transition-all">
            <Link
              onClick={() => {
                setDrop(!Drop);
              }}
              activeClass="active"
              to="smart-phones"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
            >
              smart phones
            </Link>
          </li>
          <li className="hover:text-blue-400 duration-150 transition-all ">
            <Link
              onClick={() => {
                setDrop(!Drop);
              }}
              activeClass="active"
              to="fashion"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={handleSetActive}
            >
              Men's fashion
            </Link>
          </li>
          <li className="md:hidden flex hover:text-blue-400 duration-150 transition-all ">
            <Link
              onClick={() => {
                setDrop(!Drop);
              }}
            >
              Search
            </Link>
          </li>
          <li className="md:hidden flex hover:text-blue-400 duration-150 transition-all ">
            <Link>sign Up/sign In</Link>
          </li>
          <li className="hover:text-blue-400 duration-150 transition-all ">
            <Link>Account</Link>
          </li>
          <li className="hover:text-blue-400 duration-150 transition-all">
            <Link
              onClick={() => {
                setDrop(!Drop);
              }}
              activeClass="active"
              to="footer"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
