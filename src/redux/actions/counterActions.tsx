//Action Types
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../types";

//Action Creator
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});