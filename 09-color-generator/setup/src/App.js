import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'



function App() {
  const [color, setColor] = useState("");
  const [colorObj, setColorObj] = useState(new Values("#f15025"));
  const [colorArr, setColorArr] = useState(()=>{
    return colorObj.all();
  });
  const [isError, setIsError] = useState(false);
  console.log(colorArr)
  const handleChange = (event)=>{
    const colorValue = event.target.value;
    setColor(colorValue);
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    try {
      setIsError(false)
      const newColorObj = new Values(color);
      setColorObj(newColorObj);
      const newColorArr = newColorObj.all();
      setColorArr(newColorArr);
    } catch (error) {
      console.log(error)
      setIsError(true);
    }
    
     
    // interesting observation, if you use the button to submit the data and make it an onSubmit function it will refresh the page
    // regardless of preventDefault, however, if you use the form onSubmit it won't refresh.
  }
  return (
    <main>
      <section>
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="colorValue"></label>
          <input
            className={isError ? "error" : "null"}
            type="text"
            id="colorValue"
            name="color"
            value={color}
            onChange={handleChange}
            placeholder="#f15025"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <article>
        {colorArr.map((color, index)=>{
          return <SingleColor key={index} colorArr={color} index={index} />;
        })}
      </article>
    </main>
  );
}

export default App
