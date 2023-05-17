import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { StateContextCustom } from "../context/StateContext";

const CartItem = ({ item, increaseTotal, decreaseTotal }) => {
  const [qty, setQty] = useState(1);
  const { dispatch } = StateContextCustom();

  const increaseQty = () => {
    setQty(qty + 1);
    increaseTotal(item.price);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
      decreaseTotal(item.price);
    }
  };

  const RemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    decreaseTotal(oneItemPrice);
  };

  const oneItemPrice = item.price * qty;

  return (
    <div className="group overflow-hidden flex justify-between items-center mb-4 custom-shadow-sm p-4 px-6 rounded-lg relative">
      <div className="flex justify-start items-center space-x-3 overflow-hidden">
        {/* <RiDeleteBin5Line
          onClick={RemoveFromCart}
          aria-label="Remove From Cart"
          className="text-2xl -translate-x-10 duration-300 cursor-pointer group-hover:translate-x-0 hover:scale-110"
        /> */}
        <img
          src={item.image}
          className="w-[100px] h-[100px] object-scale-down"
          alt=""
        />
        <div className="">
          <p className="text-base">
            {item.title.length > 45
              ? `${item.title.substring(0, 45)} .....`
              : item.title}
          </p>
          <p className="text-xl font-bold">${oneItemPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <button
          onClick={decreaseQty}
          className="w-[30px] h-[30px] bg-orange-300 rounded duration-150 hover:bg-orange-200 flex justify-center items-center "
        >
          <HiMinusSm />
        </button>
        <p className="w-[30px] h-[30px] flex justify-center items-center">
          {qty}
        </p>
        <button
          onClick={increaseQty}
          className="w-[30px] h-[30px] bg-orange-300 rounded duration-150 hover:bg-orange-200 flex justify-center items-center "
        >
          <HiPlusSm />
        </button>
      </div>
      <div
        onClick={RemoveFromCart}
        className=" w-4 h-4 border border-black flex justify-center items-center rounded-full absolute top-2 right-2 hover:bg-black cursor-pointer translate-x-7 group-hover:rotate-[180deg] duration-500 group-hover:translate-x-0"
      >
        <RxCross2 className="font-extrabold text-3xl hover:text-white" />
      </div>
    </div>
  );
};

export default CartItem;
