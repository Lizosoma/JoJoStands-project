import React from 'react';
import styles from '../filters/filters.module.css';
import PinkSelect from '../../../../ui/pink-select/PinkSelect';

const FilterByChapter = ({ filterParam, setFilterParam }) => {
  return (
    <PinkSelect
      text="Chapter"
      options={[
        'Stardust Crusaders',
        'Diamond Is Unbreakable',
        'Vento Aureo',
        'Stone Ocean',
        'Steel Ball Run',
        'Jojolion',
      ]}
      className={styles.select}
      value={filterParam}
      onChange={(e) => {
        setFilterParam(e.target.value);
      }}
    />
  );
};

export default FilterByChapter;
