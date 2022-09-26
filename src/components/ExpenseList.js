import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
    return (
        <div className='expenses'>
            <ExpenseItem expenses={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expenses={props.expenses[1]}></ExpenseItem>
            <ExpenseItem expenses={props.expenses[2]}></ExpenseItem>
            <ExpenseItem expenses={props.expenses[3]}></ExpenseItem>
        </div>
    );
}

export default ExpenseList;