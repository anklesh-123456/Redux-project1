import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./reducer";

const store  = configureStore({
    reducer:{
        demoreducer: myReducer

    }
})

export default store;