import React,{useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {url,searchQuery, setSearchQuery} = useGlobalContext();
  const handleChange = (event)=>{
   setSearchQuery(event.target.value);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
  }
    const refContainer = useRef(null);

    useEffect(() => {
      refContainer.current.focus();
    });
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            ref={refContainer}
            type="text"
            name="name"
            id="name"
            value={searchQuery}
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </section>
  );
}

export default SearchForm
