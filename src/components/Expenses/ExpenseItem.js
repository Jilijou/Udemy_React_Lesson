import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenses.title);

    function clickHandler() {
        setTitle(prompt("Please enter a new title :", "Curling"));
    };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenses.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.expenses.amount}€</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );

}

export default ExpenseItem;