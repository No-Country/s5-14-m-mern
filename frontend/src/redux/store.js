import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import userSlice from "./slices/user";
import filterSlice from "./slices/filter";
// import gamesSlice from "./slices/user";
import messageReducer from "./slices/messages/messagesSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    filter: filterSlice,
    message: messageReducer
  }
});

export default store;
