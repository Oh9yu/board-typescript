//Docker
const URL = 'http://localhost';
const POST = 3005;
const AUTH = 3006;

const API = {
  signin: `${URL}:${AUTH}/auth/token`,
  signup: `${URL}:${AUTH}/auth/user`,
  updatePW: `${URL}:${AUTH}/auth/user/password`,
  deleteAccount: `${URL}:${AUTH}/auth/user`,
  userpage: `${URL}:${AUTH}/auth/userInfo/userPage`,
  category: `${URL}:${POST}/nb/category`,
  post: `${URL}:${POST}/nb/post`,
  comment: `${URL}:${POST}/nb/comment`,
  admin: `${URL}:${AUTH}/auth/admin`,
  likes: `${URL}:${POST}/nb/like`,
  alert: `${URL}:${POST}/nb/alert`,
  search: `${URL}:${POST}/nb/search`,
  upload: `${URL}:${AUTH}/image/upload`,
  user: `${URL}:${AUTH}/auth/user/info`,
};
export { API };
