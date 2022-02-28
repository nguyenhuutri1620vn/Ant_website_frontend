import {
  Affix,
  Layout,
  Menu,
  Dropdown,
  Modal,
  Form,
  Input,
  Button,
} from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {
  DownOutlined,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import Checkbox from "antd/lib/checkbox/Checkbox";

function Header() {
  const { Header } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
    console.log(loginInput.username);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link onClick={showModal} to="#">
          Navigate to login
        </Link>
        <Modal
          title="Login/Sign in"
          visible={isModalVisible}
          cancelButtonProps={{ style: { display: "none" } }}
          onOk={handleOk}
          okText="Cancel"
          className="login-form-total"
        >
          <Form
            initialValues={{
              remember: true,
            }}
            className="login-form"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                name="username"
                value={loginInput.username}
                onChange={handleInput}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                name="password"
                value={loginInput.password}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={handleInput}
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="">
                Forgot password
              </Link>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <Link to="">register now!</Link>
            </Form.Item>
          </Form>
        </Modal>
      </Menu.Item>
      <Menu.Item danger key="2">
        <Link to="/admin">Navigate to admin</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Affix>
      <Layout>
        <Header className="header">
          <div className="logo">
            <Link to="/">
              <h2 className="logo-text">BEAUTY-G</h2>
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal" className="menu-item-list">
            <Menu.Item key="1" className="menu-item">
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="2" className="menu-item">
              ABOUT US
            </Menu.Item>
            <Menu.Item key="3" className="menu-item">
              <Link to="/list-product">PORTFOLIO</Link>
            </Menu.Item>
            <Menu.Item key="4" className="menu-item">
              SERVICES
            </Menu.Item>
            <Menu.Item key="5" className="menu-item">
              <Dropdown overlay={menu}>
                <Link
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                  to="/"
                >
                  NAVIGATE <DownOutlined />
                </Link>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </Affix>
  );
}
export default Header;
