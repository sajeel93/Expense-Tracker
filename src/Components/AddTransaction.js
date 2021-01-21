import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { ExpenseContext } from "../Context/GlobalContext";

export default function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(ExpenseContext)

    const onSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: uuidv4(),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction)

    }


    return (
        <div>
           <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">Add transaction</button>
            </form>
            
        </div>
    )
}
