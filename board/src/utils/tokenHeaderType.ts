const tokenHeaderType = (token: string) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = token;
  }

  return headers;
};

export default tokenHeaderType;
