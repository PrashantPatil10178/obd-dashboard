import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  CarOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const location = useLocation();

  const menuItems = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboards</Link>,
    },
    {
      key: "/vehicles",
      icon: <CarOutlined />,
      label: <Link to="/vehicles">Vehicles</Link>,
    },
    {
      key: "/settings",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
      <div
        className="logo"
        style={{
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {collapsed ? "VD" : "Vehicle Dashboard"}
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
