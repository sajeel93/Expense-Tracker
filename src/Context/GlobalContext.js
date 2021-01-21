import React, { createContext, useReducer } from 'react';
import Reducer from "./Reducer";

const initialState = {
    transaction: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 }
    ]
}

export const ExpenseContext =  createContext(initialState)

function GlobalContext(props) {

    const [budget, dispatch] = useReducer(Reducer, initialState)

    const addTransaction = (trans) => {
        dispatch({
            type: "ADD-TRANSACTION",
            payload: trans
        })

    }
    
    return (
        <ExpenseContext.Provider value={{
            transactions: budget.transaction,
            dispatch,
            addTransaction
        }}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

export default GlobalContext;