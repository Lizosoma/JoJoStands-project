import React from 'react';
import styles from '../filters/filters.module.css';

interface FilterResetProps {
  onApplyFilters: () => void;
}

const FilterReset: React.FC<FilterResetProps> = ({ onApplyFilters }) => {
  const handleReset = () => {
    onApplyFilters();
  };

  return (
    <button className={styles.reset} onClick={handleReset}>
      &#10006;
    </button>
  );
};

export default FilterReset;
