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
    },
    resetFilter: state => {
      state.filter = "";
    }
  }
});

export const { changeFilter, resetFilter } = fiterSlice.actions;
export default fiterSlice.reducer;
