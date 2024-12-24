import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Text, Title } = Typography;

export default function EngineMetrics({ data }) {
  // Mock data for charts
  const rpmData = Array.from({ length: 20 }, (_, i) => ({
    time: i,
    rpm: Math.random() * 1000 + 2000,
  }));
  const fuelTrimData = Array.from({ length: 20 }, (_, i) => ({
    time: i,
    short: Math.random() * 10 - 5,
    long: Math.random() * 6 - 3,
  }));

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} lg={12}>
        <Card title="RPM" styles={{ body: { padding: "24px" } }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Text type="secondary">Current</Text>
            <Title level={2} style={{ margin: "8px 0" }}>
              {data.VehicleData.RPM}
            </Title>
            <Text type="secondary">RPM</Text>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={rpmData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rpm"
                stroke="#1890ff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card title="Fuel Trim" styles={{ body: { padding: "24px" } }}>
          <Row gutter={[0, 24]}>
            <Col span={24}>
              <FuelTrimChart
                title="Short Term"
                value={data.VehicleData.FuelTrimShortTerm}
                data={fuelTrimData}
                dataKey="short"
              />
            </Col>
            <Col span={24}>
              <FuelTrimChart
                title="Long Term"
                value={data.VehicleData.FuelTrimLongTerm}
                data={fuelTrimData}
                dataKey="long"
              />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

function FuelTrimChart({ title, value, data, dataKey }) {
  return (
    <div>
      <Text>
        {title} {value.toFixed(2)}%
      </Text>
      <ResponsiveContainer width="100%" height={100}>
        <LineChart data={data}>
          <YAxis domain={[-10, 10]} hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#1890ff"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
