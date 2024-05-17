import React from "react";
import BalanceDivComponent from "./BalanceDivComponent";
import PieChartCustomization from "./PieChartCustomization";

const ExpenseTracker = ({
  walletBalance,
  expenseBalance,
  onAddExpenseClickOpen,
  onAddIncomeClickOpen,
  expenses,
}) => {
  return (
    <div>
      <div
        style={{
          background: "#626262",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "7px",
        }}
      >
        <BalanceDivComponent
          type="Total Balance"
          value={walletBalance}
          buttonColor="linear-gradient(90deg, #B5DC52 0%, #89E148 100%)"
          textColor="#9DFF5B"
          onAddIncomeClickOpen={onAddIncomeClickOpen}
        />
        <BalanceDivComponent
          type="Expense"
          value={expenseBalance}
          buttonColor="linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)"
          textColor="#F4BB4A"
          onAddExpenseClickOpen={onAddExpenseClickOpen}
        />
        <PieChartCustomization expenses={expenses}/>
      </div>
    </div>
  );
};

export default ExpenseTracker;
