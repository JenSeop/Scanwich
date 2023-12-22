import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';

const permissions_data = [
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

export default function Template({data}) {
  const render_font_size = '10px';
  const divider_margin = '0.5vh'
  const r_id = data?.r_id;
  const r_date = data?.r_date;
  const u_id = data?.u_id;
  const androguard = data?.r_data?.androguard_data;
  const permissions = androguard?.permissions?.all;
  const dexo_hash = data?.r_data?.dexo_hash;
  const dexo_comp = data?.r_data?.dexo_comp;
  const file_score = data?.r_data?.file_classes_score;
  const file_info = data?.r_data?.file_info;
  const virustotal = data?.r_data?.vt_data;
  const vt_vendor = virustotal?.vendor;

  const renderDexoComp = () => {
    if(dexo_comp)
    {
      const spanStyle = {
        fontSize: render_font_size,
      };
      const dataArray = Object.values(dexo_comp);
      const limitedDataArray = dataArray.slice(0, 5);
  
      return limitedDataArray.map((item, index) => (
        <span key={index} style={spanStyle}>({index+1}, {item?.r_data?.androguard_data?.apk?.name}, {item.result}%) </span>
      ));
    }
  };
  
  const renderPermissions = () => {
    if(permissions)
    {
      const divStyle = {
        fontSize: render_font_size,
      };
      const dataOrigin = Object.values(permissions);
      const dataComp = Object.values(permissions_data);
      const matchingPermissions = permissions_data.filter((permissionData) =>
        permissions.includes(permissionData.id)
      );
  
      return matchingPermissions.map((item, index) => (
        <div key={index} style={divStyle}>{item?.id} - {item?.name}</div>
      ));
    }
  };

  const renderDetected = () => {
    if (vt_vendor) {
      const spanStyle = {
        fontSize: render_font_size,
      };
      const detectedAntivirus = Object.entries(vt_vendor).filter(
        ([_, antivirus]) => antivirus.detected
      );
  
      const renderedItems = detectedAntivirus.map(([key, item], index, array) => (
        <span key={key} style={spanStyle}>
          {item.result}
          {(index + 1) % 3 === 0 && <br />}
        </span>
      ));
  
      return renderedItems;
    }
  };

  const renderDetections = () => {
    if (file_score && file_score.detections) {
      const spanStyle = {
        fontSize: render_font_size,
      };
  
      return Object.keys(file_score.detections).map((key) => (
        <span key={key} style={spanStyle}>
          {key}: {JSON.stringify(file_score.detections[key])}
          <br />
        </span>
      ));
    }
  };

  return (
    <>
      <Grid container sx={{marginLeft: '1vh'}}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant='h5' fontWeight='bold'>Scanwich Analysis Report</Typography>
            <Typography variant='body2'>Report# {r_id} - {r_date} - {u_id}</Typography>
          </Grid>
          <Grid item>
            <img
              src="/images/remaster/11.png"
              alt="Scanwich"
              width={60}
              height={60}
              style={{ marginRight: '10px' }}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{marginTop: divider_margin, marginBottom: divider_margin}}>
              <Divider />
            </Grid>

        <Grid container>
          <Grid container>

            {/* FILE */}
            <Grid item xs={12}>
              <Typography variant='body2' fontWeight='bold'>FILE</Typography>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Name</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{file_info?.f_name}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>MD5</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{file_info?.f_md5}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>SHA256</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{file_info?.f_sha256}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Size</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{file_info?.f_size} byte</Typography>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} sx={{marginTop: divider_margin, marginBottom: divider_margin}}>
              <Divider />
            </Grid>

            {/* Androguard */}
            <Grid item xs={12}>
              <Typography variant='body2' fontWeight='bold'>Androguard</Typography>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Name</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{androguard?.apk?.name}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Package</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{androguard?.sdk?.package_name}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>MinVer</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{androguard?.sdk?.min_sdk_ver}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>TargetVer</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{androguard?.sdk?.target_sdk_ver}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Permissions</Typography>
                </Grid>
                <Grid item xs>
                  {renderPermissions()}
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} sx={{marginTop: divider_margin, marginBottom: divider_margin}}>
              <Divider />
            </Grid>
            
            {/* Virus Total */}
            <Grid item xs={12}>
              <Typography variant='body2' fontWeight='bold'>Virus Total</Typography>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Score</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>{virustotal?.score}/{virustotal?.count}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Detected</Typography>
                </Grid>
                <Grid item xs>
                  {renderDetected()}
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} sx={{marginTop: divider_margin, marginBottom: divider_margin}}>
              <Divider />
            </Grid>

            {/* API Score */}
            <Grid item xs={12}>
              <Typography variant='body2' fontWeight='bold'>API Score</Typography>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Score</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant='caption'>
                    ( Device {file_score?.category_scores.Device}, 
                    FileAccess {file_score?.category_scores.FileAccess}, 
                    Linux {file_score?.category_scores.Linux}, 
                    Network {file_score?.category_scores.Network}, 
                    Privacy {file_score?.category_scores.Privacy}, 
                    SMS {file_score?.category_scores.SMS} )
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Detected</Typography>
                </Grid>
                <Grid item xs>
                  {renderDetections()}
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item xs={12} sx={{marginTop: divider_margin, marginBottom: divider_margin}}>
              <Divider />
            </Grid>

            {/* Dexofuzzy */}
            <Grid item xs={12}>
              <Typography variant='body2' fontWeight='bold'>Dexofuzzy</Typography>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Hash</Typography>
                </Grid>
                <Grid container xs style={{ flexDirection: 'column' }}>
                  <Grid item>
                    <Typography variant='caption'>{dexo_hash?.substring(0, 60)}</Typography>
                  </Grid>
                  <Grid item sx={{marginTop: '-1vh'}}>
                    <Typography variant='caption'>{dexo_hash?.substring(60,)}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={1}>
                  <Typography variant='caption' fontWeight='bold'>Comp</Typography>
                </Grid>
                <Grid item xs>
                  {renderDexoComp()}
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </>
  );
}