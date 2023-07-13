import React, { useEffect, useState } from 'react';
import '../../App.css';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({filter}) {
  const [todos, setTodos] = useState(()=>readTodos());

  const handleAdd = (todo) => setTodos([...todos, todo])
  const handelUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated: t)))
  const handleDelete = (deleted) => setTodos(todos.filter((t) => (t.id !== deleted.id)))

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])  

  const filtered = getFilteredItems(todos, filter);
  return (
    <section>
        <ul>
          {filtered.map((item) => 
            <Todo 
              key={item.id} 
              todo={item} 
              onUpdate={handelUpdate} 
              onDelete={handleDelete} 
            />)
          }
        </ul>
        <AddTodo onAdd={handleAdd}/>
    </section>
  );
}

function readTodos() {
  console.log('readTodos')
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if(filter === 'All') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}

