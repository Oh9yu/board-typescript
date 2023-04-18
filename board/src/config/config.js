const URL = 'http://172.20.10.6';

const AUTH = 8000;

const USERPAGE = 5000;

const POST = 3000;

const API = {
  signin: `${URL}:${AUTH}/auth/token`,
  signup: `${URL}:${AUTH}/auth/user`,
  updatePW: `${URL}:${AUTH}/auth/user/password`,
  deleteAccount: `${URL}:${AUTH}/auth/user`,
  userpage: `${URL}:${USERPAGE}/userPage`,
  category: `${URL}:${POST}/nb/category`,
  post: `${URL}:${POST}/nb/post`,
  admin: `${URL}:${AUTH}/auth/admin`,
  likes: `${URL}:${POST}/nb/like`,
};
export { API };
