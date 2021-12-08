import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({
  idDrink,
  strDrink,
  strCategory,
  strDrinkThumb,
  strGlass,
}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink}></img>
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strCategory}</p>
        <Link
          className="btn btn-primary btn-details"
          to={`cocktail/${idDrink}`}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail
