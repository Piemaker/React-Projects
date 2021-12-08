import React from 'react';

const List = (props) => {
  const {id, name , age , image} = props;
  return (
    <>
      <article className="person">
        <img src={image}></img>
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>{" "}
    </>
  );
};

export default List;
