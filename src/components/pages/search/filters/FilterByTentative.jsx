import React from 'react';
import styles from '../filters.module.css';
import PinkSelect from '../../../ui/select/PinkSelect';
const FilterByTentative = ({ filterParam, setFilterParam }) => {
  return (
    <PinkSelect
      text="Tentative type"
      options={['Colony', 'Evolved', 'Sentient', 'Shared']}
      className={styles.select}
      value={filterParam}
      onChange={(e) => setFilterParam(e.target.value)}
    />
  );
};

export default FilterByTentative;
