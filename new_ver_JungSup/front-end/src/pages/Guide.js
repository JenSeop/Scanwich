import React, { useRef } from 'react';
import { Container, Typography, Paper, List, ListItem, Grid, Divider } from '@mui/material';
import ScrollTop from '../components/MUI/ScrollTop';

const Guide = () => {
  const startRef = useRef(null);
  const serviceRef = useRef(null);
  const findRef = useRef(null);
  const findNameRef = useRef(null);
  const findHashRef = useRef(null);
  const analysisRef = useRef(null);
  const reportRef = useRef(null);
  const overviewRef = useRef(null);
  const detailsRef = useRef(null);
  const detectionRef = useRef(null);
  const classesRef = useRef(null);
  const finderRef = useRef(null);
  const isMalRef = useRef(null);
  const aFile = useRef(null);
  const aCrc32 = useRef(null);
  const aAndroid = useRef(null);
  const aSigned = useRef(null);
  const aActivities = useRef(null);
  const aPermissions = useRef(null);
  const aService = useRef(null);
  const aReceivers = useRef(null);
  const aIntent = useRef(null);
  const aProvider = useRef(null);
  const aLibrary = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem', marginBottom: '20vh' }}>
      <Paper elevation={0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '10vh' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/images/remaster/11.png"
            alt="Scanwich"
            width={140}
            height={140}
          />
          <Typography variant="h4" fontWeight='bold' color='primary' gutterBottom>
            Guide (가이드)
          </Typography>
          <Typography variant="caption text" color='#E5E5E5' gutterBottom>
            Last updated at 23.12.05
          </Typography>
        </div>
        <Divider sx={{ marginTop: '2vh', marginBottom: '2vh' }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          목차
        </Typography>
        <List>
          <ListItem button onClick={() => scrollToRef(startRef)}>
            <Typography variant="body1" fontWeight="bold">1. 시작하기</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(serviceRef)}>
            <Typography variant="body1" fontWeight="bold">2. 서비스 사용 안내</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(findRef)}>
            <Typography variant="body1" fontWeight="bold">　2-1. 파일 검색하기</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(findNameRef)}>
            <Typography variant="body2">　　2-1-1. 이름으로 검색</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(findHashRef)}>
            <Typography variant="body2">　　2-1-2. 해쉬로 검색</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(analysisRef)}>
            <Typography variant="body1" fontWeight="bold">　2-2. 파일 분석하기</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(reportRef)}>
            <Typography variant="body1" fontWeight="bold">　2-3. 리포트</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(overviewRef)}>
            <Typography variant="body2">　　2-3-1. OVERVIEW (요약)</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(detailsRef)}>
            <Typography variant="body2">　　2-3-2. DETAILS (세부 내용)</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(detectionRef)}>
            <Typography variant="body2">　　2-3-3. DETECTION (탐지 결과)</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(classesRef)}>
            <Typography variant="body2">　　2-3-4. CLASSES (클래스)</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(finderRef)}>
            <Typography variant="body2">　　2-3-5. FINDER (파일 구조)</Typography>
          </ListItem>
          <ListItem button onClick={() => scrollToRef(isMalRef)}>
            <Typography variant="body1" fontWeight="bold">3. 정상/악성 파일 대처 방법</Typography>
          </ListItem>
        </List>
        <Divider sx={{ marginTop: '2vh', marginBottom: '2vh' }} />
        <Typography variant="h6" fontWeight="bold" ref={startRef} sx={{marginBottom:'2vh'}}>1. 시작하기</Typography>
        <Typography variant="body1">어플리케이션(APK)을 분석하기에 앞서 회원 가입을 진행합니다. 로그인 후 준비한 어플리케이션(APK) 파일을 사이트에 업로드하면 분석이 시작됩니다. 분석이 끝나고 나면 결과를 확인하실 수 있습니다. Scanwich는 다른 사용자들이 분석한 어플리케이션(APK) 파일의 정보도 제공합니다. Scanwich에서 제공하는 정보들을 확인하고 안전한 모바일 환경을 즐기세요.</Typography>
        <Divider sx={{ marginTop: '2vh', marginBottom: '2vh' }} />
        <Typography variant="h6" fontWeight="bold" ref={serviceRef} sx={{marginBottom:'2vh'}}>2. 서비스 이용 안내</Typography>

        <Grid sx={{marginLeft:'2vh'}}>
          <Typography variant="body1" fontWeight="bold" ref={findRef} sx={{marginBottom:'1vh'}}>2-1. 파일 검색하기</Typography>
          <Grid sx={{marginLeft:'2vh'}}>
            <Typography variant="body1" fontWeight="bold" ref={findNameRef} sx={{marginBottom:'1vh'}}>2-1-1. 이름으로 검색</Typography>
            <Grid sx={{marginLeft:'2vh'}}>
              <Typography variant="body1" sx={{marginBottom:'1vh'}}>원하는 어플리케이션(APK)의 이름을 검색해보세요.</Typography>
            </Grid>
            <Typography variant="body1" fontWeight="bold" ref={findHashRef} sx={{marginBottom:'1vh'}}>2-1-2. 해쉬로 검색</Typography>
            <Grid sx={{marginLeft:'2vh'}}>
              <Typography variant="body1" sx={{marginBottom:'1vh'}}>원하는 어플리케이션(APK) 파일의 Hash값을 검색해보세요.</Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" fontWeight="bold" ref={analysisRef} sx={{marginBottom:'1vh'}}>2-2. 파일 분석하기</Typography>
          <Grid sx={{marginLeft:'2vh'}}>
            <Typography variant="body1" sx={{marginBottom:'1vh'}}>어플리케이션(APK) 파일을 업로드하면 분석을 시작합니다. 왼쪽 큐에서 분석 대기중인 파일을 확인할 수 있습니다. 리스트에서는 다른 사용자들이 분석한 어플리케이션(APK) 파일의 목록을 확인할 수 있습니다.</Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" fontWeight="bold" ref={reportRef} sx={{marginBottom:'1vh'}}>2-3. 리포트</Typography>

        <Grid sx={{marginLeft:'2vh'}}>
          <Typography variant="body1" fontWeight="bold" sx={{marginBottom:'1vh'}}>　2-3-1. 개요 페이지</Typography>
        </Grid>
        <Grid sx={{marginLeft:'6vh'}}>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>샌드위치 캐릭터, 결과, 등급으로 악성의 정도를 확인할 수 있습니다. 캐릭터 3단계부터 악성으로 진단되므로 주의가 필요합니다. 주의 사항은 <strong>정상 악성 파일 대처 방법</strong>을 참고하세요.</Typography>
        </Grid>

        <Typography variant="body1" fontWeight="bold" ref={overviewRef} sx={{marginBottom:'1vh'}}>　　2-3-2. Overview(요약) 페이지</Typography>
        <Grid sx={{marginLeft:'6vh'}}>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Dexofuzzy에서 제공하는 APK파일의 유사도 정보를 확인할 수 있습니다. API Score는 APK파일에서 발견된 위험한 API의 수치를 그래프로 제공합니다. API의 자세한 정보는 표로 확인할 수 있습니다.</Typography>
        </Grid>

        <Typography variant="body1" fontWeight="bold" ref={detailsRef} sx={{marginBottom:'1vh'}}>　　2-3-3. Detail(세부 내용) 페이지</Typography>
        <Grid sx={{marginLeft:'6vh'}}>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Androguard로 추출한 APK의 주요 정보들을 볼 수 있습니다. File Name, CRC32, Package, Version(Min, Max, Target), Signed, Activities, Permissions, Service, Receiver, intent Filter, Provider, Library 등의 정보를 확인할 수 있습니다. 또한 몇몇 정보는 CSV, JSON으로 다운을 받을 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aFile} sx={{marginBottom:'1vh'}}>File</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>File 카테고리에서는 Name, MD5, SHA256, Size를 제공합니다. Name은 APK 파일의 이름을 나타냅니다. MD5와 SHA256은 파일의 해시 값으로, 각각 MD5 알고리즘과 SHA-256 알고리즘을 통해 생성됩니다. Size는 파일의 크기를 나타냅니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aCrc32} sx={{marginBottom:'1vh'}}>CRC32</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>CRC32 카테고리에서는 APK 파일 내에 들어있는 파일들의 이름과 각 파일에 해당하는 CRC32 체크섬 값을 제공합니다. 이를 통해 파일의 손상 여부를 확인할 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aAndroid} sx={{marginBottom:'1vh'}}>Android</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Android 카테고리에서는 Package Name, Min, Max, Target Version을 제공합니다. Package는 APK의 고유 식별자인 패키지 이름을 나타냅니다. Min Version은 APK가 실행되기 위해 필요한 Android 최소 버전, Max  Version은 APK가 호환되는 Android 버전을 나타내며 , Target Version은 애플리케이션이 타켓팅한 Android 버전을 나타냅니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aSigned} sx={{marginBottom:'1vh'}}>Signed</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}> Signed 카테고리에서는 signed v1, signed v2, signed v3를 제공합니다. 키가 존재할 경우 true를 표시하여 해당 APK가 서명되었음을 알 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aActivities} sx={{marginBottom:'1vh'}}>Activities</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Activities 카테고리에서는 Main Activity와 APK 내의 모든 액티비티 정보를 제공합니다. 이를 통해 APK 화면 구성과 상호작용 방식을 파악할 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aPermissions} sx={{marginBottom:'1vh'}}>Permissions</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Permissions 카테고리에서는 APK가 사용자에게 요구하는 권한 목록을 제공합니다. 사용자의 정보를 탈취하는 등의 위험한 권한은 경고 표시를 띄워서 사용자에게 주의를 줍니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aService} sx={{marginBottom:'1vh'}}>Service</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Service 카테고리에서는 APK의 서비스 목록을 제공합니다. 이를 통해 APK에서 실행되는 주요 기능을 확인할 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aReceivers} sx={{marginBottom:'1vh'}}>Receivers</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Receivers 카테고리에서는 APK의 리시버 목록을 제공합니다. 이를 통해 APK가 외부 이벤트에 따라 어떤 작업을 수행하는지 알 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aIntent} sx={{marginBottom:'1vh'}}>Intent Filters</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Intent Filters 카테고리에서는 APK의 인텐트 필터 목록을 제공합니다. 이를 통해 APK가 내부 이벤트에 따라 어떤 작업을 수행하는지 알 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aProvider} sx={{marginBottom:'1vh'}}>Provider</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Provider 카테고리에서는 APK의 프로바이더 목록을 제공합니다. 이를 통해 APK가 어떤 종류의 데이터를 제공하고 있는지를 확인할 수 있습니다.</Typography>

          <Typography variant="body1" fontWeight="bold" ref={aLibrary} sx={{marginBottom:'1vh'}}>Library</Typography>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>Library 카테고리에서는 APK의 라이브러리 목록을 제공합니다. 이를 통해 APK가 어떤 외부 라이브러리를 활용하고 있는지 확인할 수 있습니다.</Typography>
        </Grid>

        <Typography variant="body1" fontWeight="bold" ref={detectionRef} sx={{marginBottom:'1vh'}}>　　2-3-4. Detection (탐지 결과) 페이지</Typography>
        <Grid sx={{marginLeft:'6vh'}}>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>VirusTotal에서 APK파일을 검사한 결과를 볼 수 있습니다. 악성으로 탐지된 비율은 Detected로 그래프에 표시됩니다. 그 외에도 벤더사에서 제공하는 탐지 결과를 확인할 수 있습니다.</Typography>
        </Grid>

        <Typography variant="body1" fontWeight="bold" ref={classesRef} sx={{marginBottom:'1vh'}}>　　2-3-5. Classes (클래스) 페이지</Typography>
        <Grid sx={{marginLeft:'6vh'}}>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>VirusTotal에서 APK파일을 검사한 결과를 볼 수 있습니다. 악성으로 탐지된 비율은 Detected로 그래프에 표시됩니다. 그 외에도 벤더사에서 제공하는 탐지 결과를 확인할 수 있습니다.</Typography>
        </Grid>

        <Typography variant="body1" fontWeight="bold" ref={finderRef} sx={{marginBottom:'1vh'}}>　　2-3-6. Finder (파일 구조) 페이지</Typography>
        <Grid sx={{marginLeft:'6vh'}}>
          <Typography variant="body1" sx={{marginBottom:'1vh'}}>APK의 구조를 한 눈에 파악할 수 있습니다. APK 내에서 원하는 파일을 검색할 수 있습니다.</Typography>
        </Grid>

        <Divider sx={{ marginTop: '2vh', marginBottom: '2vh' }} />
        <Typography variant="h6" fontWeight="bold" ref={isMalRef} sx={{marginBottom:'2vh'}}>3. 정상/악성 파일 대처 방법</Typography>


        <Grid sx={{marginLeft:'2vh'}}>
          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>0단계 - 안전 (Safe)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/1.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 매우 안전합니다!<br/>APK 파일을 마음 놓고 사용하세요.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>1단계 - 정상 (Normal)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/1.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 안전합니다.<br/>사용해도 큰 문제가 없습니다.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>2단계 - 매우 낮음 (Very Low)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/2.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 악성일 수도 있습니다.<br/>파일이 정품인지 확인하고, 신뢰할 수 있는 출처에서 다운로드 하세요.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>3단계 - 낮음 (Low)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/3.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일에 약간의 위험이 있을 수 있습니다. 주의가 필요합니다.<br/>사용 전에 보안 소프트웨어를 업데이트 하고 파일을 정밀하게 검토하세요</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>4단계 - 보통 (Moderate)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/4.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일에 상당한 위험 요소가 있을 수 있습니다.<br/>파일을 실행하기 전에 시스템 백업을 수행하고, 출처를 신중하게 판단하세요.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>5단계 - 주의 (Caution)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/5.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 위험할 수 있습니다. 사용에 극도로 주의가 필요합니다.<br/>파일을 삭제하고, 시스템을 복원하는 것이 안전합니다.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>6단계 - 높음 (High)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/6.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 심각한 악성 행위를 포함할 수 있습니다.<br/>파일을 즉시 삭제하고, 시스템을 스캔하세요.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>7단계 - 매우 높음 (Very High)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/7.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 매우 위험하며, 즉시 사용을 중지하고 삭제하는 것이 안전합니다.<br/>시스템을 재설치하고, 보안 전문가와 상담하세요.</Typography>
            </Grid>
          </Grid>

          <Typography variant="body1" fontWeight="bold" sx={{marginTop:'1vh', marginBottom:'1vh'}}>8단계 - 위험 (Danger)</Typography>
          <Grid container>
            <Grid xs={1.5}>
              <img
                src="/images/remaster/8.png"
                alt="Scanwich"
                width={45}
                height={45}
              />
            </Grid>
            <Grid xs>
              <Typography variant="body1">파일이 극도로 위험하며, 사용을 절대로 피하는 것이 안전합니다.<br/>즉시 파일을 삭제하고, 시스템을 완전히 재설치하세요. 보안 전문가와 긴밀한 협의가 필요합니다.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <ScrollTop value='100px'/>
    </Container>
  );
};

export default Guide;
