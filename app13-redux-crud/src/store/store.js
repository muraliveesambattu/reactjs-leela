import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./emploeeSlice";

export const store = configureStore({
    reducer: {
        employees: employeeSlice
    }
})