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
				if (sessionStorage.getItem('isAuth')) {

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


export const ProtectedDashRoute = ({
	component: Component,
	...rest
}) => {
	return ( <
		Route {
			...rest
		}
		render = {
			(props) => {
				if (store.getState().application.isProcessed) {

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