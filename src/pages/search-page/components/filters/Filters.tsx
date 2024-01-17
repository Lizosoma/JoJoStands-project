import React, { useEffect, useState } from 'react';
import styles from './filters.module.css';
import FilterReset from '../filters-by/FilterReset';
import FilterResult from '../filters-by/FilterResult';
import FilterBy from '../filters-by/FilterBy';
import { IStand } from '../../../../types/stand.interface';

interface FiltersProps {
  data: IStand[];
  setFilteredItems: (filteredItems: IStand[]) => void;
  filteredItems: IStand[];
}

const Filters: React.FC<FiltersProps> = ({ data, setFilteredItems, filteredItems }) => {
  const [filteredItemsCount, setFilteredItemsCount] = useState(0);
  const [filterParams, setFilterParams] = useState({
    chapter: 'all',
    abilityType: 'all',
    formType: 'all',
    tentativeType: 'all',
    battlecry: 'all',
  });

  type FilterParams = typeof filterParams;

  const updateFilter = (filterName: string, value: string) => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      [filterName]: value,
    }));
  };

  const applyFilters = (filters?: FilterParams) => {
    if (!data) return;

    const filtersToApply = filters ? filters : filterParams;

    const newFilteredItems = data.filter((item) => {
      const battlecryCondition =
        filterParams.battlecry === 'Exists' ? item.battlecry !== 'none' : item.battlecry === 'none';

      return (
        (filtersToApply.chapter === 'all' || item.chapter.includes(filtersToApply.chapter)) &&
        (filtersToApply.abilityType === 'all' || item.type.includes(filtersToApply.abilityType)) &&
        (filtersToApply.formType === 'all' || item.type.includes(filtersToApply.formType)) &&
        (filtersToApply.tentativeType === 'all' ||
          item.type.includes(filtersToApply.tentativeType)) &&
        (filtersToApply.battlecry === 'all' || battlecryCondition)
      );
    });
    setFilteredItems(newFilteredItems);
    setFilteredItemsCount(newFilteredItems.length);
  };

  const handleApplyFilters = () => {
    applyFilters();
  };

  const handleResetFilters = () => {
    const defaultFilterParams = {
      chapter: 'all',
      abilityType: 'all',
      formType: 'all',
      tentativeType: 'all',
      battlecry: 'all',
    };
    setFilterParams(defaultFilterParams);
    applyFilters(defaultFilterParams);
  };

  return (
    <>
      <div className={styles.filters}>
        <FilterBy filterParams={filterParams} setFilterParam={updateFilter} />
        <div className={styles.buttons}>
          <FilterResult
            onApplyFilters={handleApplyFilters}
            filterParams={filterParams}
            filteredItemsCount={filteredItemsCount}
          />
          <FilterReset onApplyFilters={handleResetFilters} />
        </div>
      </div>
      {filteredItems.length === 0 && (
        <div className="noMessage">No stands found for the selected filters</div>
      )}
    </>
  );
};

export default Filters;
