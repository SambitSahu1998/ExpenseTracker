import React,{useState} from 'react';
import ExpenseTracker from "./ExpenseTracker";
import BarChartCustomization from "./BarChartCustomization";
import RecentTransaction from "./RecentTransaction";
import AddIncomeModal from "./AddIcomeModal";
import ExpenseModal from "./ExpenseModal";

const ExpenseTrackerMain = () => {

  return (
    
    <div style={{ padding: "0px 20px 20px 20px" }}>
      {/* <ExpenseModal />
      <AddIncomeModal /> */}
        <div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "2.5rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            }}
          >
            <text>Expense Tracker</text>
          </div>
          <ExpenseTracker/>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ width: "65%" }}>
            <RecentTransaction />
          </div>
          <div style={{ width: "33%" }}>
            <BarChartCustomization />
          </div>
        </div>
      </div>
  )
}

export default ExpenseTrackerMain;