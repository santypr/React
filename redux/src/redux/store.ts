import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { peopleApi } from "../api/people";
import counterReducer from './reducers/counter'
import peopleReducer from './reducers/people'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({ 
    reducer: {
        counter: counterReducer,
        // people: peopleReducer,
        people: peopleApi.reducer
    }
    // ,
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware().concat(peopleApi.middleware)
    // }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<any, RootState, any, Action<string>>;

// export const store = configureStore({
//     reducer : rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//     devTools: process.env.NODE_ENV !== 'production',
//   })