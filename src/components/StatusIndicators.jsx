import React from "react";
import { Card, Space, Badge, Typography } from "antd";

const { Text } = Typography;

function StatusIndicators() {
  const indicators = [
    { status: "error", text: "Seat Belt Status: Disengaged" },
    { status: "success", text: "Parking Break: Disengaged" },
    { status: "success", text: "Headlights: ON" },
    { status: "default", text: "AC Status: OFF" },
  ];

  return (
    <Card title="Status Indicators" styles={{ body: { padding: "24px" } }}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        {indicators.map((indicator, index) => (
          <Badge
            key={index}
            status={indicator.status}
            text={<Text style={{ fontSize: "14px" }}>{indicator.text}</Text>}
          />
        ))}
      </Space>
    </Card>
  );
}

export default StatusIndicators;
