// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import UserServices from "@/redux/services/user/index.service";
// export const getUser = createAsyncThunk(
//   "user/getUser",
//   async ({ obj }, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.getUser({ obj });
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async (values, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.updateUser(values);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// export const changePassword = createAsyncThunk(
//   "user/changePassword",
//   async (values, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.changePassword(values);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );
// export const resetPasswordByEmail = createAsyncThunk(
//   "user/resetPasswordByEmail",
//   async (values, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.resetPasswordByEmail(values);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );
// export const getUserKyc = createAsyncThunk(
//   "user/kyc/getUserKyc",
//   async ({}, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.getUserKyc();
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// export const sendForReview = createAsyncThunk(
//   "user/kyc/sendForReview",
//   async ({}, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.sendForReview();
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// export const getAllWallet = createAsyncThunk(
//   "wallet/getAll",
//   async ({}, { rejectWithValue }) => {
//     try {
//       const response = await UserServices.getAllWallet();
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err);
//     }
//   }
// );

// const userReducer = createSlice({
//   name: "user",
//   initialState: {
//     user: "",
//     userKyc: "",
//     userReview: "",
//     error: "",
//     loading: false,
//   },

//   extraReducers: {
//     [getUser.pending]: (state) => {
//       state.loading = true;
//     },
//     [getUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     [getUserKyc.pending]: (state) => {
//       state.loading = true;
//     },
//     [getUserKyc.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.userKyc = action.payload;
//     },
//     [sendForReview.pending]: (state) => {
//       state.loading = true;
//     },
//     [sendForReview.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.userReview = action.payload;
//     },
//   },
// });

// export default userReducer.reducer;
