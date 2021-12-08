import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import {useFetch} from "../useFetch"
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
  const { id } = useParams();
  const newUrl = url + id;
  const {loading, products} = useFetch(newUrl);


  return loading ? (
    <Loading></Loading>
  ) : (
    <section
      className="section cocktail-section"
    >
      <Link className="btn btn-primary" to="/">
        back home
      </Link>
      {products.drinks.map((cocktail) => {
        const {
          strDrink,
          strCategory,
          strDrinkThumb,
          strGlass,
          strInstructions,
          strAlcoholic,
          idDrink
        } = cocktail;
        const ingredients = [];
        for (let i = 1; i < 16; i++) {
          const ingredient = "strIngredient" + i;
          if (cocktail[ingredient]) {
            ingredients.push(cocktail[ingredient]);
          }
        }
        return (
          <div key = {idDrink}>
            <h2 className="section-title">{strDrink}</h2>
            <div className="drink">
              <img src={strDrinkThumb} alt={strDrink}></img>
              <div className="drink-info">
                <p>
                  <span className="drink-data">name :</span> {strDrink}
                </p>
                <p>
                  <span className="drink-data">category :</span> {strCategory}
                </p>
                <p>
                  <span className="drink-data">info :</span> {strAlcoholic}
                </p>
                <p>
                  <span className="drink-data">glass :</span> {strGlass}
                </p>
                <p>
                  <span className="drink-data">instructions :</span>{" "}
                  {strInstructions}
                </p>
                <p>
                  <span className="drink-data">ingredients :</span>
                  {ingredients.map((ingredient, index) => {
                    return <span key={index}>{ingredient}</span>;
                  })}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SingleCocktail
