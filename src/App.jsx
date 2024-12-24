import React, { useState } from "react";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VehicleInfo from "./components/VehicleInfo";
import SpeedGraph from "./components/SpeedGraph";
import StatusGrid from "./components/StatusGrid";
import TemperatureGauges from "./components/TemperatureGauges";
import EngineMetrics from "./components/EngineMetrics";
import "./App.css";

const { Content } = Layout;
const { Title } = Typography;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  // This would come from your API
  const vehicleData = {
    DeviceID: "D12345",
    CarRegNo: "MH12AB1234",
    VehicleData: {
      Speed: 65,
      EngineCoolantTemp: 90,
      HeadlightStatus: "ON",
      Odometer: 45213.5,
      SeatBeltStatus: "Engaged",
      ACStatus: "ON",
      ParkingBrakeStatus: "Released",
      RPM: 3000,
      GearPosition: "D",
      FuelLevel: 75,
      ThrottlePosition: 45,
      IntakeAirTemp: 35,
      BatteryVoltage: 12.8,
      AmbientAirTemp: 30,
      FuelTrimShortTerm: 2.5,
      FuelTrimLongTerm: -1.2,
      EngineLoad: 55,
      CatalystTemp: 300,
      TransmissionTemp: 85,
      OilTemp: 100,
      EngineRuntime: 120,
      FuelConsumptionRate: 8.5,
    },
    DTCs: 0,
  };

  // Mock data for speed graph
  const speedData = Array.from({ length: 20 }, (_, i) => ({
    time: `${i}:00`,
    speed: Math.floor(Math.random() * 30) + 50,
  }));

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header toggleSidebar={toggleSidebar} collapsed={collapsed} />
          <Content className="dashboard-content">
            <Routes>
              <Route
                path="/"
                element={
                  <DashboardContent
                    vehicleData={vehicleData}
                    speedData={speedData}
                  />
                }
              />
              <Route path="/vehicles" element={<VehiclesContent />} />
              <Route path="/settings" element={<SettingsContent />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

const DashboardContent = ({ vehicleData, speedData }) => (
  <Space
    direction="vertical"
    size="large"
    style={{ width: "100%", padding: "24px" }}
  >
    <Title level={2}>Vehicle Dashboard</Title>
    <VehicleInfo data={vehicleData} />
    <div
      style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}
    >
      <SpeedGraph
        currentSpeed={vehicleData.VehicleData.Speed}
        speedData={speedData}
      />
      <StatusGrid data={vehicleData} />
    </div>
    <TemperatureGauges data={vehicleData} />
    <EngineMetrics data={vehicleData} />
  </Space>
);

const VehiclesContent = () => (
  <div style={{ padding: "24px" }}>
    <Title level={2}>Vehicles</Title>
    <p>Vehicle management content goes here.</p>
  </div>
);

const SettingsContent = () => (
  <div style={{ padding: "24px" }}>
    <Title level={2}>Settings</Title>
    <p>Settings content goes here.</p>
  </div>
);

export default App;
