import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ChosenMovie from './View/ChosenMovie';
import NavBar from './View/NavBar';
import Favorites from './View/Favorites';

const App = () => {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/favorites" component={() => <Favorites />} />
					<Route exact path="/" render={() => <HomePage />} />
					<Route path="/:id" render={() => <ChosenMovie />} />
				</Switch>
				<Switch />
			</Router>
		</div>
	);
};
export default App;
