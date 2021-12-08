import React from 'react';

  const Categories = ({filterMenu}) => {
  return (
    <>
      <div className="btn-container">
        <button type="button" className="filter-btn" onClick = {()=> filterMenu("all")}>all</button>
        <button type="button" className="filter-btn" onClick = {()=> filterMenu("breakfast")}>breakfast</button>
        <button type="button" className="filter-btn" onClick = {()=> filterMenu("lunch")}>launch</button>
        <button type="button" className="filter-btn" onClick = {()=> filterMenu("shakes")}>shakes</button>
      </div>
    </>
  );
};

export default Categories;
