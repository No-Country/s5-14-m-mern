import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../redux/slices/account/accountSlice.js";
import signUpReducer from "./slices/signup/signUpSlice.js";
import loginReducer from "./slices/login/loginSlice.js";

export default configureStore({
  reducer: {
    account: accountReducer,
    signUp: signUpReducer,
    login: loginReducer
  }
});
