import React from 'react';
import styles from './pagination.module.css';
import arrow from '../../../../assets/images/arrow.svg';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.paginationList}>
      <li className={styles.prevArr}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <img src={arrow} alt="Previous" />
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className={styles.pageItem}>
          <button
            onClick={() => onPageChange(number)}
            className={currentPage === number ? styles.active : ''}
          >
            {number}
          </button>
        </li>
      ))}
      <li className={styles.nextArr}>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <img src={arrow} alt="Next" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
