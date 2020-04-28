import React, { Suspense } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FormOutlined, PieChartOutlined, FileOutlined, SettingFilled, UserOutlined } from '@ant-design/icons';
// import DefaultLayout from './DefaultLayout';
// import routes from '../routes';
import Navigation from '../Navigation';
import AppSidebar from './ApplicationPage/AppSidebar'
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

class ViewLayout extends React.Component {
	state = {
		collapsed: false
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	};
	loading = () => <div>loading...</div>;

	render() {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				{/* <Sider
					className="site-layout-background"
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo" />
					<Menu defaultSelectedKeys={[ '1' ]} mode="inline">
						<Menu.Item key="1">
							<Link to="/dashboard">
								<PieChartOutlined />
								<span>Dashboard</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="2">
							<Link to="/application">
								<FormOutlined />
								<span>Application</span>
							</Link>
						</Menu.Item>
						<Menu.Item key="3">
							<UserOutlined />
							<span>Profile</span>
						</Menu.Item>
						<SubMenu
							key="sub2"
							title={
								<span>
									<FileOutlined />
									<span>Documents</span>
								</span>
							}
						>
							<Menu.Item key="4">Doc 1</Menu.Item>
							<Menu.Item key="5">Doc 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="6">
							<SettingFilled /> <span>Settings</span>
						</Menu.Item>
					</Menu>
				</Sider> */}
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }} />
					{/* <AppSidebar/> */}
					<Content style={{ margin: '0 16px', height: '100%' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							{/* <Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item> */}
						</Breadcrumb>
						<div className="site-layout-background" style={{ padding: 24 }}>
							
							<Navigation />
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>Copyright ©{new Date().getFullYear()} Kwaba</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default ViewLayout;
