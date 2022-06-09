import { peopleAdapter } from "../reducers/people";
import { RootState } from "../store";

export const peopleSelector = (state: RootState) => { return state.people }

export const getPeopleSelector = (state: RootState) => {
    const people = peopleSelector(state);

    return people;
}

// export const getAllPeopleSelector = peopleAdapter.getSelectors<RootState>(
//     (state) => state.people
// );


// export const personSelector = (state: RootState, id: number) => {
//     const counter = peopleSelector(state);

//     state.people.;
//     return counter.count;
// }