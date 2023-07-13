import React from 'react';
import '../../App.css';
import {HiMoon, HiSun} from "react-icons/hi";
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className="header">
      <button className="mode" onClick={toggleDarkMode}>
        {!darkMode && <HiSun /> }
        {darkMode && <HiMoon />}
      </button>
      <ul>
        {filters.map((value, index) => 
          <li key={index}>
            <button 
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={()=> onFilterChange(value)}
            >{value}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

