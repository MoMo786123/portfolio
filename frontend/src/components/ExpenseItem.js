import './ExpenseItem.css';

function ExpenseItem () {
  const expenceDate = new Date(29, 10, 2023); 
  const expenceTitle = 'car insurance';
  const expenceAmount = 123.45;
  
  return (
        <div>
          <div>October 29th 2023</div>
          <div classname="expence-item__description">
            <h2>Car Insurance</h2>
            <div classname="expense-item_price">£123.45</div>
          </div>
        </div>
    );
}

export default ExpenseItem;

