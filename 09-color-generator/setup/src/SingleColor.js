import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = (params) => {
  const {colorArr} = params;
  const {index} = params;
  const [isAlert, setIsAlert] = useState(false);
  const handleClick = (color)=>{
    /* Copy the text inside the text field */
     navigator.clipboard.writeText(`#${color.hex}`);

     /* Alert the copied text */
      setIsAlert(true);
  }
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
      setIsAlert(false);
    },2500)
    return 
      clearTimeout(timeOut);
    
  },[isAlert])
  return (
    <>
      <div
        onClick={() => handleClick(colorArr)}
        className="cell"
        style={{
          backgroundColor: `#${colorArr.hex}`,
          color: `${index >= 10 && "#ffffff"}`,
        }}
      >
        <p>{colorArr.weight}%</p>
        <p>#{colorArr.hex}</p>
        <p className="alert">{isAlert && "copied to clipboard"}</p>
      </div>
    </>
  );
}

export default SingleColor
