import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';

import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';
import DashboardLayout from './view/Dashboard/DashboardLayout';
import Dashboard from './view/Dashboard/Dashboard'
import Application from './view/ApplicationPage/Index';
import Test from './view/ApplicationPage/Test';
import Signup from './view/Signup';
import SignupSuccess from './view/Dashboard/pages/SignupSuccess';

function App() {
	// const loading = () => <div>loading...</div>;
	return (
		<Provider store={store}>
		     <PersistGate loading={null} persistor={persistor}>
		<BrowserRouter>
			<Switch>
				{/* <Route exact path="/test" component={AppSidebar} /> */}
				<Route exact path="/signup" component={Signup} />
			{/* <Route exact path="/test" component={Test} /> */}
				<Route exact path="/apply" component={Application} />
				<Route exact path="/test" component={Test} />
				<Route exact path="/success" component={SignupSuccess} />
				<Route exact path="/dashboard" component={Dashboard} />
			<DashboardLayout />
			</Switch>
			
		</BrowserRouter>
		</PersistGate>
		</Provider>
	);
}

export default App;
