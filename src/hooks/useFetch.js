import { useEffect, useState } from 'react';

export function useFetchPop(filtro) {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    const req = async () => {
      const dados = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${filtro}`)).json();
      setDrinks(dados.drinks);
    }
    req();
  }, [drinks]);
  return drinks;
}

