import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
      <SearchForm></SearchForm>
      <section className="section">
        <h2 className="section-title">cocktails</h2>
        <CocktailList></CocktailList>
      </section>
    </main>
  );
}

export default Home
