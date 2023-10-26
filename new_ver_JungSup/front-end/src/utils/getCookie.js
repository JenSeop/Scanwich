// getCookie.js

export function getCookie(name) {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(name + '='));

  if (cookieValue) {
    return cookieValue.split('=')[1];
  }

  return null; // 해당 쿠키가 없는 경우 null 반환
}
