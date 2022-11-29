import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    username: "",
    avatar: "",
    password: ""
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    }
  }
});

export const { setUsername, setAvatar } = accountSlice.actions;

export default accountSlice.reducer;
