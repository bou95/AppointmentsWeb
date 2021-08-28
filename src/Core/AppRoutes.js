import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Schedule from "../Views/Schedule";
import Home from "../Views/Home";

function AppRoutes(screenProps, props) {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><Redirect to="/home"/></Route>
				<Route exact path="/home" screenProps={screenProps} component={Home} />
				<Route exact path="/schedule" render={(props) => <Schedule {...screenProps} {...props} />} />
			</Switch>
		</Router>
	);
}

export default AppRoutes;

