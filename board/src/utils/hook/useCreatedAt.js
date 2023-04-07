const useCreatedAt = time => {
  const date = new Date(time);
  const postTime = `${date.getFullYear()}.${(
    '0' +
    (date.getUTCMonth() + 1)
  ).slice(-2)}.${('0' + date.getUTCDate()).slice(-2)}`;

  return postTime;
};

export default useCreatedAt;
