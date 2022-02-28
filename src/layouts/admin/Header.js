import { LogoutOutlined, ProfileOutlined, SettingOutlined } from "@ant-design/icons/lib/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const { Header } = Layout;

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to="/">
            <h2 className="logo-text">BEAUTY-G</h2>
          </Link>
        </div>
        <Menu theme="dark" mode="horizontal" className="menu-item-list" >
          <Menu.Item key="1" className="menu-item"><ProfileOutlined /> profile</Menu.Item>
          <Menu.Item key="2" className="menu-item"><SettingOutlined /> settings</Menu.Item>
          <Menu.Item key="3" className="menu-item"><LogoutOutlined /> log out</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}
export default Header;
