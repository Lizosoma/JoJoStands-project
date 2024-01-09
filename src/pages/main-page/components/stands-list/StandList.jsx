import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import StandCard from '../../../../components/stand-card/StandCard';
import { StandsService } from '../../../../services/card.service';
import Pagination from '../pagination/Pagination';

const StandsList = ({ defaultLimit = 24 }) => {
  const [stands, setStands] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);

  const currentPage = parseInt(searchParams.get('_page'), 10) || 1;
  const limit = parseInt(searchParams.get('_limit'), 10) || defaultLimit;

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await StandsService.getByPage(currentPage, limit);
        setStands(data.stands);
        setTotalItems(data.totalItems);
      } catch (err) {
        setError('Something wrong with the server. Please try again later.');
      }
    };

    fetchData();
  }, [currentPage, limit]);

  useEffect(() => {
    setSearchParams({ _page: currentPage.toString(), _limit: limit.toString() });
  }, [currentPage, limit, setSearchParams]);

  const handlePageChange = (newPage) => {
    setSearchParams({ _page: newPage.toString(), _limit: limit.toString() });
  };

  const totalPages = Math.ceil(totalItems / limit);

  return (
    <div>
      {error ? (
        <div className="noMessage">{error}</div>
      ) : (
        <>
          <div className="cards">
            {stands.map((stand) => (
              <StandCard
                key={stand.id}
                stand={stand}
                isFavorite={Object.keys(favorites).includes(stand.id)}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default StandsList;
