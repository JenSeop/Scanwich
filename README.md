# Scanwich

<strong>This World Bakery</strong>팀의 <strong>Scanwich</strong> 서비스는 <strong>"모두를 위한 안전한 모바일 환경"</strong>의 슬로건으로 시작된 <strong>모바일 악성코드 정적 분석 시스템</strong> 입니다. 국내 모바일 점유율 70% 이상의 안드로이드에서 시작해 일반 사용자들이 겪고 있는 다양한 사이버 범죄의 예방 솔루션이 되어주며 국내 피해 사례에 최적화된 오픈 데이터 수집 및 제공을 목표로 합니다.<br>

The <strong>Scanwich</strong> service of the <strong>This World Bakery</strong> team is a mobile malware static analysis system that started with the slogan "Safe Mobile for All." It is a solution to prevent various cybercrime experienced by ordinary users, starting with Android with a mobile share of more than 70%, and aims to collect and provide open data optimized for victim cases.<br>

# Enviroment
### Front-end
<a href="https://react.dev/" onClick=""><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<a href="https://mui.com/" onClick=""><img src="https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=MUI&logoColor=white"/></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" onClick=""><img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/></a>
<a href="https://html.com/html5/" onClick=""><img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"/></a>
<a href="https://www.w3schools.com/css/" onClick=""><img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"/></a><br/>

<a href="https://apexcharts.com/" onClick=""><img src="https://img.shields.io/badge/ApexChart-2563EB?style=flat-square&logoColor=white"/></a>
<a href="https://reactflow.dev/" onClick=""><img src="https://img.shields.io/badge/ReactFlow-EC5990?style=flat-square&logoColor=white"/></a>
<a href="https://html2canvas.hertzen.com/" onClick=""><img src="https://img.shields.io/badge/html2Canvas-73BA25?style=flat-square&logoColor=white"/></a>
<a href="https://artskydj.github.io/jsPDF/docs/index.html" onClick=""><img src="https://img.shields.io/badge/jsPDF-ED163A?style=flat-square&logoColor=white"/></a>

### Back-end
<a href="https://www.djangoproject.com/" onClick=""><img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"/></a>
<a href="https://docs.celeryq.dev/en/stable/index.html" onClick=""><img src="https://img.shields.io/badge/DjangoQ-37814A?style=flat-square&logo=Django&logoColor=white"/></a>
<a href="https://pypi.org/project/python-environ/" onClick=""><img src="https://img.shields.io/badge/Environ-ECD53F?style=flat-square&logo=dotenv&logoColor=white"/></a>
<a href="https://www.postgresql.org/" onClick=""><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"/></a>
<a href="https://www.nginx.com/" onClick=""><img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/></a>
<a href="https://aws.amazon.com/ko/?nc2=h_lg" onClick=""><img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=Amazon AWS&logoColor=white"/></a>

### Engine
<a href="https://pypi.org/project/androguard/" onClick=""><img src="https://img.shields.io/badge/Androguard-3.3.5-green"/></a>
<a href="https://pypi.org/project/dexofuzzy/" onClick=""><img src="https://img.shields.io/badge/Dexofuzzy-1.7.1-black"/></a>
<a href="https://docs.virustotal.com/reference/overview" onClick=""><img src="https://img.shields.io/badge/VirusTotal-API-red"/></a>

# Team
|**김정섭**|**최유정**|
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: |
|<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/profile/char(1).png?raw=true" width="225px" height="225px">|<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/profile/char(3).png?raw=true" width="225px" height="225px">|
|**Full-Stack**|**Analyst**|**Front-end**|
|<a href="https://github.com/JenSeop"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/></a>|<a href="https://github.com/yjeongc"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/></a>|
|**Front-end**<br/>UI/UX<br/>**Back-end**<br/>Authentication<br/>Analyze Module<br/>**Dev-ops**<br/>AWS Deploy|**Analysis**<br/>APK Analysis<br/>(java class)<br/>**Back-end**<br/>Analyze Module|

# Function

### [Login]
- 로그인을 통한 권한 설정
- 이메일 인증 방식을 활용한 아이디/비밀번호 찾기 기능
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (2).PNG?raw=true" width="640" height="360px">

### [Register]
- 이메일 인증과 토큰을 통한 계정 소유 제한
- 아이디, 비밀번호, 이메일 규칙 제한을 통한 보안 강화
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (3).PNG?raw=true" width="640" height="360px">

