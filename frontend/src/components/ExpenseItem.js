import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
        <div classname='expense-item' >
          <ExpenseDate date={props.date} />
            <div classname='expence-item__description' >
              <h2>{props.title}</h2>
              <div classname='expense-item_price'>${props.amount}</div>
          </div>
        </div>
  ) 
};

export default ExpenseItem;

