import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import { createBrowserHistory } from 'history';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';

import { Page404 } from './view/Dashboard/pages/404';
import AppSuccess from './view/Dashboard/pages/AppSuccess';
import ApplicationStage from './view/Dashboard/ApplicationStage';
import Application from './view/ApplicationPage/Index';
import Profile from './view/Dashboard/Profile';
import EditProfile from './view/Dashboard/EditProfile';
import Dashboard from './view/Dashboard/Dashboard';
import Documents from './view/Dashboard/Documents';
import Test from './view/ApplicationPage/Test';
import Signup from './view/Auth/Signup/Index';
import Login from './view/Auth/Login';
import SignupSuccess from './view/Dashboard/pages/SignupSuccess';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import TestUpload from './utils/TestUpload';
import { ProtectedRoute } from './protected.routes';
library.add(fas, far);

export const history = createBrowserHistory();

history.listen((location, action) => {
	window.scrollTo(0, 0);
});

function App() {
	// const loading = () => <div>loading...</div>;
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter history={history}>
					<Switch>
						{/* <Route exact path="/test" component={AppSidebar} /> */}
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/login" component={Login} />
						{/* <Route exact path="/test" component={Test} /> */}
						<ProtectedRoute exact path="/apply" component={Application} />
						<Route exact path="/test" component={Test} />
						<ProtectedRoute exact path="/success" component={SignupSuccess} />
						<Route exact path="/application-process" component={ApplicationStage} />
						<ProtectedRoute exact path="/dashboard" component={Dashboard} />
						<ProtectedRoute exact path="/dashboard/profile" component={Profile} />
						<ProtectedRoute exact path="/dashboard/docs" component={Documents} />
						<ProtectedRoute exact path="/application-success" component={AppSuccess} />
						<Route exact path="/upload" component={TestUpload} />
						<Route exact path="*" component={Page404} />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
