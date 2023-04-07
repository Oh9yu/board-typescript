const getToken = () => {
  const token = localStorage.getItem('TOKEN')
    ? localStorage.getItem('TOKEN')
    : '';

  return token;
};

export default getToken;
