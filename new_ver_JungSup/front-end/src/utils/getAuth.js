import axios from 'axios';
import { getCsrf } from './getCsrf.js';

export async function isValidate() {
  const u_id = getUidFromCookie();
  const u_email = getEmailFromCookie();
  const u_token = getTokenFromCookie();

  if (u_id || u_email || u_token) {
    const apiUrl = `/client/user/validity/token/${u_token}/`;
    try {
      const response = await axios.get(apiUrl);
      
      if (response.status === 200) {
        return response.data;
      } else {
        document.cookie = `u_id=${''}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        document.cookie = `u_email=${''}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        document.cookie = `u_token=${''}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        return false;
      }
    } catch (error) {
      document.cookie = `u_token=${''}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
      return false;
    }
  }
}

export function isLoggedIn () {
  const u_id = getUidFromCookie();
  const u_email = getEmailFromCookie();
  const u_token = getTokenFromCookie();

  return u_id !== null && u_email !== null && u_token !== null;
};

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

export function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(name + '='));

  if (cookieValue) {
    return cookieValue.split('=')[1];
  }

  return null;
}