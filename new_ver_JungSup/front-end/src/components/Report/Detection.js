import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const columns = [
  {
    field: 'vendor',
    headerName: 'Vendor',
    renderCell: (params) => {
      return <span style={{ fontWeight: 'bold' }}>{params.value}</span>;
    },
    flex:1
  },
  {
    field: 'result',
    headerName: 'Result',
    width: 200,
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
    flex:1
  },
  {
    field: 'version',
    headerName: 'Version',
    flex:1
  },
  {
    field: 'update',
    headerName: 'Update',
    flex:1
  },
];

function Detection({ data }) {
  const rows = Object.keys(data).map((vendor) => ({
    id: vendor,
    vendor: vendor,
    result: data[vendor].result || '',
    update: data[vendor].update || '',
    version: data[vendor].version || '',
    detected: data[vendor].detected ? 'Detected' : 'Undetected',
  }));

  return (
    <div style={{ height: '50%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        disableSelectionOnClick
      />
    </div>
  );
}

export default Detection;
