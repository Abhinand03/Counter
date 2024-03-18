import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increase:(state)=>
        {
            state.value+=1

        },
        decrse:(state)=>
        {
            state.value-=1

        },
        reset:(state)=>
        {
            state.value=0
        }
    }
})


export  default counterSlice.reducer
export const {increase,decrse,reset}=counterSlice.actions