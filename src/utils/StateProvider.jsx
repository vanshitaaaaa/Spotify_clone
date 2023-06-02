import { createContext,useContext,useReducer } from "react";
import reducer from "./reducer";

export const StateContext=createContext();

export const StateProvider = ({ children, initialState }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


export const useStateProvider = () =>useContext(StateContext);