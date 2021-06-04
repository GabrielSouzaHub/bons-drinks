import React from 'react';
import styles from './NossoTime.module.css';

export default function NossoTime() {
	return (
		<div>
			<h2>Gabriel</h2>
			<img src="./eu1.jpg" className={styles.timeImg}/>
			<h2>Gabriel Silva</h2>
			<img src="./eu2.jpg" className={styles.timeImg}/>
			<h2>Gabriel Souza</h2>
			<img src="./eu3.jpg" className={styles.timeImg}/>
		</div>
	);
}