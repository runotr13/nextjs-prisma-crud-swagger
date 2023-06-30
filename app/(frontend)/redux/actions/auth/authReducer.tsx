"use client"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { toastErrorNotify, toastSuccessNotify } from "../../../helpers/ToastNotify";
import { SaveTokenCookie } from "@/app/(frontend)/utils/cookie";
import AuthServices from "../../services/auth/index.service";

interface UserState {
  user: string,
  error: string,
  loading: boolean,
}

const initialState: UserState = {
  user: "",
  error: "",
  loading: false,
};



export const login = createAsyncThunk(
  "auth/createOrCheckEmail",
  async (obj: any, { rejectWithValue }) => {
    try {
      const response = await AuthServices.login(obj);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/registerWithEmail",
  async (obj: any, { rejectWithValue }) => {
    try {
      const response = await AuthServices.register(obj);
      if (response.data) {
        const token = response.data.data.tokens.refresh.token;
        SaveTokenCookie(token);
      }
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logout",
  async (refreshToken: any, { rejectWithValue }) => {
    try {
      const response = await AuthServices.logoutUser(refreshToken);
      if (response) {
      }
      toastSuccessNotify("Logout Successfull");
      return response;
    } catch (err: any) {
      toastErrorNotify(err?.response?.data?.message);
      return rejectWithValue(err);
    }
  }
);

export const verifyAccountByEmail = createAsyncThunk(
  "auth/verifyAccountByEmail",
  async (obj: any, { rejectWithValue }) => {
    try {
      const response = await AuthServices.verifyAccount(obj);
      if (response.data) {
        const token = response.data.data.tokens.refresh.token;
        SaveTokenCookie(token);
      }
      return response.data.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.user = action.payload;
      })

  },
});


export default authReducer.reducer;
