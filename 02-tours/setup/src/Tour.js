import React, { useState } from 'react';

const Tour = ({props, removeTour}) => {
  const [tour , setTour] = useState(props);
  const [isReadMore, setIsReadMore] = useState(false);
  //old private code
  // const deleteTour = (value)=>{
  //  setTour(value);
  // }
  const {id , name , info , image ,price} = tour;
  // if (tour != true) {
    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>{isReadMore ? info : `${info.substring(0, 200)}...`}</p>
          <button onClick = {()=> setIsReadMore(!isReadMore)}>{isReadMore? "Read Less" : "Read More"}</button>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    );
  // }
  //  else {
  //   return <></>;
  // }

};

export default Tour;
