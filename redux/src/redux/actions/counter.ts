    import { useAppDispatch } from "../hooks"
    import { decrement, increment, incrementByAmount } from "../reducers/counter";
    import { AppDispatch, AppThunk } from "../store"

    // export const incrementCount = (): AppThunk => (

    // )

    export const incrementCount = (): AppThunk  => (dispatch: AppDispatch)  => {
        dispatch(increment());
    }

    // export const decrementCount = () => {
    //     const dispatch = useAppDispatch();
    //     dispatch(decrement);
    // }

    export const decrementCount = (): AppThunk  => (dispatch: AppDispatch) => {
        dispatch(decrement());
    }

    export const incrementCountByAmount = (amount: number): AppThunk  => (dispatch: AppDispatch)  => {
        // const dispatch = useAppDispatch();
        dispatch(incrementByAmount(amount));
    }
