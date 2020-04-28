import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routes';
const DefaultLayout = () => {
	const loading = () => <div>loading...</div>;
	return (
		<Suspense fallback={loading()}>
			<Switch>
				{/* {routes.map((route, idx) => {
					return route.component ? (
						<Route
							key={idx}
							path={route.path}
							exact={route.exact}
							name={route.name}
							render={(props) => <route.component {...props} />}
						/>
					) : null;
				})} */}
				<Redirect from="/" to="/dashboard" />
			</Switch>
		</Suspense>
	);
};

export default DefaultLayout;
