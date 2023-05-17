import React, { useEffect, useState } from "react";
import { StateContextCustom } from "../context/StateContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";


const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = StateContextCustom();

  const [mainTotal, setMainTotal] = useState(0);

  const increaseTotal = (price) => {
    setMainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price);
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setMainTotal(0);
  };

  useEffect(() => {
    setMainTotal(total);
  }, []);

  const total = () => cart?.reduce((pv, cv) => pv + cv.price, 0);

  return (
    <>
      {cart?.length > 0 ? (
        <div className="w-[1200px] mx-auto flex justify-between items-start">
          <div className="w-[60%]">
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseTotal={increaseTotal}
                decreaseTotal={decreaseTotal}
              />
            ))}
            <button
              onClick={clearCart}
              className="flex justify-center items-center space-x-2 px-4 py-1 mt-3 border border-red-500 duration-200 hover:bg-red-500 hover:ring-2 hover:ring-red-500  hover:text-white rounded-lg"
            >
              <p>Clear Cart</p> <HiOutlineShoppingCart/>
            </button>
          </div>
          <div className="w-[30%] min-h-[350px] flex flex-col justify-between rounded-lg custom-shadow-sm p-4">
            <div className="">
              <h6 className="text-xl font-bold mb-4">Order Summary</h6>

              <div className="flex justify-between items-center">
                <h6 className="text-lg font-base ">Total Price</h6>
                <h6 className="text-xl font-bold">
                  $  {mainTotal.toFixed(2)}
                </h6>
              </div>
              <hr className="border border-black" />
            </div>
            <button className="bg-lime-500 duration-150 hover:bg-lime-400 py-3 font-bold text-lg rounded-lg w-full">
              PROCEED FOR CHECKOUT
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center mb-10">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h4 className="text-3xl font-mono  font-semibold">
              Your Cart is Empty 
            </h4>
            <Link to={"/"}>
              <button className="w-60 mx-auto py-2 text-lg font-medium bg-lime-500 duration-150 hover:bg-lime-400 rounded-md">
                Go to Shooping 
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
