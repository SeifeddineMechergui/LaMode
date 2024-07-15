import axios from "axios";
import { server } from "../../server";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    // Perform the API request to load user data
    const { data } = await axios.get(`${server}/user/load-user`, {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    // Dispatch success action with user data
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (error) {
    // Handle any errors from the API request
    dispatch({
      type: "LoadUserFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

export const clearErrors = () => (dispatch) => {
  // Dispatch action to clear errors
  dispatch({ type: "ClearErrors" });
};

//load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadSellerRequest" });

    // Perform the API request to load seller data
    const { data } = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true, // Ensure cookies are sent with the request
    });

    // Dispatch success action with seller data
    dispatch({ type: "LoadSellerSuccess", payload: data.seller });
  } catch (error) {
    // Handle any errors from the API request
    dispatch({
      type: "LoadSellerFail",
      payload: error.response?.data?.message || error.message,
    });
  }
};

// update user information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch, action) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          name,
          password,
          phoneNumber,
        },
        {
          withCredentials: true,
        }
      );
      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "updateUserInfoFailure",
        payload: error.response?.data.message || error.message,
      });
    }
  };

//update user address
export const updateUserAddress =
  (country, city, address1, address2, addressType) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserAddressRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-addresses`,
        {
          country,
          city,
          address1,
          address2,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "updateUserAddressSuccess",
        payload: {
          successMessage: "User address updated successfully!",
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: "updateUserAddressFailure",
        payload: error.response?.data.message || error.message,
      });
    }
  };

// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteUserAddressSuccess",
      payload: {
        successMessage: "User deleted successfully!",
        user: data.user,
      },
    });
  } catch (error) {
    dispatch({
      type: "deleteUserAddressFailed",
      payload: error.response.data.message,
    });
  }
};
