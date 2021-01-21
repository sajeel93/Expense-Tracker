import React, { useContext } from 'react'
import { ExpenseContext } from '../Context/GlobalContext';


export default function TransactionList() {

    const { transactions, dispatch } = useContext(ExpenseContext);

    return (
        <>

            <div>
                <h3>History</h3>
                    <ul id="list" className="list">
                        {
                            transactions.map(item => (
                                <li key={item.id} className={item.amount > 0 ? "plus" : "minus"}>
                                {item.text} <span>{item.amount}</span>
                                <button className="delete-btn" onClick={() => dispatch({type:"DELETE-TRANSACTION", id: item.id})}>x</button>
                                </li>
                            ))
                        }
                        
                    </ul>
            
            </div>
        
        </>

        
    )
}