### [Home]
- List : 모든 사용자가 접근 가능한 리포트 목록, Modal 통한 요약 정보 확인 기능
- Queue : 로그인 상태에서 생기는 분석 대기열 및 분석 요청 기능
- Search : 검색을 통해 특정 앱의 리포트를 확인할 수 있도록 준비된 검색 기능 (Name, Hash)
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (4).PNG?raw=true" width="640" height="360px">

### [Home]
- Menu : 서비스 이용을 위한 네비게이션 메뉴
- Profile : 로그인한 사용자에게만 표출되는 서비스 목록 및 로그아웃
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (5).PNG?raw=true" width="640" height="360px">

### [Report]
- Charater : 1~8 단계의 Scanwich 캐릭터를 통한 악성 식별자
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (6).PNG?raw=true" width="640" height="360px">

### [Report]
- Dexofuzzy : DEX 유사도 분석을 통해 유사한 앱을 Pagenation 방식으로 제공
- API Score : APK의 Java Class 단계에서 식별되는 민감한 API에 대한 점수 진단
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (7).PNG?raw=true" width="640" height="360px">

### [Report]
- Androguard : 안드로가드를 통해 얻은 APK의 정보를 Data Grid 방식으로 제공
- Permissions : 민감할 수 있는 권한에 대한 경고 문구 및 안내 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (8).PNG?raw=true" width="640" height="360px">

### [Report]
- Detection : 바이러스 토탈 API를 통해 평판 정보 및 벤더사 데이터를 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (9).PNG?raw=true" width="640" height="360px">

### [Report]
- React Flow : Node chart 를 통해 Java Class 단계에서 획득할 수 있는 정보를 제공
- Data Grid : Scanwich Module을 통해 얻은 Classes, Associations 데이터를 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (10).PNG?raw=true" width="640" height="360px">

### [Report]
- Finder : Folder Tree 구조로 APK의 구조 및 파일에 대한 정보 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (11).PNG?raw=true" width="640" height="360px">

### [Report]
- Export : Report에 대한 요약 정보 제공 및 PDF 다운로드 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (12).PNG?raw=true" width="640" height="360px">

### [Report]
- Guide : 서비스 사용 안내 및 악성 파일 대처 방법 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (13).PNG?raw=true" width="640" height="360px">

### [Mobile]
- Responsive : 반응형 웹을 통해 모든 환경의 사용자에게 서비스 제공
<img src = "https://github.com/JenSeop/Scanwich/blob/main/assets/scanwich/slide (1).PNG?raw=true" width="640" height="360px">

