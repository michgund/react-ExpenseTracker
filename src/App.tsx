import { useState } from "react";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";
import ExpenseForm from "./expense-tracker/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Gas", price: 20, category: "Utilities" },
    { id: 2, description: "Orange juice", price: 2, category: "Groceries" },
    { id: 3, description: "Movie", price: 10, category: "Entertainment" },
    { id: 4, description: "Energy", price: 100, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>

      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </>
  );
}

export default App;
