const useCreatedAt = time => {
  const now = new Date();
  const postDate = new Date(time);

  const nowDay = now.getDate();
  const postDay = postDate.getDate();

  const postTime = `${postDate.getFullYear()}.${(
    '0' +
    (postDate.getUTCMonth() + 1)
  ).slice(-2)}.${('0' + postDate.getUTCDate()).slice(-2)}`;

  const todayPost = () => {
    if (nowDay - postDay === 0) {
    }
  };

  return postTime;
};

export default useCreatedAt;
