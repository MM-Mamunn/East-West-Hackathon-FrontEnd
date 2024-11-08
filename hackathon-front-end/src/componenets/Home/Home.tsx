import axios from "axios";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/dashboard");
      setValue(data?.data?.data);
    };
    fetchData();
  }, []);
  return (
    <div className="h-screen">
      <div className="h-[300px]">
        <div className="w-full h-[50px] text-xl pl-20">
          Bus VS Oil Consume and Distance Traveled
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={value}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bus_id" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="total_distance"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="total_oil"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
