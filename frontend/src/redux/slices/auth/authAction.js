import { createAsyncThunk } from "@reduxjs/toolkit";
import useServices from "../../../services/useServices";

const { auth } = useServices();

// REGISTER USER
export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async ({ email, password, username }, { rejectWithValue }) => {
    try {
      await auth.signup({ email, password, username });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// LOGIN USER

export const userLogin = createAsyncThunk(
  "authSlice/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const result = await auth.login({ email, password });
      console.log("result", result.data.user);
      const data = {
        user: {
          id: result.data.user._id,
          role: result.data.user.admin ? "admin" : "user"
        },
        token: result.data.auth
      };
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
