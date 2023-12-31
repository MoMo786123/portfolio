import React from "react";

import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 5.00,
      date: new Date(2023, 9, 3),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2023, 9, 3) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 9, 3),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 9, 3),
    },
  ];
  return (
    <div>
      <h2>My first project</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
