import React from 'react';
import styles from '../filters/filters.module.css';
import PinkSelect from '../../../../ui/pink-select/PinkSelect';

const FilterByForm = ({ filterParam, setFilterParam }) => {
  return (
    <PinkSelect
      text="Form type"
      options={[
        'Natural Humanoid',
        'Artificial Humanoid',
        'Natural Non-Humanoid',
        'Artificial Non-Humanoid',
        'Phenomenon',
      ]}
      className={styles.select}
      value={filterParam}
      onChange={(e) => setFilterParam(e.target.value)}
    />
  );
};

export default FilterByForm;
