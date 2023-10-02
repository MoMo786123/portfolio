import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const day = props.date.toLocaleString('en-US', {day: '2-digit'});
  const year = props.date.getFullYear();


  return (
        <div classname='expense-item' >
            <div>
              <div>{month}</div>
             <div>{Year}</div>
             <div>{Day}</div>
            </div>
            <div classname='expence-item__description'>
              <h2>{props.title}</h2>
              <div classname='expense-item_price'>${props.amount}</div>
          </div>
        </div>
    );
}

export default ExpenseItem;

