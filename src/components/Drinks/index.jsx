import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DrinksPop from './DrinksPop';

import styles from './Drinks.module.css';
import DrinksPesquisa from './DrinksPesquisa';

export default function Drinks() {
	return (
		<div>
			<Router>
				<h2>Drinks</h2>
				<button><NavLink to="/DrinksPop">Populares</NavLink></button>
				<button><NavLink to="/DrinksPesquisa">Buscar Drinks</NavLink></button>
				<Switch>
					<Route path="/DrinksPop">
						<DrinksPop />
					</Route>
					<Route path="/DrinksPesquisa">
						<DrinksPesquisa/>
					</Route>
				</Switch>
			</Router>

		</div>
	);
}