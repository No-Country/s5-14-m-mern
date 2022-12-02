import { createSlice } from "@reduxjs/toolkit";
import { getUserLogged, modifyUserInfo, deleteUser, ChangePasswordUser } from "./userAction";

const initialState = {
  loading: false,
  userInfo: false,
  error: null,
  success: false
};

const userSlice = createSlice({
  name: "userSlice", // nombre del slice
  initialState, // como cuando hacemos const [name, setname] = useState(initialState)
  reducers: {
    resetUser: state => {
      state.loading = false;
      state.userInfo = false;
      state.error = null;
      state.success = false;
    }
  }, // dentro de reducers creamos las funciones para actualizar el estado.
  extraReducers: {
    // get user logged info
    [getUserLogged.pending]: state => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    [getUserLogged.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.userInfo = payload;
    },
    [getUserLogged.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // Modify User
    [modifyUserInfo.pending]: state => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [modifyUserInfo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = { ...state.userInfo, ...payload };
      state.error = null;
    },
    [modifyUserInfo.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // Delete User
    [deleteUser.pending]: state => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [deleteUser.fulfilled]: state => {
      state.loading = false;
      state.success = true;
      state.userInfo = false;
      state.error = null;
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    // Change password User
    [ChangePasswordUser.pending]: state => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [ChangePasswordUser.fulfilled]: state => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    [ChangePasswordUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    }
  }
});

export const { resetUser } = userSlice.actions;
export default userSlice.reducer;
