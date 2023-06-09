// //B.E. server
// const URL = 'http://10.58.59.146';
// const AUTH = 8000;
// const POST = 3000;

//EC2
// const URL = process.env.REACT_APP_URL;
// const AUTH = 81;
// const POST = 80;

//Docker
const URL = 'http://localhost';
const POST = 3005;
const AUTH = 3006;

const USERPAGE = 5000;

const API = {
  signin: `${URL}:${AUTH}/auth/token`,
  signup: `${URL}:${AUTH}/auth/user`,
  updatePW: `${URL}:${AUTH}/auth/user/password`,
  deleteAccount: `${URL}:${AUTH}/auth/user`,
  userpage: `${URL}:${USERPAGE}/userPage`,
  category: `${URL}:${POST}/nb/category`,
  post: `${URL}:${POST}/nb/post`,
  comment: `${URL}:${POST}/nb/comment`,
  admin: `${URL}:${AUTH}/auth/admin`,
  likes: `${URL}:${POST}/nb/like`,
  alert: `${URL}:${POST}/nb/alert`,
  search: `${URL}:${POST}/nb/search`,
};
export { API };
