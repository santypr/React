import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPeopleQuery } from "../../api/people";
import IPeople from "../../models/people";
import { getPeopleAction } from "../../redux/actions/people";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getPeopleSelector, peopleSelector } from "../../redux/selectors/people";

export const People = () => {
    const dispatch = useDispatch();
    // const people = useSelector(getAllPeopleSelector.selectAll);
    // const people = useSelector(getPeopleSelector);
    // const { isLoading, hasErrors, errorMessage } = useSelector(peopleSelector);

    // useEffect(() => {
    //     dispatch(getPeopleAction());
    // }, [])

    useEffect(() => {
        dispatch(useGetPeopleQuery);
    }, [])

    return (
        <>
            <div>
                <div>
                    {/* Estado: {isLoading ? "Loading" : "Loaded "} */}
                </div>
                {/* <div>
                    Tiene Errores: {hasErrors ? "Sí" : "No "}
                </div>
                <div>
                    Errores: {errorMessage}
                </div> */}
                {/* {
                    error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (data.map((item: IPeople, index: number) => {
                        return (
                            <>
                                <div>{item.name}</div>
                            </>
                        )
                    }))
                : null } */}

                {/* {people.map((item: IPeople, index: number) => {
                    return (
                        <>
                            <div>{item.name}</div>
                        </>
                    )
                })} */}

            </div>
        </>
    )
}