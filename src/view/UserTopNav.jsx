import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import { Input } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import './UserTopNav.scss';
import { withRouter } from 'react-router';

const UserTopNav = (props) => {
	const { location, history } = props;
	const dispatch = useDispatch();
	const { firstname } = useSelector((state) => ({
		firstname: state.user.firstname
	}));
	const requestLogout = () => {
		dispatch({
			type: 'LOGOUT_USER',
			payload: {}
		});
		localStorage.clear();
		history.push('/login');
	};

	console.log(location.pathname, 'Props');
	const HideNav = () => {
		if (
			location.pathname === '/success' ||
			location.pathname === '/apply' ||
			location.pathname === '/onboard' ||
			location.pathname === '/application-success'
		) {
			return <div />;
		} else {
			return (
				<div>
					<Navbar collapseOnSelect expand="lg" variant="light" className="second-nav px-4">
						<Nav.Link href="/dashboard" className="pl-3 pr-4 active">
							<i className="kw kw-dash" /> Dashboard
						</Nav.Link>

						<Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav.Link href="/dashboard/profile" className="pl-3 pr-4">
								{' '}
								<i className="kw kw-renter" /> Renter Profile
							</Nav.Link>
							<Nav.Link href="/dashboard/docs" className="pl-3 pr-4">
								{' '}
								<i className="kw kw-app" /> Documents
							</Nav.Link>
							<Nav.Link href="/dashboard/referral" className="pl-3 pr-4">
								{' '}
								<i className="kw kw-ref" /> Referrals
							</Nav.Link>
							<Nav.Link href="/dashboard/settings" className="pl-3 pr-4">
								{' '}
								<i className="kw kw-setting" /> Settings
							</Nav.Link>
						</Navbar.Collapse>
					</Navbar>
				</div>
			);
		}
	};
	return (
		<div className="container-fluid px-0 nav-cont mb-4 sticky-top">
			<Navbar collapseOnSelect expand="md" bg="white" variant="light" className="py-0 px-4">
				<Navbar.Brand href="/" className="py-0">
					<Logo alt="RentCrowdy" width="140" height="70" className="d-inline-block align-top" />
				</Navbar.Brand>

				<Nav.Item className="d-none d-md-inline">
					<Input
						prefix={<SearchOutlined className="site-form-item-icon text-muted" />}
						placeholder="Search"
					/>
				</Nav.Item>
				<Nav className="ml-auto font-weight-bold">
					<Nav.Link className="px-3">
						<BellOutlined className="text-muted align-middle px-2" />
						<span className="d-none d-sm-inline">
							<span className="font-weight-light">Hi,</span> {firstname}
							<span className="name-icon">{firstname.charAt(0).toUpperCase()}</span>
							<span className="font-weight-light">
								<button onClick={() => requestLogout()}>Logout</button>
							</span>
						</span>
					</Nav.Link>
				</Nav>
			</Navbar>
			<HideNav />
		</div>
	);
};

export default withRouter(UserTopNav);
