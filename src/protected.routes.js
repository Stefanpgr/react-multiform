import React from 'react';
import {
	Route,
	Redirect
} from 'react-router-dom'
import {
	isAuthenticated
} from './utils/auth'
import {
	store
} from './store/index'
export const ProtectedRoute = ({
	component: Component,
	...rest
}) => {
	return ( <
		Route {
			...rest
		}
		render = {
			(props) => {
				if (store.getState().user.isAuth) {

					return <Component {
						...props
					}
					/>
				} else {
					return <Redirect to = {
						{
							path: '/login',
							state: props.location
						}
					}
					/ >
				}


			}
		}
		/>
	)
}