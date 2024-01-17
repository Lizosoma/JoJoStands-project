import React from 'react';
import filters from './filtersList';
import PinkSelect from '../../../../ui/pink-select/PinkSelect';
import { IItem } from '../../../../types/item.interface';

interface FilterByProps {
  filterParams: IItem;
  setFilterParam: (filterName: string, value: string) => void;
}

const FilterBy: React.FC<FilterByProps> = ({ filterParams, setFilterParam }) => {
  return (
    <>
      {filters.map((filter) => (
        <PinkSelect
          key={filter.filterKey}
          text={filter.text}
          options={filter.options}
          value={filterParams[filter.filterKey as keyof IItem]}
          onChange={(e) => setFilterParam(filter.filterKey, e.target.value)}
        />
      ))}
    </>
  );
};

export default FilterBy;
