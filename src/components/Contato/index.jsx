import React from 'react';
import styles from './Contato.module.css';

export default function Contato() {
	return (
		<section className={styles.contatoSection}>
			<h2>Contato</h2>
			<div className={styles.contatoDiv}>
				<img src="./contato.jpg" />
				<form>
					<label>Nome:</label>
					<input placeholder="Digite seu nome" required />
					<label>E-mail:</label>
					<input placeholder="Digite seu email" required />
					<label>Mensagem:</label>
					<textarea placeholder="Digite seu feedback" className={styles.inputMensagem} required />
					<button>Enviar</button>
				</form>
			</div>
		</section>
	);
}