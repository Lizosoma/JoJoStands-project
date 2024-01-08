import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  return (
    <Link to={'..'}>
      <span> &larr; Back</span>
    </Link>
  );
};

export default Back;
