import React from 'react';
import styles from './pinkSelect.module.css';

const PinkSelect = ({ text, options, onChange, value }) => {
  const isChanged = value !== 'all';
  const selectClasses = `${styles.select} ${isChanged ? styles.chosenSelect : ''}`;

  return (
    <select className={selectClasses} onChange={onChange} value={value}>
      <option className={styles.option} value="all">
        {text}
      </option>
      {options.map((optionValue) => (
        <option className={styles.option} key={optionValue} value={optionValue}>
          {optionValue}
        </option>
      ))}
    </select>
  );
};

export default PinkSelect;
