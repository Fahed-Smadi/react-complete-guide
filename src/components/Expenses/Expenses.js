import './Expenses.css'
import Card from '../UI/Card';
import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [dateFilter, setDateFilter] = useState('2020');
    const onChangeDateFilterHandler = (dateChanged) => {
        setDateFilter(dateChanged);
    };
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === dateFilter);

    return (
            <Card className="expenses">
                <ExpensesFilter selected={dateFilter} onChangeDateFilter={onChangeDateFilterHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
    );
}
export default Expenses;