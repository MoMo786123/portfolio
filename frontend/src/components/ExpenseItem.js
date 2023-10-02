import './ExpenseItem.css';

function ExpenseItem (props) {
  
  return (
        <div>
          <div>October 29th 2023</div>
            <div>{expenceDate.toISOString()}</div>
          <div classname="expence-item__description">
            <h2>{props.title}</h2>
            <div classname='expense-item_price'>${props.amount}</div>
          </div>
        </div>
    );
}

export default ExpenseItem;

