import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StandsService } from '../../services/card.service';
import styles from './standItem.module.css';
import Back from '../../components/Back';
import StandInfo from './components/StandInfo';
import StandPictures from './components/StandPictures';
import UserPictures from './components/UserPictures';
import { IStand } from '../../types/stand.interface';

const StandItem = () => {
  const { id } = useParams();
  const [stand, setStand] = useState<IStand | null>(null);

  const [standFavorite, setStandFavorite] = useState(false);
  const storeData = useSelector((state: any) => state.favoriteReducer);

  useEffect(() => {
    if (!id) {
      return;
    }

    storeData[id] ? setStandFavorite(true) : setStandFavorite(false);

    const fetchData = async () => {
      const data = await StandsService.getById(Number(id));
      setStand(data);
    };

    fetchData();
  }, [id]);

  if (!stand?.id) {
    return <div>Stand not found</div>;
  }

  return (
    <>
      <Back />
      <div className={styles.standContainer}>
        <div className={styles.images}>
          <StandPictures stand={stand} />
          <UserPictures stand={stand} />
        </div>
        <StandInfo
          stand={stand}
          standFavorite={standFavorite}
          setStandFavorite={setStandFavorite}
        />
      </div>
    </>
  );
};

export default StandItem;
