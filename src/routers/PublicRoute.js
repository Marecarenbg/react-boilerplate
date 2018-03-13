import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
	isAuthenitcated, 
	component: Component,
	...rest
}) => (
	<Route {...rest} component={(props) => (
		isAuthenitcated ? (
			<Redirect to="/dashboard" />
			) : (
			<Component {...props} />
			)
		)}/>
);

const mapStateToProps = (state) => ({
	isAuthenitcated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);