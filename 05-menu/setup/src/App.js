import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu,setMenu] = useState(items);
  const filter = (value) => {
    let filteredMenu = [];
    if(value === "all"){
      filteredMenu = items;
    }
    else{
   filteredMenu = items.filter(item => item.category == value);
}
  setMenu(filteredMenu);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterMenu={filter}></Categories>
        <div className="section-center">
          {menu.map((item) => {
            return <Menu item={item}></Menu>;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
