import Cookies from 'js-cookie';

const setCookie = (name, value, options) => {
  Cookies.set(name, value, options);
}

export default setCookie;
// setCookie('name', 'value', 365); -> 브라우저 끄면 삭제
// setCookie('name', 'value', { expires: 365 }); -> 365일간 유지