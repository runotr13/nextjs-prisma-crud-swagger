// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { setAuthorizationToken } from "@/helpers/setAuthorizationToken";
// import AuthServices from "@/redux/services/auth/index.service";
// import { SaveTokenCookie } from "@/utils/cookie";
// import findIp from "@/helpers/findIp";
// import { RemoveTokenCookie, RemoveUserCookie } from "@/utils/cookie";
// import { toastErrorNotify, toastSuccessNotify } from "@/helpers/ToastNotify";
// export const login = createAsyncThunk(
//   "auth/createOrCheckEmail",
//   async ({ obj }, { rejectWithValue }) => {
//     try {
//       const response = await AuthServices.login(obj);
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const socialLogin = createAsyncThunk(
//   "auth/socialLogin",
//   async ({ obj }, { rejectWithValue }) => {
//     try {
//       const response = await AuthServices.socialLogin(obj);
//       if (response.data) {
//         const token = response.data.data.tokens.refresh.token;
//         SaveTokenCookie(token);
//         setAuthorizationToken(token);
//       }
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   "auth/registerWithEmail",
//   async ({ obj }, { rejectWithValue }) => {
//     try {
//       let userIp = await findIp();
//       // obj.ip_info = userIp;
//       const response = await AuthServices.register(obj);
//       if (response.data) {
//         const token = response.data.data.tokens.refresh.token;
//         SaveTokenCookie(token);
//         setAuthorizationToken(token);
//       }
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );
// export const logoutUser = createAsyncThunk(
//   "user/logout",
//   async ( {refreshToken , navigate}, { rejectWithValue }) => {
//     try {
//       const response = await AuthServices.logoutUser(refreshToken);
//       if (response) {
//        await RemoveTokenCookie();
//        await  RemoveUserCookie();
//       }
//       toastSuccessNotify("Logout Successfull");
//       window.location.reload()
//       navigate('/')
//       return response;
//     } catch (err) {
//       toastErrorNotify(err?.response?.data?.message);
//       return rejectWithValue(err);
//     }
//   }
// );
// export const updateUsername = createAsyncThunk(
//   "auth/updateUsername",
//   async (body, { rejectWithValue }) => {
//     try {
//       const response = await AuthServices.updateUsername(body);

//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const verifyAccountByEmail = createAsyncThunk(
//   "auth/verifyAccountByEmail",
//   async (obj, { rejectWithValue }) => {
//     try {
//       const response = await AuthServices.verifyAccount(obj);
//       if (response.data) {
//         const token = response.data.data.tokens.refresh.token;
//         SaveTokenCookie(token);
//         setAuthorizationToken(token);
//       }
//       return response.data.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authReducer = createSlice({
//   name: "auth",
//   initialState: {
//     user: "",
//     userLoginWithEmail: "",
//     error: "",
//     loading: false,
//   },
//   reducers: {},
//   extraReducers: {
//     [login.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [login.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     [login.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     [socialLogin.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [socialLogin.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     [socialLogin.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     [register.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [register.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     [register.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     [updateUsername.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [updateUsername.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     [updateUsername.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default authReducer.reducer;
