import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authAction";
import { getUserLogged, getToken, addLocal, removeLocal } from "../../../services/localStorage";

const initialState = {
  loadingAuth: false,
  userLogged: getUserLogged(),
  userToken: getToken(),
  errorAuth: null,
  successAuth: false
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: state => {
      state.userLogged = false;
      state.userToken = false;
      removeLocal();
    }
  },
  extraReducers: {
    // register user with email and password
    [registerUser.pending]: state => {
      state.loadingAuth = true;
      state.successAuth = false;
      state.errorAuth = null;
    },
    [registerUser.fulfilled]: state => {
      state.loadingAuth = false;
      state.errorAuth = null;
      state.successAuth = true; // register successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.successAuth = false;
      state.errorAuth = payload;
    },

    // login user with email and password
    [userLogin.pending]: state => {
      state.loadingAuth = true;
      state.successAuth = false;
      state.errorAuth = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loadingAuth = false;
      state.successAuth = true; // login succefull
      state.userLogged = payload.user;
      state.userToken = payload.token;
      state.errorAuth = false;
      addLocal({ user: state.userLogged, auth: state.userToken });
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loadingAuth = false;
      state.errorAuth = payload;
      state.successAuth = false;
    }
  }
});

export default authSlice.reducer;

// deprecated object  notation, cambiar
// extraReducers: (builder) => {
//   builder
//     .addCase(incrementBy, (state, action) => {
//       // action is inferred correctly here if using TS
//     })
//     // You can chain calls, or have separate `builder.addCase()` lines each time
//     .addCase(decrement, (state, action) => {})
//     // You can match a range of action types
//     .addMatcher(
//       isRejectedAction,
//       // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
//       (state, action) => {}
//     )
//     // and provide a default case if no other handlers matched
//     .addDefaultCase((state, action) => {})}
