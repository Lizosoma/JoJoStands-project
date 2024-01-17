import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StandCard from '../../components/stand-card/StandCard';
import Back from '../../components/Back';
import { IStand } from '../../types/stand.interface';

const Favorites = () => {
  const [favoriteStands, setFavoriteStands] = useState<IStand[]>([]);

  const storeData = useSelector((state: any) => state.favoriteReducer);
  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...(typeof item[1] === 'object' ? item[1] : {}),
        };
      });

      setFavoriteStands(res as any);
    }
  }, []);

  return (
    <>
      <Back />
      {favoriteStands.length ? (
        <div className="cards">
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
