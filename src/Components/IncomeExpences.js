import React, {useContext} from 'react'
import { ExpenseContext } from "../Context/GlobalContext";

export default function IncomeExpenses() {

    const {transactions} = useContext(ExpenseContext)

    const amounts = transactions.map((trans) => trans.amount)

    const income = amounts.filter(item => (item >0)).reduce((previous, current) => (previous+current), 0).toFixed(2);

    const expense = (amounts.filter((item) => (item < 0)).reduce((acc, item) => (acc + item), 0) * -1).toFixed(2)

    
    return (
        <div className="inc-exp-container">
            <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">-${expense}</p>
            </div>
      </div>
    )
}
