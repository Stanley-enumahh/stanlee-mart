import { IoBagAddOutline } from "react-icons/io5";
import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

export default function FashionDetails(props) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[props.itemId];
  return (
    <div className="flex text-black w-[100%] relative justify-center">
      <div className="flex flex-col justify-center items-center md:w-[220px] w-[260px] md:h-[270px] h-[300px] border rounded-lg bg-slate-100 cursor-pointer gap-2 hover:border hover:border-blue-400 hover:shadow-lg transition-all duration-150 p-2">
        <div className="md:h-[70%] h-[60%]">
          <img
            src={props.img}
            className="h-full drop-shadow-md object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start items-start px-2 w-full gap-3">
          <div className="flex flex-row justify-between w-full">
            <p className="text-blue-900 text-sm">{props.name}</p>
            <p className="font-bold text-sm">${props.price}</p>
          </div>
          <button
            onClick={() => addToCart(props.itemId)}
            className="w-full justify-center Button flex flex-row gap-2 items-center bg-blue-500 hover:bg-blue-700 text-white px-3 rounded shadow-md py-1 duration-150 transition-all"
          >
            <IoBagAddOutline />
            Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
}
