import React from 'react';
import styles from './NossoTime.module.css';

export default function NossoTime() {
	return (
		<div className={styles.timeDiv}>
			<h2>Nosso time</h2>
			<div>
				<p>Gabriel</p>
				<img alt="Foto Time" src="./eu1.jpg" className={styles.timeImg} />
			</div>
			<div>
				<p>Gabriel Silva</p>
				<img alt="Foto Time" src="./eu2.jpg" className={styles.timeImg} />
			</div>
			<div>
				<p>Gabriel Souza</p>
				<img alt="Foto Time" src="./eu3.jpg" className={styles.timeImg} />
			</div>
			<div>
				<p>Gabriel da Silva de Souza</p>
				<img alt="Foto Time" src="./eu4.jpg" className={styles.timeImg} />
			</div>
		</div>
	);
}