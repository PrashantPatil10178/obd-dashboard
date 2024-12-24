import React from "react";
import { Card, Typography } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Title, Text } = Typography;

function SpeedGraph({ currentSpeed, speedData }) {
  return (
    <Card className="speed-graph" styles={{ body: { padding: "24px" } }}>
      <div
        className="speed-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          Speed (km/h)
        </Title>
        <div className="current-speed" style={{ textAlign: "center" }}>
          <Text type="secondary">Current</Text>
          <Title level={2} style={{ margin: "0 0 4px" }}>
            {currentSpeed}
          </Title>
          <Text type="secondary">km/h</Text>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={speedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="speed"
            stroke="#1890ff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default SpeedGraph;
