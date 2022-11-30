import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import userSlice from "./slices/user";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice
  }
});

export default store;
