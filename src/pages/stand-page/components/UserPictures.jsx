import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../standItem.module.css';

const UserPictures = ({ stand }) => {
  const [userIndex, setUserIndex] = useState(0);
  const [userDotIndex, setUserDotIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUserIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setUserDotIndex(newIndex % (stand.user_images?.length || 1));
        return newIndex % (stand.user_images?.length || 1);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [stand.user_images]);

  const handleUserDotClick = (index) => {
    setUserIndex(index);
    setUserDotIndex(index);
  };

  const currentUserImage = stand.user_images?.[userIndex] || '';

  return (
    <div className={styles.imageAndDots}>
      {stand.user_images?.length > 0 && (
        <div className={styles.userImage}>
          <img src={currentUserImage} alt="standUser" />
        </div>
      )}
      <div className={styles.slideshowDots}>
        {stand.user_images.map((_, idx) => (
          <div
            key={idx}
            className={`${styles.slideshowDot} ${
              userDotIndex === idx ? `${styles.slideshowDotActive}` : ''
            }`}
            onClick={() => handleUserDotClick(idx)}
          ></div>
        ))}
      </div>
      <h2 className={styles.standUserName}>{stand.standUser}</h2>
    </div>
  );
};

export default UserPictures;
