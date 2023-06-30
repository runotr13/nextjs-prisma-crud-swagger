"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../actions/auth/authReducer";
import darkModeSlice from "../actions/darkmode/mode";
import userReducer from "../actions/user/userReducer";
import userData from "../actions/userData";

export function createStore() {
  const store = configureStore({
    reducer: {
      mode: darkModeSlice,
      userData: userData,
      userReducer,
      authReducer,
    },
  });

  return store;
}

export const store = createStore({});
