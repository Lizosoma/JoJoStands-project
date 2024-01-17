import React from 'react';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} style={{ marginBottom: '10px' }}>
      <span> &larr; Back</span>
    </button>
  );
};

export default Back;
