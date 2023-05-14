import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    x : 0,
}

export const myReducer = createReducer(initialState, {
    increment : (state) =>{
    state.x += 1;
    },
    decrement : (state) =>{
        state.x -= 1;
        },
        incrementByvalue : (state, action) =>{
            state.x += action.payload;
            },
})