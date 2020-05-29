import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class FooterCommon extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} Kwaba
        </Footer>
      </div>
    );
  }
}

export default FooterCommon;
