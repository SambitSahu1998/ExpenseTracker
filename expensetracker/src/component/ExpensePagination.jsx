import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AirplaneTicketOutlinedIcon from "@mui/icons-material/AirplaneTicketOutlined";

const ExpensePagination = ({ expenses, onEditExpense, onDeleteExpense }) => {
  const handleEditExpense = (expense) => {
    onEditExpense(expense);
  };

  const handleDeleteExpense = (id) => {
    onDeleteExpense(id);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExpenses = expenses.slice(startIndex, endIndex);

  const showPagination = expenses.length > itemsPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ width: "100%", height: "50%" }}>
      <table style={{ width: "100%" }}>
        <tbody>
          {currentExpenses.map((expense) => (
            <tr key={expense.id} style={{ height: "5rem" }}>
              <td style={{ width: "10%", textAlign: "center" }}>
                <span
                  style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "30px",
                    padding: "15px 7px 0px 7px",
                  }}
                >
                  {expense.category === "Entertainment" && (
                    <LiveTvOutlinedIcon />
                  )}
                  {expense.category === "Food" && <RestaurantOutlinedIcon />}
                  {expense.category === "Travel" && (
                    <AirplaneTicketOutlinedIcon />
                  )}
                </span>
              </td>
              <td style={{ width: "75%" }}>
                <div>
                  <span
                    style={{
                      fontFamily: "open sans",
                      fontWeight: "400",
                      color: "#000000",
                    }}
                  >
                    {expense.title}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "open sans",
                      fontWeight: "400",
                      color: "#777777",
                    }}
                  >
                    {expense.dateOfExpense}
                  </span>
                </div>
              </td>
              <td
                style={{
                  fontSize: "1.2rem",
                  color: "#F4BB4A",
                  fontWeight: "700",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1.3rem",
                  width: "5%",
                }}
              >
                {`₹${expense.price}`}
              </td>
              <td style={{ width: "5%" }}>
                <button
                  onClick={() => handleEditExpense(expense)}
                  style={{
                    borderRadius: "20px",
                    padding: "5px",
                    border: "none",
                    backgroundColor: "#FF3E3E",
                    cursor: "pointer",
                  }}
                >
                  <EditOutlinedIcon style={{ color: "white" }} />
                </button>
              </td>
              <td style={{ width: "5%" }}>
                <button
                  onClick={() => handleDeleteExpense(expense.id)}
                  style={{
                    borderRadius: "20px",
                    padding: "7px",
                    border: "none",
                    backgroundColor: "#F4BB4A",
                    cursor: "pointer",
                  }}
                >
                  <CancelOutlinedIcon style={{ color: "white" }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPagination && (
        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            style={{
              borderRadius: "15px",
              padding: "5px 10px",
              boxShadow: "0 0px 0px #000000",
              border: "none",
              background:
                "linear-gradient(0deg, #F1F1F1, #F1F1F1),linear-gradient(0deg, #F1F1F1, #F1F1F1),linear-gradient(0deg, #F1F1F1, #F1F1F1),linear-gradient(0deg, #F1F1F1, #F1F1F1)",
              cursor: "pointer",
            }}
          >
            <WestOutlinedIcon style={{ color: "#333333" }} />
          </button>
          <span
            style={{
              margin: "0 0.5rem",
              backgroundColor: "#43967B",
              borderRadius: "5px",
              padding: "0px 10px",
              fontSize: "1.5rem",
              color: "white",
            }}
          >
            {currentPage}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{
              borderRadius: "15px",
              padding: "5px 10px",
              boxShadow: "0 0px 0px #000000",
              border: "none",
              background:
                "linear-gradient(0deg, #F1F1F1, #F1F1F1),linear-gradient(0deg, #F1F1F1, #F1F1F1),linear-gradient(0deg, #F1F1F1, #F1F1F1),linear-gradient(0deg, #F1F1F1, #F1F1F1)",
              cursor: "pointer",
            }}
          >
            <EastOutlinedIcon style={{ color: "#333333" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpensePagination;
