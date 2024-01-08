import React, { useState, useEffect } from 'react';
import StandCard from '../../components/stand-card/StandCard';
import { StandsService } from '../../services/card.service';
import Pagination from './components/pagination/Pagination';

const Main = () => {
  const [stands, setStands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState(null);

  const favorites = JSON.parse(localStorage.getItem('store')) || [];

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const data = await StandsService.getByPage(page, itemsPerPage);
        setStands(data.stands);
        setTotalItems(data.totalItems);
        setError(null);
      } catch (err) {
        setError('Something wrong with the server. Please try again later.');
      }
    };

    fetchData(currentPage);
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      {error && <div className="noMessage">{error}</div>}
      <div className="cards">
        {stands.map((stand) => (
          <StandCard
            key={stand.id}
            stand={stand}
            isFavorite={Object.keys(favorites).includes(stand.id.toString())}
          />
        ))}
      </div>
      {!error && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Main;
