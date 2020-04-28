import React from 'react';

// const Dashboard = React.lazy(() => import('./view/Dashboard'));
import Dashboard from './view/Dashboard';
// const Colors = React.lazy(() => import('./views/Theme/Colors'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard }
];

export default routes;
