import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from "react-icons/fa";
import data from './data';
function App() {
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    //notice that you have to setup a cleanup function or you will get a bunch of timeout instances
   let timeOut = setTimeout(()=>{
      incSlider();
    },2500)
    return ()=>{
      clearTimeout(timeOut);
    }
  })
  const incSlider = () =>{
    if(index < reviews.length - 1){
      
      setIndex(index+ 1);

    }
    else{
     setIndex(0)
    }
  }
  const decSlider = ()=>{
    if(index > 0){
      setIndex(index - 1)
    }
    else{
     setIndex( reviews.length - 1);
    }
  }
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span> Reviews
          </h2>
        </div>
        <div className="section-center">
          {reviews.map((review, slideIndex) => {
            const { id, name, title, quote, image } = review;
            return (
              <article
                key={id}
                className={`${index === slideIndex && "currentSlide"}
                            ${
                              (index + reviews.length - 1) % reviews.length ===
                                slideIndex && "lastSlide"
                            }
                            ${
                              (index + reviews.length - 1) % reviews.length ===
                                slideIndex ||
                              (index === slideIndex) ||"nextSlide"
                            }`}
              >
                <img className="person-img" src={image} alt={name} />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
              </article>
            );
          })}
          <button className="prev" onClick = { ()=> decSlider()}>
            <FiChevronLeft></FiChevronLeft>
          </button>
          <button className="next" onClick = { ()=> incSlider()}>
            <FiChevronRight></FiChevronRight>
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
