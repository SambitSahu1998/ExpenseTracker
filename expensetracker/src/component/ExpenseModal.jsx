import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import "./ExpenseModal.css";

const ExpenseModal = ({open, handleClose, expense, handleAddExpense, isEditing}) => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [dateOfExpense, setDateOfExpense] = useState("");
  

  useEffect(()=>{
    if(isEditing && expense){
      setTitle(expense.title);
      setPrice(expense.price);
      setCategory(expense.category);
      setDateOfExpense(expense.dateOfExpense);
    }else{
      setTitle("");
      setPrice("");
      setCategory("");
      setDateOfExpense("");
    }
  },[isEditing, expense]);

  
  const handleActionClick = () => {
    if(isEditing){
      const updatedExpenseData = {id:expense.id, title,price,category, dateOfExpense};
      handleAddExpense(updatedExpenseData);
    } else {
      const newExpenseData = {title,price,category, dateOfExpense};
      handleAddExpense(newExpenseData);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            background: "rgba(239, 239, 239, 0.85)",
            borderRadius: 8,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            mb={2}
            id="modal-modal-title"
          >
            {isEditing?"Edit Expense":"Add Expense"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            mb={2}
          >
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              style={{
                width: "40%",
                borderRadius: "15px",
                padding: "15px",
                border: "none",
                boxShadow: "0 0 10px #777777",
              }}
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              style={{
                width: "40%",
                borderRadius: "15px",
                padding: "15px",
                border: "none",
                boxShadow: "0 0 10px #777777",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            mb={3}
          >
            <select
              name="Select Category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              style={{
                width: "47%",
                borderRadius: "15px",
                padding: "15px 12px",
                border: "none",
                boxShadow: "0 0 10px #777777",
              }}
            >
              <option value="" disabled style={{color: "#999"}}>Select Category</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
            </select>
            <input
              type="date"
              value={dateOfExpense}
              onChange={(e)=>{setDateOfExpense(e.target.value)}}
              style={{
                width: "40%",
                borderRadius: "15px",
                padding: "15px",
                border: "none",
                boxShadow: "0 0 10px #777777",
              }}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            width="100%"
          >
            <Button
              variant="contained"
              sx={{
                borderRadius: 4,
                width: "48%",
                background: "linear-gradient(0deg, #F4BB4A, #F4BB4A)",
                boxShadow: "0 0 10px #333333",
              }}
              onClick={handleActionClick}
            >
              Add Expense
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                marginLeft: "5%",
                width: "30%",
                borderRadius: 4,
                background: "linear-gradient(0deg, #D9D9D9, #D9D9D9)",
                color: "black",
                boxShadow: "0 0 10px #333333",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
