import React from 'react';
import { useDispatch } from 'react-redux';
import { setStandToFavorite, removeStandFromFavorite } from '../../../store/actions';
import styles from '../standItem.module.css';
import like from '../../../assets/images/like.svg';
import liked from '../../../assets/images/liked.svg';
import StandStats from './StandStats';
import { IStand } from '../../../types/stand.interface';

interface StandInfoProps {
  stand: IStand;
  standFavorite: boolean;
  setStandFavorite: (value: boolean) => void;
}

const StandInfo: React.FC<StandInfoProps> = ({ stand, standFavorite, setStandFavorite }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const dispatch = useDispatch();

  const dispatchFavoriteStand = () => {
    if (standFavorite) {
      dispatch(removeStandFromFavorite(stand.id));
      setStandFavorite(false);
    } else {
      dispatch(
        setStandToFavorite({
          [stand.id]: {
            ...stand,
          },
        }),
      );
      setStandFavorite(true);
    }
  };

  return (
    <div className={styles.standInfo}>
      <div className={styles.heart}>
        {isLoggedIn && (
          <img src={standFavorite ? liked : like} alt="heart" onClick={dispatchFavoriteStand} />
        )}
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
