import React from "react";
import BalanceDivComponent from "./BalanceDivComponent";
import PieChartCustomization from "./PieChartCustomization";

const ExpenseTracker = ({onClick}) => {
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
          value="₹1000"
          buttonColor="linear-gradient(90deg, #B5DC52 0%, #89E148 100%)"
          textColor="#9DFF5B"
        />
        <BalanceDivComponent
          type="Expense"
          value="₹500"
          buttonColor="linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)"
          textColor="#F4BB4A"
          onClick={onClick}
        />
        <PieChartCustomization />
      </div>
    </div>
  );
};

export default ExpenseTracker;
