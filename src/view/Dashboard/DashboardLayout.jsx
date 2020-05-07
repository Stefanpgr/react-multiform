import React, { Suspense } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FormOutlined, PieChartOutlined, FileOutlined, SettingFilled, UserOutlined } from '@ant-design/icons';
// import DefaultLayout from './DefaultLayout';
import {Container} from 'react-bootstrap'
// import routes from '../routes';
import AppSuccess from './pages/AppSuccess'
import AppBar from './AppProgressBar'
import './dashboard.css'
const { Header, Content, Footer } = Layout;
// const { SubMenu } = Menu;

class DashboardLayout extends React.Component {
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
			<Layout >
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }} />
				
					{/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}

				<Container className='mt-5 mb-3'>
				<AppBar className='mb-5'/>
				</Container>
					
					{/* <Container className=' bg-white' style={{ height: '425px' }}>
					
						
				
					</Container> */}
					<AppSuccess/>
					<Footer style={{ textAlign: 'center' }}>Copyright ©{new Date().getFullYear()} Kwaba</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default DashboardLayout;
