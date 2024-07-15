import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import styles from "../../styles/style";
import { backendUrl } from "../../server";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] z-50 overflow-y-auto">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col shadow-lg">
        <div className="flex justify-end p-4">
          <RxCross1
            size={25}
            className="cursor-pointer text-gray-400 hover:text-gray-600"
            onClick={() => setOpenWishlist(false)}
          />
        </div>
        {wishlist && wishlist.length === 0 ? (
          <div className="flex items-center justify-center flex-1">
            <h5 className="text-[18px] text-gray-600">Wishlist is empty!</h5>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className={`${styles.normalFlex} p-4`}>
              <AiOutlineHeart size={25} className="text-red-500" />
              <h5 className="pl-2 text-[20px] font-semibold">
                {wishlist && wishlist.length} {wishlist.length === 1 ? "item" : "items"}
              </h5>
            </div>
            <div className="flex-1 overflow-y-auto">
              {wishlist.map((item, index) => (
                <CartSingle
                  key={index}
                  data={item}
                  removeFromWishlistHandler={removeFromWishlistHandler}
                  addToCartHandler={addToCartHandler}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
      <div className="flex items-center">
        <RxCross1
          className="cursor-pointer text-gray-400 hover:text-gray-600"
          onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={`${backendUrl}${data?.images[0]}`}
          alt=""
          className="w-[130px] h-[90px] object-cover ml-2 mr-2 rounded-[5px]"
        />
        <div className="flex-1 pl-[5px]">
          <h1 className="font-semibold text-[16px]">{data.name}</h1>
          <h4 className="text-gray-600 text-[15px] mt-[5px]">
            ${data.discountPrice} x {value}
          </h4>
          <h4 className="font-semibold text-[17px] text-red-500 mt-[5px]">
            USD ${totalPrice.toFixed(2)}
          </h4>
        </div>
        <BsCartPlus
          size={20}
          className="cursor-pointer"
          title="Add to cart"
          onClick={() => addToCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default Wishlist;
