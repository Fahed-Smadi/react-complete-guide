import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [dateFilter, setDateFilter] = useState('2020');
    const onChangeDateFilterHandler = (dateChanged) => {
        setDateFilter(dateChanged);
        props.onChangeDateFilter(dateChanged);
    };
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === dateFilter);

    return (
            <Card className="expenses">
                <ExpensesFilter selected={dateFilter} onChangeDateFilter={onChangeDateFilterHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
    );
}
export default Expenses;