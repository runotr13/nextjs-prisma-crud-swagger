"use client";

import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "../actions/darkmode/mode";
// import userReducer from "../actions/user/userReducer";
// import authReducer from "../actions/auth/authReducer";
import userData from "../actions/userData";

export function createStore() {
  const store = configureStore({
    reducer: {
      mode: darkModeSlice,
      userData: userData,
    },
  });

  return store;
}

export const store = createStore({});
