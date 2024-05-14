import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,

}

const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state,action) => {
            let num = action.payload
            state.count = state.count + num;
        },
        decrement: (state,action) => {
            let num = action.payload
            state.count = state.count - num
        },
        // incrementByFive:(state,action)=>{
        //     state.count = state.count + 5
        // },
        // decrementByFive:(state,action)=>{
        //     state.count = state.count - 5
        // },
        reset:(state)=>{
            state.count = 0
        }
    }

})

export const {increment, decrement, reset} = countSlice.actions

export default countSlice.reducer