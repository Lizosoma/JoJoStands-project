import React from 'react';
import styles from '../filters/filters.module.css';
import PinkSelect from '../../../../ui/pink-select/PinkSelect';
const FilterByAbility = ({ filterParam, setFilterParam }) => {
  return (
    <PinkSelect
      text="Ability Type"
      options={[
        'Close-Range',
        'Long-Range',
        'Automatic',
        'Range Irrelevant',
        'Materialized',
        'Psychological Assault',
        'Foresight',
        'Reconnaissance',
      ]}
      className={styles.select}
      value={filterParam}
      onChange={(e) => {
        setFilterParam(e.target.value);
      }}
    />
  );
};

export default FilterByAbility;
