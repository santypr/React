import { peopleReceived, setError, setLoading } from "../reducers/people";
import { AppDispatch, AppThunk } from "../store"

// export const incrementCount = (): AppThunk => (

// )

export const getPeopleAction = (): AppThunk  => (dispatch: AppDispatch)  => {
    dispatch(setLoading(true));

    fetch ('https://swapi.dev/api/people/')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw response;
    })
    .then(data => {
        dispatch(peopleReceived(data));
    })
    .catch(error => {
        console.error('Error fetching data', error)
        dispatch(setError(error));
    })
    .finally(() => {
        // no hace falta porque si todo ha ido bien ya se ha hecho en el people received
        // dispatch(setLoading(false));
    })

    // try
    //     setLoading
    //     fetch1.disptahc

    //     fetch2.dispatch

    // catch
    //     setloading

}

