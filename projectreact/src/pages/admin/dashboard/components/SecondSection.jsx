import React, { PureComponent } from "react";
import { PieChart, Tooltip, Pie, Cell, ResponsiveContainer } from "recharts";


const logs = [
  { type: "normal", text: "New user registration", time: "14:12" },
  { type: "normal", text: "New sale: Soufflé", time: "13:20" },
  { type: "error", text: "14 products added", time: "12:55" },
  { type: "normal", text: "New sale: Napoleonshat", time: "12:44" },
  { type: "normal", text: "New sale: Napoleonshat", time: "12:44" },
  { type: "normal", text: "New sale: Napoleonshat", time: "12:44" },
  { type: "normal", text: "New sale: Napoleonshat", time: "12:44" },
  { type: "normal", text: "New sale: Napoleonshat", time: "12:44" },
  { type: "normal", text: "New sale: Napoleonshat", time: "12:44" },
  { type: "normal", text: "New sale: Cremeschnitte", time: "12:30" },
  { type: "normal", text: "New sale: Soufflé", time: "10:40" },
  { type: "error", text: "2 categories added", time: "10:20" },
  { type: "normal", text: "New sale: Chocolate Cake", time: "09:28" },
  { type: "normal", text: "New sale: Magdalena", time: "09:25" },
];

const tickets = [
  {
    id: 1,
    name: "Mayra Sibley",
    date: "09.08.2018",
    time: "12:45",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 2,
    name: "Mimi Carreira",
    date: "05.08.2018",
    time: "10:20",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 3,
    name: "Philip Nelms",
    date: "05.08.2018",
    time: "09:12",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 4,
    name: "Terese Threadgill",
    date: "01.08.2018",
    time: "18:20",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 4,
    name: "Terese Threadgill",
    date: "01.08.2018",
    time: "18:20",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 4,
    name: "Terese Threadgill",
    date: "01.08.2018",
    time: "18:20",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 4,
    name: "Terese Threadgill",
    date: "01.08.2018",
    time: "18:20",
    image: "/src/assets/pp.jpeg",
  },
  {
    id: 4,
    name: "Terese Threadgill",
    date: "01.08.2018",
    time: "18:20",
    image: "/src/assets/pp.jpeg",
  },
];

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class SecondSection extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  render() {
    return (
      <div className="grid grid-cols-3 gap-8 w-full !pb-8 !m-4">
        <div className="bg-slate-50 w-full h-[500px] shadow-lg rounded-lg">
          <p className="flex text-lg font-semibold w-full !p-4 text-zinc-500">
            Product Categories
          </p>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={1000} height={1000}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Pie
                dataKey="value"
                data={data}
                cx={500}
                cy={300}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-50 w-full h-[500px] shadow-lg rounded-lg overflow-auto">
          <h2 className="flex text-lg font-semibold text-zinc-500 w-full !p-4">
            Logs
          </h2>
          <div className="space-y-4 !p-4">
            {logs.map((log, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center !mb-4">
                  <div className="w-4 h-4 rounded-full border !mr-4 border-blue-600"></div>
                  <span className="text-gray-700">{log.text}</span>
                </div>
                <span className="text-gray-500 text-sm !pb-4">{log.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 w-full h-[500px] shadow-lg rounded-lg overflow-auto">
          <h2 className="flex text-lg font-semibold w-full text-zinc-500 !p-4">
            Tickets
          </h2>
          <div className="space-y-4 !px-4">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="flex items-center border-b border-zinc-200 !pb-3">
                <div className="!mr-8 !pt-2">
                  <img
                    src={ticket.image}
                    alt={ticket.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div className="!pt-2">
                  <p className="font-medium text-gray-800">{ticket.name}</p>
                  <p className="text-sm text-gray-500">
                    {ticket.date} - {ticket.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
       
      </div>
    );
  }
}
