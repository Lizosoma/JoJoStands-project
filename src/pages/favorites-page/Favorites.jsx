import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../components/stand-card/standCard.module.css';
import StandCard from '../../components/stand-card/StandCard';

const Favorites = () => {
  const [favoriteStands, setFavoriteStands] = useState([]);

  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setFavoriteStands(res);
    }
  }, []);

  return (
    <>
      {favoriteStands.length ? (
        <div className={styles.cards}>
          {favoriteStands.map((stand) => (
            <StandCard key={stand.id} stand={stand} isFavorite={true} />
          ))}
        </div>
      ) : (
        <p className="noMessage">No favorite stands yet</p>
      )}
    </>
  );
};

export default Favorites;
