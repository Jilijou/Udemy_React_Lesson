import { useEffect, useState } from 'react';
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

let yearSelected = '2022';

const ExpenseList = (props) => {
    var [yearExpenses, setYearExpenses] = useState([]);

    function yearClickedDisplay(yearClicked) {
        yearSelected = yearClicked;
        yearExpenses = [];
        for (let i = 0; i < props.expenses.length; i++) {
            if (yearSelected === props.expenses[i].date.getFullYear().toString()) {
                yearExpenses.push(props.expenses[i]);
            }
        };
        setYearExpenses([...yearExpenses]);
        return yearSelected;
    }

    //Run yearClickedDisplay when props.expenses is modified
    useEffect(() => {
        yearClickedDisplay(yearSelected);
    }, [props.expenses]);

    return (
        <Card className='expenses'>
            <ExpensesFilter onYearClick={yearClickedDisplay} />
            {yearExpenses.map(expense => (
                <ExpenseItem key={expense.id} expenses={expense}></ExpenseItem>
            ))}
        </Card>
    );
}

export default ExpenseList;