const getToken = (args: string) => {
  const token = localStorage.getItem(args) ? localStorage.getItem(args) : '';

  return token;
};

export default getToken;
