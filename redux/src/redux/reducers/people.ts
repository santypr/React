import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
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

export const fetchPeople = createAsyncThunk(
    'people/list',
    async (dispatch, getState) => {
        // setLoading(true);
        const result = await fetch('https://swapi.dev/api/people/')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                peopleReceived(data);
            })
            .catch(error => {
                console.error('Error fetching data', error)
                setError(error);
                return error?.response
            })
            .finally(() => {
                // no hace falta porque si todo ha ido bien ya se ha hecho en el people received
                // dispatch(setLoading(false));
            });
        return result;
    }
)

export const peopleSlice = createSlice({
    name: 'people',
    initialState: peopleAdapter.getInitialState({
        isLoading: false, 
        hasErrors: false, 
        errorMessage: '',
        selected: -1
    }),
    reducers:{
        setSelected: (state, action) => {
          state.selected = action.payload;
        },
        peopleReceived: (state, action) => {
            peopleAdapter.setAll(state, action.payload.results);
            // state.isLoading = false;
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
    },
    // extraReducers: {
    //     [fetchPeople.pending]: (state: RootState, action: Action) => {
    //         setLoading(true);
    //     },
    //     [fetchPeople.fulfilled]: (state: RootState, action: Action) => {
    //         setLoading(false);
    //         state.people = action.payload;
    //     },
    //     [fetchPeople.pending]: (state, action) => {
    //         setLoading(false);
    //     }
    // }
});

export const { peopleReceived, setLoading, setError } = peopleSlice.actions;

export default peopleSlice.reducer;