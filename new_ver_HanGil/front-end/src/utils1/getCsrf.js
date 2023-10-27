import Cookies from 'js-cookie';

const getCsrf = () => {
  const csrfToken = Cookies.get('csrftoken');

  if (csrfToken) {
    return csrfToken;
  } else {
    console.error('CSRF 토큰을 찾을 수 없습니다.');
    return null;
  }
}

export default getCsrf;