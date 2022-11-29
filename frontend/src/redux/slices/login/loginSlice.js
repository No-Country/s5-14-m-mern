import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    passwordConfirmacion: ""
  },
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.passwordConfirmacion = action.payload.passwordConfirmacion;
    }
  }
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
