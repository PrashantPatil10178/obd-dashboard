import React from 'react';
import { Layout, Card, Progress, Statistic, Row, Col, Input, Badge } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import './App.css';

const { Header, Content } = Layout;

function App() {
  // This would typically come from an API
  const vehicleData = {
    regNo: "MH12AB1234",
    vType: "Heavy Truck",
    vModel: "Volvo FH16",
    deviceId: "D12345",
    
    // Current readings
    odometer: 3671,
    runtime: 1250,
    gear: "D",
    fuelLevel: 75,
    speed: 45,
    dtcs: 0,
    batteryVol: 12.8,
    ambTemp: 28,
    
    // Status indicators
    seatBelt: "Disengaged",
    parkingBrake: "Disengaged",
    headlights: "ON",
    acStatus: "OFF",
    
    // Temperature readings
    oilTemp: 100,
    coolantTemp: 92,
    transmissionTemp: 85,
    airIntakeTemp: 32,
    catalystTemp: 320,
    ambientAirTemp: 28,
    evapSystem: 1.1,
    
    // Engine metrics
    engineLoad: 57,
    rpm: 3000,
    torque: 240,
    fuelTrimShort: 3.1,
    fuelTrimLong: -1.4,
  };

  const speedData = [
    { time: '10:00', value: 30 },
    { time: '10:05', value: 45 },
    { time: '10:10', value: 35 },
    { time: '10:15', value: 50 },
    { time: '10:20', value: 45 },
  ];

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">Dashboards</div>
        <Input.Search placeholder="Search" className="search-input" />
        <BellOutlined className="notification-icon" />
      </Header>
      
      <Content className="content">
        <Card className="vehicle-info-card">
          <Row gutter={[16, 16]}>
            <Col span={4}>
              <img src="/truck-icon.png" alt="Vehicle" className="vehicle-image" />
            </Col>
            <Col span={20}>
              <Row>
                <Col span={6}>
                  <div>Reg. No: {vehicleData.regNo}</div>
                  <div>V. Type: {vehicleData.vType}</div>
                  <div>V. Model: {vehicleData.vModel}</div>
                  <div>Device ID: {vehicleData.deviceId}</div>
                </Col>
                <Col span={4}>
                  <Statistic title="Odometer" value={vehicleData.odometer} />
                </Col>
                <Col span={4}>
                  <Statistic title="Runtime" value={vehicleData.runtime} />
                </Col>
                <Col span={4}>
                  <Statistic title="Gear" value={vehicleData.gear} />
                </Col>
                <Col span={6}>
                  <Progress 
                    percent={vehicleData.fuelLevel} 
                    strokeColor="#4CAF50"
                    format={percent => `${percent}%`}
                  />
                  <div>Fuel Level</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>

        <Row gutter={[16, 16]} className="dashboard-row">
          <Col span={12}>
            <Card title="Speed (km/h)">
              <Area
                data={speedData}
                xField="time"
                yField="value"
                smooth
                areaStyle={{ fill: '#ffa39e' }}
              />
            </Card>
          </Col>
          
          <Col span={12}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card>
                  <Statistic title="DTCs" value={vehicleData.dtcs} />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic title="Battery Vol." value={vehicleData.batteryVol} />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic title="Amb Air Temp" value={`${vehicleData.ambTemp}°C`} />
                </Card>
              </Col>
            </Row>
            
            <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
              <Col span={6}>
                <Badge status={vehicleData.seatBelt === "Engaged" ? "success" : "error"} text="Seat Belt" />
              </Col>
              <Col span={6}>
                <Badge status={vehicleData.parkingBrake === "Released" ? "success" : "error"} text="Parking Brake" />
              </Col>
              <Col span={6}>
                <Badge status={vehicleData.headlights === "ON" ? "success" : "error"} text="Headlights" />
              </Col>
              <Col span={6}>
                <Badge status={vehicleData.acStatus === "ON" ? "success" : "error"} text="AC Status" />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="dashboard-row">
          <Col span={6}>
            <Card title="Oil Temp">
              <Progress
                type="dashboard"
                percent={(vehicleData.oilTemp / 150) * 100}
                format={() => `${vehicleData.oilTemp}°C`}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Coolant Temp">
              <Progress
                type="dashboard"
                percent={(vehicleData.coolantTemp / 120) * 100}
                format={() => `${vehicleData.coolantTemp}°C`}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Transmission Temp">
              <Progress
                type="dashboard"
                percent={(vehicleData.transmissionTemp / 120) * 100}
                format={() => `${vehicleData.transmissionTemp}°C`}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Air Intake Temp">
              <Progress
                type="dashboard"
                percent={(vehicleData.airIntakeTemp / 50) * 100}
                format={() => `${vehicleData.airIntakeTemp}°C`}
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;

