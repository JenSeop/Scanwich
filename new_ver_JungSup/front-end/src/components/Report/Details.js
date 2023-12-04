import * as React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Paper, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import File from './Details/File';
import CRC32 from './Details/CRC32';
import Android from './Details/Android';
import Signed from './Details/Signed';
import Activities from './Details/Activities/Activities';
import Permissions from './Details/Permissions/Permissions';
import Service from './Details/Service';
import Reciver from './Details/Reciver';
import IntentFilters from './Details/Intent_Filters';
import Provider from './Details/Provider';
import Library from './Details/Library';

export default function Info({data}) {
  return (
    <Paper elevation = {0} style={{ padding: '16px', margin: '0 auto', border: '1px solid #E0E0E0', marginBottom: '1vh' }}>
      {data?.file_info &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="File 카테고리에서는 Name, MD5, SHA256, Size를 제공합니다. Name은 APK 파일의 이름을 나타냅니다. MD5와 SHA256은 파일의 해시 값으로, 각각 MD5 알고리즘과 SHA-256 알고리즘을 통해 생성됩니다. Size는 파일의 크기를 나타냅니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='h6' fontWeight='bold'>FILE</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails sx={{overflowX: 'auto'}}>
            <File data={data.file_info} />
          </AccordionDetails>
        </Accordion>
      }
      {data?.androguard_data.apk?.crc32?.length != 0 &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="CRC32 카테고리에서는 APK 파일 내에 들어있는 파일들의 이름과 각 파일에 해당하는 CRC32 체크섬 값을 제공합니다. 이를 통해 파일의 손상 여부를 확인할 수 있습니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>CRC32</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails sx={{overflowX: 'auto'}}>
            <CRC32 data={data.androguard_data.apk.crc32} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {data?.androguard_data &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Android 카테고리에서는 Package Name, Min, Max, Target Version을 제공합니다. Package는 APK의 고유 식별자인 패키지 이름을 나타냅니다. Min Version은 APK가 실행되기 위해 필요한 Android 최소 버전, Max  Version은 APK가 호환되는 Android 버전을 나타내며 , Target Version은 애플리케이션이 타켓팅한 Android 버전을 나타냅니다. " followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Android</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Android data={data.androguard_data}/>
          </AccordionDetails>
        </Accordion>
      }
      {data?.androguard_data?.signed &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title=" Signed 카테고리에서는 signed v1, signed v2, signed v3를 제공합니다. 키가 존재할 경우 true를 표시하여 해당 APK가 서명되었음을 알 수 있습니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Signed</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Signed data={data.androguard_data.signed}/>
          </AccordionDetails>
        </Accordion>
      }
      {data?.androguard_data?.activities &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Activities 카테고리에서는 Main Activity와 APK 내의 모든 액티비티 정보를 제공합니다. 이를 통해 APK 화면 구성과 상호작용 방식을 파악할 수 있습니다. " followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Activities</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Activities data={data.androguard_data.activities} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {data?.androguard_data?.permissions &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Permissions 카테고리에서는 APK가 사용자에게 요구하는 권한 목록을 제공합니다. 사용자의 정보를 탈취하는 등의 위험한 권한은 경고 표시를 띄워서 사용자에게 주의를 줍니다. " followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Permissions</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Permissions data={data.androguard_data.permissions} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {(data?.androguard_data?.services?.length != 0) &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Service 카테고리에서는 APK의 서비스 목록을 제공합니다. 이를 통해 APK에서 실행되는 주요 기능을 확인할 수 있습니다. " followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Service</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Service data={data.androguard_data.services} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {(data?.androguard_data?.services?.length != 0) &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Receivers 카테고리에서는 APK의 리시버 목록을 제공합니다. 이를 통해 APK가 외부 이벤트에 따라 어떤 작업을 수행하는지 알 수 있습니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Receivers</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Reciver data={data.androguard_data.services} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {(data?.androguard_data?.services?.length != 0) &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Intent Filters 카테고리에서는 APK의 인텐트 필터 목록을 제공합니다. 이를 통해 APK가 내부 이벤트에 따라 어떤 작업을 수행하는지 알 수 있습니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Intent Filters</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <IntentFilters data={data.androguard_data.services} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {(data?.androguard_data?.services?.length != 0) &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Provider 카테고리에서는 APK의 프로바이더 목록을 제공합니다. 이를 통해 APK가 어떤 종류의 데이터를 제공하고 있는지를 확인할 수 있습니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Provider</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Provider data={data.androguard_data.services} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
      {(data?.androguard_data?.libraries?.length != 0) &&
        <Accordion elevation={0} sx={{}}>
          <Tooltip title="Library 카테고리에서는 APK의 라이브러리 목록을 제공합니다. 이를 통해 APK가 어떤 외부 라이브러리를 활용하고 있는지 확인할 수 있습니다." followCursor>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant='h6' fontWeight='bold'>Library</Typography>
            </AccordionSummary>
          </Tooltip>
          <AccordionDetails>
            <Library data={data.androguard_data.libraries} name={data.file_info.f_name}/>
          </AccordionDetails>
        </Accordion>
      }
    </Paper>
  );
}