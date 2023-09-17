import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/style.css';
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';


const Register = () => {
  return (
    <div className='510792' style={style_510792}>
        <Button><Link to="/register1">전체 동의하기</Link></Button>
    <div className="element-user-register">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      {/* 가운데로 정렬 -> Grid 안 */}
    
      <div className="div">
        <div className="text-wrapper" style={{position: 'absolute', left:'0px'}}>Scanwich 약관 동의</div>
        <div className="text-wrapper-2" style={{position: 'absolute', left:'100px'}}>자세한 동의 내용 확인</div>
        <div className="overlap-wrapper">
          <div className="overlap">
           
            <Accordion transitionDuration="auto" className='scrolling' style={{
              position: 'absolute', left:'-500px'
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography>[필수]Scanwich 약관 및 개인정보 제공 동의</Typography>
              </AccordionSummary>
              <AccordionDetails style={{overflow: "scroll"}}>
              <Typography>
         
scanwich('scanwich.co.kr'이하 'scanwich')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.

○ 이 개인정보처리방침은 2023년 9월 1부터 적용됩니다.


제1조(개인정보의 처리 목적)

scanwich('scanwich.co.kr'이하 'scanwich')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 홈페이지 회원가입 및 관리

회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지 목적으로 개인정보를 처리합니다.


2. 재화 또는 서비스 제공

서비스 제공, 콘텐츠 제공, 본인인증을 목적으로 개인정보를 처리합니다.




제2조(개인정보의 처리 및 보유 기간)

① scanwich은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

1.홈페이지 회원가입 및 관리
홈페이지 회원가입 및 관리와 관련한 개인정보는 수집.이용에 관한 동의일로부터5년까지 위 이용목적을 위하여 보유.이용됩니다.
보유근거 : 개인정보를 수집하고 보유하게 되는 목적. 개인정보 수집 이유는 사이트와 서비스를 제공하고 관리하기 위해. 예를 들어, 사용자가 사이트를 이용하면서 발생하는 서비스 제공, 문의 응답, 서비스 개선 등의 목적으로 개인정보가 필요. 5년이라는 기간은 정보의 보존 필요성과 관련 있음. 5년이라는 기간은 법적, 회계적, 보안적 측면에서 합리적인 기간으로 여겨짐. 사용자와 지속적으로 상호작용하며, 예를 들어 서비스 이용 기록이나 문의 내역을 추적하고 관리해야하는 경우. 이렇게 서비스의 지속적인 개선과 보안을 위해서 정보를 일정 기간동안 보유하고 활용하면서, 사용자들의 개인정보 보호와 신뢰 유지.
관련법령 : 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
예외사유 :


제3조(처리하는 개인정보의 항목)

① scanwich은(는) 다음의 개인정보 항목을 처리하고 있습니다.

1. 홈페이지 회원가입 및 관리
필수항목 : 이름, 로그인ID, 비밀번호, 이메일, 서비스 이용 기록


제4조(개인정보의 파기절차 및 파기방법)


① scanwich은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
1. 법령 근거 :
2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜

③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기절차
scanwich은(는) 파기 사유가 발생한 개인정보를 선정하고, scanwich의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.

2. 파기방법

전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다


제5조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)



① 정보주체는 scanwich에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.

② 제1항에 따른 권리 행사는scanwich에 대해 「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 scanwich은(는) 이에 대해 지체 없이 조치하겠습니다.

③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.

⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

⑥ scanwich은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.



제6조(개인정보의 안전성 확보조치에 관한 사항)

scanwich은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

1. 개인정보에 대한 접근 제한
개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.

2. 접속기록의 보관 및 위변조 방지
개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의 정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는 민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다.
또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.

3. 문서보안을 위한 잠금장치 사용
개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.



제7조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)

scanwich 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용하지 않습니다.


제8조 (개인정보 보호책임자에 관한 사항)

① scanwich 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
성명 :Scanwich
직책 :Scanwich
직급 :Scanwich
연락처 :02-287-2421, business@sdev.or.kr,
※ 개인정보 보호 담당부서로 연결됩니다.


② 정보주체께서는 scanwich 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. scanwich 은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.

제9조(개인정보의 열람청구를 접수·처리하는 부서)
정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
scanwich은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.


제10조(정보주체의 권익침해에 대한 구제방법)



정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.

1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)
4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)

「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.

※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.

제11조(개인정보 처리방침 변경)

① 이 개인정보처리방침은 2023년 9월 1부터 적용됩니다.

② 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </div>
        </div>

      
      </div>
      </Grid>
    </div>
    </div>
  );
};

const style_510792 = {
  width: '420px',
  height: '592px',
  borderRadius: '40px',
  border: '1px solid black',
  margin: '0px auto',
  padding: '55px 37px',
  backgroundColor: 'White',
  display: 'flex',
  flexDirection: 'column'
}

export default Register;
