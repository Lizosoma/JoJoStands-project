import React, { useState, useEffect } from 'react';
import styles from '../standItem.module.css';
import { IStand } from '../../../types/stand.interface';

interface StandPicturesProps {
  stand: IStand;
}

const StandPictures: React.FC<StandPicturesProps> = ({ stand }) => {
  const [standIndex, setStandIndex] = useState(0);
  const [standDotIndex, setStandDotIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStandIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setStandDotIndex(newIndex % (stand.stand_images?.length || 1));
        return newIndex % (stand.stand_images?.length || 1);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [stand.stand_images]);

  const handleStandDotClick = (index: number) => {
    setStandIndex(index);
    setStandDotIndex(index);
  };

  const currentStandImage = stand.stand_images?.[standIndex] || '';

  return (
    <div className={styles.imageAndDots}>
      {stand.stand_images?.length > 0 && (
        <div className={styles.standImage}>
          <img src={currentStandImage} alt="stand" />
        </div>
      )}
      <div className={styles.slideshowDots}>
        {stand.stand_images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot} ${
              standDotIndex === idx ? `${styles.slideshowDotActive}` : ''
            }`}
            onClick={() => handleStandDotClick(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default StandPictures;
