import React from 'react';
import styles from './pinkButton.module.css';

interface PinkButtonProps {
  text: string;
  onClick: () => void;
}

const PinkButton: React.FC<PinkButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};

export default PinkButton;
