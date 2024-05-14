import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
} from "@mui/material";
import "./ExpenseModal.css";

const ExpenseModal = ({}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            Add Expense
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
              style={{
                width: "47%",
                borderRadius: "15px",
                padding: "15px 12px",
                border: "none",
                boxShadow: "0 0 10px #777777",
              }}
            >
              <option value="" disabled selected style={{color: "#999"}}>Select Category</option>
              <option value="Food Groceries">Food and Groceries</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Transportation">Transportation</option>
            </select>
            <input
              type="date"
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
