import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import React from "react";

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      };
      props.onNewExpense(expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;