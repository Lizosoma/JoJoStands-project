import React, { useState, useEffect } from 'react';
import Filters from './components/filters/Filters';
import SearchInput from './components/search-field/SearchInput';
import { StandsService } from '../../services/card.service';
import StandCard from '../../components/stand-card/StandCard';

const Search = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const favorites = JSON.parse(localStorage.getItem('store')) || [];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await StandsService.getAll();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch stands:', error);
        setItems([]);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    if (searchResults.length > 0) {
      setFilteredItems(searchResults);
    } else {
      setFilteredItems(items);
    }
  }, [searchResults, items]);

  return (
    <>
      <SearchInput data={items} setSearchResults={setSearchResults} searchResults={searchResults} />
      <Filters data={items} setFilteredItems={setFilteredItems} filteredItems={filteredItems} />

      <div className="cards">
        {filteredItems.map((stand) => (
          <StandCard
            key={stand.id}
            stand={stand}
            isFavorite={Object.keys(favorites).includes(stand.id.toString())}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
