import React, {useContext} from 'react'
import { ExpenseContext } from "../Context/GlobalContext";
export default function Total() {

    const {transactions} = useContext(ExpenseContext)

    const amounts = transactions.map((trans) => trans.amount)
    const total = amounts.reduce((previous, current) => (
        (previous + current)
        
    ), 0).toFixed(2);

    return (
        <>
            <h4>Your Total Balance</h4>
            <h1> ${total} </h1>
        </>
    )
}
