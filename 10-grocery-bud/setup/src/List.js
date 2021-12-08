import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ grocery, id, removeItem, editItem }) => {
  
  return (
    <article className="grocery-item">
      <p className="title">{grocery}</p>
      <div className="btn-container">
        <button onClick = {() => editItem(id)} type="button" className="edit-btn">
          <FaEdit></FaEdit>
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash></FaTrash>
        </button>
      </div>
    </article>
  );
};

export default List
