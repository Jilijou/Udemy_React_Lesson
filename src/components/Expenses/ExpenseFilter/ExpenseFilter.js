import { useState } from 'react';
import ExpensesFilterGraph from './ExpenseFilterGraph';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  function selectedYearHandler(event) {
    props.onYearClick(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onClick={selectedYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
      <ExpensesFilterGraph />
    </div>
  );
};

export default ExpensesFilter;