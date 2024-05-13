import React, { useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

const ExpensePagination = () => {
  const expenses = [
    {
      id: 1,
      photo: "food.jpg",
      name: "Lunch",
      date: "2024-05-13",
      amount: 15.5,
    },
    {
      id: 2,
      photo: "movie.jpg",
      name: "Movie Ticket",
      date: "2024-05-10",
      amount: 10,
    },
    {
      id: 3,
      photo: "auto.jpg",
      name: "Taxi Ride",
      date: "2024-05-09",
      amount: 20,
    },
    {
      id: 4,
      photo: "shopping.jpg",
      name: "Groceries",
      date: "2024-05-08",
      amount: 50,
    },
    {
      id: 5,
      photo: "coffee.jpg",
      name: "Coffee",
      date: "2024-05-07",
      amount: 4.5,
    },
    {
      id: 6,
      photo: "fuel.jpg",
      name: "Gasoline",
      date: "2024-05-06",
      amount: 30,
    },
    {
      id: 7,
      photo: "snacks.jpg",
      name: "Snacks",
      date: "2024-05-05",
      amount: 8,
    },
    {
      id: 8,
      photo: "clothes.jpg",
      name: "Clothes",
      date: "2024-05-04",
      amount: 70,
    },
    {
      id: 9,
      photo: "gym.jpg",
      name: "Gym Membership",
      date: "2024-05-03",
      amount: 25,
    },
    {
      id: 10,
      photo: "internet.jpg",
      name: "Internet Bill",
      date: "2024-05-02",
      amount: 60,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExpenses = expenses.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleEditExpense = (id) => {};

  const handleDeleteExpense = (id) => {};

  return (
    <div style={{width:"100%", height:"35vh"}}>
      <table style={{ width: "100%" }}>
        <tbody>
          {currentExpenses.map((expense) => (
            <tr key={expense.id} style={{height:"5rem"}}>
              <td style={{ width: "10%", textAlign:"center" }}>
              <span style={{ backgroundColor: "#D9D9D9", borderRadius: "30px", padding:"15px 7px 0px 7px"}}>
                  <LocalGroceryStoreOutlinedIcon />
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
                    {expense.name}
                  </span>
                  <br />
                  <span
                    style={{
                      fontFamily: "open sans",
                      fontWeight: "400",
                      color: "#777777",
                    }}
                  >
                    {expense.date}
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
                  marginTop:"1.3rem",
                  width: "5%",
                }}
              >
                {`₹${expense.amount}`}
              </td>
              <td style={{ width: "5%" }}>
                <button
                  onClick={() => handleEditExpense(expense.id)}
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
            margin: "0 1.5rem",
            backgroundColor: "#43967B",
            borderRadius: "5px",
            padding: "5px 15px",
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
    </div>
  );
};

export default ExpensePagination;
