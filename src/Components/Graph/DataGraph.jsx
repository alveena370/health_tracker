import { MedicalContext } from "../../MedicalContext";
import { useContext, useEffect, useState } from "react";
import "./DataGraph.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DataGraph = () => {
  const { currentUser } = useContext(MedicalContext);

  const [data, setData] = useState([]);

  // when component mounted
  useEffect(() => {
    if (currentUser.units || 0) {
      setData(
        currentUser.units.map((u) => ({ name: u.type, [u.type]: u.number }))
      );
    }
  }, [currentUser]); // each time units changed

  return (
    <div className="Graph">
      {currentUser.units ? (
        <ResponsiveContainer width="85%" aspect={3}>
          <BarChart
            width={800}
            height={400}
            data={data}
            style={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Blood pressure" fill="#8884d8" />
            <Bar dataKey="HeartRate" fill="#FF0000" />
            <Bar dataKey="Oxygen" fill="#FFA500" />
            <Bar dataKey="Weight" fill="#FFC0CB" />
            <Bar dataKey="Sugar" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
};
export default DataGraph;