# Folder Tree
### [Front-end]
📦src<br/>
 ┣ 📂assets<br/>
 ┃ ┣ 📂contents<br/>
 ┃ ┃ ┗ 📜Agreements.txt<br/>
 ┃ ┗ 📂styles<br/>
 ┃ ┃ ┣ 📜MobNav.css<br/>
 ┃ ┃ ┗ 📜Result.css<br/>
 ┣ 📂components<br/>
 ┃ ┣ 📂Home<br/>
 ┃ ┃ ┣ 📜DataLoadingButton.js<br/>
 ┃ ┃ ┣ 📜List.js<br/>
 ┃ ┃ ┗ 📜Queue.js<br/>
 ┃ ┣ 📂MUI<br/>
 ┃ ┃ ┣ 📜Breadcumbs.js<br/>
 ┃ ┃ ┣ 📜CustomButton.js<br/>
 ┃ ┃ ┣ 📜loadingProgress.js<br/>
 ┃ ┃ ┣ 📜ScrollTop.js<br/>
 ┃ ┃ ┗ 📜SnackBar.js<br/>
 ┃ ┣ 📂Navigation<br/>
 ┃ ┃ ┣ 📜MobBotNav.js<br/>
 ┃ ┃ ┣ 📜MobTopNav.js<br/>
 ┃ ┃ ┣ 📜PcNav.js<br/>
 ┃ ┃ ┣ 📜ProfileMenu.js<br/>
 ┃ ┃ ┗ 📜UserMenu.js<br/>
 ┃ ┣ 📂Register<br/>
 ┃ ┃ ┣ 📜RegisterStep.js<br/>
 ┃ ┃ ┗ 📜TermsAccordion.js<br/>
 ┃ ┣ 📂Report<br/>
 ┃ ┃ ┣ 📂API<br/>
 ┃ ┃ ┃ ┣ 📜Score.js<br/>
 ┃ ┃ ┃ ┗ 📜Score_Grid.js<br/>
 ┃ ┃ ┣ 📂Classes<br/>
 ┃ ┃ ┃ ┣ 📜associationDataGrid.js<br/>
 ┃ ┃ ┃ ┣ 📜classDataGrid.js<br/>
 ┃ ┃ ┃ ┣ 📜classesDetail.js<br/>
 ┃ ┃ ┃ ┗ 📜Diagramclass.js<br/>
 ┃ ┃ ┣ 📂Details<br/>
 ┃ ┃ ┃ ┣ 📂Activities<br/>
 ┃ ┃ ┃ ┃ ┣ 📜Activities.js<br/>
 ┃ ┃ ┃ ┃ ┗ 📜All_Activities.js<br/>
 ┃ ┃ ┃ ┣ 📂Permissions<br/>
 ┃ ┃ ┃ ┃ ┣ 📜Permissions.js<br/>
 ┃ ┃ ┃ ┃ ┣ 📜permissions_all.js<br/>
 ┃ ┃ ┃ ┃ ┗ 📜permissions_declared.js<br/>
 ┃ ┃ ┃ ┣ 📜Android.js<br/>
 ┃ ┃ ┃ ┣ 📜CRC32.js<br/>
 ┃ ┃ ┃ ┣ 📜File.js<br/>
 ┃ ┃ ┃ ┣ 📜Intent_Filters.js<br/>
 ┃ ┃ ┃ ┣ 📜Library.js<br/>
 ┃ ┃ ┃ ┣ 📜Provider.js<br/>
 ┃ ┃ ┃ ┣ 📜Reciver.js<br/>
 ┃ ┃ ┃ ┣ 📜Service.js<br/>
 ┃ ┃ ┃ ┗ 📜Signed.js<br/>
 ┃ ┃ ┣ 📂Detection<br/>
 ┃ ┃ ┃ ┣ 📜Detection_Chart.js<br/>
 ┃ ┃ ┃ ┗ 📜Detection_Grid.js<br/>
 ┃ ┃ ┣ 📂Dexofuzzy<br/>
 ┃ ┃ ┃ ┗ 📜DexoComp.js<br/>
 ┃ ┃ ┣ 📂exportReport<br/>
 ┃ ┃ ┃ ┣ 📜pdfDownloader.js<br/>
 ┃ ┃ ┃ ┗ 📜pdfTemplate.js<br/>
 ┃ ┃ ┣ 📂Module_File<br/>
 ┃ ┃ ┃ ┣ 📜Download.js<br/>
 ┃ ┃ ┃ ┣ 📜FileModuleMob.js<br/>
 ┃ ┃ ┃ ┗ 📜FileModulePc.js<br/>
 ┃ ┃ ┣ 📂Module_Info<br/>
 ┃ ┃ ┃ ┣ 📜UserInfoMob.js<br/>
 ┃ ┃ ┃ ┗ 📜UserInfoPc.js<br/>
 ┃ ┃ ┣ 📂Navtigation<br/>
 ┃ ┃ ┃ ┣ 📜ReportMenu.js<br/>
 ┃ ┃ ┃ ┗ 📜ReportNav.js<br/>
 ┃ ┃ ┣ 📂ReportIMG<br/>
 ┃ ┃ ┃ ┣ 📜ReportImg.js<br/>
 ┃ ┃ ┃ ┗ 📜ReportImgLender.js<br/>
 ┃ ┃ ┣ 📂Score<br/>
 ┃ ┃ ┃ ┣ 📜ScoreBoard.js<br/>
 ┃ ┃ ┃ ┗ 📜ScoreComment.js<br/>
 ┃ ┃ ┣ 📜Details.js<br/>
 ┃ ┃ ┣ 📜FolderTree.js<br/>
 ┃ ┃ ┣ 📜Loading.js<br/>
 ┃ ┃ ┣ 📜Overview.js<br/>
 ┃ ┃ ┗ 📜ReportDetail.js<br/>
 ┃ ┣ 📂Search<br/>
 ┃ ┃ ┣ 📜SearchBox.js<br/>
 ┃ ┃ ┗ 📜SearchList.js<br/>
 ┃ ┣ 📜Refresh.js<br/>
 ┃ ┗ 📜TabPanel.js<br/>
 ┣ 📂pages<br/>
 ┃ ┣ 📂Auth<br/>
 ┃ ┃ ┣ 📜FindId.js<br/>
 ┃ ┃ ┣ 📜FindIdResult.js<br/>
 ┃ ┃ ┣ 📜FindPw.js<br/>
 ┃ ┃ ┗ 📜FindPwResult.js<br/>
 ┃ ┣ 📂Register<br/>
 ┃ ┃ ┣ 📜RegisterStep1.js<br/>
 ┃ ┃ ┣ 📜RegisterStep2.js<br/>
 ┃ ┃ ┗ 📜RegisterStep3.js<br/>
 ┃ ┣ 📂Verification<br/>
 ┃ ┃ ┣ 📜EmailVerif201.js<br/>
 ┃ ┃ ┣ 📜EmailVerif424.js<br/>
 ┃ ┃ ┗ 📜EmailVerif502.js<br/>
 ┃ ┣ 📜About.js<br/>
 ┃ ┣ 📜Analysis.js<br/>
 ┃ ┣ 📜Error.js<br/>
 ┃ ┣ 📜Explore.js<br/>
 ┃ ┣ 📜Guide.js<br/>
 ┃ ┣ 📜History.js<br/>
 ┃ ┣ 📜Home.js<br/>
 ┃ ┣ 📜Information.js<br/>
 ┃ ┣ 📜Login.js<br/>
 ┃ ┣ 📜Profile.js<br/>
 ┃ ┣ 📜Report.js<br/>
 ┃ ┗ 📜Search.js<br/>
 ┣ 📂utils<br/>
 ┃ ┣ 📜exportToExcel.js<br/>
 ┃ ┣ 📜getAuth.js<br/>
 ┃ ┣ 📜getCsrf.js<br/>
 ┃ ┣ 📜getImages.js<br/>
 ┃ ┣ 📜getScore.js<br/>
 ┃ ┣ 📜permissions.json<br/>
 ┃ ┣ 📜setCookie.js<br/>
 ┃ ┗ 📜translateDate.js<br/>
 ┣ 📜App.css<br/>
 ┣ 📜App.js<br/>
 ┣ 📜App.test.js<br/>
 ┣ 📜index.css<br/>
 ┣ 📜index.js<br/>
 ┣ 📜logo.svg<br/>
 ┣ 📜reportWebVitals.js<br/>
 ┗ 📜setupTests.js<br/>

 ### [Back-end]
 📦scanwich<br/>
 ┣ 📜asgi.py<br/>
 ┣ 📜settings.py<br/>
 ┣ 📜urls.py<br/>
 ┣ 📜wsgi.py<br/>
 ┗ 📜__init__.py<br/>
 📦users_origin<br/>
 ┣ 📜admin.py<br/>
 ┣ 📜apps.py<br/>
 ┣ 📜models.py<br/>
 ┣ 📜serializers.py<br/>
 ┣ 📜tests.py<br/>
 ┣ 📜urls.py<br/>
 ┣ 📜utils.py<br/>
 ┣ 📜views.py<br/>
 ┗ 📜__init__.py<br/>
📦analyze<br/>
 ┣ 📜asgi.py<br/>
 ┣ 📜settings.py<br/>
 ┣ 📜urls.py<br/>
 ┣ 📜wsgi.py<br/>
 ┗ 📜__init__.py<br/>
 📦engine<br/>
 ┣ 📜admin.py<br/>
 ┣ 📜apps.py<br/>
 ┣ 📜engine_controller.py<br/>
 ┣ 📜models.py<br/>
 ┣ 📜module_androguard.py<br/>
 ┣ 📜module_androguard_proto.py<br/>
 ┣ 📜module_Class.py<br/>
 ┣ 📜module_ClassScore.py<br/>
 ┣ 📜module_dexofuzzy.py<br/>
 ┣ 📜module_directory.py<br/>
 ┣ 📜module_fileClass.py<br/>
 ┣ 📜module_fileInformation.py<br/>
 ┣ 📜module_virustotal.py<br/>
 ┣ 📜serializers.py<br/>
 ┣ 📜tests.py<br/>
 ┣ 📜urls.py<br/>
 ┣ 📜views.py<br/>
 ┗ 📜__init__.py<br/>
