import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data);
  const clearAll = (value)=>{
    setPersons(value);
  }
  return (
    <>
      <main>
        <div className="container">
          <h3>{persons.length} birthday today</h3>
          {persons.map((person) => {
            return <List {...person} key={person.id}></List>
          })}
          <button className="btn" onClick={() => clearAll([])}>
            Clear All
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
