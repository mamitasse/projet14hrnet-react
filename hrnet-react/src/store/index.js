// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';

export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
});
