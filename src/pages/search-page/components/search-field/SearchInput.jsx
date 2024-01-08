import React, { useState } from 'react';
import styles from './searchInput.module.css';

const SearchInput = ({ data, setSearchResults, searchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === '') {
      setSearchResults([]);
    } else {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(event.target.value.toLowerCase()),
      );
      setSearchResults(results);
    }
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div>
        {searchResults.map((result) => (
          <div key={result.id}></div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
