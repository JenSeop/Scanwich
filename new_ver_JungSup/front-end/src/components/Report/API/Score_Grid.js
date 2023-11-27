import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const columns = [
  {
    field: 'category',
    headerName: 'Category',
    renderCell: (params) => {
      return <span style={{ fontWeight: 'bold' }}>{params.value}</span>;
    },
    width: 85,
  },
  {
    field: 'result',
    headerName: 'Result',
    flex: 1,
    renderCell: (params) => {
      return <span style={{ fontWeight: 'bold' }}>{params.value}</span>;
    },
  },
  {
    field: 'score',
    headerName: 'Score',
    width: 75,
    renderCell: (params) => {
      return <span style={{ fontWeight: 'bold' }}>{params.value}</span>;
    },
  },
  {
    field: 'detected',
    headerName: 'Detected',
    renderCell: (params) => {
      return params.value === 'Detected' ? (
        <>
          <ErrorOutlineIcon style={{ color: 'red' }} />
          <span style={{ color: 'red' }}>{params.value}</span>
        </>
      ) : (
        <>
          <CheckCircleOutlineIcon style={{ color: 'green' }} />
          <span style={{ color: 'green' }}>{params.value}</span>
        </>
      );
    },
    width: 120
  },
];

function Score_Grid({ data, scores }) {
  const rows = Object?.keys(data)?.map((category) => ({
    id: data && category,
    category: data && category,
    result: data[category] && data[category]?.length > 0 ? data[category].join(', ') : '',
    detected: data[category] && data[category]?.length > 0 ? 'Detected' : 'Undetected',
    score: scores[category],
  }));

  const sortModel = [
    {
      field: 'score',
      sort: 'desc',
    },
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        density="compact"
        sortModel={sortModel}
        hideFooter={true}
        autoHeight
      />
    </div>
  );
}

export default Score_Grid;
