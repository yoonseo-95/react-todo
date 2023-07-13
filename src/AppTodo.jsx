import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['All', 'Active', 'Completed'];

export default function AppTodo() {
  const [filter, setFilter] = useState(filters[0])
  return (
    <DarkModeProvider>
      <div className="wrap">
        <div className="todoWrap">
          <Header filters={filters} filter={filter} onFilterChange={setFilter} />
          <TodoList filter={filter} />
        </div>
      </div>
    </DarkModeProvider>
  );
}

