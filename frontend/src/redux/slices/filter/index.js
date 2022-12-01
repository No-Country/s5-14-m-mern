import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: ""
};

const fiterSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { changeFilter } = fiterSlice.actions;
export default fiterSlice.reducer;
