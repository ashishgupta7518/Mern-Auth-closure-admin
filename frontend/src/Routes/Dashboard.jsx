import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  Area,
} from "recharts";

const barData = [
  { name: "John Doe", value: 21, color: "#0088FE" },
  { name: "Joe Smith", value: 22, color: "#00C49F" },
  { name: "Jake Williams", value: 10, color: "#FFBB28" },
  { name: "Amber", value: 28, color: "#FF4444" },
  { name: "Peter Brown", value: 16, color: "#8884d8" },
  { name: "Mary Evans", value: 21, color: "#00C49F" },
  { name: "David Wilson", value: 14, color: "#00C49F" },
  { name: "Lily Roberts", value: 30, color: "#FFBB28" },
];

const lineData = [
  { month: "Jan", teamA: 20, teamB: 40, teamC: 30 },
  { month: "Feb", teamA: 15, teamB: 60, teamC: 35 },
  { month: "Mar", teamA: 10, teamB: 50, teamC: 40 },
  { month: "Apr", teamA: 25, teamB: 70, teamC: 45 },
  { month: "May", teamA: 30, teamB: 65, teamC: 55 },
  { month: "Jun", teamA: 22, teamB: 80, teamC: 50 },
];

const data = [
  { name: "Jan", sales: 30 },
  { name: "Feb", sales: 50 },
  { name: "Mar", sales: 40 },
  { name: "Apr", sales: 55 },
  { name: "May", sales: 60 },
  { name: "Jun", sales: 70 },
  { name: "Jul", sales: 80 },
  { name: "Aug", sales: 90 },
  { name: "Sep", sales: 150 },
];

const pieData = [
  { name: "nse", value: 10, color: "#0088FE" },
  { name: "bse", value: 20, color: "#00C49F" },
  { name: "ipo", value: 30, color: "#FFBB28" },
  { name: "closure", value: 40, color: "#FF4444" },
];

const statsData = [
  { amount: "$424,652", label: "Sales" },
  { amount: "$235,312", label: "Expenses" },
  { amount: "$135,965", label: "Profits" },
  { amount: "$135,965", label: "Profits" },
];

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between gap-4 p-5 bg-gray-100">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex-1 p-5 bg-gray-200 rounded-lg shadow text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800">{item.amount}</h2>
            <p className="text-gray-600 text-base">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
        <div className="bg-white p-5 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-3">Product Trends by Month</h3>
          <LineChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-3">Market Share</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Bar Chart Example</h3>
          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </div>

        <div className="bg-white p-5 rounded-md shadow-md md:col-span-2">
          <h3 className="text-lg font-semibold mb-3">Combined Chart Example</h3>
          <AreaChart width={500} height={300} data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="teamB"
              fill="#00C49F"
              stroke="#00C49F"
              opacity={0.3}
            />
            <Bar dataKey="teamA" fill="#0088FE" />
            <Line type="monotone" dataKey="teamC" stroke="#FFBB28" />
          </AreaChart>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
