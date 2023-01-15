import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [dateFilter, setDateFilter] = useState('2020');
    const onChangeDateFilterHandler = (dateChanged) => {
        setDateFilter(dateChanged);
        props.onChangeDateFilter(dateChanged);
    };

    return (
            <Card className="expenses">
                <ExpensesFilter selected={dateFilter} onChangeDateFilter={onChangeDateFilterHandler} />
                {props.expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
    );
}
export default Expenses;