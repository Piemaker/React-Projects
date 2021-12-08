import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  //notice that instead of using value, you can store the sliced array and change its value on button click
  const handleChange = (e) => {
    const value = e.target.value;
    setCount(value);
  };

  
  return (
    <section className ="section">
      <h2 className="main-title">TIRED OF BORING LOREM IPSUM?</h2>
      <form action="" className = "form" >
        <label htmlFor="count">Paragraphs:</label>
        <input type="number" name = "count" value = {count} onChange = {handleChange} />
        <button type = "button" className = "generate" onClick = {()=> setValue(count)} >GENERATE</button>
      </form>
      <article>
        
        
        {data.slice(0,value).map(text =>{
          
          return <p>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
