import React, { useState } from 'react';
import styles from './filters.module.css';
import FilterByChapter from '../filters-by/FilterByChapter';
import FilterByAbility from '../filters-by/FilterByAbility';
import FilterByForm from '../filters-by/FilterByForm';
import FilterByTentative from '../filters-by/FilterByTentative';
import FilterByBattlecry from '../filters-by/FilterByBattlecry';
import FilterReset from '../filters-by/FilterReset';
import FilterResult from '../filters-by/FilterResult';

const Filters = ({ data, setFilteredItems, filteredItems }) => {
  const [filteredItemsCount, setFilteredItemsCount] = useState(0);
  const [filterParams, setFilterParams] = useState({
    chapter: 'all',
    abilityType: 'all',
    formType: 'all',
    tentativeType: 'all',
    battlecry: 'all',
  });

  const updateFilter = (filterName, value) => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      [filterName]: value,
    }));
  };

  const applyFilters = () => {
    const newFilteredItems = data.filter((item) => {
      const battlecryCondition =
        filterParams.battlecry === 'Exists' ? item.battlecry !== 'none' : item.battlecry === 'none';

      return (
        (filterParams.chapter === 'all' || item.chapter.includes(filterParams.chapter)) &&
        (filterParams.abilityType === 'all' || item.type.includes(filterParams.abilityType)) &&
        (filterParams.formType === 'all' || item.type.includes(filterParams.formType)) &&
        (filterParams.tentativeType === 'all' || item.type.includes(filterParams.tentativeType)) &&
        (filterParams.battlecry === 'all' || battlecryCondition)
      );
    });
    setFilteredItems(newFilteredItems);
    setFilteredItemsCount(newFilteredItems.length);
  };

  const handleApplyFilters = () => {
    applyFilters();
  };

  return (
    <>
      <div className={styles.filters}>
        <FilterByChapter
          filterParam={filterParams.chapter}
          setFilterParam={(value) => updateFilter('chapter', value)}
        />
        <FilterByAbility
          filterParam={filterParams.abilityType}
          setFilterParam={(value) => updateFilter('abilityType', value)}
        />
        <FilterByForm
          filterParam={filterParams.formType}
          setFilterParam={(value) => updateFilter('formType', value)}
        />
        <FilterByTentative
          filterParam={filterParams.tentativeType}
          setFilterParam={(value) => updateFilter('tentativeType', value)}
        />
        <FilterByBattlecry
          filterParam={filterParams.battlecry}
          setFilterParam={(value) => updateFilter('battlecry', value)}
        />
        <FilterResult
          onApplyFilters={handleApplyFilters}
          filterParams={filterParams}
          filteredItemsCount={filteredItemsCount}
        />
        <FilterReset setFilterParams={setFilterParams} onApplyFilters={handleApplyFilters} />
      </div>
      {filteredItems.length === 0 && (
        <div className="noMessage">No stands found for the selected filters</div>
      )}
    </>
  );
};

export default Filters;
