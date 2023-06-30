// "use client"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import UserServices from "../../services/user/index.service";



interface UserState {
  user: string;
  userKyc: string;
  userReview: string;
  error: string;
  loading: boolean;
}

const initialState: UserState = {
  user: "",
  userKyc: "",
  userReview: "",
  error: "",
  loading: false,
};


export const getUser = createAsyncThunk(
  "user/getUser",
  async (obj: any, { rejectWithValue }) => {
    try {
      const response = await UserServices.getUser({ obj });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await UserServices.updateUser(values);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await UserServices.changePassword(values);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const resetPasswordByEmail = createAsyncThunk(
  "user/resetPasswordByEmail",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await UserServices.resetPasswordByEmail(values);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);


const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.user = action.payload;
      })
    // Add your other cases...
  },
});


export default userReducer.reducer;
