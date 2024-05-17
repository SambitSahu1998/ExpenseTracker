import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Legend} from 'recharts';

let data = [];
  
const COLORS = ['#FF9304', '#A000FF', '#FDE006'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" style={{fontWeight:"bold", fontStyle:"italic"}} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieChartCustomization({expenses}) {

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
  
  const memoizedLabel = useMemo(()=>renderCustomizedLabel,[]);
  
  return (
    <div>
      <PieChart width={300} height={300}>
        <Legend iconType="rect" iconSize={20} formatter={(value, entry) => <span style={{ color: 'white' }}>{value}</span>} />
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={memoizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
  );
};

