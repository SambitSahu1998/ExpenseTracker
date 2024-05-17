import React from "react";

const BalanceDivComponent = ({
  type,
  value,
  buttonColor,
  textColor,
  onAddIncomeClickOpen,
  onAddExpenseClickOpen,
}) => {
  const handleClick = () => {
    if (type === "Total Balance") {
      onAddIncomeClickOpen();
    } else {
      onAddExpenseClickOpen();
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#9B9B9B",
        textAlign: "center",
        borderRadius: "15px",
        width: "23rem",
        height: "12rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontWeight: "700", fontSize: "30px", color: "whitesmoke" }}>
        {type === "Total Balance" ? "Wallet Balance: " : "Expenses: "}
        <span style={{ color: textColor }}>{"₹"+value}</span>
      </div>
      <button
        style={{
          background: buttonColor,
          color: "white",
          padding: "0 20px",
          borderRadius: "10px",
          cursor: "pointer",
          marginTop: "25px",
          height: "2rem",
          border: "none",
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        +Add {type === "Total Balance" ? "Income" : "Expense"}
      </button>
    </div>
  );
};

export default BalanceDivComponent;
