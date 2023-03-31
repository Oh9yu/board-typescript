const URL = 'http://10.58.52.219';

const AUTH = 8000;

const USERPAGE = 5000;

const API = {
  signin: `${URL}:${AUTH}/auth/signIn`,
  signup: `${URL}:${AUTH}/auth/user/signUp`,
  updatePW: `${URL}:${AUTH}/auth/user/password`,
  deleteAccount: `${URL}:${AUTH}/auth/user/account`,
  mypage: `${URL}:${USERPAGE}/userPage/myPage`,
};
export { API };
