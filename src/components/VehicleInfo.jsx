import React from "react";
import { Card, Row, Col, Progress, Typography, Space } from "antd";
import { LineChartOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

function VehicleInfo({ data }) {
  return (
    <Card className="vehicle-info" styles={{ body: { padding: "24px" } }}>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical" size="small">
            <img
              src="https://png.pngtree.com/png-vector/20230315/ourmid/pngtree-truck-logo-icon-design-illustration-diesel-transportation-logistic-vector-png-image_50797116.jpg"
              alt="Truck"
              style={{ width: "100%", maxWidth: "150px" }}
            />
            <Text>Reg. No: {data.CarRegNo}</Text>
            <Text>V. Type: Heavy Truck</Text>
            <Text>V. Model: Volvo FH16</Text>
            <Text>
              Device ID: {data.DeviceID} <LineChartOutlined />
            </Text>
          </Space>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricBox
            label="Odometer"
            value={data.VehicleData.Odometer}
            unit="km"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricBox
            label="Runtime"
            value={data.VehicleData.EngineRuntime}
            unit="mins"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <MetricBox label="Gear" value={data.VehicleData.GearPosition} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Space direction="vertical" size="small" style={{ width: "100%" }}>
            <Text>Fuel Level</Text>
            <Progress
              percent={data.VehicleData.FuelLevel}
              strokeColor="#52c41a"
              trailColor="#f0f0f0"
            />
            <Text type="secondary">
              {data.VehicleData.FuelConsumptionRate} L/100 km
            </Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

function MetricBox({ label, value, unit }) {
  return (
    <Space direction="vertical" size="small" style={{ width: "100%" }}>
      <Text type="secondary">{label}</Text>
      <Title level={3} style={{ margin: 0 }}>
        {value}
      </Title>
      {unit && <Text type="secondary">{unit}</Text>}
    </Space>
  );
}

export default VehicleInfo;
