import React from 'react';
import { useDispatch } from 'react-redux';
import { setStandToFavorite, removeStandFromFavorite } from '../../../store/actions';
import styles from '../standItem.module.css';
import like from '../../../assets/images/like.svg';
import liked from '../../../assets/images/liked.svg';
import StandStats from './StandStats';

const StandInfo = ({ stand, standFavorite, setStandFavorite }) => {
  const dispatch = useDispatch();

  const dispatchFavoriteStand = () => {
    if (standFavorite) {
      dispatch(removeStandFromFavorite(stand.id));
      setStandFavorite(false);
    } else {
      dispatch(
        setStandToFavorite({
          [stand.id]: { name: stand.name, stand_images: stand.stand_images },
        }),
      );
      setStandFavorite(true);
    }
  };

  return (
    <div className={styles.standInfo}>
      <div className={styles.heart}>
        <img src={standFavorite ? liked : like} alt="heart" onClick={dispatchFavoriteStand} />
        <h2 className={styles.standName}>{stand.name}</h2>
      </div>
      <StandStats stand={stand} />
      <p>
        <b>Types: </b>
        {stand.type.join(', ')}
      </p>
      <p>
        <b>Abilities: </b>
        {stand.abilities.join(', ')}
      </p>
      <p>
        <b>Chapter: </b>
        {stand.chapter.join(', ')}
      </p>
      <p className={styles.battlecry}>
        <b>Battlecry: </b>
        {stand.battlecry}
      </p>
    </div>
  );
};

export default StandInfo;
