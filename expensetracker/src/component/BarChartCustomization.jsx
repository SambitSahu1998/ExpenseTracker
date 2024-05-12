import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

export default class BarChartCustomization extends PureComponent {
  state = {
    data: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
    ],
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h2 style={{fontWeight:"700", fontStyle:"italic", color:"#FFFFFF"}}>Top Expenses</h2>
        <div
          style={{background: "#FFFFFF", borderRadius: "5px" }}
        >
          <BarChart layout="vertical" width={300} height={250} data={data}>
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
            <Bar dataKey="uv" barSize={30}>
              {data.map((entry, index) => (
                <Cell fill="#8884d8" key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    );
  }
}
