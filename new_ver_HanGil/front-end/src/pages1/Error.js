import React from "react";
import { BackButton } from "../components1/BackButton";


export const Error = () => {
  return (
    <div className="error" style={errorStyle}>
      <div className="div-2" style={error_div_2}>
        <BackButton className="back-button-instance"/>
        <div className="text-wrapper-2" style={error_text_wrapper_2}>Error!</div>
        <p className="p" style={error_p}>페이지를 찾을 수 없습니다 :(</p>
        <div className="flexcontainer" style={error_flexcontainer}>
          <p className="text" style={error_text}>
            <span className="span" style={error_span}>
              404 Error, Page Not Found
              <br />
            </span>
          </p>
          <p className="text">
            <span className="span" style={error_span}>이전 페이지로 돌아가 다시 시도해주세요.</span>
          </p>
        </div>
        <div className="menu-bar" style={error_menu_bar}>
          <div className="menu" style={error_menu}>
          </div>
        </div>
      </div>
    </div>
  );
};

const errorStyle = {
  backgroundColor: '#373531',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
}

const error_div_2 = {
  backgroundColor: '#373531',
  height: '1080px',
  position: 'relative',
  width: '1920px',
  marginTop: '-100px'
}

const error_text_wrapper_2 = {
  color: '#29f57b',
  fontFamily: '"Noto Sans KR-Bold", Helvetica',
  fontSize: '100px',
  fontWeight: '700',
  height: '100px',
  left: '685px',
  letterSpacing: '0',
  lineHeight: '100px',
  position: 'absolute',
  textAlign: 'center',
  top: '339px',
  whiteSpace: 'nowrap'
}

const error_p = {
  color: '#ffffff',
  fontFamily: '"Noto Sans KR-Regular", Helvetica',
  fontSize: '32px',
  fontWeight: '400px',
  left: '690px',
  letterSpacing: 0,
  lineHeight: '32px',
  position: 'absolute',
  top: '478px',
  width: '546px'
}

const error_flexcontainer = {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '58px',
  left: '690px',
  position: 'absolute',
  top: '546px',
  width: '546px'
}

const error_text = {
  alignSelf: 'stretch',
  color: '#ffffff',
  fontFamily: '"Noto Sans KR-Regular", Helvetica',
  fontSize: '24px',
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: '24px',
  position: 'relative'
}

const error_span = {
  color: '#ffffff',
  fontFamily: '"Noto Sans KR-Regular", Helvetica',
  fontSize: '24px',
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: '24px'
}

const error_menu_bar = {
  alignItems: 'center',
  backgroundColor: '#373531',
  display: 'flex',
  gap: '1410px',
  justifyContent: 'space-around',
  left: 0,
  maxWidth: '1920px',
  overflow: 'hidden',
  padding: '0px 1580px 0px 80px',
  position: 'absolute',
  top: 0,
  width: '1920px'
}

const error_menu = {
  alignItems: 'center',
  display: 'flex',
  gap: '1400px',
  justifyContent: 'space-around',
  marginLeft: '-750px',
  marginRight: '-750px',
  position: 'relative',
  width: '1760px'
}