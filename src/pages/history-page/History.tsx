import React from 'react';
import { useSelector } from 'react-redux';
import HistoryItem from './history-item/HistoryItem';

const History = () => {
  const filterHistory = useSelector((state: any) => state.filterReducer);
  const reversedHistory = [...filterHistory].reverse();

  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Filter History</h2>
      {reversedHistory.length === 0 ? (
        <div>No filter history yet</div>
      ) : (
        reversedHistory.map((item, index) => <HistoryItem key={index} item={item} />)
      )}
    </div>
  );
};

export default History;
