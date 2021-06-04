import React from 'react';
import styles from './Contato.module.css';

export default function Contato() {
	return (
		<div className="appDiv">
			<h1>Contato</h1>
			<img src="./contato.jpg"/>
			<form>
				<div>
					<label>Nome:</label>
					<input />
				</div>
				<div>
					<label>E-mail:</label>
					<input />
				</div>
				<div>
					<label>Mensagem:</label>
					<input />
				</div>
				<button>Enviar</button>
			</form>
		</div>
	);
}