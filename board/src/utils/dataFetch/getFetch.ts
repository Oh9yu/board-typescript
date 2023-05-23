const getFetch = async (api: string) => {
  return await fetch(`${api}`).then(res => res.json());
};

export default getFetch;
