import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import IPeople from "../../models/people";

export const peopleAdapter = createEntityAdapter<IPeople>({
    selectId: (person) => person.url,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
})

const setControlProps = (state: any, isLoading: boolean, hasErrors: boolean, errorMessage: string) => {
    state.isLoading = isLoading;
    state.hasErrors = hasErrors;
    state.errorMessage = errorMessage;
}

export const peopleSlice = createSlice({
    name: 'counter',
    initialState: peopleAdapter.getInitialState({
        isLoading: false, 
        hasErrors: false, 
        errorMessage: '',
        selected: -1
    }),
    reducers:{
        setSelcted: (state, action) => {
          state.selected = action.payload;
        },
        peopleReceived: (state, action) => {
            peopleAdapter.setAll(state, action.payload.results);
            state.isLoading = false;
            state.hasErrors = false;
            state.errorMessage = '';
        },
        peopleCreated: (state, action) => {
            peopleAdapter.setOne(state, action.payload);
            state.isLoading = false;
            state.hasErrors = false;
            state.errorMessage = '';
        },
        peopleUpdated: (state, action) => {
            peopleAdapter.upsertOne(state, action.payload);
            state.isLoading = false;
            state.hasErrors = false;
            state.errorMessage = '';
        },        
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.hasErrors = false;
            state.errorMessage = action.payload;
        }
    }
});

export const { peopleReceived, setLoading, setError } = peopleSlice.actions;

export default peopleSlice.reducer;