import React from 'react';
import styles from './paginationButton.module.css';

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}

const PaginatoinButton: React.FC<PaginationButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.pageItem}>
      {children}
    </button>
  );
};

export default PaginatoinButton;
