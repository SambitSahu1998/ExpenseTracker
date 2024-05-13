import ExpenseTracker from "./component/ExpenseTracker";
import BarChartCustomization from "./component/BarChartCustomization";
import RecentTransaction from "./component/RecentTransaction";

function App() {
  return (
    <div style={{ backgroundColor: "#3B3B3B", padding: "0px 20px 20px 20px", height:"98vh" }}>
      <div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          <text>Expense Tracker</text>
        </div>
        <ExpenseTracker />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          width:"100%"
        }}
      >
        <div style={{width:"65%"}}>
          <RecentTransaction />
        </div>
        <div style={{width:"33%"}}>
          <BarChartCustomization />
        </div>
      </div>
    </div>
  );
}

export default App;
