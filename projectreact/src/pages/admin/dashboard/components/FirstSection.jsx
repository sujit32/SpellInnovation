import { MdOutlinePendingActions } from "react-icons/md";
import { VscRefresh } from "react-icons/vsc";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FirstSection = () => {
  const data = [
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
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const orders = [
    {
      id: 1,
      name: "Marble Cake",
      description: "Wedding cake with flowers Macarons and blueberries",
      date: "02.04.2018",
      status: "ON HOLD",
      image: "/src/assets/pp.jpeg",
    },
    {
      id: 2,
      name: "Fat Rascal",
      description: "Cheesecake with chocolate cookies and Cream biscuits",
      date: "01.04.2018",
      status: "PROCESSED",
      image: "/src/assets/pp.jpeg",
    },
    {
      id: 3,
      name: "Chocolate Cake",
      description: "Homemade cheesecake with fresh berries and mint",
      date: "25.03.2018",
      status: "PROCESSED",
      image: "/src/assets/pp.jpeg",
    },
    {
      id: 4,
      name: "Goose Breast",
      description: "Chocolate cake with berries",
      date: "21.03.2018",
      status: "PROCESSED",
      image: "/src/assets/pp.jpeg",
    },
    {
      id: 5,
      name: "Petit Gâteau",
      description: "Chocolate cake with mascarpone",
      date: "02.06.2018",
      status: "ON HOLD",
      image: "/src/assets/pp.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-2 !m-4 !pb-8 gap-10">
      <div className="space-y-4 w-full">
        <div className="flex gap-4 w-full !pb-5">
          <p className="text-4xl text-gray-500">Default</p>
          <p className="!pt-3 text-gray-500">Home</p>
          <p className="!pt-3 text-gray-500">|</p>
          <p className="!pt-3 text-gray-500">Dashboards</p>
          <p className="!pt-3 text-gray-500">|</p>
          <p className="!pt-3 text-gray-500">Default</p>
        </div>

        <div className="flex gap-8 items-center !pb-4">
          <div className="bg-slate-50 w-[230px] h-[200px] shadow-lg rounded-lg">
            <div className="flex justify-center !pt-8 !pb-5">
              <MdOutlinePendingActions size={40} className="text-zinc-500" />
            </div>
            <div className="flex justify-center text-sm text-zinc-500 !pb-4">
              Pending Orders
            </div>
            <p className="flex justify-center text-4xl text-zinc-500">40</p>
          </div>

          <div className="bg-slate-50 w-[230px] h-[200px] shadow-lg rounded-lg">
            <div className="flex justify-center !pt-8 !pb-5">
              <MdOutlinePendingActions size={40} className="text-zinc-500" />
            </div>
            <div className="flex justify-center text-sm text-zinc-500 !pb-4">
              Completed Orders
            </div>
            <p className="flex justify-center text-4xl text-zinc-500">40</p>
          </div>

          <div className="bg-slate-50 w-[230px] h-[200px] shadow-lg rounded-lg">
            <div className="flex justify-center !p-8 !pb-5">
              <MdOutlinePendingActions size={40} className="text-zinc-500" />
            </div>
            <div className="flex justify-center text-sm text-zinc-500 !pb-4">
              Refund Requests
            </div>
            <p className="flex justify-center text-4xl text-zinc-500">40</p>
          </div>

          <div className="bg-slate-50 w-[230px] h-[200px] shadow-lg rounded-lg">
            <div className="flex justify-center !pt-8 !pb-5">
              <MdOutlinePendingActions size={40} className="text-zinc-500" />
            </div>
            <div className="flex justify-center text-sm text-zinc-500 !pb-4">
              New Comments
            </div>
            <p className="flex justify-center text-4xl text-zinc-500">40</p>
          </div>
        </div>

        {/* Graph */}
        <div className="flex !p-4 w-full h-[500px] bg-slate-50 shadow-lg rounded-lg">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={200}
              height={100}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-50 w-full items-start rounded-lg shadow-lg !p-6 flex flex-col !mt-15">
        <div className="flex justify-between !mb-6 w-full">
          <h2 className="text-xl font-medium text-gray-700">Recent Orders</h2>
          <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
            <VscRefresh size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center !mb-5">
              <div className="relative h-16 w-16 rounded-md">
                <img
                  src={order.image}
                  alt={order.name}
                  className="h-full w-full rounded-md object-cover"
                />
                <div
                  className={`absolute top-6 left-0 text-xs rounded-md text-white ${
                    order.status === "ON HOLD" ? "bg-purple-600" : "bg-blue-600"
                  }`}
                >
                  {order.status}
                </div>
              </div>

              <div className="!ml-4 flex-1">
                <h3 className="text-gray-700 font-medium">{order.name}</h3>
                <p className="text-sm text-gray-500">{order.description}</p>
                <p className="text-sm text-purple-500">{order.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
