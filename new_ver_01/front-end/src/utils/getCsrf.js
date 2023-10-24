// getCsrf.js

// 쿠키 문자열에서 CSRF 토큰을 추출하는 함수
export function getCsrf() {
  const cookieString = document.cookie;
  const csrfTokenRegex = /csrftoken=([^;]+)/;
  const matches = csrfTokenRegex.exec(cookieString);

  if (matches && matches.length > 1) {
    return matches[1];
  } else {
    console.error('CSRF 토큰을 쿠키에서 찾을 수 없습니다.');
    return null;
  }
}
