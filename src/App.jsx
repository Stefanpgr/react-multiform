import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import ViewLayout from './view/ViewLayout';
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';
import Application from './view/ApplicationPage/Index';
import Test from './view/ApplicationPage/Test';

function App() {
	// const loading = () => <div>loading...</div>;
	return (
		<Provider store={store}>
		     <PersistGate loading={null} persistor={persistor}>
		<BrowserRouter>
			<Switch>
				{/* <Route exact path="/test" component={AppSidebar} /> */}
				<Route exact path="/apply" component={Application} />
				<Route exact path="/test" component={Test} />
				<ViewLayout />
			</Switch>
		</BrowserRouter>
		</PersistGate>
		</Provider>
	);
}

export default App;
