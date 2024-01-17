import React from 'react';
import styles from './historyItem.module.css';

interface HistoryItemProps {
  item: {
    params: {
      [key: string]: string;
    };
    count: number;
  };
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
  const { params, count } = item;
  return (
    <div className={styles.historyItem}>
      <p className={styles.title}>Found {count} stands</p>
      <div className={styles.historyFilters}>
        {Object.entries(params).map(([key, value]) => {
          if (value !== '' && value !== 'all') {
            return (
              <div key={key} className={styles.item}>
                {value}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default HistoryItem;
