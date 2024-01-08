import React from 'react';
import { useEffect } from 'react';
import { createGraph } from '../../../utils/createGraph';

const StandStats = ({ stand }) => {
  useEffect(() => {
    if (stand?.id && stand?.stats) {
      createGraph(stand.stats);
    }
  }, [stand]);

  return <canvas id="stats" width="300" height="300"></canvas>;
};

export default StandStats;
