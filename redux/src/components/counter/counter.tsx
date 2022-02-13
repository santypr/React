import { useState } from "react";
import { useSelector } from "react-redux";
import { decrementCount, incrementCount, incrementCountByAmount } from "../../redux/actions/counter";
import { useAppDispatch } from "../../redux/hooks";
import { counterSelector } from "../../redux/selectors/counter";

export const Counter = () => {
    const counter = useSelector(counterSelector);
    // const counter = useSelector((state: RootState) => state.counter );

    const dispatch = useAppDispatch();
    const handleIncrement = (amount: number)  => {
        if (amount > 1) {
            dispatch(incrementCountByAmount(amount));
        } else {
            dispatch(incrementCount());
        }
    }
    // const handleIncrementBy1 = () => {
    //     dispatch(incrementCount());
    // }
    // const handleIncrementBy5 = () => {
    //     dispatch(incrementCountByAmount(5));
    // }
    const handleDecrement = () => {
        dispatch(decrementCount());
    }

    return (
        <>
            <h1> The count is: {counter.count} </h1>
            <button onClick={() => handleIncrement(1)}>Increment</button>
            <button onClick={() => handleDecrement}>Decrement</button>
            <button onClick={() => handleIncrement(5)}>Increment by 5</button>
        </>
    )
}

// export const Counter =  () => {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <h1> The count is: {count} </h1>
//             <button onClick={() => setCount(count +1)}>Increment</button>
//             <button onClick={() => setCount(count -1)}>Decrement</button>
//         </>
//     )
// }