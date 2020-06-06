import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class FooterCommon extends React.Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: "center", backgroundColor: "#F8F8F8" }}>
          Copyright ©{new Date().getFullYear()} Kwaba
        </Footer>
      </div>
    );
  }
}

export default FooterCommon;
