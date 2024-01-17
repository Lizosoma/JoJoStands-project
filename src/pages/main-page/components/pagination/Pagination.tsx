import React from 'react';
import styles from './pagination.module.css';
import arrow from '../../../../assets/images/arrow.svg';
import PaginationButton from '../../../../ui/pagination-button/PaginatoinButton';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <ul className={styles.paginationList}>
      <PaginationButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <img style={{ transform: 'rotate(-90deg)' }} src={arrow} alt="Previous" />
      </PaginationButton>
      {[...Array(totalPages).keys()].map((number) => (
        <PaginationButton
          key={number + 1}
          onClick={() => onPageChange(number + 1)}
          disabled={currentPage === number + 1}
        >
          <span className={currentPage === number + 1 ? styles.active : ''}>{number + 1}</span>
        </PaginationButton>
      ))}
      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <img style={{ transform: 'rotate(90deg)' }} src={arrow} alt="Next" />
      </PaginationButton>
    </ul>
  );
};

export default Pagination;
