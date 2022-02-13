import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from './reducers/counter'
import peopleReducer from './reducers/people'

export const store = configureStore({ 
    reducer: {
        counter: counterReducer,
        people: peopleReducer
    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

// export const store = configureStore({
//     reducer : rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//     devTools: process.env.NODE_ENV !== 'production',
//   })