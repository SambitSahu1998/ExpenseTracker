import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

export default function BarChartCustomization ({expenses}) {

  let data = [];

  const categories = {Entertainment:0,Food:0,Travel:0};

  expenses.forEach(expense=>{
    if(categories.hasOwnProperty(expense.category)){
      categories[expense.category] += parseFloat(expense.price);
    }
  });

  const totalExpense = Object.values(categories).reduce((sum,val)=>sum+val,0);

  const categoryPercentage = {};

  for(const[category, amount] of Object.entries(categories)){
    categoryPercentage[category] = ((amount/ totalExpense)*100).toFixed(0);
  }

  data = Object.keys(categoryPercentage).map(key => ({
    name:key,
    value: parseFloat(categoryPercentage[key])
  }));


  return (
    <div>
      <h2 style={{ fontWeight: "700", fontStyle: "italic", color: "#FFFFFF" }}>
        Top Expenses
      </h2>
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "5px",
          padding: "10px 0px",
          width: "100%",
          minHeight: "50%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BarChart layout="vertical" width={350} height={300} data={data} margin={{left:70}}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{
              fontStyle: "italic",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          />
          <Bar dataKey="value" barSize={30}>
            {data.map((entry, index) => (
              <Cell fill="#8884d8" key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
