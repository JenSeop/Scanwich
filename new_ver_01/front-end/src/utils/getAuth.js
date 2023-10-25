export function getTokenFromCookie() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'u_token') {
      return cookie[1];
    }
  }
  return null;
}

export function getUidFromCookie() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'u_id') {
      return cookie[1];
    }
  }
  return null;
}

export function getEmailFromCookie() {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === 'u_email') { // 이메일 쿠키 이름에 따라 수정
      return decodeURIComponent(cookie[1]);
    }
  }
  return null;
}
