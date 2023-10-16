import React from "react";

export const BackButton = () => {
  return (
    <div className="back-button" style={back_button}>
      <div className="text-wrapper" style={text_wrapper}>이전 페이지로 돌아가기</div>
    </div>
  );
};
const back_button = {
  backgroundColor: '#363431',
  border: '3px solid',
  borderColor: '#29f57b',
  borderRadius: '30px',
  height: '76px',
  position: 'relative',
  width: '553px',
  left: '683px',
  position: 'absolute',
  top: '800px',
}

const text_wrapper = {
  color: '#29f57b',
  fontFamily: '"Noto Sans KR-Regular", Helvetica',
  fontSize: '28px',
  fontWeight: 400,
  left: '132px',
  letterSpacing: 0,
  lineHeight: '28px',
  position: 'absolute',
  textAlign: 'center',
  top: '25px',
  whiteSpace: 'nowrap'
}
