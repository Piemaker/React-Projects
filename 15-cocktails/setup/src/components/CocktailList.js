import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {url,searchQuery, useFetch} = useGlobalContext();
  const newUrl = url + searchQuery;
  const {loading, products} = useFetch(newUrl);
  
  return loading ? (
    <Loading></Loading>
  ) : products.drinks ? (
    <div className="cocktails-center">
      {products.drinks.map((cocktail) => {
        return (
          <Cocktail key = {cocktail.idDrink} {...cocktail}></Cocktail>
        );
      })}
    </div>
  ) : (
    <h2 className="section-title">no cocktails matched your search criteria</h2>
  );
}

export default CocktailList
