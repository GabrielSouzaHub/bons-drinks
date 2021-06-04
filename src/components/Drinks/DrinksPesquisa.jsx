import React, { useState } from 'react'
import { PesquisaCategoriaAlc, PesquisaCategoria, PesquisaCategoriaCopo } from '../Services/fetchCategoria';


import styles from './Drinks.module.css';

export default function DrinksPesquisa() {
  let drinkNome = '';
  const [data, setData] = useState([]);
  const [categoria, setCategoria] = useState([]);
  /**********************************************
   * PESQUISA DRINQUE POR CATEGORIA
   **********************************************/
  function pegaCategoria(e) {
    if (e.target.value === 'Alcóolico') {
      setCategoria(['Alcoholic', 'Non_Alcoholic']);
    } else if (e.target.value === 'Categoria') {
      setCategoria([
        'Ordinary Drink',
        'Cocktail',
        'Cocoa',
        'Shot',
        'Milk / Float / Shake',
        'Other / Unknown',
        'Coffee / Tea',
        'Homemade Liqueur',
        'Punch / Party Drink',
        'Beer',
        'Soft Drink / Soda',
      ]);
    } else if (e.target.value === 'Copo') {
      setCategoria([
        'Highball glass',
        'Cocktail glass',
        'Old-fashioned glass',
        'Collins glass',
      ]);
    }
  }
  async function drinkCategoria(e) {
    let nomeCategoria = e.target.value;

    //nomeCategoria = nomeCategoria.replaceAll(" ","_");
    if (nomeCategoria === 'Alcoholic' || nomeCategoria === 'Non_Alcoholic') {
      console.log('entrou aqui no alcoolico');
      const dados = await PesquisaCategoriaAlc(nomeCategoria);
      setData(dados);
    }
    else if (nomeCategoria === 'Ordinary Drink' || nomeCategoria === 'Cocktail' || nomeCategoria === 'Cocoa' || nomeCategoria === 'Shot' || nomeCategoria === 'Milk / Float / Shake' || nomeCategoria === 'Other / Unknown' || nomeCategoria === 'Coffee / Tea' || nomeCategoria === 'Homemade Liqueur' || nomeCategoria === 'Punch / Party Drink' || nomeCategoria === 'Beer' || nomeCategoria === 'Soft Drink / Soda') {
      console.log('entrou aqui no categoria');
      const dados = await PesquisaCategoria(nomeCategoria);
      setData(dados);
    }
    else if (nomeCategoria === 'Highball glass' || nomeCategoria === 'Cocktail glass' || nomeCategoria === 'Old-fashioned glass' || nomeCategoria === 'Collins glass') {
      console.log('entrou aqui no copo');
      const dados = await PesquisaCategoriaCopo(nomeCategoria);
      setData(dados);
    }
  }
  /*********************************************
   * PESQUISA DRINQUE POR NOME
   *********************************************/
  async function pesquisaDrink(e) {
    e.preventDefault();
    drinkNome = e.target.campoNome.value;
    const drinkDado = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkNome}`
    )
    const response = await drinkDado.json();
    setData(response.drinks);
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={pesquisaDrink}>
        <input name="campoNome" placeholder="Digite o nome" />
        <button><img src="pesquisa-de-lupa.png" /></button>
      </form>
      <div>
        <select onChange={pegaCategoria}>
          <option selected disabled>Selecione</option>
          <option value="Alcóolico">Alcóolico</option>
          <option value="Categoria">Categoria</option>
          <option value="Copo">Copo</option>
        </select>
        <select onChange={drinkCategoria}>
          <option selected disabled>Selecione</option>
          {
            categoria.map((categoriaNome, i) => {
              return (
                <option key={i}>{categoriaNome}</option>
              )
            })
          }
        </select>
      </div>
      {data ? (
        data.map((drink) => {
          return (
            <div key={drink.idDrink} className={styles.drinkDiv}>
              <h2 className={styles.drinkNome}>{drink.strDrink}</h2>
              <img className={styles.drinkImg} src={drink.strDrinkThumb} />
            </div>
          )
        })
      ) :
        <img src="https://st3.depositphotos.com/1006899/14648/i/600/depositphotos_146482703-stock-photo-robot-holding-the-numbers-404.jpg"/>}
    </div>
  )
}
