import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './favoritesIcon.module.css';
import favorites from '../../../../assets/images/liked.svg';

const FavoritesIcon = () => {
  const [count, setCount] = useState<number | string>(0);

  const storeData = useSelector((state: any) => state.favoriteReducer);

  useEffect(() => {
    const count = Object.keys(storeData).length;
    count.toString().length > 2 ? setCount('...') : setCount(count);
  });

  return (
    <div className={styles.favoritesIcon}>
      <img className={styles.favorites} src={favorites} alt="favorites" />
      <span className={styles.count}>{count}</span>
    </div>
  );
};

export default FavoritesIcon;
