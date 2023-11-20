import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Detection_Chart({count, score}) {
  const data = [
    { id: 0, value: `${score}`, label: 'Detected', color: '#ED3E37' },
    { id: 1, value: `${count}`, label: 'Undetected', color: '#01CB44' },
  ];
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
  );
}