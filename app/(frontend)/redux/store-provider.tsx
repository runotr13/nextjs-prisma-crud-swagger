"use client";
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createStore } from "./store/store";
interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const store = createStore();
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}
