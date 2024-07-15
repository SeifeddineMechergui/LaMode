import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({ type: "productCreateRequest" });
    const config = { header: { "Content-Type": "multipart/form-data" } };

    const data = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({ type: "productCreateSuccess", payload: data.product });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get All Products of a shop
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getAllproductsShopRequest" });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({ type: "getAllProductsShopSuccess", payload: data.products });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFailed",
      payload: error.message,
    });
  }
};

//get all products
export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsRequest",
    });
    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({ type: "getAllProductsSuccess", payload: data.allProducts });
  } catch (error) {
    dispatch({
      type: "getAllProductsFailed",
      payload: error.message,
    });
  }
};

//delete product of shop
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductRequest",
    });

    const config = { withCredentials: true };

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      config
    );

    dispatch({
      type: "deleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductFailed",
      payload: error.response?.data?.message || error.message,
    });
  }
};
