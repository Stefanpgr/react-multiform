import React, { Suspense } from "react";
import { Redirect, Route, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  FormOutlined,
  PieChartOutlined,
  FileOutlined,
  SettingFilled,
  UserOutlined,
} from "@ant-design/icons";
// import DefaultLayout from './DefaultLayout';
import { Container } from "react-bootstrap";
// import routes from '../routes';
import AppSuccess from "./pages/AppSuccess";
import AppBar from "./AppProgressBar";
import "./dashboard.css";
const { Header, Content, Footer } = Layout;
// const { SubMenu } = Menu;

class DashboardLayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  loading = () => <div>loading...</div>;

  render() {
    return (
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Header style={{ padding: 0 }} />

        <div>
          <AppSuccess />
        </div>
        <Footer style={{ textAlign: "center" }}>
          Copyright ©{new Date().getFullYear()} Kwaba
        </Footer>
      </div>
    );
  }
}

export default DashboardLayout;
