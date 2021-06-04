import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DrinksPop from './DrinksPop';

import styles from './Drinks.module.css';
import DrinksPesquisa from './DrinksPesquisa';

export default function Drinks() {
	return (
		<section className={styles.drinksSection}>
			<Router>
				<h2 className={styles.drinksTitle}><NavLink to="/drinks/drinksPop" className={styles.drinksTitleA}>Drinks</NavLink></h2>
				<div className={styles.drinksDiv}>
					<div className={styles.drinksDivNav}>
						<NavLink to="/drinks/drinkspop"><button>Drinks Populares</button></NavLink>
						<NavLink to="/drinks/drinkspesquisa"><button>Buscar Drinks</button></NavLink>
					</div>
					<div className={styles.drinksDivContent}>
						<Switch>
							<Route path="/drinks/drinksPop">
								<DrinksPop />
							</Route>
							<Route path="/drinks/drinksPesquisa">
								<DrinksPesquisa />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</section>
	);
}