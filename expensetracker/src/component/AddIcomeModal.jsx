import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import "./ExpenseModal.css";

const AddIncomeModal = () => {
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
            Add Balance
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <input
              type="number"
              placeholder="Add Income"
              style={{
                width:"35%",
                borderRadius: "15px",
                padding: "15px",
                border: "none",
                boxShadow: "0 0 10px #777777",
                marginRight:"0.2rem",
              }}
            />
            <Box sx={{display: "flex",
              alignItems: "center",
              justifyContent: "space-around", width:"55%"}}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 4,
                  width:"60%",
                  padding:"12px",
                  fontSize: "0.7rem",
                  fontWeight:"bold",
                  background: "linear-gradient(0deg, #F4BB4A, #F4BB4A)",
                  boxShadow: "0 0 10px #333333",
                }}
              >
                Add Balance
              </Button>
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  marginLeft: "5%",
                  padding:"10px",
                  borderRadius: 4,
                  fontSize: "0.7rem",
                  background: "linear-gradient(0deg, #D9D9D9, #D9D9D9)",
                  color: "black",
                  boxShadow: "0 0 10px #333333",
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddIncomeModal;
