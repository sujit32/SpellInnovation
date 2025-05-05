import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D" },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];
const SixthSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full !pb-8 !m-4">
      <div className="bg-slate-50 h-[600px] shadow-lg rounded-lg">
        <div className="!p-5">
          <p className=" text-xl w-full font-medium text-zinc-500">
            Website Visits
          </p>
          <p className=" text-sm w-full font-medium text-zinc-400 !pb-15">
            Unique Visiors
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-50 h-[600px] shadow-lg rounded-lg">
        <div className="!p-5">
          <p className=" text-xl w-full font-medium text-zinc-500">
            Conversion Rates
          </p>
          <p className=" text-sm w-full font-medium text-zinc-400 !pb-15">
            Per Session
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={500}
              height={200}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                connectNulls
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
