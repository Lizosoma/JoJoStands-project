import React from 'react';
import styles from './pinkSelect.module.css';

interface PinkSelectProps {
  text: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const PinkSelect: React.FC<PinkSelectProps> = ({ text, options, onChange, value }) => {
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
