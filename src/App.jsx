import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import ViewLayout from './view/ViewLayout';
import 'antd/dist/antd.css';

import './App.css';
import Application from './view/ApplicationPage/Index';

function App() {
	const loading = () => <div>loading...</div>;
	return (
		<BrowserRouter>
			<Switch>
				{/* <Route exact path="/test" component={AppSidebar} /> */}
				<Route exact path="/apply" component={Application} />
				<ViewLayout />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
