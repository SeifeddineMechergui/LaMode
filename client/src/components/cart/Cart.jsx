import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import styles from "../../styles/style";
import { backendUrl } from "../../server";

const Cart = ({ setOpenCart }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addTocart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        {
        cart && cart.length === 0
         ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenCart(false)}
              />
            </div>
            <h5 className="text-[18px] text-gray-600">Cart is empty!</h5>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-end pt-5 pr-5">
                <RxCross1
                  size={25}
                  className="cursor-pointer text-gray-400 hover:text-gray-600"
                  onClick={() => setOpenCart(false)}
                />
              </div>
              <div className={`${styles.normalFlex} p-4`}>
                <IoBagHandleOutline size={25} className="text-red-500" />
                <h5 className="pl-2 text-[20px] font-semibold">
                  {cart.length} {cart.length === 1 ? "item" : "items"}
                </h5>
              </div>
              <div className="w-full border-t">
                {cart.map((item, index) => (
                  <CartSingle
                    key={index}
                    data={item}
                    quantityChangeHandler={quantityChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
              </div>
            </div>
            <div className="px-5 mb-3">
              <Link to="/checkout">
                <div className="h-[45px] flex items-center justify-center w-full bg-red-500 rounded-[5px] hover:bg-red-600 transition-colors duration-300">
                  <h1 className="text-white text-[18px] font-semibold">
                    Checkout Now (USD ${totalPrice})
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className="bg-red-500 border border-red-600 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => increment(data)}
          >
            <HiPlus size={18} className="text-white" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className="bg-gray-200 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} className="text-gray-600" />
          </div>
        </div>
        <img
          src={`${backendUrl}${data?.images[0]}`}
          alt=""
          className="w-[130px] h-[90px] object-cover ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px] flex-1">
          <h1 className="font-semibold text-[16px]">{data.name}</h1>
          <h4 className="text-gray-600 text-[15px] mt-[5px]">
            ${data.discountPrice} x {value}
          </h4>
          <h4 className="font-semibold text-[17px] text-red-500 mt-[5px]">
            USD ${totalPrice.toFixed(2)}
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Cart;
