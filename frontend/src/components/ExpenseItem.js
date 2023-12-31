import React from 'react';

import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import Card from './card.js';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>£{props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

