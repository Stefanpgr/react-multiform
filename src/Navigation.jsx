import React from 'react';
// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import Application from './view/ApplicationPage/Index';
// import ViewLayout from './view/ViewLayout';
import Dashboard from './view/Dashboard';

function Navigation() {
	const loading = () => <div>loading...</div>;
	return (
		<React.Suspense fallback={loading()}>
			<Switch>
				{/* <Route exact path='/login/:id' name="Login Page" render={props => <Login {...props}/>} />
			<Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
			<Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
			<Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
				{/* <Route exact path="/" component={ViewLayout} /> */}
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/application" component={Application} />
			</Switch>
		</React.Suspense>
	);
}

export default Navigation;
