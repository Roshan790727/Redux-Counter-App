import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Compenents/CounterSlice"

const counterStore = configureStore({
    reducer:{
        counterReducer : counterSlice
    }
})

export default counterStore