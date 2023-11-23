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

const columns = [
  {
    field: 'id',
    headerName: '#',
    width: 60
  },
  {
    field: 'value',
    headerName: 'Intent Filters',
    flex:1
  },
];

function Intent_Filters({ data, name }) {
  const rows = Object.entries(data).map(([field, value], index) => ({
    id: index,
    value,
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
          exportBlob(blob, `scanwich_(${name})_intent_filters_data.json`);
  
          hideMenu?.();
        }}
      >
        Export JSON
      </MenuItem>
    );
  }

  const csvOptions = { fileName: `scanwich_(${name})_intent_filters_data` };

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
      field: 'field',
      sort: 'asc',
    },
  ];

  return (
    <div style={{ height: '50%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        slots={{ toolbar: CustomToolbar }}
        sortModel={sortModel}
        hideFooter={false}
        disableSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
      />
    </div>
  );
}

export default Intent_Filters;
