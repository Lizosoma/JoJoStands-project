import React, { useEffect } from 'react';
import styles from '../filters/filters.module.css';
import { useDispatch } from 'react-redux';
import { saveFiltersParams } from '../../../../store/actions';
import { IItem } from '../../../../types/item.interface';

type FilterResultProps = {
  onApplyFilters: () => void;
  filterParams: IItem;
  filteredItemsCount: number;
  setSearchParams: (params: Record<string, string>) => void;
};

const FilterResult: React.FC<FilterResultProps> = ({
  onApplyFilters,
  filterParams,
  filteredItemsCount,
}) => {
  const dispatch = useDispatch();
  const handleSearch = () => {
    onApplyFilters();
  };

  useEffect(() => {
    if (filteredItemsCount !== 0) {
      dispatch(saveFiltersParams(filterParams, filteredItemsCount));
    }
  }, [filteredItemsCount]);

  return <button className={styles.search} onClick={handleSearch}></button>;
};

export default FilterResult;
