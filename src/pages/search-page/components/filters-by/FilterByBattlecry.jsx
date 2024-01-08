import React from 'react';
import styles from '../filters/filters.module.css';
import PinkSelect from '../../../../ui/pink-select/PinkSelect';

const FilterByTentative = ({ filterParam, setFilterParam }) => {
  return (
    <PinkSelect
      text="Battlecry"
      options={['Exists', 'None']}
      className={styles.select}
      value={filterParam}
      onChange={(e) => setFilterParam(e.target.value)}
    />
  );
};

export default FilterByTentative;
