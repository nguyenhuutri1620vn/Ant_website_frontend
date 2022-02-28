import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Layout, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";

function Slidebar() {
  const { Sider } = Layout;
  return (
    <Layout>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1","sub2","sub3"]}
          style={{ height: "100%", borderRight: 0 , width: "100%"}}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1"><Link to='/admin/dashboard'>Dashboard</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/admin/product'>Manage product</Link></Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </Layout>
  );
}
export default Slidebar;
