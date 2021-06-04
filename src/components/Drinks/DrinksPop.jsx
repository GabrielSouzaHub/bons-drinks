import React, { useState } from 'react'
import { PesquisaCategoriaAlc } from '../Services/fetchCategoria';
import Modal from '../Modal';

import styles from './DrinksPop.module.css';

export default function DrinksPop() {
  const [control, setControl] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [dadosModal, setDadosModal] = useState({});
  function retornaModal() {
    if (modal) return <Modal drinkModal={dadosModal} closeModal={abreModal} />;
  }
  function abreModal() {
    setModal(!modal);
  }
  async function drinksPopulares() {
    setControl(true);
    const dados = await PesquisaCategoriaAlc(`Alcoholic`);
    setData(dados);
  }
  if (control === false) {
    drinksPopulares();
  }
  return (
    <div className={styles.divDrinksPop}>
      {retornaModal()}
      {data.slice(12, 22).map((drink) => {
        return (
          <div key={drink.idDrink} className={styles.drinkDiv}>
            <p className={styles.drinkNome}>{drink.strDrink}</p>
            <img
              className={styles.drinkImg}
              src={drink.strDrinkThumb}
              onClick={() => {
                abreModal()
                setDadosModal(drink)
              }}
            />
          </div>
        )
      })}
    </div>
  )
}