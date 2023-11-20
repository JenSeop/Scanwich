import React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  useGridApiContext,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
} from '@mui/x-data-grid';
import MenuItem from '@mui/material/MenuItem';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { PieChart } from '@mui/x-charts/PieChart';

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

function Detection_Grid({ data, name }) {
  const rows = Object.keys(data).map((vendor) => ({
    id: vendor,
    vendor: vendor,
    result: data[vendor].result || '',
    update: data[vendor].update || '',
    version: data[vendor].version || '',
    detected: data[vendor].detected ? 'Detected' : 'Undetected',
  }));

  const getJson = (apiRef) => {
    const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
    const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);
  
    const data = filteredSortedRowIds.map((id) => {
      const row = {};
      visibleColumnsField.forEach((field) => {
        row[field] = apiRef.current.getCellParams(id, field).value;
      });
      return row;
    });
  
    return JSON.stringify(data, null, 2);
  };

  const exportBlob = (blob, name) => {
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
  
    setTimeout(() => {
      URL.revokeObjectURL(url);
    });
  };

  function JsonExportMenuItem(props) {
    const apiRef = useGridApiContext();
  
    const { hideMenu } = props;
  
    return (
      <MenuItem
        onClick={() => {
          const jsonString = getJson(apiRef);
          const blob = new Blob([jsonString], {
            type: 'text/json',
          });
          exportBlob(blob, `scanwich_(${name})_vt_data.json`);
  
          hideMenu?.();
        }}
      >
        Export JSON
      </MenuItem>
    );
  }

  const csvOptions = { fileName: `(${name})_scanwich_vt_data` };

  function CustomExportButton(props) {
    return (
      <GridToolbarExportContainer {...props}>
        <GridCsvExportMenuItem options={csvOptions} />
        <JsonExportMenuItem />
      </GridToolbarExportContainer>
    );
  }
  
  function CustomToolbar(props) {
    return (
      <GridToolbarContainer {...props}>
        <CustomExportButton sx={{marginLeft: 'auto', color: '#373531'}}/>
      </GridToolbarContainer>
    );
  }
  const sortModel = [
    {
      field: 'detected',
      sort: 'asc',
    },
  ];

  return (
    <div style={{ height: '50%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        density="compact"
        slots={{ toolbar: CustomToolbar }}
        sortModel={sortModel}
        hideFooter={true}
      />
    </div>
  );
}

export default Detection_Grid;
