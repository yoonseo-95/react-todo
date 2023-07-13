import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({todo, onUpdate, onDelete}) {
  const {id, text, status} = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'Completed' : 'Active';
    onUpdate({...todo, status});
  }
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input 
        type="checkbox" 
        id={id} 
        checked={status === 'Completed'} 
        onChange={handleChange}
      />
      <label 
        htmlFor={id}
        className="label"
      >{text}</label>
      <button onClick={handleDelete} className="btn1">
        <FaTrashAlt className="icon"/>
      </button>
    </li>
  );
}

