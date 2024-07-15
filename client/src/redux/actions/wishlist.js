import { createAction } from "@reduxjs/toolkit";

export const addToWishlist = createAction("wishlist/addToWishlist");
export const removeFromWishlist = createAction("wishlist/removeFromWishlist");

// Add to wishlist
export const addToWishlistAsync = (data) => async (dispatch, getState) => {
  dispatch(addToWishlist(data));
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};

//remove from wishlist
export const removeFromWishlistAsync = (data) => async (dispatch, getState) => {
  dispatch(removeFromWishlist(data._id));
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(getState().wishlist.wishlist)
  );
  return data;
};
