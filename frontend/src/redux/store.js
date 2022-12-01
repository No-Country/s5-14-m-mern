import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import userSlice from "./slices/user";
import filterSlice from "./slices/filter";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    filter: filterSlice
  }
});

export default store;
