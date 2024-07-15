import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
  successMessage: null,
  addressLoading: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    // load user
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase("LoadUserSuccess", (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase("LoadUserFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    // update user info
    .addCase("updateUserInfoRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateUserInfoSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload;
    })
    .addCase("updateUserInfoFailure", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    // update user address
    .addCase("updateUserAddressRequest", (state) => {
      state.addressLoading = true;
    })
    .addCase("updateUserAddressSuccess", (state, action) => {
      state.addressLoading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase("updateUserAddressFailure", (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
    })
    //delete user address
    .addCase("deleteUserAddressRequest", (state) => {
      state.addressLoading = true;
    })
    .addCase("deleteUserAddressSuccess", (state, action) => {
      state.addressLoading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase("deleteUserAddressFailed", (state, action) => {
      state.addressLoading = false;
      state.error = action.payload;
    })
    // clear error
    .addCase("ClearErrors", (state) => {
      state.error = null;
    });
});
