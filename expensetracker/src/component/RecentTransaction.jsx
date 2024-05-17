import React from "react"; 
import ExpensePagination from "./ExpensePagination";   

const RecentTransaction = ({ expenses, onEditExpense, onDeleteExpense}) => {
  return (
    <div>
      <h2 style={{ fontWeight: "700", fontStyle: "italic", color: "#FFFFFF" }}>
        Recent Transactions
      </h2>
      <div
        style={{ backgroundColor: "#FFFFFF", borderRadius: "5px", padding:"10px" }}>     
          <ExpensePagination expenses={expenses} onEditExpense={onEditExpense} onDeleteExpense={onDeleteExpense} />
        </div>
    </div>
  );
};

export default RecentTransaction;
