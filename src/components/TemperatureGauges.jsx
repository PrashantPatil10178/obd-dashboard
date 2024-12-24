import React from "react";
import { Card, Row, Col, Progress } from "antd";

function TemperatureGauge({ title, value, max = 150 }) {
  const percent = (value / max) * 100;

  return (
    <Card title={title} className="temperature-gauge">
      <Progress
        type="dashboard"
        percent={percent}
        format={() => `${value}°C`}
        strokeColor={{
          "0%": "#52c41a",
          "50%": "#faad14",
          "100%": "#ff4d4f",
        }}
      />
    </Card>
  );
}

function TemperatureGauges({ data }) {
  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <TemperatureGauge title="Oil Temp" value={data.VehicleData.OilTemp} />
      </Col>
      <Col span={6}>
        <TemperatureGauge
          title="Coolant Temp"
          value={data.VehicleData.EngineCoolantTemp}
        />
      </Col>
      <Col span={6}>
        <TemperatureGauge
          title="Transmission Temp"
          value={data.VehicleData.TransmissionTemp}
        />
      </Col>
      <Col span={6}>
        <TemperatureGauge
          title="Air Intake Temp"
          value={data.VehicleData.IntakeAirTemp}
          max={50}
        />
      </Col>
    </Row>
  );
}

export default TemperatureGauges;
