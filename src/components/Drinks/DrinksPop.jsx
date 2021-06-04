import React from 'react'
import {useFetchPop} from '../../hooks/useFetch';
import styles from './Drinks.module.css';

export default function DrinksPop() {
  const drinksPopulares = useFetchPop(`filter.php?a=Alcoholic`);
  return (
    <div>
      <h2>Drinks Populares</h2>
      {drinksPopulares.slice(12, 22).map((drink)=>{
        return (
          <div key={drink.idDrink} className={styles.drinkDiv}>
						<h2 className={styles.drinkNome}>{drink.strDrink}</h2>
						<img className={styles.drinkImg} src={drink.strDrinkThumb}/>
					</div>
        )
      })}
    </div>
  )
}
