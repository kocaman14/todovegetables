import { configureStore } from "@reduxjs/toolkit";
import vegetablesReducer from "./features/vege"
export const store=configureStore({
reducer:{
vegetables:vegetablesReducer,
}
})