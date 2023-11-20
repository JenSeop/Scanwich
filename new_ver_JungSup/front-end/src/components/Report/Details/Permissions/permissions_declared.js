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
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 60
  },
  {
    field: 'value',
    headerName: 'Permissions',
    width: 200
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: (params) => {
      return params.value === 'danger' ? (
        <>
          <ErrorOutlineIcon style={{ color: 'red' }} />
        </>
      ) : (
        <>
        </>
      );
    },
    width: 60
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 180
  },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1
  },
];

const permissions = [
  {
    id: "android.permission.READ_CALENDAR",
    name: "캘린더 읽기 권한",
    description: "앱이 달력 정보를 읽을 수 있도록 허용합니다."
  },
  {
    id: "android.permission.WRITE_CALENDAR",
    name: "캘린더 쓰기 권한",
    description: "앱이 달력에 정보를 쓸 수 있도록 허용합니다."
  },
  {
    id: "android.permission.CAMERA",
    name: "카메라 접근 권한",
    description: "앱이 카메라를 사용할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.READ_CONTACTS",
    name: "주소록 읽기 권한",
    description: "앱이 주소록 정보를 읽을 수 있도록 허용합니다."
  },
  {
    id: "android.permission.WRITE_CONTACTS",
    name: "주소록 쓰기 권한",
    description: "앱이 주소록에 정보를 쓸 수 있도록 허용합니다."
  },
  {
    id: "android.permission.GET_ACCOUNTS",
    name: "계정 접근 권한",
    description: "앱이 계정 정보에 액세스할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.ACCESS_FINE_LOCATION",
    name: "정확한 위치 접근 권한",
    description: "앱이 정확한 위치 정보에 액세스할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.ACCESS_COARSE_LOCATION",
    name: "대략적인 위치 접근 권한",
    description: "앱이 대략적인 위치 정보에 액세스할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.RECORD_AUDIO",
    name: "마이크 접근 권한",
    description: "앱이 마이크를 사용할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.READ_PHONE_STATE",
    name: "전화 상태 읽기 권한",
    description: "앱이 전화 상태 및 식별 정보를 읽을 수 있도록 허용합니다."
  },
  {
    id: "android.permission.CALL_PHONE",
    name: "전화 걸기 권한",
    description: "앱이 전화를 걸 수 있도록 허용합니다."
  },
  {
    id: "android.permission.READ_CALL_LOG",
    name: "통화 기록 읽기 권한",
    description: "앱이 통화 기록을 읽을 수 있도록 허용합니다."
  },
  {
    id: "android.permission.WRITE_CALL_LOG",
    name: "통화 기록 쓰기 권한",
    description: "앱이 통화 기록에 정보를 쓸 수 있도록 허용합니다."
  },
  {
    id: "android.permission.ADD_VOICEMAIL",
    name: "음성 메일 추가 권한",
    description: "앱이 음성 메일을 추가할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.USE_SIP",
    name: "SIP 통화 권한",
    description: "앱이 SIP (Session Initiation Protocol) 통화를 사용할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.PROCESS_OUTGOING_CALLS",
    name: "발신 통화 처리 권한",
    description: "앱이 발신 통화를 처리할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.BODY_SENSORS",
    name: "신체 센서 접근 권한",
    description: "앱이 신체 센서 데이터에 접근할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.SEND_SMS",
    name: "SMS 전송 권한",
    description: "앱이 SMS를 전송할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.RECEIVE_SMS",
    name: "SMS 수신 권한",
    description: "앱이 SMS를 수신할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.READ_SMS",
    name: "SMS 읽기 권한",
    description: "앱이 SMS를 읽을 수 있도록 허용합니다."
  },
  {
    id: "android.permission.RECEIVE_WAP_PUSH",
    name: "WAP PUSH 수신 권한",
    description: "앱이 WAP PUSH 메시지를 수신할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.RECEIVE_MMS",
    name: "MMS 수신 권한",
    description: "앱이 MMS를 수신할 수 있도록 허용합니다."
  },
  {
    id: "android.permission.READ_EXTERNAL_STORAGE",
    name: "외부 저장소 읽기 권한",
    description: "앱이 외부 저장소의 파일을 읽을 수 있도록 허용합니다."
  },
  {
    id: "android.permission.android.permission.WRITE_EXTERNAL_STORAGE",
    name: "외부 저장소 쓰기 권한",
    description: "앱이 외부 저장소에 파일을 쓸 수 있도록 허용합니다."
  }
];

function PermissionsDeclared({ data, name }) {
  const rows = data.map((value, index) => {
    const permissionInfo = permissions.find(permission => permission.id === value);
    const permissionName = permissionInfo ? permissionInfo.name : "";
    const permissionDescription = permissionInfo ? permissionInfo.description : "";

    return {
      id: index,
      value: value,
      name: permissionName,
      description: permissionDescription,
      status: permissionName ? 'danger' : 'safe',
    };
  });

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
          exportBlob(blob, `scanwich_(${name})_permissions_data.json`);
  
          hideMenu?.();
        }}
      >
        Export JSON
      </MenuItem>
    );
  }

  const csvOptions = { fileName: `scanwich_(${name})_permissions_data` };

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
      field: 'id',
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

export default PermissionsDeclared;
