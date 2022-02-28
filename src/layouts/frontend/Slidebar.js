import { AppstoreOutlined } from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";

function Sliderbar(props) {
  return (
    <div>
      <Menu
        onClick={props.eventOnClick}
        style={{ width: 256 }}
        defaultOpenKeys={["menu"]}
        mode="inline"
      >
        <SubMenu key="menu" icon={<AppstoreOutlined />} title="Brand">
          {props.brand.map((item) => {
            return <Menu.Item key={item}>{item}</Menu.Item>;
          })}
        </SubMenu>
      </Menu>
    </div>
  );
}
export default Sliderbar;
