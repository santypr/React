import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const counterAdapter = createEntityAdapter<number>({
    
})

export const counterSlice = createSlice({
    name: 'counter',
    initialState: counterAdapter.getInitialState({
        isLoading: false, 
        hasErrors: false, 
        errorMessage: '', 
        count: 0
    }),
    // initialState: {
    //     count: 0
    // },
    reducers:{
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;