import React from 'react';

import styles from './Modal.module.css';

export default function Modal({ drinkModal, closeModal }) {
  console.log(closeModal);
  function pegaIng(drink) {
    const drinkIngredientes = Object.entries(drink);
    return drinkIngredientes
      .filter(
        ([key, value]) =>
          key.startsWith("strIngredient") && value && value.trim()
      )
      .map(([key, value]) => value)
      .join(", ");
  };
  return (
    <div id="myModal" className={styles.modal}>
      <button onClick={() =>{
        closeModal()
      }}>X</button>
      <img src={drinkModal.strDrinkThumb} />
      <h3>{drinkModal.strDrink}</h3>
      <p>Categoria: {drinkModal.strCategory}</p>
      <p>Copo: {drinkModal.strGlass}</p>
      <p>Ingredientes: {`${pegaIng(drinkModal)}`}</p>
      <p>Instruções: {drinkModal.strInstructions}</p>
    </div>
  )
}
