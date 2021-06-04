import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DrinksPop from './DrinksPop';

import styles from './Drinks.module.css';
import DrinksPesquisa from './DrinksPesquisa';

export default function Drinks() {
	return (
		<div className={styles.drinksDiv}>
			<Router>
				<h2><NavLink to="/drinks">Drinks</NavLink></h2>
				<div className={styles.drinksDivNav}>
					<button><NavLink to="/drinkspop">Drinks Populares</NavLink></button>
					<button><NavLink to="/drinkspesquisa">Buscar Drinks</NavLink></button>
				</div>
				<div className={styles.drinksDivContent}>
					<Switch>
						<Route path="/DrinksPop">
							<DrinksPop />
						</Route>
						<Route path="/DrinksPesquisa">
							<DrinksPesquisa />
						</Route>
					</Switch>
				</div>
			</Router>

		</div>
	);
}