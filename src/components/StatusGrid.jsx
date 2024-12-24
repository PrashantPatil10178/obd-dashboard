import React from "react";
import { Card, Row, Col, Badge, Typography, Space } from "antd";

const { Text, Title } = Typography;

function StatusGrid({ data }) {
  const statusItems = [
    { label: "DTCs", value: data.DTCs || 0, unit: "#" },
    {
      label: "Battery Vol.",
      value: data.VehicleData.BatteryVoltage,
      unit: "V",
    },
    {
      label: "Amb Air Temp",
      value: data.VehicleData.AmbientAirTemp,
      unit: "°C",
    },
  ];

  const indicators = [
    {
      status:
        data.VehicleData.SeatBeltStatus === "Engaged" ? "success" : "error",
      text: `Seat Belt Status: ${data.VehicleData.SeatBeltStatus}`,
    },
    {
      status:
        data.VehicleData.ParkingBrakeStatus === "Released"
          ? "success"
          : "error",
      text: `Parking Break: ${data.VehicleData.ParkingBrakeStatus}`,
    },
    {
      status: data.VehicleData.HeadlightStatus === "ON" ? "success" : "error",
      text: `Headlights: ${data.VehicleData.HeadlightStatus}`,
    },
    {
      status: data.VehicleData.ACStatus === "ON" ? "success" : "error",
      text: `AC Status: ${data.VehicleData.ACStatus}`,
    },
  ];

  return (
    <Card className="status-grid" styles={{ body: { padding: "24px" } }}>
      <Row gutter={[16, 16]}>
        {statusItems.map((item, index) => (
          <Col key={index} xs={24} sm={8}>
            <Card styles={{ body: { padding: "16px", textAlign: "center" } }}>
              <Text type="secondary">{item.label}</Text>
              <Title level={3} style={{ margin: "8px 0" }}>
                {item.value}
              </Title>
              <Text type="secondary">{item.unit}</Text>
            </Card>
          </Col>
        ))}
      </Row>
      <Space
        direction="vertical"
        size="middle"
        style={{ width: "100%", marginTop: "24px" }}
      >
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

export default StatusGrid;
