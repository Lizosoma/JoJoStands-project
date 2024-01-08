import React from 'react';
import styles from './pinkButton.module.css';

const PinkButton = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default PinkButton;
