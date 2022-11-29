import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    username: "",
    email: "",
    password: "",
    passwordConfirmacion: ""
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirmacion = action.payload.passwordConfirmacion;
    }
  }
});

export const { setUser } = signUpSlice.actions;
export default signUpSlice.reducer;
