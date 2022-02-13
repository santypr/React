import { RootState } from "../store";

export const counterSelector = (state: RootState) => { return state.counter }

export const currentCountSelector = (state: RootState) => {
    const counter = counterSelector(state);

    return counter.count;
}