import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className={styles.headerDiv}>
			<nav className={styles.headerNav}>
					<Link to="/drinks">
						<h1>Drinks</h1>
					</Link>
					<Link to="/sobre">
					<h1>Sobre nós</h1>
					</Link>
					<Link to="/">
						<div>
						<h1 className={styles.bonsDrinks}><img src="logo.png" alt="logo" className={styles.logo}/>Bons Drinks</h1>
						</div>
					</Link>
					<Link to="/nossoTime">
						<h1>Nosso time</h1>
					</Link>
					<Link to="/contato">
						<h1>Contato</h1>
					</Link>
			</nav>
		</header>
	);
}