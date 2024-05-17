import React, { useState, useEffect } from "react";
import ExpenseTracker from "./ExpenseTracker";
import BarChartCustomization from "./BarChartCustomization";
import RecentTransaction from "./RecentTransaction";
import AddIncomeModal from "./AddIncomeModal";
import ExpenseModal from "./ExpenseModal";
import { enqueueSnackbar } from "notistack";

const ExpenseTrackerMain = () => {
  const initialWalletBalance =
    parseFloat(localStorage.getItem("walletBalance")) || 5000;
  const initialExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const initialTotalSpent = parseFloat(localStorage.getItem("totalSpent")) || 0;

  const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
  const [isIncomeModalOpen, setIncomeModalOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(initialWalletBalance);
  const [expenseBalance, setExpenseBalance] = useState(initialTotalSpent);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [editingExpense, setEditingExpense] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    const totalExpenseBalance = expenses.reduce(
      (acc, exp) => acc + parseFloat(exp.price),
      0
    );
    setExpenseBalance(totalExpenseBalance);
    localStorage.setItem("totalSpent", totalExpenseBalance);
  }, [expenses]);

  const handleExpenseModalOpen = () => setExpenseModalOpen(true);
  const handleExpenseModalClose = () => {
    setExpenseModalOpen(false);
    setIsEditing(false);
    setEditingExpense(null);
  };
  const handleIncomeModalOpen = () => setIncomeModalOpen(true);
  const handleIncomeModalClose = () => setIncomeModalOpen(false);

  const addIncome = (amount) => {
    if (amount <= 0) {
      enqueueSnackbar("Please Enter An Valid Amount", { variant: "warning" });
      return;
    }
    const newBalance = Number(walletBalance) + Number(amount);
    setWalletBalance(newBalance);
    localStorage.setItem("walletBalance", newBalance);
  };

  const addExpense = (expense) => {
    if(isNaN(expense.price) || expense.price<=0){
      enqueueSnackbar("Please Enter An Valid Amount", { variant: "warning" });
      return;
    }
    if (Number(expense.price) > Number(walletBalance)) {
      enqueueSnackbar("Expense Exceeds Than Available Wallet Balance", { variant: "error" });
      return;
    }
    const updatedWalletBalance = Number(walletBalance) - Number(expense.price);
    const updatedExpenses = [...expenses, { id: Date.now(), ...expense }];
    setExpenses(updatedExpenses);
    setWalletBalance(updatedWalletBalance);
    enqueueSnackbar("Expense Added Successfully", { variant: "success" });
    localStorage.setItem("walletBalance", updatedWalletBalance);
  };

  const editExpense = (expense) => {
    setEditingExpense(expense);
    setIsEditing(true);
    handleExpenseModalOpen();
  };

  const updateExpense = (expense) =>{
    if(isNaN(expense.price) || expense.price<=0){
      enqueueSnackbar("Please Enter An Valid Amount", { variant: "warning" });
      return;
    }
    if(Number(expense.price)>Number(walletBalance)){
      enqueueSnackbar("Expense Exceeds Than Available Wallet Balance", {variant:"error"});
      return;
    }
    const expenseIndex = expenses.findIndex(exp => exp.id === expense.id);
    console.log(expenseIndex);
    if(expenseIndex !== -1){
      const priceDifference = parseFloat(expense.price) - parseFloat(expenses[expenseIndex].price);
      const updatedWalletBalance = walletBalance - priceDifference;
      if(priceDifference>updatedWalletBalance){
        enqueueSnackbar("Expense Exceeds The Available Wallet Balance", {variant:"error"});
        return;
      }
      const updatedExpense = [...expenses];
      updatedExpense[expenseIndex] = expense;
      setExpenses(updatedExpense);
      setWalletBalance(updatedWalletBalance);
      const newUpdatedExpenseBalance = expenseBalance + priceDifference;
      setEditingExpense(newUpdatedExpenseBalance);
      enqueueSnackbar("Expense Updated Successfully", {variant:"success"});
      localStorage.setItem("totalSpent", newUpdatedExpenseBalance);
      localStorage.setItem("expenses", JSON.stringify(updatedExpense));
      localStorage.setItem("walletBalance",updatedWalletBalance);
    }
  }

  const deleteExpense = (id) => {
    const toBeDeletedExpense = expenses.find(expense => expense.id === id);
    const updatedWalletBalance = parseFloat(walletBalance) + parseFloat(toBeDeletedExpense.price);
    setWalletBalance(updatedWalletBalance);
    const updatedTotalExpenses = parseFloat(expenseBalance) - parseFloat(toBeDeletedExpense.price);
    setExpenseBalance(updatedTotalExpenses);
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("walletBalance", updatedWalletBalance);
    localStorage.setItem("totalSpent", updatedTotalExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <div style={{ padding: "0px 20px 20px 20px" }}>
      <div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          <span>Expense Tracker</span>
        </div>
        <ExpenseTracker
          walletBalance={walletBalance}
          expenseBalance={expenseBalance}
          onAddExpenseClickOpen={handleExpenseModalOpen}
          onAddIncomeClickOpen={handleIncomeModalOpen}
          expenses={expenses}
        />
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
          <RecentTransaction
            expenses={expenses}
            onEditExpense={editExpense}
            onDeleteExpense={deleteExpense}
          />
        </div>
        <div style={{ width: "33%" }}>
          <BarChartCustomization />
        </div>
      </div>
      <ExpenseModal
        open={isExpenseModalOpen}
        handleClose={handleExpenseModalClose}
        expense={editingExpense}
        handleAddExpense={isEditing?updateExpense:addExpense}
        isEditing={isEditing}
      />
      <AddIncomeModal
        open={isIncomeModalOpen}
        handleClose={handleIncomeModalClose}
        addIncome={addIncome}
      />
    </div>
  );
};

export default ExpenseTrackerMain;
