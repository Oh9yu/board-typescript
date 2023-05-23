const editFetch = (api: string, token: string, body: any) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  headers.Authorization = token;

  return fetch(`${api}`, {
    method: 'PATCH',
    headers: headers,
    body: JSON.stringify({ ...body }),
  }).then(response => response.json());
};

export default editFetch;
