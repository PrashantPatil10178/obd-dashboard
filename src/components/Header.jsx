import React from "react";
import { Layout, Input, Badge, Typography, Space } from "antd";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

function Header({ toggleSidebar, collapsed }) {
  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Space>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: toggleSidebar,
            style: { fontSize: "18px", cursor: "pointer" },
          }
        )}
        <Title level={4} style={{ margin: 0 }}>
          Dashboards
        </Title>
      </Space>
      <Space size="large">
        <Input placeholder="Search" style={{ width: 200 }} />
        <Badge dot>
          <BellOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
        </Badge>
      </Space>
    </AntHeader>
  );
}

export default Header;
