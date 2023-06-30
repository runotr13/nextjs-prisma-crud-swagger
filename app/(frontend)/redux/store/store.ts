// "use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../actions/auth/authReducer";
import darkModeSlice from "../actions/darkmode/mode";
import userReducer from "../actions/user/userReducer";
import userData from "../actions/userData";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    mode: darkModeSlice,
    userData: userData,
    userReducer,
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const  useAppSelector : TypedUseSelectorHook<RootState> = useSelector;