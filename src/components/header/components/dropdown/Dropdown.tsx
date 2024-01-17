import React from 'react';
import { Link } from 'react-router-dom';
import styles from './dropdown.module.css';
// import { useTheme } from '../../../../hooks/useTheme';

const Dropdown = () => {
  // const { theme, setTheme } = useTheme();

  // const handleLightTheme = () => {
  //   setTheme('light');
  // };

  // const handLeDarkTheme = () => {
  //   setTheme('dark');
  // };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownClose}>&#10005;</button>
      <Link to={'/history'} className={styles.dropdownLink}>
        History
      </Link>
      {/* <button onClick={handleLightTheme} className={styles.dropdownLink}>
        Light
      </button>
      <button onClick={handLeDarkTheme} className={styles.dropdownLink}>
        Dark
      </button> */}
    </div>
  );
};

export default Dropdown;
