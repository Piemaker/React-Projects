import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review, setReview] = useState(people);
  //to select which people is displayed
  let [pickReview, setPickReview] = useState(0);
  const incReview = ()=>{
     setPickReview((prevValue) => {
       if(prevValue < review.length - 1){
       return prevValue + 1;
      }
      else{
        return prevValue = 0;
      }
     });
  }
  const decReview = () => {
    setPickReview((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      } else {
        return (prevValue = review.length - 1);
      }
    });
  };
  const randomReview = ()=>{
     let index = Math.floor(Math.random() * review.length);
    if(index == pickReview && index == review.length -1){
      index--;
    }
    else if (index == pickReview) {
      index++;
    }
    setPickReview(index);
  }
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img
            className="person-img"
            src={review[pickReview].image}
            alt={review[pickReview].name}
          />
          <span className="quote-icon">{FaQuoteRight()}</span>
        </div>
        <h4 className="author">{review[pickReview].name}</h4>
        <p className="job">{review[pickReview].job}</p>
        <p className = "info">{review[pickReview].text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => decReview()}>
            {FaChevronLeft()}
          </button>
          <button className="next-btn" onClick={() => incReview()}>
            {FaChevronRight()}
          </button>
          {console.log(pickReview)}
        </div>
        <button className="random-btn" onClick = {()=> randomReview()}>surprise me</button>
      </article>
    </>
  );
};

export default Review;
