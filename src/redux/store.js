import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count/count.js"
const store = configureStore({
   reducer: countReducer
})

export default store;