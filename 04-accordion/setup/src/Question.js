import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ data }) => {
  const [question, setQuestion] = useState(data);
  const { id, title, info } = question;
  const [isMoreInfo, setIsMoreInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick = {()=> setIsMoreInfo(!isMoreInfo)}>
          {isMoreInfo ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </button>
      </header>
      <p>
        {isMoreInfo ? (
          info
        ) : (
          ""
        )}
      </p>
    </article>
  );
};

export default Question;
